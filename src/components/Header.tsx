import React, { useState } from 'react';
import { NavTab } from '../types';
import { BookOpen, Menu, X, FileText } from 'lucide-react';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onSelectTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'tips', label: 'Kinh nghiệm học' },
    { id: 'notebook', label: 'Sổ tay kiến thức' },
    { id: 'resources', label: 'Kho tài nguyên' },
    { id: 'practice', label: 'Góc luyện tập' },
  ];

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left text-indigo-900 font-bold tracking-tight text-lg sm:text-xl whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
          >
            <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs">
              <BookOpen className="w-4 h-4" />
            </span>
            <span className="font-extrabold tracking-tight">
              Toán 11 <span className="text-indigo-600 font-semibold">Master</span>
            </span>
          </button>

          {/* Zone 2: Navigation Links (Single-line, concise text with subtle active state) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-indigo-600 ${
                    isActive ? 'text-indigo-700 font-semibold' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action (Báo cáo dự án nhóm) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('report')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                currentTab === 'report'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Báo Cáo Dự Án</span>
            </button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('report')}
              className="p-1.5 text-xs text-indigo-700 font-medium bg-indigo-50 rounded-md"
            >
              Báo cáo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentTab === item.id
                  ? 'bg-indigo-50 text-indigo-700 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => handleNavClick('report')}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold rounded-md bg-indigo-600 text-white"
            >
              <FileText className="w-4 h-4" />
              <span>Xem Báo Cáo Dự Án Nhóm</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
