import React, { useState } from 'react';
import { PROJECT_REPORT_DATA } from '../data/reportData';
import { FileText, Users, Calendar, BookOpen, CheckCircle, Printer, Award, Lightbulb, Laptop } from 'lucide-react';
import teamPhoto from '../assets/images/study_group_project_1792641381774.jpg';

export const ProjectReportView: React.FC = () => {
  const [printNotification, setPrintNotification] = useState(false);

  const handlePrint = () => {
    window.print();
    setPrintNotification(true);
    setTimeout(() => setPrintNotification(false), 3000);
  };

  return (
    <div className="space-y-12">
      {/* Printable Header & Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-2">
            <Award className="w-4 h-4" />
            <span>HỒ SƠ NGHIỆM THU DỰ ÁN HỌC TẬP KHỐI 11</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Báo Cáo Giới Thiệu Sản Phẩm Website
          </h1>
          <p className="text-slate-600 text-sm mt-1 max-w-2xl leading-relaxed">
            Hồ sơ báo cáo dự án "Xây dựng website chia sẻ kinh nghiệm và sổ tay học tập môn Toán 11" theo yêu cầu của Giáo viên bộ môn.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <Printer className="w-4 h-4 text-slate-300" />
            <span>In / Xuất Bản Báo Cáo</span>
          </button>
        </div>
      </div>

      {printNotification && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Lệnh in đã được gửi đến trình duyệt. Hãy chọn "Lưu dưới dạng PDF" trong cửa sổ in.</span>
        </div>
      )}

      {/* Main Report Document Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-10">
        {/* Section 1: Overview Document Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-slate-100 pb-8">
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1 text-xs">
              <span className="text-indigo-600 font-bold uppercase tracking-wider block">
                {PROJECT_REPORT_DATA.school}
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 leading-tight">
                {PROJECT_REPORT_DATA.projectName}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Môn học</span>
                <span className="font-semibold text-slate-900">{PROJECT_REPORT_DATA.subject}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Lớp / Năm học</span>
                <span className="font-semibold text-slate-900">{PROJECT_REPORT_DATA.grade}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Giáo viên hướng dẫn</span>
                <span className="font-semibold text-slate-900">{PROJECT_REPORT_DATA.instructor}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Nhóm thực hiện</span>
                <span className="font-semibold text-indigo-700">Nhóm 1 - Lớp 11A1 (5 thành viên)</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Mục tiêu dự án:</strong> Ứng dụng công nghệ thông tin và phương pháp sư phạm hiện đại để xây dựng website học liệu số trực quan, giải quyết các khó khăn cốt lõi của học sinh khối 11 khi học chương trình GDPT 2018 mới.
            </p>
          </div>

          <div className="lg:col-span-5 rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img
              src={teamPhoto}
              alt="Nhóm học sinh đang thảo luận dự án tại thư viện trường"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover"
            />
            <div className="p-2.5 bg-slate-50 text-[11px] text-slate-500 text-center italic border-t border-slate-200">
              Hình ảnh: Buổi thảo luận và nghiệm thu sản phẩm website của Nhóm 1 tại thư viện
            </div>
          </div>
        </div>

        {/* Section 2: Design Concept & Tech Stack */}
        <div className="space-y-6 border-b border-slate-100 pb-8">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            <span>1. Ý Tưởng Thiết Kế & Công Cụ Sử Dụng</span>
          </div>

          <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
            <h4 className="font-bold text-slate-900 text-sm">Ý tưởng thiết kế:</h4>
            <p className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              {PROJECT_REPORT_DATA.designConcept}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Laptop className="w-4 h-4 text-sky-600" />
              <span>Công cụ & Công nghệ triển khai:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {PROJECT_REPORT_DATA.technologyStack.map((tech, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200/70 flex items-start gap-2 text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Team Members and Specific Task Breakdown (Requirement) */}
        <div className="space-y-6 border-b border-slate-100 pb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <Users className="w-5 h-5 text-indigo-600" />
              <span>2. Phân Công Nhiệm Vụ Thành Viên Trong Nhóm</span>
            </div>
            <span className="text-xs text-slate-500 font-medium">100% Khối lượng công việc hoàn thành</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Họ và tên</th>
                  <th className="p-3">Vai trò</th>
                  <th className="p-3">Nhiệm vụ cụ thể phụ trách</th>
                  <th className="p-3 text-center">Khối lượng</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {PROJECT_REPORT_DATA.teamMembers.map((member, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-3 font-semibold text-slate-900 whitespace-nowrap">
                      {member.name}
                      <span className="block text-[10px] text-slate-500 font-mono">MSHS: {member.studentId} · {member.class}</span>
                    </td>
                    <td className="p-3 font-medium text-indigo-700 whitespace-nowrap">
                      {member.role}
                    </td>
                    <td className="p-3 space-y-1">
                      <ul className="list-disc list-inside space-y-0.5 text-slate-600">
                        {member.contributions.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="p-3 text-center font-mono font-bold text-indigo-600 whitespace-nowrap">
                      {member.workloadPercentage}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4: Project Implementation Timeline */}
        <div className="space-y-6 border-b border-slate-100 pb-8">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <Calendar className="w-5 h-5 text-emerald-600" />
            <span>3. Tiến Trình 4 Tuần Thực Hiện Dự Án</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECT_REPORT_DATA.projectTimeline.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2 text-xs"
              >
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span className="text-indigo-600">{item.week}</span>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-md text-[10px] font-semibold">
                    {item.status}
                  </span>
                </div>
                <p className="text-slate-700 font-medium">{item.task}</p>
                <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-200/60">
                  <strong>Sản phẩm bàn giao:</strong> {item.deliverables}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Academic References & Anti-Plagiarism Guarantee (Requirement) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <BookOpen className="w-5 h-5 text-amber-600" />
              <span>4. Danh Mục Tài Liệu Tham Khảo & Cam Kết Học Thuật</span>
            </div>
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" />
              Đã kiểm duyệt trích dẫn
            </span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Nhóm cam kết toàn bộ nội dung công thức, phương pháp và bài tập được biên soạn độc lập, có sự chắt lọc và thẩm định nghiêm túc từ các nguồn sách giáo khoa và tài liệu chính thống của Bộ GD&ĐT; tuyệt đối không sao chép nguyên văn thiếu chọn lọc từ Internet.
          </p>

          <div className="space-y-2.5">
            {PROJECT_REPORT_DATA.references.map((ref, idx) => (
              <div
                key={idx}
                className="p-3 bg-slate-50 rounded-lg border border-slate-200/70 text-xs flex items-start gap-3"
              >
                <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div className="space-y-0.5">
                  <span className="font-semibold text-slate-900 block">{ref.name}</span>
                  <div className="text-[11px] text-slate-500 flex flex-wrap items-center gap-2">
                    <span>Tác giả: {ref.author}</span>
                    <span aria-hidden="true">·</span>
                    <span>Thể loại: {ref.type}</span>
                    <span aria-hidden="true">·</span>
                    <span>Năm XB: {ref.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
