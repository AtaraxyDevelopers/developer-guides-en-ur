# 02. Normalize and deduplicate text

[اردو](README.ur.md) · [Runnable source](example.mjs)

## What you will learn

Visually identical text can have different Unicode representations. Normalize to NFC before comparing strings, trim surrounding whitespace, and preserve the first occurrence. This rule is for exact normalized matches, not cultural assumptions about names.

## Run from the repository root

```sh
npm run lesson -- 02
```

Expected result:

```json
["Ali", "é", "عائشہ"]
```

## Try it yourself

Add a decomposed accented character and its composed form. Confirm they collapse to one entry.

Read the function in example.mjs, make one change, then run the lesson and npm test.
Use the tests to explain the contract, not just to obtain a green result.
