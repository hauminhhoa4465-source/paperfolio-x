import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, X } from "lucide-react";

export default function Footer({ setActiveTab, showWechatQR, setShowWechatQR }) {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-8">
            <h3 className="text-3xl font-black tracking-tighter">Paperfolio X</h3>
            <p className="text-gray-400 text-lg">
              专注于新媒体运营，让我们的产品更好地被看见。
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook size={20} />, color: "#3B82F6" },
                { icon: <Twitter size={20} />, color: "#1DA1F2" },
                { icon: <Instagram size={20} />, color: "#E1306C" },
                { icon: <Youtube size={20} />, color: "#FF0000" },
                { icon: <Linkedin size={20} />, color: "#0077B5" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-white/20 hover:scale-110 transition-transform"
                  style={{ backgroundColor: social.color }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-black">页面</h4>
            <ul className="space-y-4 text-gray-400 font-bold">
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">首页</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">关于我</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setShowWechatQR(true); }} className="hover:text-white cursor-pointer">联系方式</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('works'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">作品集</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-black">工具页面</h4>
            <ul className="space-y-4 text-gray-400 font-bold">
              <li><a href="#" className="hover:text-white">风格指南</a></li>
              <li><a href="#" className="hover:text-white">从这里开始</a></li>
              <li><a href="#" className="hover:text-white">404 页面</a></li>
              <li><a href="#" className="hover:text-white">密码保护</a></li>
              <li><a href="#" className="hover:text-white">许可证</a></li>
              <li><a href="#" className="hover:text-white">更新日志</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-black">联系我</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400 font-bold">
                <Mail size={20} className="text-[#FF5A5F]" />
                <span>3163925853@qq.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 font-bold">
                <Phone size={20} className="text-[#3B82F6]" />
                <span>+86 17725851147</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-gray-500 font-bold">
          <p>Made by 涂雪婷 - Powered by VO</p>
        </div>
      </div>

      {/* 微信二维码模态框 */}
      {showWechatQR && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white border-4 border-black rounded-3xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-black">我的微信</h3>
              <button 
                onClick={() => setShowWechatQR(false)}
                className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <X size={20} className="text-black" />
              </button>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-64 h-64 rounded-lg border-2 border-black flex items-center justify-center bg-white">
                <img 
                  src="/wechat-qr.jpg" 
                  alt="微信二维码" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="text-center font-bold">扫码添加微信</p>
              <p className="text-center text-gray-600">微信号：17725851147</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
