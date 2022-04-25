
# Pagination

## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Pagination } from 'react_dev_library';

function App() {
  return (
    <Pagination 
      totalLength={totalLength}
      itemPerPage={itemPerPage}
      selectedPage={currentSelectedPage}
      numberListPerSet={10}
    />
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));

```

## Props Reference

(*) indicates the mandatory props.

#### totalLength* : 100

Total length of the list.


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `totalLength` | `number` | *By Default* : 0 |



#### itemPerPage* : 10

Need to display no of item per page.


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `itemPerPage`      | `number` | *By Default* : 0 |


#### selectedPage* : function(selectedPageNumber : number)

callback function to get selected page number. 

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `selectedPage`      | `function` | *By Default* : null ( mandatory* ) |


#### numberListPerSet* : 5

Used to display pagination number. 

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `numberListPerSet`      | `number` | *By Default* : 5 |


