This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Goto
- [Steps to run local](https://github.com/shivamkantival/test-react-app#steps-to-run-local)
- [Highlights](https://github.com/shivamkantival/test-react-app#highlights)
- [Performance report](https://github.com/shivamkantival/test-react-app#performance-report)
- [Things to note](https://github.com/shivamkantival/test-react-app#things-to-note)
- [Stack used](https://github.com/shivamkantival/test-react-app#stack-used)

# Steps to run local
```
    yarn install
    yarn start
```

# Highlights
* `useInfiniteScroll` : This is a ready-to-use custom hook that takes care of the following use-cases-
    - Automatically calls 'fetchMore' if fetched data is not able to fill the scroll container.
 Listens to updates in dimensions of the scroll container(due to viewport changes), and fetches more data if available data does not fill updated scroll container.
    - Listens to updates in scrollHeight of scroll container( due to introduction of new data), and fetches more data if avaiable data does not fill updated scroll container.
    - And yes of-course, fetches more data when user scrolls to a given threshold.
* `PlatformPusherNotifications` : Central hub for complete application to display any toast notifications to user. Managed by Context API. Supports following features-
    - Diplays a max of 5 toasts at a time. All the rest notifications are kept in stack, their timer starts only when they appear to the user.
    - Individual timeout can be provided when pushing a notification.
    - Notification toast's timer pause on hover.
    - Notification can be expired early by clicking on the toast.
* `PausableTimer` : A customised wrapper over 'setTimeout' that powers each individual toast notification. Supports following functionality over and above 'setTimeout'
    - Option to start timer immediately or when invoked manually.
    - Pause/Resume timer as required.
    - Finish the timer early when required.


# Performance report
Upload [profiler report](https://github.com/shivamkantival/test-react-app/blob/master/profiling-data.29-03-2020.01-25-03.json) to React Profiler to view results for inital page load of the application. It can be seen that the number of updates are minimal. Also, for every update only the components with changed data re-render.

# Things to note
- Delay of 3 seconds has been added to API-fetch to introduce the desired load time.
- In case a call fails to fetch data, a simple toast notification is displayed as of now. No additional handling has been done as desired behavior was not clear.
- React's native hooks are being used for state management, no additinal state management library has been introduced.
- This is my first TypeScript project, might not have followed all the best practices. ¯\\_(ツ)_/¯

# Stack used
```
React
Styled-Components
```
