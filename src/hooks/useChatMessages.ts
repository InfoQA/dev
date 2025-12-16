import { useEffect, useState } from 'react';

export type Message = {
  id: string;
  message: string;
  isMe: boolean;
};

const DEFAULT_MESSAGE = `Halo, selamat datang di Chatbot Panduan Teknik Informatika.
Silakan pilih menu berikut:

1. Informasi Kurikulum dan Mata Kuliah
2. MBKM
3. Informasi Umum
`;

export default function useChatMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const addMessage = (message: string, isMe: boolean = true) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      message,
      isMe,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsLoading(false);
    };

    fetchMessages();
  }, []);

  return {
    messages,
    addMessage,
    clearMessages,
    defaultMessage: DEFAULT_MESSAGE,
    isLoading,
  };
}
