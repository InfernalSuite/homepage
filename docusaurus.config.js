// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Infernal Suite',
  tagline: 'Dinosaurs are cool',
  url: 'https://infernalsuite.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'InfernalSuite', // Usually your GitHub org/user name.
  projectName: 'homepage', // Usually your repo name.

  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs/overview',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'aswm',
        path: 'docs_aswm',
        routeBasePath: 'docs/aswm',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'uc',
        path: 'docs_uc',
        routeBasePath: 'docs/uc',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'iwm',
        path: 'docs_iwm',
        routeBasePath: 'docs/iwm',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/InfernalSuite',
            label: 'GitHub',
            position: 'right',
          },
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
                to: 'docs/overview/intro',
              },
              {
                label: 'Advanced Slime World Manager',
                to: 'docs/aswm',
              },
              {
                label: 'Ultimate Core',
                to: 'docs/uc',
              },
              {
                label: 'Infernal World Manager',
                to: 'docs/iwm',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Main Discord',
                href: 'https://discord.infernalsuite.com/',
              },
              {
                label: 'Ultimate Core Discord',
                href: 'https://discord.com/invite/QgtsnbgP3f',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
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
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Infernal Suite. Built with Docusaurus ♥.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
