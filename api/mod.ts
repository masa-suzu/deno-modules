import * as versioning from "../versioning/mod.ts";

export const Version = versioning.MakeModuleVersion("api", 0, 4, 0);

export function Ping(): boolean {
    return true;
}

export function Hello(): string {
    return `Hello, Deno module!`
}