import { Card, CardContent } from '@/components/ui/card.tsx';
import { Skeleton } from '@/components/ui/skeleton';

type ChatBubbleSkeletonProps = {
  isMe?: boolean;
};

export default function ChatBubbleSkeleton({ isMe = false }: ChatBubbleSkeletonProps) {
  return (
    <Card className={`shadow-none border-0  bg-primary/3 lg:max-w-[50%] ${isMe && 'ml-auto bg-accent/50 dark:bg-accent/5'} dark:border dark:border-white/35`}>
      <CardContent>
        <div className='space-y-2'>
          <Skeleton className={`h-4 w-full ${isMe && 'px-4 py-0.5'}`} />
          <Skeleton className='h-4 w-5/6' />
          <Skeleton className='h-4 w-4/6' />
        </div>
      </CardContent>
    </Card>
  );
}
