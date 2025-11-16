import {Card, CardContent} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Menu, PlusIcon, Sun} from "lucide-react";
import useIsMobile from "@/hooks/useIsMobile.ts";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import listDropDown from "./list-drop-down.tsx";
import Modal from "@/components/shared/Modal";
import {DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog.tsx";
import INFO_APP from "@/components/constants";

export default function Sidebar() {
    const isMobile = useIsMobile()

    return (
        <div className={'fixed h-screen w-1/8 z-50'}>
            {
                isMobile ? <div className={'absolute inset-0 left-2 top-2'}>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant={"outline"} className={'rounded-full md:size-10'} size={'icon'}>
                                    <Menu/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className={'w-48'} align={'start'}>
                                {listDropDown.map((item, index) => {
                                    const trigger = (
                                        <DropdownMenuItem
                                            key={index}
                                            onSelect={(e) => e.preventDefault()}
                                            className="w-full"
                                        >
                                            <div className="flex gap-2 items-center w-full">
                                                {item.icon}
                                                <span>{item.label}</span>
                                            </div>
                                        </DropdownMenuItem>
                                    );

                                    if (item.dialog === "new-chat") {
                                        return (
                                            <Modal
                                                trigger={trigger}
                                                content={
                                                    <h1>
                                                        Test
                                                    </h1>
                                                }
                                            />
                                        );
                                    }

                                    if (item.dialog === "about") {
                                        return (
                                            <Modal
                                                className={'p-5'}
                                                trigger={trigger}
                                                content={
                                                    <DialogHeader>
                                                        <DialogTitle className={'text-start text-sm font-semibold'}>
                                                            {INFO_APP.NAME}
                                                        </DialogTitle>
                                                        <DialogDescription className={'text-start text-xs mt-2'}>
                                                            {INFO_APP.DESCRIPTION}
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                }
                                            />
                                        );
                                    }

                                    return trigger;
                                })}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div> :
                    <div
                        className={'flex absolute inset-0 items-center  lg:-translate-x-[45%] xl:-translate-x-[63%]'}>
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