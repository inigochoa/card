'use strict'

const fs = require('fs')
const path = require('path')
const boxen = require('boxen')
const chalk = require('chalk')

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

const data = [
  `${chalk.white('Iñigo Ochoa'.padStart(24))} / ${chalk.white('inigochoa')}`,
  '',
  `${chalk.white.bold('   Work:')}  ${chalk.white('Full stack developer')}`,
  '',
  `${chalk.white.bold(' GitHub:')}  ${chalk.gray('https://github.com/')}${chalk.green('inigochoa')}`,
  `${chalk.white.bold('    Web:')}  ${chalk.cyan('https://inigochoa.me/')}`,
  `${chalk.white.bold('Bluesky:')}  ${chalk.gray('https://bsky.app/profile/')}${chalk.green('inigochoa.me')}`,
  '',
  `${chalk.white.bold('   Card:')}  ${chalk.red('npx')} ${chalk.white('@inigochoa/card')}`,
]

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.magenta(boxen(data.join('\n'), options)))
