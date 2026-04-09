import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="space-y-24 py-12">
      {/* ID Card Section */}
      <section className="flex justify-center items-center py-8">
        <div className="relative max-w-2xl w-full">
          {/* ID Card Container */}
          <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {/* Card Header - Light Green */}
            <div className="bg-[#86EFAC] rounded-2xl p-6 border-3 border-black relative overflow-hidden">
              <div className="flex justify-between items-start">
                {/* Left Side */}
                <div className="space-y-2">
                  <h3 className="text-3xl font-black text-black uppercase tracking-wider">
                    ID CARD
                  </h3>
                  <p className="text-lg font-bold text-black uppercase tracking-widest">
                    GUANGDONG BAIYUN XUEYUAN UNIVERSITY
                  </p>
                </div>
                {/* Right Side - Pink Circle with Smiley */}
                <div className="relative">
                  <div className="w-16 h-16 bg-[#FF5A5F] border-3 border-black rounded-full flex items-center justify-center">
                    <div className="text-2xl">😊</div>
                  </div>
                  <p className="text-sm font-bold text-black mt-2 text-center" style={{ fontFamily: "cursive" }}>
                    LUCKY
                  </p>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="mt-6 flex flex-col md:flex-row gap-6">
              {/* Left Side - Avatar */}
              <div className="flex-1 space-y-4">
                {/* Avatar Frame */}
                <div className="bg-white border-3 border-black rounded-2xl p-4">
                  <div className="w-full aspect-square relative overflow-hidden rounded-2xl border-3 border-black">
                    <img 
                      src="/new-avatar.jpg" 
                      alt="涂雪婷" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex gap-3 justify-center">
                  <div className="bg-[#3B82F6] text-white font-bold px-4 py-2 rounded-xl border-2 border-black">
                    2003.08.03
                  </div>
                  <div className="bg-[#FF5A5F] text-white font-bold px-4 py-2 rounded-xl border-2 border-black">
                    广东
                  </div>
                </div>

                {/* ID Number */}
                <div className="space-y-1">
                  <p className="text-lg font-black text-black">ID NO.</p>
                  <p className="text-xl font-bold text-black tracking-widest">XM-20030803-0V0</p>
                </div>

                {/* Barcode */}
                <div className="bg-white border-2 border-black rounded-xl p-3">
                  <div className="flex justify-between items-end h-12 gap-0.5">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((i) => (
                      <div 
                        key={i}
                        className="bg-black"
                        style={{
                          width: `${Math.random() * 3 + 2}px`,
                          height: `${Math.random() * 20 + 28}px`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Info Blocks */}
              <div className="flex-1 space-y-4">
                {/* Name Block */}
                <div className="bg-[#FEF3C7] border-3 border-black rounded-2xl p-4">
                  <p className="text-sm font-bold text-black uppercase tracking-wider">NAME</p>
                  <p className="text-2xl font-black text-black mt-1">涂雪婷</p>
                </div>

                {/* Major Block */}
                <div className="bg-[#DBEAFE] border-3 border-black rounded-2xl p-4">
                  <p className="text-sm font-bold text-black uppercase tracking-wider">MAJOR</p>
                  <p className="text-2xl font-black text-black mt-1">英语</p>
                </div>

                {/* Job Block */}
                <div className="bg-[#FCE7F3] border-3 border-black rounded-2xl p-4">
                  <p className="text-sm font-bold text-black uppercase tracking-wider">JOB</p>
                  <p className="text-2xl font-black text-black mt-1">新媒体运营</p>
                </div>

                {/* Official Vibe Circle */}
                <div className="flex justify-end mt-6">
                  <div className="relative">
                    {/* 外层装饰点 */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#FEF3C7] border-2 border-black rounded-full"></div>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#DBEAFE] border-2 border-black rounded-full"></div>
                    
                    {/* 主圆形 */}
                    <div className="w-32 h-32 bg-gradient-to-br from-[#FF5A5F] to-[#F97316] border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      {/* 内层圆形 */}
                      <div className="w-24 h-24 bg-gradient-to-br from-[#4ADE80] to-[#22C55E] border-4 border-black rounded-full flex items-center justify-center transform rotate-[-6deg]">
                        <div className="transform rotate-[6deg]">
                          <p className="text-sm font-black text-black text-center uppercase leading-tight tracking-wider">
                            OFFICIAL<br/>VIBE
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-7xl font-black">
            我的 <span className="highlight-pink">核心服务</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            拓宽我们与用户的连接，让用户看到我们。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 内容策划卡片 */}
          <div className="brutalist-card overflow-hidden group">
            <div className="p-4 border-b-2 border-black" style={{ backgroundColor: "#FBBF24" }}>
              <img 
                src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=400&h=300&fit=crop" 
                alt="内容策划" 
                className="w-full h-48 object-cover object-center rounded-xl border-2 border-black group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 space-y-4">
              <h3 className="text-3xl font-black">内容策划</h3>
              <p className="text-gray-600">能够独立完成选题策划，善于找灵感。客户想看什么，我们就做什么。</p>
            </div>
          </div>

          {/* 内容执行卡片 */}
          <div className="brutalist-card overflow-hidden group">
            <div className="p-4 border-b-2 border-black" style={{ backgroundColor: "#3B82F6" }}>
              <img 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop" 
                alt="内容执行" 
                className="w-full h-48 object-cover rounded-xl border-2 border-black group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 space-y-4">
              <h3 className="text-3xl font-black">内容执行</h3>
              <p className="text-gray-600">写脚本/拍摄/剪辑。全流程内容制作，确保高质量输出。</p>
            </div>
          </div>

          {/* 数据优化卡片 */}
          <div className="brutalist-card overflow-hidden group">
            <div className="p-4 border-b-2 border-black" style={{ backgroundColor: "#FF5A5F" }}>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" 
                alt="数据优化" 
                className="w-full h-48 object-cover rounded-xl border-2 border-black group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 space-y-4">
              <h3 className="text-3xl font-black">数据优化</h3>
              <p className="text-gray-600">长期主义，让账号实现稳定增长。优化调整内容，及时处理问题。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
