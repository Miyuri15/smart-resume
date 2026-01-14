const aiFeedback = [
  {
    id: '1',
    resumeTitle: 'Software Engineer Resume',
    score: 87,
    strengths: ['Clear structure', 'Relevant skills'],
    weaknesses: ['Lacks quantifiable achievements'],
    suggestions: ['Add more numbers to experience'],
  },
];

export default function AIToolsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">AI Tools & Feedback</h1>
      <div className="space-y-4">
        {aiFeedback.map((fb) => (
          <div key={fb.id} className="p-4 bg-white dark:bg-zinc-900 rounded shadow">
            <h2 className="font-semibold text-lg mb-2">{fb.resumeTitle}</h2>
            <p>Score: <b>{fb.score}</b>/100</p>
            <p>Strengths: {fb.strengths.join(', ')}</p>
            <p>Weaknesses: {fb.weaknesses.join(', ')}</p>
            <p>Suggestions: {fb.suggestions.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
