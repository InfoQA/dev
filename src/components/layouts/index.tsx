import { type ReactNode } from 'react';

type LayoutDefaultProps = {
  children: ReactNode;
};

export default function LayoutDefault(props: LayoutDefaultProps) {
  const { children } = props;

  return <div className={'h-screen overflow-hidden bg-secondary/30'}>{children}</div>;
}
