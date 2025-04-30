import type { Contact } from './types';

export const vipContacts: Array<Contact> = [
  {
    name: 'Dr. Mohammad Imtiaz',
    title: 'Faculty Advisor for ECE 398',
    email: 'mimtiaz@bradley.edu',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam rem delectus labore commodi culpa sit facere sed velit, corporis quae et quia libero atque repellat voluptatem ipsa nostrum expedita. Aperiam.',
    img: {
      src: '~/assets/images/imtiaz.jpg',
      alt: 'Dr. Mohammad Imtiaz',
    },
  },
  {
    name: 'Jacob Simeone',
    title: 'Admin / Weather Station Lead Developer',
    email: 'jsimeone@mail.bradley.edu',
    bio: 'Jacob is one of the student administrators for ECE 398 at Bradley. He led the weather station from start to finish through three semesters of development. Outside of school, he works in embedded systems for data acquisition equipment.',
    img: {
      src: '~/assets/images/jacob.jpg',
      alt: 'Jacob Simeone',
    },
  },
  {
    name: 'Kyle King',
    title: 'Admin / Water Monitor Lead Developer',
    email: 'kaking2@mail.bradley.edu',
    bio: 'Kyle is another student administrator for ECE 398 at Bradley. He led the Water Monitor project from concept to deployment while helping underclassmen learn the basics. Separately, he contributed to the Weather Station team, primarily on the project management side. Outside of class, Kyle is part of Bradley’s S.A.E. Supermileage team, assisting with many elements of the project while also serving as the primary driver.',
    img: {
      src: '~/assets/images/kyle.jpg',
      alt: 'Kyle King',
    },
  },
];
