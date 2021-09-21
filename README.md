# Note-Taker

This application can be used to write and save notes, allowing the user to better organize their thoughts and keep track of the tasks they need to complete. This application uses an Express.js back end to save and retrieve note data from a JSON file.

How it works

The following steps explain how this "Note Taker" application works:

When a user opens the Note Taker, they are presented with a landing page containing a link to a notes page.
When the user clicks on the link to the notes page, they're presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note's text in the right-hand column.
When the user enters a new note title and the note's text, a save icon appears in the navigation at the top of the page.
When the user clicks on the save icon, the new note they've entered is saved and appears in the left-hand column with the other existing notes.
When the user clicks on an existing note in the list in the left-hand column, that note appears in the right-hand column.
When the user clicks on the write icon in the navigation at the top of the page, they're presented with empty fields to enter a new note and the note's text in the right-hand column.
Mock-Up

## Installation

This app uses an Express.js back end to save and retrieve note data from a JSON file. Node.js, which is a run-time environment which includes everything you need to execute a program written in JavaScript. If haven't downloaded the Node.js source code or a pre-built installer for your platform, you will need to do so using this link.

The dependencies required for this project are:

Express is the most widely used Node.js server framework, this allows us to create our own server-side APIs.

Generate Unique ID is used to generate a unique random ID string because each note needs a unique id when it's saved into our database.

To initialize your project and install these required dependencies, open a command prompt at the project's directory and run:

npm init -y // initialize the project with NPM
npm install express // for express dependencies
npm install generate-unique-id // for generate unique id dependencies
npm start starts the local host

## Demo

https://drive.google.com/file/d/1ahkHvJHZzAAfD42G6zRcTtHK2QUiem40/view
