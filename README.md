# Text Completer - Code Challenge

This project is a code challenge created to fetch on Github users and list them for the user to check their repositories and have the ability to filter the repositories by name and it's also responsive for users with a smaller screen width.

## Getting Started

Pull this project into your machine and once it is finished, open it and run a npm install to install all of the dependencies.
Once you have all of the dependencies installed (node_modules), you should be able to run the server by running the command: npm run dev

### Usage

- At the main screen you will have an input to type in any query that you want to fetch users by, once you typed in the value you want, you may hit the search button to fetch the users.

- Once the users are fetched and loaded on the screen, you will be able to go through all of the results by clicking on the arrow icons located at the bottom of the list to navigate through the pages.

- Note: All users that have been fetched will be stored, therefore, if you go to a page that you have already fetched the users, no API call will be triggered in the second time, the same works for the user's repositories, once you have fetched his repositories, the second time will not trigger an API call.

- Once you click on the button 'View Repositories' within a user card, you will see the list of repositories of that user that you can scroll through or filter it by typing a filter value in the input at the top. This input at the tops works as the autocomplete component requested by the test.

### Improvements

- Although this is a simple project, there are some things I would do to improve this application, such as adding test cases and persisting data on page reload.

- I would also not have any logic in the App.tsx file, there I would only have a Router to define Routes if that would be the case.