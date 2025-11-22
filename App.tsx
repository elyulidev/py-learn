import React, { useState, useEffect } from "react";
import { Topic, GeneratedContent } from "./types";
import { CURRICULUM } from "./constants";
import { getLessonContent } from "./services/geminiService";
import Sidebar from "./components/Sidebar";
import MarkdownViewer from "./components/MarkdownViewer";
import ThemeToggle from "./components/ThemeToggle";
import TutorChat from "./components/TutorChat";
import {
	Menu,
	Book,
	ArrowRight,
	Loader2,
	FileText,
	Download,
	Library,
	BookOpen,
} from "lucide-react";

const App: React.FC = () => {
	const [currentTopic, setCurrentTopic] = useState<Topic | null>(null);
	const [content, setContent] = useState<GeneratedContent>({
		markdown: "",
		loading: false,
	});
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [isDark, setIsDark] = useState(false);

	// Watch for theme changes to pass to MarkdownViewer for syntax highlighting
	useEffect(() => {
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.attributeName === "class") {
					setIsDark(document.documentElement.classList.contains("dark"));
				}
			});
		});
		observer.observe(document.documentElement, { attributes: true });
		setIsDark(document.documentElement.classList.contains("dark")); // Initial check
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
		if (currentTopic?.id === topic.id && !content.loading && content.markdown)
			return;

		setCurrentTopic(topic);

		// Special handling for custom pages (Evaluation and Bibliography)
		if (topic.id === "evaluation-main" || topic.id === "bibliography-main") {
			setContent({ markdown: "", loading: false });
			window.scrollTo({ top: 0, behavior: "smooth" });
			return;
		}

		setContent({ markdown: "", loading: true });

		// Scroll to top
		window.scrollTo({ top: 0, behavior: "smooth" });

		// Fetch static content (almost instant now)
		const text = await getLessonContent(topic);
		setContent({ markdown: text, loading: false });
	};

	// Custom Components for Special Pages
	const EvaluationView = () => (
		<div className='animate-in fade-in slide-in-from-bottom-4 duration-500'>
			<div className='bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden'>
				<div className='bg-red-600 dark:bg-red-700 p-8 text-white'>
					<h2 className='text-3xl font-bold mb-2'>Avaliação Final</h2>
					<p className='opacity-90'>
						Prepare-se para aplicar todo o conhecimento adquirido no curso!
					</p>
				</div>
				<div className='p-8 md:p-12'>
					<div className='flex flex-col md:flex-row items-center gap-8'>
						<div className='p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center w-full md:w-1/2 max-w-sm mx-auto transition-transform hover:scale-105 duration-300 shadow-md hover:shadow-xl'>
							<div className='bg-white dark:bg-gray-800 p-4 rounded-full shadow-sm mb-6'>
								<FileText size={48} className='text-red-500' />
							</div>
							<h3 className='text-xl font-bold text-gray-800 dark:text-white mb-2'>
								Avaliações do Curso
							</h3>
							<p className='text-gray-600 dark:text-gray-400 text-sm mb-6'>
								Faça o download do arquivo PDF contendo os enunciados da
								avaliação final e as instruções.
							</p>
							<a
								href='https://cz7algaabcz8rpd1.public.blob.vercel-storage.com/Avalia%C3%A7%C3%A3o.pdf'
								download
								target='_blank'
								rel='noopener noreferrer'
								className='w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center space-x-2 transition-colors group'
							>
								<Download size={20} className='group-hover:animate-bounce' />
								<span>Baixar PDF</span>
							</a>
						</div>
						<div className='text-gray-600 dark:text-gray-300 w-full md:w-1/2 text-lg'>
							<h4 className='font-bold text-gray-800 dark:text-white mb-4 flex items-center'>
								<span className='w-2 h-2 bg-red-500 rounded-full mr-2'></span>
								Instruções Importantes
							</h4>
							<ul className='space-y-4 list-disc list-inside text-base'>
								<li>
									São <strong>2 Parcelares</strong> e{" "}
									<strong>1 Exame Final</strong>
								</li>
								<li>
									Em cada Parcelar deve entregar a culminação de{" "}
									<strong>1 Curso</strong> mostrando o certificado.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	const BibliographyView = () => {
		const books = [
			{
				title: "El Libro de Python",
				author: "Equipe Ellibrodepython",
				desc: "O material base deste curso. Uma introdução completa e prática.",
				color: "text-blue-500",
				bg: "bg-blue-50 dark:bg-blue-900/20",
				href: "https://ellibrodepython.com/",
				type: "website",
			},
			{
				title: "Curso Intensivo de Python",
				author: "Eric Matthes",
				desc: "Um guia prático para iniciantes que desejam aprender Python rapidamente.",
				color: "text-green-500",
				bg: "bg-green-50 dark:bg-green-900/20",
				href: "https://cz7algaabcz8rpd1.public.blob.vercel-storage.com/Curso%20Intensivo%20de%20Python.pdf",
				type: "pdf",
			},
			{
				title: "Python: Escreva seus primeiros programas",
				author: "Felipe Cruz",
				desc: "Um livro focado em iniciantes que desejam aprender Python do zero.",
				color: "text-purple-500",
				bg: "bg-purple-50 dark:bg-purple-900/20",
				href: "https://cz7algaabcz8rpd1.public.blob.vercel-storage.com/Python%20Escreva%20seus%20primeiros%20programas.pdf",
				type: "pdf",
			},
			{
				title: "Python para Matemáticos",
				author: "Andréa Lins e Lins Souza",
				desc: "Explora o uso de Python em contextos matemáticos, ideal para quem quer aplicar programação em matemática.",
				color: "text-orange-500",
				bg: "bg-orange-50 dark:bg-orange-900/20",
				href: "https://cz7algaabcz8rpd1.public.blob.vercel-storage.com/python%20para%20matem%C3%A1ticos.pdf",
				type: "pdf",
			},
		];

		return (
			<div className='animate-in fade-in slide-in-from-bottom-4 duration-500'>
				<div className='mb-10 border-b border-gray-200 dark:border-gray-700 pb-6'>
					<h2 className='text-3xl font-extrabold text-gray-800 dark:text-white flex items-center'>
						<Library className='mr-3 text-primary-600' />
						Bibliografia Recomendada
					</h2>
					<p className='text-gray-600 dark:text-gray-400 mt-2 text-lg'>
						Coleção de recursos para aprofundar seus conhecimentos em Python e
						Matemática.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{books.map((book, idx) => (
						<div
							key={idx}
							className='bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-700 p-6 transition-all duration-300 group flex flex-col'
						>
							<div className='flex items-start justify-between mb-4'>
								<div className={`p-3 rounded-lg ${book.bg}`}>
									<BookOpen size={28} className={book.color} />
								</div>
								<span className='text-xs font-medium text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded'>
									{book.type === "pdf" ? "PDF" : "Website"}
								</span>
							</div>

							<h3 className='text-xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-primary-600 transition-colors'>
								{book.title}
							</h3>
							<p className='text-sm text-primary-600 dark:text-primary-400 font-medium mb-3'>
								{book.author}
							</p>
							<p className='text-gray-600 dark:text-gray-400 text-sm mb-6 grow leading-relaxed'>
								{book.desc}
							</p>

							<a
								href={book.href}
								target='_blank'
								download={book.type === "pdf" ? true : false}
								rel='noopener noreferrer'
								className='w-full mt-auto border border-gray-200 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-500 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 px-4 rounded-lg flex items-center justify-center transition-all group-hover:bg-gray-50 dark:group-hover:bg-gray-700/50'
							>
								<Download size={16} className='mr-2' />
								Baixar Recurso
							</a>
						</div>
					))}
				</div>
			</div>
		);
	};

	return (
		<div className='flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans'>
			<Sidebar
				currentTopicId={currentTopic?.id || null}
				onSelectTopic={handleTopicSelect}
				isOpen={sidebarOpen}
				onClose={() => setSidebarOpen(false)}
			/>

			<div className='flex-1 flex flex-col h-full overflow-hidden relative w-full'>
				{/* Header */}
				<header className='flex items-center justify-between px-6 py-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-10'>
					<div className='flex items-center'>
						<button
							className='mr-4 md:hidden p-2 -ml-2 text-gray-600 dark:text-gray-300'
							onClick={() => setSidebarOpen(true)}
						>
							<Menu size={24} />
						</button>
						{currentTopic && (
							<div className='flex flex-col'>
								<span className='text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider'>
									Capítulo Atual
								</span>
								<h1 className='text-sm md:text-lg font-semibold text-gray-800 dark:text-white truncate max-w-[200px] md:max-w-md'>
									{currentTopic.title}
								</h1>
							</div>
						)}
					</div>
					<div className='flex items-center space-x-4'>
						<div className='hidden sm:flex items-center text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full'>
							<Book size={14} className='mr-2' />
							<span>Baseado em: El Libro de Python</span>
						</div>
						<ThemeToggle />
					</div>
				</header>

				{/* Main Content */}
				<main className='flex-1 overflow-y-auto scroll-smooth p-6 md:p-10 lg:px-16 w-full relative'>
					<div className='max-w-4xl mx-auto pb-20'>
						{/* Conditional Rendering based on Topic ID */}
						{currentTopic?.id === "evaluation-main" ? (
							<EvaluationView />
						) : currentTopic?.id === "bibliography-main" ? (
							<BibliographyView />
						) : content.loading ? (
							<div className='flex items-center justify-center h-[50vh]'>
								<div className='flex flex-col items-center space-y-4'>
									<Loader2 className='animate-spin text-primary-600 w-8 h-8' />
									<span className='text-gray-500'>
										Carregando material didático...
									</span>
								</div>
							</div>
						) : (
							<div className='animate-in fade-in duration-300 slide-in-from-bottom-2'>
								{/* Breadcrumbish decorative element */}
								<div className='mb-8 flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm'>
									<span>Aula</span>
									<ArrowRight size={14} className='mx-2' />
									<span>{currentTopic?.title}</span>
								</div>

								<MarkdownViewer content={content.markdown} isDark={isDark} />
							</div>
						)}
					</div>
				</main>

				{/* Tutor Chat Overlay (Only show on lesson pages, not Eval/Biblio) */}
				{!content.loading &&
					currentTopic?.id !== "evaluation-main" &&
					currentTopic?.id !== "bibliography-main" && (
						<TutorChat context={content.markdown} />
					)}
			</div>
		</div>
	);
};

export default App;
