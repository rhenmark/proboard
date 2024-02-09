import Link from "next/link"
import React, { PropsWithChildren } from "react"

export enum PagesPath {
    DEVELOPER = "developer",
    PROJECT = "project"
}

export const PagesPathQuery = {
    developer: "developer"
} as const

type QueryRecord<T> = keyof T
interface RouterLinkProps {
    query: { [key in QueryRecord<typeof PagesPath>]: string }
    page: PagesPath
}

export default function RouterLink(props: PropsWithChildren<RouterLinkProps>) {
    return (
        <Link
            href={{
                pathname: `/${props.page}/[${PagesPathQuery[props.page]}]`,
                query: props.query
            }}
        >
            {props.children}
        </Link >
    )
}
