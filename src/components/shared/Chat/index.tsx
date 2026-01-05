import InputBar from '@/components/shared/InputBar';
import { Card, CardContent } from '@/components/ui/card.tsx';
import GroupChat from './GroupChat';

export default function Chat() {
  return (
    <Card
      className={
        'h-full w-full border-0 lg:border lg:absolute lg:shadow-lg lg:bottom-5 lg:right-5 lg:h-[calc(100vh-7rem)] lg:w-[calc(100vw-8rem)] lg:rounded-4xl pt-6 lg:dark:border lg:dark:border-white/35 dark:bg-primary dark:bg-linear-to-br dark:from-white/10 dark:via-primary dark:to-white/15 '
      }
    >
      <CardContent className={'card-content overflow-auto flex flex-col gap-5  pb-18 '}>
        <GroupChat />
      </CardContent>
      <InputBar />
    </Card>
  );
}
