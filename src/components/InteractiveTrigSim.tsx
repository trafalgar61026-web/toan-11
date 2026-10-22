import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Activity, Box } from 'lucide-react';

export const InteractiveTrigSim: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'trig' | 'geometry'>('trig');

  // Trig states
  const [amplitude, setAmplitude] = useState<number>(1.5);
  const [frequency, setFrequency] = useState<number>(1);
  const [phase, setPhase] = useState<number>(0);
  const [verticalShift, setVerticalShift] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const animTimeRef = useRef<number>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 3D Geometry states
  const [height, setHeight] = useState<number>(160);
  const [baseWidth, setBaseWidth] = useState<number>(140);
  const [rotAngle, setRotAngle] = useState<number>(25); // degrees
  const [showProjection, setShowProjection] = useState<boolean>(true);

  // Animation loop for Trig wave
  useEffect(() => {
    let animId: number;

    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;
      const scaleX = 40; // pixels per unit
      const scaleY = 35; // pixels per unit

      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid lines
      ctx.strokeStyle = '#f1f5f9';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += scaleX) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += scaleY) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Axes
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 1.5;

      // X-Axis
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      // Y-Axis
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.stroke();

      // Axis labels
      ctx.fillStyle = '#64748b';
      ctx.font = '11px JetBrains Mono, monospace';
      ctx.fillText('x (rad)', width - 45, centerY - 8);
      ctx.fillText('y', width / 2 + 8, 16);
      ctx.fillText('0', width / 2 - 12, centerY + 14);

      // Period ticks on X-axis (π, 2π, -π, -2π)
      const piPixels = Math.PI * scaleX;
      const originX = width / 2;

      ctx.fillText('π', originX + piPixels - 4, centerY + 14);
      ctx.fillText('2π', originX + 2 * piPixels - 8, centerY + 14);
      ctx.fillText('-π', originX - piPixels - 8, centerY + 14);
      ctx.fillText('-2π', originX - 2 * piPixels - 12, centerY + 14);

      // Plot y = A * sin(B * x + C + time) + D
      ctx.beginPath();
      ctx.strokeStyle = '#4f46e5';
      ctx.lineWidth = 2.5;

      const timeOffset = isPlaying ? animTimeRef.current : 0;

      for (let px = 0; px <= width; px += 2) {
        const xVal = (px - originX) / scaleX;
        const yVal = amplitude * Math.sin(frequency * xVal + phase + timeOffset) + verticalShift;
        const py = centerY - yVal * scaleY;

        if (px === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();

      // Draw moving indicator point at x = 0
      const currentValAtZero = amplitude * Math.sin(phase + timeOffset) + verticalShift;
      const pointY = centerY - currentValAtZero * scaleY;

      ctx.beginPath();
      ctx.arc(originX, pointY, 6, 0, 2 * Math.PI);
      ctx.fillStyle = '#f43f5e';
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      if (isPlaying) {
        animTimeRef.current += 0.035;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [amplitude, frequency, phase, verticalShift, isPlaying]);

  // Calculated values
  const period = frequency !== 0 ? (2 * Math.PI / Math.abs(frequency)).toFixed(2) : '∞';
  const rangeMin = (verticalShift - Math.abs(amplitude)).toFixed(1);
  const rangeMax = (verticalShift + Math.abs(amplitude)).toFixed(1);

  // 3D Geometry calculations
  const angleRad = (rotAngle * Math.PI) / 180;
  // Center of projection
  const cx = 250;
  const cy = 200;
  // Pyramid Base: A, B, C, D (quadrilateral projected)
  const ax = cx - baseWidth * 0.7;
  const ay = cy + 20;
  const bx = cx - baseWidth * 0.2 + Math.cos(angleRad) * 20;
  const by = cy + 60;
  const cxPt = cx + baseWidth * 0.7;
  const cyPt = cy + 30;
  const dx = cx + baseWidth * 0.2 - Math.cos(angleRad) * 20;
  const dy = cy - 20;

  // Vertex S (straight above A or center, here above A for standard SA perpendicular to base)
  const sx = ax;
  const sy = ay - height;

  // Projection angle calculation
  const diagonalAC = Math.sqrt(Math.pow(cxPt - ax, 2) + Math.pow(cyPt - ay, 2));
  const calcAngleDeg = ((Math.atan(height / diagonalAC) * 180) / Math.PI).toFixed(1);

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
      {/* Simulation Header & Tab Switcher */}
      <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-1">
            <Activity className="w-4 h-4" />
            <span>MÔ PHỎNG TOÁN HỌC TRỰC QUAN</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            {activeTab === 'trig'
              ? 'Khám Phá Sóng Lượng Giác: y = A·sin(Bx + C) + D'
              : 'Hình Học Không Gian 3D: Góc Giữa Cạnh Bên & Mặt Đáy'}
          </h3>
        </div>

        <div className="flex items-center p-1 bg-slate-200/80 rounded-lg text-xs font-medium">
          <button
            onClick={() => setActiveTab('trig')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              activeTab === 'trig'
                ? 'bg-white text-indigo-700 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Sóng Lượng Giác</span>
          </button>
          <button
            onClick={() => setActiveTab('geometry')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              activeTab === 'geometry'
                ? 'bg-white text-indigo-700 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>Chóp 3D & Chiếu Góc</span>
          </button>
        </div>
      </div>

      {activeTab === 'trig' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Canvas Viewport (Left / Main) */}
          <div className="lg:col-span-8 p-4 sm:p-6 bg-slate-900 text-white flex flex-col justify-between relative min-h-[340px]">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="font-mono text-indigo-300">
                y = {amplitude}·sin({frequency}x {phase >= 0 ? `+ ${phase}` : `- ${Math.abs(phase)}`}) {verticalShift >= 0 ? `+ ${verticalShift}` : `- ${Math.abs(verticalShift)}`}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-1 px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded-md text-xs font-medium border border-slate-700"
                >
                  {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  <span>{isPlaying ? 'Tạm dừng' : 'Chạy sóng'}</span>
                </button>
                <button
                  onClick={() => {
                    setAmplitude(1.5);
                    setFrequency(1);
                    setPhase(0);
                    setVerticalShift(0);
                  }}
                  className="p-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md border border-slate-700"
                  title="Đặt lại tham số"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="w-full flex-1 flex items-center justify-center bg-slate-950/60 rounded-lg p-2 border border-slate-800 overflow-hidden">
              <canvas
                ref={canvasRef}
                width={560}
                height={260}
                className="w-full h-auto max-h-[260px] object-contain"
              />
            </div>

            {/* Live readout strip */}
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-slate-800/80 p-2 rounded-md border border-slate-700/60">
                <span className="text-slate-400 block text-[10px]">Chu kỳ T = 2π/|B|</span>
                <span className="font-mono font-semibold text-indigo-300">{period} rad</span>
              </div>
              <div className="bg-slate-800/80 p-2 rounded-md border border-slate-700/60">
                <span className="text-slate-400 block text-[10px]">Tập giá trị [Min; Max]</span>
                <span className="font-mono font-semibold text-emerald-300">[{rangeMin}; {rangeMax}]</span>
              </div>
              <div className="bg-slate-800/80 p-2 rounded-md border border-slate-700/60">
                <span className="text-slate-400 block text-[10px]">Biên độ sóng |A|</span>
                <span className="font-mono font-semibold text-rose-300">{Math.abs(amplitude)}</span>
              </div>
            </div>
          </div>

          {/* Control Deck (Right) */}
          <div className="lg:col-span-4 p-5 sm:p-6 bg-white space-y-4 text-xs">
            <h4 className="font-semibold text-slate-900 text-sm border-b border-slate-100 pb-2">
              Bảng Điều Khiển Tham Số
            </h4>

            {/* Slider A */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-slate-700 font-medium">Biên độ (A):</label>
                <span className="font-mono font-semibold text-indigo-600">{amplitude}</span>
              </div>
              <input
                type="range"
                min="-3"
                max="3"
                step="0.1"
                value={amplitude}
                onChange={(e) => setAmplitude(parseFloat(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <span className="text-[10px] text-slate-500">Kéo dãn hoặc co nén sóng theo chiều dọc</span>
            </div>

            {/* Slider B */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-slate-700 font-medium">Tần số góc (B):</label>
                <span className="font-mono font-semibold text-indigo-600">{frequency}</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="4"
                step="0.5"
                value={frequency}
                onChange={(e) => setFrequency(parseFloat(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <span className="text-[10px] text-slate-500">B càng lớn thì sóng càng dày (chu kỳ T càng ngắn)</span>
            </div>

            {/* Slider C */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-slate-700 font-medium">Độ lệch pha (C):</label>
                <span className="font-mono font-semibold text-indigo-600">{phase} rad</span>
              </div>
              <input
                type="range"
                min="-3.14"
                max="3.14"
                step="0.1"
                value={phase}
                onChange={(e) => setPhase(parseFloat(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <span className="text-[10px] text-slate-500">Tịnh tiến sóng sang trái (C {'>'} 0) hoặc phải (C {'<'} 0)</span>
            </div>

            {/* Slider D */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-slate-700 font-medium">Tịnh tiến đứng (D):</label>
                <span className="font-mono font-semibold text-indigo-600">{verticalShift}</span>
              </div>
              <input
                type="range"
                min="-2"
                max="2"
                step="0.2"
                value={verticalShift}
                onChange={(e) => setVerticalShift(parseFloat(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <span className="text-[10px] text-slate-500">Nâng lên hoặc hạ trục đối xứng của hàm số</span>
            </div>

            <div className="p-3 bg-indigo-50/70 rounded-lg text-indigo-900 border border-indigo-100 text-[11px] leading-relaxed">
              💡 <strong>Ứng dụng thi cử:</strong> Các câu hỏi nhận dạng đồ thị lượng giác luôn bắt đầu bằng việc tìm Min/Max để suy ra A và D, sau đó đo khoảng cách giữa 2 đỉnh liên tiếp để tìm chu kỳ T = 2π/B.
            </div>
          </div>
        </div>
      ) : (
        /* 3D Geometry Tab */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-8 p-4 sm:p-6 bg-slate-900 text-white flex flex-col justify-between relative min-h-[340px]">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="font-mono text-indigo-300">
                Khối Chóp S.ABCD (SA ⊥ đáy ABCD hình chữ nhật)
              </span>
              <label className="flex items-center gap-2 cursor-pointer text-xs">
                <input
                  type="checkbox"
                  checked={showProjection}
                  onChange={(e) => setShowProjection(e.target.checked)}
                  className="rounded-sm accent-indigo-500"
                />
                <span>Hiện tam giác chiếu SAC</span>
              </label>
            </div>

            {/* SVG 3D Canvas */}
            <div className="w-full flex-1 flex items-center justify-center bg-slate-950/60 rounded-lg p-2 border border-slate-800">
              <svg viewBox="0 0 500 300" className="w-full max-h-[260px]">
                {/* Projected Base ABCD */}
                {/* Hidden edges (dashed) */}
                <line x1={ax} y1={ay} x2={dx} y2={dy} stroke="#475569" strokeWidth="1.5" strokeDasharray="4,4" />
                <line x1={dx} y1={dy} x2={cxPt} y2={cyPt} stroke="#94a3b8" strokeWidth="1.5" />
                <line x1={ax} y1={ay} x2={bx} y2={by} stroke="#cbd5e1" strokeWidth="2" />
                <line x1={bx} y1={by} x2={cxPt} y2={cyPt} stroke="#cbd5e1" strokeWidth="2" />

                {/* Vertical Altitude SA (dashed since A is inside/back) */}
                <line x1={ax} y1={ay} x2={sx} y2={sy} stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="5,4" />

                {/* Lateral Edges */}
                <line x1={sx} y1={sy} x2={bx} y2={by} stroke="#818cf8" strokeWidth="2" />
                <line x1={sx} y1={sy} x2={cxPt} y2={cyPt} stroke="#f43f5e" strokeWidth="2.5" />
                <line x1={sx} y1={sy} x2={dx} y2={dy} stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,4" />

                {/* Projection of SC onto (ABCD) is AC */}
                {showProjection && (
                  <>
                    {/* AC projection line */}
                    <line x1={ax} y1={ay} x2={cxPt} y2={cyPt} stroke="#10b981" strokeWidth="2" strokeDasharray="5,3" />
                    {/* Right angle marker at A */}
                    <path
                      d={`M ${ax + 12} ${ay} L ${ax + 12} ${ay - 12} L ${ax} ${ay - 12}`}
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="1.5"
                    />
                    {/* Shaded triangle SAC */}
                    <polygon
                      points={`${sx},${sy} ${ax},${ay} ${cxPt},${cyPt}`}
                      fill="rgba(99, 102, 241, 0.15)"
                    />
                  </>
                )}

                {/* Labels */}
                <text x={sx - 5} y={sy - 8} fill="#ffffff" fontWeight="bold" fontSize="14">S</text>
                <text x={ax - 18} y={ay + 4} fill="#38bdf8" fontWeight="bold" fontSize="14">A</text>
                <text x={bx - 10} y={by + 16} fill="#ffffff" fontWeight="bold" fontSize="14">B</text>
                <text x={cxPt + 8} y={cyPt + 6} fill="#f43f5e" fontWeight="bold" fontSize="14">C</text>
                <text x={dx + 6} y={dy - 6} fill="#94a3b8" fontWeight="bold" fontSize="14">D</text>

                {/* Angle marker at C */}
                {showProjection && (
                  <text x={cxPt - 40} y={cyPt - 10} fill="#f59e0b" fontWeight="bold" fontSize="12">
                    φ ≈ {calcAngleDeg}°
                  </text>
                )}
              </svg>
            </div>

            {/* Readout */}
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-slate-800/80 p-2 rounded-md border border-slate-700/60">
                <span className="text-slate-400 block text-[10px]">Đường cao SA</span>
                <span className="font-mono font-semibold text-sky-300">{height} px</span>
              </div>
              <div className="bg-slate-800/80 p-2 rounded-md border border-slate-700/60">
                <span className="text-slate-400 block text-[10px]">Góc (SC, Đáy) = ∠SCA</span>
                <span className="font-mono font-semibold text-amber-300">{calcAngleDeg}°</span>
              </div>
              <div className="bg-slate-800/80 p-2 rounded-md border border-slate-700/60">
                <span className="text-slate-400 block text-[10px]">Hình chiếu của SC</span>
                <span className="font-mono font-semibold text-emerald-300">Đoạn AC</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="lg:col-span-4 p-5 sm:p-6 bg-white space-y-4 text-xs">
            <h4 className="font-semibold text-slate-900 text-sm border-b border-slate-100 pb-2">
              Điều Chỉnh Khối 3D
            </h4>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-slate-700 font-medium">Chiều cao chóp (SA):</label>
                <span className="font-mono font-semibold text-indigo-600">{height}</span>
              </div>
              <input
                type="range"
                min="80"
                max="220"
                value={height}
                onChange={(e) => setHeight(parseInt(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <span className="text-[10px] text-slate-500">Tăng chiều cao làm góc dốc ∠SCA tăng lên</span>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-slate-700 font-medium">Kích thước đáy (ABCD):</label>
                <span className="font-mono font-semibold text-indigo-600">{baseWidth}</span>
              </div>
              <input
                type="range"
                min="90"
                max="190"
                value={baseWidth}
                onChange={(e) => setBaseWidth(parseInt(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-slate-700 font-medium">Góc xoay quan sát:</label>
                <span className="font-mono font-semibold text-indigo-600">{rotAngle}°</span>
              </div>
              <input
                type="range"
                min="-60"
                max="60"
                value={rotAngle}
                onChange={(e) => setRotAngle(parseInt(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <span className="text-[10px] text-slate-500">Xoay đáy để quan sát rõ hơn các mặt bên che khuất</span>
            </div>

            <div className="p-3 bg-emerald-50 rounded-lg text-emerald-900 border border-emerald-100 text-[11px] leading-relaxed">
              📐 <strong>Bản chất hình học:</strong> Vì SA ⊥ (ABCD) nên A là hình chiếu của S lên đáy. Điểm C thuộc đáy nên hình chiếu của C là chính nó. Do đó hình chiếu vuông góc của SC lên đáy là AC. Góc cần tìm là góc ∠SCA với tan(∠SCA) = SA / AC.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
