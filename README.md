# Pokédash

This is a Pokémon Dashboard built with NextJS

![Pokedash](assets/pokedash.png)

## This project was built with

- pnpm
- NextJS 13
- ESLint
- Prettier
- Sass
- TailwindCSS
- RadixUI
- Storybook
- Vitest
- Next Sitemap
- Google Analytics

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
