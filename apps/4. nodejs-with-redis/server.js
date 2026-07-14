import express from "express";
import redis from "redis";

const client = redis.createClient(); 
// defaults to localhost:6379, but you can also change that here

function cache(key, ttl, slowFn) {
    return async function (...props) {
      const cachedResponse = await client.get(key);
  
      if (cachedResponse) {
        return cachedResponse;
      }
  
      const result = await slowFn(...props);
  
      await client.setEx(key, ttl, result);
  
      return result;
    };
  }
  
  
  async function verySlowAndExpensiveFunction() {
  
    console.log("oh no an expensive call!");
  
    const p = new Promise((resolve) => {
  
      setTimeout(() => {
        resolve(new Date().toUTCString());
      }, 5000);
  
    });
  
    return p;
  }
  
  
  const cachedFn = cache(
    "expensive_call",
    10,
    verySlowAndExpensiveFunction
  );

async function init() {
  await client.connect();

  const app = express();

  app.get("/pageview", async (req, res) => {
    const views = await client.incr("pageviews");

    res.json({
      status: "ok",
      views,
    });
  });

  app.get("/get", async (req, res) => {

    const data = await cachedFn();
  
    res.json({
      data,
      status: "ok",
    });
  
  });

  const PORT = process.env.PORT || 3000;

  app.use(express.static("./static"));

  app.listen(PORT);

  console.log(`running on http://localhost:${PORT}`);
}

init();