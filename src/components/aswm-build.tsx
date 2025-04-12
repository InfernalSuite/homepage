import React, {useMemo} from "react";
import styles from "@site/src/components/downloads.module.css";
import {Build, resolveDownload} from "@site/src/lib/download-api";

export function ASWMBuild({slug, build, github}: { slug: string, build: Build, github: string }) {
    const serverDownload = useMemo(() => {
        return build.files.find((it) => it.fileName.endsWith(".jar") && it.fileName.includes("server"))
    }, [build])
    const pluginDownload = useMemo(() => {
        return build.files.find((it) => it.fileName.endsWith(".jar") && it.fileName.includes("plugin"))
    }, [build])
    const date = useMemo(() => {
        const d = new Date(build.date)
        const now = new Date();
        const diff = now.getTime() - d.getTime(), dayMs = 86400000;

        if (diff < 7 * dayMs) {
            const rtf = new Intl.RelativeTimeFormat('en', {numeric: 'auto'});
            const days = Math.floor(diff / dayMs);
            return rtf.format(-days, 'day');
        }

        return d.toLocaleDateString("en");
    }, [build])


    return <div className={styles.build}>
        <div className={styles.downloads}>
            {serverDownload &&
                <a className={"button button--primary button--sm"}
                   href={resolveDownload(slug, build.id, serverDownload.id)} target={"_blank"}>Server</a>}
            {pluginDownload && <a className={"button button--primary button--sm"}
                                  href={resolveDownload(slug, build.id, pluginDownload.id)}
                                  target={"_blank"}>Plugin</a>}
        </div>
        <div className={styles.changeList}>
            {build.changes.map((it) => {
                return <p><a target={"_blank"} href={github + "/commit/" + it.commitHash}>{it.shortCommitHash}</a> {it.commit}</p>
            })}
            {build.changes.length == 0 && <p>No changes</p>}
        </div>

        <p className={styles.date}>{date}</p>

    </div>
}