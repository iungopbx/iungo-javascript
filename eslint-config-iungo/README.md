# eslint-config-iungo

The eslint sharable config for the [RingCentral JavaScript Style Guide](https://github.com/iungopbx/iungo-javascript) and [RingCentral React Style Guide](https://github.com/iungopbx/iungo-javascript/tree/master/react-style-guide)

## Usage

Install packages

```bash
npm install eslint eslint-plugin-import eslint-plugin-react eslint-config-iungo eslint-plugin-sonarjs --save-dev
```

Create linter config or edit your own at the root directory of your project

**.eslintrc.yml**

```yaml
extends: 'iungo'
```

That's all. Run linter via command line

```bash
$ ./node_modules/.bin/eslint src
```

Or specify command in **package.json** for npm/yarn

```$ cat package.json```
```json
  "scripts": {
    "lint": "eslint src"
  }
```

then run linter
 
```bash
npm run lint
```
