import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
  private storage: Todo[] = [];

  create(todo: Todo): void {
    const curentMaxId = Math.max(...this.storage.map((t: Todo) => t.id));
    todo.id = curentMaxId + 1;
    this.storage.push(todo);
  }

  fillAll(): Todo[] {
    return this.storage;
  }
}
