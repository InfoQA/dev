import INFO_APP from '@/components/constants';
import { DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog.tsx';

export function DialogAbout() {
  return (
    <DialogHeader className='text-start'>
      <DialogTitle className={'text-base font-semibold dark:text-white'}>
        {INFO_APP.NAME} {INFO_APP.VERSION}
      </DialogTitle>
      <DialogDescription className={'text-sm mt-2 dark:text-white'}>{INFO_APP.DESCRIPTION}</DialogDescription>
    </DialogHeader>
  );
}
