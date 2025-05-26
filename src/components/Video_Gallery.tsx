'use client';

import Video from 'next-video'

export const Vid_Gallery = () => {
    return (
    <div  className='w-[650] h-auto'>
        <Video src={'/videos/ct-friends.mp4'}/>
    </div>
)
}