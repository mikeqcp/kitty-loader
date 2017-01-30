##How it works

It replaces modules with kitten images using _http://placekitten.com/_ service.

##Usage

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.jpg/,
        use: [ 'raw-loader', 'kitten-loader' ]
      }
    ]
  }
}
```

##Options

* **greyscale** [default: _false_] Use greyscale images only
* **width** [default: _undefined_] Width of the result image. Can be a number (specific value in px), 2-elements array ([min, max] range, value is randomized from this range), or undefined (image will have the same size as the source image)
* **height** [default: _undefined_] Height of the result image. Can be a number (specific value in px), 2-elements array ([min, max] range, value is randomized from this range), or undefined (image will have the same size as the source image)
