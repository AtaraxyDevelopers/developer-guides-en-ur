# 10. Paginate without changing the source

[اردو](README.ur.md) · [Runnable source](example.mjs)

## What you will learn

A user-facing page number often starts at one, while array offsets start at zero. Validate the page and size, calculate the offset, and return a slice. An out-of-range page returns an empty array without modifying the source.

## Run from the repository root

```sh
npm run lesson -- 10
```

Expected result:

```json
{
  "first": [1, 2],
  "last": [5],
  "beyond": []
}
```

## Try it yourself

Try page 1, the last partial page, and a page beyond the end. Reject zero or negative sizes.

Read the function in example.mjs, make one change, then run the lesson and npm test.
Use the tests to explain the contract, not just to obtain a green result.
