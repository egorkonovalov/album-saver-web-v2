import { publish } from 'gh-pages';

publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/egorkonovalov/album-saver-web-v2',
    user: {
      name: 'Egor Konovalov',
      email: 'konovalov.ye@gmail.com'
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);
