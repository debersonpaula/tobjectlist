declare class TObject {
    OnCreate: boolean;
    OnDestroy: boolean;
    constructor();
    Create(fn?: Function): void;
    Destroy(fn?: Function): void;
    protected DoCreate(fn?: Function): void;
    protected DoDestroy(fn?: Function): void;
}
declare class TObjectList {
    private objectList;
    constructor();
    AddObject(obj: TObject): void;
    Create(fn?: Function): void;
    private CheckIfCreated(fn?);
    Destroy(fn?: Function): void;
    private CheckIfDestroyed(fn?);
}
export { TObject, TObjectList };
