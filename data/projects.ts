// an object to define a project for the work page

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
};

// work projects
export const workProjects: Project[] = [
  {
    id: 1,
    title: 'Earthquake Tracker',
    description:
      'View earthquake events around the globe. This project utilizes Next, Tailwind, Mapbox and  data from the USGS.',
    image: '/images/earthquake-tracker-screenshot.png',
    url: 'https://earthquake-tracker-dun.vercel.app/',
  },
  {
    id: 2,
    title: 'Portfolio',
    description:
      'This is my art portfolio site. It is a Next.js app that uses Chakra UI for styling. It is a work in progress.',
    image: '/images/portfolio-screenshot.png',
    url: 'https://github.com/ash-bergs/ash-bergs-dev',
  },
  // {
  //   id: 3,
  //   title: 'Ash Bergsma Blog',
  //   description:
  //     'This is my blog site. It is a Next.js app that uses Chakra UI for styling. It is a work in progress.',
  //   image: '/images/dummy-img.svg',
  //   url: 'example.com',
  // },
  // {
  //   id: 4,
  //   title: 'Ash Bergsma Shop',
  //   description:
  //     'This is my shop site. It is a Next.js app that uses Chakra UI for styling. It is a work in progress.',
  //   image: '/images/dummy-img.svg',
  //   url: 'example.com',
  // },
  // {
  //   id: 5,
  //   title: 'Ash Bergsma Contact',
  //   description:
  //     'This is my contact site. It is a Next.js app that uses Chakra UI for styling. It is a work in progress.',
  //   image: '/images/dummy-img.svg',
  //   url: 'example.com',
  // },
];

// art projects
//TODO: think about how to approach the art projects page
// but for now this works
export const artProjects: Project[] = [
  {
    id: 1,
    title: 'Bird in a Jar',
    description: 'Gouache on cold-press cotton',
    image: '/images/bird-in-a-jar.jpg',
    url: 'https://www.playbook.com/s/ash-bergs/dervn1CaZLvVVzpLoqWRoWJS',
  },
  {
    id: 2,
    title: 'Rise',
    description: 'Watercolor on cold-press cotton',
    image: '/images/octopus.jpg',
    url: 'https://www.playbook.com/s/ash-bergs/dervn1CaZLvVVzpLoqWRoWJS',
  },
  {
    id: 3,
    title: 'Pizza Rat',
    description: 'Digital Painting - Procreate',
    image: '/images/pizza-rat.png',
    url: 'https://www.playbook.com/s/ash-bergs/vNq3KMSDd6Mo1E7nz1DWpYUT',
  },
  // {
  //   id: 3,
  //   title: 'Ash Bergsma Blog',
  //   description:
  //     'This is my blog site. It is a Next.js app that uses Chakra UI for styling. It is a work in progress.',
  //   image: '/images/dummy-img.svg',
  //   url: 'example.com',
  // },
  // {
  //   id: 4,
  //   title: 'Ash Bergsma Shop',
  //   description:
  //     'This is my shop site. It is a Next.js app that uses Chakra UI for styling. It is a work in progress.',
  //   image: '/images/dummy-img.svg',
  //   url: 'example.com',
  // },
  // {
  //   id: 5,
  //   title: 'Ash Bergsma Contact',
  //   description:
  //     'This is my contact site. It is a Next.js app that uses Chakra UI for styling. It is a work in progress.',
  //   image: '/images/dummy-img.svg',
  //   url: 'example.com',
  // },
];
