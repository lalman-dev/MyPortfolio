export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    opacity: 1,
    Transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    opacity: 1,
    Transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const imageVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    Transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};
