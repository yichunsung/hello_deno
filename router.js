import { Router } from 'https://deno.land/x/oak/mod.ts';

import getTodos from './controllers/todos/get.js';
import postTodos from './controllers/todos/post.js';

const router = new Router();

router.get('/api', ({ response }) => {
  response.body = 'Todo List API Using Deno Runtime.';
});

router.get('/todos', getTodos).post('/todos', postTodos);

export default router;
