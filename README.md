# react-native-toast
A toast component with react-native

* [x] support for iOS
* [x] support for Android

## Install
<code>npm install react-native-common-toast</code>

## Example
![REACT-NATIVE-COMMON-TOAST REACT-NATIVE-COMMON-TOAST EXAMPLE](https://raw.githubusercontent.com/zyq666/react-native-common-toast/master/example/example.gif "REACT-NATIVE-COMMON-TOAST EXAMPLE")

## Usage
```javascript
import Toast from 'react-native-common-toast/lib';
import {DURATION} from 'react-native-common-toast/lib/type';

// show success toast
Toast.success("success!");
// show fail toast
Toast.fail("fail!");
// show info toast
Toast.info("info");
// show loading toast
Toast.loading("loading...");
// show custom style toast
Toast.info({
  content: 'custom style',
  style: {backgroundColor: 'blue'}
});
// show modal toast and set duration
Toast.info({
  content: 'modal toast',
  modal: true,
  duration: DURATION.NONE
});
```
> if react-native version >= 0.62, insert ToastRoot within root component like this
> Read more about react-native-root-siblings
``` javascript
import {ToastRoot} from 'react-native-common-toast/lib';

export default () => {
  return <ToastRoot>
    <App />
  </ToastRoot>
}
```

## Events
| name | params | description |
| :----:| :----: | :----: |
| success | <a href="#props">Props</a> | show success toast |
| fail | <a href="#props">Props</a> | show fail toast |
| info | <a href="#props">Props</a> | show info toast |
| loading | <a href="#props">Props</a> | show loading toast |
| show | <a href="#props">Props</a> | the base function | 
| destroy | | destroy toast |

## <a name="props">Props</a>

> if props is a string, the toast will direct show the string in content 

> if props is an object, details are listed below

| name | default | type | description |
| :-----:| :----: | :----: | :----: |
| content | | string / JSX.Element | The content for toast, maybe is string or JSX.Element |
| duration | DURATION.SHORT | <a href="#duration">enum</a> | The duration for toast, if duration is DURATION.NONE, the toast will be not hide, unless you call function named destroy |
| modal | false | boolean | The modal for toast, if modal is true, you can do nothing before the toast has been destroyed |
| mask | | string | The mask color for toast |
| style | | ViewStyle | Custom style for toast |
| onhide | | function | When toast has been destroyed calling the function |
  
### <a name="duration">DURATION</a>
+ DURATION.SHORT = 5s
+ DURATION.LONG = 8s
+ DURATION.NONE = 0

## TODO
+ With animation and animation hooks
+ Show toast at the top or bottom in the screen
+ Add global toast config
+ Add custom icon in toast


