<!--This file is generated by `build-packages.js`-->

# rehype-minify-doctype

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

Minify the doctype.

## Install

This package is [ESM only][esm]:
Node 12+ is needed to use it and it must be `imported`ed instead of `required`d.

[npm][]:

```sh
npm install rehype-minify-doctype
```

This package exports no identifiers.
The default export is `rehypeMinifyDoctype`

## Use

On the API:

```diff
 import {unified} from 'unified'
 import rehypeParse from 'rehype-parse'
+import rehypeMinifyDoctype from 'rehype-minify-doctype'
 import rehypeStringify from 'rehype-stringify'

 unified()
   .use(rehypeParse)
+  .use(rehypeMinifyDoctype)
   .use(rehypeStringify)
   .process('<span>some html</span>', function (err, file) {
     console.error(report(err || file))
     console.log(String(file))
   })
```

On the CLI:

```sh
rehype input.html --use minify-doctype --output output.html
```

## Example

##### In

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"><html><head></head><body></body></html>
```

##### Out

```html
<!doctype html><html><head></head><body></body></html>
```

## Contribute

See [`contributing.md`][contributing] in [`rehypejs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

[build-badge]: https://github.com/rehypejs/rehype-minify/workflows/main/badge.svg

[build]: https://github.com/rehypejs/rehype-minify/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/rehypejs/rehype-minify.svg

[coverage]: https://codecov.io/github/rehypejs/rehype-minify

[downloads-badge]: https://img.shields.io/npm/dm/rehype-minify-doctype.svg

[downloads]: https://www.npmjs.com/package/rehype-minify-doctype

[size-badge]: https://img.shields.io/bundlephobia/minzip/rehype-minify-doctype.svg

[size]: https://bundlephobia.com/result?p=rehype-minify-doctype

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/rehypejs/rehype/discussions

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[npm]: https://docs.npmjs.com/cli/install

[health]: https://github.com/rehypejs/.github

[contributing]: https://github.com/rehypejs/.github/blob/main/contributing.md

[support]: https://github.com/rehypejs/.github/blob/main/support.md

[coc]: https://github.com/rehypejs/.github/blob/main/code-of-conduct.md

[license]: https://github.com/rehypejs/rehype-minify/blob/main/license

[author]: https://wooorm.com
