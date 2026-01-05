import { type Message } from '@/hooks/useChatMessages';
import { createContext } from 'react';

export type ChatContextType = {
  messages: Message[];
  addMessage: (message: string, isMe?: boolean) => void;
  sendMessage: (message: string) => void;
  clearMessages: () => void;
  defaultMessage: string;
  isLoading: boolean;
  isSending: boolean;
};

export const ChatContext = createContext<ChatContextType | undefined>(undefined);
