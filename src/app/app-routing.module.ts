import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PrintTodoComponent } from './print-todo/print-todo.component';

const routes: Routes = [
  {
  path:"",
  component:HeaderComponent,
  children:[
    {
      path:"",
      component:HomeComponent,
      children:[
        {
          path:"form",
          component:FormComponent,
          children:[
            {
              path:"print",
              component:PrintTodoComponent
            }
          ]
        }
      ],
    },
  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
