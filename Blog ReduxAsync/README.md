This project is about asynchronous Coding with Redux.

# REDUX Async Logic

Redux does everything synchronously.
So anything asynchronous has to happen outside the store.

# Redux Async Middleware: AsyncThunk

Thunks are recommended as a standard approach for writing async logic in Redux.

# What does Thunk mean?

The word "thunk" is a programming term that means a "a piece of code that does some delayed work". - Wikepedia

# createAsyncThank Arguments

1. String : prefix for the generated action type
2. Payload Creator callback: Returns a promise with some data or a rejected promise with an error.

# Fake API

We're requesting our data from this API: "https://jsonplaceholder.typicode.com/posts".
NOTE: This a fake API for practicing purposes that accepts Post Requests and get requests.


