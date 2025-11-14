import INFO_APP from "@/components/constants";
import {Button} from "@/components/ui/button.tsx";
import useIsMobile from "@/hooks/useIsMobile.ts";

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

                    <Button variant={'outline'} size={'icon-sm'} className={'text-sm rounded-full'}>
                        ?
                    </Button>
                </div>
            </div>
        )

    )
}