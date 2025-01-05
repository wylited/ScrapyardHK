// components/breadcrumb.jsx
const Breadcrumb = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#212121]/80 backdrop-blur-sm border-b border-white/10 py-3">
      <div className="container mx-auto px-4">
        <ul className="flex gap-4 items-center justify-center text-sm md:text-base overflow-x-auto">
          <li>
            <button
              onClick={() => scrollToSection('letter')}
              className="text-white/60 hover:text-white transition-colors"
            >
              Letter
            </button>
          </li>
          <li className="text-white/60">•</li>
          <li>
            <button
              onClick={() => scrollToSection('rundown')}
              className="text-white/60 hover:text-white transition-colors"
            >
              Rundown
            </button>
          </li>
          <li className="text-white/60">•</li>
          <li>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-white/60 hover:text-white transition-colors"
            >
              FAQ
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Breadcrumb;
