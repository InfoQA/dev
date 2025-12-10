import { type Message } from '@/hooks/useChatMessages';
import { createContext } from 'react';

export type ChatContextType = {
  messages: Message[];
  addMessage: (message: string, isMe?: boolean) => void;
  clearMessages: () => void;
  defaultMessage: string;
};

export const ChatContext = createContext<ChatContextType | undefined>(undefined);
