import { motion } from "framer-motion";

export default function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0.35, filter: "blur(6px)"  }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.7 }}
      viewport={{ amount: 0.8}} // 👈 triggers when 20% is visible
    >
      {children}
    </motion.div>
  );
}
