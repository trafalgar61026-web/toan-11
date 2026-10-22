import { FormulaItem, MindmapNode } from '../types';

export const CHAPTERS_INFO = [
  { id: 'all', name: 'Tất cả chủ đề', count: 24 },
  { id: 'LuongGiac', name: '1. Hàm số & PT Lượng giác', count: 5 },
  { id: 'DaySo', name: '2. Dãy số, Cấp số cộng & CSN', count: 4 },
  { id: 'GioiHan', name: '3. Giới hạn & Hàm liên tục', count: 4 },
  { id: 'DaoHam', name: '4. Đạo hàm & Tiếp tuyến', count: 4 },
  { id: 'HinhKhongGian', name: '5. Hình học không gian', count: 4 },
  { id: 'XacSuat', name: '6. Xác suất cổ điển & có điều kiện', count: 3 }
];

export const FORMULAS_DATA: FormulaItem[] = [
  // 1. Lượng giác
  {
    id: 'lg-1',
    chapter: 'LuongGiac',
    chapterName: 'Hàm số & Phương trình Lượng giác',
    title: 'Hằng đẳng thức lượng giác cơ bản',
    latex: 'sin²α + cos²α = 1;  1 + tan²α = 1/cos²α (α ≠ π/2 + kπ);  tanα · cotα = 1',
    explanation: 'Nền tảng biến đổi mọi biểu thức lượng giác; luôn chú ý điều kiện xác định của hàm tan và cot.',
    memoryMnemonic: 'Thần chú: Sin bình cộng Cốt bình bằng Một, Tan nhân Cô-tan bằng Một.',
    casioTip: 'Dùng phím CALC: gán α = 1.25 rad để kiểm tra đẳng thức đúng/sai nhanh chóng.',
    difficulty: 'Cơ bản'
  },
  {
    id: 'lg-2',
    chapter: 'LuongGiac',
    chapterName: 'Hàm số & Phương trình Lượng giác',
    title: 'Công thức cộng lượng giác',
    latex: 'cos(a ± b) = cos a·cos b ∓ sin a·sin b;\nsin(a ± b) = sin a·cos b ± cos a·sin b',
    explanation: 'Cos thì cos cos sin sin (dấu đổi), Sin thì sin cos cos sin (dấu cùng).',
    memoryMnemonic: 'Khẩu quyết: "Cos thì cos cos sin sin, dấu trừ đổi cộng, dấu cộng đổi trừ. Sin thì sin cos cos sin, dấu cùng một lượt chẳng sai chút nào."',
    casioTip: 'Khi làm bài trắc nghiệm tính sin(a+b), hãy bấm Shift Solve hoặc gán giá trị góc cụ thể.',
    difficulty: 'Thông hiểu'
  },
  {
    id: 'lg-3',
    chapter: 'LuongGiac',
    chapterName: 'Hàm số & Phương trình Lượng giác',
    title: 'Công thức nhân đôi và hạ bậc',
    latex: 'sin 2a = 2 sin a·cos a;\ncos 2a = cos²a - sin²a = 2cos²a - 1 = 1 - 2sin²a;\ncos²a = (1 + cos 2a)/2;  sin²a = (1 - cos 2a)/2',
    explanation: 'Hạ bậc thì tăng cung (từ bậc 2 về bậc 1 thì góc nhân đôi); cos mang dấu +, sin mang dấu -.',
    memoryMnemonic: 'Thần chú hạ bậc: "Cos bình cộng, Sin bình trừ, chia đôi góc gấp hai."',
    casioTip: 'Phím Shift + Menux (Angle Unit) -> Chuyển máy tính về chế độ Radian (R) để tránh sai số chu kỳ.',
    difficulty: 'Thông hiểu'
  },
  {
    id: 'lg-4',
    chapter: 'LuongGiac',
    chapterName: 'Hàm số & Phương trình Lượng giác',
    title: 'Phương trình lượng giác cơ bản',
    latex: 'sin x = sin α ⇔ x = α + k2π hoặc x = π - α + k2π (k ∈ ℤ)\ncos x = cos α ⇔ x = ±α + k2π (k ∈ ℤ)\ntan x = tan α ⇔ x = α + kπ (k ∈ ℤ)',
    explanation: 'Sin bù, Cos đối, Phụ chéo, Khác pi tan cot. Chu kỳ của sin, cos là 2π; chu kỳ của tan, cot là π.',
    memoryMnemonic: '"Sin bù - Cos đối": Sin có 2 họ nghiệm bù nhau (α và π - α); Cos có 2 họ nghiệm đối nhau (±α).',
    casioTip: 'Dùng chức năng TABLE [Menu 8]: nhập f(x) = sin(x) - sin(α), Start: 0, End: 2π, Step: π/12 để đếm số nghiệm.',
    difficulty: 'Thông hiểu'
  },
  {
    id: 'lg-5',
    chapter: 'LuongGiac',
    chapterName: 'Hàm số & Phương trình Lượng giác',
    title: 'Phương trình bậc nhất đối với sin x và cos x',
    latex: 'a·sin x + b·cos x = c (Điều kiện có nghiệm: a² + b² ≥ c²)\nChia hai vế cho √(a² + b²) đưa về dạng sin(x + φ) = c / √(a² + b²)',
    explanation: 'Phương trình dạng tuyến tính a.sin + b.cos; chỉ có nghiệm khi độ dài véc-tơ (a,b) lớn hơn hoặc bằng |c|.',
    memoryMnemonic: 'Điều kiện cần và đủ: "Tổng bình phương hệ số trước sin và cos phải lớn hơn hoặc bằng bình phương vế phải."',
    casioTip: 'Chuyển tọa độ cực: bấm Pol(a, b) trên máy tính để tìm ngay r = √(a²+b²) và góc φ!',
    difficulty: 'Vận dụng'
  },

  // 2. Dãy số - Cấp số cộng - Cấp số nhân
  {
    id: 'ds-1',
    chapter: 'DaySo',
    chapterName: 'Dãy số, Cấp số cộng & Cấp số nhân',
    title: 'Số hạng tổng quát Cấp số cộng (CSC)',
    latex: 'u_n = u_1 + (n - 1)·d  (d là công sai)\nu_k = (u_{k-1} + u_{k+1}) / 2  (Tính chất số hạng trung gian)',
    explanation: 'Mỗi số hạng (từ số thứ hai) bằng số liền trước cộng một hằng số d. Mỗi số hạng là trung bình cộng của 2 số kề nó.',
    memoryMnemonic: '"Cộng đều": cứ bước tới 1 số là cộng thêm 1 lần công sai d.',
    casioTip: 'Sử dụng phím Ans: Nhập u1, ấn =. Sau đó ấn Ans + d, liên tục ấn = để duyệt qua dãy số.',
    difficulty: 'Cơ bản'
  },
  {
    id: 'ds-2',
    chapter: 'DaySo',
    chapterName: 'Dãy số, Cấp số cộng & Cấp số nhân',
    title: 'Tổng n số hạng đầu của Cấp số cộng',
    latex: 'S_n = n/2 · (u_1 + u_n) = n/2 · [2u_1 + (n - 1)·d]',
    explanation: 'Công thức Gauss: Lấy (Số đầu + Số cuối) nhân Số các số hạng rồi chia đôi.',
    memoryMnemonic: 'Quy tắc Gauss: "Đầu cộng đuôi, nhân số lượng, chia cho 2."',
    casioTip: 'Dùng phím tổng Sigma ∑ trên máy tính: Shift + phím tích phân, nhập công thức u_x từ x=1 đến n.',
    difficulty: 'Thông hiểu'
  },
  {
    id: 'ds-3',
    chapter: 'DaySo',
    chapterName: 'Dãy số, Cấp số cộng & Cấp số nhân',
    title: 'Số hạng tổng quát Cấp số nhân (CSN)',
    latex: 'u_n = u_1 · q^(n - 1)  (q là công bội)\n|u_k|² = u_{k-1} · u_{k+1}  (Tính chất số hạng trung gian)',
    explanation: 'Mỗi số hạng bằng số đứng trước nhân công bội q. Bình phương số ở giữa bằng tích hai số hai bên.',
    memoryMnemonic: '"Nhân lũy thừa": Số hạng thứ n bằng u1 nhân công bội q mũ (n-1).',
    casioTip: 'Tìm q khi biết u1 và un: q = (un / u1)^(1/(n-1)). Bấm máy tính 1 dòng duy nhất.',
    difficulty: 'Cơ bản'
  },
  {
    id: 'ds-4',
    chapter: 'DaySo',
    chapterName: 'Dãy số, Cấp số cộng & Cấp số nhân',
    title: 'Tổng n số hạng đầu & Tổng CSN lùi vô hạn',
    latex: 'S_n = u_1 · (1 - q^n) / (1 - q)  (với q ≠ 1)\nS = u_1 / (1 - q)  (Tổng CSN lùi vô hạn khi |q| < 1)',
    explanation: 'Tổng lùi vô hạn là ứng dụng trực tiếp khi tính chiều dài quãng đường nảy của bóng, phân số thập phân vô hạn tuần hoàn.',
    memoryMnemonic: '"Lùi vô hạn": Vì n tiến tới vô cùng nên q^n tiến về 0, biểu thức gọn thành u1 / (1 - q).',
    casioTip: 'Tính số thập phân vô hạn: bấm máy tính dạng 0.(3) bằng phím chu kỳ trên Casio 580/880 ra ngay 1/3.',
    difficulty: 'Vận dụng'
  },

  // 3. Giới hạn & Hàm liên tục
  {
    id: 'gh-1',
    chapter: 'GioiHan',
    chapterName: 'Giới hạn & Hàm liên tục',
    title: 'Quy tắc khử dạng vô định 0/0',
    latex: 'lim_{x→x₀} P(x)/Q(x)  (với P(x₀)=0, Q(x₀)=0)\nPhân tích: P(x)=(x-x₀)·P₁(x); Q(x)=(x-x₀)·Q₁(x) rồi triệt tiêu nhân tử chung (x-x₀)',
    explanation: 'Dùng lược đồ Horner hoặc hằng đẳng thức nhân lượng liên hợp khi có căn thức √(A) - √(B).',
    memoryMnemonic: 'Lượng liên hợp: a - b = (a² - b²) / (a + b); ∛a - ∛b = (a - b) / (∛a² + ∛ab + ∛b²).',
    casioTip: 'Bấm CALC với x = x₀ + 0.000001 (hoặc x₀ - 0.000001). Kết quả hiển thị chính là giới hạn xấp xỉ siêu chính xác!',
    difficulty: 'Thông hiểu'
  },
  {
    id: 'gh-2',
    chapter: 'GioiHan',
    chapterName: 'Giới hạn & Hàm liên tục',
    title: 'Giới hạn tại vô cực (Dạng ∞/∞ và ∞ - ∞)',
    latex: 'lim_{n→+∞} (a·n^k + ...)/(b·n^m + ...):\n- k < m → lim = 0\n- k = m → lim = a/b (tỉ số hai hệ số bậc cao nhất)\n- k > m → lim = ±∞',
    explanation: 'Chỉ cần quan sát bậc cao nhất của tử và mẫu. Khi gặp dạng ∞ - ∞ có căn thức bậc hai, bắt buộc nhân liên hợp.',
    memoryMnemonic: '"Bậc tử = Bậc mẫu: Lấy hệ số chia nhau; Tử bé hơn Mẫu: bằng Không; Tử lớn hơn Mẫu: Vô cùng."',
    casioTip: 'Khi n → +∞: Bấm CALC x = 10^7. Nếu kết quả ra dạng 0.6666667 -> 2/3. Nếu ra số mũ lớn 10^12 -> +∞.',
    difficulty: 'Cơ bản'
  },
  {
    id: 'gh-3',
    chapter: 'GioiHan',
    chapterName: 'Giới hạn & Hàm liên tục',
    title: 'Định nghĩa & Điều kiện hàm số liên tục',
    latex: 'f(x) liên tục tại x₀ ⇔ lim_{x→x₀} f(x) = f(x₀)\n⇔ lim_{x→x₀⁺} f(x) = lim_{x→x₀⁻} f(x) = f(x₀)',
    explanation: 'Đồ thị của hàm số liên tục trên một khoảng là một đường liền nét không bị đứt đoạn.',
    memoryMnemonic: '3 yếu tố: Có xác định f(x₀), có giới hạn tại x₀, và hai giá trị đó phải bằng nhau.',
    casioTip: 'Tìm tham số m để liên tục: bấm CALC giới hạn bên trái và bên phải với x₀ ± 10⁻⁶ rồi cho bằng giá trị f(x₀).',
    difficulty: 'Thông hiểu'
  },
  {
    id: 'gh-4',
    chapter: 'GioiHan',
    chapterName: 'Giới hạn & Hàm liên tục',
    title: 'Định lý giá trị trung gian (Sự tồn tại nghiệm)',
    latex: 'Nếu f(x) liên tục trên đoạn [a; b] và f(a)·f(b) < 0\n⇒ Luôn tồn tại ít nhất một số c ∈ (a; b) sao cho f(c) = 0 (PT f(x)=0 có nghiệm)',
    explanation: 'Cơ sở toán học để chứng minh phương trình bậc cao hoặc lượng giác luôn có nghiệm mà không cần giải cụ thể.',
    memoryMnemonic: '"Đổi dấu thì cắt trục hoành": Hàm liên tục đi từ âm sang dương bắt buộc phải cắt mốc 0.',
    casioTip: 'Dùng TABLE quét f(x) trên đoạn [a, b] xem có bước chuyển từ dấu dương sang âm hay không.',
    difficulty: 'Vận dụng'
  },

  // 4. Đạo hàm & Tiếp tuyến
  {
    id: 'dh-1',
    chapter: 'DaoHam',
    chapterName: 'Đạo hàm & Tiếp tuyến',
    title: 'Đạo hàm các hàm số cơ bản & hàm hợp',
    latex: '(x^n)\' = n·x^(n-1);  (u^n)\' = n·u^(n-1)·u\'\n(√x)\' = 1 / (2√x);  (√u)\' = u\' / (2√u)\n(1/x)\' = -1/x²;  (1/u)\' = -u\'/u²',
    explanation: 'Quy tắc dây chuyền của hàm hợp: đạo hàm theo u rồi nhân thêm đuôi u\'.',
    memoryMnemonic: '"Gặp hàm hợp nhớ nhân thêm u phẩy, bỏ quên u phẩy là mất điểm oan."',
    casioTip: 'Bấm phím d/dx (Shift + Tích phân), nhập biểu thức f(x) và x = x₀ để máy tính tính ngay đạo hàm tại điểm.',
    difficulty: 'Cơ bản'
  },
  {
    id: 'dh-2',
    chapter: 'DaoHam',
    chapterName: 'Đạo hàm & Tiếp tuyến',
    title: 'Phương trình tiếp tuyến của đồ thị hàm số',
    latex: 'y - y₀ = f\'(x₀) · (x - x₀)\n(với x₀ là hoành độ tiếp điểm, y₀ = f(x₀), k = f\'(x₀) là hệ số góc)',
    explanation: 'Hệ số góc của tiếp tuyến tại tiếp điểm M(x₀, y₀) chính là giá trị đạo hàm bậc nhất của hàm số tại x₀.',
    memoryMnemonic: '"y trừ y-không bằng đạo hàm nhân x trừ x-không". Tiếp tuyến song song thì hệ số góc k bằng nhau.',
    casioTip: 'Bấm Shift + d/dx tại x₀ để ra ngay hệ số góc k. Sau đó dùng biểu thức k*(x - x₀) + y₀.',
    difficulty: 'Thông hiểu'
  },

  // 5. Hình học không gian
  {
    id: 'hh-1',
    chapter: 'HinhKhongGian',
    chapterName: 'Hình học không gian',
    title: 'Đường thẳng vuông góc với Mặt phẳng (d ⊥ (α))',
    latex: 'd ⊥ a, d ⊥ b  (a, b ⊂ (α) và a cắt b tại O)  ⇒  d ⊥ (α)\nHệ quả: d ⊥ (α) ⇒ d vuông góc với mọi đường thẳng a nằm trong (α)',
    explanation: 'Chìa khóa vàng để dựng chân đường cao của hình chóp và hình lăng trụ.',
    memoryMnemonic: '"Muốn vuông góc với mặt phẳng, phải chứng minh vuông góc với hai đường cắt nhau trong mặt."',
    casioTip: 'Vẽ hình theo nguyên tắc chuẩn: Nét đứt (khuất), nét liền (thấy), mặt đáy vẽ nghiêng theo phép chiếu song song.',
    difficulty: 'Thông hiểu'
  },
  {
    id: 'hh-2',
    chapter: 'HinhKhongGian',
    chapterName: 'Hình học không gian',
    title: 'Định lý Ba đường vuông góc & Góc giữa đường thẳng và mặt phẳng',
    latex: 'Cho a ⊥ (P), d cắt (P) tại A, hình chiếu của d lên (P) là d\'.\nKhi đó: b ⊂ (P), b ⊥ d ⇔ b ⊥ d\'\nGóc giữa d và (P): φ = (d, d\') = ∠(d, d\') với 0° ≤ φ ≤ 90°',
    explanation: 'Xác định góc giữa đường thẳng và mặt phẳng bằng cách tìm: 1) Giao điểm A, 2) Hình chiếu đỉnh H lên mặt phẳng, 3) Góc chính là góc tại giao điểm: ∠(đường thẳng, hình chiếu).',
    memoryMnemonic: '3 bước tìm góc đường với mặt: "Tìm đỉnh - Tìm giao điểm - Tìm chân đường vuông góc". Góc nằm tại Giao điểm!',
    casioTip: 'Tính góc: sau khi tìm được tan φ = đối / kề, bấm Shift + tan rồi ấn nút độ ° \' " để đổi ra độ phút.',
    difficulty: 'Vận dụng'
  },

  // 6. Xác suất
  {
    id: 'xs-1',
    chapter: 'XacSuat',
    chapterName: 'Xác suất cổ điển & có điều kiện',
    title: 'Công thức xác suất cổ điển & Biến cố đối',
    latex: 'P(A) = n(A) / n(Ω)  (0 ≤ P(A) ≤ 1)\nP(Ā) = 1 - P(A)  (với Ā là biến cố đối của A)',
    explanation: 'n(A) là số phần tử thuận lợi cho biến cố A, n(Ω) là số phần tử của không gian mẫu.',
    memoryMnemonic: '"Ít nhất 1" thường dùng biến cố đối: P(Ít nhất 1) = 1 - P(Không có cái nào).',
    casioTip: 'Tổ hợp nCr (Shift ÷) và Chỉnh hợp nPr (Shift ×) là công cụ đắc lực giải xác suất trên máy tính.',
    difficulty: 'Cơ bản'
  },
  {
    id: 'xs-2',
    chapter: 'XacSuat',
    chapterName: 'Xác suất cổ điển & có điều kiện',
    title: 'Xác suất có điều kiện & Quy tắc nhân xác suất',
    latex: 'P(A|B) = P(A ∩ B) / P(B)  (với P(B) > 0)\nP(A ∩ B) = P(B) · P(A|B) = P(A) · P(B|A)\nNếu A và B độc lập: P(A ∩ B) = P(A) · P(B)',
    explanation: 'Nội dung cốt lõi của chương trình Toán 11 mới GDPT 2018: xác suất biến cố A xảy ra khi biết trước B đã xảy ra.',
    memoryMnemonic: 'Sơ đồ cây (Tree Diagram): mỗi nhánh có xác suất điều kiện, nhân theo nhánh, cộng các nhánh rẽ.',
    casioTip: 'Vẽ sơ đồ cây 2 tầng trước khi bấm máy, tránh nhầm lẫn giữa P(A ∩ B) và P(A|B).',
    difficulty: 'Vận dụng'
  }
];

export const MINDMAP_TREE: MindmapNode = {
  id: 'root',
  label: 'Toán 11 - GDPT 2018',
  description: 'Hệ thống hóa toàn bộ mạch kiến thức Đại số, Giải tích, Hình học & Thống kê Xác suất lớp 11',
  children: [
    {
      id: 'branch-luonggiac',
      label: '1. Hàm số & PT Lượng giác',
      description: 'Lượng giác thực chiến: biến đổi, chu kỳ, tập xác định và nghiệm phương trình',
      keyNotes: [
        'Công thức biến đổi tổng thành tích & tích thành tổng',
        'Chu kỳ: sin/cos là 2π, tan/cot là π',
        'Phương trình đẳng cấp bậc 2, quy về bậc 2 theo 1 hàm',
        'Ứng dụng hiện tượng tuần hoàn trong vật lý (sóng, dao động điều hòa)'
      ],
      formulas: [
        'sin(a±b) = sin a cos b ± cos a sin b',
        'cos(a±b) = cos a cos b ∓ sin a sin b',
        'a sin x + b cos x = c ⇔ a² + b² ≥ c²'
      ]
    },
    {
      id: 'branch-dayso',
      label: '2. Dãy số - Cấp số cộng - Cấp số nhân',
      description: 'Quy luật tăng trưởng tuyến tính và lũy thừa trong toán học & kinh tế',
      keyNotes: [
        'Dãy số tăng, giảm, bị chặn',
        'Cấp số cộng: u_n = u_1 + (n-1)d; S_n = n/2(u_1 + u_n)',
        'Cấp số nhân: u_n = u_1 · q^(n-1); S_n = u_1(1-q^n)/(1-q)',
        'Ứng dụng bài toán lãi kép, tăng trưởng dân số, phân rã phóng xạ'
      ],
      formulas: [
        'u_n = u_1 + (n-1)d',
        'u_n = u_1 · q^(n-1)',
        'S_vô hạn = u_1 / (1 - q) (|q| < 1)'
      ]
    },
    {
      id: 'branch-gioihan',
      label: '3. Giới hạn & Hàm số liên tục',
      description: 'Cửa ngõ bước vào Giải tích cao cấp và khảo sát chuyển động',
      keyNotes: [
        'Khử 4 dạng vô định kinh điển: 0/0, ∞/∞, ∞ - ∞, 0 · ∞',
        'Nhân lượng liên hợp bậc 2 và bậc 3',
        'Hàm số liên tục tại điểm và trên khoảng đoạn',
        'Định lý Cauchy về nghiệm: f(a)·f(b) < 0 ⇒ có nghiệm c ∈ (a;b)'
      ],
      formulas: [
        'lim (x^n - a^n)/(x - a) = n·a^(n-1)',
        'lim f(x) = f(x₀) (khi x → x₀)'
      ]
    },
    {
      id: 'branch-daoham',
      label: '4. Đạo hàm & Tiếp tuyến',
      description: 'Tốc độ biến thiên tức thời, ý nghĩa cơ học và hình học',
      keyNotes: [
        'Ý nghĩa vật lý: v(t) = s\'(t); a(t) = v\'(t) = s\'\'(t)',
        'Ý nghĩa hình học: Hệ số góc tiếp tuyến k = f\'(x₀)',
        'Đạo hàm hàm hợp: y\'_x = y\'_u · u\'_x',
        'Phương trình tiếp tuyến: y - y₀ = f\'(x₀)(x - x₀)'
      ],
      formulas: [
        '(u·v)\' = u\'v + uv\'',
        '(u/v)\' = (u\'v - uv\') / v²',
        'k = f\'(x₀)'
      ]
    },
    {
      id: 'branch-hinhkhonggian',
      label: '5. Hình học không gian',
      description: 'Quan hệ song song & Quan hệ vuông góc trong không gian 3 chiều',
      keyNotes: [
        'Cách chứng minh đường thẳng vuông góc mặt phẳng',
        'Hai mặt phẳng vuông góc (định lý góc phẳng nhị diện)',
        'Khoảng cách từ điểm đến mặt phẳng (phương pháp đổi đỉnh)',
        'Góc giữa đường thẳng và mặt phẳng, góc giữa hai mặt phẳng'
      ],
      formulas: [
        'd ⊥ a, d ⊥ b ⇒ d ⊥ (α)',
        'tan φ = (Độ dài đường cao) / (Độ dài hình chiếu)',
        'V_chóp = 1/3 S_đáy · h'
      ]
    },
    {
      id: 'branch-xacsuat',
      label: '6. Thống kê & Xác suất',
      description: 'Phân tích dữ liệu ghép nhóm và tính xác suất biến cố có điều kiện',
      keyNotes: [
        'Xác định không gian mẫu Ω và biến cố thuận lợi',
        'Xác suất có điều kiện P(A|B) = P(AB) / P(B)',
        'Công thức xác suất toàn phần & Công thức Bayes',
        'Sơ đồ hình cây (Tree diagram) trong giải toán thực tiễn'
      ],
      formulas: [
        'P(A ∪ B) = P(A) + P(B) - P(AB)',
        'P(A|B) = P(AB) / P(B)',
        'P(A) = 1 - P(Ā)'
      ]
    }
  ]
};
