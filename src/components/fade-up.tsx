import { motion } from "framer-motion";

export default function FadeUpAnimate() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }}
      className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-5 sm:gap-10">
      <motion.div
        className="w-1/4 h-1/4 bg-stone-100 rounded-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      />
      <motion.div
        className="w-1/4 h-1/4 bg-stone-100 rounded-full"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      />
    </motion.div>
  );
}
