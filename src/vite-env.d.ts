/// <reference types="vite/client" />

interface ImportMetaEnv {
    /**
     * The application title.
     */
    readonly VITE_APP_TITLE: string

    /**
     * The supabase Project URL.
     */
    readonly VITE_SUPABASE_PROJECT_URL: string

    /**
     * The supabase API Key.
     */
    readonly VITE_SUPABASE_API_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
