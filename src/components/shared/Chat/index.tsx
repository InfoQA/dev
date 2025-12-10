import InputBar from '@/components/shared/InputBar';
import { Card, CardContent } from '@/components/ui/card.tsx';
import GroupChat from './GroupChat';

export default function Chat() {
  return (
    <Card className={'border-none h-full w-full lg:border lg:absolute lg:shadow-lg lg:bottom-5 lg:right-5 lg:h-[calc(100vh-7rem)] lg:w-[calc(100vw-8rem)] lg:rounded-4xl pt-6'}>
      <CardContent className={'card-content overflow-auto flex flex-col gap-5  pb-18'}>
        <GroupChat />
      </CardContent>
      <InputBar />
    </Card>
  );
}
