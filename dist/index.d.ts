import { AnyAction, Reducer as ReduxReducer } from 'redux';
export interface ReduxActions {
    [key: string]: AnyAction;
}
export declare type ValueOf<T> = T extends {
    [key in keyof T]: infer U;
} ? U : never;
export declare type Reducer<S = any> = ReduxReducer<S, ValueOf<ReduxActions>>;
