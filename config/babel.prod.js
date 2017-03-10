var path = require('path');

module.exports = {
  // Don't try to find .babelrc because we want to force this configuration.
  babelrc: false,
  presets: [
    // Latest stable ECMAScript features
    require.resolve('babel-preset-latest'),
    // JSX, Flow
    require.resolve('babel-preset-react')
  ],
    plugins: [
        require.resolve('babel-plugin-transform-decorators-legacy'),
        require.resolve('babel-plugin-transform-export-extensions'),
        // class { handleClick = () => { } }
        require.resolve('babel-plugin-transform-class-properties'),
        // { ...todo, completed: true }
        require.resolve('babel-plugin-transform-object-rest-spread'),
        // function* () { yield 42; yield 43; }
        [require.resolve('babel-plugin-transform-regenerator'), {
            // Async functions are converted to generators by babel-preset-latest
            async: true
        }],
        // Polyfills the runtime needed for async/await and generators
        [require.resolve('babel-plugin-transform-runtime'), {
            helpers: false,
            polyfill: true,
            regenerator: true,
            // Resolve the Babel runtime relative to the config.
            // You can safely remove this after ejecting:
            // moduleName: path.dirname(require.resolve('babel-runtime/package'))
        }]
    ]
};
