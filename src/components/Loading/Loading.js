'use client'
import { AnimatePresence, motion } from "framer-motion";

function Loading() {
    return (
        

            
    <motion.div className="h-screen w-screen bg-white z-[2] fixed overflow-hidden flex items-center justify-center"
    initial={{ opacity: 1 }} 
    animate={{ opacity: 1 }}
    exit={{opacity: 0}}
    transition={{duration:3}}
    >
    
    <motion.div 
    initial={{ opacity: 0,
        y:' 0%',
        x:'0%'
    }} 
    animate={{ 
        opacity: [0, 1, 1, 1],
        y:['0%', '0%', '0%', '-200%'],
        
        
    }}
    transition={{ease:"easeIn", duration:"1.2",times: [0, 0.3, 0.6, 1]}}
    className="font-epilogue font-bold text-6xl w-fit"
    >   
    Twisha Patel.
    </motion.div>

    <motion.div 
    initial={{ translateY:'100%' }} 
    animate={{ translateY:'0'  }}
    transition={{ ease:"easeIn", delay: 0.7 , duration:"0.35"}}
    className="bg-landing-loading h-full w-full z-10 absolute bg-no-repeat bg-[length:100%_100%] aspect-video"
    >   
    </motion.div>


    </motion.div>      
        
    
    );
}

export default Loading;