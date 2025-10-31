import {Card, CardContent} from "@/components/ui/card.tsx";
import ChatBubble from "@/components/shared/ChatBubble";
import InputBar from "@/components/shared/InputBar";

export default function Chat() {
    return (
        <Card
            className={'absolute shadow-lg bottom-5 right-5 h-[calc(100vh-7rem)]  w-[calc(100vw-8rem)] rounded-4xl pt-6'}>
            <CardContent
                className={'card-content overflow-auto flex flex-col gap-5  pb-18'}>
                <>
                    {/* default chatnya permta kali */}
                    <ChatBubble
                        message={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores doloremque ducimus eius fugit, ipsa maxime odit quaerat qui voluptates.'}
                    />

                    {/* ini chatnya */}
                    {
                        Array.from({length: 10}).map((_, index) => (
                            <ChatBubble
                                message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores doloremque ducimus eius fugit, ipsa maxime odit quaerat qui voluptates.'}
                                isMe={index % 2 === 0}/>
                        ))
                    }
                </>
            </CardContent>

            <InputBar/>
        </Card>
    )

}

