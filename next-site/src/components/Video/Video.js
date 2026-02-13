'use client'
import React from 'react'
import VideoItem from '.'
import { Title } from '@/style/base'

export const Video = ({ videoId }) => {
    if (!videoId) {
        return null
    }
    return (
        <>
            <VideoItem>
                <Title style={{ color: 'white' }}>Video</Title>
                <VideoItem.Source
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                />
            </VideoItem>
        </>
    )
}

export default Video
