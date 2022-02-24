# PonySwap API

The PonySwap API is a set of endpoints used by market aggregators (e.g. coinmarketcap.com) to surface PonySwap liquidity
and volume information. All information is fetched from the underlying subgraphs.

## Documentation

The documentation of the endpoints for PonySwap can be found [here](documentation.md).

## Development

### Install requirements

```shell
yarn global add vercel
```

### Build

```shell
# Install dependencies
yarn

# Build project
vercel dev
```

Endpoints are based on filename inside the `api/` folder.

```shell
# api/pairs.ts
curl -X GET 'localhost:3000/api/pairs'

# ...
```

## Production

### Deploy

Deployments to production are triggered by a webhook when a commit, or a pull-request is merged to `master`.

If you need to force a deployment, use the following command:

```shell
vercel --prod
```
