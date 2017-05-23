# Buurkracht Mobile

## Setup

1. Run `bin/setup`

## Building

1. Follow steps in [Setup](#setup).
2. Run `yarn build` (or `npm run build`)
3. `open dist/index.html`

## Development

You'll need Chrome v59.x or higher to run the tests headless. You might need install it from the [beta channel](https://www.google.com/chrome/browser/beta.html).

1. Follow steps in [Setup](#setup).
2. Run `yarn start` (or `npm start`)
3. `open http://localhost:3000`

### Code formatting

Code is formatted by [Prettier](https://github.com/prettier/prettier).
The provided [Setup](#setup) script will install a git commit hook that will format your code.
Prettier can also be run manually using `yarn run prettier` or `yarn run prettier -- --write`.
