import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulerPageComponent } from './components/scheduler-page/scheduler-page.component';

const routes: Routes = [
  {path: '',   redirectTo: 'scheduler', pathMatch: 'full' },
{path:'scheduler',component: SchedulerPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
