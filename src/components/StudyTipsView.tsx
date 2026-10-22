import React, { useState } from 'react';
import { STUDY_METHODS } from '../data/studyTipsData';
import { StudyMethod } from '../types';
import { Compass, Cpu, BookMarked, Clock, CheckCircle2, AlertTriangle, Lightbulb, Calculator, ArrowRight } from 'lucide-react';

export const StudyTipsView: React.FC = () => {
  const [selectedMethodId, setSelectedMethodId] = useState<string>(STUDY_METHODS[0].id);

  // Interactive Casio simulator widget state
  const [testPreset, setTestPreset] = useState<'limit' | 'derivative' | 'trig'>('limit');
  const [calcXVal, setCalcXVal] = useState<string>('3.000001');
  const [simOutput, setSimOutput] = useState<string>('0.0416666667 (≈ 1/24)');

  const selectedMethod = STUDY_METHODS.find((m) => m.id === selectedMethodId) || STUDY_METHODS[0];

  const getMethodIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-indigo-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-600" />;
      case 'BookMarked':
        return <BookMarked className="w-5 h-5 text-emerald-600" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-amber-600" />;
      default:
        return <Compass className="w-5 h-5 text-indigo-600" />;
    }
  };

  const runCasioSim = (preset: 'limit' | 'derivative' | 'trig', xVal: string) => {
    const x = parseFloat(xVal);
    if (isNaN(x)) {
      setSimOutput('Lỗi cú pháp: Giá trị x không hợp lệ');
      return;
    }

    if (preset === 'limit') {
      // f(x) = (sqrt(x+1) - 2) / (x^2 - 9)
      if (Math.abs(x - 3) < 1e-12) {
        setSimOutput('Math ERROR: Mẫu số bằng 0 (Dạng vô định)');
      } else {
        const val = (Math.sqrt(x + 1) - 2) / (x * x - 9);
        setSimOutput(`${val.toFixed(8)} (Chính xác 1/24 ≈ 0.04166667)`);
      }
    } else if (preset === 'derivative') {
      // f(x) = x^3 - 3x + 2, derivative at x
      // f'(x) = 3x^2 - 3
      const val = 3 * x * x - 3;
      setSimOutput(`f'(${x}) = ${val.toFixed(4)} (Hệ số góc tiếp tuyến k)`);
    } else if (preset === 'trig') {
      // sin(x) in radians
      const val = Math.sin(x);
      setSimOutput(`sin(${x} rad) = ${val.toFixed(6)}`);
    }
  };

  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-2">
          <Compass className="w-4 h-4" />
          <span>PHƯƠNG PHÁP & KINH NGHIỆM ĐÃ KIỂM CHỨNG</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Bí Kíp Đột Phá Điểm 9+ Môn Toán 11
        </h1>
        <p className="text-slate-600 text-sm mt-2 max-w-3xl leading-relaxed">
          Chia sẻ 4 phương pháp học tập khoa học và kinh nghiệm thực chiến độc quyền từ nhóm học sinh giỏi 11A1, giúp bạn vượt qua rào cản Hình học không gian 3D, tối ưu tốc độ máy tính Casio và làm chủ phòng thi.
        </p>
      </div>

      {/* Method Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {STUDY_METHODS.map((method) => {
          const isSelected = method.id === selectedMethodId;
          return (
            <button
              key={method.id}
              onClick={() => setSelectedMethodId(method.id)}
              className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-indigo-50/80 border-indigo-400 shadow-xs'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-white shadow-xs' : 'bg-slate-100'}`}>
                    {getMethodIcon(method.iconName)}
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {method.estimatedTime}
                  </span>
                </div>
                <h3 className={`text-sm font-bold leading-snug ${isSelected ? 'text-indigo-950' : 'text-slate-800'}`}>
                  {method.title}
                </h3>
              </div>
              <span className={`text-[11px] font-medium mt-3 flex items-center gap-1 ${isSelected ? 'text-indigo-600 font-semibold' : 'text-slate-500'}`}>
                <span>Xem chi tiết</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Selected Method Showcase */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-8">
        {/* Method Headline & Summary */}
        <div className="space-y-4 border-b border-slate-100 pb-6">
          <div className="flex items-center gap-2 text-xs text-indigo-600 font-semibold">
            {getMethodIcon(selectedMethod.iconName)}
            <span className="uppercase tracking-wider">Chiến lược học tập chuyên sâu</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
            {selectedMethod.title}
          </h2>
          <p className="text-sm font-medium text-indigo-700 italic">
            "{selectedMethod.subtitle}"
          </p>

          <p className="text-slate-700 text-sm leading-relaxed">
            {selectedMethod.summary}
          </p>

          {/* Scientific basis box */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1.5">
            <div className="flex items-center gap-1.5 font-semibold text-slate-900">
              <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Cơ sở khoa học & Tâm lý học nhận thức</span>
            </div>
            <p className="leading-relaxed pl-5">
              {selectedMethod.scienceBasis}
            </p>
          </div>
        </div>

        {/* 4 Steps Section */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <span>Quy Trình 4 Bước Thực Hiện Chuẩn Xác</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedMethod.steps.map((step) => (
              <div
                key={step.number}
                className="p-4 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50 transition-colors space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {step.number}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">
                    {step.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-8">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Concrete Worked Example: Traditional vs Improved */}
        <div className="space-y-4 pt-2">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <span>Ví Dụ Minh Họa Bài Toán Thực Tế</span>
          </h3>

          {/* Problem Statement */}
          <div className="p-4 bg-indigo-50/60 rounded-xl border border-indigo-100 text-xs text-indigo-950 font-medium leading-relaxed">
            <span className="font-bold text-indigo-900 block mb-1">Đề bài ví dụ:</span>
            {selectedMethod.example.problem}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Traditional way */}
            <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/30 text-xs space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-rose-800">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Cách làm thông thường dễ sai / mất thời gian</span>
              </div>
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                {selectedMethod.example.traditionalWay}
              </p>
            </div>

            {/* Improved Breakthrough way */}
            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40 text-xs space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cách giải tối ưu theo phương pháp</span>
              </div>
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                {selectedMethod.example.improvedWay}
              </p>
            </div>
          </div>

          {/* Result and insight */}
          <div className="p-4 rounded-xl bg-slate-900 text-slate-200 text-xs space-y-2 border border-slate-800">
            <span className="font-semibold text-emerald-400 block">Kết quả tính toán & Bài học rút ra:</span>
            <p className="leading-relaxed text-slate-300 whitespace-pre-line">
              {selectedMethod.example.resultAndInsight}
            </p>
          </div>
        </div>

        {/* Pro Tips List */}
        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>Mẹo Thực Chiến Độc Quyền</span>
          </h3>
          <ul className="space-y-2">
            {selectedMethod.proTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Interactive Casio Simulator Demo Widget */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400">
              <Calculator className="w-4 h-4" />
              <span>CÔNG CỤ THỰC HÀNH BẤM MÁY TÍNH TRỰC TUYẾN</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Thử Nghiệm Kỹ Thuật CALC & Đạo Hàm Casio 580/880
            </h3>
            <p className="text-slate-400 text-xs">
              Trực tiếp kiểm chứng độ chính xác khi gán giá trị x₀ + 10⁻⁶ để tìm giới hạn siêu tốc
            </p>
          </div>

          <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg text-xs">
            <button
              onClick={() => {
                setTestPreset('limit');
                setCalcXVal('3.000001');
                runCasioSim('limit', '3.000001');
              }}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                testPreset === 'limit' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Giới hạn lim (x→3)
            </button>
            <button
              onClick={() => {
                setTestPreset('derivative');
                setCalcXVal('2');
                runCasioSim('derivative', '2');
              }}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                testPreset === 'derivative' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Đạo hàm d/dx
            </button>
            <button
              onClick={() => {
                setTestPreset('trig');
                setCalcXVal('1.570796');
                runCasioSim('trig', '1.570796');
              }}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                testPreset === 'trig' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Góc Radian (π/2)
            </button>
          </div>
        </div>

        {/* Casio Virtual Screen & Controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Virtual Display LCD */}
          <div className="md:col-span-7 bg-[#1c2826] rounded-xl p-5 border-2 border-slate-700 font-mono shadow-inner text-emerald-400 space-y-3">
            <div className="flex justify-between items-center text-[11px] text-emerald-600/80 border-b border-emerald-900/50 pb-1">
              <span>CASIO fx-580VNX EMULATOR</span>
              <span>MATH · RAD · D</span>
            </div>
            <div>
              <span className="text-xs text-emerald-500 block">Biểu thức nhập:</span>
              <span className="text-sm font-semibold text-emerald-300">
                {testPreset === 'limit' && 'lim (√(x + 1) - 2) / (x² - 9)'}
                {testPreset === 'derivative' && 'd/dx (x³ - 3x + 2) | x = ?'}
                {testPreset === 'trig' && 'sin(x) [với x đo bằng Radian]'}
              </span>
            </div>
            <div className="pt-2 border-t border-emerald-900/40">
              <span className="text-xs text-emerald-500 block">Giá trị màn hình hiển thị (=):</span>
              <span className="text-base sm:text-lg font-bold text-emerald-200 tracking-wider">
                {simOutput}
              </span>
            </div>
          </div>

          {/* Interactive Input Form */}
          <div className="md:col-span-5 space-y-4 text-xs">
            <div>
              <label className="text-slate-300 block font-medium mb-1">
                Nhập giá trị x cần gán (CALC x = ?):
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={calcXVal}
                  onChange={(e) => setCalcXVal(e.target.value)}
                  className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-hidden focus:border-indigo-500"
                  placeholder="Ví dụ: 3.000001"
                />
                <button
                  onClick={() => runCasioSim(testPreset, calcXVal)}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
                >
                  Ấn [=]
                </button>
              </div>
            </div>

            <p className="text-slate-400 text-[11px] leading-relaxed">
              💡 Thử nhập <span className="font-mono text-sky-300">3.0000001</span> hoặc <span className="font-mono text-sky-300">2.999999</span> để thấy kết quả luôn hội tụ về giá trị <span className="font-semibold text-white">0.0416667 (1/24)</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
