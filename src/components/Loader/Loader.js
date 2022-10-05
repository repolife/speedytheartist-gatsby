import React from 'react'
import { motion } from 'framer-motion'

export const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            >
        </motion.div>
    )
}
