module.exports = {
  title: 'EvntBoard',
  tagline: 'Stream Deck on steroids',
  url: 'https://evntboard.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'evandikt', // Usually your GitHub org/user name.
  projectName: 'evntboard', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'EvntBoard',
      logo: {
        alt: 'EvntBoard Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {
        //   to: 'blog/',
        //   label: 'Blog',
        //   position: 'left'
        // },
        {
          to: 'download/',
          label: 'Download',
          position: 'left'
        },
        {
          href: 'https://github.com/evntboard',
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
              label: 'Install',
              to: 'docs/',
            },
            {
              label: 'Plugin',
              to: 'docs/plugin/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitch',
              href: 'https://twitch.tv/evandikt',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/crnmfzvGT9',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/evntboard',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/evntboard/application',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EvntBoard, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/EvntBoard/docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/EvntBoard/docs/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
