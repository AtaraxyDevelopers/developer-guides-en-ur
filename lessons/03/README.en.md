# 03. Validate input without crashing

[اردو](README.ur.md) · [Runnable source](example.mjs)

## What you will learn

Validate the container before reading its fields. Return specific validation messages that a caller can display. Separate type checking from business requirements, and do not assume every request contains an object.

## Run from the repository root

```sh
npm run lesson -- 03
```

Expected result:

```json
[
  {
    "ok": false,
    "error": "Expected an object"
  },
  {
    "ok": true,
    "name": "عائشہ"
  }
]
```

## Try it yourself

Pass null, an array, and an object with a numeric name. None should crash.

Read the function in example.mjs, make one change, then run the lesson and npm test.
Use the tests to explain the contract, not just to obtain a green result.
