import React, { PropsWithChildren } from 'react';
import RouterLink, {
    PagesPath,
} from '../RouterLink/RouterLink';

interface DeveloperProps {
    developer: {
        username: string;
    };
}
type DeveloperLinkProps = DeveloperProps;

export function DeveloperRouteLink(
    props: PropsWithChildren<DeveloperLinkProps>
) {
    return (
        <RouterLink
            page={PagesPath.DEVELOPER}
            query={{ [PagesPath.DEVELOPER]: props.developer.username }}
        >
            {props.children}
        </RouterLink>
    );
}

export default function Developer(props: DeveloperProps) {
    return (
        <DeveloperRouteLink developer={props.developer}>
            <div className='flex flex-row gap-1'>
                <span className="material-symbols-outlined">
                    person
                </span>
                {`@${props.developer.username}`}
            </div>
        </DeveloperRouteLink>
    );
}
