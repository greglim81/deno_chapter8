import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/product-routes.ts";
import { connect } from './helper/db.ts';
import { oakCors } from "https://deno.land/x/cors/mod.ts";

connect();

const app = new Application();

app.use(
  oakCors({
    origin: "*",
    methods: "GET,PATCH,POST,DELETE", 
  }),
);

app.use(async (ctx,next) =>{
    try{
      await next();
    }
    catch(err){
       console.log(err);
       ctx.response.body = "Something went wrong. Please try again later.";
    }
});   


app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });