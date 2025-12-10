import { Card, CardContent } from '@/components/ui/card.tsx';

type ChatBubbleProps = {
  message: string;
  isMe?: boolean;
};

export default function ChatBubble(props: ChatBubbleProps) {
  const { message, isMe = false } = props;

  return (
    <Card className={`shadow-none border-none bg-primary/3 lg:max-w-[50%] ${isMe && 'ml-auto bg-accent'}`}>
      <CardContent>
        <p className={'text-sm whitespace-pre-line'}>{message}</p>
      </CardContent>
    </Card>
  );
}
