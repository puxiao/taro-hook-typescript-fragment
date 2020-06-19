import React, { useReducer } from 'react'
import { View } from '@tarojs/components'
import { PostsList, PostForm, PostsContext } from '@/components/index'
import { IPost, IAction, ActionType } from '@/components/type';

const postsReducer = (state: IPost[], action: IAction) => {
  switch (action.type) {
    case ActionType.ADD:
      return [...state, action.data];
    case ActionType.DEL:
      console.log(action.type, action.index);
      break;
  }
}

const Index: React.FC<{}> = () => {
  const [posts, postsDispatch] = useReducer(
    postsReducer, [{ title: '这是演示标题文字', content: '这是演示正文内容文字' }]
  )
  return (
    <PostsContext.Provider value={{posts,postsDispatch}} >
      <View>
        <PostsList />
        <PostForm />
      </View>
    </PostsContext.Provider>
  )
}

export default Index