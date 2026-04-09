import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function Works() {
  const works = [
    {
      title: "Honda auto parts",
      category: "品牌宣传",
      img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&h=400&fit=crop",
      color: "#10B981",
      link: "https://weixin.qq.com/sph/AO2j2QkVr5",
      type: "video"
    },
    {
      title: "JJQ AUTO PARTS",
      category: "产品展示",
      img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
      color: "#FF5A5F",
      link: "https://weixin.qq.com/sph/AzdlBrTiwL",
      type: "video"
    },
    {
      title: "什么叫靠谱？",
      category: "汽配知识",
      img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
      color: "#3B82F6",
      link: "https://weixin.qq.com/sph/Ah8QtnzYey",
      type: "video"
    },
    {
      title: "Our product range is diverse",
      category: "产品介绍",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
      color: "#8B5CF6",
      link: "https://weixin.qq.com/sph/A6I9TC0fN4",
      type: "video"
    },
    {
      title: "卖汽配是我唯一的爱好",
      category: "汽车配件",
      img: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=400&fit=crop",
      color: "#FBBF24",
      link: "https://weixin.qq.com/sph/A2uKClWn5a",
      type: "video"
    },
    {
      title: "#00后整顿职场",
      category: "职场分享",
      img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop",
      color: "#F59E0B",
      link: "https://weixin.qq.com/sph/AGG5kZ6AYJ",
      type: "video"
    },
    {
      title: "无论何时何地 我都在这里",
      category: "品牌展示",
      img: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=400&fit=crop",
      color: "#06B6D4",
      link: "https://weixin.qq.com/sph/ARCvqIodSX",
      type: "video"
    },
    {
      title: "顺德勒流美甲/价格表",
      category: "美甲美业",
      img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop",
      color: "#F472B6",
      link: "http://xhslink.com/o/6POELqfOJ03",
      type: "xiaohongshu"
    }
  ];

  return (
    <section className="py-12 space-y-12">
      <div className="flex justify-between items-end">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter">
          我的 <span className="highlight-pink">作品合集</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work, i) => (
          <a 
            key={i} 
            href={work.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="brutalist-card overflow-hidden flex flex-col cursor-pointer group"
          >
            <div className="relative p-4">
              <img 
                src={work.img} 
                alt={work.title} 
                className="w-full aspect-[4/3] object-cover rounded-2xl border-2 border-black group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <span 
                className="absolute top-8 right-8 px-4 py-1 rounded-full text-sm font-bold text-white border-2 border-black"
                style={{ backgroundColor: work.color }}
              >
                {work.category}
              </span>
              {/* 平台标识 */}
              <div className="absolute top-8 left-8 flex gap-2">
                {work.type === "video" && (
                  <span className="bg-black/80 text-white px-3 py-1 rounded-full text-xs font-bold border border-white">
                    视频号
                  </span>
                )}
                {work.type === "xiaohongshu" && (
                  <span className="bg-[#FE2C55]/90 text-white px-3 py-1 rounded-full text-xs font-bold border border-white">
                    小红书
                  </span>
                )}
              </div>
              {/* 播放按钮 */}
              {work.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 bg-black/70 rounded-full flex items-center justify-center border-4 border-white">
                    <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[30px] border-l-white border-b-[15px] border-b-transparent ml-2" />
                  </div>
                </div>
              )}
              {/* 小红书跳转提示 */}
              {work.type === "xiaohongshu" && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 bg-[#FE2C55]/80 rounded-full flex items-center justify-center border-4 border-white">
                    <ExternalLink size={32} className="text-white" />
                  </div>
                </div>
              )}
            </div>
            <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
              <h3 className="text-2xl font-black leading-tight group-hover:text-[#FF5A5F] transition-colors">
                {work.title}
              </h3>
              <div className="flex items-center gap-4 pt-4 border-t-2 border-black/10">
                <div className="w-12 h-12 rounded-full border-2 border-black overflow-hidden flex items-center justify-center bg-white">
                  <img 
                    src="/new-avatar.jpg" 
                    alt="涂雪婷" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <p className="font-black">涂雪婷</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      
      {/* 感谢语 */}
      <div className="text-center pt-8">
        <p className="text-2xl md:text-3xl font-bold text-black">
          谢谢您的关注！<span className="highlight-pink">祝您生活愉快~</span>
        </p>
      </div>
    </section>
  );
}
