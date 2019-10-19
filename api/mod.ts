import * as version from "../version/mod.ts";

export function GetVersion(): version.ISemanticVersioning {
    let v = version.GetVersion();
    return {
        Version: `api@v${v.Major}.${v.Minor}.${v.Patch}`,
        Major: v.Major,
        Minor: v.Minor,
        Patch: v.Patch,
    };
}

export function Ping(): boolean {
    return true;
}