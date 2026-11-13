# 07. Test behavior and boundaries

[اردو](README.ur.md) · [Runnable source](example.mjs)

## What you will learn

A test states the result a caller expects. Start with a normal case, then add an empty collection and invalid input. Node includes an assertion library and test runner, so these examples need no test dependency.

## Run from the repository root

```sh
npm run lesson -- 07
```

Expected result:

```json
{
  "checksPassed": 3
}
```

## Try it yourself

Run npm test. Change the sum implementation and observe the failing assertions, then restore it.

Read the function in example.mjs, make one change, then run the lesson and npm test.
Use the tests to explain the contract, not just to obtain a green result.
