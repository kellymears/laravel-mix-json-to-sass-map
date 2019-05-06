const mix = require('laravel-mix')
const fs = require('fs')

class JsonToSassMap {
  name() {
    return 'jsonToCompass'
  }

  dependencies() {
    return [
      'lodash',
    ]
  }

  register(source, output, topLevelKey) {
    const sourceObj = fs.readFileSync(source)
    this.config = {
      source: JSON.parse(sourceObj).styles,
      output,
      topLevelKey,
    }
  }

  webpackPlugins() {
    this.mapJson(this.config.source, this.config.output, this.config.topLevelKey)
  }

  mapJson(source, output, key) {
    fs.writeFile(
      output,
      `$${key}: ${require('./jsonToScssString.js')(source)};\n`,
      (err => { err && console.log(err) })
    )
  }
}

mix.extend('jsonToSassMap', new JsonToSassMap())
