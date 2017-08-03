# r-cache

> Minimalist cache function for redis

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Sometimes you may wish to retrieve an item from the cache, but also store a default value if the requested item doesn't exist.

[node_redis](https://github.com/NodeRedis/node_redis) is used for connections.

## Install

```
$ npm install --save r-cache
```

## Usage

```js
const rCache = require('r-cache');

const client = rCache.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);

const text = rCache.cache('text', 60, () => {
  return 'Lorem ipsum dolor sit amet ...';
});
```

## API

### cache

Returns the item in the cache for the given key, if the item does not exist in the cache, the function passed will be executed and its result will be placed in the cache.

#### key

The key for store the item in the cache.

Type: `string`

#### seconds

Number of seconds for which the value should be cached.

Types: `number`

#### fn

The function to be executed.

Type: `Function`

### createClient

Same options as [`node_redis#rediscreateclient`](https://github.com/NodeRedis/node_redis#rediscreateclient). This returns the `redis` client.

## License

MIT © [Hosmel Quintana](https://hosmelq.com)
