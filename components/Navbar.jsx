'use client';
import { motion } from 'framer-motion';


import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <img
        src="/A5.png"
        alt="search"
        className="w-[140px] h-[60px] object-contain leading-[30.24px]  "
      />
      
   
    </div>
  </motion.nav>
);

export default Navbar;
