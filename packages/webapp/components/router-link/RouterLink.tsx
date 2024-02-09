import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

export enum PagesPath {
    DEVELOPER = 'developer',
    PROJECT = 'project',
}

export const PagesPathQuery = {
    developer: 'developer',
} as const;

type QueryRecord<T> = keyof T;
interface RouterLinkProps {
    query: string
    page: PagesPath;
}

export default function RouterLink(props: PropsWithChildren<RouterLinkProps>) {
    return <Link href={`/${props.page}/${props.query}`}>{props.children}</Link>;
}
