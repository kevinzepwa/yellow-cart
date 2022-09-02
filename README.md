# Yellow Cart App

- Product cart application
- API endpoint: https://fakestoreapi.com/products
- dB JSON Server

## Setting up
Run live-server
It opens the application on port 5500 on the browser window. The page contains products fetched from the [https://fakestoreapi.com/products][fakestore] API.

## Setting up JSON Server

Install JSON Server:

```console
$ npm install json-server
```

Spin up a mock server from the project directory that will provide the basic set of data through the db.json to start with.

## Start the Server

To start JSON Server, run the following command from the same directory that
`db.json` is in:

```console
$ json-server --watch db.json
```
JSON Server will start up on port `3000`. You can access the server at `http://localhost:3000`.
**Resources** include `http://localhost:3000/products`.
