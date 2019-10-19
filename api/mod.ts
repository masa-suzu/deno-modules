import * as version from "../version/mod.ts";

export function GetModuleVersion(): version.IModule {
    return version.MakeModuleVersion("api");
}

export function Ping(): boolean {
    return true;
}

export function Hello(): string {
    return `Hello, Deno module!`
}