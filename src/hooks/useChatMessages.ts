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

  const { mutate: initChatMutate } = useMutation({
    mutationFn: (message: string) => postChat(message),
  });

  const { mutate: sendChatMutate, isPending: isSending } = useMutation({
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

  const initializeChat = useCallback(() => {
    if (initHasRunRef.current) return;
    initHasRunRef.current = true;

    initChatMutate('__init__', {
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
  }, [addMessage, initChatMutate]);

  const clearMessages = () => {
    setMessages([]);
    initHasRunRef.current = false;
    initializeChat();
  };

  const sendMessage = (message: string) => {
    const trimmed = message.trim();
    if (!trimmed) return;

    addMessage(trimmed, true);

    sendChatMutate(trimmed, {
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

      initializeChat();
    };

    fetchMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    messages,
    addMessage,
    sendMessage,
    clearMessages,
    isLoading,
    isSending,
  };
}
