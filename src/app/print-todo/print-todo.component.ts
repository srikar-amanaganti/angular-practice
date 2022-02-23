import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

import { Todo } from '../todos';

@Component({
  selector: 'app-print-todo',
  templateUrl: './print-todo.component.html',
  styleUrls: ['./print-todo.component.css']
})
export class PrintTodoComponent implements OnInit {
  @Input() todo : Todo = new Todo();
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo:Todo)
  {
    this.todoDelete.emit(todo);
  }

}
