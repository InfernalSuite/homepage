import React from "react";
import DocsVersionDropdownNavbarItem from "@theme-original/NavbarItem/DocsVersionDropdownNavbarItem";
import { useLocalPathname } from "@docusaurus/theme-common/internal";
import { useDocsData } from "@docusaurus/plugin-content-docs/client";

export default function DocsVersionDropdownNavbarItemPerPage(props) {
    const docsData = useDocsData(props.docsPluginId)
    return (
        <>
            {useLocalPathname().startsWith(docsData.path) && (
                <DocsVersionDropdownNavbarItem  dropdownActiveClassDisabled="true" {...props} />
            )}
        </>
    );
}
