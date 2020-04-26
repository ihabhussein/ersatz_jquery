# Ersatz jQuery

## Why?

`ersatz_jquery.js` is just 2kb unminified, and about 1kb minified yet it can do some of
the most used jQuery functions.

It allows to call the DOM's native methods on multiple elements.

Also, calls can be chained. See the example to get an idea on how it works.

## Usage

| Usage         | Description                                                       |
|:--------------|:------------------------------------------------------------------|
| `$(cb)`       | Adds `cb` as an event listenet for the `window`'s `load` event    |
| `$(selector)` | Reterns an object containing the selected elements                |

## Methods

| Method        | Description                                                   | Chaining? |
|:--------------|:--------------------------------------------------------------|:----------|
| `.on(ev, cb)` | Adds `cb` as an event listenet for event `ev`                 | Yes       |
| `.show()`     | Shows (unhides) the element[s]                                | Yes       |
| `.hide()`     | Hides the elements                                            | Yes       |
| `.css()`      | Returns the first element's style object                      | No        |
| `.css(k)`     | Returns the value of the first element's style property _k_   | No        |
| `.css(k, v)`  | Set's the elements' style property _k_ to value _v_           | Yes       |
| `.prop()`     | Returns the first element's attributes collection             | No        |
| `.prop(p)`    | Returns the value of the first element's _p_ attribute        | No        |
| `.prop(p, v)` | Sets the elements' _p_ attriputes to _v_                      | Yes       |
| `.text()`     | Returns the first element's inner text                        | No        |
| `.text(v)`    | Sets the elements' inner text to _v_                          | Yes       |
| `.html()`     | Returns the first element's inner HTML                        | No        |
| `.html(v)`    | Sets the elements' inner HTML to _v_                          | Yes       |
| `.val()`      | Returns the first element's value                             | No        |
| `.val(v)`     | Sets the elements' value to _v_                               | Yes       |

## Browsers Compatibility

The script should work on all modern browsers. It *DOES NOT* work in any version
of Internet Explorer.

## License

`ersatz_jquery.js` is freely distributable under the terms of the BSD-2-Clause license.
