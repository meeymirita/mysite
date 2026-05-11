interface ImportMetaEnv {
    readonly VITE_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

// Declare module for CSS imports
declare module "*.css" {
    const content: string;
    export default content;
}