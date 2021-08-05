const Client = require("replitdb-client");
const client = new Client();

(async () => {
  await client.set(1 , 17);
  let key = [
    await client.get('key'),
    await client.get('a'),
    await client.get(1)
  ];
  console.log(key);
})();