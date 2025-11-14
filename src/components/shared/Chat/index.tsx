import {Card, CardContent} from "@/components/ui/card.tsx";
import ChatBubble from "@/components/shared/ChatBubble";
import InputBar from "@/components/shared/InputBar";

export default function Chat() {
    return (
        <Card
            className={'border-none h-full w-full lg:border lg:absolute lg:shadow-lg lg:bottom-5 lg:right-5 lg:h-[calc(100vh-7rem)] lg:w-[calc(100vw-8rem)] lg:rounded-4xl pt-6'}>
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
                            <ChatBubble key={index}
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

