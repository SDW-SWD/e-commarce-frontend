import t_shirts from '../assets/collection-T-shirt.png'
import shirts from '../assets/collection-shirt.png'
import frocks from '../assets/collection-frock.png'
import denims from '../assets/collection-denim.png'
import blouses from '../assets/collection-blouses.png'
import perfumes from '../assets/collection-perfumes.png'
import Header from '../pages/components/Header'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Tshirt from '../assets/T-shirtBento.png'

export default function SubCategory() {


    const gridVariants={
        hidden:{opacity:0},
        show:{opacity:1,
            transition:{
                staggerChildren:0.25,
            },
        },
    }


    const gridSquareVariants={
        hidden:{opacity:0},
        show:{opacity:1}
    }


    return (

        <main className=' h-screen pt-8 '>
            <div>
                <Header />
            </div>
            <motion.div variants={gridVariants} initial="hidden" animate="show" className='  gap-3 ` h-screen  grid grid-cols-2  p-20   max-lg:hidden '>
            <Link to={"tshirts/product"} state={{url:"tshirt",image:Tshirt}}>
                <motion.img variants={gridSquareVariants}  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-[100%] h-[100%] object-cover rounded-3xl' src={t_shirts} alt="" />
                </Link>
                <Link to={"shirts/product"} state={{url:"shirt",image:Tshirt}}>
                <motion.img variants={gridSquareVariants}  className='w-[100%] h-[100%] object-cover rounded-3xl' src={shirts} alt="" />
                </Link>
                <Link to={"denims/product"} state={{url:"denims",image:Tshirt}}>
                <motion.img variants={gridSquareVariants}  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-[100%] h-[100%] object-cover rounded-3xl' src={denims} alt="" />
                </Link>
                <Link to={"frocks/product"} state={{url:"frocks",image:Tshirt}}>
                <motion.img variants={gridSquareVariants}   whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-[100%] h-[100%] object-cover rounded-3xl' src={frocks} alt="" />
                </Link>
                <Link to={"blouses/product"} state={{url:"blouses",image:Tshirt}}>
                <motion.img variants={gridSquareVariants}  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-[100%] h-[100%] object-cover rounded-3xl' src={blouses} alt="" />
                </Link>
                <Link to={"perfumes/product"} state={{url:"perfumes",image:Tshirt}}>
                <motion.img variants={gridSquareVariants}  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-[100%] h-[100%] object-cover rounded-3xl' src={perfumes} alt="" />
                </Link>
            </motion.div>
            <motion.div variants={gridVariants} initial="hidden" animate="show" className=' p-16 gap-4 flex flex-col mt-3 lg:hidden'>
                <Link to='/tshirt/sub/product'>
                <motion.img variants={gridSquareVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-[100%] h-[100%] object-cover rounded-3xl' src={t_shirts} alt="" />
                </Link>
                <motion.img variants={gridSquareVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-[100%] h-[100%] object-cover rounded-3xl' src={shirts} alt="" />
                <motion.img variants={gridSquareVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-[100%] h-[100%] object-cover rounded-3xl' src={denims} alt="" />
                <motion.img variants={gridSquareVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-[100%] h-[100%] object-cover rounded-3xl' src={frocks} alt="" />
                <motion.img variants={gridSquareVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-[100%] h-[100%] object-cover rounded-3xl' src={blouses} alt="" />
                <motion.img variants={gridSquareVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='w-[100%] h-[100%] object-cover rounded-3xl' src={perfumes} alt="" />
            </motion.div>
        </main>
    )
}