# 09. Understand UTC date boundaries

[اردو](README.ur.md) · [Runnable source](example.mjs)

## What you will learn

An instant and a calendar date are different concepts. An ISO timestamp with an offset may belong to the previous UTC day. Convert the timestamp before selecting the UTC date, and reject invalid timestamps.

## Run from the repository root

```sh
npm run lesson -- 09
```

Expected result:

```json
{
  "utcDay": "2025-12-31"
}
```

## Try it yourself

Compare midnight in UTC+05:00 with midnight UTC. Avoid this conversion for a date-only birthday field.

Read the function in example.mjs, make one change, then run the lesson and npm test.
Use the tests to explain the contract, not just to obtain a green result.
