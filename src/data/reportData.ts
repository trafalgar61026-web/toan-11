import { ProjectReport } from '../types';

export const PROJECT_REPORT_DATA: ProjectReport = {
  projectName: 'Toán 11 Master - Sổ Tay Học Tập & Bí Kíp Đột Phá Điểm 9+',
  subject: 'Toán học (Lớp 11) - Chương trình Giáo dục Phổ thông 2018',
  grade: 'Khối 11 - Năm học 2024 - 2025 / 2025 - 2026',
  school: 'Trường Trung học Phổ thông Chuyên / Trọng điểm',
  instructor: 'Thầy/Cô Giáo viên Bộ môn Toán & Tin học',
  designConcept: 'Dự án xuất phát từ thực trạng học sinh lớp 11 thường gặp nhiều trở ngại lớn khi tiếp cận môn Toán theo chương trình GDPT 2018 (đặc biệt là phần Hình học không gian ba chiều, Hàm số lượng giác và Xác suất có điều kiện). Phương pháp học thuộc lòng thụ động khiến kiến thức nhanh chóng bị rơi rụng. Nhóm quyết định xây dựng website "Toán 11 Master" như một nền tảng học tập số đa phương tiện, tích hợp: 1) Bí kíp phương pháp học sâu (Feynman, Casio tối ưu, Sổ tay bẫy sai); 2) Sổ tay hệ thống hóa kiến thức dạng sơ đồ tư duy tương tác; 3) Mô phỏng đồ thị trực tiếp; và 4) Góc trắc nghiệm thông minh có hướng dẫn giải từng bước. Giao diện được thiết kế theo chuẩn sư phạm hiện đại, tối ưu cho cả máy tính và điện thoại thông minh.',
  technologyStack: [
    'React 19 & TypeScript: Xây dựng ứng dụng đơn trang (SPA) mượt mà, cấu trúc hướng thành phần rõ ràng.',
    'Tailwind CSS: Thiết kế hệ thống nhận diện thị giác hiện đại, chuẩn tỉ lệ màu sắc 60-30-10, tương thích thiết bị.',
    'HTML5 Canvas & SVG Simulation: Lập trình tương tác trực tiếp mô phỏng sóng hàm số lượng giác và hình học 3D.',
    'Lucide Icons: Thư viện biểu tượng giao diện chuẩn xác, tối giản.',
    'Figma & Miro: Phác thảo Wireframe, xây dựng bản mẫu Prototype và Sơ đồ tư duy trước khi hiện thực hóa code.'
  ],
  teamMembers: [
    {
      name: 'Nguyễn Văn An (Trưởng nhóm)',
      role: 'Quản lý dự án & Lập trình giao diện Frontend',
      class: '11A1',
      studentId: 'HS1101',
      contributions: [
        'Lên ý tưởng thiết kế tổng thể, kiến trúc hệ thống và luồng điều hướng website.',
        'Lập trình cấu trúc React, tích hợp hệ thống tab điều hướng và responsive trên mobile.',
        'Viết mã nguồn bộ mô phỏng đồ thị lượng giác tương tác và hình học không gian.',
        'Tổng hợp báo cáo và chuẩn bị bài thuyết trình trước lớp.'
      ],
      workloadPercentage: 25
    },
    {
      name: 'Trần Thị Mai',
      role: 'Biên tập Sổ tay kiến thức & Sơ đồ tư duy',
      class: '11A1',
      studentId: 'HS1102',
      contributions: [
        'Hệ thống hóa toàn bộ công thức 6 chuyên đề trọng tâm theo SGK Toán 11 mới.',
        'Biên soạn các câu thần chú, khẩu quyết ghi nhớ nhanh và phân loại cấp độ nhận thức.',
        'Xây dựng cây dữ liệu sơ đồ tư duy (Mindmap tree) và nội dung bảng tra cứu cheatsheet.',
        'Kiểm tra tính chính xác của các ký hiệu toán học.'
      ],
      workloadPercentage: 20
    },
    {
      name: 'Lê Hoàng Nam',
      role: 'Nghiên cứu Phương pháp học & Thủ thuật Casio',
      class: '11A1',
      studentId: 'HS1103',
      contributions: [
        'Nghiên cứu cơ sở khoa học của Phương pháp Feynman và Lặp lại ngắt quãng (Spaced Repetition).',
        'Tổng hợp và kiểm nghiệm các phím tắt bấm máy tính cầm tay Casio fx-580VNX & 880BTG.',
        'Viết các ví dụ bài toán thực tế minh họa so sánh cách giải truyền thống vs cách giải tối ưu.',
        'Biên soạn cẩm nang Sổ tay bẫy sai (Mistake Log).'
      ],
      workloadPercentage: 20
    },
    {
      name: 'Phạm Quỳnh Anh',
      role: 'Xây dựng Ngân hàng Câu hỏi & Lời giải chi tiết',
      class: '11A1',
      studentId: 'HS1104',
      contributions: [
        'Chọn lọc 10 câu hỏi trắc nghiệm bám sát cấu trúc ma trận đề thi mới của Bộ GD&ĐT.',
        'Biên soạn lời giải chi tiết từng bước, bổ sung mẹo Casio và công thức then chốt cho từng câu.',
        'Thiết kế bộ Flashcards ôn tập nhanh công thức với câu hỏi và gợi ý lật thẻ.',
        'Kiểm thử tính năng chấm điểm và đồng hồ đếm ngược của góc luyện tập.'
      ],
      workloadPercentage: 20
    },
    {
      name: 'Đặng Quốc Huy',
      role: 'Thu thập Tài nguyên & Kiểm thử chất lượng (QA)',
      class: '11A1',
      studentId: 'HS1105',
      contributions: [
        'Tuyển chọn các đường liên kết video bài giảng chất lượng cao, công cụ GeoGebra, Desmos.',
        'Kiểm tra tính khả dụng của tất cả các liên kết ra bên ngoài, đảm bảo không có link hỏng.',
        'Kiểm thử giao diện trên các kích thước màn hình khác nhau (Laptop, iPad, Smartphone).',
        'Thu thập phản hồi thử nghiệm từ 15 học sinh trong khối 11 để hoàn thiện trải nghiệm.'
      ],
      workloadPercentage: 15
    }
  ],
  projectTimeline: [
    {
      week: 'Tuần 1: Khởi động & Khảo sát',
      task: 'Họp nhóm, lựa chọn môn Toán 11, khảo sát nhu cầu học sinh khối 11, thống nhất ý tưởng và phân chia nhiệm vụ.',
      deliverables: 'Bản đề cương dự án, phân công công việc, sơ đồ trang web (Sitemap).',
      status: 'Hoàn thành'
    },
    {
      week: 'Tuần 2: Biên soạn nội dung học thuật',
      task: 'Thu thập và biên tập 6 chuyên đề sổ tay, 4 bài chia sẻ kinh nghiệm học tập, bộ câu hỏi trắc nghiệm có giải chi tiết.',
      deliverables: 'Kho tư liệu học thuật hoàn chỉnh, đã được kiểm duyệt công thức.',
      status: 'Hoàn thành'
    },
    {
      week: 'Tuần 3: Thiết kế UI & Lập trình tính năng',
      task: 'Thiết kế giao diện trên Figma, lập trình ứng dụng web React + Tailwind CSS, xây dựng bộ mô phỏng tương tác và góc trắc nghiệm.',
      deliverables: 'Phiên bản web chạy thử nghiệm (Alpha version) với đầy đủ 5 phân hệ chính.',
      status: 'Hoàn thành'
    },
    {
      week: 'Tuần 4: Kiểm thử, Tối ưu & Báo cáo',
      task: 'Cho học sinh lớp 11 thử nghiệm, sửa lỗi, hoàn thiện báo cáo giới thiệu sản phẩm và chuẩn bị slide thuyết trình dự án.',
      deliverables: 'Sản phẩm hoàn chỉnh công bố trực tuyến, bản báo cáo tổng kết nộp giáo viên.',
      status: 'Hoàn thành'
    }
  ],
  references: [
    {
      name: 'Sách giáo khoa Toán 11 (Tập 1 & Tập 2) - Bộ sách Kết nối tri thức với cuộc sống',
      author: 'Hà Huy Khoái (Tổng Chủ biên), Cung Thế Anh, Trần Văn Ân...',
      type: 'Sách giáo khoa chính khóa',
      year: '2023 - Nhà xuất bản Giáo dục Việt Nam'
    },
    {
      name: 'Sách giáo khoa Toán 11 - Bộ sách Cánh Diều & Chân Trời Sáng Tạo',
      author: 'Đỗ Đức Thái (Tổng Chủ biên), Trần Nam Dũng (Tổng Chủ biên)...',
      type: 'Tài liệu đối chiếu bổ trợ',
      year: '2023 - NXB Đại học Sư phạm & NXB Giáo dục VN'
    },
    {
      name: 'Định dạng cấu trúc đề thi tốt nghiệp THPT từ năm 2025',
      author: 'Bộ Giáo dục và Đào tạo Việt Nam',
      type: 'Văn bản hướng dẫn chuyên môn',
      year: '2024'
    },
    {
      name: 'Tài liệu hướng dẫn sử dụng máy tính khoa học Casio fx-580VNX & fx-880BTG',
      author: 'Công ty Cổ phần XNK Bình Tây (BITEX) & Viện Khoa học Giáo dục',
      type: 'Cẩm nang kỹ thuật',
      year: '2022'
    },
    {
      name: 'Nền tảng toán học tương tác GeoGebra 3D & Desmos Studio',
      author: 'GeoGebra LLC & Desmos Inc.',
      type: 'Phần mềm mã nguồn mở & công cụ số',
      year: '2024 - 2025'
    }
  ]
};
