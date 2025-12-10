import dummyData from '@/assets/data.json';
import { Button } from '@/components/ui/button.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import { useChatContext } from '@/hooks/useChatContext';
import { ArrowUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function InputBar() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [inputValue, setInputValue] = useState('');
  const { addMessage } = useChatContext();

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addMessage(inputValue, true);

    setTimeout(() => {
      addMessage(dummyData.data.reply, false);
    }, 500);

    setInputValue('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
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
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          placeholder='Ada yang ingin ditanyakan?'
          className='placeholder:text-secondary 
          text-xs lg:text-sm min-h-2.5 bg-primary text-secondary resize-none overflow-hidden
          border-none lg:px-2 lg:py-2
          lg:min-h-10 lg:max-h-[200px]'
        />
        <Button variant='outline' size='icon' className='size-8 lg:size-9 rounded-full' onClick={handleSendMessage} disabled={!inputValue.trim()}>
          <ArrowUp />
        </Button>
      </div>
    </div>
  );
}
