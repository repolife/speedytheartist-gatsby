import React from 'react'
import VideoItem from '.'
import { Title } from '@style/base'

export const Video = ({ videoId }) => {
    if (!videoId) {
        return null
    }
    return (
        <>
            {' '}
            <VideoItem>
                <Title>Video</Title>

                <VideoItem.Source
                    src={`https://www.youtube.com/embed/${videoId}`}
                />
            </VideoItem>
        </>
    )
}

export default Video
