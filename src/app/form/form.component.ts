import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Todo } from '../todos';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

   todoForm:any;
   todos: Todo[];
   localitem: any;
   
  constructor() {
    this.localitem = localStorage.getItem("todos");
    if(this.localitem == null)
    {
      this.todos = [];
    }
    else
    {
      this.todos = JSON.parse(this.localitem);
    }
    
   }

  ngOnInit(): void {
    this.todoForm = new FormGroup({
      title: new FormControl(''),
      desc: new FormControl(''),
    });
  }
  onSubmit()
  {
    const tod =
      {
        title:this.todoForm.value.title,
        desc: this.todoForm.value.desc
      }
      this.todos.push(tod);
      localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  Deletetodo(todo:Todo)
  {
    const index = this.todos.indexOf(todo)
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }

}
