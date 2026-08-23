import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUp, ArrowUpRight, Download, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { projects, skills } from "./data";

const navItems = ["about", "skills", "projects", "contact"];

const developerCode = `const developer = {
  name: "Kesavan",
  role: "MERN Developer",
  focus: ["clean UI", "reliable APIs", "practical AI"],
  keepsLearning: true,
};`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [status, setStatus] = useState("idle");
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_tdll3zr",
          template_id: "template_v31mwdd",
          user_id: "fQg1yFpJpEjMelUT-",
          template_params: {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
          },
        }),
      });

      if (!response.ok) throw new Error("Unable to send message");

      form.reset();
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
    }
  }

  const container = "mx-auto w-[calc(100%-28px)] max-w-6xl sm:w-[calc(100%-40px)]";
  const sectionLabel = "mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent";
  const sectionTitle = "font-display text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl";
  const primaryButton = "inline-flex items-center justify-center gap-2 bg-navy px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-accent";

  return (
    <main id="top">
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition ${scrolled ? "border-line/60 bg-paper/95 backdrop-blur-md" : "border-transparent"}`}>
        <nav ref={navRef} className={`${container} flex h-[76px] items-center justify-between`}>
          <a href="#top" className="font-display text-2xl font-bold tracking-tight">
            Kesavan<span className="text-accent">.</span>
          </a>

          <button
            type="button"
            className="cursor-pointer p-2 text-ink md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

          <div className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-[76px] flex-col gap-5 border-b border-line bg-paper px-5 py-6 shadow-lg md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-bold transition hover:text-accent"
              >
                {item[0].toUpperCase() + item.slice(1)}
              </a>
            ))}

            <a
              href="/Kesavan_Resume.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className={`${primaryButton} md:ml-2`}
            >
              Download Resume <Download size={17} />
            </a>
          </div>
        </nav>
      </header>

      <section className={`${container} grid min-h-[680px] items-center gap-10 pb-14 pt-28 md:grid-cols-[1.15fr_0.85fr] md:gap-14 md:pt-32`}>
        <div>
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-accent">
            <span className="h-2 w-2 rounded-full bg-green-600 ring-4 ring-green-600/10" />
            Available for opportunities
          </p>

          <h1 className="my-5 font-display text-[43px] font-medium leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-[78px]">
            Hi, I’m Kesavan.<br />
            <em className="font-normal text-accent">MERN Stack Developer.</em>
          </h1>

          <p className="max-w-2xl text-[15px] leading-7 text-muted sm:text-[17px]">
            I build responsive, user-focused web applications using React, Node.js, Express, and MongoDB—with experience in secure authentication, payments, data visualization, and AI-powered features.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-6">
            <a href="#projects" className={primaryButton}>View Projects <ArrowRight size={18} /></a>
            <a href="#contact" className="inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-bold">
              Contact Me <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="w-[calc(100%-8px)] max-w-xl bg-navy text-slate-200 shadow-[9px_9px_0_#bdcbc7] md:rotate-1 md:shadow-[15px_15px_0_#bdcbc7]">
          <div className="flex h-12 items-center justify-between border-b border-white/10 px-4 font-mono text-xs text-slate-400">
            <div className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-slate-400" /><i className="h-2 w-2 rounded-full bg-slate-400/70" /><i className="h-2 w-2 rounded-full bg-slate-400/40" /></div>
            <span>developer.js</span><b>01</b>
          </div>
          <pre className="overflow-x-auto px-5 py-6 font-mono text-[11px] leading-5 sm:px-7 sm:text-[13px] sm:leading-6"><code>{developerCode}</code></pre>
          <div className="border-t border-white/10 px-4 py-3 font-mono text-[11px] text-emerald-300">● ready to build</div>
        </div>
      </section>

      <section id="about" className=" border-t border-line/70 pt-10 pb-16 md:pt-12 md:pb-20">
        <div className={container}>
          <p className={sectionLabel}>01 / About</p>
          <div className="grid gap-7 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <h2 className={sectionTitle}>Building with purpose,<br />learning by doing.</h2>
            <div className="max-w-2xl text-[15px] leading-7 text-muted sm:text-base">
              <p className="mb-4">I’m a MERN stack developer focused on building responsive and practical full-stack web applications. I enjoy developing clean user interfaces, creating RESTful APIs, working with databases, and solving real-world problems through code.</p>
              <p className="mb-5">I have built projects involving e-commerce, personal finance management, and AI-powered document assistance. I’m continuously improving my skills and currently seeking an opportunity to contribute and grow as a full-stack developer.</p>
              <a href="mailto:gkesavan446@gmail.com" className="inline-flex items-center gap-2 border-b border-ink pb-1 font-bold text-ink">Let’s work together <ArrowRight size={17} /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className=" bg-surface pt-10 pb-16 md:pt-12 md:pb-20">
        <div className={container}>
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div><p className={sectionLabel}>02 / Skills</p><h2 className={sectionTitle}>Tools I work with</h2></div>
            <p className="max-w-sm leading-7 text-muted">A practical toolkit shaped by building complete applications—from interface to deployment.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {skills.map((group, index) => (
              <article key={group.title} className={`border-t-[3px] border-accent bg-[#faf9f5] p-6 ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}>
                <span className="text-xs text-slate-500">0{index + 1}</span>
                <h3 className="my-5 font-display text-2xl font-medium">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => <span key={item} className="border border-line/70 px-2.5 py-1.5 text-xs font-semibold text-slate-600">{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className=" pt-10 pb-16 md:pt-12 md:pb-20">
        <div className={container}>
          <div className="mb-9 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div><p className={sectionLabel}>03 / Projects</p><h2 className={sectionTitle}>Selected work</h2></div>
            <p className="max-w-sm leading-7 text-muted">Three complete products that show how I approach full-stack development and real user needs.</p>
          </div>

          <div className="space-y-12 md:space-y-14">
            {projects.map((project, index) => (
              <article key={project.name} className="grid items-center gap-7 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
                <div className={`relative h-60 overflow-hidden p-3 sm:h-80 md:h-[350px] ${index === 1 ? "md:order-2" : ""} ${project.color === "money" ? "bg-[#d6dfdb]" : project.color === "docs" ? "bg-[#d8dce5]" : "bg-[#e5ded3]"}`}>
                  <span className="absolute left-5 top-5 z-10 bg-paper/90 px-2 py-1.5 font-mono text-xs">0{index + 1}</span>
                  <img src={project.image} alt={project.imageAlt} loading="lazy" className="h-full w-full object-cover saturate-[0.75] transition duration-300 hover:scale-[1.02]" />
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">{project.type}</span>
                  <h3 className="my-3 font-display text-4xl font-medium tracking-[-0.04em] sm:text-[43px]">{project.name}</h3>
                  <div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="border border-line/70 px-2.5 py-1.5 text-xs font-semibold text-slate-600">{tag}</span>)}</div>
                  <p className="my-5 text-[15px] leading-7 text-muted">{project.description}</p>
                  <div className="flex flex-wrap items-center gap-6">
                    <a href={project.live} target="_blank" rel="noreferrer" className={primaryButton}>Live Demo <ArrowUpRight size={17} /></a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold hover:text-accent"><FaGithub size={20} /> Source Code</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className=" bg-navy pt-10 pb-16 text-slate-100 md:pt-12 md:pb-20">
        <div className={container}>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-teal-300">04 / Contact</p>
            <h2 className="font-display text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-6xl">Let’s build something<br /><em className="font-normal text-teal-300">worth using.</em></h2>
            <p className="mt-5 max-w-2xl leading-7 text-slate-300">I’m currently open to MERN stack developer opportunities. If you have a role, project, or simply want to connect, send me a message.</p>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div className="max-w-lg">
              <a href="mailto:gkesavan446@gmail.com" className="block border-t border-white/15 py-5"><small className="mb-2 block text-xs uppercase tracking-widest text-slate-400">Email</small><strong>gkesavan446@gmail.com</strong></a>
              <div className="border-t border-white/15 py-5"><small className="mb-2 block text-xs uppercase tracking-widest text-slate-400">Location</small><strong>Chennai, India</strong></div>
              <div className="mt-3 flex flex-wrap gap-6">
                <a href="https://github.com/gkesavan446" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold hover:text-teal-300"><FaGithub size={20} /> GitHub</a>
                <a href="https://www.linkedin.com/in/kesavang" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold hover:text-teal-300"><FaLinkedin size={20} /> LinkedIn</a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-xs font-bold">Your name<input name="name" required placeholder="John Doe" className="border border-white/20 bg-white/5 p-3.5 text-sm text-white outline-none focus:border-teal-300" /></label>
              <label className="flex flex-col gap-2 text-xs font-bold">Email address<input name="email" type="email" required placeholder="john@example.com" className="border border-white/20 bg-white/5 p-3.5 text-sm text-white outline-none focus:border-teal-300" /></label>
              <label className="flex flex-col gap-2 text-xs font-bold sm:col-span-2">Message<textarea name="message" required rows="5" placeholder="Tell me a little about the opportunity..." className="resize-y border border-white/20 bg-white/5 p-3.5 text-sm text-white outline-none focus:border-teal-300" /></label>
              <button type="submit" disabled={status === "sending"} className="inline-flex cursor-pointer items-center justify-center gap-2 bg-slate-100 px-5 py-3.5 text-sm font-bold text-navy disabled:cursor-wait disabled:opacity-70">
                {status === "sending" ? "Sending…" : status === "sent" ? "Message sent ✓" : status === "error" ? "Try again" : "Send Message"} <ArrowRight size={17} />
              </button>
              <p className={`self-center text-center text-xs sm:text-left ${status === "sent" ? "text-emerald-300" : status === "error" ? "text-red-300" : "text-slate-400"}`}>
                {status === "sent" ? "Thanks! Your message was sent successfully." : status === "error" ? "Something went wrong. Please try again." : "Your message will be delivered directly to my inbox."}
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className={`${container} grid gap-6 py-8 sm:grid-cols-2 sm:items-center lg:grid-cols-[1fr_auto_1fr]`}>
          <div><a href="#top" className="font-display text-2xl font-bold">Kesavan<span className="text-accent">.</span></a><p className="mt-1 text-xs text-muted">MERN Stack Developer</p></div>
          <div className="flex flex-wrap gap-5 text-sm font-bold">
            <a href="https://github.com/gkesavan446" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent"><FaGithub size={19} /> GitHub</a>
            <a href="https://www.linkedin.com/in/kesavang" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent"><FaLinkedin size={19} /> LinkedIn</a>
          </div>
          <div className="text-xs text-muted lg:text-right"><p>© 2026 Kesavan. All rights reserved.</p><a href="#top" className="mt-2 inline-flex items-center gap-1 font-bold text-ink">Back to top <ArrowUp size={15} /></a></div>
        </div>
      </footer>
    </main>
  );
}

export default App;
