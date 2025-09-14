import { Brain, TrendingUp, Code2, Waves } from 'lucide-react';

export default function StatisticsSection() {
  const learningCards = [
    {
      icon: '🧠',
      title: 'Learning Deep Learning Concepts',
      description: 'Mastering neural networks, transformers, and advanced architectures',
      accent: 'bg-gradient-to-tr from-gray-100 to-gray-200',
    },
    {
      icon: '🧬',
      title: 'Bioinformatics Algorithms Exploration',
      description: 'Studying computational biology and genomic data analysis',
      accent: 'bg-gradient-to-tr from-gray-50 to-gray-100',
    },
    {
      icon: '📄',
      title: 'Research Papers to Write',
      description: 'Working on publications in ML, Computational Biology and Neuroscience',
      accent: 'bg-gradient-to-tr from-gray-100 to-gray-200',
    },
    {
      icon: '🏊‍♂️',
      title: 'Swimming Learning',
      description: 'Developing swimming techniques and building water confidence',
      accent: 'bg-gradient-to-tr from-gray-50 to-gray-100',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-2 tracking-tight">Current Learning Journey</h2>
        <p className="text-center text-gray-500 mb-8 text-lg">Exploring the frontiers of technology and personal growth</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {learningCards.map((card, idx) => (
            <div
              key={card.title}
              className={`relative rounded-xl shadow-lg p-8 flex flex-col items-center justify-center transition-all duration-300 ${card.accent} hover:scale-105 hover:shadow-2xl hover:bg-gray-50`}
              style={{ minHeight: '220px' }}
            >
              <div className="text-4xl mb-4 animate-bounce-slow">{card.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 text-center mb-2">{card.title}</h3>
              <p className="text-gray-600 text-center text-base">{card.description}</p>
              <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gray-300 animate-pulse" />
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 mt-10 italic text-base animate-fade-in">"Every expert was once a beginner. Every pro was once an amateur."</p>
      </div>
    </section>
  );
};