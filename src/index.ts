import { AnyAction, Reducer as ReduxReducer } from 'redux'

export interface ReduxActions {
}

export type ValueOf<T> = T extends { [key in keyof T]: infer U ; } ? U : never
type IsActionFunc<R extends { [key in keyof R]: AnyAction }> = <T extends keyof R>(action: AnyAction, actionType: T) => action is R[T]

const isAction: IsActionFunc<ReduxActions> = (action, actionType): action is ReduxActions[typeof actionType] => action.type === actionType

export type Reducer<S = any> = (prevState: S, action: ValueOf<ReduxActions>) => {}