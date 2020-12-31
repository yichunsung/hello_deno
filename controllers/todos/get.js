import { FILE_PATH } from '../../config.js';

export default async ({ response }) => {
  const decoder = new TextDecoder();
  try {
    const data = await Deno.readFile(FILE_PATH);
    const todos = JSON.parse(decoder.decode(data));

    response.status = 200;
    response.body = {
      status: 'success',
      todos
    }

  } catch (err) {
    response.status = 400;
    response.body = {
      status: 'error',
      todos: [],
      msg: err.toString()
    }
  }
};