import { DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog.tsx';
import INFO_APP from '@/components/constants';

export function DialogAbout() {
  return (
    <DialogHeader className='text-start'>
      <DialogTitle className={'text-base font-semibold'}>
        {INFO_APP.NAME} {INFO_APP.VERSION}
      </DialogTitle>
      <DialogDescription className={'text-sm mt-2'}>{INFO_APP.DESCRIPTION}</DialogDescription>
    </DialogHeader>
  );
}
