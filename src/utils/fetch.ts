export class FetchAPIError extends Error {
  status: number;
  body: unknown;

  constructor(message: string, status: number, body: unknown) {
    super(message);
    this.name = 'FetchAPIError';
    this.status = status;
    this.body = body;
  }
}

const mergeHeaders = (base: HeadersInit | undefined, extra: HeadersInit | undefined) => {
  const headers = new Headers(base);
  if (!extra) return headers;

  const extraHeaders = new Headers(extra);
  extraHeaders.forEach((value, key) => headers.set(key, value));
  return headers;
};

export const fetchAPI = async <T = unknown>(url: string, options?: RequestInit): Promise<T> => {
  const headers = mergeHeaders(
    {
      'Content-Type': 'application/json',
    },
    options?.headers
  );

  const res = await fetch(url, {
    ...options,
    headers,
  });

  const contentType = res.headers.get('content-type') ?? '';
  let body: unknown;

  try {
    if (contentType.includes('application/json')) {
      body = await res.json();
    } else {
      body = await res.text();
    }
  } catch {
    body = null;
  }

  if (!res.ok) {
    const messageFromBody = typeof body === 'object' && body !== null && 'message' in body ? String((body as { message?: unknown }).message) : undefined;

    const message = messageFromBody || `Request failed (${res.status})`;
    throw new FetchAPIError(message, res.status, body);
  }

  return body as T;
};
