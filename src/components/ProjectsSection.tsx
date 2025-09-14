import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProjectModal } from '@/components/ProjectModal';
import resumeAnalyzerImage from '@/assets/Resume Analyzer.png';
import machineLearningImage from '@/assets/Machine Learning Concepts.jpg';
import rsaTimingAttackImage from '@/assets/rsa-timing-attack.jpg';
import californiaHousingImage from '@/assets/california-housing-prediction.jpg';
import tableauSalesImage from '@/assets/sales dashboard.png';
import personalWebsiteImage from '@/assets/personal-website.jpeg';
import graduateCareerImage from '@/assets/graduate-career-outcomes.jpg';
import privacyPreservingImage from '@/assets/privacy-preserving-gans.jpg';
import { useState } from 'react';
const projects = [
	{
		title: 'Resume Analyzer',
		description: `Advanced ATS checking system that analyzes resumes for optimal job application success.\nThis AI-powered tool helps format and structure documents intelligently, ensuring consistency and saving valuable time in the job search process.\nFind the project in the Live MVPs & Saas Products section.`,
		tags: ['AI', 'ATS Optimization', 'n8n', 'Supabase', 'TypeScript'],
		liveUrl: 'https://crestviewaiautomations.com/',
		githubUrl: 'https://crestviewaiautomations.com/',
		category: 'AI & Automation',
		image: resumeAnalyzerImage,
	},
	{
		title: 'Machine Learning Concepts',
		description:
			'Comprehensive machine learning project covering concepts like PCA, Naive Bayes, CNN, DeeplabV3, and OpenCV. Includes hands-on implementation and analysis.',
		tags: ['Python', 'TensorFlow', 'OpenCV', 'DeeplabV3', 'PCA', 'Naive Bayes', 'CNN'],
		liveUrl: 'https://github.com/kamilakhtar015/Machine-Learning---Concepts-GSU-',
		githubUrl: 'https://github.com/kamilakhtar015/Machine-Learning---Concepts-GSU-',
		category: 'Machine Learning',
		image: machineLearningImage,
	},
	{
		title: 'RSA Timing Attack',
		description:
			'An implementation of a side-channel attack exploiting timing variations in RSA decryption to reconstruct private keys. The project simulates both the victim (RSA decryption) and the attacker (timing analysis), showcasing modular exponentiation, precise execution-time measurements, and statistical analysis for key recovery.',
		tags: ['Python', 'Cryptography', 'Modular Exponentiation', 'Timing Analysis', 'Side-Channel Attack'],
		liveUrl: 'https://github.com/kamilakhtar015/rsa-timing-attack',
		githubUrl: 'https://github.com/kamilakhtar015/rsa-timing-attack',
		category: 'Cybersecurity',
		image: rsaTimingAttackImage,
	},
	{
		title: 'California Housing Price Prediction',
		description:
			'A machine learning project focused on predicting housing prices using the California Housing dataset. Implemented data preprocessing, exploratory data analysis, and feature engineering, followed by model training and evaluation with regression algorithms to achieve accurate price predictions.',
		tags: [
			'Python',
			'Scikit-learn',
			'Pandas',
			'NumPy',
			'Matplotlib',
			'Regression Models',
			'EDA',
		],
		liveUrl: 'https://github.com/kamilakhtar015/CaliHousing-PricePred',
		githubUrl: 'https://github.com/kamilakhtar015/CaliHousing-PricePred',
		category: 'Data Science',
		image: californiaHousingImage,
	},
	{
		title: 'Tableau Sales Insights',
		description:
			'An interactive data visualization project analyzing sales performance across regions, products, and customer segments. Built dynamic Tableau dashboards to uncover key business insights, track revenue trends, and support data-driven decision-making for sales strategy.',
		tags: [
			'Tableau',
			'Data Visualization',
			'Business Intelligence',
			'Sales Analytics',
			'Dashboard Design',
		],
		liveUrl: 'https://github.com/kamilakhtar015/tableau-sales-insights-india',
		githubUrl: 'https://github.com/kamilakhtar015/tableau-sales-insights-india',
		category: 'Business Intelligence',
		image: tableauSalesImage,
	},
	{
		title: 'Personal Portfolio Website',
		description:
			'A modern and responsive personal portfolio website showcasing my projects, skills, and professional journey. Built with clean design principles, smooth animations, and optimized performance to create an engaging user experience that effectively communicates my expertise in software development and data science.',
		tags: [
			'React',
			'TypeScript',
			'Tailwind CSS',
			'Responsive Design',
			'Portfolio',
			'Web Development',
		],
		liveUrl: 'https://github.com/kamilakhtar015/personal-website',
		githubUrl: 'https://github.com/kamilakhtar015/personal-website',
		category: 'Web Development',
		image: personalWebsiteImage,
		hideDetails: true,
	},
	{
		title: 'Graduate Career Outcomes Analysis',
		description:
			'Comprehensive data analysis project with the Andrew Young School of Policy Studies at Georgia State University analyzing 1400+ alumni records. Achieved key performance indicators including 95%+ alumni location tracking accuracy and 80%+ employment rate analysis, providing critical insights for academic program evaluation and student career services.',
		tags: [
			'Data Analysis',
			'Alumni Research',
			'KPI Tracking',
			'Statistical Analysis',
			'Academic Research',
			'Excel',
			'Data Visualization',
		],
		liveUrl: 'https://github.com/example',
		githubUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7366145848000397312/',
		category: 'Data Analysis',
		image: graduateCareerImage,
	},
	{
		title: 'Privacy Preserving Image Harmonization using GANs',
		description:
			'Advanced research project implementing privacy-preserving image level harmonization using Generative Adversarial Networks with Federated Learning on the OpenBHB dataset. This ongoing research focuses on maintaining data privacy while achieving consistent image harmonization across distributed medical imaging datasets. (Project in Progress)',
		tags: [
			'GANs',
			'Federated Learning',
			'Privacy Preservation',
			'Medical Imaging',
			'Deep Learning',
			'OpenBHB',
			'Research',
		],
		liveUrl: 'https://github.com/example',
		githubUrl: 'https://github.com/example',
		category: 'AI Research',
		image: privacyPreservingImage,
		hideDetails: true,
	},
];

export default function ProjectsSection() {
	const [selectedProject, setSelectedProject] = useState(null);
	const [modalOpen, setModalOpen] = useState(false);

	const handleOpenModal = (project) => {
		setSelectedProject(project);
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
		setSelectedProject(null);
	};

	return (
		<section className="py-16 bg-[#f7f7f7]">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-4xl font-extrabold text-center mb-2 tracking-tight">
					Projects
				</h2>
				<p className="text-center text-gray-500 mb-8 text-lg">
					A showcase of selected work, research, and SaaS builds.
				</p>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
					{projects.map((project, idx) => (
						<div
							key={idx}
							className="relative rounded-xl overflow-hidden bg-white flex items-center justify-center cursor-pointer group"
							style={{ minHeight: '190px', height: '190px' }}
							onClick={() => !project.hideDetails && handleOpenModal(project)}
						>
							<img
								src={project.image}
								alt={project.title}
								className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
								style={{ height: '100%', width: '100%' }}
							/>
							{/* Overlay for project name on hover */}
							<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-300">
								<span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">
									{project.title}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* Modal for project details */}
			<ProjectModal
				project={selectedProject}
				isOpen={modalOpen}
				onClose={handleCloseModal}
			/>
		</section>
	);
}