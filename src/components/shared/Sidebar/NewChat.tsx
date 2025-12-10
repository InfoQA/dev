import { Button } from '@/components/ui/button';
import { DialogClose, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { DialogDescription } from '@radix-ui/react-dialog';

type NewChatProps = {
  onConfirm?: () => void;
};

export default function NewChat({ onConfirm }: NewChatProps) {
  const handleConfirm = () => {
    onConfirm?.();
  };

  return (
    <DialogHeader className='text-start'>
      <DialogTitle className='font-semibold text-base'>New Chat</DialogTitle>
      <DialogDescription className='text-sm my-2'>New chat means clear chat, are you sure?</DialogDescription>
      <DialogFooter className='flex flex-row justify-end mt-2'>
        <DialogClose asChild>
          <Button className='rounded-full' variant={'outline'}>
            Cancel
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button className='rounded-full px-7' onClick={handleConfirm}>Yes</Button>
        </DialogClose>
      </DialogFooter>
    </DialogHeader>
  );
}
