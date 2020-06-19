import React, { useContext } from 'react'
import { View } from '@tarojs/components'
import PostsContext from '../PostsContext'
import PostCard from '../PostCard';
import { IPostsContext, IPost } from '../type';

const PostsList: React.FC<{}> = () => {
    const postsContext = useContext(PostsContext);
    return (
        <View>
            {
                (postsContext as IPostsContext).posts.map((value:IPost,index:number) => (
                    <PostCard key={`post${index}`} {...value} />
                ))
            }
        </View>
    )
}

export default PostsList