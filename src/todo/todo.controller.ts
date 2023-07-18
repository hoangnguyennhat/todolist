import {
  Body,
  Controller, Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
  Put
} from "@nestjs/common";
import { TodoService } from './todo.service';
import { Todo } from './todo.interface';

@Controller('todo')
export class TodoController {
  private readonly logger = new Logger(TodoController.name);
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll(): Todo[] {
    this.logger.log('Handling findAll() request...');
    return this.todoService.fillAll();
  }

  @Post()
  createTodo(@Body() todo: Todo): void {
    this.logger.log('handle create() request', todo);
    return this.todoService.create(todo);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Todo {
    this.logger.log('Handling findOne() request with id=' + id + '...');
    return this.todoService.findOne(id);
  }

  @Put(':id')
  updateTodo(@Param('id', ParseIntPipe) id: number, @Body() todo: Todo): Todo {
    this.logger.log('Handling findOne() request with id = ' + id + '....');
    return this.todoService.update(id, todo);
  }

  @Delete(':id')
  removeTodo(@Param('íd', ParseIntPipe) id: number) {
    this.logger.log('Handing delete request with id' + id + '....');
    return this.todoService.remove(id);
  }
}
