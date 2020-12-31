import { FILE_PATH } from '../../config.js';

export default async ({ response, request }) => {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();

  try {
    const { title, completed } = await request.body().value;

    const data = await Deno.readFile(FILE_PATH);
    const todos = JSON.parse(decoder.decode(data));

    const newTodo = {
      id: todos.length + 1,
      title: title,
      completed: completed
    }

    todos.push(newTodo);

    await Deno.writeFile(FILE_PATH, encoder.encode(JSON.stringify(todos)));

    response.status = 201;
    response.body = {
      status: 'success',
      id: todos.length + 1
    }
  } catch (err) {
    response.status = 400;
    response.body = {
      status: 'error',
      msg: err.toString()
    }
  }
}