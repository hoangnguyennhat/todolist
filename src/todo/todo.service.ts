import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
  private storage: Todo[] = [
    {
      label: 'Create an awesome API',
      complete: true,
      id: 1,
    },
  ];

  create(todo: Todo): void {
    const currentMaxId = Math.max(...this.storage.map((t: Todo) => t.id));
    todo.id = currentMaxId + 1;
    this.storage.push(todo);
  }

  fillAll(): Todo[] {
    return this.storage;
  }

  findOne(id: number): Todo {
    return this.storage.find((t: Todo) => t.id === id);
  }

  update(id: number, todo: Todo): Todo {
    const index = this.storage.findIndex((todo: Todo) => todo.id === id);
    this.storage[index] = todo;
    return this.storage[index];
  }

  remove(id) {
    const index = this.storage.findIndex((t: Todo) => t.id === id);
    this.storage.splice(index, 1);
    return this.storage;
  }
}
