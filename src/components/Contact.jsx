function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-8 lg:px-16 py-20">
      <div className="max-w-2xl w-full">
        <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
          Get in Touch
        </h2>
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          Have a project in mind or just want to chat? Feel free to reach out.
        </p>
        <div className="space-y-6">
          <a
            href="mailto:your.email@example.com"
            className="block p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <div className="text-sm text-gray-500 mb-2">Email</div>
            <div className="text-xl group-hover:text-gray-300 transition-colors">
              your.email@example.com
            </div>
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <div className="text-sm text-gray-500 mb-2">Twitter</div>
            <div className="text-xl group-hover:text-gray-300 transition-colors">
              @yourusername
            </div>
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <div className="text-sm text-gray-500 mb-2">GitHub</div>
            <div className="text-xl group-hover:text-gray-300 transition-colors">
              github.com/yourusername
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
