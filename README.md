# Interview Scheduler

The Interview Scheduler is a single page application built using React. Testing tool kits including Jest, Storybook and Cypress. It allows user to freely schedule and/or cancel appointment at wish.

## Setup

Install dependencies with `npm install`. _This runs on node v 15.14.0, please make sure you have the same version of node._

```
npm install <package> --save
```

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Running Cypress

```sh
npm run cypress
```

## Dependencies/Dev-Dependencies

Dependencies

```
axios
classnames
fsevents
react 16.9.0
react-dom 16.9.0
react-scripts 3.0.0
```

Dev-Dependencies

```
babel 7.4.3
storybook 5.0.10
@testing-library/react-hooks 8.0.0
prop-types 15.8.1
react-test-renderer 16.9.0
cypress 9.7.0
```

## Formatting

The project is formatted by Prettier.

## Final Product

!['Scheduler - DayList'](https://github.com/kowo0403hk/rebuilt-Interview-Scheduler/blob/master/docs/Scheduler%20-%20Days%20List.png?raw=true)
!['Scheduler - Show'](https://github.com/kowo0403hk/rebuilt-Interview-Scheduler/blob/master/docs/Scheduler%20-%20Show.png?raw=true)
!['Scheduler - Form'](https://github.com/kowo0403hk/rebuilt-Interview-Scheduler/blob/master/docs/Scheduler%20-%20Form.png?raw=true)
!['Scheduler - Awaiting'](https://github.com/kowo0403hk/rebuilt-Interview-Scheduler/blob/master/docs/Scheduler%20-%20Awaiting.png?raw=true)
!['Scheduler - Confirm_Delete'](https://github.com/kowo0403hk/rebuilt-Interview-Scheduler/blob/master/docs/Scheduler%20-%20Cofirm_Delete.png?raw=true)
!['Scheduler - Error'](https://github.com/kowo0403hk/rebuilt-Interview-Scheduler/blob/master/docs/Scheduler%20-%20Error.png?raw=true)

## Functionality

- Interviews can be booked between Monday and Friday.
- A user can switch between weekdays.
- A user can book an interview in an empty appointment slot.
- Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
- A user can cancel an existing interview.
- A user can edit the details of an existing interview.
- The list of days informs the user how many slots are available for each day.
- The expected day updates the number of spots available when an interview is booked or canceled.
- A user is presented with a confirmation when they attempt to cancel an interview.
- A user is shown an error if an interview cannot be saved or deleted.
- A user is shown a status indicator while asynchronous operations are in progress.
- When the user presses the close button of the error they are returned to the Form or Show view.
- The application makes API requests to load and persist data. We do not lose data after a browser refresh.
