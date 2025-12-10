import ChatBubble from '@/components/shared/ChatBubble';
import InputBar from '@/components/shared/InputBar';
import { Card, CardContent } from '@/components/ui/card.tsx';

export default function Chat() {
  return (
    <Card className={'border-none h-full w-full lg:border lg:absolute lg:shadow-lg lg:bottom-5 lg:right-5 lg:h-[calc(100vh-7rem)] lg:w-[calc(100vw-8rem)] lg:rounded-4xl pt-6'}>
      <CardContent className={'card-content overflow-auto flex flex-col gap-5  pb-18'}>
        <>
          {/* default chatnya permta kali */}
          <ChatBubble
            message={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
            
            1. Lorem Amet — Consectetur adipiscing elit.
            2. Dolor Sit — Sed do eiusmod tempor incididunt.
            3. Elit Viverra — Ut enim ad minim veniam.
            4. Tempor Magna — Duis aute irure dolor in reprehenderit.`}
          />

          {/* ini chatnya */}
          {Array.from({ length: 1 }).map((_, index) => (
            <ChatBubble key={index} message={'1'} isMe={index % 2 === 0} />
          ))}
        </>
      </CardContent>
      <InputBar />
    </Card>
  );
}
