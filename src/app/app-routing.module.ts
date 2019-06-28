import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ExperienceComponent } from './core/screens/experience/experience.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'experience', component: ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
