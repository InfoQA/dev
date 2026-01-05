import { postChat } from '@/api/chat';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

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

  const sendMessageMutation = useMutation({
    mutationFn: (message: string) => postChat(message),
  });

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

  const sendMessage = (message: string) => {
    const trimmed = message.trim();
    if (!trimmed) return;

    addMessage(trimmed, true);

    sendMessageMutation.mutate(trimmed, {
      onSuccess: (res) => {
        if (res?.data?.reply) {
          addMessage(res.data.reply, false);
        }
      },
      onError: (error) => {
        const description = error instanceof Error ? error.message : 'Terjadi kesalahan saat mengirim pesan.';
        toast.error('Gagal mengirim pesan', { description });
      },
    });
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
    sendMessage,
    clearMessages,
    defaultMessage: DEFAULT_MESSAGE,
    isLoading,
    isSending: sendMessageMutation.isPending,
  };
}
