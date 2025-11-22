import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check, Info, Terminal, Hash, List } from 'lucide-react';

interface MarkdownViewerProps {
  content: string;
  isDark: boolean;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ content, isDark }) => {
  
  const CopyButton = ({ code }: { code: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <button
        onClick={handleCopy}
        className="flex items-center space-x-1 px-2 py-1 rounded text-xs font-medium bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white transition-all"
        title="Copiar código"
      >
        {copied ? (
          <>
            <Check size={12} className="text-green-400" />
            <span>Copiado!</span>
          </>
        ) : (
          <>
            <Copy size={12} />
            <span>Copiar</span>
          </>
        )}
      </button>
    );
  };

  return (
    <div className="w-full max-w-none font-sans leading-relaxed">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // --- Títulos ---
          h1: ({ children, ...props }) => (
            <div className="mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
              <h1 className="text-3xl md:text-4xl font-extrabold text-primary-700 dark:text-primary-400 tracking-tight" {...props}>
                {children}
              </h1>
            </div>
          ),
          h2: ({ children, ...props }) => (
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mt-12 mb-6 flex items-center" {...props}>
              <span className="w-1.5 h-8 bg-primary-500 rounded-full mr-3 inline-block shadow-sm"></span>
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-300 mt-8 mb-4 flex items-center" {...props}>
              <Hash size={16} className="mr-2 opacity-50" />
              {children}
            </h3>
          ),
          
          // --- Texto e Parágrafos ---
          p: ({ children, ...props }) => (
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-8 mb-6" {...props}>
              {children}
            </p>
          ),
          strong: ({ children, ...props }) => (
            <strong className="font-bold text-gray-900 dark:text-white" {...props}>
              {children}
            </strong>
          ),

          // --- Listas ---
          ul: ({ children, ...props }) => (
            <ul className="space-y-3 mb-6 ml-4" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className="list-decimal space-y-3 mb-6 ml-6 text-gray-700 dark:text-gray-300 font-medium" {...props}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => (
            <li className="text-gray-700 dark:text-gray-300 pl-2 relative flex items-start" {...props}>
              <span className="mr-2 mt-1.5 min-w-[6px] h-[6px] rounded-full bg-primary-400 dark:bg-primary-500 shrink-0 block md:hidden"></span>
              <span className="block">{children}</span>
            </li>
          ),

          // --- Blockquote (Transformado em Caixas de Destaque/Recuadros) ---
          blockquote: ({ children, ...props }) => (
            <div className="my-8 rounded-xl overflow-hidden border-l-4 border-primary-500 shadow-sm bg-white dark:bg-gray-800/50">
              <div className="flex flex-col sm:flex-row">
                <div className="bg-primary-50 dark:bg-primary-900/20 p-4 flex items-center justify-center sm:w-16 border-r border-primary-100 dark:border-primary-800/50">
                   <Info className="text-primary-600 dark:text-primary-400 w-8 h-8" />
                </div>
                <div className="p-5 bg-primary-50/50 dark:bg-gray-800/30 w-full">
                  <div className="text-gray-800 dark:text-gray-200 italic text-lg font-medium">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          ),

          // --- Code Blocks ---
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '');
            const codeString = String(children).replace(/\n$/, '');

            return !inline && match ? (
              <div className="my-8 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md bg-[#ffffff] dark:bg-[#1e1e1e]">
                 {/* Header do Code Block */}
                 <div className="flex items-center justify-between px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-2">
                    <Terminal size={14} className="text-gray-500 dark:text-gray-400" />
                    <span className="text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider font-mono">
                      {match[1]}
                    </span>
                  </div>
                  <CopyButton code={codeString} />
                </div>
                
                {/* Conteúdo do Code Block */}
                <div className="relative">
                  <SyntaxHighlighter
                    {...props}
                    style={isDark ? vscDarkPlus : ghcolors}
                    language={match[1]}
                    PreTag="div"
                    customStyle={{
                      margin: 0,
                      padding: '1.5rem',
                      backgroundColor: 'transparent',
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace"
                    }}
                  >
                    {codeString}
                  </SyntaxHighlighter>
                </div>
              </div>
            ) : (
              <code 
                {...props} 
                className="bg-gray-100 dark:bg-gray-800 text-primary-700 dark:text-primary-300 px-1.5 py-0.5 rounded-md font-mono text-sm border border-gray-200 dark:border-gray-700 font-semibold"
              >
                {children}
              </code>
            );
          },

          // --- Tabelas ---
          table: ({ children, ...props }) => (
             <div className="overflow-x-auto my-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
               <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" {...props}>
                 {children}
               </table>
             </div>
          ),
          thead: ({ children, ...props }) => (
            <thead className="bg-gray-50 dark:bg-gray-800" {...props}>{children}</thead>
          ),
          th: ({ children, ...props }) => (
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider" {...props}>{children}</th>
          ),
          tbody: ({ children, ...props }) => (
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700" {...props}>{children}</tbody>
          ),
          tr: ({ children, ...props }) => (
             <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors" {...props}>{children}</tr>
          ),
          td: ({ children, ...props }) => (
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300" {...props}>{children}</td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;