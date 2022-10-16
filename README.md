# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

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
