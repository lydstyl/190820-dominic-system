# Dominic System

> Full stack MERN Dominic system manager with React hooks, context & JWT authentication.

This app can help you tu remember big numbers or undertand how to use Dominic system.

## Todo before deploying

1. API rest

- When editing a card, save it to db
- When register put a loading spinner
- To fix : when logout an login with another user in Tool we first see last user cards and we have to go to settings and come back to get the current user cards
- Deploy

- OPTIONAL:
  - Get warned if try to an unexisting user
  - When editing a number in Tool, save it to db too
  - Find and do the @todo

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
