import { motion } from "framer-motion";

export default function ShapeShifting() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }}
      className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10">
      <motion.div
        className="w-1/3 h-1/3 shadow-md bg-rose-400"
        animate={{
          scale: [1, 2, 2, 1],
          rotate: [0, 90, 90, 0],
          borderRadius: ["10%", "10%", "50%", "10%"],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </motion.div>
  );
}
