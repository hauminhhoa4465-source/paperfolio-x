import { FileText, Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      date: "2025.04 - 2025.12",
      title: "短视频运营",
      company: "广州将业汽车配件有限公司",
      desc: "负责公司社媒账号（视频号、Facebook、Instagram等）从0实现粉丝增长（视频号2500+，Facebook 3000+）。独立完成短视频拍摄剪辑以及发布，通过内容引流+客户沟通，实现订单转化，累计200+个订单，销售额约为40万人民币。",
      icon: <Briefcase className="w-6 h-6" />,
      color: "#3B82F6"
    },
    {
      date: "2024.07 - 2025.01",
      title: "运营助理",
      company: "YASHINA雅诗娜美容生活馆",
      desc: "协助门店拍摄项目/环境视频素材，发布到小红书、朋友圈及短视频内容更新，提升到店咨询。总结客户关注点痛点，优化内容表达。",
      icon: <FileText className="w-6 h-6" />,
      color: "#FF5A5F"
    }
  ];

  return (
    <section className="py-12 flex flex-col lg:flex-row gap-16">
      <div className="lg:w-1/3 space-y-8">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            回顾我的职场<br />
            <span className="highlight-blue">成长历程</span>
          </h2>
          <p className="text-lg text-gray-600">
            我始终保持对新事物的敏锐嗅觉。
          </p>
        </div>
        
        {/* 技能标签 */}
        <div className="space-y-4">
          <h3 className="text-xl font-black">专业技能</h3>
          <div className="flex flex-wrap gap-3">
            <div className="bg-[#FEF3C7] text-black font-bold px-4 py-2 rounded-xl border-2 border-black">
              视频拍摄
            </div>
            <div className="bg-[#DBEAFE] text-black font-bold px-4 py-2 rounded-xl border-2 border-black">
              剪辑制作
            </div>
            <div className="bg-[#FCE7F3] text-black font-bold px-4 py-2 rounded-xl border-2 border-black">
              内容策划
            </div>
            <div className="bg-[#D1FAE5] text-black font-bold px-4 py-2 rounded-xl border-2 border-black">
              社媒运营
            </div>
            <div className="bg-[#E0E7FF] text-black font-bold px-4 py-2 rounded-xl border-2 border-black">
              数据分析
            </div>
            <div className="bg-[#FEF9C3] text-black font-bold px-4 py-2 rounded-xl border-2 border-black">
              客户沟通
            </div>
          </div>
        </div>
        
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="brutalist-button flex items-center gap-2"
        >
          <FileText size={20} />
          查看完整简历
        </a>
      </div>

      <div className="lg:w-2/3 space-y-8">
        {experiences.map((exp, i) => (
          <div key={i} className="brutalist-card p-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-grow space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-black text-xl">{exp.date}</span>
                <div 
                  className="p-3 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  style={{ backgroundColor: exp.color }}
                >
                  {exp.icon}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-black">{exp.title}</h3>
                <p className="font-bold text-[#FF5A5F]">{exp.company}</p>
                <p className="text-gray-600 leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
