import { API_URL } from '@/components/constants';
import { fetchAPI } from '@/utils/fetch';

export type PostChatResponse = {
  message: string;
  data: {
    message: string;
    reply: string;
  };
};

const postChat = async (message: string) => {
  const res = await fetchAPI<PostChatResponse>(`${API_URL}/chat`, {
    method: 'POST',
    body: JSON.stringify({ message }),
  });
  return res;
};

export { postChat };
