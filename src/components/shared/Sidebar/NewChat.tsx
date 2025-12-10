import { Button } from '@/components/ui/button';
import { DialogClose, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useChatContext } from '@/hooks/useChatContext';
import { DialogDescription } from '@radix-ui/react-dialog';

export default function NewChat() {
  const { clearMessages } = useChatContext();

  const handleConfirm = () => {
    clearMessages();
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
          <Button className='rounded-full px-7' onClick={handleConfirm}>
            Yes
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogHeader>
  );
}
