# Developer Guides: English and Urdu

[![CI](https://github.com/AtaraxyDevelopers/developer-guides-en-ur/actions/workflows/ci.yml/badge.svg)](https://github.com/AtaraxyDevelopers/developer-guides-en-ur/actions/workflows/ci.yml)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Ten bilingual practical lessons with runnable JavaScript examples and tests.

An open-source project from [Ataraxy Developers](https://github.com/AtaraxyDevelopers).

## Quick start

Requires Node.js 22 or 24 and npm. Git is optional if you download the source ZIP.

```sh
git clone https://github.com/AtaraxyDevelopers/developer-guides-en-ur.git
cd developer-guides-en-ur
npm ci
npm test
```

Run every lesson, or choose one:

```sh
npm run demo
npm run lesson -- --list
npm run lesson -- 01
```

## Lessons / اسباق

| #   | English                                                         | اردو                                                                 |
| --- | --------------------------------------------------------------- | -------------------------------------------------------------------- |
| 01  | [Parse configuration safely](lessons/01/README.en.md)           | [ترتیبات کو درست طریقے سے پڑھیں](lessons/01/README.ur.md)            |
| 02  | [Normalize and deduplicate text](lessons/02/README.en.md)       | [متن کی یکساں صورت اور نقل کی پہچان](lessons/02/README.ur.md)        |
| 03  | [Validate input without crashing](lessons/03/README.en.md)      | [اندراج کی جانچ میں پروگرام کو محفوظ رکھیں](lessons/03/README.ur.md) |
| 04  | [Handle an asynchronous failure](lessons/04/README.en.md)       | [غیر ہم وقتی کام کی ناکامی سنبھالیں](lessons/04/README.ur.md)        |
| 05  | [Write and read a JSON file](lessons/05/README.en.md)           | [JSON فائل لکھیں اور پڑھیں](lessons/05/README.ur.md)                 |
| 06  | [Call a local HTTP endpoint](lessons/06/README.en.md)           | [مقامی HTTP درخواست بھیجیں](lessons/06/README.ur.md)                 |
| 07  | [Test behavior and boundaries](lessons/07/README.en.md)         | [رویے اور حدود کی جانچ کریں](lessons/07/README.ur.md)                |
| 08  | [Keep secrets out of output](lessons/08/README.en.md)           | [خفیہ معلومات کو آؤٹ پٹ سے دور رکھیں](lessons/08/README.ur.md)       |
| 09  | [Understand UTC date boundaries](lessons/09/README.en.md)       | [UTC تاریخ کی حد سمجھیں](lessons/09/README.ur.md)                    |
| 10  | [Paginate without changing the source](lessons/10/README.en.md) | [اصل فہرست بدلے بغیر صفحہ بندی کریں](lessons/10/README.ur.md)        |

Each lesson has original English and Urdu explanations, the same runnable source,
expected output, and a small exercise. The test suite executes all ten examples and
checks additional boundary cases. HTTP and file lessons clean up their own temporary
resources. No paid service, API key, or internet access is required after checkout
and initial installation.

## Learning path

Work in order if you are new to JavaScript. Read one explanation, run the example,
predict the effect of a change, and then test it. These lessons assume basic familiarity
with a terminal and JavaScript syntax; they introduce practical habits rather than
covering the whole language.

## Translation contributions

Keep both languages aligned with the actual code and expected output. Preserve code
identifiers and terminal commands. Explain technical terms in plain language; avoid
word-for-word translations that obscure the meaning. Urdu prose uses right-to-left
containers while commands remain left-to-right. Native-speaker improvements are welcome.

## Scope and limitations

These are small educational examples with synthetic inputs, not production services.
The retry lesson intentionally omits a production retry policy; the UTC lesson is
for timestamps with explicit offsets, not date-only fields. See each lesson's contract
before copying it into an application.

## Contributing and support

See [CONTRIBUTING.md](CONTRIBUTING.md), [community expectations](CODE_OF_CONDUCT.md),
and [SECURITY.md](SECURITY.md). Open an issue with a minimal synthetic reproduction.
This project is maintained on a best-effort basis. No paid service or account is
required to run the local examples.

## License

[MIT](LICENSE). You may use, adapt, and redistribute this project under its license.
