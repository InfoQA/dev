import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/stores/ThemeProvider';
import { PlusIcon, Sun } from 'lucide-react';
import Modal from '../Modal';
import NewChat from './NewChat';

export default function SiderbarDesktop() {
  const { setTheme, theme } = useTheme();

  return (
    <div className={'flex absolute inset-0 items-center -translate-x-[45%] xl:-translate-x-[63%] 2xl:-translate-x-[43%]  '}>
      <Card className={'w-46 h-55 bg-primary rounded-[2.5rem] p-2  dark:border dark:border-white/35 dark:bg-linear-to-br dark:from-white/80 dark:via-black/80 dark:to-white/15'}>
        <CardContent className={'w-full h-full flex flex-col justify-center items-end gap-7 px-1.5'}>
          <Modal
            trigger={
              <Button variant={'outline'} className={'rounded-full dark:border dark:border-white/55 dark:bg-primary dark:text-white'} size={'icon-lg'}>
                <PlusIcon className={'size-5'} />
              </Button>
            }
            content={<NewChat />}
          />
          <Button variant={'outline'} className={'rounded-full dark:border dark:border-white/55 dark:bg-primary dark:text-white'} size={'icon-lg'} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            <Sun className={'size-5'} />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
