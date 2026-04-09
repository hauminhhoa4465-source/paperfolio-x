import { motion } from "motion/react";

const logos = ["startup", "venture", "agency", "company", "startup", "venture", "agency", "company"];

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-8 -rotate-2 scale-105 my-20 border-y-4 border-black">
      <motion.div 
        className="flex whitespace-nowrap gap-12 items-center"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center gap-4 text-white text-4xl font-black uppercase tracking-tighter italic">
            <div className="w-8 h-8 bg-[#FF5A5F] rounded-full" />
            {logo}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
