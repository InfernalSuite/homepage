// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Infernal Suite',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://infernalsuite.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'InfernalSuite', // Usually your GitHub org/user name.
  projectName: 'homepage', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs/overview',
          sidebarPath: require.resolve('./sidebarsOverview.js'),
          editUrl: 'https://github.com/InfernalSuite/homepage/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/InfernalSuite/homepage/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      'content-docs',
      {
        id: 'asp',
        path: 'docs_asp',
        lastVersion: "current",
        versions: {
          current: {
            label: "4.0.0",
            path: "",
          },
        },
        routeBasePath: 'docs/asp',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/InfernalSuite/homepage/tree/main/',
      },
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',

      navbar: {
        title: 'Infernal Suite',
        logo: {
          alt: 'Infernal Suite Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Documentation',
            position: 'left',
            to: 'docs/overview',
            items: [
              {
                type: 'doc',
                label: 'Overview',
                docId: 'index',
              },
              {
                type: 'doc',
                label: 'Advanced Slime Paper',
                docId: 'index',
                docsPluginId: 'asp',
              }
            ],
          },
          {
            type: 'docsVersionDropdown',
            docsPluginId: 'asp',
            position: 'right'
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/InfernalSuite/homepage',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: 'docs/overview',
              },
              {
                label: 'Advanced Slime Paper',
                to: 'docs/asp',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.infernalsuite.com/',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/InfernalSuite',
              },
              {
                label: 'Spigot',
                href: 'https://www.spigotmc.org/resources/authors/infernalsuite.1524369/',
              },
              {
                label: 'MC Market',
                href: 'https://www.mc-market.org/members/353325/#resources',
              },
              {
                label: 'Javadocs',
                href: 'https://docs.infernalsuite.com/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Infernal Suite. Built with Docusaurus ♥.`,
      },
      prism: {
        additionalLanguages: ['java', 'groovy'],
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
