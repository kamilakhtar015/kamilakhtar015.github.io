import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  animate,
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { education, industry, links, projects, research, stack, type Project } from "./data";
import { ButterflyDemo, MriDemo, QuadDemo } from "./demos";

const demos: Record<string, () => JSX.Element> = { butterfly: ButterflyDemo, schizophrenia: MriDemo, quadrag: QuadDemo };

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.55, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionHead({ id, kicker, title, intro }: { id: string; kicker: string; title: string; intro?: string }) {
  return (
    <header className="section-head">
      <Reveal>
        <p className="kicker">{kicker}</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 id={id}>{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className="section-intro">{intro}</p>
        </Reveal>
      )}
    </header>
  );
}

// Counts up to the number inside a value like "~7 min", "1,140+" or "61.8%".
function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [text, setText] = useState(value);
  useEffect(() => {
    const raw = value.match(/[\d,.]+/)?.[0];
    if (!inView || !raw || parseFloat(raw) === 0) return;
    const target = parseFloat(raw.replace(/,/g, ""));
    const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
    const c = animate(0, target, {
      duration: 0.9,
      ease,
      onUpdate: (v) => {
        const n = v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
        setText(value.replace(raw, raw.includes(",") ? n : n.replace(/,/g, "")));
      },
    });
    return () => c.stop();
  }, [inView, value]);
  return <span ref={ref}>{text}</span>;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return <motion.div className="progress" style={{ scaleX }} />;
}

const navItems = [
  ["projects", "Projects"],
  ["industry", "Industry"],
  ["research", "Research"],
  ["education", "Education"],
  ["contact", "Contact"],
];

function Nav({ onResume }: { onResume: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 40);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll("section[id]").forEach((s) => io.observe(s));
    return () => {
      removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " is-scrolled" : "") + (open ? " is-open" : "")} aria-label="Main">
      <a className="wordmark" href="#top" aria-label="Kamil Akhtar, back to top">
        Kamil Akhtar
      </a>
      <div className="nav-links" id="nav-links">
        {navItems.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? "is-active" : undefined} onClick={() => setOpen(false)}>
            {label}
            {active === id && <motion.span layoutId="nav-line" className="nav-line" />}
          </a>
        ))}
      </div>
      <div className="nav-actions">
        <button type="button" className="btn btn-small" onClick={onResume}>
          Résumé
        </button>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </nav>
  );
}

function Hero({ onResume }: { onResume: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const blockY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const stats = [
    ["87%", "peak accuracy, first-author 3D CNN"],
    ["61.8%", "answer accuracy, multimodal RAG"],
    ["~7 min", "per creative brief with my LLM tool"],
    ["~70%", "less client latency from AI automation"],
  ];
  const line = ["I", "build", "AI", "systems", "people", "actually", "use."];
  return (
    <header className="hero" id="top" ref={ref}>
      <div className="hero-grid">
        <div className="hero-text">
          <motion.p className="kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            AI Engineer · Atlanta, GA
          </motion.p>
          <h1>
            {line.map((w, i) => (
              <span className="word-mask" key={i}>
                <motion.span
                  className={w === "use." ? "accent-word" : undefined}
                  initial={{ y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.7, ease, delay: 0.08 + i * 0.04 }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.35 }}
          >
            I'm Kamil, an AI engineer who builds LLM tools, multimodal RAG and deep-learning models, and takes them from
            research to something a team uses every day. Currently AI Creative Intelligence Intern at ITA Group, finishing
            an MS in Computer Science at Georgia State in December 2026.
          </motion.p>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.45 }}
          >
            <a className="btn" href="#projects">
              View projects <span aria-hidden="true">→</span>
            </a>
            <button type="button" className="btn btn-ghost" onClick={onResume}>
              View résumé
            </button>
          </motion.div>
        </div>
        <motion.figure
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
        >
          <motion.span className="photo-block" style={{ y: blockY }} aria-hidden="true" />
          <motion.img
            style={{ y: photoY }}
            src="img/kamil-portrait.jpg"
            alt="Kamil Akhtar"
            width="800"
            height="1000"
          />
          <figcaption className="photo-card">
            <a href="#contact">
              <span className="photo-dot" aria-hidden="true" />
              Open to full-time AI engineering roles <span aria-hidden="true">→</span>
            </a>
          </figcaption>
        </motion.figure>
      </div>
      <motion.dl
        className="hero-stats"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.45 } } }}
      >
        {stats.map(([v, l]) => (
          <motion.div key={l} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}>
            <dt>
              <Counter value={v} />
            </dt>
            <dd>{l}</dd>
          </motion.div>
        ))}
      </motion.dl>
    </header>
  );
}

function Marquee() {
  const row = [...stack, ...stack];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  return (
    <div className={"marquee" + (inView ? "" : " is-paused")} ref={ref} aria-label="Tools I work with">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} aria-hidden={i >= stack.length}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Media({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);
  const m = project.media!;
  return (
    <div className="media" ref={ref}>
      <motion.div className="media-inner" style={{ scale }}>
        {m.video ? (
          <video autoPlay muted loop playsInline poster={m.src} aria-label={m.alt}>
            <source src={m.video} type="video/webm" />
          </video>
        ) : (
          <img src={m.src} alt={m.alt} loading="lazy" />
        )}
      </motion.div>
      {m.video && <span className="media-tag">Brain network visualisation</span>}
    </div>
  );
}

function ProjectCase({ project, index }: { project: Project; index: number }) {
  const Demo = demos[project.id];
  return (
    <article className={"case" + (project.media ? "" : " case-nomedia")} aria-labelledby={`p-${project.id}`}>
      <Reveal className="case-head">
        <span className="case-num" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="case-index">
          Project {index + 1} of {projects.length}
        </span>
        <span className="case-kind">{project.kind}</span>
      </Reveal>
      <div className="case-top">
        <Reveal className="case-text">
          <h3 id={`p-${project.id}`} className={project.name.length > 40 ? "case-name case-name-long" : "case-name"}>
            {project.name}
          </h3>
          <p className="case-tagline">{project.tagline}</p>
          <p className="case-summary">{project.summary}</p>
          <ul className="chips">
            {project.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="case-links">
            {project.links.map((l) => (
              <a key={l.href} className="btn btn-ghost btn-small" href={l.href} target="_blank" rel="noreferrer">
                {l.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </Reveal>
        <div className="case-side">
          {project.media && (
            <Reveal>
              <Media project={project} />
            </Reveal>
          )}
          <Reveal delay={0.1}>
            <dl className="metrics">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <dt>
                    <Counter value={m.value} />
                  </dt>
                  <dd>{m.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
      <Reveal className="demo-wrap">
        <Demo />
      </Reveal>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-h">
      <div className="projects-head">
        <SectionHead
          id="projects-h"
          kicker="Projects"
          title="Systems I've built end to end"
          intro="Three projects, each with a walkthrough you can play: tap a step, drag the scan, or ask the video a question."
        />
        <Reveal className="project-index">
          {projects.map((p, i) => (
            <a key={p.id} href={`#p-${p.id}`}>
              <span className="pi-n">{i + 1}</span>
              <span>
                <strong>{p.id === "schizophrenia" ? "Early-stage schizophrenia 3D CNN" : p.name}</strong>
                <em>{p.tagline}</em>
              </span>
            </a>
          ))}
        </Reveal>
      </div>
      {projects.map((p, i) => (
        <ProjectCase key={p.id} project={p} index={i} />
      ))}
    </section>
  );
}

function Logo({ job, big = false }: { job: (typeof industry)[number]; big?: boolean }) {
  return job.logo ? (
    <img className={"co-logo" + (big ? " co-logo-big" : "")} src={job.logo} alt={job.company} />
  ) : (
    <span className={"co-word" + (big ? " co-logo-big" : "")}>{job.company.split(" ")[0]}</span>
  );
}

function Industry() {
  const [active, setActive] = useState(0);
  const job = industry[active];
  return (
    <section id="industry" className="section section-alt" aria-labelledby="industry-h">
      <SectionHead
        id="industry-h"
        kicker="Industry"
        title="AI shipped inside real teams"
        intro="Internships where the work went into production and people used it every day. Pick a company to see what I shipped there."
      />
      <div className="industry">
        <div className="industry-tabs" role="tablist" aria-label="Companies">
          {industry.map((j, i) => (
            <button
              key={j.company}
              role="tab"
              id={`tab-${i}`}
              aria-selected={i === active}
              aria-controls="industry-panel"
              className="industry-tab"
              onClick={() => setActive(i)}
              style={{ ["--co" as string]: j.color }}
            >
              {i === active && (
                <motion.span layoutId="tab-bg" className="tab-bg" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
              )}
              <Logo job={j} />
              <span className="tab-role">{j.role}</span>
              <span className="tab-when">{j.when}</span>
            </button>
          ))}
        </div>
        <div className="industry-panel" id="industry-panel" role="tabpanel" aria-labelledby={`tab-${active}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={job.company}
              className="panel-inner"
              style={{ ["--co" as string]: job.color }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              <motion.span
                className="panel-wipe"
                aria-hidden="true"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 0 0 100%)"] }}
                transition={{ duration: 0.75, times: [0, 0.45, 1], ease: "easeInOut" }}
              />
              <div className="panel-top">
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.45, ease }}>
                  <a className="panel-logo-link" href={job.url} target="_blank" rel="noreferrer" aria-label={`${job.company} website`}>
                    <Logo job={job} big />
                    <span className="panel-visit">Visit site ↗</span>
                  </a>
                  <h3>{job.role}</h3>
                  <p className="panel-meta">
                    {job.where} · {job.when}
                  </p>
                </motion.div>
                <motion.div
                  className="panel-figure"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35, duration: 0.5, ease }}
                >
                  <span className="panel-value">
                    <Counter value={job.headline.value} />
                  </span>
                  <span className="panel-label">{job.headline.label}</span>
                </motion.div>
              </div>
              <ul className="shipped">
                {job.items.map((it, i) => (
                  <motion.li
                    key={it.title}
                    className={i === 0 ? "shipped-lead" : undefined}
                    initial={{ opacity: 0, y: 24, rotateX: -12 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.5, ease, delay: 0.4 + i * 0.08 }}
                  >
                    <span className="shipped-tag">{it.tag}</span>
                    <strong>{it.title}</strong>
                    <p>{it.text}</p>
                  </motion.li>
                ))}
              </ul>
              <ul className="chips">
                {job.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section id="research" className="section" aria-labelledby="research-h">
      <SectionHead
        id="research-h"
        kicker="Research"
        title="Deep learning on brains and genomes"
        intro="Graduate research at the TReNDS Center and the ALSER Research Lab, Georgia State."
      />
      <div className="research">
        {research.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.08} className={r.featured ? "research-featured" : undefined}>
            <div className={"card" + (r.featured ? " card-featured" : "")}>
              <p className="card-kind">{r.kind}</p>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
              {r.stats && (
                <dl className="card-stats">
                  {r.stats.map((x) => (
                    <div key={x.label}>
                      <dt>
                        <Counter value={x.value} />
                      </dt>
                      <dd>{x.label}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {r.link && (
                <a className="btn btn-small" href={r.link.href} target="_blank" rel="noreferrer">
                  {r.link.label} <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section section-alt" aria-labelledby="education-h">
      <SectionHead id="education-h" kicker="Education" title="A BS in Karachi, then an MS in Atlanta." />
      <div className="edu-list">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.08}>
            <article className="edu-item" style={{ ["--school" as string]: e.color }}>
              <span className="edu-logo">
                <img src={e.logo} alt={e.school} />
              </span>
              <div className="edu-body">
                <p className="edu-when">
                  {e.when} · {e.where}
                </p>
                <h3>{e.degree}</h3>
                <p className="edu-school">{e.school}</p>
                <ul className="edu-roles">
                  {e.roles.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact({ onResume }: { onResume: () => void }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      location.href = `mailto:${links.email}`;
    }
  };
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-h">
      <Reveal>
        <p className="kicker">Contact · Atlanta, GA</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 id="contact-h">
          Hiring an AI engineer? <span className="accent-word">Let's talk.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="section-intro">
          I'm looking for full-time AI engineering roles. If you're hiring, or want to talk about LLMs,
          RAG or medical imaging, write to me.
        </p>
      </Reveal>
      <Reveal delay={0.15} className="contact-actions">
        <a className="btn btn-accent" href={`mailto:${links.email}?subject=Hello%20Kamil`}>
          {links.email}
        </a>
        <button type="button" className="btn btn-ghost-dark" onClick={copy} aria-live="polite">
          {copied ? "Copied ✓" : "Copy email"}
        </button>
        <button type="button" className="btn btn-ghost-dark" onClick={onResume}>
          View résumé
        </button>
      </Reveal>
      <Reveal delay={0.2} className="contact-links">
        <a href={links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a href={links.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href={links.scholar} target="_blank" rel="noreferrer">
          Google Scholar ↗
        </a>
      </Reveal>
    </section>
  );
}

function ResumeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current!;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);
  return (
    <dialog
      ref={ref}
      className="resume"
      aria-labelledby="resume-h"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      <div className="resume-bar">
        <h2 id="resume-h">Résumé · Kamil Akhtar</h2>
        <div className="resume-actions">
          <a className="btn btn-small" href={links.resume} download="Kamil-Akhtar-Resume.pdf">
            Download PDF
          </a>
          <a className="btn btn-ghost btn-small" href={links.resume} target="_blank" rel="noreferrer">
            Open in new tab
          </a>
          <button type="button" className="btn btn-ghost btn-small" onClick={onClose} aria-label="Close résumé">
            ✕
          </button>
        </div>
      </div>
      {open && <iframe className="resume-frame" src={`${links.resume}#view=FitH`} title="Kamil Akhtar résumé" />}
    </dialog>
  );
}

export default function App() {
  const [resume, setResume] = useState(false);
  const openResume = () => setResume(true);
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Nav onResume={openResume} />
      <Hero onResume={openResume} />
      <Marquee />
      <main>
        <Projects />
        <Industry />
        <Research />
        <Education />
        <Contact onResume={openResume} />
      </main>
      <footer className="footer">
        <p>© 2026 Kamil Akhtar · Atlanta, GA</p>
        <p>
          MRI slices: "MRI Brain ADC Axial" by{" "}
          <a href="https://commons.wikimedia.org/wiki/File:MRI_Brain_ADC_Axial_(1).jpg" target="_blank" rel="noreferrer">
            511KeV
          </a>
          , CC BY-SA 4.0 · both via Wikimedia Commons
        </p>
      </footer>
      <ResumeModal open={resume} onClose={() => setResume(false)} />
    </MotionConfig>
  );
}
