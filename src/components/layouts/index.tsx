import * as React from "react";

type LayoutDefaultProps = {
    children: React.ReactNode;
}

export default function LayoutDefault(props: LayoutDefaultProps) {
    const {children} = props;

    return (
        <div className={'min-h-screen bg-linear-to-br from-[#F3f4f3]/30 to-[#F3f4f3]/30'}>
            {children}
        </div>
    )
}