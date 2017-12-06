const DebugMode = true;
function DebugLog(msg: string, color?: string){
    color = color || "36";
    if (DebugMode){
        console.log("\x1b["+color+"m",msg,"\x1b[0m");
    }
}

import { TObject, TObjectList } from './main';

class TObj1 extends TObject{
    protected DoCreate(fn?: Function) {
        DebugLog('TObj1/Create','35');
        super.DoCreate(fn);
    }
}

class TObj2 extends TObject{
    protected DoCreate(fn?: Function) {
        DebugLog('TObj2/Create','35');
        //simulated async event
        setTimeout(() => {
            super.DoCreate(fn);    
        }, 1500);
    }
}

class TObj3 extends TObject{
    protected DoCreate(fn?: Function) {
        DebugLog('TObj3/Create','35');
        //simulated async event
        setTimeout(() => {
            super.DoCreate(fn);    
        }, 700);
    }
}

class TObj4 extends TObject{
    protected DoCreate(fn?: Function) {
        DebugLog('TObj4/Create','35');
        //simulated async event
        setTimeout(() => {
            super.DoCreate(fn);    
        }, 3000);
    }
}

/*---------------------------------------*/
DebugLog('--- create objects ------------');
let list = new TObjectList;
let obj1 = new TObj1;
let obj2 = new TObj2;
let obj3 = new TObj3;
let obj4 = new TObj4;

/*---------------------------------------*/
DebugLog('--- add objs to list ----------');
list.AddObject(obj1);
list.AddObject(obj2);
list.AddObject(obj3);
list.AddObject(obj4);

/*---------------------------------------*/
DebugLog('--- create all ----------------');
list.Create(function(){
    DebugLog('Creation Finalized','32');
    DebugLog('\nStarting Destroy\n');
    list.Destroy(function(){
        DebugLog('Destruction Finalized','32');
    });
});