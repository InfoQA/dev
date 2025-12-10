import { ChatContext } from '@/stores/chatContext';
import { useContext } from 'react';

export function useChatContext() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
}
