import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
	vscDarkPlus,
	ghcolors,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check, Info, Terminal, Sparkles, Quote, MoveRight } from "lucide-react";

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
				className='flex items-center space-x-1 px-3 py-1.5 font-bold uppercase tracking-widest text-xs bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all active:shadow-none active:translate-x-1 active:translate-y-1'
				title='Copiar código'
			>
				{copied ? (
					<>
						<Check size={14} className='text-emerald-500' />
						<span className='text-emerald-500'>Copiado</span>
					</>
				) : (
					<>
						<Copy size={14} />
						<span>Copiar</span>
					</>
				)}
			</button>
		);
	};

	return (
		<div className='w-full max-w-5xl mx-auto font-sans text-gray-900 dark:text-gray-100 selection:bg-yellow-300 selection:text-black dark:selection:bg-orange-500 dark:selection:text-white pb-20'>
			<style>{`
				/* Estilos Brutalistas y Quirky inyectados para este componente */
				.brutal-shadow {
					box-shadow: 6px 6px 0px 0px rgba(0,0,0,1);
				}
				.dark .brutal-shadow {
					box-shadow: 6px 6px 0px 0px rgba(255,255,255,1);
				}
				.brutal-shadow-sm {
					box-shadow: 3px 3px 0px 0px rgba(0,0,0,1);
				}
				.dark .brutal-shadow-sm {
					box-shadow: 3px 3px 0px 0px rgba(255,255,255,1);
				}
				.brutal-border {
					border: 3px solid #000;
				}
				.dark .brutal-border {
					border: 3px solid #fff;
				}
				/* Patrón de puntos brutalista */
				.polka-bg {
					background-image: radial-gradient(#000 1px, transparent 1px);
					background-size: 16px 16px;
				}
				.dark .polka-bg {
					background-image: radial-gradient(#fff 1px, transparent 1px);
				}
			`}</style>
			
			<div className='relative'>
				{/* Elemento Decorativo Flotante */}
				<div className='absolute -top-10 -right-4 md:-right-12 hidden lg:flex items-center justify-center w-24 h-24 bg-orange-400 brutal-border brutal-shadow rounded-full animate-[spin_10s_linear_infinite] z-0'>
					<Sparkles size={40} className='text-black' />
				</div>

				<ReactMarkdown
					remarkPlugins={[remarkGfm, remarkMath]}
					rehypePlugins={[rehypeKatex]}
					components={{
						// --- Títulos ---
						h1: ({ children, ...props }) => (
							<div className='mb-16 mt-8 relative z-10 flex'>
								<h1
									className='text-5xl md:text-7xl font-black uppercase tracking-tighter brutal-border bg-yellow-300 dark:bg-yellow-400 text-black brutal-shadow px-6 py-4 transform -rotate-1 hover:rotate-0 transition-transform duration-300 max-w-full break-words'
									{...props}
								>
									{children}
								</h1>
							</div>
						),
						h2: ({ children, ...props }) => (
							<h2
								className='text-3xl md:text-4xl font-extrabold text-black brutal-border bg-cyan-300 dark:bg-cyan-400 brutal-shadow-sm mt-20 mb-10 w-fit px-5 py-2 transform hover:translate-x-2 transition-transform duration-300 flex items-center'
								{...props}
							>
								<div className='w-4 h-4 bg-black mr-4 rotate-45'></div>
								{children}
							</h2>
						),
						h3: ({ children, ...props }) => (
							<h3
								className='text-2xl md:text-3xl font-bold text-black brutal-border bg-orange-400 dark:bg-orange-500 brutal-shadow-sm mt-12 mb-6 w-fit px-4 py-1 flex items-center'
								{...props}
							>
								<MoveRight size={24} className='mr-3 text-black stroke-[3px]' />
								{children}
							</h3>
						),
						h4: ({ children, ...props }) => (
							<h4
								className='text-xl md:text-2xl font-bold uppercase tracking-widest border-b-4 border-black dark:border-white inline-block mt-8 mb-5 pb-1'
								{...props}
							>
								{children}
							</h4>
						),

						// --- Texto e Parágrafos ---
						p: ({ children, ...props }) => (
							<p
								className='text-xl md:text-[1.35rem] leading-[1.8] mb-8 font-semibold text-gray-800 dark:text-gray-200 border-l-4 md:border-l-8 border-black dark:border-white pl-4 md:pl-6 py-1 tracking-tight max-w-[70ch]'
								{...props}
							>
								{children}
							</p>
						),
						strong: ({ children, ...props }) => (
							<strong
								className='font-black bg-yellow-300 dark:bg-yellow-400 text-black px-2 py-0.5 brutal-border shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] inline-block mx-1 -rotate-1 align-middle'
								{...props}
							>
								{children}
							</strong>
						),
						a: ({ children, ...props }) => (
							<a
								className='font-black text-blue-700 dark:text-blue-400 underline decoration-4 underline-offset-4 decoration-orange-500 hover:bg-orange-500 hover:text-white dark:hover:text-black hover:decoration-black transition-all px-1 inline-block'
								target='_blank'
								rel='noopener noreferrer'
								{...props}
							>
								{children}
							</a>
						),

						// --- Listas ---
						ul: ({ children, ...props }) => (
							<ul className='space-y-4 mb-10 ml-2' {...props}>
								{children}
							</ul>
						),
						ol: ({ children, ...props }) => (
							<ol
								className='list-decimal list-inside font-bold space-y-4 mb-10 text-lg md:text-xl'
								{...props}
							>
								{children}
							</ol>
						),
						li: ({ children, ...props }) => (
							<li
								className='relative flex items-start text-lg md:text-xl font-medium'
								{...props}
							>
								{/* Custom Square Bullet for UL */}
								{!props.node?.tagName?.includes("ol") && (
									<div className='mt-2 mr-4 w-3 h-3 bg-black dark:bg-white brutal-border shrink-0 transform group-hover:rotate-45 transition-transform'></div>
								)}
								<span className='block'>{children}</span>
							</li>
						),

						// --- Blockquote ---
						blockquote: ({ children, ...props }) => (
							<div className='my-14 relative group'>
								{/* Fondo con patrón z-0 */}
								<div className='absolute inset-0 bg-emerald-200 dark:bg-emerald-900 polka-bg brutal-border brutal-shadow translate-x-3 translate-y-3 -z-10 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-300'></div>
								<div className='relative z-10 p-6 md:p-8 bg-white dark:bg-black brutal-border min-h-[120px] flex items-stretch'>
									<div className='mr-6 font-black text-6xl text-emerald-400 dark:text-emerald-500 select-none'>
										<Quote size={48} className='fill-current' />
									</div>
									<div className='text-xl md:text-2xl font-bold italic [&>p]:mb-0 leading-snug'>
										{children}
									</div>
								</div>
							</div>
						),

						// --- Code Blocks ---
						code({ node, inline, className, children, ...props }: any) {
							const match = /language-(\w+)/.exec(className || "");
							const codeString = String(children).replace(/\n$/, "");

							return !inline && match ? (
								<div className='my-12 relative group z-10'>
									{/* Offset background block for brutalist 3D effect */}
									<div className='absolute inset-0 bg-blue-500 dark:bg-blue-600 brutal-border translate-x-3 translate-y-3 -z-10'></div>
									
									<div className='brutal-border bg-white dark:bg-[#0d0d0d] flex-col flex overflow-hidden'>
										{/* Window Header Brutalista */}
										<div className='flex items-center justify-between px-4 py-3 border-b-4 border-black dark:border-white bg-gray-100 dark:bg-zinc-900'>
											<div className='flex items-center space-x-3'>
												<div className='flex space-x-2'>
													<div className='w-4 h-4 bg-red-500 border-2 border-black dark:border-white'></div>
													<div className='w-4 h-4 bg-yellow-400 border-2 border-black dark:border-white'></div>
													<div className='w-4 h-4 bg-green-500 border-2 border-black dark:border-white'></div>
												</div>
												<div className='flex items-center space-x-3 border-l-2 border-black dark:border-white pl-4 ml-2'>
													<Terminal
														size={16}
														className='text-black dark:text-white stroke-[2.5px]'
													/>
													<span className='font-black uppercase tracking-widest text-sm text-black dark:text-white bg-yellow-300 dark:bg-blue-600 px-2 py-0.5 brutal-border'>
														{match[1]}
													</span>
												</div>
											</div>
											<CopyButton code={codeString} />
										</div>

										{/* Content */}
										<div className='relative overflow-x-auto p-4 md:p-6 text-base md:text-lg custom-scrollbar-brutal'>
											<SyntaxHighlighter
												{...props}
												style={isDark ? vscDarkPlus : ghcolors}
												language={match[1]}
												PreTag='div'
												showLineNumbers={true}
												lineNumberStyle={{
													minWidth: "3em",
													paddingRight: "1em",
													color: isDark ? "#555" : "#aaa",
													textAlign: "right",
													borderRight: isDark ? "2px solid #333" : "2px solid #e0e0e0",
													marginRight: "1em",
													fontWeight: "bold",
												}}
												customStyle={{
													margin: 0,
													padding: 0,
													backgroundColor: "transparent",
													fontSize: "0.95rem",
													lineHeight: "1.7",
													fontFamily:
														"'JetBrains Mono', 'Fira Code', monospace",
													fontWeight: "600",
												}}
											>
												{codeString}
											</SyntaxHighlighter>
										</div>
									</div>
								</div>
							) : (
								<code
									{...props}
									className='font-black font-mono text-sm md:text-base px-2 py-1 bg-purple-200 dark:bg-purple-900 text-black dark:text-white brutal-border rounded-none shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#fff] whitespace-nowrap mx-1'
								>
									{children}
								</code>
							);
						},

						// --- Tabelas ---
						table: ({ children, ...props }) => (
							<div className='overflow-x-auto my-14 relative z-10'>
								<div className='absolute inset-0 bg-yellow-300 dark:bg-yellow-500 brutal-border translate-x-2 translate-y-2 -z-10'></div>
								<table
									className='min-w-full text-left text-lg brutal-border bg-white dark:bg-black'
									{...props}
								>
									{children}
								</table>
							</div>
						),
						thead: ({ children, ...props }) => (
							<thead className='bg-black text-white dark:bg-white dark:text-black border-b-3 border-black dark:border-white uppercase tracking-wider font-black' {...props}>
								{children}
							</thead>
						),
						th: ({ children, ...props }) => (
							<th
								className='px-6 py-4 border-r-4 border-black dark:border-white last:border-r-0'
								{...props}
							>
								{children}
							</th>
						),
						tbody: ({ children, ...props }) => (
							<tbody
								className='divide-y-4 divide-black dark:divide-white font-medium'
								{...props}
							>
								{children}
							</tbody>
						),
						tr: ({ children, ...props }) => (
							<tr
								className='hover:bg-cyan-100 dark:hover:bg-cyan-900 transition-colors duration-0'
								{...props}
							>
								{children}
							</tr>
						),
						td: ({ children, ...props }) => (
							<td
								className='px-6 py-4 whitespace-nowrap border-r-4 border-black dark:border-white last:border-r-0'
								{...props}
							>
								{children}
							</td>
						),
						
						// --- hr ---
						hr: ({ ...props }) => (
							<div className='my-16 flex items-center justify-center space-x-6'>
								<div className='w-4 h-4 bg-black dark:bg-white rounded-full'></div>
								<div className='w-8 h-8 bg-orange-500 brutal-border transform rotate-45'></div>
								<div className='w-4 h-4 bg-black dark:bg-white rounded-full'></div>
							</div>
						),
					}}
				>
					{content}
				</ReactMarkdown>
			</div>
		</div>
	);
};

export default MarkdownViewer;
