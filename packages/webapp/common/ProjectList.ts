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
    },
    {
        name: "Parcel Delivery",
        link: "/",
        description: [
            "Simple Parcel Delivery App",
            "Test Delivery App",
        ],
        completionPercent: "55%",
        category: Category.WEB
    },
    {
        name: "Listing App",
        link: "/",
        description: [
            "Simple Listing App",
            "Test Listing App",
            "Test Listing App",
        ],
        completionPercent: "85%",
        category: Category.WEB
    },
    {
        name: "Simple Dashboard",
        link: "/",
        description: [
            "Simple Dashboard Landing",
            "Test Dashboard App",
        ],
        completionPercent: "48%",
        category: Category.WEB
    },
    {
        name: "Clone Nike App",
        link: "/",
        description: [
            "Simple Dashboard Landing",
            "Test Dashboard App",
        ],
        completionPercent: "48%",
        category: Category.WEB
    },
    {
        name: "Parcel Delivery",
        link: "/",
        description: [
            "Simple Parcel Delivery App",
            "Test Delivery App",
        ],
        completionPercent: "66%",
        category: Category.WEB
    },
    {
        name: "Listing App",
        link: "/",
        description: [
            "Simple Listing App",
            "Test Listing App",
            "Test Listing App",
        ],
        completionPercent: "66%",
        category: Category.WEB
    }
]