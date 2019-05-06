# Laravel Mix: Convert JSON to SCSS map()

Takes four options:

- `src`: source JSON
- `out`: SCSS file output
- `topKey`: SCSS map variable name
- `filterOn`: only include matching nodes from JSON source (optional)

## Usage

```js
require('laravel-mix-json-to-sass-map')

mix.jsonToSassMap({
  src: './input.json',
  out: './output.scss',
  topKey: 'example',
  filterOn: 'styles',
});
```

Will take this source:

```json
{
  "styles": {
    "fontSizes": {
      "small": "12",
      "normal": "16",
      "large": "20",
      "larger": "36"
    }
  },
  "other-data": {
    "should-be": "ignored"
  }
}
```

And write this SCSS file:

```scss
$example: (
  "bootstrap-enabled": true,
  "fontSizes": (
    "small": 12,
    "normal": 16,
    "large": 20,
    "larger": 36
  ),
);

```

**MIT&nbsp;&nbsp;&nbsp;&nbsp;||**&nbsp;&nbsp;
**&copy; 2019 Kelly Mears**