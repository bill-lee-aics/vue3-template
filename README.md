# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Package Manager

- [pnpm](https://pnpm.io/) ([Why should we use pnpm?](https://medium.com/pnpm/why-should-we-use-pnpm-75ca4bfe7d93))

## Testing

- [jest](https://jestjs.io/) + [testing-library](https://testing-library.com/docs/vue-testing-library/intro)
- checkout `jest.config.ts` and `setupTest.ts` for configurations

```
pnpm test
```

## Component Library

TBD

## Css Utility

- [Windi Css](https://windicss.org/)

## Others

- jsx enabled by `@vitejs/plugin-vue-jsx`
- linted by `eslint` and `prettier`
