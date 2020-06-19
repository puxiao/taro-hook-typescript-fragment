import React from 'react'

export enum ActionType {
    ADD = 'add',
    DEL = 'del'
}

export interface IPost {
    title: string,
    content: string
}

export interface IAction {
    type: ActionType,
    index?: number,
    data?: IPost
}

export interface IPostsContext {
    posts: IPost[],
    postsDispatch: React.Dispatch<IAction>
}
