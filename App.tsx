import React, { useState, useEffect } from 'react';
import { Topic, GeneratedContent } from './types';
import { CURRICULUM } from './constants';
import { getLessonContent } from './services/geminiService';
import Sidebar from './components/Sidebar';
import MarkdownViewer from './components/MarkdownViewer';
import ThemeToggle from './components/ThemeToggle';
import TutorChat from './components/TutorChat';
import { Menu, Book, ArrowRight, Sparkles, Loader2 } from 'lucide-react';

const App: React.FC = () => {
  const [currentTopic, setCurrentTopic] = useState<Topic | null>(null);
  const [content, setContent] = useState<GeneratedContent>({ markdown: '', loading: false });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Watch for theme changes to pass to MarkdownViewer for syntax highlighting
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    setIsDark(document.documentElement.classList.contains('dark')); // Initial check
    return () => observer.disconnect();
  }, []);

  // Initial content load
  useEffect(() => {
    if (!currentTopic) {
      // Load first topic by default if nothing selected
      handleTopicSelect(CURRICULUM[0].topics[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTopicSelect = async (topic: Topic) => {
    // Don't reload if selecting the same topic and it's already loaded
    if (currentTopic?.id === topic.id && !content.loading && content.markdown) return;

    setCurrentTopic(topic);
    setContent({ markdown: '', loading: true });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Fetch static content (almost instant now)
    const text = await getLessonContent(topic);
    setContent({ markdown: text, loading: false });
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      
      <Sidebar 
        currentTopicId={currentTopic?.id || null} 
        onSelectTopic={handleTopicSelect}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col h-full overflow-hidden relative w-full">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-10">
          <div className="flex items-center">
            <button 
              className="mr-4 md:hidden p-2 -ml-2 text-gray-600 dark:text-gray-300"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            {currentTopic && (
               <div className="flex flex-col">
                  <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Capítulo Atual</span>
                  <h1 className="text-sm md:text-lg font-semibold text-gray-800 dark:text-white truncate max-w-[200px] md:max-w-md">
                    {currentTopic.title}
                  </h1>
               </div>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              <Book size={14} className="mr-2" />
              <span>Baseado em: El Libro de Python</span>
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto scroll-smooth p-6 md:p-10 lg:px-16 w-full relative">
          <div className="max-w-4xl mx-auto pb-20">
            {content.loading ? (
              <div className="flex items-center justify-center h-[50vh]">
                 <div className="flex flex-col items-center space-y-4">
                    <Loader2 className="animate-spin text-primary-600 w-8 h-8" />
                    <span className="text-gray-500">Carregando material didático...</span>
                 </div>
              </div>
            ) : (
              <div className="animate-in fade-in duration-300 slide-in-from-bottom-2">
                 {/* Breadcrumbish decorative element */}
                 <div className="mb-8 flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm">
                    <span>Aula</span>
                    <ArrowRight size={14} className="mx-2" />
                    <span>{currentTopic?.title}</span>
                 </div>
                 
                 <MarkdownViewer content={content.markdown} isDark={isDark} />
              </div>
            )}
          </div>
        </main>

        {/* Tutor Chat Overlay */}
        {!content.loading && <TutorChat context={content.markdown} />}
      </div>
    </div>
  );
};

export default App;