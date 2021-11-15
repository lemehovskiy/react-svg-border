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

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)

## 🧐 About <a name = "about"></a>

This project solves the issue of creating a responsive border or background based on SVG witch allows drawing any figure instead of a rectangle. Instead of this component, you can use regular SVG images but in this case, you lose responsive behavior.

## 🏁 Getting Started <a name = "getting_started"></a>

### Installing

```
npm i react-svg-border
```

### Example

App.tsx
```js
import React from "react";
import SvgBorder from "react-svg-border/dist";
import styles from "./app.module.scss";

const borderConf = [
  "left, top",
  "right, top",
  "right, calc(100% - 30px)",
  "calc(100% - 30px), bottom",
  "left, bottom",
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
  ![Demo](https://user-images.githubusercontent.com/11173488/141776810-b95c112b-8d03-4db9-a3d2-88a8577b2272.gif)