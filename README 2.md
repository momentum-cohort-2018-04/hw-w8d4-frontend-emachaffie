# Contact Manager

## Skills tested

* Making React components
* Making Ajax requests
* Using localStorage
* Creating multiple-view React applications
* Using React Router

## Directions

For this project, you will build a full-featured contact manager over three days. This manager should be capable of:

* Showing all your contacts
* Searching your contacts for specific ones
* Showing all the details about one contact
* Updating a contact's information
* Creating a new contact
* Deleting a current contact

There are places you can skimp if necessary. Contacts _can_:

* Have only one address or multiple addresses
* Have only one email or multiple emails
* Have only one phone number or multiple phone numbers

It is always optimal to allow for multiple addresses, emails, or phone numbers.

Contacts will have:

* a name (required)
* an email
* a phone number
* an address
* a birthday
* a company
* a title

Each contact may not have all the information above, but they all should be capable of it.

The user interface is up to you. One bonus idea: make a banner show at the top of the page if it is the birthday of one of your contacts.

### API server

This project uses [json-server](https://github.com/typicode/json-server) to have a built-in API. When you run `npm start` or `yarn start`, the API server will start automatically on port 8000. POST, PUT, and DELETE requests to this API are persisted on disk in the file `db.json`.

This API requires HTTP basic authentication. The usernames and passwords for this API are stored in [src/server/users.js](src/server/users.js).

### Authentication

Because this API requires HTTP basic authentication, you will have to handle letting users log in. There is no access control -- any logged-in user can see and manipulate any data.

## Day-by-day plan

You can proceed with this application as you like, but a suggested plan is this:

* Day 1: Set up log in and showing a list of all contacts
* Day 2: Add ability to search, show, create, update, and delete contacts
* Day 3: Add React Router to give each contact their own URL
