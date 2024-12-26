# redux toolkit 라이브러리 추가
yarn add @reduxjs/toolkit

# 내보내기 방식 차이점

## Named Export
- import {test} from 'export.js'
```
    export const test = {
        ....
    }
```

## Default Export
- import test from 'export.js'
```
    const test = {
        ....
    }
    export defaults test;
```

