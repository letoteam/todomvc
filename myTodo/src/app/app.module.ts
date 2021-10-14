import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TodosComponent } from './todos/todos.component';
import { FiltersComponent } from './filters/filters.component';
import { TodoStatusDirective } from './todo-status.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodosComponent,
    FiltersComponent,
    TodoStatusDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
