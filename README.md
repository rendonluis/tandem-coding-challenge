# Trivia Game Coding Challenge

To run the game, in the project directory you can run:

### `yarn start`

or

### `npm run start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## About the App

I'm using node v14.5.0 and yarn v1.22.4.

I made a strong effort to randomize the question selection and answer display to create the most variation from the given question bank using a shuffle algorithm. I think I'd switch the approach slightly if my question bank was very large, but in this case I believe the solution is efficient and works well.

If I continued working on this app, I would like to see a greater selection of questions added as well as more types beyond mulitple choice. To make the change, I would probably make each type of question a separate component that handles the logic itself and only returns the updated score to the main component to allow for all kinds of new questions without breaking the original app. Also, if the app becomes very competitive, I'd probably want to move the question bank to a server because inspect element allows you to see the correct answer in the html.
