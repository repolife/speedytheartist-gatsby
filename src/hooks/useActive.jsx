import React, { useEffect } from 'react';
import { useAnimationControls, motion } from 'framer-motion';

export const useActive = ({ isActive, framer }) => {
    const controls = useAnimationControls();


    useEffect(() => {
        if (!isActive) return;
        controls.start({
            framer

        })

    }, [isActive])

    return { controls }
}

export default useActive;