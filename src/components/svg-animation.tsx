import { motion } from "framer-motion";

const svgIconVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(252, 211, 77, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(252, 211, 77, 1)",
  },
};

export default function SvgAnimate() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }}
      className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-1/2 stroke-amber-500 stroke-[0.5]">
        <motion.path
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
          variants={svgIconVariants}
          initial="hidden"
          animate="visible"
          transition={{
            default: {
              duration: 2,
              ease: "easeInOut",
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1,
            },
            fill: {
              duration: 2,
              ease: "easeIn",
              delay: 2,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1,
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
}
