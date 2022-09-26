import React, { useEffect } from 'react';
import { useAnimationControls, motion } from 'framer-motion';

export const useActive = ({ isActive, framer }) => {
    const controls = useAnimationControls();


    useEffect(() => {
        if (!isActive) return;
        controls.start({
            transition: {
                duration: 5
            },
            animate: {
                scale: 10
            },
            initial: { scale: 0 }

        })

    }, [isActive])

    return { controls }
}