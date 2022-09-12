import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgorithmCategoryComponent } from './algorithm-category/algorithm-category.component';
import { AlgorithmDetailComponent } from './algorithm-detail/algorithm-detail.component';
import { AlgorithmListComponent } from './algorithm-list/algorithm-list.component';
import { HomeComponent } from './home/home.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo : '/home',pathMatch: 'full'},
  { path: 'timer', component: TimerComponent},
  { path: 'list/:category', component: AlgorithmListComponent},
  { path: 'detail/:name', component: AlgorithmDetailComponent},
  { path: 'category', component: AlgorithmCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
