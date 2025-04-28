import { getBlogPermalink } from './utils/permalinks';
import { projects } from './projects';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/bu-vip-website',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: '/bu-vip-website/contact',
    },
    {
      text: 'Projects',
      links: projects.map((p) => {
        return { text: p.name, href: p.href };
      }),
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
};
