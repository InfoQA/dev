import useIsMobile from '@/hooks/useIsMobile.ts';
import { Activity } from 'react';
import SiderbarDesktop from './SidebarDesktop.tsx';
import SidebarMobile from './SidebarMobile.tsx';

export default function Sidebar() {
  const isMobile = useIsMobile();

  return (
    <div className={'fixed h-screen w-1/8 z-50 '}>
      <Activity mode={isMobile ? 'visible' : 'hidden'}>
        <SidebarMobile />
      </Activity>

      <Activity mode={isMobile ? 'hidden' : 'visible'}>
        <SiderbarDesktop />
      </Activity>
    </div>
  );
}
