import { Application } from './deps.ts';
import router from "./router.ts";



const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.use((ctx) => {
    ctx.response.body = "Hello World!";
});

await app.listen({ port: 8000 });
