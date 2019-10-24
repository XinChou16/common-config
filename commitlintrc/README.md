

## Setup

1. dependencies

```shell
npm install --save-dev @commitlint/{config-conventional,cli}
npm install --save-dev commitlint husky
```

2. config

```js
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```
