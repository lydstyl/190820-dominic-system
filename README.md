# Dominic System

> Full stack MERN Dominic system manager with React hooks, context & JWT authentication.

This app can help you tu remember big numbers or undertand how to use Dominic system.

See the app : [Dominic system app](https://dominic-system.herokuapp.com/login).

## Todo before deploying

- When register put a loading spinner
- To fix : when logout a login with another user in Tool we first see last user cards and we have to go to settings and come back to get the current user cards

- OPTIONAL:
  - Get warned if try to register an unexisting user
  - When editing a number in Tool, save it to db too
  - Find and do the @todo

## Usage

Install dependencies

```bash
npm install
npm client-install
```

### Mongo connection setup

Edit your /config/default.json file to include the correct MongoDB URI

### Run Server

```bash
npm run dev     # Express & React :3000 & :5000
npm run server  # Express API Only :5000
npm run client  # React Client Only :3000
```
