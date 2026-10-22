import React, { useState, useEffect } from 'react';
import { NavTab } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { StudyTipsView } from './components/StudyTipsView';
import { NotebookView } from './components/NotebookView';
import { ResourcesView } from './components/ResourcesView';
import { PracticeView } from './components/PracticeView';
import { ProjectReportView } from './components/ProjectReportView';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');

  // Scroll to top whenever tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Top Bar Header */}
      <Header currentTab={currentTab} onSelectTab={setCurrentTab} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {currentTab === 'home' && <HomeView onNavigate={setCurrentTab} />}
        {currentTab === 'tips' && <StudyTipsView />}
        {currentTab === 'notebook' && <NotebookView />}
        {currentTab === 'resources' && <ResourcesView />}
        {currentTab === 'practice' && <PracticeView />}
        {currentTab === 'report' && <ProjectReportView />}
      </main>

      {/* Site Footer */}
      <Footer onSelectTab={setCurrentTab} />
    </div>
  );
}
