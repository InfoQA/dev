import {DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog.tsx";
import INFO_APP from "@/components/constants";

export function DialogAbout() {
    return (
        <DialogHeader>
            <DialogTitle className={"text-sm font-semibold"}>
                {INFO_APP.NAME} {INFO_APP.VERSION}
            </DialogTitle>
            <DialogDescription className={"text-xs mt-2"}>
                {INFO_APP.DESCRIPTION}
            </DialogDescription>
        </DialogHeader>
    )
}