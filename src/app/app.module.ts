import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskService } from './task/task.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ControlMessagesComponent } from './task/control-messages.component';
import { OrderModule } from 'ngx-order-pipe';
import { TaskColumnService } from './task/task-column.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ControlMessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule
  ],
  providers: [TaskService, TaskColumnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
