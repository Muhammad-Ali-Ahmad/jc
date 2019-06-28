import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExperienceComponent } from './core/screens/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [AppComponent, ExperienceComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
