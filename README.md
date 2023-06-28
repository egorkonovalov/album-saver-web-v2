# Album Saver Web (Telegram bot)

<div align="center">
  <img src="https://user-images.githubusercontent.com/73017521/203515103-5ae85fa7-8492-4efb-a402-cbaa4be71251.png" width="200" alt="Music Saver" />
</div>

## Developing

Once you've created a project and installed dependencies with `yarn install` start a development server:

```bash
yarn dev

# or start the server and open the app in a new browser tab
yarn dev --open
```

## Building

To create a production version of your app:

```bash
yarn build
```

You can preview the production build with `yarn preview`.

## Deployment

To deploy the app on GitHub Pages you need to modify [gh-pages.js](./gh-pages.js) so it points to your repository URL and holds your GitHub account information. Then use this command:

```bash
yarn deploy
```

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
