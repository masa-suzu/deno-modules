const major = 0;
const minor = 4;
const patch = 0;
const moduleName = "versioning";

export const Version = MakeModuleVersion(moduleName, major, minor, patch);

export interface IModule {
    Version: string
    Major: number;
    Minor: number;
    Patch: number;
}

export function MakeModuleVersion(
    moduleName: string,
    major: number,
    minor: number,
    patch: number): IModule {
    return {
        Version: `${moduleName}@v${major}.${minor}.${patch}`,
        Major: major,
        Minor: minor,
        Patch: patch,
    };
}