import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import { DialogAbout } from '../About/DialogAbout';
import Modal from '../Modal';
import listDropDown from './list-drop-down';
import NewChat from './NewChat';

export default function SidebarMobile() {

  return (
    <div className={'absolute inset-0 left-2 top-2'}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={'outline'} className={'rounded-full md:size-10'} size={'icon'}>
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={'w-48'} align={'start'}>
          {listDropDown.map((item, index) => {
            const trigger = (
              <DropdownMenuItem key={index} onSelect={(e) => e.preventDefault()} className='w-full'>
                <div className='flex gap-2 items-center w-full'>
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              </DropdownMenuItem>
            );

            if (item.dialog === 'new-chat') {
              return <Modal trigger={trigger} content={<NewChat />} />;
            }

            if (item.dialog === 'about') {
              return <Modal className={'p-5'} trigger={trigger} content={<DialogAbout />} />;
            }

            return trigger;
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
