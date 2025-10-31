import {Card, CardContent} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Menu, PlusIcon, Sun} from "lucide-react";
import useIsMobile from "@/hooks/useIsMobile.ts";

export default function Sidebar() {
    const isMobile = useIsMobile()

    return (
        <div className={'fixed h-screen w-1/8 z-50 overflow-hidden '}>
            {
                isMobile ? <div className={'absolute inset-0 left-2 top-2'}>
                        <Button variant={"outline"} className={'rounded-full md:size-10'} size={'icon'}>
                            <Menu className={'md:size-5'}/>
                        </Button>
                    </div> :
                    <div
                        className={'flex absolute inset-0 items-center  lg:-translate-x-[45%] xl:-translate-x-[63%] '}>
                        <Card className={'w-46 h-55 bg-primary rounded-[2.5rem] p-2'}>
                            <CardContent
                                className={'w-full h-full flex flex-col justify-center items-end gap-7 px-1.5'}>
                                <Button variant={'outline'} className={'rounded-full'} size={"icon-lg"}>
                                    <PlusIcon className={'size-5'}/>
                                </Button>
                                <Button variant={'outline'} className={'rounded-full'} size={"icon-lg"}>
                                    <Sun className={'size-5'}/>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
            }
        </div>
    );
}