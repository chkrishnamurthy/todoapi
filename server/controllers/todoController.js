import Todo from "../models";

class TodoController {
  static list(req, res) {
    return Todo.find({})
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(500).send(error));
  }

  static add(req, res) {
    const { title } = req.body;

    return Todo.create({ title })
      .then(todo =>
        res.status(201).send({ message: "User successfully created", todo })
      )
      .catch(error => res.status(400).send(error));
  }

  static getTodo(req, res) {
    const { id } = req.params;
    return Todo.findById(id)
      .then(todo => res.status(200).send(todo))
      .catch(err => res.status(400).send(err));
  }
  static update(req, res) {
    return Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
      .then(todo => {
        return res.send(todo);
      })
      .catch(err => res.status(400).send(err));
  }
}

export default TodoController;
