/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Overview',
    },
    {
      type: 'link',
      label: 'Advanced Slime Paper',
      href: '/docs/asp',
    },
    {
      type: 'link',
      label: 'Ultimate Core',
      href: '/docs/uc',
    },
    {
      type: 'link',
      label: 'Infernal World Manager',
      href: '/docs/iwm',
    },
  ],
};

module.exports = sidebars;
