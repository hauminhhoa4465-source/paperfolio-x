import { ThumbsUp } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-black py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto bg-white border-4 border-black rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-[12px_12px_0px_0px_rgba(255,255,255,0.1)]">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-md relative">
          <div className="absolute -top-6 -left-6 animate-bounce">
            <ThumbsUp className="text-[#3B82F6] hover:scale-125 transition-transform duration-300" size={28} />
            {/* +1 特效 */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 text-[#3B82F6] font-bold text-xs animate-up">+1</div>
              <div className="absolute top-0 right-0 text-[#3B82F6] font-bold text-xs animate-up-delay-100">+1</div>
              <div className="absolute bottom-0 left-0 text-[#3B82F6] font-bold text-xs animate-up-delay-200">+1</div>
            </div>
          </div>
          <span className="font-black text-[#3B82F6] animate-bounce hover:scale-110 transition-transform duration-300">订阅</span>我的栏目，<br/>
          把您的产品<span className="font-black text-[#FF5A5F] text-4xl md:text-6xl animate-pulse hover:scale-125 transition-transform duration-300 relative inline-block">推</span>向<span className="font-black text-[#FF5A5F]">全世界</span>
        </h2>
        
        <div className="w-full md:w-auto flex-grow max-w-xl">
          <div className="relative flex items-center">
            <input 
              type="email" 
              placeholder="输入您的电子邮箱" 
              className="w-full border-4 border-black rounded-full px-8 py-6 text-xl font-bold focus:outline-none focus:ring-4 focus:ring-[#FF5A5F]/20"
            />
            <button className="absolute right-3 bg-black text-white px-8 py-4 rounded-full font-black text-lg hover:bg-[#FF5A5F] transition-colors">
              立即订阅
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
