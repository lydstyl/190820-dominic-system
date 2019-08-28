# Dominic System

> Full stack MERN Dominic system manager with React hooks, context & JWT authentication.

This app can help you tu remember big numbers or undertand how to use Dominic system.

## Todo before deploying

1. API rest

- keep authentificated when relaod Tool or Settings
- when connected fill local storage with all cards from db (even if not empty but if error get local storage then) and do the same with number in Tool
- when editing a card, save it to db
- optional
  - get warned if try to an unexisting user
  - get a loading when generating firsts paos
  - when connected fill local storage with (even if not empty but if error get local storage then) same with number in Tool
  - when not logged in, only show Login, Register and How to use it
  - when just registered or just loged in show Logout, Settings and Tool but no Login and no Register and also go to Tool
  - when editing a number in Tool, save it to db too
  - find and do the @todo

2. Auth

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
