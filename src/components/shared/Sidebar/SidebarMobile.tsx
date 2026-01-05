import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import { useTheme } from '@/stores/ThemeProvider';
import { DialogAbout } from '../About/DialogAbout';
import Modal from '../Modal';
import listDropDown from './list-drop-down';
import NewChat from './NewChat';

export default function SidebarMobile() {
  const { setTheme, theme } = useTheme();

  return (
    <div className={'absolute inset-0 left-2 top-2'}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={'outline'} className={'rounded-full md:size-10 dark:text-white dark:border-white/35 dark:bg-primary'} size={'icon'}>
            <Menu />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className={'w-48 dark:bg-primary dark:text-white'} align={'start'}>
          {listDropDown.map((item, index) => {
            const key = item.dialog ?? item.label ?? `item-${index}`;

            const onSelect = (e: Event) => {
              if (item.dialog === 'dark-mode') {
                setTheme(theme === 'dark' ? 'light' : 'dark');
                return;
              }
              e.preventDefault();
            };

            const trigger = (
              <DropdownMenuItem key={key} onSelect={onSelect} className='w-full dark:bg-accent/10'>
                <div className='flex gap-2 items-center w-full dark:text-white'>
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              </DropdownMenuItem>
            );

            if (item.dialog === 'new-chat') {
              return <Modal key={key} trigger={trigger} content={<NewChat />} />;
            }

            if (item.dialog === 'about') {
              return <Modal key={key} className={'p-5'} trigger={trigger} content={<DialogAbout />} />;
            }

            return trigger;
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
