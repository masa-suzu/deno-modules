const major = 0;
const minor = 5;
const patch = 0;

export const Version = GetVersion(major, minor, patch);

export interface IModule {
    Version: string
    Name: string;
    Major: number;
    Minor: number;
    Patch: number;
}

export function GetVersion(
    major: number,
    minor: number,
    patch: number): (s: string) => IModule {
    return (moduleName) => {
        return {
            Version: `${moduleName}@v${major}.${minor}.${patch}`,
            Name: moduleName,
            Major: major,
            Minor: minor,
            Patch: patch,
        };
    };
}
