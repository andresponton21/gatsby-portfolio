import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Andres-Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I am',
  name: 'Andres',
  subtitle: 'Web Designer',
  cta: 'About',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'Enthusiastic web designer, with a balanced combination of creativity, attention to details and execution.',
  paragraphTwo: 'Experienced in product design, great observer and with the necessary skills to plasm what the client is trying to express.',
  paragraphThree: 'Demonstrated leadership in my managerial positions, looking to empower co-workers through delegation, able to communicate and pass knowledge, skills acquired in my volunteer work as a teacher.',
  resume: 'https://drive.google.com/file/d/1q2y8wYSJXZz8WQHiCwdEoPdAoiQAyGG1/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'todoLayout.png',
    title: 'Todo App with Database',
    info: 'Using Mysql you can easily add todos, delete and update them',
    info2: 'You can check what is already done and the things that you have to do with built in mini tabs, Live site coming soon, you can checkout the source in source code',
    url: 'https://github.com/andresponton21',
    repo: 'https://github.com/andresponton21/project-rubi-daniel-andres.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ecommerce.png',
    title: 'Ecommerce website',
    info: 'This site lets you grab products from firebase database and then you can filter products, search, sort, arrange by price, and finally add them to your cart or your favourites page',
    info2: 'Checkout the repo and the live site below',
    url: 'https://ecommerce-react-assigment-aponton.netlify.app/',
    repo: 'https://github.com/andresponton21/ecommerce-react.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'postapp.png',
    title: 'Post App',
    info: 'This post app has a login, logout auth built with firebase, its also using the firestore for posts, and the firestorage for images',
    info2: 'Create and account and post amazing images with text, checkout the repo and live site below',
    url: 'https://andresponton21.github.io/firebase2ndassigment/',
    repo: 'https://github.com/andresponton21/firebase2ndassigment.git', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me',
  btn: 'Contact me @',
  email: 'andresponton18@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
 
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/andresponton21',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/andres-p-1b323310a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/andresponton21',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
