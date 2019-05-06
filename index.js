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

  register(options) {
    const sourceObj = fs.readFileSync(options.src)
    const json = JSON.parse(sourceObj)

    this.config = {
      source: options.filterOn ? json[options.filterOn] : json,
      output: options.out,
      topLevelKey: options.topKey,
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
