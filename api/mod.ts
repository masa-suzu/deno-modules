import * as versioning from "../versioning/mod.ts";

export const Version = versioning.Version("api");

export function Ping(): boolean {
    return true;
}

export function Hello(): string {
    return `Hello, Deno module!`
}