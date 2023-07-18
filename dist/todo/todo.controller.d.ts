import { TodoService } from './todo.service';
import { Todo } from './todo.interface';
export declare class TodoController {
    private readonly todoService;
    private readonly logger;
    constructor(todoService: TodoService);
    findAll(): Todo[];
    createTodo(todo: Todo): void;
    findOne(id: number): Todo;
    updateTodo(id: number, todo: Todo): Todo;
    removeTodo(id: number): Todo[];
}
