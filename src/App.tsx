import { motion } from "framer-motion";
import FadeUpAnimate from "./components/fade-up";
import ShapeShifting from "./components/shape-shifting";
import Button from "./components/button";
import Drag from "./components/drag";
import ScrollProgress from "./components/scroll-progress";
import SvgAnimate from "./components/svg-animation";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export default function App() {
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 lg:grid-cols-3 p-10 gap-10">
        <FadeUpAnimate />
        <ShapeShifting />
        <Button />
        <Drag />
        <ScrollProgress />
        <SvgAnimate />
      </motion.section>
    </div>
  );
}
