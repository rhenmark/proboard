import React from "react";
import Image from 'next/image';

export const ProfileAvatar = (props: any) => {
    let classNames = `h-32 w-32 rounded-full bg-black grid place-self-center md:place-self-end md:self-start relative ${props?.className} hover:shadow-lg`
    if (props.small) {
        classNames = `!h-8 !w-8 ${classNames}`
    }

    if (!props?.url) {
        return <div className={classNames} />;
    }

    return (
        <div className={classNames}>
            <Image
                src={props?.url}
                alt="avatar"
                className="object-cover rounded-full overflow-hidden absolute"
                fill
            />
        </div>
    );
};