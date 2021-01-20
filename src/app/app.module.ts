import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CalendarContainerComponent } from './calendar-container/calendar-container.component';
import { AddEventComponent } from './add-event/add-event.component';
import { DayViewComponent } from './day-view/day-view.component';



@NgModule({
  declarations: [
    AppComponent,
    CalendarContainerComponent,
    AddEventComponent,
    DayViewComponent
  ],
  imports: [
    BrowserModule, MatDialogModule, BrowserAnimationsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
