import { Button } from '@/components/ui/button.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import { ArrowUp } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function InputBar() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
  };

  useEffect(() => {
    handleInput();
  }, []);

  return (
    <div className={'absolute w-full flex justify-center bottom-5'}>
      <div className='shadow-lg w-3/4 lg:w-1/2 flex flex-row justify-center items-end gap-2 bg-primary rounded-4xl p-2'>
        <Textarea
          autoFocus
          ref={textareaRef}
          rows={1}
          onInput={handleInput}
          placeholder='Ada yang ingin ditanyakan?'
          className='placeholder:text-secondary 
          text-xs lg:text-sm min-h-2.5 bg-primary text-secondary resize-none overflow-hidden
          border-none lg:px-2 lg:py-2
          lg:min-h-10 lg:max-h-[200px]'
        />
        <Button variant='outline' size='icon' className='size-8 lg:size-9 rounded-full'>
          <ArrowUp />
        </Button>
      </div>
    </div>
  );
}
