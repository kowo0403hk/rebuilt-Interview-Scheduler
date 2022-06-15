# Scheduler project breakdown

## Components

- Button
- DayList
- DayListItem
- InterviewerList
- InterviewerListItem
- Appointment
- Appointment/Header
- Appointment/Empty
- Appointment/Show
- Appointment/Form
- Appointment/Status
- Appointment/Error
- Appointment/Confirm

### Button

- State: NO STATE
- Props: confirm (boolean), disabled (boolean), danger, boolean, onClick (function), clickable
- Used by: EVERYONE

### DayList

- State:
- Props: days(array), day(string), setDay(function accept name of the day, e.g. Monday or Tuesday)
- Used by: DayList to render DayListItem

### DayListItem

- State: Has its own state of day.
- Props: name(string), spots(number), selected(boolean), setDay(function)
- Used by: DayListItem

### InterviewerList

- State:
- Props: interviewers(array), setInterviewer(function), interviewer(number--id)
- Used by: itself to render InterviewerListItem

### InterviewerListItem

- State: Has its own state of which interviewer is chosen
- Props: id(number), name(string), avatar(url), selected (boolean), setInterviewer(function, receive id as arg and sets the selecte interviewer)
- Used by: itself

### Appointment

- State:
- Props:
- Used by:

### Appointment/Header

- State:
- Props:
- Used by:

### Appointment/Empty

- State:
- Props:
- Used by:

### Appointment/Show

- State:
- Props:
- Used by:

### Appointment/Form

- State:
- Props:
- Used by:

### Appointment/Status

- State:
- Props:
- Used by:

### Appointment/Error

- State:
- Props:
- Used by:

### Appointment/Confirm

- State:
- Props:
- Used by: