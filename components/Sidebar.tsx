import React, { useState, useEffect } from 'react';
import { CURRICULUM } from '../constants';
import { Topic } from '../types';
import { ChevronRight, ChevronDown, GraduationCap, Book } from 'lucide-react';

interface SidebarProps {
  currentTopicId: string | null;
  onSelectTopic: (topic: Topic) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentTopicId, onSelectTopic, isOpen, onClose }) => {
  const [expandedChapterId, setExpandedChapterId] = useState<string | null>(null);

  // Efeito para abrir automaticamente o módulo do tópico atual
  useEffect(() => {
    if (currentTopicId) {
      const activeChapter = CURRICULUM.find(chapter => 
        chapter.topics.some(topic => topic.id === currentTopicId)
      );
      if (activeChapter && activeChapter.id !== expandedChapterId) {
        setExpandedChapterId(activeChapter.id);
      }
    } else if (!expandedChapterId && CURRICULUM.length > 0) {
      // Abre o primeiro módulo por padrão se nenhum estiver selecionado
      setExpandedChapterId(CURRICULUM[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTopicId]);

  const toggleChapter = (chapterId: string) => {
    // Se clicar no que já está aberto, fecha. Se não, abre o novo e fecha os outros (comportamento de acordeão)
    setExpandedChapterId(prev => prev === chapterId ? null : chapterId);
  };
  
  const getIconColor = (diff: string) => {
    switch(diff) {
      case 'green': return 'text-green-600 dark:text-green-400';
      case 'orange': return 'text-orange-500 dark:text-orange-400';
      case 'red': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-500';
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden" 
          onClick={onClose}
        />
      )}

      <aside 
        className={`
          fixed top-0 left-0 z-30 h-full w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:relative md:block overflow-y-auto
        `}
      >
        <div className="p-6 sticky top-0 bg-white dark:bg-gray-900 z-10 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400">
            <GraduationCap size={28} />
            <span className="text-xl font-bold tracking-tight">PyMath</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Programação de Computadores para Matemáticos
          </p>
        </div>

        <nav className="p-4 pb-24 space-y-1">
          {CURRICULUM.map((chapter) => {
            const isExpanded = expandedChapterId === chapter.id;
            
            return (
              <div key={chapter.id} className="border-b border-gray-50 dark:border-gray-800 last:border-0">
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className={`
                    w-full flex items-center justify-between px-2 py-3 text-left transition-colors duration-200 focus:outline-none group
                    ${isExpanded ? 'bg-gray-50 dark:bg-gray-800/50 rounded-t-lg' : 'hover:bg-gray-50 dark:hover:bg-gray-800/30 rounded-lg'}
                  `}
                >
                  <span className={`
                    text-xs font-bold uppercase tracking-wider transition-colors
                    ${isExpanded 
                      ? 'text-primary-700 dark:text-primary-400' 
                      : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200'}
                  `}>
                    {chapter.title}
                  </span>
                  <div className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180 text-primary-500' : 'text-gray-400'}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                <div 
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <ul className="space-y-0.5 py-2 pl-1">
                    {chapter.topics.map((topic) => (
                      <li key={topic.id}>
                        <button
                          onClick={() => {
                            onSelectTopic(topic);
                            if (window.innerWidth < 768) onClose();
                          }}
                          className={`
                            w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group
                            ${currentTopicId === topic.id 
                              ? 'bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-200 font-semibold shadow-sm border-l-4 border-primary-500' 
                              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200 border-l-4 border-transparent'
                            }
                          `}
                        >
                          <div className="flex items-center overflow-hidden">
                            <Book 
                              size={16} 
                              className={`mr-3 flex-shrink-0 ${getIconColor(topic.difficulty)} transition-opacity ${currentTopicId === topic.id ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}`} 
                            />
                            <span className="truncate">{topic.title}</span>
                          </div>
                          {currentTopicId === topic.id && <ChevronRight size={14} className="flex-shrink-0 ml-2 text-primary-500" />}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;