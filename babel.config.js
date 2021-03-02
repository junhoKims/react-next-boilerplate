/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const modules = fs
  .readdirSync(path.join(__dirname, 'src'))
  .map((value) => path.basename(value, path.extname(value)))

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        alias: modules.reduce((prev, cur) => {
          return {
            ...prev,
            [cur]: `./src/${cur}`,
          }
        }, {}),
      },
    ],
  ],
}
