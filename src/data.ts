export const links = {
  email: "kamil.akhtar015@gmail.com",
  linkedin: "https://www.linkedin.com/in/kamil-akhtar",
  github: "https://github.com/kamilakhtar015",
  scholar: "https://scholar.google.com/citations?user=Lvcm5Q0AAAAJ&hl=en",
  resume: "kamil-resume.pdf",
};

export type Project = {
  id: string;
  kind: string;
  name: string;
  tagline: string;
  summary: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  media?: { src: string; alt: string; video?: string };
  links: { href: string; label: string }[];
};

export const projects: Project[] = [
  {
    id: "butterfly",
    kind: "Generative AI · On-device",
    name: "ButterFly",
    tagline: "An on-device AI art director that asks before it draws.",
    summary:
      "Most image tools take a prompt and hand back a picture. ButterFly interviews you like a real art director, writes the ad copy, renders the banner on your own machine, critiques its own work and exports a layered Photoshop file. No cloud, no API keys, no per-image cost.",
    metrics: [
      { value: "~90 s", label: "per finished banner" },
      { value: "100%", label: "on-device, nothing leaves the laptop" },
      { value: "$0", label: "API cost per image" },
    ],
    stack: ["Qwen2.5-VL-7B", "FLUX.1-schnell", "rembg", "Python", "Vision LLM"],
    media: { src: "img/butterfly.png", alt: "A banner rendered by ButterFly: a phone on a rock by a river at golden hour" },
    links: [{ href: "https://github.com/kamilakhtar015/butterfly-banner-art-director", label: "View on GitHub" }],
  },
  {
    id: "schizophrenia",
    kind: "Medical imaging · Deep learning",
    name: "High-Frequency Spatial Feature Fusion with 3D CNN for Early-Stage Schizophrenia Classification",
    tagline: "A compact 3D CNN that catches early-stage schizophrenia in brain scans.",
    summary:
      "Early-stage schizophrenia leaves faint, high-frequency traces in brain structure that standard 3D CNNs smooth away. I pair high-pass spatial filtering with a modified 3D CNN so those details survive, and keep the model small enough to train and audit. First-author preprint, bioRxiv 2026.",
    metrics: [
      { value: "87%", label: "peak accuracy" },
      { value: "+5.44", label: "points over the baseline" },
      { value: "1.4M", label: "parameters, a compact model" },
    ],
    stack: ["PyTorch", "3D CNN", "Python", "MATLAB", "SLURM / HPC"],
    links: [{ href: "https://scholar.google.com/citations?user=Lvcm5Q0AAAAJ&hl=en", label: "Read the preprint" }],
  },
  {
    id: "quadrag",
    kind: "Multimodal RAG · Video QA",
    name: "QuadRAG",
    tagline: "Training-free question answering over video, from four indexes at once.",
    summary:
      "Video holds meaning in pictures, speech and context at the same time, so one index misses most of it. QuadRAG builds four semantic indexes in parallel, retrieves from all of them, fuses the evidence and lets an LLM answer in a chat interface, with no model training at all.",
    metrics: [
      { value: "61.8%", label: "answer accuracy" },
      { value: "+9.5%", label: "retrieval performance" },
      { value: "0", label: "training runs needed" },
    ],
    stack: ["CLIP", "Pixeltable", "Groq", "FastAPI", "Streamlit", "Vector DB"],
    links: [{ href: "https://github.com/kamilakhtar015/QuadRAG-DL-Project", label: "View on GitHub" }],
  },
];

export const industry = [
  {
    company: "ITA Group",
    url: "https://www.itagroup.com/",
    logo: "img/logos/ita-group.svg",
    color: "#f47b20",
    role: "AI Creative Intelligence Intern",
    when: "Jun 2026 – Present",
    where: "Atlanta, GA",
    headline: { value: "~7 min", label: "to a full creative brief with Brief Kit" },
    items: [
      {
        title: "Brief Kit",
        tag: "LLM tool",
        text: "An internal LLM tool, adopted by a 20-person creative team, that writes a structured end-to-end brief with research, deliverables and creative directions. I owned requirements, scoping and adoption.",
      },
      {
        title: "Event apps",
        tag: "TypeScript · Lovable",
        text: "Digital experience apps for a major retail client's events across a 50,000 sq ft venue, launched on schedule with the design team.",
      },
      {
        title: "Wayfinding floor plan",
        tag: "Interactive map",
        text: "Maps every stall, product zone and exhibit, so attendees find their way and the client approved the layout before build-out.",
      },
      {
        title: "Ordering app",
        tag: "Cloud database",
        text: "Replaced paper sign-up sheets: attendees browse styles, pick sizes and order on the spot.",
      },
    ],
    stack: ["LLM APIs", "Agentic workflows", "TypeScript", "Lovable"],
  },
  {
    company: "Crestview AI",
    url: "https://aiworkforcesystems.ai/",
    logo: "",
    color: "#1a1712",
    role: "AI Integration Intern",
    when: "May – Aug 2025",
    where: "Miami, FL",
    headline: { value: "~70%", label: "less client operational latency" },
    items: [
      {
        title: "AI automation pipelines",
        tag: "Python · n8n · Supabase",
        text: "End-to-end pipelines with LLM APIs (GPT-4o-mini, Mistral) that cut client operational latency by about 70%.",
      },
      {
        title: "Resume analyzer",
        tag: "LLM + embeddings",
        text: "Resume analysis and recommendation tools built on semantic embeddings, replacing manual review in client workflows.",
      },
      {
        title: "Unified data layer",
        tag: "APIs · templates",
        text: "Several third-party APIs standardised into one schema, plus reusable automation templates that cut manual effort by about 50%.",
      },
    ],
    stack: ["Python", "n8n", "Supabase", "GPT-4o-mini", "Mistral", "Embeddings"],
  },
];

export const research = [
  {
    kind: "First-author preprint · bioRxiv 2026",
    title: "High-Frequency Spatial Feature Fusion with 3D CNN for Early-Stage Schizophrenia Classification",
    text: "K. Akhtar, A. Mahadevan. A compact 3D CNN with high-pass spatial feature fusion that reaches 87% peak accuracy, 5.44 points over baseline.",
    link: { href: "https://scholar.google.com/citations?user=Lvcm5Q0AAAAJ&hl=en", label: "Google Scholar" },
    featured: true,
  },
  {
    kind: "TReNDS Center · Graduate Research Assistant · 2025 – 2026",
    title: "Dynamic brain-network connectivity at cohort scale",
    text: "Reproducible pipelines over resting-state fMRI from 1,140+ subjects: sliding-window ICA, two-stage PCA over 5,460 features per window, covariate-adjusted GLMs with FDR correction, validated by 100-iteration subsampling. Scaled to the full cohort on an HPC cluster with SLURM.",
    stats: [
      { value: "1,140+", label: "subjects" },
      { value: "5,460", label: "features per window" },
    ],
  },
  {
    kind: "ALSER Research Lab · AMD-sponsored · Poster 2026",
    title: "MetaBit: fast genomic k-mer indexing",
    text: "Benchmarked ntHash against Minimap2-style bit manipulation in C++ on sequences up to 100M characters: about 107M hashes a second, 90× faster than a Python baseline. Co-authored poster at GSU's 4th Annual Graduate Research Conference.",
    stats: [
      { value: "107M", label: "hashes a second" },
      { value: "90×", label: "faster than Python" },
    ],
  },
];

export const stack = [
  "Python", "PyTorch", "TensorFlow", "LLMs", "RAG", "Agentic AI", "CLIP", "Hugging Face", "FastAPI",
  "Streamlit", "n8n", "Supabase", "PostgreSQL", "Vector DBs", "scikit-learn", "SQL", "Claude Code", "SLURM",
];

export const education = [
  {
    school: "Georgia State University",
    url: "https://www.gsu.edu/",
    logo: "img/logos/gsu.png",
    color: "#0039a6",
    degree: "MS Computer Science",
    when: "Expected Dec 2026",
    where: "Atlanta, GA",
    roles: ["Graduate Research Assistant, TReNDS Center", "Graduate Teaching Assistant, Machine Learning"],
  },
  {
    school: "Institute of Business Administration, Karachi",
    url: "https://iba.edu.pk/",
    logo: "img/logos/iba.jpg",
    color: "#8c1d1d",
    degree: "BS Computer Science",
    when: "May 2024",
    where: "Karachi, Pakistan",
    roles: ["Exchange semester at Universiti Malaya, Kuala Lumpur"],
  },
];
