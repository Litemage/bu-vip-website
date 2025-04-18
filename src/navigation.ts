import { getBlogPermalink } from './utils/permalinks';
import { projects } from './projects';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Blog',
      href: getBlogPermalink()
    },
    {
      text: 'Contact',
      href: '/contact'
    },
    {
      text: 'Projects',
      links: projects.map((p) => {return {text: p.name, href: p.href}})
    }
  ],
};

export const footerData = {
  links: [
  ],
  secondaryLinks: [
  ],
};
