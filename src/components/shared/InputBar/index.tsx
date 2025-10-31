import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ArrowUp} from "lucide-react";
import {useEffect, useRef} from "react";

export default function InputBar() {

    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const handleInput = () => {
        const el = textareaRef.current
        if (!el) return
        el.style.height = 'auto'
        el.style.height = el.scrollHeight + 'px'
    }

    useEffect(() => {
        handleInput()
    }, [])

    return (
        <div className={'absolute w-full flex justify-center bottom-5'}>
            <div
                className="shadow-lg w-1/2 flex flex-row justify-center items-end gap-2 bg-primary rounded-4xl p-2">
                <Textarea
                    autoFocus
                    ref={textareaRef}
                    rows={1}
                    onInput={handleInput}
                    placeholder="Ada yang ingin kamu tanyakan?"
                    className="
          bg-primary text-secondary resize-none overflow-hidden
          border-none px-2 py-2
          min-h-[40px] max-h-[200px]"
                />
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full "
                >
                    <ArrowUp/>
                </Button>
            </div>
        </div>
    )
}
