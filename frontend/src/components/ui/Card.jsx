import { motion } from "framer-motion";

function Card({

children,

className=""

}){

return(

<motion.div

initial={{

opacity:0,

y:20

}}

animate={{

opacity:1,

y:0

}}

whileHover={{

scale:1.02,

y:-5

}}

transition={{

duration:0.25

}}

className={`

bg-zinc-900/90

backdrop-blur-xl

border

border-zinc-800

rounded-3xl

shadow-2xl

p-7

${className}

`}

>

{children}

</motion.div>

);

}

export default Card;