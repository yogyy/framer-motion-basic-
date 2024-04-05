import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress: completionProgress } = useScroll();
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }}
      className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10">
      <motion.div className="w-40 aspect-square bg-gray-50/20 rounded-xl">
        <motion.div
          className="w-full bg-gray-400 rounded-xl h-full origin-bottom"
          style={{ scaleY: completionProgress }}
        />
      </motion.div>
    </motion.div>
  );
}
