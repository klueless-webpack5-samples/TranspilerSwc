# Transpiler SWC

> Transpiler SWC using Webpack 5

As a SPA Developer, I want use the latest EcmaScript features, so that I can have a productive coding experience

SWC is a new competitor to Babel. It is written in Rust and up to 20 times faster. This can be very important if you find yourself waiting a long time to build your project.

This code is based off this article [Why you don’t need Babel](https://blog.logrocket.com/why-you-dont-need-babel/)

## Before and After

Before and after for Transpiler SWC using Webpack 5

<table>
<tr>
  <th>Before</th>
  <th>After</th>
</tr>
<tr>
  <td>
  
  ![Before](shot-before.png 'Before screenshot')
  
  </td>
  <td>
  
  ![After](shot-after.png 'After screenshot')
  
  </td>
</tr>
</table>

## Development

Run VSCode Live Server on index.html or open in your browser

```bash
# cd [YouCustomDevFolder]
git clone git@github.com:klueless-html-samples/TranspilerSwc.git && cd TranspilerSwc

npm install

# use a command to open index.html in browser.
# this is how I setup my Mac alias for chrome
# alias chrome="open -a Google\ Chrome"
chrome index.html
```

## License

The code is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Copyright

Copyright (c) David Cruwys. See [MIT License](LICENSE.txt) for further details.
