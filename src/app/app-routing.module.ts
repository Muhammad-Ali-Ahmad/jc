import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ExperienceComponent } from './core/screens/experience/experience.component';
import { ExpDetailsComponent } from './core/screens/exp-details/exp-details.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'experience/details/:id', component: ExpDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
