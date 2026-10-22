export type NavTab = 'home' | 'tips' | 'notebook' | 'resources' | 'practice' | 'report';

export interface StudyMethod {
  id: string;
  title: string;
  subtitle: string;
  category: 'methodology' | 'calculator' | 'retention' | 'exam_skills';
  iconName: string;
  estimatedTime: string;
  summary: string;
  scienceBasis: string;
  steps: {
    number: number;
    title: string;
    description: string;
  }[];
  example: {
    problem: string;
    traditionalWay: string;
    improvedWay: string;
    resultAndInsight: string;
  };
  proTips: string[];
}

export interface FormulaItem {
  id: string;
  chapter: 'LuongGiac' | 'DaySo' | 'GioiHan' | 'DaoHam' | 'HinhKhongGian' | 'XacSuat';
  chapterName: string;
  title: string;
  latex: string;
  explanation: string;
  memoryMnemonic?: string;
  casioTip?: string;
  difficulty: 'Cơ bản' | 'Thông hiểu' | 'Vận dụng';
}

export interface MindmapNode {
  id: string;
  label: string;
  description: string;
  children?: MindmapNode[];
  formulas?: string[];
  keyNotes?: string[];
}

export interface LearningResource {
  id: string;
  title: string;
  type: 'video' | 'document' | 'tool' | 'website';
  category: string;
  provider: string;
  description: string;
  url: string;
  tags: string[];
  featured?: boolean;
}

export interface Question {
  id: number;
  chapter: string;
  questionText: string;
  type: 'single_choice' | 'true_false' | 'short_answer';
  options?: {
    key: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation: string;
  casioHack?: string;
  keyFormula: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  chapter: string;
  hint: string;
}

export interface TeamMember {
  name: string;
  role: string;
  class: string;
  studentId: string;
  contributions: string[];
  workloadPercentage: number;
}

export interface ProjectReport {
  projectName: string;
  subject: string;
  grade: string;
  school: string;
  instructor: string;
  designConcept: string;
  technologyStack: string[];
  teamMembers: TeamMember[];
  projectTimeline: {
    week: string;
    task: string;
    deliverables: string;
    status: 'Hoàn thành' | 'Đang thực hiện';
  }[];
  references: {
    name: string;
    author: string;
    type: string;
    year: string;
  }[];
}
