import { ThemeProvider } from '@/stores/ThemeProvider';
import { type ReactNode } from 'react';

type LayoutDefaultProps = {
  children: ReactNode;
};

export default function LayoutDefault(props: LayoutDefaultProps) {
  const { children } = props;

  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <div className={'h-screen overflow-hidden bg-secondary/30 dark:bg-background'}>{children}</div>
    </ThemeProvider>
  );
}
