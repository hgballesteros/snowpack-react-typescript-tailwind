# Hugo's Snowpack React + Typescript + Tailwind Template

Built off of [@snowpack/app-template-react-typescript](https://github.com/snowpackjs/snowpack/tree/main/create-snowpack-app/app-template-react-typescript).

## Getting Started

1. `yarn start`
2. `yarn start`

## NPM Scripts

- `start` will open a browser tab at [localhost:8080](http://localhost:8080)
- `build` builds to `build/`
- `test` runs tests. Note that you need to add a `--` before additional cli parameters when running this script through npm.
  e.g. `npm test -- --watch`
- `generate-css-types` will generate Typescript types based on `tailwind.config.js` (and output to `src/tailwindcss-classnames.ts`).
  Use this script when you alter the config. It runs after npm installation by default.

## Tooling

Changes from [@snowpack/app-template-react-typescript](https://github.com/snowpackjs/snowpack/tree/main/create-snowpack-app/app-template-react-typescript)
include:

- addition of `tailwindcss`, `tailwindcss-classnames`, and their dependencies
- modification of Typescript `baseUrl` (from `./` to `./src`)
- usage of experimental `skypack` source in `snowpack.config.js`

### Tailwind

Besides the ability to use tailwind directives as usual, this template uses [tailwindcss-classnames](https://www.npmjs.com/package/tailwindcss-classnames) to allow type-checked usage and composition of tailwind classnames _outside_ of the `className` prop.

The `generate-css-types` npm script connects this tool to the customizations you make in `tailwind.config.js`

For instance:

```tsx
// Note: imports from src/tailwindcss-classnames, not the actual npm package. See compilerOptions.baseUrl in tsconfig.json
import { classnames } from 'tailwindcss-classnames';

const bg = classnames('bg-ch-pink');

const Example = () => (
  <p className={classnames(bg, 'text-black')}>
    Tailwind, with built-in tooling for custom configs
  </p>
);
```

This pairs extremely well with the [Tailwindcss IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
package.

### Why Skypack?

1. It makes the dev server's startup time ludicrous
2. It's super easy to disable (remove or comment out the `experimental` portion of `snowpack.config.js`)

### Yarn

Remove `yarn.lock` if you want to switch package managers (i.e. npm, etc)
