# Svelte i18n

Proof of concept repository that showcases a library-less approach to i18n with
SvelteKit.

## Features

- Translation Remote Function in [src/lib/i18n.remote.ts](src/lib/i18n.remote.ts)
- Typed translation keys and returned strings

## Todo

- [x] Create `t` remote function that accepts translation keys
- [ ] Add types to generated JSON
- [ ] Create Vite plugin to enable HMR when CSV values update, with a CSV ->
  JSON conversion pipeline
- [ ] Adjust workflow to be:
  1. Provide gitignored CSV
  2. Generate JSON file from vite plugin
  3. Read from JSON file once in a server module at startup
  4. `t` function reads from in-memory data.
- [ ] `Intl` API integration, plurality example.
- [ ] Translation menu on browser to switch between languages
