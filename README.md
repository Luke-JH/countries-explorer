# Countries Explorer

## Overview

My objective here was to be able to easily navigate through a selection of countries supplied by an API, and accurately find necessary data.
Clean code and scalable architectural design were my key goals, achieved with a simple Nuxt 3 project structure and TailwindCSS for speed and simplicity.

## Log:

- project init (15 mins)
    - nuxt 3 init
    - git init
    - leaflet module
    - tailwind module
- ensure modules work & build basic map (20 mins)
    - tailwind working
    - leaflet working
- useFetch wrappers and env configuration (1 hour)
    - dual layer useFetch wrappers
    - env vars in env file. will need injecting at build time.
- fix server bug (5 mins - solution on github for nuxt config)
    - [fix here](https://github.com/nuxt/nuxt/issues/35033#issuecomment-4419988848)
- establish accurate types for country responses (40 min)
- build basic countries list
    - API 403: added localhost to cors origins in api dashboard
    - will need to also add github pages origin if I deploy
- features - building and refining (2 hours)
- refining code base (2 hours)
- notes / readme / reflection (1 hour)

**Total: ~7 hours**

## Improvements with more time:

- would add datalist for filter value so users can type and get prompted with values.
- Less architectural planning and orchestrating with claude code, more manual coding (time/quality balance).
- potentially add vee validate on smaller input components for easier re-use and less prop drilling (reactivity, clear form type generic ).
- would introduce vue use for reactive query params, and add filters as params.
- eslint and prettier.
- unit testing (vitest).
- SSR to hide API key as right now it's included in the bundle.
- pinia state management for countries data, paired with save to local storage. better dev tools. easy to debug. scalable. performant.
- add map to country detail page. (only have map test page currently due to time).
- move towards atomic design pattern (kept it flat for now for expediency / atomic design provides scalability).

## handling of claude code's shortcomings:

- Drove the pacing step by step (verify Tailwind → verify Leaflet → composables → feature build → refinement & docs)
- pushed back on type casting as I am against it unless absolutely necessary.
  argued on: useFetch generic refinement. wanted by-the-book inference without manufacturing unnecessary steps to derive the type.
- fixed issues it was unable to handle with server not running and API nuxt useFetch type signature
- separated non-reactive code out of composable into utils
- cut off debugging sessions and manually handled issues that were taking a while.

## extra considerations:

- implemented client side filtering where possible: minimise number of requests
- clean, maintainable project structure
- composables where possible to keep components clean and concerns separated.

## Nuxt Docs

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## env

Obtain your API key from restcountries.com and add it to your `.env` file. A `.env.example` is provided for reference.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
