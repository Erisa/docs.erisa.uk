const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Erisa Docs',
  tagline: 'Documentation of Erisa stuff',
  url: 'https://docs.erisa.uk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Erisa', // Usually your GitHub org/user name.
  projectName: 'docs.erisa.uk', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Erisa Docs',
      
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'Docs',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
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
              label: 'Home',
              to: '/',
            },
          ],
        },
        {
          title: 'Erisa',
          items: [
            {
              label: 'Homepage',
              href: 'https://erisa.uk',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Erisa',
            },
            {
              label: 'Blog',
              href: 'https://erisa.dev',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} Erisa A`,
      copyright: `Copyright © 2022 Erisa A`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['yaml']
    },
    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: 'dark',
    }
    
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Erisa/docs.erisa.uk/edit/main/',
          routeBasePath: "/"
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],  
};
