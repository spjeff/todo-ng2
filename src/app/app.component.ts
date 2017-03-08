import { Component } from '@angular/core';
import { SplistService } from './splist.service';

interface TodoItem {
  name: string;
  done: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SplistService]
})
export class AppComponent {
  //data
  title = 'Todo List';
  newTodo = '';
  todos: TodoItem[];

  constructor(private SplistService: SplistService) {
    this.todos = this.SplistService.getData();
  }

  //methods
  add = function () {
    this.todos.push({ name: this.newTodo, done: false });
    this.newTodo = '';
  }

  //number incomplete
  remain = function () {
    let c = 0;
    for (let t of this.todos) {
      if (!t.done) { c++; }
    }
    return c;
  };

  //archive complete items
  archive = function () {
    let oldTodos: TodoItem[] = this.todos;
    this.todos = [];
    for (let t of oldTodos) {
      if (!t.done) {
        this.todos.push(t);
      }
    }
  };
}