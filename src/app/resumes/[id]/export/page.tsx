const resume = {
  id: "1",
  title: "Software Engineer Resume",
  role: "Software Engineer",
  data: {
    personalInfo: {
      name: "John Doe",
      email: "john.doe@gmail.com",
      phone: "+94 77 123 4567",
      location: "Colombo, Sri Lanka",
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe"
    },
    education: [
      {
        degree: "BSc (Hons) in Software Engineering",
        institution: "University of Colombo School of Computing",
        startYear: 2021,
        endYear: 2025,
        gpa: "3.45 / 4.00"
      }
    ],
    experience: [
      {
        jobTitle: "Software Engineering Intern",
        company: "ABC Technologies (Pvt) Ltd",
        location: "Colombo, Sri Lanka",
        startDate: "2024-01",
        endDate: "2024-07",
        responsibilities: [
          "Developed and maintained RESTful APIs using Node.js and Express",
          "Built responsive UI components using React and Tailwind CSS",
          "Integrated MongoDB for data persistence and optimized queries",
          "Collaborated with cross-functional teams using Git and Agile practices"
        ]
      }
    ],
    skills: [
      {
        category: "Programming Languages",
        items: ["JavaScript", "TypeScript", "Java", "C#", "Python"]
      }
    ]
  }
};

export default function ResumeExportPage() {
  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 rounded shadow p-8 mt-8">
      <h1 className="text-2xl font-bold mb-4">Export Resume as PDF</h1>
      <div className="mb-4">
        <label className="block font-medium mb-1">Template</label>
        <select className="w-full p-2 border rounded bg-zinc-100 dark:bg-zinc-800">
          <option>Classic (ATS Safe)</option>
          <option>Modern (ATS Safe)</option>
        </select>
      </div>
      <div className="border p-4 rounded bg-zinc-50 dark:bg-zinc-950 mb-4">
        <div className="font-bold text-xl mb-1">{resume.data.personalInfo.name}</div>
        <div className="text-zinc-600 dark:text-zinc-300 mb-2">{resume.role}</div>
        <div className="text-sm mb-2">{resume.data.personalInfo.email} | {resume.data.personalInfo.phone}</div>
        <div className="text-sm mb-2">{resume.data.personalInfo.location}</div>
        <div className="text-sm mb-2">
          <a href={resume.data.personalInfo.linkedin} className="text-blue-600 hover:underline mr-2">LinkedIn</a>
          <a href={resume.data.personalInfo.github} className="text-blue-600 hover:underline">GitHub</a>
        </div>
        <div className="mt-4">
          <div className="font-semibold">Education</div>
          {resume.data.education.map((edu, i) => (
            <div key={i} className="text-sm mb-1">
              {edu.degree}, {edu.institution} ({edu.startYear}–{edu.endYear}) — GPA: {edu.gpa}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="font-semibold">Experience</div>
          {resume.data.experience.map((exp, i) => (
            <div key={i} className="text-sm mb-2">
              <div className="font-medium">{exp.jobTitle} @ {exp.company}</div>
              <div className="text-xs text-zinc-500">{exp.startDate} – {exp.endDate} | {exp.location}</div>
              <ul className="list-disc ml-5">
                {exp.responsibilities.map((r, j) => (
                  <li key={j}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="font-semibold">Skills</div>
          {resume.data.skills.map((skill, i) => (
            <div key={i} className="text-sm mb-1">
              <span className="font-medium">{skill.category}:</span> {skill.items.join(", ")}
            </div>
          ))}
        </div>
      </div>
      <button className="bg-blue-600 text-white px-6 py-2 rounded">Download PDF</button>
    </div>
  );
}
