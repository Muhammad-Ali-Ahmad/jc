import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ExperienceComponent } from './core/screens/experience/experience.component';
import { ExpDetailsComponent } from './core/screens/exp-details/exp-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    ExpDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [AppComponent, ExperienceComponent, ExpDetailsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
