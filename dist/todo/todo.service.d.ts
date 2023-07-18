import { Todo } from './todo.interface';
export declare class TodoService {
    private storage;
    create(todo: Todo): void;
    fillAll(): Todo[];
    findOne(id: number): Todo;
    update(id: number, todo: Todo): Todo;
    remove(id: any): Todo[];
}
