const Koa = require('koa');
const app = new Koa();

const bodyparser = require('koa-bodyparser');
const cors = require('koa2-cors');

const Router = require('koa-router');
const router = new Router();

app.use(cors());

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}));

// logger
app.use(async (ctx, next) => {
	const start = new Date();
	await next();
	const ms = new Date() - start;
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


router.get('/api/broad', async function(ctx){
	ctx.status = 200;
	ctx.body = {code:0,msg:'success'}
})

// routes
app.use(router.routes());

app.listen(3002);
console.log('server listenning at port 3002')
