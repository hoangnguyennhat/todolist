"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
let TodoService = exports.TodoService = class TodoService {
    constructor() {
        this.storage = [
            {
                label: 'Create an awesome API',
                complete: true,
                id: 1,
            },
        ];
    }
    create(todo) {
        const currentMaxId = Math.max(...this.storage.map((t) => t.id));
        todo.id = currentMaxId + 1;
        this.storage.push(todo);
    }
    fillAll() {
        return this.storage;
    }
    findOne(id) {
        return this.storage.find((t) => t.id === id);
    }
    update(id, todo) {
        const index = this.storage.findIndex((todo) => todo.id === id);
        this.storage[index] = todo;
        return this.storage[index];
    }
    remove(id) {
        const index = this.storage.findIndex((t) => t.id === id);
        this.storage.splice(index, 1);
        return this.storage;
    }
};
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)()
], TodoService);
//# sourceMappingURL=todo.service.js.map