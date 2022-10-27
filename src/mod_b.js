import { isServer } from "./index";

export function mod_b() {
    if (isServer) {
        console.log('blablabla')
    }
}

function new_instance() {
    if (isServer) {
        return { server: true }
    }
    return { server: false }
}

export const instance = new_instance()