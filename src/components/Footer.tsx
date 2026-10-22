import React from 'react';
import { NavTab } from '../types';
import { BookOpen, Award, CheckCircle } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Project Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <span className="w-6 h-6 rounded-md bg-indigo-500 text-white flex items-center justify-center">
                <BookOpen className="w-3.5 h-3.5" />
              </span>
              <span>Toán 11 Master</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Dự án website chia sẻ kinh nghiệm học tập và sổ tay điện tử môn Toán lớp 11 theo Chương trình Giáo dục Phổ thông 2018 (Kết nối tri thức, Cánh diều, Chân trời sáng tạo).
            </p>
            <div className="flex items-center gap-4 pt-1 text-slate-500">
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-indigo-400" />
                Dự án học tập sáng tạo Lớp 11
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                Chuẩn GDPT 2018
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 tracking-wide">Điều hướng nhanh</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSelectTab('tips')}
                  className="hover:text-white transition-colors"
                >
                  Kinh nghiệm học tập
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('notebook')}
                  className="hover:text-white transition-colors"
                >
                  Sổ tay & Sơ đồ tư duy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('practice')}
                  className="hover:text-white transition-colors"
                >
                  Góc trắc nghiệm & Flashcards
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('resources')}
                  className="hover:text-white transition-colors"
                >
                  Kho tài nguyên & Mô phỏng
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Standards */}
          <div>
            <h4 className="text-white font-semibold mb-3 tracking-wide">Thông tin nhóm</h4>
            <p className="text-slate-400 mb-2">Nhóm học sinh Lớp 11A1</p>
            <p className="text-slate-400 mb-2">Trường THPT Chuyên</p>
            <button
              onClick={() => onSelectTab('report')}
              className="text-indigo-400 hover:text-indigo-300 font-medium underline inline-block"
            >
              Xem báo cáo phân công nhóm →
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} Toán 11 Master. Nội dung phục vụ mục đích học tập phi thương mại.</p>
          <div className="flex items-center gap-4">
            <span>Dành cho học sinh lớp 11 toàn quốc</span>
            <span>·</span>
            <span>GDPT 2018</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
