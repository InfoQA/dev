import { useChatContext } from '@/hooks/useChatContext';
import ChatBubble from '../ChatBubble';

export default function GroupChat() {
  const { messages, defaultMessage } = useChatContext();

  return (
    <>
      {/* default chatnya pertama kali*/}
      <ChatBubble message={defaultMessage} />

      {/* ini chatnya - dari state */}
      {messages.map((msg) => (
        <ChatBubble key={msg.id} message={msg.message} isMe={msg.isMe} />
      ))}
    </>
  );
}
