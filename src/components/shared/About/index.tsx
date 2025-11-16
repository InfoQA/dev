import INFO_APP from "@/components/constants";
import {Button} from "@/components/ui/button.tsx";
import useIsMobile from "@/hooks/useIsMobile.ts";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.tsx";

export default function About() {
    const isMobile = useIsMobile()

    return (
        !isMobile && (
            <div className={'relative'}>
                <div
                    className={'w-45 h-12 rounded-2xl px-3 py-1  bg-primary flex gap-2 items-center absolute top-5 right-5 shadow-lg justify-between'}>
                    <p className={'text-sm text-secondary font-semibold'}>
                        {INFO_APP.NAME} {INFO_APP.VERSION}
                    </p>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant={'outline'} size={'icon-sm'} className={'text-sm rounded-full'}>
                                ?
                            </Button>
                        </DialogTrigger>
                        <DialogContent className={'p-8 lg:max-w-xl'}>
                            <DialogHeader>
                                <DialogTitle className={'text-sm font-semibold'}>
                                    {INFO_APP.NAME}
                                </DialogTitle>
                                <DialogDescription className={'text-xs mt-2'}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </DialogDescription>
                            </DialogHeader>

                        </DialogContent>
                    </Dialog>

                </div>
            </div>
        )

    )
}