type ObjectValues<T> = T[keyof T]
type CategoryType = ObjectValues<typeof Category>

export const Category = {
    MOBILE: "mobile",
    WEB: "web" 
} as const

export type ProjectType = {
    name: string;
    link: string;
    description: Array<string>
    completionPercent: string
    category: CategoryType
}

export type ProjectListType = Array<ProjectType>
export const ProjectList: ProjectListType = [
    {
        name: "Simple Dashboard",
        link: "/",
        description: [
            "Simple Dashboard Landing",
            "Test Dashboard App",
        ],
        completionPercent: "30%",
        category: Category.WEB
    },
    {
        name: "Clone Nike App",
        link: "/",
        description: [
            "Simple Dashboard Landing",
            "Test Dashboard App",
        ],
        completionPercent: "5%",
        category: Category.MOBILE
    }
]