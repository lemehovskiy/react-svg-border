<h3 align="center">react-svg-border</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/lemehovskiy/react-svg-border.svg)](https://github.com/lemehovskiy/react-svg-border/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/lemehovskiy/react-svg-border.svg)](https://github.com/lemehovskiy/react-svg-border/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">
    React component for creating flexible SVG border around children.
    <br> 
</p>

## Demo <a name="demo"></a>

[Simple](https://codesandbox.io/s/react-svg-border-demo-3kgiz?file=/src/App.tsx)<br>
[Progress animation](https://codesandbox.io/s/react-svg-border-progress-animation-demo-m2kp6?file=/src/App.tsx)<br>
[Multiple paths](https://codesandbox.io/s/multiple-paths-demo-3jzqw?file=/src/App.tsx)<br>
[Morph demo](https://codesandbox.io/s/morph-demo-ouu1u?file=/src/App.tsx)

## 🧐 About <a name = "about"></a>

This project addresses the challenge of creating responsive borders or backgrounds with a dynamic ratio. Traditional SVG images lack this responsive behavior, making this component a valuable tool for enhancing web design.

## 🏁 Getting Started <a name = "getting_started"></a>

### Installing

```sh
npm i react-svg-border
```

### Example

App.tsx

```js
import React from 'react';
import SvgBorder from 'react-svg-border/dist';
import styles from './app.module.scss';

const borderConf = [
  {
    path: [
      "left, top",
      "right, top",
      "right, calc(100% - 30px)",
      "calc(100% - 30px), bottom",
      "left, bottom",
    ],
  },
];

function App() {
  return (
    <div className={styles.item}>
      <SvgBorder borderConf={borderConf}>
        <div className={styles.itemInner}>
          <div className={styles.itemTitle}>Lorem ipsum dolor</div>
          <div className={styles.itemDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </SvgBorder>
    </div>
  );
}

export default App;
```

App.module.scss

```scss
.item {
  max-width: 600px;
  margin: 20px auto 0;
}

.itemInner {
  padding: 30px 20px;
}

.itemTitle {
  font-size: 32px;
  font-weight: 700;
}

.itemDescription {
  margin: 20px 0 0;
  font-size: 18px;
}
```

### Result

![Demo](https://user-images.githubusercontent.com/11173488/142673220-772d95e9-941c-43d6-9995-f2d9deb9ba06.gif)

## API

| name                 | description                                                                                                                                    | type                 | default |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------- |
| figures*             | Here you can define multiple figures with individual properties, see [Figure Api](#figure-api) below for more details                          | FigureType[]         |         |
| figuresDefaultParams | Used for define default figure params, sames as [Figure Api](#figure-api) except path property                                                 | FiguresDefaultParams | {}      |
| children*            | The content of the component                                                                                                                   | JSX.Element, string  | string  |
| classes              | Override the styles applied to the component. See CSS API below for more details                                                               | object               | {}      |
| drawProgress         | Set drawing progress. See [Progress animation demo](https://codesandbox.io/s/react-svg-border-progress-animation-demo-m2kp6?file=/src/App.tsx) | number[]             | []      |
| morphProgress        | Set morph progress. See [Morph animation demo](https://codesandbox.io/s/morph-demo-ouu1u?file=/src/App.tsx)                                    | number[]             | []      |

## Figure API

| key         | description                                                                                           | type                                       | default   |
| ----------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------ | --------- |
| path*       | Cordinates of SVG. See [Path API](#path-api) below for more details                                   | (string \| { from: string; to: string })[] |           |
| type        | Defining type of svg, if you want to prevent connect last point to first, use polyline                | 'polyline' \| 'polygon'                    | 'polygon' |
| fill        | Fill svg property                                                                                     | string                                     | 'none'    |
| stroke      | Stroke svg property                                                                                   | string                                     | '#000'    |
| strokeWidth | Stroke width svg property, be aware this property used in calculating padding space for children wrap | number                                     | 1         |

## Path type

| type                       | decription                                                                                           |
| -------------------------- | ---------------------------------------------------------------------------------------------------- |
| string                     | Define static position. See [String coordinate type](#string-coordinate-type) below for more details |
| {from: string; to: string} | Define init(from) value and morph(to) value.                                                          |

## String coordinate type

Each cordinates should containt position by axis X and Y separated by comma.
| type          | description                                                                                                  | example                                                                                                                                                                                                                                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Px units      | Position defined without units or as px will be static and don't react to change the size of the element     | 30 pixels from left and 30px from top will be "30px, 30px" or "30, 30"                                                                                                                                                                                                                                                            |
| Percent units | Position defined with percent unit will react to element size, x-axis react to width, y-axis react to height | If element have size 200px width and 300px height, "50%, 50%" will be equal "100px, 150px", but in this case px values will be calculated by element resize                                                                                                                                                                       |
| Calc position | If we need to combine pixels and percents, we can use calc, it's similar to css property value calc          | If we need position in the top right corner, but we want 30px offset by the x-axis, we can use "calc(100% - 30), 0"                                                                                                                                                                                                               |
| Side position | This type of position helps define position by specific side with considering stroke width                   | If we have stroke width 5 and we want to place position in the top left corner, we should consider stroke width, so as result we will have "2.5, 2.5" and top right corner "calc(100% - 2.5), 2.5". Instead of this you can use side position and the top left corner will be "left, top", and the top right will be "right, top" |
