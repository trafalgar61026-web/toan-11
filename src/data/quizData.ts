import { Question, Flashcard } from '../types';

export const PRACTICE_QUESTIONS: Question[] = [
  {
    id: 1,
    chapter: 'Hàm số & PT Lượng giác',
    type: 'single_choice',
    questionText: 'Tập xác định của hàm số y = (1 - cos x) / sin x là:',
    options: [
      { key: 'A', text: 'D = ℝ \\ {kπ, k ∈ ℤ}' },
      { key: 'B', text: 'D = ℝ \\ {π/2 + kπ, k ∈ ℤ}' },
      { key: 'C', text: 'D = ℝ \\ {k2π, k ∈ ℤ}' },
      { key: 'D', text: 'D = ℝ' }
    ],
    correctAnswer: 'A',
    explanation: 'Hàm số xác định khi và chỉ khi mẫu số khác 0: sin x ≠ 0 ⇔ x ≠ kπ (với k ∈ ℤ). Do đó tập xác định D = ℝ \\ {kπ, k ∈ ℤ}.',
    casioHack: 'Bấm biểu thức (1 - cos x) / sin x vào máy tính, bấm CALC x = 0 (tương ứng k=0) -> máy báo Math ERROR, chứng tỏ x = 0 bị loại trừ.',
    keyFormula: 'sin x = 0 ⇔ x = kπ (k ∈ ℤ)'
  },
  {
    id: 2,
    chapter: 'Hàm số & PT Lượng giác',
    type: 'single_choice',
    questionText: 'Nghiệm của phương trình cos(x - π/3) = 1/2 là:',
    options: [
      { key: 'A', text: 'x = 2π/3 + k2π hoặc x = k2π (k ∈ ℤ)' },
      { key: 'B', text: 'x = π/3 + k2π hoặc x = -π/3 + k2π (k ∈ ℤ)' },
      { key: 'C', text: 'x = 2π/3 + kπ hoặc x = kπ (k ∈ ℤ)' },
      { key: 'D', text: 'x = π/6 + k2π hoặc x = 5π/6 + k2π (k ∈ ℤ)' }
    ],
    correctAnswer: 'A',
    explanation: 'Ta có cos(x - π/3) = 1/2 = cos(π/3).\nTheo công thức nghiệm cos u = cos v:\n[ Trường hợp 1: x - π/3 = π/3 + k2π ⇔ x = 2π/3 + k2π (k ∈ ℤ)\n[ Trường hợp 2: x - π/3 = -π/3 + k2π ⇔ x = k2π (k ∈ ℤ).',
    casioHack: 'Bấm Shift cos(1/2) = π/3. Sau đó thử nghiệm x = 0 (thuộc họ x = k2π): cos(0 - π/3) = cos(-π/3) = 1/2 (đúng!).',
    keyFormula: 'cos u = cos v ⇔ u = ±v + k2π (k ∈ ℤ)'
  },
  {
    id: 3,
    chapter: 'Dãy số & Cấp số cộng',
    type: 'single_choice',
    questionText: 'Cho cấp số cộng (u_n) có số hạng đầu u₁ = 3 và công sai d = 4. Tìm số hạng thứ 10 của cấp số cộng đó.',
    options: [
      { key: 'A', text: 'u₁₀ = 39' },
      { key: 'B', text: 'u₁₀ = 43' },
      { key: 'C', text: 'u₁₀ = 36' },
      { key: 'D', text: 'u₁₀ = 40' }
    ],
    correctAnswer: 'A',
    explanation: 'Áp dụng công thức số hạng tổng quát của cấp số cộng:\nu_n = u_1 + (n - 1)·d\nVới n = 10, u₁ = 3, d = 4:\nu₁₀ = 3 + (10 - 1)·4 = 3 + 9·4 = 3 + 36 = 39.',
    casioHack: 'Bấm 3 =, sau đó ấn Ans + 4 và nhấn phím = liên tiếp 9 lần sẽ thu được kết quả 39.',
    keyFormula: 'u_n = u_1 + (n - 1)·d'
  },
  {
    id: 4,
    chapter: 'Cấp số nhân',
    type: 'single_choice',
    questionText: 'Cho cấp số nhân (u_n) có u₁ = 2 và công bội q = -3. Tổng 5 số hạng đầu tiên S₅ bằng bao nhiêu?',
    options: [
      { key: 'A', text: 'S₅ = 122' },
      { key: 'B', text: 'S₅ = -122' },
      { key: 'C', text: 'S₅ = 242' },
      { key: 'D', text: 'S₅ = 121' }
    ],
    correctAnswer: 'A',
    explanation: 'Áp dụng công thức tổng n số hạng đầu của cấp số nhân:\nS_n = u_1 · (1 - q^n) / (1 - q)\nVới n = 5, u₁ = 2, q = -3:\nS₅ = 2 · [1 - (-3)⁵] / [1 - (-3)] = 2 · [1 - (-243)] / (1 + 3) = 2 · 244 / 4 = 488 / 4 = 122.',
    casioHack: 'Bấm biểu thức 2 * (1 - (-3)^5) / (1 - (-3)) trên máy tính ra thẳng 122 trong 3 giây.',
    keyFormula: 'S_n = u_1 · (1 - q^n) / (1 - q)'
  },
  {
    id: 5,
    chapter: 'Giới hạn & Hàm liên tục',
    type: 'single_choice',
    questionText: 'Tính giới hạn: lim_{x → 2} (x² - 5x + 6) / (x - 2)',
    options: [
      { key: 'A', text: '-1' },
      { key: 'B', text: '1' },
      { key: 'C', text: '0' },
      { key: 'D', text: '+∞' }
    ],
    correctAnswer: 'A',
    explanation: 'Dạng vô định 0/0 khi thay x = 2 vào tử và mẫu.\nPhân tích tử thức thành nhân tử:\nx² - 5x + 6 = (x - 2)(x - 3).\nKhi đó:\nlim_{x → 2} [(x - 2)(x - 3)] / (x - 2) = lim_{x → 2} (x - 3) = 2 - 3 = -1.',
    casioHack: 'Bấm (x² - 5x + 6) / (x - 2), bấm CALC x = 2.000001 -> màn hình trả về -0.999999 ≈ -1.',
    keyFormula: 'Khử nhân tử chung (x - x₀) trong dạng vô định 0/0'
  },
  {
    id: 6,
    chapter: 'Giới hạn tại vô cực',
    type: 'single_choice',
    questionText: 'Giới hạn lim_{n → +∞} (3n² - 2n + 1) / (n² + 4) bằng:',
    options: [
      { key: 'A', text: '3' },
      { key: 'B', text: '0' },
      { key: 'C', text: '+∞' },
      { key: 'D', text: '1/4' }
    ],
    correctAnswer: 'A',
    explanation: 'Bậc của tử thức bằng bậc của mẫu thức (đều là bậc 2).\nChia cả tử và mẫu cho n²:\nlim (3 - 2/n + 1/n²) / (1 + 4/n²) = (3 - 0 + 0) / (1 + 0) = 3.',
    casioHack: 'Bậc tử = Bậc mẫu, kết quả bằng tỉ số hệ số bậc cao nhất: 3 / 1 = 3.',
    keyFormula: 'lim_{n→+∞} (a_k n^k + ...) / (b_k n^k + ...) = a_k / b_k'
  },
  {
    id: 7,
    chapter: 'Đạo hàm & Tiếp tuyến',
    type: 'single_choice',
    questionText: 'Cho hàm số y = f(x) = x³ - 3x + 2. Hệ số góc k của tiếp tuyến của đồ thị hàm số tại điểm có hoành độ x₀ = 2 là:',
    options: [
      { key: 'A', text: 'k = 9' },
      { key: 'B', text: 'k = 6' },
      { key: 'C', text: 'k = 12' },
      { key: 'D', text: 'k = 3' }
    ],
    correctAnswer: 'A',
    explanation: 'Ta có f\'(x) = (x³ - 3x + 2)\' = 3x² - 3.\nHệ số góc k của tiếp tuyến tại điểm có hoành độ x₀ = 2 là:\nk = f\'(2) = 3·(2)² - 3 = 3·4 - 3 = 12 - 3 = 9.',
    casioHack: 'Bấm Shift + Tích phân để gọi lệnh d/dx. Nhập x³ - 3x + 2 và x = 2 -> Bấm = ra ngay 9.',
    keyFormula: 'k = f\'(x₀)'
  },
  {
    id: 8,
    chapter: 'Hình học không gian',
    type: 'single_choice',
    questionText: 'Cho hình chóp S.ABCD có đáy ABCD là hình vuông tâm O, cạnh a. Biết SA ⊥ (ABCD) và SA = a√3. Khẳng định nào sau đây là ĐÚNG?',
    options: [
      { key: 'A', text: 'BC ⊥ (SAB)' },
      { key: 'B', text: 'BD ⊥ (SAD)' },
      { key: 'C', text: 'SC ⊥ (ABCD)' },
      { key: 'D', text: 'CD ⊥ (SBC)' }
    ],
    correctAnswer: 'A',
    explanation: 'Chứng minh BC ⊥ (SAB):\n1. Vì ABCD là hình vuông nên BC ⊥ AB.\n2. Vì SA ⊥ (ABCD) và BC ⊂ (ABCD) nên SA ⊥ BC hay BC ⊥ SA.\n3. Trong mặt phẳng (SAB), hai đường thẳng AB và SA cắt nhau tại A.\n⇒ BC vuông góc với hai đường thẳng cắt nhau nằm trong mặt phẳng (SAB).\n⇒ Kết luận: BC ⊥ (SAB).',
    casioHack: 'Hình chóp có SA ⊥ đáy vuông là dạng bài kinh điển nhất; luôn nhớ: BC ⊥ (SAB) và CD ⊥ (SAD).',
    keyFormula: 'd ⊥ a, d ⊥ b (a cắt b trong mặt phẳng (P)) ⇒ d ⊥ (P)'
  },
  {
    id: 9,
    chapter: 'Xác suất',
    type: 'single_choice',
    questionText: 'Gieo ngẫu nhiên một con xúc xắc cân đối và đồng chất 2 lần liên tiếp. Xác suất để tổng số chấm xuất hiện trong hai lần gieo bằng 7 là:',
    options: [
      { key: 'A', text: '1/6' },
      { key: 'B', text: '7/36' },
      { key: 'C', text: '5/36' },
      { key: 'D', text: '1/12' }
    ],
    correctAnswer: 'A',
    explanation: 'Không gian mẫu n(Ω) = 6 · 6 = 36 phần tử.\nGọi A là biến cố "Tổng số chấm xuất hiện bằng 7".\nCác cặp kết quả thuận lợi cho A là: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) ⇒ n(A) = 6 phần tử.\nXác suất P(A) = n(A) / n(Ω) = 6 / 36 = 1/6.',
    casioHack: 'Tổng bằng 7 có số cách xuất hiện nhiều nhất trong 2 xúc xắc (đỉnh của tam giác xác suất): 6 / 36 = 1/6.',
    keyFormula: 'P(A) = n(A) / n(Ω)'
  },
  {
    id: 10,
    chapter: 'Xác suất có điều kiện',
    type: 'single_choice',
    questionText: 'Một lớp có 40 học sinh, trong đó có 24 học sinh thích môn Toán và 16 học sinh thích cả Toán và Tin học. Chọn ngẫu nhiên một học sinh thích môn Toán, xác suất để học sinh đó cũng thích môn Tin học là:',
    options: [
      { key: 'A', text: '2/3' },
      { key: 'B', text: '2/5' },
      { key: 'C', text: '3/5' },
      { key: 'D', text: '1/2' }
    ],
    correctAnswer: 'A',
    explanation: 'Gọi A là biến cố "Học sinh thích môn Tin", B là biến cố "Học sinh thích môn Toán".\nBài toán yêu cầu tính xác suất có điều kiện P(A|B) (biết rằng học sinh đó thích Toán).\nTheo công thức xác suất có điều kiện:\nP(A|B) = n(A ∩ B) / n(B) = 16 / 24 = 2/3.',
    casioHack: 'Không gian mẫu đã bị thu hẹp về tập hợp 24 học sinh thích Toán: lấy 16 / 24 rút gọn thành 2/3.',
    keyFormula: 'P(A|B) = n(A ∩ B) / n(B)'
  }
];

export const FLASHCARDS_DATA: Flashcard[] = [
  {
    id: 'fc-1',
    chapter: 'Lượng giác',
    front: 'Công thức hạ bậc của cos²a và sin²a là gì?',
    back: 'cos²a = (1 + cos 2a) / 2\nsin²a = (1 - cos 2a) / 2\n(Cos bình mang dấu +, Sin bình mang dấu -)',
    hint: 'Nhớ câu: Cos bình cộng, sin bình trừ, chia đôi góc gấp hai.'
  },
  {
    id: 'fc-2',
    chapter: 'Lượng giác',
    front: 'Phương trình a·sin x + b·cos x = c có nghiệm khi nào?',
    back: 'Điều kiện cần và đủ để phương trình có nghiệm là:\na² + b² ≥ c²',
    hint: 'Tổng bình phương hai hệ số trước sin và cos không bé hơn vế phải.'
  },
  {
    id: 'fc-3',
    chapter: 'Cấp số cộng',
    front: 'Công thức tổng n số hạng đầu của cấp số cộng (S_n)?',
    back: 'S_n = (n / 2) · (u₁ + u_n) = (n / 2) · [2u₁ + (n - 1)·d]',
    hint: 'Đầu cộng đuôi, nhân số lượng, chia cho 2 (Quy tắc Gauss).'
  },
  {
    id: 'fc-4',
    chapter: 'Cấp số nhân',
    front: 'Tổng của cấp số nhân lùi vô hạn với |q| < 1 là gì?',
    back: 'S = u₁ / (1 - q)',
    hint: 'Vì n tiến tới vô cùng thì q^n tiến về 0.'
  },
  {
    id: 'fc-5',
    chapter: 'Đạo hàm',
    front: 'Hệ số góc k của tiếp tuyến đồ thị y = f(x) tại điểm x₀ được tính thế nào?',
    back: 'k = f\'(x₀)\nPhương trình tiếp tuyến: y - y₀ = f\'(x₀)·(x - x₀)',
    hint: 'Hệ số góc tiếp tuyến chính là giá trị đạo hàm cấp một tại tiếp điểm.'
  },
  {
    id: 'fc-6',
    chapter: 'Hình học',
    front: 'Điều kiện để đường thẳng d vuông góc với mặt phẳng (P)?',
    back: 'd vuông góc với HAI đường thẳng CẮT NHAU cùng nằm trong mặt phẳng (P).',
    hint: 'Nếu chỉ vuông góc với 2 đường song song thì chưa đủ!'
  },
  {
    id: 'fc-7',
    chapter: 'Xác suất',
    front: 'Công thức xác suất có điều kiện P(A|B) khi P(B) > 0?',
    back: 'P(A|B) = P(A ∩ B) / P(B)',
    hint: 'Xác suất A xảy ra khi biết B đã xảy ra bằng phần giao chia cho B.'
  }
];
