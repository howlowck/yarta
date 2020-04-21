import { AnyAction } from 'redux';
export interface ReduxActions {
}
export declare type ValueOf<T> = T extends {
    [key in keyof T]: infer U;
} ? U : never;
declare type IsActionFunc<R extends {
    [key in keyof R]: AnyAction;
}> = <T extends keyof R>(action: AnyAction, actionType: T) => action is R[T];
export declare const isAction: IsActionFunc<ReduxActions>;
export declare type Reducer<S = any> = (prevState: S, action: ValueOf<ReduxActions>) => {};
export {};
