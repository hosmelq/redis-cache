const redis = require('redis');

let client;

exports.createClient = (...args) => {
  client = redis.createClient(...args);

  return client;
}

exports.cache = (key, seconds, callback) => {
  return new Promise((resolve, reject) => {
    client.get(key, async (err, reply) => {
      if (err) {
        return reject(err);
      }

      if (reply) {
        return resolve(reply);
      }

      try {
        const value = await callback();

        client.set(key, value, 'EX', seconds);

        resolve(value);
      } catch (err) {
        reject(err);
      }
    });
  });
}
