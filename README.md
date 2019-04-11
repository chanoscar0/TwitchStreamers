Welcome to my Repo!

Here we have a basic web application that hits a GraphQL endpoint and grabs all of the Twitch streamers provided by the API. You can also select a certain streamer to display more details about them like the links and such.

In order to get started with it you must:

1. cd into the "code-challenge-api" and run ```npm start```. That will get your backend server up and running so that the React frontend can hit it.

2. Open up a separate terminal, and navigate back to the root folder of the repo if needed. Then run ```npm start ``` to get the app running on localhost:3000.

From there you can view and use the application as intended.

Things I would have worked on more if given more time:

1. Better Mobile UI, I didn't have time to implement media queries to change the mobile styling of stacking the streamers, also didn't have a good idea for how the mobile UI should look, seems like a navbar or sliding nav would've been better.

2. More testing, I tested some of the React components, and the Apollo Query, but for some reason my "final state" test wasn't working as intended so I removed it from the test suite.

3. Converted my inline-styling over to something like css-modules for better class separation of presentational tags

4. Re-arrange the logic a bit, couldn't decide on best practice when it came to when to send the Query for the selected Streamer.
