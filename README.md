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


### Telegram HTTPS tunnel

With the dev server running, start a tunnel in another terminal:

```bash
cloudflared tunnel --url http://localhost:5173 --http-host-header localhost
```

The host header override lets Vite accept requests through any newly generated
tunnel URL without editing `vite.config.ts`. Restart existing tunnels with this
command. Set the generated HTTPS URL as the bot's menu button URL; Quick Tunnel
URLs change each time the tunnel starts.

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
