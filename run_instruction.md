# Run instructions

A REST API in plain JavaScript built with Clean Architecture and TDD. It is the earliest
of the reference implementations in this series, written before the TypeScript rewrite in
`clean-ts-api`, and it keeps the same layer discipline without a type system to lean on.

## Prerequisites

Node.js 14 or newer, and a MongoDB instance reachable via the `MONGO_URL` environment
variable.

## Install and run

```bash
npm ci
npm start          # node src/main/index.js
```

There is no build step: the source runs directly.

## Tests

```bash
npm test                 # the whole suite, serially
npm run test:unit        # unit tests, watch mode
npm run test:integration # integration tests, watch mode
npm run test:ci          # with coverage
```

Integration tests need MongoDB running. The suite runs with `--runInBand` because the
integration tests share one database.

## Layout

```
src/domain/         Use-case contracts
src/infra/          MongoDB repositories and cryptography helpers
src/presentation/   Routers, helpers and the HTTP-shaped contracts
src/utils/          Validators and generic helpers
src/main/           Composition root: factories, routes, config, middlewares
```

Because there are no types, the contracts between layers are enforced entirely by tests:
every collaborator is exercised through a spy or a stub that asserts the shape of the
call. That is the point of the repository.
