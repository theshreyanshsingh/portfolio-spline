function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'A stunning web application with modern design and smooth interactions.',
      tags: ['React', 'Tailwind CSS', 'Vite'],
      link: '#'
    },
    {
      title: 'Project Two',
      description: 'Interactive 3D experience showcasing creative coding and design.',
      tags: ['Three.js', 'WebGL', 'React'],
      link: '#'
    },
    {
      title: 'Project Three',
      description: 'Full-stack application with seamless user experience and robust backend.',
      tags: ['Node.js', 'React', 'MongoDB'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-8 lg:px-16 py-20">
      <div className="max-w-2xl w-full">
        <h2 className="text-5xl lg:text-6xl font-bold mb-12 tracking-tight">
          Selected Work
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="block p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
