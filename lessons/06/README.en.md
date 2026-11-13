# 06. Call a local HTTP endpoint

[اردو](README.ur.md) · [Runnable source](example.mjs)

## What you will learn

Start a server on an automatically assigned loopback port, fetch a JSON response, check the status, and close the server. Using port zero avoids assuming a fixed port is free. No internet connection is needed for this lesson.

## Run from the repository root

```sh
npm run lesson -- 06
```

Expected result:

```json
{
  "message": "hello from loopback"
}
```

## Try it yourself

Change the response status to 503 and see why response.ok must be checked explicitly.

Read the function in example.mjs, make one change, then run the lesson and npm test.
Use the tests to explain the contract, not just to obtain a green result.
