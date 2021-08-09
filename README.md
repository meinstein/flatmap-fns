# flatmap-fns

Functional utils for your flat mapping needs.

```bash
npm i flatmap-fns
```

### _insert_

```js
import insert from 'flatmap-fns/insert'

const res = ['foo', 'bar', 'baz'].flatMap(insert('foo', 1))
console.log(res) // ['foo', 'foo', 'bar', 'baz']
```

### _keep_

```js
import keep from 'flatmap-fns/keep'

const resA = ['foo', 'bar', 'baz'].flatMap(keep(1))
console.log(resB) // ['bar']

const resB = ['foo', 'bar', 'baz'].flatMap(keep(1, 2))
console.log(resB) // ['bar', 'baz']
```

### _key_

```js
import key from 'flatmap-fns/key'

const res = [{ id: 'foo' }, { id: 'bar' }].flatMap(key('id'))
console.log(res) // ['foo', 'bar']
```

### _length_

```js
import length from 'flatmap-fns/length'

const res = ['foo', ['bar', 'baz']].flatMap(length())
console.log(res) // [3, 2]
```

### _remove_

```js
import remove from 'flatmap-fns/remove'

const resA = ['foo', 'bar', 'baz'].flatMap(remove(1))
console.log(resA) // ['foo', 'baz']

const resB = ['foo', 'bar', 'baz'].flatMap(remove(0, 1))
console.log(resB) // ['baz']
```

### _replace_

```js
import replace from 'flatmap-fns/replace'

const res = ['foo', 'bar', 'baz'].flatMap(replace(1, 'foo'))
console.log(res) // ['foo', 'foo', 'baz']
```

### _resize_

```js
import resize from 'flatmap-fns/resize'

const resA = [1].flatMap(resize(3))
console.log(resA) // [1, undefined, undefined]

const resB = [1, 2, 3, 4, 5].flatMap(resize(3))
console.log(resB) // [1, 2, 3]
```

### _shuffle_

```js
import shuffle from 'flatmap-fns/shuffle'

const res = [1, 2, 3, 4, 5].flatMap(shuffle())
console.log(res) // will be shuffled, eg, [5, 2, 1, 4, 3]
```

### _sum_

```js
import sum from 'flatmap-fns/sum'

const res = [1, 2, 3].flatMap(sum())
console.log(res) // [6]
```

### _transpose_

```js
import transpose from 'flatmap-fns/transpose'

const res = ['foo', 'bar', 'baz'].flatMap(transpose(1, 2))
console.log(res) // ['foo', 'baz', 'bar']
```

### _truthy_

```js
import truthy from 'flatmap-fns/truthy'

const res = ['foo', undefined, 'baz', null].flatMap(truthy())
console.log(res) // ['foo', 'baz']
```

### _uniq_

```js
import uniq from 'flatmap-fns/uniq'

const res = ['foo', 'foo', 'bar', 1, 1].flatMap(uniq())
console.log(res) // ['foo', 'bar', 1]
```
