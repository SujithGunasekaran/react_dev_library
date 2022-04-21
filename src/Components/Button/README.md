
# Button

## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react_dev_library';

function App() {
  return (
    <Button variant="fill" mode="primary">
      Primary Button
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));

```

## Props Reference

#### variant : 'filled' | 'outlined' 

```
<Button variant="fill">Varient Fill Button</Button>
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `variant` | `string` | *By Default* : 'filled' |



#### mode : 'primary' | 'success' | 'danger'

```
<Button mode="primary">Success Button</Button>
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `mode`      | `string` | *By Default* : 'primary' |


#### type : 'button' | 'submit'

```
<Button type="button">Success Button</Button>
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `type`      | `string` | *By Default* : 'button' |


#### shape : 'rounded' | 'sharp'

```
<Button shape="rounded">Success Button</Button>
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `shape`      | `string` | *By Default* : 'rounded' |


#### disabled : true | false

```
<Button disabled={true}>disabled Button</Button>
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `disabled`      | `boolean` | *By Default* : false |


