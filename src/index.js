
export * from "./error";
export * from './mod_a';
export const isServer = typeof window === 'undefined'
export const isClient = typeof window !== 'undefined'
