import React from 'react';
import { NavTab } from '../types';
import { ArrowRight, BookMarked, Sparkles, Target, Compass, Award, FileText } from 'lucide-react';
import heroImage from '../assets/images/hero_math11_study_1792641380885.jpg';
import mindmapThumb from '../assets/images/math_mindmap_visual_1792641381610.jpg';

interface HomeViewProps {
  onNavigate: (tab: NavTab) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-slate-900 text-white border border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Hero Content (Left) */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center z-10 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span>DỰ ÁN SỔ TAY HỌC TẬP SỐ · LỚP 11 · GDPT 2018</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white text-balance">
              Làm Chủ Môn Toán 11 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300">
                Sổ Tay Đột Phá Điểm 9+
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Nền tảng học tập thông minh tổng hợp phương pháp tư duy Feynman, kỹ nghệ Casio fx-580/880, sổ tay sơ đồ tư duy tương tác và ngân hàng câu hỏi bám sát cấu trúc đề thi mới nhất.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('notebook')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-md hover:shadow-indigo-500/25 whitespace-nowrap shrink-0"
              >
                <span>Mở Sổ Tay Kiến Thức</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('tips')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm transition-all border border-slate-700 whitespace-nowrap shrink-0"
              >
                <Compass className="w-4 h-4 text-indigo-400" />
                <span>Xem Bí Kíp Học Tập</span>
              </button>

              <button
                onClick={() => onNavigate('practice')}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-slate-300 hover:text-white font-medium text-sm transition-all hover:bg-slate-800/60 whitespace-nowrap shrink-0"
              >
                <Target className="w-4 h-4 text-emerald-400" />
                <span>Luyện Đề 15 Phút</span>
              </button>
            </div>

            {/* Subtle metadata */}
            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400 border-t border-slate-800/80">
              <span>Biên soạn bởi Nhóm Học sinh 11A1</span>
              <span aria-hidden="true">·</span>
              <span>Theo 3 bộ SGK mới (KNTT, Cánh Diều, CTST)</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400 font-medium">Bản quyền học thuật 2025 - 2026</span>
            </div>
          </div>

          {/* Hero Image (Right) */}
          <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full overflow-hidden bg-slate-950">
            <img
              src={heroImage}
              alt="Góc bàn học tập toán 11 với giáo trình, máy tính và đồ thị"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:bg-gradient-to-r lg:from-slate-900 lg:via-transparent lg:to-transparent" />
          </div>
        </div>
      </section>

      {/* Quantitative Rigor Metrics Strip */}
      <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="pt-4 md:pt-0">
            <span className="block text-3xl font-extrabold text-indigo-600 font-mono tabular-nums">06</span>
            <span className="text-xs text-slate-500 font-medium mt-1 block">Chuyên đề trọng tâm lớp 11</span>
          </div>
          <div className="pt-4 md:pt-0 md:pl-4">
            <span className="block text-3xl font-extrabold text-slate-900 font-mono tabular-nums">04</span>
            <span className="text-xs text-slate-500 font-medium mt-1 block">Chiến lược học sâu & Thủ thuật Casio</span>
          </div>
          <div className="pt-4 md:pt-0 md:pl-4">
            <span className="block text-3xl font-extrabold text-emerald-600 font-mono tabular-nums">24+</span>
            <span className="text-xs text-slate-500 font-medium mt-1 block">Công thức & Mẹo nhớ nhanh</span>
          </div>
          <div className="pt-4 md:pt-0 md:pl-4">
            <span className="block text-3xl font-extrabold text-sky-600 font-mono tabular-nums">100%</span>
            <span className="text-xs text-slate-500 font-medium mt-1 block">Khung chương trình GDPT 2018</span>
          </div>
        </div>
      </section>

      {/* 4 Main Pillars Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-indigo-600 tracking-wider">HỆ THỐNG NỘI DUNG</span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
              4 Trụ Cột Học Tập Toàn Diện
            </h2>
          </div>
          <span className="text-xs text-slate-500">
            Đầy đủ yêu cầu báo cáo sản phẩm dự án học tập
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pillar 1: Kinh nghiệm học */}
          <div
            onClick={() => onNavigate('tips')}
            className="group cursor-pointer bg-white rounded-xl border border-slate-200 p-6 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                1. Kinh Nghiệm & Bí Kíp Học Tập
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                4 phương pháp học tập khoa học có ví dụ bài toán thực tế: Kỹ thuật Feynman giải hình không gian 3D, Nghệ thuật bấm máy tính Casio fx-580/880, Sổ tay bẫy sai (Mistake Log), và Chiến lược 40-30-20 trong phòng thi.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600">
              <span>Đọc 4 bài phân tích sâu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pillar 2: Sổ tay kiến thức */}
          <div
            onClick={() => onNavigate('notebook')}
            className="group cursor-pointer bg-white rounded-xl border border-slate-200 p-6 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <BookMarked className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                2. Sổ Tay Kiến Thức & Mindmap
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Tổng hợp toàn bộ công thức 6 chuyên đề trọng tâm: Lượng giác, Dãy số - CSC - CSN, Giới hạn, Đạo hàm, Hình học không gian, Xác suất. Hỗ trợ sơ đồ tư duy tương tác và bộ lọc tra cứu thông minh.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-600">
              <span>Tra cứu 24+ công thức</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pillar 3: Kho tài nguyên */}
          <div
            onClick={() => onNavigate('resources')}
            className="group cursor-pointer bg-white rounded-xl border border-slate-200 p-6 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                3. Kho Tài Nguyên & Mô Phỏng Số
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Tích hợp công cụ mô phỏng sóng lượng giác và chóp 3D trực tiếp trên trình duyệt, kết nối hệ thống video bài giảng tuyển chọn từ các giáo viên uy tín, tài liệu PDF tải về và đường link GeoGebra/Desmos.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-600">
              <span>Khám phá kho học liệu & Sandbox</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pillar 4: Góc luyện tập */}
          <div
            onClick={() => onNavigate('practice')}
            className="group cursor-pointer bg-white rounded-xl border border-slate-200 p-6 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                4. Góc Luyện Tập & Flashcards
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                10 câu hỏi trắc nghiệm chuẩn ma trận mới có đồng hồ bấm giờ, chấm điểm tự động và lời giải chi tiết từng bước kèm mẹo Casio. Tích hợp chế độ Flashcards lật thẻ kiểm tra trí nhớ tức thì.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-rose-600">
              <span>Bắt đầu kiểm tra kiến thức</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Mindmap Spotlight */}
      <section className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 overflow-hidden relative border border-indigo-800/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold text-indigo-300 tracking-wider">TỔNG HỢP TRỰC QUAN</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Sơ Đồ Tư Duy Kiến Trúc Toán 11
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Kiến thức lớp 11 rất rộng và có tính kết nối cao. Sơ đồ tư duy dạng cây tương tác giúp bạn có được "tầm nhìn toàn cảnh" (Bird-eye view), kết nối Đại số, Giải tích với Hình học không gian một cách mạch lạc.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('notebook')}
                className="px-4 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-2"
              >
                <span>Xem Sơ Đồ Tư Duy Chi Tiết</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 rounded-xl overflow-hidden border border-indigo-700/50 shadow-lg">
            <img
              src={mindmapThumb}
              alt="Mô hình sơ đồ tư duy hệ thống hóa kiến thức"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Group Project Report Banner */}
      <section className="bg-slate-100 rounded-xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-indigo-600 flex items-center justify-center shrink-0 shadow-xs">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base">Báo Cáo Nghiệm Thu Sản Phẩm Nhóm</h3>
            <p className="text-xs text-slate-600">
              Xem chi tiết bảng phân công 5 thành viên, tiến độ 4 tuần thực hiện dự án và danh mục tài liệu tham khảo chính thức.
            </p>
          </div>
        </div>
        <button
          onClick={() => onNavigate('report')}
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors flex items-center gap-2"
        >
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>Xem Báo Cáo Nhóm</span>
        </button>
      </section>
    </div>
  );
};
