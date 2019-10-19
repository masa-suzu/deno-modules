const major = 0;
const minor = 1;
const patch = 0;
const semVersion = {
    Version: `version@v${major}.${minor}.${patch}`,
    Major: major,
    Minor: minor,
    Patch: patch,
};

export interface ISemanticVersioning {
    Version: string
    Major: number;
    Minor: number;
    Patch: number;
}

export function GetVersion(): ISemanticVersioning {
    return semVersion;
}