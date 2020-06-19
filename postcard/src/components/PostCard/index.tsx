import React from 'react'
import { View, Text} from '@tarojs/components'
import './index.scss'
import { IPost } from '../type'

const PostCard: React.FC<IPost> = (props) => {
    return (
        <View className='postcard'>
            <Text className='post-title'>{props.title}</Text>
            <Text className='post-content'>{props.content}</Text>
        </View>
    )
}

export default PostCard