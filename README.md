# React Simple Tooltip (FC)

[![npm version](https://img.shields.io/npm/v/react-simple-tooltip-fc.svg)](https://www.npmjs.com/package/react-simple-tooltip-fc)
[![bundle size](https://img.shields.io/bundlephobia/minzip/react-simple-tooltip-fc.svg)](https://bundlephobia.com/result?p=react-simple-tooltip-fc)
[![npm downloads](https://img.shields.io/npm/dm/react-simple-tooltip-fc.svg)](https://www.npmjs.com/package/react-simple-tooltip-fc)
[![license](https://img.shields.io/npm/l/react-simple-tooltip-fc.svg)](https://github.com/ferhatcklt/react-simple-tooltip-fc/blob/main/LICENSE)

A lightweight, accessible, and highly customizable tooltip component for React, built with Function Components and Hooks.

## Features

-   **🚀 Lightweight:** Zero dependencies and a minimal footprint.
-   **♿ Accessible:** Follows WAI-ARIA standards for tooltips, ensuring it's usable by everyone.
-   **🛡️ Robust:** Uses React Portals to render the tooltip at the top of the DOM, preventing UI clipping from parent elements with `overflow: hidden`.
-   **🎨 Customizable:** Easily control position, trigger events, colors, border-radius, and more.
-   **👌 Easy to Use:** Get started with a simple and intuitive API.

## Installation

```bash
npm install react-simple-tooltip-fc
```

or with Yarn:

```bash
yarn add react-simple-tooltip-fc
```

## Usage

### Basic Usage

Wrap any element with the `Tooltip` component and provide the `content` prop.

```jsx
import Tooltip from 'react-simple-tooltip-fc';

function DeleteButton() {
  return (
    <Tooltip content="This action cannot be undone!">
      <button>Delete</button>
    </Tooltip>
  );
}
```

### Advanced Usage

Customize the tooltip with various props for position, trigger behavior, and styling.

```jsx
import Tooltip from 'react-simple-tooltip-fc';

function UserProfile() {
  return (
    <Tooltip 
      content="Click to view profile" 
      position="right" 
      trigger="click"
      backgroundColor="royalblue"
      borderRadius={8}
    >
      <img src="/path/to/avatar.png" alt="User Avatar" />
    </Tooltip>
  );
}
```

## API (Props)

| Prop              | Type                               | Default   | Description                                                              |
| ----------------- | ---------------------------------- | --------- | ------------------------------------------------------------------------ |
| **`content`**     | `ReactNode`                        | -         | **Required.** The content to display inside the tooltip. Can be text or JSX. |
| `children`        | `ReactElement`                     | -         | The element that the tooltip will wrap.                                  |
| `position`        | `'top'`, `'bottom'`, `'left'`, `'right'` | `'top'`   | The position of the tooltip relative to the child element.               |
| `trigger`         | `'hover'`, `'click'`               | `'hover'` | The event that triggers the tooltip to show.                             |
| `backgroundColor` | `string`                           | `'#333'`  | The background color of the tooltip. Accepts any valid CSS color.        |
| `textColor`       | `string`                           | `'#fff'`  | The text color of the tooltip.                                           |
| `borderRadius`    | `number`                           | `4`       | The border-radius of the tooltip in pixels.                              |

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/ferhatcklt/react-simple-tooltip-fc).

## License

This project is licensed under the **MIT License**.