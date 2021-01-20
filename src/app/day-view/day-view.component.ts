import { Component, OnInit, Input } from '@angular/core';
import { AddEventComponent } from '../add-event/add-event.component';
import { MatDialog } from '@angular/material/dialog';

interface EventDetail {
  eventTitle: string,
  startTime: string,
  endTime: string,
  people: string,
  location: string,
  description: string,
};

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit {

  @Input() selectedDate: Date = new Date()
  @Input() eventDb: { [s: string]: EventDetail[] } = {}
  @Input() getDateStr: (() => string) = () => ""


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  onAddEvent() {

    const dialogRef = this.dialog.open(AddEventComponent, {
      height: '700px',
      width: '850px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.warn(result.eventTitle)
      let dateStr = this.getDateStr()
      if (dateStr) {
        if (this.eventDb[dateStr]) {
          this.eventDb[dateStr].push(result)
          this.eventDb[dateStr] = this.eventDb[dateStr].sort((a, b) => {
            if (a.startTime > b.startTime) {
              return 1;
            } else if (b.startTime > a.startTime) {
              return -1;
            } else {
              return 0;
            }
          })
        } else {
          this.eventDb[dateStr] = [result]
        }
      }
    });
  }

}
