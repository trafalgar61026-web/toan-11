import React, { useState, useEffect } from 'react';
import { PRACTICE_QUESTIONS, FLASHCARDS_DATA } from '../data/quizData';
import { Target, Clock, CheckCircle2, XCircle, RotateCcw, Lightbulb, Cpu, ChevronLeft, ChevronRight, Award, Layers } from 'lucide-react';

export const PracticeView: React.FC = () => {
  const [subTab, setSubTab] = useState<'quiz' | 'flashcards'>('quiz');

  // Quiz States
  const [examMode, setExamMode] = useState<'instant' | 'timed'>('instant');
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  // Timer states (15 minutes for 10 questions)
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Flashcards States
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [masteredCards, setMasteredCards] = useState<Record<string, boolean>>({});

  // Countdown timer effect
  useEffect(() => {
    let interval: any = null;
    if (examMode === 'timed' && isTimerRunning && timeLeft > 0 && !submitted) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !submitted) {
      handleSubmitQuiz();
    }
    return () => clearInterval(interval);
  }, [examMode, isTimerRunning, timeLeft, submitted]);

  const currentQ = PRACTICE_QUESTIONS[currentQIndex];

  const handleSelectOption = (qId: number, optionKey: string) => {
    if (submitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [qId]: optionKey
    }));
    if (examMode === 'instant') {
      setShowExplanation(true);
    }
  };

  const handleSubmitQuiz = () => {
    setSubmitted(true);
    setIsTimerRunning(false);
    setShowExplanation(true);
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setSubmitted(false);
    setShowExplanation(false);
    setCurrentQIndex(0);
    setTimeLeft(15 * 60);
    setIsTimerRunning(examMode === 'timed');
  };

  // Calculate score
  const score = Object.entries(userAnswers).reduce((acc, [qId, ans]) => {
    const q = PRACTICE_QUESTIONS.find((item) => item.id === parseInt(qId));
    return q && q.correctAnswer === ans ? acc + 1 : acc;
  }, 0);

  const percentage = Math.round((score / PRACTICE_QUESTIONS.length) * 100);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentCard = FLASHCARDS_DATA[cardIndex];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-600 mb-2">
            <Target className="w-4 h-4" />
            <span>NGÂN HÀNG BÀI TẬP VÀ ĐÁNH GIÁ NĂNG LỰC</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Góc Luyện Tập & Trắc Nghiệm Thông Minh
          </h1>
          <p className="text-slate-600 text-sm mt-1 max-w-2xl leading-relaxed">
            Hệ thống 10 bài tập trắc nghiệm chọn lọc chuẩn cấu trúc GDPT 2018 có bấm giờ, chấm điểm tự động và lời giải chi tiết kèm mẹo Casio.
          </p>
        </div>

        {/* Sub-tab switcher */}
        <div className="flex items-center p-1 bg-slate-100 rounded-xl text-xs font-medium shrink-0">
          <button
            onClick={() => setSubTab('quiz')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all ${
              subTab === 'quiz'
                ? 'bg-white text-rose-700 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Target className="w-4 h-4" />
            <span>Luyện Trắc Nghiệm (10 Câu)</span>
          </button>
          <button
            onClick={() => setSubTab('flashcards')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all ${
              subTab === 'flashcards'
                ? 'bg-white text-rose-700 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Flashcards Lật Thẻ</span>
          </button>
        </div>
      </div>

      {subTab === 'quiz' ? (
        <div className="space-y-6">
          {/* Mode Switcher & Timer Strip */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">Chế độ làm bài:</span>
              <div className="flex items-center p-0.5 bg-slate-100 rounded-lg text-xs">
                <button
                  onClick={() => {
                    setExamMode('instant');
                    setIsTimerRunning(false);
                  }}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                    examMode === 'instant'
                      ? 'bg-white text-slate-900 shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Luyện tập tức thì (Xem giải ngay)
                </button>
                <button
                  onClick={() => {
                    setExamMode('timed');
                    setIsTimerRunning(true);
                  }}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                    examMode === 'timed'
                      ? 'bg-white text-rose-700 shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Kiểm tra 15 phút (Tính điểm)
                </button>
              </div>
            </div>

            {/* Timer readout if timed */}
            {examMode === 'timed' && (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 text-rose-700 rounded-lg border border-rose-200 font-mono font-bold text-sm">
                  <Clock className="w-4 h-4 animate-pulse" />
                  <span>{formatTime(timeLeft)}</span>
                </div>
                {!submitted ? (
                  <button
                    onClick={handleSubmitQuiz}
                    className="px-4 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    Nộp bài
                  </button>
                ) : (
                  <button
                    onClick={handleResetQuiz}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Làm lại</span>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Score banner if submitted */}
          {submitted && (
            <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 rounded-2xl border border-indigo-900 shadow-md space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-400 flex items-center justify-center text-amber-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-indigo-300 font-semibold block">KẾT QUẢ BÀI KIỂM TRA</span>
                    <h3 className="text-xl font-extrabold text-white">
                      Điểm số: <span className="text-amber-400 font-mono">{score} / {PRACTICE_QUESTIONS.length}</span> ({percentage}%)
                    </h3>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-300 block">Đánh giá học lực:</span>
                  <span className="text-sm font-bold text-emerald-400">
                    {score >= 9 ? 'Xuất sắc (9+ Đột phá)' : score >= 7 ? 'Khá giỏi (Nắm vững)' : 'Cần ôn lại lý thuyết'}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-300 pt-1">
                Xem lại từng câu bên dưới để đọc kỹ phần <strong>Hướng dẫn giải chi tiết</strong> và <strong>Mẹo Casio siêu tốc</strong> được cung cấp riêng cho mỗi bài toán.
              </p>
            </div>
          )}

          {/* Question Grid Navigator Strip */}
          <div className="bg-white rounded-xl border border-slate-200 p-3 sm:p-4 shadow-xs">
            <span className="text-xs font-medium text-slate-500 block mb-2">
              Danh sách 10 câu hỏi (Nhấp vào số câu để chuyển nhanh):
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {PRACTICE_QUESTIONS.map((q, idx) => {
                const isCurrent = idx === currentQIndex;
                const answered = userAnswers[q.id];
                const isCorrect = answered === q.correctAnswer;

                let btnStyle = 'bg-slate-100 text-slate-700 border-slate-200';
                if (submitted) {
                  btnStyle = isCorrect ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-rose-600 text-white border-rose-600';
                } else if (answered) {
                  btnStyle = 'bg-indigo-600 text-white border-indigo-600';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentQIndex(idx);
                      if (examMode === 'instant' && userAnswers[q.id]) {
                        setShowExplanation(true);
                      }
                    }}
                    className={`w-9 h-9 rounded-lg font-mono font-bold text-xs border transition-all ${btnStyle} ${
                      isCurrent ? 'ring-2 ring-indigo-500 ring-offset-2' : ''
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Question Box */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            {/* Question Top Info (Zero-pill format) */}
            <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 font-medium">
                <span className="text-indigo-600 font-bold">Câu {currentQIndex + 1}</span>
                <span aria-hidden="true">·</span>
                <span>{currentQ.chapter}</span>
              </div>
              <span className="text-slate-400 font-mono">1.0 điểm</span>
            </div>

            {/* Question Text */}
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
              {currentQ.questionText}
            </h3>

            {/* Options List */}
            <div className="space-y-3">
              {currentQ.options?.map((opt) => {
                const isSelected = userAnswers[currentQ.id] === opt.key;
                const isCorrect = currentQ.correctAnswer === opt.key;

                let optStyle = 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800';
                if (submitted || (examMode === 'instant' && isSelected)) {
                  if (isCorrect) {
                    optStyle = 'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-semibold';
                  } else if (isSelected && !isCorrect) {
                    optStyle = 'border-rose-400 bg-rose-50/70 text-rose-950';
                  }
                } else if (isSelected) {
                  optStyle = 'border-indigo-600 bg-indigo-50 text-indigo-950 font-semibold';
                }

                return (
                  <button
                    key={opt.key}
                    onClick={() => handleSelectOption(currentQ.id, opt.key)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-center justify-between text-xs sm:text-sm ${optStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-md bg-slate-200/80 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0">
                        {opt.key}
                      </span>
                      <span>{opt.text}</span>
                    </div>

                    {(submitted || (examMode === 'instant' && isSelected)) && (
                      <div>
                        {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                        {isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-600 shrink-0" />}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Stepwise Explanation Box (Requirement: Mỗi câu hỏi cần có đáp án hoặc hướng dẫn giải) */}
            {(showExplanation || submitted) && (
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Hướng Dẫn Giải Chi Tiết</span>
                  </div>
                  <span className="font-semibold text-emerald-700">
                    Đáp án đúng: <strong>{currentQ.correctAnswer}</strong>
                  </span>
                </div>

                <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                  {currentQ.explanation}
                </p>

                {currentQ.casioHack && (
                  <div className="p-3 bg-sky-50 rounded-lg border border-sky-100 text-sky-900 space-y-1">
                    <div className="flex items-center gap-1 font-bold">
                      <Cpu className="w-3.5 h-3.5 text-sky-600" />
                      <span>Mẹo giải nhanh bằng Casio 580/880:</span>
                    </div>
                    <p className="leading-relaxed pl-4">{currentQ.casioHack}</p>
                  </div>
                )}

                <div className="text-[11px] text-slate-500 pt-1">
                  <strong>Công thức then chốt:</strong> <code className="font-mono text-indigo-700 bg-white px-1.5 py-0.5 rounded-sm border border-slate-200">{currentQ.keyFormula}</code>
                </div>
              </div>
            )}

            {/* Prev / Next Pagination Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  if (currentQIndex > 0) {
                    setCurrentQIndex(currentQIndex - 1);
                    if (examMode === 'instant' && userAnswers[PRACTICE_QUESTIONS[currentQIndex - 1].id]) {
                      setShowExplanation(true);
                    } else if (examMode === 'instant') {
                      setShowExplanation(false);
                    }
                  }
                }}
                disabled={currentQIndex === 0}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Câu trước</span>
              </button>

              <button
                onClick={() => {
                  if (currentQIndex < PRACTICE_QUESTIONS.length - 1) {
                    setCurrentQIndex(currentQIndex + 1);
                    if (examMode === 'instant' && userAnswers[PRACTICE_QUESTIONS[currentQIndex + 1].id]) {
                      setShowExplanation(true);
                    } else if (examMode === 'instant') {
                      setShowExplanation(false);
                    }
                  }
                }}
                disabled={currentQIndex === PRACTICE_QUESTIONS.length - 1}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <span>Câu kế tiếp</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* SUB-TAB 2: FLASHCARDS (Active Recall) */
        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="text-center space-y-1">
            <span className="text-xs text-rose-600 font-semibold uppercase tracking-wider">
              PHƯƠNG PHÁP ACTIVE RECALL
            </span>
            <h2 className="text-xl font-bold text-slate-900">
              Lật Thẻ Ôn Nhanh Công Thức Cốt Lõi
            </h2>
            <p className="text-xs text-slate-500">
              Nhấp chuột trực tiếp vào thẻ để lật xem đáp án và mẹo nhớ
            </p>
          </div>

          {/* Flashcard Component */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer min-h-[260px] bg-white rounded-2xl border-2 border-indigo-200 hover:border-indigo-400 p-8 shadow-md flex flex-col justify-between transition-all transform hover:-translate-y-0.5 select-none text-center"
          >
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold text-indigo-600">{currentCard.chapter}</span>
              <span>Thẻ {cardIndex + 1} / {FLASHCARDS_DATA.length}</span>
            </div>

            <div className="py-6 space-y-3">
              {!isFlipped ? (
                <>
                  <span className="text-xs text-slate-400 uppercase tracking-widest block">CÂU HỎI NHẬN BIẾT</span>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {currentCard.front}
                  </h3>
                  <span className="text-xs text-indigo-500 italic block mt-4">
                    (Nhấp để xem công thức)
                  </span>
                </>
              ) : (
                <>
                  <span className="text-xs text-emerald-600 font-bold uppercase tracking-widest block">ĐÁP ÁN CHUẨN</span>
                  <div className="p-4 bg-slate-900 text-emerald-300 rounded-xl font-mono text-sm whitespace-pre-line font-bold">
                    {currentCard.back}
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg text-amber-900 text-xs text-left flex items-start gap-1.5 mt-2">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Gợi ý:</strong> {currentCard.hint}</span>
                  </div>
                </>
              )}
            </div>

            <div className="text-[11px] text-slate-400">
              {masteredCards[currentCard.id] ? (
                <span className="text-emerald-600 font-semibold">✓ Đã đánh dấu thuộc</span>
              ) : (
                <span>Chưa đánh dấu thuộc</span>
              )}
            </div>
          </div>

          {/* Flashcard Action Buttons */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                if (cardIndex > 0) {
                  setCardIndex(cardIndex - 1);
                  setIsFlipped(false);
                }
              }}
              disabled={cardIndex === 0}
              className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 disabled:opacity-40"
            >
              ← Thẻ trước
            </button>

            <button
              onClick={() => {
                setMasteredCards((prev) => ({
                  ...prev,
                  [currentCard.id]: !prev[currentCard.id]
                }));
              }}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                masteredCards[currentCard.id]
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {masteredCards[currentCard.id] ? 'Đã nắm vững ✓' : 'Đánh dấu đã thuộc'}
            </button>

            <button
              onClick={() => {
                if (cardIndex < FLASHCARDS_DATA.length - 1) {
                  setCardIndex(cardIndex + 1);
                  setIsFlipped(false);
                }
              }}
              disabled={cardIndex === FLASHCARDS_DATA.length - 1}
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold disabled:opacity-40"
            >
              Thẻ kế tiếp →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
