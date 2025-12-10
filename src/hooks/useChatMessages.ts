import { useEffect, useState } from 'react';

export type Message = {
  id: string;
  message: string;
  isMe: boolean;
};

const DEFAULT_MESSAGE = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 

1. Lorem Amet — Consectetur adipiscing elit.
2. Dolor Sit — Sed do eiusmod tempor incididunt.
3. Elit Viverra — Ut enim ad minim veniam.
4. Tempor Magna — Duis aute irure dolor in reprehenderit.`;

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

  // Simulasi fetch data dari API/JSON
  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoading(true);
      // Simulasi delay loading (1.5 detik)
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
