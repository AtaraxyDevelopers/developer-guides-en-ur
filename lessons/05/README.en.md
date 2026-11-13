# 05. Write and read a JSON file

[اردو](README.ur.md) · [Runnable source](example.mjs)

## What you will learn

Serialize data to UTF-8 JSON, read it back, and parse it before use. Work in a unique temporary directory and clean up with finally so failures do not leave files behind. This is an exercise, not a crash-durable database.

## Run from the repository root

```sh
npm run lesson -- 05
```

Expected result:

```json
{
  "message": "السلام علیکم",
  "synthetic": true
}
```

## Try it yourself

Add an Urdu field and verify it survives the round trip. Observe that cleanup runs even if parsing fails.

Read the function in example.mjs, make one change, then run the lesson and npm test.
Use the tests to explain the contract, not just to obtain a green result.
