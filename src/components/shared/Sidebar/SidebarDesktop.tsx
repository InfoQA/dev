import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlusIcon, Sun } from 'lucide-react';
import Modal from '../Modal';
import NewChat from './NewChat';

export default function SiderbarDesktop() {
  return (
    <div className={'flex absolute inset-0 items-center -translate-x-[45%] xl:-translate-x-[63%] 2xl:-translate-x-[43%]  '}>
      <Card className={'w-46 h-55 bg-primary rounded-[2.5rem] p-2'}>
        <CardContent className={'w-full h-full flex flex-col justify-center items-end gap-7 px-1.5'}>
          <Modal
            trigger={
              <Button variant={'outline'} className={'rounded-full'} size={'icon-lg'}>
                <PlusIcon className={'size-5'} />
              </Button>
            }
            content={<NewChat />}
          />
          <Button variant={'outline'} className={'rounded-full'} size={'icon-lg'}>
            <Sun className={'size-5'} />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
