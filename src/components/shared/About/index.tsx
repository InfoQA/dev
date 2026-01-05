import INFO_APP from '@/components/constants';
import { DialogAbout } from '@/components/shared/About/DialogAbout.tsx';
import Modal from '@/components/shared/Modal';
import { Button } from '@/components/ui/button.tsx';
import useIsMobile from '@/hooks/useIsMobile.ts';

export default function About() {
  const isMobile = useIsMobile();

  return (
    !isMobile && (
      <div className={'relative'}>
        <div
          className={
            'w-45 h-12 rounded-2xl px-3 py-1  bg-primary dark:border dark:border-white/35 dark:bg-linear-to-br  dark:from-white/15 dark:via-black/60 dark:to-white/15 flex gap-2 items-center absolute top-5 right-5 shadow-lg justify-between'
          }
        >
          <p className={'text-sm text-secondary font-semibold'}>
            {INFO_APP.NAME} {INFO_APP.VERSION}
          </p>
          <Modal
            className='dark:border-white/35'
            trigger={
              <Button variant={'outline'} size={'icon-sm'} className={'text-sm rounded-full dark:border dark:border-white/30 dark:bg-primary dark:text-white'}>
                ?
              </Button>
            }
            content={<DialogAbout />}
          />
        </div>
      </div>
    )
  );
}
