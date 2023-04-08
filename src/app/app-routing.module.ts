import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { NopagefoundComponent } from './components/nopagefound/nopagefound.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {
    path: "",
    component: NavbarComponent
  },
  {
    path: "tasks",
    component: TasksComponent
  },
  {
    path: "**",
    component: NopagefoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
