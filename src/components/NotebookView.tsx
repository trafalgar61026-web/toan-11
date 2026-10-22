import React, { useState, useMemo } from 'react';
import { FORMULAS_DATA, CHAPTERS_INFO, MINDMAP_TREE } from '../data/curriculumData';
import { FormulaItem, MindmapNode } from '../types';
import { Search, BookMarked, GitBranch, Table, Layers, Copy, Check, Lightbulb, Cpu, ChevronRight, Sparkles } from 'lucide-react';

export const NotebookView: React.FC = () => {
  const [viewMode, setViewMode] = useState<'mindmap' | 'formulas' | 'infographics'>('mindmap');
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Mindmap active branch
  const [activeBranchId, setActiveBranchId] = useState<string>('branch-luonggiac');

  // Filtered formulas
  const filteredFormulas = useMemo(() => {
    return FORMULAS_DATA.filter((item) => {
      const matchChapter = selectedChapter === 'all' || item.chapter === selectedChapter;
      const matchSearch =
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.latex.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.explanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.memoryMnemonic && item.memoryMnemonic.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchChapter && matchSearch;
    });
  }, [selectedChapter, searchQuery]);

  const handleCopyFormula = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const activeBranch = MINDMAP_TREE.children?.find((c) => c.id === activeBranchId) || MINDMAP_TREE.children?.[0];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 mb-2">
            <BookMarked className="w-4 h-4" />
            <span>SỔ TAY ĐIỆN TỬ TOÁN 11 · GDPT 2018</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Hệ Thống Kiến Thức Trọng Tâm
          </h1>
          <p className="text-slate-600 text-sm mt-1 max-w-2xl">
            Tra cứu công thức, sơ đồ tư duy tương tác và infographic tóm tắt 6 chuyên đề Đại số, Giải tích và Hình học không gian lớp 11.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center p-1 bg-slate-100 rounded-xl text-xs font-medium shrink-0">
          <button
            onClick={() => setViewMode('mindmap')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all ${
              viewMode === 'mindmap'
                ? 'bg-white text-emerald-700 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <GitBranch className="w-4 h-4" />
            <span>Sơ Đồ Tư Duy</span>
          </button>
          <button
            onClick={() => setViewMode('formulas')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all ${
              viewMode === 'formulas'
                ? 'bg-white text-emerald-700 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Table className="w-4 h-4" />
            <span>Tra Cứu Công Thức</span>
          </button>
          <button
            onClick={() => setViewMode('infographics')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all ${
              viewMode === 'infographics'
                ? 'bg-white text-emerald-700 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Bảng So Sánh & Infographic</span>
          </button>
        </div>
      </div>

      {/* MODE 1: Interactive Mindmap */}
      {viewMode === 'mindmap' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-5 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800">
              <div>
                <span className="text-xs text-indigo-300 font-mono block">CẤU TRÚC PHÂN NHÁNH KIẾN THỨC TOÁN 11</span>
                <h3 className="text-lg font-bold text-white mt-0.5">Sơ Đồ Tư Duy Tương Tác</h3>
              </div>
              <span className="text-xs text-slate-400">
                Nhấp vào từng nhánh bên dưới để mở rộng công thức và ghi chú
              </span>
            </div>

            {/* Branch Selector Navigation Strip */}
            <div className="p-3 bg-slate-50 border-b border-slate-200 overflow-x-auto">
              <div className="flex items-center gap-2 min-w-max">
                {MINDMAP_TREE.children?.map((node) => {
                  const isActive = node.id === activeBranchId;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveBranchId(node.id)}
                      className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
                        isActive
                          ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <GitBranch className="w-3.5 h-3.5" />
                      <span>{node.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mindmap Interactive Canvas & Branch Detail */}
            {activeBranch && (
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                      Nhánh chủ đề hiện tại
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      {activeBranch.label}
                    </h2>
                    <p className="text-sm text-slate-600 max-w-2xl">
                      {activeBranch.description}
                    </p>
                  </div>
                </div>

                {/* Two columns: Key Notes vs Formulas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Key Notes */}
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span>Điểm Mấu Chốt Cần Khắc Cốt Ghi Tâm</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {activeBranch.keyNotes?.map((note, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                          <span className="w-4 h-4 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Core Formulas for this branch */}
                  <div className="p-5 rounded-xl bg-indigo-950 text-white border border-indigo-900 space-y-3">
                    <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                      <BookMarked className="w-4 h-4 text-indigo-400" />
                      <span>Công Thức Thực Chiến Của Nhánh Này</span>
                    </h4>
                    <div className="space-y-2.5">
                      {activeBranch.formulas?.map((formula, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-indigo-900/50 rounded-lg border border-indigo-800/80 font-mono text-xs text-indigo-200 flex items-center justify-between gap-3"
                        >
                          <span className="overflow-x-auto whitespace-pre-wrap">{formula}</span>
                          <button
                            onClick={() => handleCopyFormula(`mm-${idx}`, formula)}
                            className="p-1.5 text-indigo-300 hover:text-white rounded-md hover:bg-indigo-800 transition-colors shrink-0"
                            title="Sao chép công thức"
                          >
                            {copiedId === `mm-${idx}` ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODE 2: Searchable Formula Cheatsheet */}
      {viewMode === 'formulas' && (
        <div className="space-y-6">
          {/* Search bar & Chapter Filter */}
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 space-y-4 shadow-xs">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm nhanh công thức (ví dụ: lượng giác, sin, cấp số cộng, tiếp tuyến, khoảng cách, đạo hàm)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:bg-white focus:outline-hidden focus:border-indigo-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Xóa tìm kiếm
                </button>
              )}
            </div>

            {/* Chapter Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              {CHAPTERS_INFO.map((chap) => (
                <button
                  key={chap.id}
                  onClick={() => setSelectedChapter(chap.id)}
                  className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    selectedChapter === chap.id
                      ? 'bg-slate-900 text-white font-semibold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {chap.name}
                </button>
              ))}
            </div>
          </div>

          {/* Formulas Count */}
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>
              Tìm thấy <strong className="text-slate-900 font-mono">{filteredFormulas.length}</strong> công thức phù hợp
            </span>
            <span>GDPT 2018</span>
          </div>

          {/* Formulas List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredFormulas.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 p-5 space-y-3.5 shadow-xs hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  {/* Top line metadata (Zero-pill format) */}
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-medium text-indigo-700">{item.chapterName}</span>
                    <div className="flex items-center gap-1.5">
                      <span aria-hidden="true">·</span>
                      <span className="text-[11px] font-semibold text-slate-600">{item.difficulty}</span>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {item.title}
                  </h3>

                  {/* Formula Box */}
                  <div className="p-3.5 bg-slate-900 text-white rounded-lg font-mono text-xs sm:text-sm overflow-x-auto relative group">
                    <pre className="whitespace-pre-wrap leading-relaxed text-indigo-200 font-sans">
                      {item.latex}
                    </pre>
                    <button
                      onClick={() => handleCopyFormula(item.id, item.latex)}
                      className="absolute right-2 top-2 p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded-md transition-colors opacity-90 hover:opacity-100"
                      title="Sao chép công thức"
                    >
                      {copiedId === item.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Explanation */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.explanation}
                  </p>
                </div>

                {/* Additional Helper Notes (Mnemonics & Casio) */}
                <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                  {item.memoryMnemonic && (
                    <div className="flex items-start gap-1.5 text-amber-900 bg-amber-50/60 p-2 rounded-md">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">
                        <strong>Mẹo nhớ:</strong> {item.memoryMnemonic}
                      </span>
                    </div>
                  )}

                  {item.casioTip && (
                    <div className="flex items-start gap-1.5 text-sky-900 bg-sky-50/60 p-2 rounded-md">
                      <Cpu className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">
                        <strong>Casio 580/880:</strong> {item.casioTip}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredFormulas.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl border border-slate-200 space-y-2">
              <p className="text-sm font-semibold text-slate-700">Không tìm thấy công thức phù hợp với từ khóa</p>
              <p className="text-xs text-slate-500">Hãy thử nhập từ khóa ngắn hơn như "sin", "cấp số", "tiếp tuyến"...</p>
            </div>
          )}
        </div>
      )}

      {/* MODE 3: Infographics & Comparison Matrices */}
      {viewMode === 'infographics' && (
        <div className="space-y-8">
          {/* Matrix 1: Cấp số cộng vs Cấp số nhân */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-5 bg-indigo-900 text-white">
              <span className="text-xs text-indigo-300 font-mono block">BẢNG ĐỐI CHIẾU HỆ THỐNG</span>
              <h3 className="text-lg font-bold text-white">So Sánh Cấp Số Cộng (CSC) & Cấp Số Nhân (CSN)</h3>
              <p className="text-xs text-indigo-200 mt-1">
                Hai mô hình phát triển tuyến tính và lũy thừa thường xuyên bị học sinh nhầm lẫn công thức
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3.5 sm:p-4">Tiêu chí so sánh</th>
                    <th className="p-3.5 sm:p-4 text-indigo-700">Cấp Số Cộng (CSC)</th>
                    <th className="p-3.5 sm:p-4 text-emerald-700">Cấp Số Nhân (CSN)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Định nghĩa truy hồi</td>
                    <td className="p-3.5 sm:p-4 font-mono">u_n = u_{'{n-1}'} + d (d là công sai)</td>
                    <td className="p-3.5 sm:p-4 font-mono">u_n = u_{'{n-1}'} · q (q là công bội)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Số hạng tổng quát u_n</td>
                    <td className="p-3.5 sm:p-4 font-mono font-bold text-indigo-600">u_n = u₁ + (n - 1)·d</td>
                    <td className="p-3.5 sm:p-4 font-mono font-bold text-emerald-600">u_n = u₁ · q^(n - 1)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Tính chất số hạng giữa</td>
                    <td className="p-3.5 sm:p-4">u_k = (u_{'{k-1}'} + u_{'{k+1}'}) / 2 (Trung bình cộng)</td>
                    <td className="p-3.5 sm:p-4">|u_k|² = u_{'{k-1}'} · u_{'{k+1}'} (Trung bình nhân)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Tổng n số hạng đầu S_n</td>
                    <td className="p-3.5 sm:p-4 font-mono">S_n = (n/2) · [2u₁ + (n - 1)d]</td>
                    <td className="p-3.5 sm:p-4 font-mono">S_n = u₁ · (1 - q^n) / (1 - q) (q ≠ 1)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Trường hợp vô hạn</td>
                    <td className="p-3.5 sm:p-4 text-slate-500">Tiến về ±∞ (không có tổng hữu hạn)</td>
                    <td className="p-3.5 sm:p-4 font-mono font-semibold text-emerald-700">
                      Khi |q| {'<'} 1: S = u₁ / (1 - q)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Ứng dụng thực tế</td>
                    <td className="p-3.5 sm:p-4">Trả góp đều hàng tháng, đếm bậc thang</td>
                    <td className="p-3.5 sm:p-4">Lãi kép ngân hàng, phân rã phóng xạ, tế bào nhân đôi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Matrix 2: Bảng Đạo hàm Hàm Sơ Cấp vs Hàm Hợp */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-5 bg-slate-900 text-white">
              <span className="text-xs text-sky-300 font-mono block">QUY TẮC ĐẠO HÀM DÂY CHUYỀN</span>
              <h3 className="text-lg font-bold text-white">Đạo Hàm Hàm Cơ Bản vs Hàm Hợp u(x)</h3>
              <p className="text-xs text-slate-400 mt-1">
                Nguyên tắc bất biến: Luôn nhân thêm đạo hàm đuôi u' khi gặp biến số là biểu thức chứa x
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3.5 sm:p-4">Dạng hàm số</th>
                    <th className="p-3.5 sm:p-4 text-slate-900">Hàm số cơ bản y = f(x)</th>
                    <th className="p-3.5 sm:p-4 text-indigo-700">Hàm hợp y = f(u) (u = u(x))</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-mono">
                  <tr>
                    <td className="p-3.5 sm:p-4 font-sans font-semibold text-slate-900">Hàm lũy thừa</td>
                    <td className="p-3.5 sm:p-4">(x^n)' = n · x^(n - 1)</td>
                    <td className="p-3.5 sm:p-4 text-indigo-700 font-bold">(u^n)' = n · u^(n - 1) · u'</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-sans font-semibold text-slate-900">Hàm căn thức bậc hai</td>
                    <td className="p-3.5 sm:p-4">(√x)' = 1 / (2√x)</td>
                    <td className="p-3.5 sm:p-4 text-indigo-700 font-bold">(√u)' = u' / (2√u)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-sans font-semibold text-slate-900">Hàm phân thức 1/x</td>
                    <td className="p-3.5 sm:p-4">(1/x)' = -1 / x²</td>
                    <td className="p-3.5 sm:p-4 text-indigo-700 font-bold">(1/u)' = -u' / u²</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-sans font-semibold text-slate-900">Lượng giác sin</td>
                    <td className="p-3.5 sm:p-4">(sin x)' = cos x</td>
                    <td className="p-3.5 sm:p-4 text-indigo-700 font-bold">(sin u)' = u' · cos u</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-sans font-semibold text-slate-900">Lượng giác cos</td>
                    <td className="p-3.5 sm:p-4">(cos x)' = -sin x</td>
                    <td className="p-3.5 sm:p-4 text-indigo-700 font-bold">(cos u)' = -u' · sin u</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
