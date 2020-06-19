import React, { useState, useContext } from 'react';
import { Form, View, Text, Input, Textarea, Button, BaseEventOrig} from '@tarojs/components'
import PostsContext from '../PostsContext'
import './index.scss'
import { TextareaProps } from '@tarojs/components/types/Textarea';
import { InputProps } from '@tarojs/components/types/Input';
import { FormProps } from '@tarojs/components/types/Form';
import { ActionType,IPostsContext } from '../type';

const PostForm: React.FC<{}> = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const postsContext = useContext(PostsContext);

  const handleTitleInput = (eve: BaseEventOrig<InputProps.inputEventDetail>):void => {
    setTitle(eve.detail.value.trim());
  }

  const handleContentInput = (eve: BaseEventOrig<TextareaProps.onInputEventDetail>):void => {
    setContent(eve.detail.value.trim());
  }

  const handleSubmit = (eve: BaseEventOrig<FormProps.onSubmitEventDetail>):void => {
    eve.stopPropagation();
    (postsContext as IPostsContext).postsDispatch({type:ActionType.ADD,data:{title,content}});
    setTitle('');
    setContent('');
  }

  return (
    <View className='postform'>
      <Text>添加新帖子</Text>
      <Form onSubmit={handleSubmit}>
        <Text className='form-hint'>标题</Text>
        <Input className='input-title'
          type='text'
          placeholder='请输入标题'
          value={title}
          onInput={handleTitleInput}
        />
        <Text className='form-hint'>内容</Text>
        <Textarea className='input-content'
          placeholder='请输入内容'
          value={content}
          onInput={handleContentInput}
        />
        <Button className='form-button'
          type='primary'
          formType='submit'
        >提交</Button>
      </Form>
    </View>
  )
}

export default PostForm