# 04. Handle an asynchronous failure

[اردو](README.ur.md) · [Runnable source](example.mjs)

## What you will learn

An awaited operation may reject. Catch only where you can decide what to do. This example allows one retry for a synthetic temporary error and propagates a second failure. Real retries need a policy that distinguishes temporary and permanent failures.

## Run from the repository root

```sh
npm run lesson -- 04
```

Expected result:

```json
{
  "attempts": 2,
  "result": "recovered"
}
```

## Try it yourself

Make both attempts throw and verify the caller receives an error. Do not retry payments blindly.

Read the function in example.mjs, make one change, then run the lesson and npm test.
Use the tests to explain the contract, not just to obtain a green result.
