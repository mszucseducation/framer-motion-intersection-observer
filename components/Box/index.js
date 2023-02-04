import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import Paragraph from '../Paragraph'

export default function Box({num}) {

    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: {duration: 0.6}},
        hidden: { opacity: 0, scale: 0 }
    }

    const control = useAnimation()
    const [ref, inView] = useInView();

    useEffect(() => {
        if(inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    },[control, inView])

    return(
        <motion.div
            className="box"
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
        >
            <h1>Box {num}</h1>
            <Paragraph/>
        </motion.div>
    )
}