# Process Timer ⏱

This class allows you to create a timer and measure the time of any process you want to know.

## Constructor
* **message**: It's the message that appear when timer has finished
* **starTime**: Value in seconds, if you want to start with a specific second

## Usage

```
const timer = new Timer();
timer.start();

doSomethingElse();

timer.finish();
```

## Output
```
Time to be completed: xx:xx:xx ⏱
```
