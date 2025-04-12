
export interface Build {
    date: number
    branch: string
    paperRef: string
    id: string
    changes: Change[]
    files: File[]
}

export interface Change {
    shortCommitHash: string
    commit: string
    commitHash: string
}

export interface File {
    fileName: string
    id: string
}

export interface BranchInfo {
    [key: string]: string[]
}


export function resolveDownload(slug: string, build: string, file: string) {
    return `https://api.infernalsuite.com/v1/projects/${slug}/${build}/download/${file}`
}


export function getVersionsSortedDescending(branchInfo: BranchInfo) {
    if (!branchInfo) return [];
    const versions = Object.keys(branchInfo);
    return versions.sort((b, a) => {

        const aParts = a.split('.').map(Number);
        const bParts = b.split('.').map(Number);
        for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
            const aPart = aParts[i] || 0;
            const bPart = bParts[i] || 0;
            if (aPart !== bPart) {
                return aPart - bPart;
            }
        }
        return 0;
    });
}

export function findNewestSafeVersion(branchInfo: BranchInfo) {
    const versions = getVersionsSortedDescending(branchInfo);

    for (const version of versions) {
        const isSafe = branchInfo[version].includes("main");
        if (isSafe) {
            return version;
        }
    }
    return versions[0]
}

//Well, at least somewhat safe
const safeBranches = ["paper_upstream", "main"]

export function getBranchSuffix(branch: string): string {
    if(branch == "develop")
        return "(Experimental)"

    if(!safeBranches.includes(branch))
        return "(Dangerous)"
    return ""
}

export function findOptimalBranch(branches: string[]): string {
    if(branches.includes("paper_upstream")) {
        return "paper_upstream"
    } else if (branches.includes("main")) {
        return "main"
    } else if (branches.includes("develop")) {
        return "develop"
    } else {
        return branches[0]
    }
}
