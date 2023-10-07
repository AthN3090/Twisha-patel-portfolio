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
    initial={{ 
        opacity:"0",
        filter: "blur(1px)",
        y:' 0%',
        x:'0%'
    }} 
    animate={{ 
        opacity:[0,1,1,1],
        filter: ["blur(10px)","blur(0px)","blur(0px)","blur(0px)"],
        y:['0%', '0%', '0%', '-200%'],
        
        
    }}
    transition={{ease:"easeIn", duration:"1.2",times: [0, 0.3, 0.6, 1]}}
    className="font-epilogue font-bold sm:text-6xl w-fit text-center text-3xl"
    >   
    Twisha Patel.
    </motion.div>

    <motion.div 
    initial={{ translateY:'100%' }} 
    animate={{ translateY:'0'  }}
    transition={{ ease:"easeIn", delay: 0.7 , duration:"0.5"}}
    className="bg-landing-loading h-full w-full z-10 absolute bg-no-repeat bg-[length:100%_100%] aspect-video"
    >   
    </motion.div>


    </motion.div>      
        
    
    );
}

export default Loading;