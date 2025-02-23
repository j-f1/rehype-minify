<!--This file is generated by `build-packages.js`-->

# rehype-minify-whitespace

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

Collapse whitespace.

Normally, collapses to a single space.
If `newlines: true`, collapses whitespace containing newlines to `'\n'`
instead of `' '`.

## Install

This package is [ESM only][esm]:
Node 12+ is needed to use it and it must be `imported`ed instead of `required`d.

[npm][]:

```sh
npm install rehype-minify-whitespace
```

This package exports no identifiers.
The default export is `rehypeMinifyWhitespace`

## Use

On the API:

```diff
 import {unified} from 'unified'
 import rehypeParse from 'rehype-parse'
+import rehypeMinifyWhitespace from 'rehype-minify-whitespace'
 import rehypeStringify from 'rehype-stringify'

 unified()
   .use(rehypeParse)
+  .use(rehypeMinifyWhitespace)
   .use(rehypeStringify)
   .process('<span>some html</span>', function (err, file) {
     console.error(report(err || file))
     console.log(String(file))
   })
```

On the CLI:

```sh
rehype input.html --use minify-whitespace --output output.html
```

## Example

##### In

```html
<h1>Heading</h1>
<p><strong>This</strong> and <em>that</em></p>
```

##### Out

```html
<h1>Heading</h1><p><strong>This</strong> and <em>that</em></p>
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

[downloads-badge]: https://img.shields.io/npm/dm/rehype-minify-whitespace.svg

[downloads]: https://www.npmjs.com/package/rehype-minify-whitespace

[size-badge]: https://img.shields.io/bundlephobia/minzip/rehype-minify-whitespace.svg

[size]: https://bundlephobia.com/result?p=rehype-minify-whitespace

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
