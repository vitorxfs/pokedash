# Pokédash

This is a Pokémon Dashboard built with NextJS

[![Pokedash](assets/pokedash.png)](https://pokedash-snx.vercel.app)

## This project was built with
![Next JS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![ESLint](https://img.shields.io/badge/ESlint-4930BD?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-1A2B33?style=for-the-badge&logo=prettier&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-ffbb00?style=for-the-badge&logo=pnpm&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CF649A?style=for-the-badge&logo=sass&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-0099ee?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix-5472E4?style=for-the-badge&logo=radixui&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-729B1B?style=for-the-badge&logo=vitest&logoColor=white)
![GraphQL](https://img.shields.io/badge/Graphql-DE33A6?style=for-the-badge&logo=graphql&logoColor=white)
![Github Actions](https://img.shields.io/badge/Github%20actions-266BD7?style=for-the-badge&logo=github&logoColor=white)


## See it running

You can see it running at [pokedash-snx.vercel.app](https://pokedash-snx.vercel.app)

The storybook component documentation is also available at [vitorxfs.github.io/pokedash](https://vitorxfs.github.io/pokedash)

## Running Locally

1. Fork this repository
2. Clone or download the forked project
3. Run
```
pnpm install
pnpm run dev
```

For building, run
```
pnpm run build
pnpm run postbuild
```

The script `postbuild` will create the sitemap as well as the `robots.txt` file for SEO.

The boilerplate used for this project can be found at [vitorxfs/next-blank-app](https://github.com/vitorxfs/next-blank-app/tree/app-directory)

## Project Design

The design of this project can be found on [this figma file](https://www.figma.com/file/XHKiJX15RLhqRNhR0l57CK/P%C3%B3kedash).

![Figma](assets/figma-screenshot.png)

## Project Structure

```
src/
|--app/
|  '-api/
|--components/
|--config/
|--data-types/
|--helpers/
|--hooks/
|--layout/
|--lib/
|  |-clients/
|  |-components/
|  '-next/
|--styles/
|--env.ts
'--factories.ts
```

- `factories.ts` centralizes the classes instantiation
- `env.ts` exports environment variables

### Data flow

![Diagram](assets/diagram.png)

### Island Architecture

Based on [this Jason Miller post about the Island Architecture](https://jasonformat.com/islands-architecture/), the listing page was divided in five islands: four interactive client-side islands, that updates the URL query parameters; and one static server island, which is the listing itself.

![Islands](assets/islands.png)
