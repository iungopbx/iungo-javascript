# eslint-plugin-iungo

plugin for iungo products

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-iungo`:

```
$ npm i eslint-plugin-iungo --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-iungo` globally.

## Usage

Add `iungo` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": ["iungo"],
    "extends": ["plugin:iungo/all"],
    // or
    "extends": ["plugin:iungo/all-warn"]
}
```





