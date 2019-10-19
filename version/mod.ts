const major = 0;
const minor = 3;
const patch = 0;
const semVersion = {
    Major: major,
    Minor: minor,
    Patch: patch,
};

export interface IModule {
    Version: string
    Major: number;
    Minor: number;
    Patch: number;
}

export function GetVersion(): IModule {
    return MakeModuleVersion("version");
}

export function MakeModuleVersion(moduleName: string): IModule {
    return {
        Version: `${moduleName}@v${semVersion.Major}.${semVersion.Minor}.${semVersion.Patch}`,
        Major: semVersion.Major,
        Minor: semVersion.Minor,
        Patch: semVersion.Patch,
    };
}