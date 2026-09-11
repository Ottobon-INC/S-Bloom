import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GlobalTransition = ({ isTransitioning }) => {
    return (
        <AnimatePresence>
            {isTransitioning && (
                <motion.div
                    initial={{ clipPath: 'polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)' }}
                    animate={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
                    exit={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                    transition={{
                        duration: 0.6,
                        ease: [0.645, 0.045, 0.355, 1.000]
                    }}
                    className="fixed inset-0 pointer-events-none"
                    style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000' }}
                >
                    <motion.img
                        src="/sbloom-logo.jpeg"
                        alt="sBloom Logo"
                        initial={{ opacity: 0, scale: 0.5, rotateY: -1080, filter: 'drop-shadow(0 0 0px rgba(212, 175, 55, 0))' }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0, filter: 'drop-shadow(0 0 30px rgba(212, 175, 55, 0.6))' }}
                        transition={{ 
                            duration: 1.0, 
                            ease: "easeOut",
                            rotateY: { duration: 1.0, ease: "easeInOut" },
                            filter: { delay: 0.3, duration: 0.7 }
                        }}
                        className="mb-4"
                        style={{ width: 'clamp(120px, 30vw, 180px)', height: 'auto', borderRadius: '50%' }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default GlobalTransition;
