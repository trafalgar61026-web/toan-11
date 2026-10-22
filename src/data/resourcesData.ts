import { LearningResource } from '../types';

export const LEARNING_RESOURCES: LearningResource[] = [
  {
    id: 'res-1',
    title: 'Hệ thống Video Bài giảng Toán 11 Chuyên sâu GDPT 2018',
    type: 'video',
    category: 'Bài giảng trực tuyến',
    provider: 'Kênh Học Toán Thầy Đỗ Văn Đức & Thầy Nguyễn Quốc Chí',
    description: 'Tuyển tập hơn 60 bài giảng video quay chuẩn HD, phân tích từ bản chất hình học không gian 3D, mẹo bấm máy tính Casio fx-580VNX / 880BTG và phương pháp giải nhanh trắc nghiệm bám sát cấu trúc đề mới.',
    url: 'https://www.youtube.com/@ThayDoVanDuc',
    tags: ['Video bài giảng', 'Casio 580', 'Hình học 3D', 'Luyện thi 9+'],
    featured: true
  },
  {
    id: 'res-2',
    title: 'GeoGebra 3D Calculator - Phần mềm Khảo sát Không gian 3 chiều',
    type: 'tool',
    category: 'Công cụ mô phỏng toán học',
    provider: 'GeoGebra International Foundation',
    description: 'Công cụ vẽ hình học không gian 3D và đồ thị hàm số mạnh mẽ nhất thế giới. Cho phép học sinh xoay khối đa diện 360 độ, tạo thiết diện cắt, đo góc nhị diện và khoảng cách thực tế giữa hai đường thẳng chéo nhau.',
    url: 'https://www.geogebra.org/3d',
    tags: ['GeoGebra', 'Hình học 3D', 'Mô phỏng tương tác', 'Thiết diện'],
    featured: true
  },
  {
    id: 'res-3',
    title: 'Desmos Graphing Calculator - Khám phá Đồ thị Hàm số Lượng giác',
    type: 'tool',
    category: 'Công cụ đồ họa hàm số',
    provider: 'Desmos Studio',
    description: 'Máy vẽ đồ thị trực quan thời gian thực. Hỗ trợ thanh trượt tham số (sliders) để học sinh trực quan hóa chu kỳ dao động của hàm số y = a·sin(bx + c), nghiệm phương trình lượng giác và sự biến thiên của đạo hàm.',
    url: 'https://www.desmos.com/calculator',
    tags: ['Desmos', 'Đồ thị', 'Hàm lượng giác', 'Đạo hàm'],
    featured: true
  },
  {
    id: 'res-4',
    title: 'Cẩm nang Sổ tay Công thức Toán 11 Bỏ túi Toàn diện (PDF)',
    type: 'document',
    category: 'Tài liệu ôn tập',
    provider: 'Nhóm Biên soạn Toán 11 Master & GVHD',
    description: 'Bộ tài liệu PDF 48 trang tổng hợp toàn bộ định lý, công thức giải nhanh, bảng tóm tắt đạo hàm và 100 câu hỏi kinh điển có lời giải chi tiết. Định dạng tối ưu để in ấn và đọc trên điện thoại.',
    url: '#download-pdf',
    tags: ['Tài liệu PDF', 'Công thức bỏ túi', 'Sổ tay 48 trang', 'Bản quyền mở'],
    featured: true
  },
  {
    id: 'res-5',
    title: 'Cổng Tri thức Số Giáo dục Phổ thông & Ngân hàng Đề thi Bộ GD&ĐT',
    type: 'website',
    category: 'Cổng thông tin & Đề thi',
    provider: 'Bộ Giáo dục & Đào tạo Việt Nam',
    description: 'Kho học liệu số quốc gia lưu trữ đề minh họa, ngân hàng câu hỏi chuẩn hóa môn Toán THPT theo chương trình giáo dục phổ thông 2018 với 3 định dạng câu hỏi mới.',
    url: 'https://moet.gov.vn',
    tags: ['Bộ GD&ĐT', 'Đề minh họa', 'Học liệu số', 'Chuẩn GDPT 2018']
  },
  {
    id: 'res-6',
    title: 'Kênh Truyền hình Giáo dục Quốc gia VTV7 - Chinh Phục Kỳ Thi',
    type: 'video',
    category: 'Kênh truyền hình giáo dục',
    provider: 'Đài Truyền hình Việt Nam (VTV7)',
    description: 'Chương trình giảng dạy chuyên đề giải tích và hình học lớp 11 với sự tham gia của các chuyên gia đầu ngành, minh họa bài toán thực tế sinh động về tăng trưởng tài chính và ứng dụng vật lý.',
    url: 'https://vtvgo.vn',
    tags: ['VTV7', 'Truyền hình', 'Chuyên gia giáo dục', 'Toán thực tiễn']
  }
];
