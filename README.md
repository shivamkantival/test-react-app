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
- `useInfiniteScroll` : This is a ready-to-use custom hook that takes care of the following use-cases
-- Automatically calls 'fetchMore' if fetched data is not able to fill the scroll container.
-- Listens to updates in dimensions of the scroll container(due to viewport changes), and fetches more data if available data does not fill updated scroll container.
-- Listens to updates in scrollHeight of scroll container( due to introduction of new data), and fetches more data if avaiable data does not fill updated scroll container.
-- And yes of-course, fetches more data when user scrolls to a given threshold.
- `PlatformPusherNotifications` : Central hub for complete application to display any toast notifications to user. Managed by Context API.

# Performance report
Upload [profiler report](https://github.com/shivamkantival/test-react-app/blob/master/profiling-data.29-03-2020.01-25-03.json) to React Profiler and the results for inital page load of the application. It can be seen that the number of updates are minimal. Also, for every update only the components with changed data re-render.

# Things to note
- Delay of 3 seconds has been added to API-fetch to introduce the desired load time
- This is my first TypeScript project, might not have followed all the best practices ¯\\_(ツ)_/¯

# Stack used
```
React
Styled Components
```
