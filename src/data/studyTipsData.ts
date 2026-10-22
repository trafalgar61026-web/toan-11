import { StudyMethod } from '../types';

export const STUDY_METHODS: StudyMethod[] = [
  {
    id: 'feynman-geometry',
    title: 'Phương pháp Feynman & Kỹ thuật 3 Bước Hình học không gian',
    subtitle: 'Chuyển hóa bài toán không gian 3D phức tạp thành hình học phẳng quen thuộc',
    category: 'methodology',
    iconName: 'Compass',
    estimatedTime: 'Áp dụng xuyên suốt 45 phút mỗi buổi học',
    summary: 'Hình học không gian lớp 11 là "nỗi sợ hãi" của phần lớn học sinh vì khó tưởng tượng trực quan. Phương pháp Feynman kết hợp kỹ thuật bóc tách mặt phẳng giúp bạn đơn giản hóa mọi bài toán góc và khoảng cách.',
    scienceBasis: 'Theo giải Nobel Vật lý Richard Feynman, cách tốt nhất để hiểu sâu một khái niệm là giải thích nó bằng ngôn ngữ bình dân nhất cho một học sinh lớp dưới. Khi bạn tự giảng lại cách vẽ đường cao hay dựng góc cho người khác hiểu, não bộ sẽ tự động lắp ghép các mắt xích logic còn thiếu.',
    steps: [
      {
        number: 1,
        title: 'Bước 1: Vẽ hình chuẩn mực và xác định "Chân đường cao gốc"',
        description: 'Vẽ đáy trước (hình bình hành, tam giác) theo góc nhìn nghiêng 45 độ. Tìm ngay đỉnh và hạ đường cao vuông góc xuống đáy (ví dụ: SA ⊥ đáy, hoặc SO ⊥ đáy với O là tâm). Chân đường cao là "trái tim" của toàn bộ bài toán.'
      },
      {
        number: 2,
        title: 'Bước 2: Kỹ thuật bóc tách "Mặt phẳng chứa yếu tố cần tính"',
        description: 'Đừng nhìn toàn bộ khối chóp! Hãy trích xuất riêng tam giác chứa góc hoặc khoảng cách cần tính ra ngoài nháp dạng hình học phẳng 2D. Áp dụng hệ thức lượng tam giác vuông kinh điển: 1/h² = 1/b² + 1/c² hoặc định lý sin/cos.'
      },
      {
        number: 3,
        title: 'Bước 3: Nguyên tắc 3 điểm xác định góc (Đỉnh - Giao - Chiếu)',
        description: 'Góc giữa đường thẳng d và mặt phẳng (P): 1) Điểm giao I = d ∩ (P); 2) Chọn điểm A trên d; 3) Tìm hình chiếu vuông góc H của A lên (P). Góc cần tìm luôn là góc tại điểm Giao: ∠AIH.'
      },
      {
        number: 4,
        title: 'Bước 4: Giảng lại bằng lời trong 60 giây',
        description: 'Tự nói to hoặc ghi chép vắn tắt 3 dòng: Vì sao AH vuông góc với (P)? Dựa vào 2 đường nào cắt nhau? Nếu bạn khựng lại ở bước nào, nghĩa là bạn chưa nắm vững định lý đó.'
      }
    ],
    example: {
      problem: 'Cho hình chóp S.ABC có đáy ABC là tam giác vuông tại B, SA ⊥ (ABC). Biết SA = a, AB = a, BC = a√3. Xác định và tính số đo góc giữa đường thẳng SC và mặt phẳng đáy (ABC).',
      traditionalWay: 'Học sinh thường nhìn chằm chằm vào khối chóp 3D, đoán mò góc là ∠SCA hay ∠SCB hoặc cố gắng dùng tọa độ hóa dài dòng dễ nhầm lẫn.',
      improvedWay: 'Áp dụng công thức 3 điểm "Đỉnh - Giao - Chiếu":\n1. Đường thẳng SC và mặt phẳng đáy (ABC) có điểm giao chung là C.\n2. Đỉnh trên đường thẳng là S.\n3. Vì SA ⊥ (ABC) nên hình chiếu vuông góc của S lên đáy chính là A!\n⇒ Hình chiếu của đoạn SC lên (ABC) là đoạn AC.\n⇒ Góc giữa SC và đáy (ABC) chính là góc ∠SCA.',
      resultAndInsight: 'Tính toán trong tam giác vuông SAC:\n- Đáy AC = √(AB² + BC²) = √(a² + 3a²) = 2a (Định lý Pythagoras trong △ABC vuông tại B).\n- Tam giác SAC vuông tại A: tan ∠SCA = Đối / Kề = SA / AC = a / (2a) = 1/2 = 0.5.\n- Bấm Shift tan(0.5) ≈ 26°34\'.\n💡 Bài học rút ra: Chân đường vuông góc SA quyết định toàn bộ hình chiếu. Mọi bài toán góc với đáy đều quy về góc tại giao điểm với chân đường cao!'
    },
    proTips: [
      'Đường nét đứt phải vẽ chuẩn: cạnh nào bị che khuất bắt buộc dùng nét đứt, không vẽ bừa.',
      'Khi tính khoảng cách từ điểm bất kỳ đến mặt phẳng, 90% bài toán đều phải quy về khoảng cách từ "Chân đường cao" thông qua tỉ số khoảng cách talet.',
      'Sử dụng các ngón tay tạo thành hệ trục tọa độ 3D Oxyz trên bàn học để hình dung hướng vuông góc.'
    ]
  },
  {
    id: 'casio-mastery',
    title: 'Kỹ nghệ Làm chủ Máy tính Casio fx-580VNX / fx-880BTG',
    subtitle: 'Tối ưu hóa 30 giây mỗi câu trắc nghiệm Giới hạn, Đạo hàm & Lượng giác',
    category: 'calculator',
    iconName: 'Cpu',
    estimatedTime: 'Luyện 20 phút mỗi ngày trong ngân hàng câu hỏi',
    summary: 'Máy tính cầm tay không chỉ là công cụ tính cộng trừ nhân chia, mà là một "trợ lý số học" cực mạnh để kiểm tra ngược đáp án, thử nghiệm nghiệm ngoại lai và dò bước nhảy đồ thị.',
    scienceBasis: 'Kỳ thi tốt nghiệp THPT và ĐGNL áp dụng hình thức trắc nghiệm với thời gian trung bình 1.8 phút/câu. Tối ưu hóa các thao tác bấm máy giúp giải phóng tải trọng nhận thức (cognitive load) của não bộ, dành năng lượng tập trung vào các câu hỏi vận dụng cao (8.5 - 10 điểm).',
    steps: [
      {
        number: 1,
        title: 'Kỹ thuật CALC Giới hạn (Khử dạng vô định siêu tốc)',
        description: 'Khi x → x₀: nhập biểu thức, ấn CALC x = x₀ + 10⁻⁶ (ví dụ x → 2 thì gán 2.000001). Khi x → +∞: gán x = 10⁷. Khi x → -∞: gán x = -10⁷.'
      },
      {
        number: 2,
        title: 'Kỹ thuật d/dx (Đạo hàm tại điểm kiểm tra tiếp tuyến)',
        description: 'Dùng tổ hợp phím [SHIFT] + [Tích phân] để gọi d/dx. Nhập hàm số f(x), gán x = x₀ để tìm ngay hệ số góc k. So sánh nhanh với hệ số góc ở 4 đáp án.'
      },
      {
        number: 3,
        title: 'Kỹ thuật TABLE [MENU 8] tìm nghiệm Lượng giác & Min/Max',
        description: 'Vào [MENU 8], nhập hàm số f(x). Đặt Start = 0, End = 2π, Step = π/12 hoặc (End - Start)/29. Quan sát cột f(x) đổi dấu để xác định số lượng nghiệm chính xác.'
      },
      {
        number: 4,
        title: 'Quy tắc "2 Không" khi dùng Casio',
        description: '1) Không dùng máy tính khi chưa hiểu bản chất lý thuyết; 2) Không phụ thuộc 100% vào máy tính vì đề thi mới GDPT 2018 cài bẫy tham số m và câu hỏi Đúng/Sai chống bấm mò.'
      }
    ],
    example: {
      problem: 'Tìm giới hạn I = lim_{x → 3} (√(x + 1) - 2) / (x² - 9).',
      traditionalWay: 'Nhân lượng liên hợp tử số: [ (x+1) - 4 ] / [ (x-3)(x+3)(√(x+1)+2) ] = (x-3) / [ (x-3)(x+3)(√(x+1)+2) ]. Triệt tiêu (x-3), thay x=3 vào được: 1 / [(3+3)(2+2)] = 1 / 24 ≈ 0.041667. Tốn khoảng 2-3 phút nháp nếu tính toán chậm.',
      improvedWay: 'Thao tác Casio trong 12 giây:\n1. Nhập nguyên xi biểu thức vào màn hình: (√(x + 1) - 2) / (x² - 9).\n2. Ấn phím [CALC], máy hỏi x? Nhập: 3 + 10⁻⁶ (tức 3.000001).\n3. Ấn phím [=], màn hình hiển thị: 0.0416666...\n4. Thử 4 phương án đề cho: Bấm 1 ÷ 24 = 0.0416666... Trùng khớp 100%!',
      resultAndInsight: '💡 Bài học rút ra: Công thức CALC x₀ + 10⁻⁶ cho độ chính xác cực cao tới 7 chữ số thập phân, triệt tiêu hoàn toàn rủi ro sai dấu khi nhân chia lượng liên hợp trong phòng thi.'
    },
    proTips: [
      'Luôn kiểm tra ký hiệu góc trên màn hình: Chữ "R" (Radian) cho Lượng giác lớp 11, Chữ "D" (Degree) chỉ dùng khi bài toán cho đơn vị độ.',
      'Sử dụng phím STO [A], [B], [C] để lưu biến trung gian, không làm tròn số lẻ giữa chừng.',
      'Định kỳ Reset máy trước khi vào phòng thi: Shift 9 -> 3 -> = -> AC để xóa toàn bộ rác nhớ và thiết lập sai.'
    ]
  },
  {
    id: 'mistake-notebook',
    title: 'Hệ thống "Sổ tay Bẫy sai" (Mistake Log) & Lặp lại ngắt quãng',
    subtitle: 'Biến mỗi lần làm sai thành 1 điểm số tăng thêm trong bài thi thật',
    category: 'retention',
    iconName: 'BookMarked',
    estimatedTime: '15 phút ghi chép sau mỗi đề luyện tập',
    summary: 'Phần lớn học sinh làm 50 đề nhưng điểm số không tăng vì liên tục mắc lại cùng một lỗi ngớ ngẩn (quên điều kiện mẫu số khác 0, quên điều kiện hàm tan, nhầm công sai với công bội). Sổ tay bẫy sai là vũ khí bí mật giúp chấm dứt điều này.',
    scienceBasis: 'Đường cong quên lãng Ebbinghaus chỉ ra rằng con người quên 70% kiến thức mới sau 24 giờ nếu không ôn tập. Bằng cách ghi chép có cấu trúc nguyên nhân sai và xem lại vào ngày 1, ngày 3, ngày 7, não bộ sẽ tạo phản xạ tự vệ (Red Flag Alert) khi gặp lại bẫy đó trong đề thi.',
    steps: [
      {
        number: 1,
        title: 'Cấu trúc 1 trang sổ tay bẫy sai gồm 4 ô chuẩn',
        description: 'Ô 1: Đề bài câu hỏi làm sai (cắt dán hoặc chép lại); Ô 2: Lời giải sai của bản thân (tô đỏ chỗ sai); Ô 3: Lời giải chuẩn xác; Ô 4: "Tại sao tôi sai và bài học xương máu".'
      },
      {
        number: 2,
        title: 'Phân loại nguyên nhân sai thành 3 nhóm',
        description: 'Nhóm A (Lỗ hổng kiến thức - chưa thuộc công thức); Nhóm B (Lỗi kỹ năng - bấm máy sai, tính nhầm nháp); Nhóm C (Bẫy đề bài - bỏ quên điều kiện xác định, đọc nhầm câu hỏi phủ định "ĐÚNG" thành "SAI").'
      },
      {
        number: 3,
        title: 'Lịch ôn Spaced Repetition cố định',
        description: 'Mỗi tối Chủ nhật: dành 30 phút chỉ để đọc lại toàn bộ cuốn sổ tay bẫy sai của tuần đó và làm lại bằng miệng (Active Recall).'
      },
      {
        number: 4,
        title: 'Dấu tích "Tốt nghiệp câu hỏi"',
        description: 'Khi gặp lại dạng bài đó trong các đề tiếp theo và làm đúng 3 lần liên tiếp, dán nhãn xanh "Đã làm chủ" để chuyển sang bẫy mới.'
      }
    ],
    example: {
      problem: 'Giải phương trình: tan(2x - π/3) = √3.',
      traditionalWay: 'Học sinh bấm Shift tan(√3) = π/3, vội vã kết luận 2x - π/3 = π/3 + kπ ⇔ 2x = 2π/3 + kπ ⇔ x = π/3 + kπ/2. Quên sạch bước đặt điều kiện xác định của hàm tan!',
      improvedWay: 'Trích từ Sổ tay bẫy sai:\n- Bẫy: Hàm số tan u chỉ xác định khi u ≠ π/2 + kπ.\n- Bước 1 (Bắt buộc): ĐK: 2x - π/3 ≠ π/2 + kπ ⇔ 2x ≠ 5π/6 + kπ ⇔ x ≠ 5π/12 + kπ/2.\n- Bước 2: 2x - π/3 = π/3 + kπ ⇔ x = π/3 + kπ/2 (k ∈ ℤ).\n- Bước 3: So sánh điều kiện: các điểm nghiệm x = π/3 + kπ/2 thỏa mãn điều kiện x ≠ 5π/12 + kπ/2.',
      resultAndInsight: '💡 Bài học xương máu: Mọi phương trình chứa tan, cot, phân thức mẫu số hoặc căn bậc hai đều phải viết điều kiện xác định đầu tiên trước khi hạ bút biến đổi!'
    },
    proTips: [
      'Dùng bút highlight màu dạ quang vàng cho điều kiện xác định để mắt luôn bị thu hút.',
      'Tập thói quen gạch chân từ khóa trong đề: "nghiệm nguyên", "khoảng (0; 2π)", "nghiệm âm lớn nhất", "khẳng định SAI".'
    ]
  },
  {
    id: 'exam-strategy',
    title: 'Chiến thuật 40-30-20: Phân bổ 90 Phút Thi Môn Toán Đột Phá Điểm 9+',
    subtitle: 'Nghệ thuật kiểm soát nhịp độ phòng thi và xử lý tâm lý làm bài',
    category: 'exam_skills',
    iconName: 'Clock',
    estimatedTime: 'Áp dụng cho mọi bài kiểm tra 1 tiết, học kỳ và thi thử',
    summary: 'Nhiều bạn học rất giỏi nhưng điểm không cao vì "sa lầy" vào một câu khó ở phần đầu, dẫn đến hoảng loạn và đánh mất điểm ở những câu cơ bản phía sau. Chiến thuật 40-30-20 là chìa khóa phân phối năng lượng tối ưu.',
    scienceBasis: 'Hiệu ứng "Tunnel Vision" (tầm nhìn đường hầm) xảy ra khi não gặp căng thẳng: bạn bị cuốn vào 1 câu khó và mất nhận thức về thời gian. Chia thời gian làm 3 chặng độc lập sẽ giữ cho chỉ số cortisol luôn ở mức ổn định.',
    steps: [
      {
        number: 1,
        title: 'Chặng 1 (40 phút đầu): Quét sạch vùng Nhận biết & Thông hiểu (Mục tiêu 7.0 điểm)',
        description: 'Làm 1 lượt từ câu 1 đến câu 25-30. Câu nào đọc đề biết ngay cách làm thì xử lý dứt điểm và tô ngay đáp án. Câu nào lấn cấn quá 60 giây lập tức đánh dấu tròn và bỏ qua.'
      },
      {
        number: 2,
        title: 'Chặng 2 (30 phút tiếp): Chinh phục vùng Vận dụng (Mục tiêu 8.5 điểm)',
        description: 'Quay lại các câu đánh dấu tròn. Lúc này tâm lý đã thoải mái vì đã nắm chắc 7 điểm trong tay. Vận dụng Casio, đạo hàm, hình học bóc tách để giải quyết.'
      },
      {
        number: 3,
        title: 'Chặng 3 (15 phút): Tấn công Vận dụng cao & Dự đoán thông minh',
        description: 'Dành cho các câu phân loại điểm 9-10 (Hình học không gian cực trị, xác suất nhiều trường hợp). Dùng phương pháp loại trừ đáp án, thế số đặc biệt (chuẩn hóa tham số).'
      },
      {
        number: 4,
        title: '5 phút cuối: Rà soát phiếu trả lời trắc nghiệm',
        description: 'Tuyệt đối không giải câu mới! Soát lại mã đề, số báo danh và đối chiếu xem câu 15 trên đề đã tô đúng ô 15 trên phiếu chưa, không để sót bất kỳ ô trống nào.'
      }
    ],
    example: {
      problem: 'Tình huống phòng thi: Còn 20 phút mà còn 2 câu hình học không gian và 3 câu chưa tô đáp án.',
      traditionalWay: 'Học sinh hoảng sợ, cắm đầu vào vẽ hình chóp của câu cực trị, vẽ 15 phút không ra, cuối cùng cuống cuồng tô bừa khi giám thị hô "còn 2 phút".',
      improvedWay: 'Thực thi quy tắc 40-30-20:\n1. Dừng ngay việc vẽ hình cực trị.\n2. Lập tức tô ngay các phương án có xác suất cao cho các câu không biết làm theo chiến thuật phân phối đáp án.\n3. Dành 10 phút còn lại chọn câu có khả năng ăn điểm nhất (ví dụ câu xác suất hoặc câu cấp số cộng tính tổng).\n4. Dành 5 phút cuối rà soát phiếu tô.',
      resultAndInsight: '💡 Bài học: Không có câu nào 0.2 điểm giá trị hơn câu 0.2 điểm khác. Câu dễ hay câu khó nhất đều có cùng điểm số. Giữ trọn điểm dễ là điều kiện tiên quyết để chạm mốc điểm 9!'
    },
    proTips: [
      'Mang 2 máy tính Casio vào phòng thi: 1 máy chuyên tính toán thông thường, 1 máy giữ bảng TABLE để không phải nhập lại hàm.',
      'Tô trực tiếp vào phiếu trả lời theo từng trang đề (mỗi trang 4-6 câu tô 1 lần), không đợi hết giờ mới tô hàng loạt vì rất dễ tô lệch dòng.'
    ]
  }
];
