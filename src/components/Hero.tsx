import { motion } from "motion/react";
import Marquee from "./Marquee";

interface HeroProps {
  onViewWorks?: () => void;
}

export default function Hero({ onViewWorks }: HeroProps) {
  return (
    <div className="space-y-12">
      <section className="py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              我是<span className="highlight-pink">涂雪婷</span>
            </div>
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mt-3">
              一名<span className="highlight-blue">新媒体运营者</span>
            </div>
          </motion.div>

          <p className="text-2xl md:text-3xl text-gray-600 max-w-lg">
            Creativity is my life creed
          </p>

          <div className="flex gap-4">
            <button className="brutalist-button-black" onClick={onViewWorks}>
              查看作品
            </button>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="brutalist-button"
            >
              个人简历
            </a>
          </div>
        </div>

        <div className="flex-1 relative">
          <motion.div 
            className="brutalist-card p-4 bg-gradient-to-br from-[#4ADE80] to-[#86EFAC] overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <img 
              src="/avatar.jpg" 
              alt="涂雪婷" 
              className="w-full h-auto rounded-2xl border-2 border-black"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FF5A5F] border-2 border-black rounded-full" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#3B82F6] border-2 border-black rounded-lg rotate-12" />
        </div>
      </section>

      <Marquee />
    </div>
  );
}
