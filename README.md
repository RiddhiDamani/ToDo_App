# Simple ReactJS To-Do App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Set-Up Instructions:

1. Clone this repository - https://github.com/RiddhiDamani/ToDo_App.git
2. Make sure to have **node** and **npm** installed in your system. To verify, Run the below commands
   in your Terminal/Command Prompt:

   $ node --version

   $ npm --version

3. Install create-react-app as a global npm package using the below command:

   $ create-react-app --version

   $ npm install -g create-react-app

4. Now, starting a React project i.e. executed from within project directory:

   npm start - This runs the app in the development mode.

5. To view it in the browser - Open [http://localhost:3000](http://localhost:3000)

### REST APIs

| Request Type | API                                             | Description    |
| ------------ | ----------------------------------------------- | -------------- |
| GET          | http://localhost:4000/todos                     | Retrieve ToDos |
| POST         | http://localhost:4000/todos                     | Create ToDo    |
| GET          | http://localhost:4000/todos/{id}                | Retrieve ToDo  |
| PUT          | http://localhost:4000/todos/{id}                | Update ToDo    |
| PATCH        | http://localhost:4000/todos/{id}                | Update ToDo    |
| DELETE       | http://localhost:4000/todos/{id}                | Delete ToDo    |
| GET          | http://localhost:4000/users                     | Retrieve Users |
| GET          | http://localhost:4000/login/{userid}/{password} | Perform Login  |
