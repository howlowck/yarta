export interface ReduxActions {
}
export declare type ValueOf<T> = T extends {
    [key in keyof T]: infer U;
} ? U : never;
