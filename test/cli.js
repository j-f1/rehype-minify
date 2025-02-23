import fs from 'node:fs'
import path from 'node:path'
import {exec} from 'node:child_process'
import test from 'tape'
import {trimTrailingLines} from 'trim-trailing-lines'

test('preset', (t) => {
  const input = path.join('test', 'fixtures', 'small', 'input.html')
  const output = path.join('test', 'fixtures', 'small', 'output.html')
  const bin = path.join('.', 'node_modules', 'rehype-cli', 'cli.js')

  t.plan(2)

  // Preset is loaded from `.rehyperc`
  exec(bin + ' "' + input + '"', (error, stdout) => {
    t.ifErr(error)
    t.equal(
      stdout,
      trimTrailingLines(String(fs.readFileSync(output))),
      'should minify from the preset'
    )
  })
})
