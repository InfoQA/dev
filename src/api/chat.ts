import { API_URL } from '@/components/constants';
import { fetchAPI } from '@/utils/fetch';

const postChat = async (message: string) => {
  const res = await fetchAPI(`${API_URL}/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });
  return res;
};

export { postChat };
