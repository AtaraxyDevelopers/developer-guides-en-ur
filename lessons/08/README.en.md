# 08. Keep secrets out of output

[اردو](README.ur.md) · [Runnable source](example.mjs)

## What you will learn

Read configuration from an explicit environment object. Validate that a required token exists, then return a diagnostic summary that contains only whether it is configured. Never print a token as part of troubleshooting output.

## Run from the repository root

```sh
npm run lesson -- 08
```

Expected result:

```json
{
  "tokenConfigured": true,
  "mode": "development"
}
```

## Try it yourself

Pass an empty token and expect an error. Confirm the configured token never appears in the summary.

Read the function in example.mjs, make one change, then run the lesson and npm test.
Use the tests to explain the contract, not just to obtain a green result.
