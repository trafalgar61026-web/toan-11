import React, { useState } from 'react';
import { LEARNING_RESOURCES } from '../data/resourcesData';
import { LearningResource } from '../types';
import { InteractiveTrigSim } from './InteractiveTrigSim';
import { Sparkles, ExternalLink, Download, Video, Wrench, FileText, Globe, Check, Eye } from 'lucide-react';

export const ResourcesView: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [previewDocOpen, setPreviewDocOpen] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const filterTypes = [
    { id: 'all', label: 'Tất cả tài nguyên' },
    { id: 'video', label: 'Video bài giảng' },
    { id: 'tool', label: 'Công cụ toán học' },
    { id: 'document', label: 'Tài liệu PDF' },
    { id: 'website', label: 'Cổng thông tin & Đề thi' }
  ];

  const filteredResources = LEARNING_RESOURCES.filter(
    (res) => selectedType === 'all' || res.type === selectedType
  );

  const getResourceIcon = (type: LearningResource['type']) => {
    switch (type) {
      case 'video':
        return <Video className="w-4 h-4 text-rose-600" />;
      case 'tool':
        return <Wrench className="w-4 h-4 text-sky-600" />;
      case 'document':
        return <FileText className="w-4 h-4 text-emerald-600" />;
      case 'website':
        return <Globe className="w-4 h-4 text-indigo-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-indigo-600" />;
    }
  };

  const handleDownloadPdf = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 3000);
  };

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-600 mb-2">
          <Sparkles className="w-4 h-4" />
          <span>HỆ SINH THÁI TỰ HỌC SỐ TOÁN 11</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Kho Tài Nguyên & Công Cụ Hỗ Trợ
        </h1>
        <p className="text-slate-600 text-sm mt-1 max-w-2xl leading-relaxed">
          Tổng hợp video bài giảng chuyên sâu, tài liệu ôn tập chuẩn kiến trúc GDPT 2018, phần mềm GeoGebra 3D / Desmos và bộ mô phỏng trực quan.
        </p>
      </div>

      {/* Embedded Live Simulation Sandbox (Mandatory interactive feature) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-indigo-600 tracking-wider">CÔNG CỤ TƯƠNG TÁC TÍCH HỢP</span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Phòng Thí Nghiệm Toán Học Trực Tuyến
            </h2>
          </div>
          <span className="text-xs text-slate-500 hidden sm:inline-block">
            Không cần cài đặt thêm phần mềm
          </span>
        </div>

        {/* Live Interactive Trig & 3D Geometry Sandbox */}
        <InteractiveTrigSim />
      </section>

      {/* Resource Catalog */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-indigo-600 tracking-wider">THƯ VIỆN CHỌN LỌC</span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Danh Mục Tài Nguyên Học Tập Chất Lượng Cao
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {filterTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedType === type.id
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded-xl border border-slate-200 p-5 space-y-4 shadow-xs hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Meta header (Zero-pill format) */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    {getResourceIcon(res.type)}
                    <span className="font-semibold text-slate-800">{res.category}</span>
                  </div>
                  <span className="text-[11px] text-slate-500">{res.provider}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {res.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {res.description}
                </p>

                {/* Tags in clean unboxed typographic format */}
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500 pt-1">
                  {res.tags.map((tag, idx) => (
                    <React.Fragment key={tag}>
                      <span>#{tag}</span>
                      {idx < res.tags.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Action Link / Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                {res.id === 'res-4' ? (
                  <div className="flex items-center gap-2 w-full justify-between">
                    <button
                      onClick={() => setPreviewDocOpen(true)}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Xem trước</span>
                    </button>
                    <button
                      onClick={handleDownloadPdf}
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
                    >
                      {downloadSuccess ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white" />
                          <span>Đã tải về thành công!</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          <span>Tải PDF (48 Trang)</span>
                        </>
                      )}
                    </button>
                  </div>
                ) : (
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 hover:underline"
                  >
                    <span>Mở liên kết học tập</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PDF Document Preview Modal */}
      {previewDocOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-semibold text-indigo-600 block">TÀI LIỆU NỘI BỘ DỰ ÁN 11A1</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Cẩm Nang Sổ Tay Công Thức Toán 11 Bỏ Túi (Mục lục chi tiết)
                </h3>
              </div>
              <button
                onClick={() => setPreviewDocOpen(false)}
                className="text-slate-400 hover:text-slate-700 text-lg font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
              <p className="font-semibold text-slate-900">
                Tài liệu dày 48 trang được biên soạn công phu theo chuẩn 3 bộ sách giáo khoa:
              </p>
              <ul className="space-y-2 border-l-2 border-indigo-200 pl-4">
                <li><strong>Phần 1 (Trang 1-10):</strong> Hàm số và phương trình lượng giác, bảng 24 công thức biến đổi, kỹ năng vẽ đồ thị.</li>
                <li><strong>Phần 2 (Trang 11-18):</strong> Dãy số, Cấp số cộng và Cấp số nhân, bài toán kinh tế và mô hình tăng trưởng.</li>
                <li><strong>Phần 3 (Trang 19-28):</strong> Giới hạn, hàm số liên tục và phương pháp khử 4 dạng vô định bằng Casio 580/880.</li>
                <li><strong>Phần 4 (Trang 29-38):</strong> Đạo hàm các hàm số cơ bản và hàm hợp, ý nghĩa vật lý và tiếp tuyến đồ thị.</li>
                <li><strong>Phần 5 (Trang 39-48):</strong> Quan hệ vuông góc trong không gian, phương pháp bóc tách 3 bước góc và khoảng cách.</li>
              </ul>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setPreviewDocOpen(false)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
              >
                Đóng
              </button>
              <button
                onClick={() => {
                  handleDownloadPdf();
                  setPreviewDocOpen(false);
                }}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Tải Toàn Bộ Tài Liệu PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
