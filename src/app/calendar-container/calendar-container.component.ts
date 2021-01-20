import { Component, OnInit } from '@angular/core';

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
  selector: 'app-calendar-container',
  templateUrl: './calendar-container.component.html',
  styleUrls: ['./calendar-container.component.scss']
})
export class CalendarContainerComponent implements OnInit {

  displayDate = new Date();
  selectedDate: Date = new Date();
  eventDb: { [s: string]: EventDetail[] } = {}
  // {
  //   '21.1.2021': [{
  //     description: "",
  //     endTime: "11:30",
  //     eventTitle: "Goat Yoga",
  //     location: "",
  //     people: "",
  //     startTime: "10:30"
  //   }]
  // }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  displayDb(): void {
    console.warn(this.eventDb)
  }

  makeCellsArray(): Date[] {
    let beginDate = new Date(this.displayDate.getFullYear(), this.displayDate.getMonth(), -this.dayOfWeekMonthBegin() + 1)
    let arr = Array(42).fill(0).map((v, i) => {
      return new Date(beginDate.getFullYear(), beginDate.getMonth(), beginDate.getDate() + i)
    })
    return arr;
  }

  currentDate(): Date {
    return new Date(this.displayDate)
  }

  updateMonth(num: number): Date {
    let d = new Date(this.displayDate)
    d.setMonth(d.getMonth() + num);
    return d;
  }

  incrementMonth(): void {
    this.displayDate.setMonth(this.displayDate.getMonth() + 1);
  }

  decrementMonth(): void {
    this.displayDate.setMonth(this.displayDate.getMonth() - 1);
  }

  daysInMonth(): number {
    return new Date(this.displayDate.getFullYear(), this.displayDate.getMonth() + 1, 0).getDate()
  }
  dayOfWeekMonthBegin(): number {
    return new Date(this.displayDate.getFullYear(), this.displayDate.getMonth(), 1).getDay()
  }
  onSelectDate(d: Date) {
    this.selectedDate = new Date(d)
  }

  getDateStr(d?: Date): string {
    if (!d) {
      const date = this.selectedDate.getDate()
      const month = this.selectedDate.getMonth() + 1
      const year = this.selectedDate.getFullYear()
      return `${date}.${month}.${year}`
    }
    const date = d.getDate()
    const month = d.getMonth() + 1
    const year = d.getFullYear()
    return `${date}.${month}.${year}`
  }

  isToday(d: Date): boolean {
    if (this.getDateStr(d) === this.getDateStr(new Date())) {
      return true;
    }
    return false;
  }
}
