/// <reference types="vite/client" />

interface ImportMetaEnv {
    /**
     * The application title.
     */
    readonly VITE_APP_TITLE: string

    /**
     * The Facebook URL.
     */
    readonly VITE_FACEBOOK_URL: string

    /**
     * The Instagram URL.
     */
    readonly VITE_INSTAGRAM_URL: string

    /**
     * The Twitter URL.
     */
    readonly VITE_TWITTER_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
