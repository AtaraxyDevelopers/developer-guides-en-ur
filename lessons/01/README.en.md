# 01. Parse configuration safely

[اردو](README.ur.md) · [Runnable source](example.mjs)

## What you will learn

Environment variables arrive as strings. Convert explicitly, then validate the range before using a port. A fallback should apply only when the value is absent; an invalid supplied value should produce a clear error.

## Run from the repository root

```sh
npm run lesson -- 01
```

Expected result:

```json
{
  "configured": 4310,
  "fallback": 3000
}
```

## Try it yourself

Try 0, 65536, and the text abc. Each should fail. An absent value should use 3000.

Read the function in example.mjs, make one change, then run the lesson and npm test.
Use the tests to explain the contract, not just to obtain a green result.
