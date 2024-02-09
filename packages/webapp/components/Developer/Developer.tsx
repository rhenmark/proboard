import React, { PropsWithChildren } from 'react';
import RouterLink, {
    PagesPath,
} from '../router-link/RouterLink';

interface DeveloperProps {
    developer?: {
        username?: string;
    };
    preview?: boolean
}
type DeveloperLinkProps = DeveloperProps;

export function DeveloperRouteLink(
    props: PropsWithChildren<DeveloperLinkProps>
) {
    return (
        <RouterLink
            page={PagesPath.DEVELOPER}
            query={props.developer.username}
        >
            {props.children}
        </RouterLink>
    );
}

export default function Developer(props: DeveloperProps) {
    return (
        <DeveloperRouteLink developer={props.developer}>
            <div className={`flex flex-row gap-1 ${props.preview ? 'justify-center mt-2' : ''}`}>
                <span className='text-[12px]'>{`@${props.developer.username}`}</span>
            </div>
        </DeveloperRouteLink>
    );
}
