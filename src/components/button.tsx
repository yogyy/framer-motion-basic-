import { motion } from "framer-motion";

export default function Button() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }}
      className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10">
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{
          scale: 1.1,
          backgroundColor: "#d1d5db",
          color: "black",
        }}
        transition={{ bounceDamping: 10, bounceStiffness: 600 }}
        className="bg-emerald-600 w-1/2 py-4 rounded-lg text-2xl text-gray-100 font-light tracking-wide">
        subscribe
      </motion.button>
    </motion.div>
  );
}
