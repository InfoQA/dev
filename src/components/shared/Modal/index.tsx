import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog.tsx";
import * as React from "react";

type ModalProps = {
  trigger: React.ReactNode;
  content: React.ReactNode;
  className?: string;
};

export default function Modal(props: ModalProps) {
  const { trigger, content, className } = props;

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={`p-8 lg:max-w-xl ${className}`}>
        {content}
      </DialogContent>
    </Dialog>
  );
}
