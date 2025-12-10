import useChatMessages from '@/hooks/useChatMessages';
import type { ReactNode } from 'react';
import { ChatContext } from './chatContext';

export function ChatProvider({ children }: { children: ReactNode }) {
  const chatMethods = useChatMessages();

  return <ChatContext.Provider value={chatMethods}>{children}</ChatContext.Provider>;
}
