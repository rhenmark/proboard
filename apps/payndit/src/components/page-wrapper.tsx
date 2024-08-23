import { PropsWithChildren } from "react"
import PageHeader from "./page-header"

const PageWrapper = (props: PropsWithChildren) => {
    return (
        <div>
            <PageHeader />
            {props?.children}
        </div>
    )
}

export const withHeader = (WrappedComponent: any) => {
    return (props: any) => (
        <div>
             <PageHeader />
             {<WrappedComponent {...props} />}
        </div>
    )
}


export default PageWrapper