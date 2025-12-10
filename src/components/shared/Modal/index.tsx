import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog.tsx';
import type { ReactNode } from 'react';

type ModalProps = {
  trigger?: ReactNode;
  content: ReactNode;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export default function Modal(props: ModalProps) {
  const { trigger, content, className, open, onOpenChange } = props;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className={`${className}`}>{content}</DialogContent>
    </Dialog>
  );
}
