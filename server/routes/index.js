import Todo from "../controllers/todoController";

export default app => {
  
  // app.get('/random',(req,res)=>{
  //      return res.json({
  //           h:"hello"
  //      })
  // })
  app.get("/todos", Todo.list);
  app.post("/todos", Todo.add);
  app.get("/todos/:id", Todo.getTodo);
  app.put("/todos/:id", Todo.update);
  // app.delete('/todos/:id',Todo.remove)
};
