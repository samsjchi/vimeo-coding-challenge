# Vimeo Front-End Coding Challenge
Using the [Vimeo Developer API](https://developer.vimeo.com/), this simple React application fetches videos from Vimeo's "Staff Picks" channel in a clean and familiar web player interface, not unlike a darker cousin of Vimeo's current UI. The overall effect is one where the most important element--the content--jumps off the page.

Check it out here:  https://vimeostaffspicks.herokuapp.com/

## Local Setup
Clone this repository and create a local copy on your desktop:
```
$ git clone https://github.com/samsjchi/vimeo-coding-challenge.git
```
To install dependencies, navigate into the directory and run:
```
$ npm install
```
Run the app in development mode on your local server:
```
$ npm start
```
Open the app in your web browser by visiting: https://localhost:3000.

## Application Structure
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
```
├── public
│   ├── favicon.ico
│   └── index.html
│
└── src
    ├── assets
    │   ├── fonts
    │   └── img
    │
    ├── components
    │   ├── App
    │   │   ├── App.css
    │   │   ├── App.js
    │   │   └── App.test.js
    │   │
    │   ├── Header
    │   │   ├── Header.css
    │   │   └── Header.js
    │   │
    │   ├── VideoList
    │   │   ├── VideoList.css
    │   │   ├── VideoList.js
    │   │   ├── VideoListItem.css
    │   │   └── VideoListItem.js
    │   │
    │   └── VideoPlayer
    │       ├── VideoPlayer.css
    │       └── VideoPlayer.js
    │
    ├── index.css
    └── index.js
```

## Supplemental Questions
>Was the question/problem clear? Did you feel like something was missing or not explained correctly?

The prompt was clear and I enjoyed the fact that it was fairly open-ended, which allowed me to get the creative juices flowing and have a lot of fun designing the UI.

One small thing I'd like to point out is that it seems like Vimeo's "Simple API" doesn't exist anymore. The URL (https://developer.vimeo.com/apis/simple) just redirects to the Vimeo Developer API homepage.

>How much time did you spend on each part: understanding, designing, coding, testing?

* **Understanding:**  10 minutes
* **Designing:**  ~1 hour
* **Coding:**  ~2-3 hours
* **Testing:**  30 minutes

>What would you have done differently if you have more time or resources?

* **Additional features:**  search functionality, view additional channels/categories, display category tags and comments, share functionality
* **Style improvements:**  highlight video in sidebar when currently selected, scroll to top when a video is selected, ability to responsively make video embed screen size bigger (similar to YouTube's "Theater" mode), transitions/animations
* **Error handling:**  set up tests (with tools like Mocha/Chai/Jest/Enzyme), add a loading spinner if API is slow/broken
* **Performance improvements:**  cache data locally whenever possible, optimize images/CSS (these aren't necessary for a small application like this but it wouldn't hurt)

>Are there any bottlenecks with your solution? If so, what are they and what can you do to fix them/minimize their impact?

Since this is a tiny application with only one view and one API call that returns a small amount of data, there aren't any glaring bottlenecks in terms of performance, especially with the optimizations that React takes care of under the hood.

Thanks to its virtual DOM, React quickly determines the minimal changes needed (e.g., when a new video is clicked) to bring the app to the desired state. After the initial App component is rendered, and the video data is fetched from the Vimeo API and stored in its state, all future re-renders are re-using/updating existing DOM nodes (i.e., its child components) and not creating new ones.

>How would the system scale for more users/visitors?

As the number of users goes up, the primary bottleneck for this application is the data fetching from Vimeo's API, which limits the number of calls per hour. This can be combated by caching the JSON response data locally so that each page can load from the cache where possible and API calls are only made for new data. In addition, if this app included a search feature like most video applications do, for example, I would implement some sort of throttling/debouncing to limit the number of calls.

>How would your solution cope if the API was slow or broke or returned incorrect data?

Currently, the page displays a div that says "Loading..." if the API is slow or broken, which can definitely be improved upon by implementing a loading spinner instead. My solution does not currently handle incorrect data but data validation/error handling techniques definitely could be implemented.
