import React from 'react'
import VideoItem from '.'
import { Title } from '@style/base'

export const Video = ({ videoId }) => {
    return (
        <>
            {' '}
            <Title>Video</Title>
            <VideoItem>
                <VideoItem.Source
                    src={`https://www.youtube.com/embed/${videoId}`}
                />
            </VideoItem>
        </>
    )
}

export default Video
