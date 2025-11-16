import { Card, CardContent } from "@/components/ui/card.tsx";

type ChatBubbleProps = {
  message: string;
  isMe?: boolean;
};

export default function ChatBubble(props: ChatBubbleProps) {
  const { message, isMe = false } = props;

  return (
    <Card
      className={`shadow-none border-none bg-primary/3 lg:max-w-[50%] ${isMe && "ml-auto"}`}
    >
      <CardContent>
        <p className={"text-sm"}>{message}</p>
      </CardContent>
    </Card>
  );
}
