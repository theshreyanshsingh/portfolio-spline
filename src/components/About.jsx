function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 lg:px-16 py-20">
      <div className="max-w-2xl">
        <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
          About
        </h2>
        <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
          <p>
            I'm a creative developer and designer focused on crafting memorable
            digital experiences. With a strong foundation in both design principles
            and modern web technologies, I bring ideas to life through code.
          </p>
          <p>
            My approach combines aesthetic sensibility with technical expertise,
            ensuring that every project is not only visually stunning but also
            performant and user-friendly.
          </p>
          <div className="pt-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'Three.js', 'UI/UX Design', 'Web Animation'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
