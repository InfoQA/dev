import { Card, CardContent } from '@/components/ui/card.tsx';

type ChatBubbleProps = {
  message: string;
  isMe?: boolean;
};

export default function ChatBubble(props: ChatBubbleProps) {
  const { message, isMe = false } = props;

  return (
    <Card className={`shadow-none border-0 bg-primary/3 lg:max-w-[50%] ${isMe && 'ml-auto bg-accent dark:bg-white/15'} dark:border  dark:border-white/35`}>
      <CardContent>
        <p className={'text-sm whitespace-pre-line dark:text-white'}>{message}</p>
      </CardContent>
    </Card>
  );
}
