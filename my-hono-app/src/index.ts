import { Hono } from 'hono'

const app = new Hono()



async function authmiddleware(c:any,next:any) {

  if (c.req.header("Authorization")) {
    await next()
  }else{
    return c.text("their is error in middleware")
  }

}

app.use(authmiddleware)


app.post('/', async (c) => {

  // body headers query parameters middlewares conntecting to a db 

  const body  = await c.req.json() // why is this await?

  console.log(body)
  console.log(c.req.header("Authorization"))
  console.log(c.req.query("param"))

  return c.text("hiee")
})



export default app
