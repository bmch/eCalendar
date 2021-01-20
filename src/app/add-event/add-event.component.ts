import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})

export class AddEventComponent implements OnInit {

  eventForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.eventForm = new FormGroup({
      eventTitle: new FormControl('Goat Yoga', [Validators.required]),
      startTime: new FormControl('10:30', [Validators.required]),
      endTime: new FormControl('11:30', [Validators.required]),
      people: new FormControl(''),
      location: new FormControl(''),
      description: new FormControl(''),
    });
  }

}
