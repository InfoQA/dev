import { postChat } from '@/api/chat';
import { useMutation } from '@tanstack/react-query';
import { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

export type Message = {
  id: string;
  message: string;
  isMe: boolean;
};

export default function useChatMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const initHasRunRef = useRef(false);

  const initMessageMutation = useMutation({
    mutationFn: (message: string) => postChat(message),
  });

  const sendMessageMutation = useMutation({
    mutationFn: (message: string) => postChat(message),
  });

  const addMessage = useCallback((message: string, isMe: boolean = true) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      message,
      isMe,
    };
    setMessages((prev) => [...prev, newMessage]);
  }, []);

  const clearMessages = () => {
    setMessages([]);
    initHasRunRef.current = false;
    initializeChat();
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

  const initializeChat = useCallback(() => {
    if (initHasRunRef.current) return;
    initHasRunRef.current = true;

    initMessageMutation.mutate('__init__', {
      onSuccess: (res) => {
        if (res?.data?.reply) {
          addMessage(res.data.reply, false);
        }
      },
      onError: (error) => {
        const description = error instanceof Error ? error.message : 'Terjadi kesalahan saat menginisialisasi chat.';
        toast.error('Gagal menginisialisasi chat', { description });
      },
    });
  }, [initMessageMutation, addMessage]);

  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsLoading(false);

      initializeChat();
    };

    fetchMessages();
  }, [initializeChat]);

  return {
    messages,
    addMessage,
    sendMessage,
    clearMessages,
    isLoading,
    isSending: sendMessageMutation.isPending,
  };
}
