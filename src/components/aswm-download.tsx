import React, {useEffect, useMemo, useState} from "react";
import styles from './downloads.module.css';
import {
    BranchInfo,
    Build,
    findNewestSafeVersion,
    findOptimalBranch, getBranchSuffix,
    getVersionsSortedDescending
} from "@site/src/lib/download-api";
import {ASWMBuild} from "@site/src/components/aswm-build";

export default function AswmDownload({ slug, github }: { slug: string, github: string }) {
    const [branchInfo, setBranchInfo] = useState<BranchInfo | undefined>();
    const [selectedVersion, setSelectedVersion] = useState<string>();
    const sortedVersions = useMemo(() => getVersionsSortedDescending(branchInfo), [branchInfo]);

    const [selectedBranch, setSelectedBranch] = useState<string>();
    const [buildInfo, setBuildInfo] = useState<Build[]>();

    const optimalVersion = useMemo(() => branchInfo != undefined ? findNewestSafeVersion(branchInfo) : undefined, [branchInfo])
    const newerThenOptimal = useMemo(() => sortedVersions.filter((e) => sortedVersions.indexOf(e) < sortedVersions.indexOf(optimalVersion)), [optimalVersion, sortedVersions])

    const latestBuilds = useMemo(() => {
        if(!buildInfo || !selectedBranch) return []

        return buildInfo.filter((it) => it.branch === selectedBranch).sort((b, a) => a.date -  b.date).slice(0, 10)
    }, [buildInfo, selectedBranch]);

    useEffect(() => {
        fetch("https://api.infernalsuite.com/v1/projects/" + slug + "/branches").then((res) => res.json()).then((res) => {
            setBranchInfo(res)


            const version = findNewestSafeVersion(res)
            setSelectedVersion(version)
            const branches = res[version]
            setSelectedBranch(findOptimalBranch(branches))
        })
    }, [slug])

    useEffect(() => {
        if(!selectedVersion || !selectedBranch) return

        setBuildInfo(undefined)
        fetch("https://api.infernalsuite.com/v1/projects/" + slug + "/mcVersion/" + selectedVersion).then((res) => res.json()).then((res) => {
            setBuildInfo(res)
        })

    }, [selectedVersion]);

    function changeVersion(e: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedVersion(e.target.value)
        setSelectedBranch(findOptimalBranch(branchInfo[e.target.value]))
    }


    return <>
        {newerThenOptimal.length > 0 && <div className={"alert alert--warning margin-bottom--md"}>
            We have experimental builds for newer Minecraft versions available({newerThenOptimal.join(", ")}), however use them with caution! You can select them in the version switcher.
        </div>}

        <div className={styles.downloadContainer}>
            <div className={styles.downloadHeader}>
                <p>Latest builds</p>

                <div className={styles.downloadHeaderSelect}>
                    <select id="version" value={selectedVersion} onChange={(e) => changeVersion(e)}>
                        {branchInfo && sortedVersions.map((it) => {
                            return <option value={it}>{it}</option>
                        })}
                    </select>
                    <select id="branch" value={selectedBranch} onChange={(e) => setSelectedBranch(e.target.value)}>
                        {branchInfo && selectedVersion && branchInfo[selectedVersion] && branchInfo[selectedVersion].map((it) => {
                            return <option value={it}>{it} {getBranchSuffix(it)}</option>
                        })}
                    </select>
                </div>
            </div>

            {/*{!branchInfo || !buildInfo && <p>Loading</p>}*/}

            <div className={styles.buildContainer}>
                {latestBuilds.map((build) => {
                    return <ASWMBuild key={build.id} slug={slug} build={build} github={github}/>
                })}
            </div>


        </div>
    </>
}
