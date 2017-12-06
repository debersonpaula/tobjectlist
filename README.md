#TObjectList

Small component to handle an Object List.

Objects can be created and destroyed sync and async, and the main event will be triggered after completion.

## Basic Usage

```
class TObj1 extends TObject{
    // Overload Create or Destroy function
    protected Create(fn?: Function) {
        // write your code here
        super.DoCreate(fn);
    }
}
```

Simulating async function

```
class TObj2 extends TObject{
    // Overload Create or Destroy function
    protected Create(fn?: Function) {
        setTimeout(() => {
            // write your code here
            super.DoCreate(fn);    
        }, 1500);
    }
}
```