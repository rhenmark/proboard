declare namespace global {
    namespace NodeJS {
        interface ProcessEnv {
            CONTENTFUL_SPACE: string | undefined
            CONTENTFUL_ACCESS_TOKEN: string | undefined
        }
    }
}