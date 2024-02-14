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

# Optimizing Redux to increase performance

# createSelector

- useSelector function is run each time an action is dispatched
- it forces a component to re-render if a new reference value is returned.

- `createSelector` function accepts one or more input functions - they're inside of brackets`[]`.
- Values returned from these functions are _dependencies_.
- They provide the _input parameters_ for the output function of the momoized selector

```javascript
export const selectPostByUser = createSelector(
  [selectAllPosts, (state, userId) => userId],
  (posts, userId) => posts.filter((post) => post.userId === userId)
);
```

-As shown above if the `selectAllPosts` value `posts` changes or the `userId` returned by the anonymous function changes--it is the only time that the selector rerun (it is _memoized_).

# Nomilization

- Normalized state structure - is a recommended approach for storing items.
- No duplication of data
- Creates an ID Lookup table
- E.g., a normalized state shape may be comprized of an object with an `ids` array and nested entities object that contains all of the items as shown below:

```javascript
{
  posts: {ids: [1,2,3,...]},
  entities: {
    "1":{
        userId: 1,
        id:1,
        title...etc
    }
  }
}
```

# Redux createEntityAdapter API
