# EventCalendar

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.
Purpose: Create a datepicker UI in Angular with the requirements below.
More details can be found in [this repo](https://github.com/chingu-voyages/soloproject-tier3-ecalendar/blob/master/README.md).

#### Requirements

_Structure_

- [ ] Page divided into calendar potion and event list portion

- [ ] Calendar portion to have:

  - [ ] Title and Current year in header
  - [ ] Current month between previous and upcoming month
  - [ ] Calendar dates of the month with display of previous month’s last dates if first day of current month does not start on a Sunday
  - [ ] Arrows bordering the body of the calendar

- [ ] Event portion to have

  - [ ] Current day of the week displayed
  - [ ] Current month and date (numerical) displayed
  - [ ] List of Events with corresponding date of month divided by a vertical bar
  - [ ] Add event button at bottom

- [ ] Display any appointments for the current date on app load; if no appointments are on the current day display "No Appointments"

- [ ] A modal form activated via button click that floats above the content

_Styling:_

- [ ] Styles should be reminiscent of the demo versions. Feel free to use artistic licencse as long as the functionality doesn't suffer

_Functionality_

_Upon Load:_

- [ ] Calendar will display correct layout of the current month with the weeks starting on Sunday
- [ ] Displays last days of previous month and/or first days of next month as buffers when needed; set apart with styling
- [ ] Set the current date apart from the others (in the demo above it is bolded)
- [ ] Display the current day in the appointment panel along with any appointments on that day OR a notification of "No Appointments" if none exist for that day

_Scrolling:_

- [ ] Your calendar must scroll backwards and forwards accurately

_Manipulation:_

- [ ] If there are one or more appointments for a day in the displayed month, display a small dot under the day as a visual representation
- [ ] When a user clicks on a day in the currently displayed month, the lables and appointments should update in the appointment panel
- [ ] When a user inputs a new appointment, be sure that the appointment dot under the correct day is shown immediately
- [ ] Implement full CRUD (creat, review, update, delete) lifecycle for appointments (_hint: use the modal for creating/update/delete and the panel for review_);

_Modal Form:_

- [ ] This form is used to add new events to to the calendar. It is displayed when the user clicks the add icon in appointment panel
- [ ] Be able to close form without submission and have form close on submission of event information
- [ ] Have modal displayed as shown in images below
- [ ] Have at least the event name and dates as required, the other fields shown are optional
- [ ] Is hidden when not in use
