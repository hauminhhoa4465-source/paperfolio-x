import { Zap } from "lucide-react";
import { cn } from "../lib/utils";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setShowWechatQR: (show: boolean) => void;
}

export default function Navbar({ activeTab, setActiveTab, setShowWechatQR }: NavbarProps) {
  const tabs = [
    { id: "home", label: "首页" },
    { id: "about", label: "关于我" },
    { id: "experience", label: "我的经历" },
    { id: "works", label: "我的作品" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => setActiveTab("home")}
        >
          <div className="w-10 h-10 bg-[#FF5A5F] border-2 border-black rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
            <Zap className="text-white fill-current" size={20} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black text-[#3B82F6] tracking-tighter uppercase">
              您的订阅
            </span>
            <span className="text-sm font-bold text-black tracking-[0.2em] uppercase">
              我们的更新动力
            </span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "font-bold text-lg transition-all relative",
                activeTab === tab.id 
                  ? "text-black after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-1 after:bg-[#FF5A5F]" 
                  : "text-gray-500 hover:text-black"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button 
          className="brutalist-button text-sm md:text-base"
          onClick={() => setShowWechatQR(true)}
        >
          Let's talk
        </button>
      </div>
    </nav>
  );
}
