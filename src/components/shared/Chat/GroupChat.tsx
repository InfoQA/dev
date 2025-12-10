import { useChatContext } from '@/hooks/useChatContext';
import ChatBubble from '../ChatBubble';
import ChatBubbleSkeleton from '../ChatBubble/ChatBubbleSkeleton';

export default function GroupChat() {
  const { messages, defaultMessage, isLoading } = useChatContext();

  return (
    <>
      {isLoading ? (
        <>
          <ChatBubbleSkeleton />
          <ChatBubbleSkeleton isMe />
          <ChatBubbleSkeleton />
        </>
      ) : (
        <>
          {/* default chatnya pertama kali*/}
          <ChatBubble message={defaultMessage} />

          {/* ini chatnya - dari state */}
          {messages.map((msg) => (
            <ChatBubble key={msg.id} message={msg.message} isMe={msg.isMe} />
          ))}
        </>
      )}
    </>
  );
}
