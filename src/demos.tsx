import { Fragment, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

// Steps advance on their own while the demo is on screen, until the visitor takes over.
function useAutoStep(count: number, ms: number) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [manual, setManual] = useState(false);
  useEffect(() => {
    if (!inView || manual || reduce) return;
    const t = setTimeout(() => setStep((s) => (s + 1) % count), ms);
    return () => clearTimeout(t);
  }, [inView, manual, reduce, step, count, ms]);
  const go = (i: number) => {
    setManual(true);
    setStep(i);
  };
  return { ref, step, go, manual, playing: inView && !manual && !reduce };
}

// A horizontal swipe (finger or mouse) calls back with +1 for next, -1 for previous.
function useSwipe(onSwipe: (dir: 1 | -1) => void) {
  const start = useRef<{ x: number; y: number } | null>(null);
  return {
    onPointerDown: (e: React.PointerEvent) => {
      start.current = { x: e.clientX, y: e.clientY };
    },
    onPointerUp: (e: React.PointerEvent) => {
      const s0 = start.current;
      start.current = null;
      if (!s0) return;
      const dx = e.clientX - s0.x, dy = e.clientY - s0.y;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) onSwipe(dx < 0 ? 1 : -1);
    },
    onPointerCancel: () => {
      start.current = null;
    },
  };
}

const arrowDir = (e: React.KeyboardEvent) => (e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0);

// A ring that fills to `value` (0–1), with the headline number in the middle.
function Gauge({ value, text, label, delay = 0.8, children }: { value: number; text: string; label: string; delay?: number; children?: React.ReactNode }) {
  return (
    <div className="gauge-wrap">
      <svg viewBox="0 0 120 120" className="gauge" aria-hidden="true">
        <circle cx="60" cy="60" r="50" />
        <motion.circle
          cx="60"
          cy="60"
          r="50"
          className="gauge-fill"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: value }}
          transition={{ duration: 1.2, ease, delay }}
        />
      </svg>
      {children}
      <motion.div className="gauge-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay, duration: 0.4 }}>
        <strong>{text}</strong>
        <span>{label}</span>
      </motion.div>
    </div>
  );
}

/* ButterFly: an app window. Story-style segments on top, the interview on the left, the canvas on the right. */

const bfSteps = ["Interview", "Render", "Copy", "Critique", "Export"];
const bfChat = [
  { q: "Who should this banner speak to?", a: "Early adopters who shoot outdoors", pick: true },
  { q: "What mood fits the product?", a: "Calm, golden hour", pick: true },
  { q: "Where should the product sit?", a: "On a rock, river behind it", pick: false },
  { q: "What's the offer?", a: "Launch week, free case", pick: false },
];
const bfCritique = ["Focal clarity", "Copy space", "Colour harmony", "Product prominence", "Polish"];
const bfLayers = ["Background", "Product cut-out", "Headline", "Call to action"];

export function ButterflyDemo() {
  const { ref, step, go, playing } = useAutoStep(bfSteps.length, 2600);
  const nav = (dir: number) => go((step + dir + bfSteps.length) % bfSteps.length);
  const swipe = useSwipe(nav);
  return (
    <div className="bf" ref={ref}>
      <div className="bf-bar">
        <span className="bf-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="bf-title">ButterFly · sample session</span>
      </div>
      <div className="bf-segments" role="tablist" aria-label="ButterFly steps">
        {bfSteps.map((s, i) => (
          <button key={s} role="tab" aria-selected={i === step} onClick={() => go(i)} className="bf-seg">
            <span className="bf-seg-track">
              <span
                className={"bf-seg-fill" + (i < step ? " is-done" : "") + (i === step && playing ? " is-playing" : "") + (i === step && !playing ? " is-done" : "")}
              />
            </span>
            {s}
          </button>
        ))}
      </div>
      <div className="bf-body">
        <div className="bf-chat" aria-live="polite">
          {step === 0 ? (
            bfChat.map((c, i) => (
              <motion.div
                key={c.q}
                className="bf-turn"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease, delay: i * 0.4 }}
              >
                <p className="bf-q">{c.q}</p>
                <p className="bf-a">
                  {c.a}
                  {c.pick && <span className="bf-pick">recommended</span>}
                </p>
              </motion.div>
            ))
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                className="bf-note"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease }}
              >
                {step === 1 && (
                  <>
                    <strong>Rendering on this laptop</strong>
                    <p>The answers become one art-direction prompt. FLUX.1-schnell renders it locally and rembg cuts out the real product.</p>
                    <div className="bf-progress">
                      <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.9, ease: "linear" }} />
                    </div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <strong>Copy is never drawn by the image model</strong>
                    <p>Headline, kicker and call to action are set as crisp HTML and placed where the image leaves room.</p>
                  </>
                )}
                {step === 3 && (
                  <>
                    <strong>The vision model reviews its own banner</strong>
                    <ul className="bf-checks">
                      {bfCritique.map((c, i) => (
                        <motion.li key={c} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.16 }}>
                          {c}
                        </motion.li>
                      ))}
                    </ul>
                    <p className="bf-fix">Suggested fix: raise headline contrast. Tick it and regenerate.</p>
                  </>
                )}
                {step === 4 && (
                  <>
                    <strong>Export</strong>
                    <p>A flat PNG, or a layered PSD with one layer per element, ready for a designer.</p>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
        <div
          className={"bf-canvas bf-step-" + step}
          {...swipe}
          tabIndex={0}
          aria-label="Banner canvas. Swipe or use the arrow keys to change step."
          onKeyDown={(e) => arrowDir(e) && nav(arrowDir(e))}
        >
          {step < 4 ? (
            <div className="bf-art">
              <img src="img/butterfly.png" alt="Banner rendered by ButterFly" />
              <div className="bf-copy" aria-hidden={step < 2}>
                <span className="bf-kicker">New</span>
                <span className="bf-headline">Made for golden hour</span>
                <span className="bf-cta">Shop the launch</span>
              </div>
              {step === 3 && <span className="bf-flag">Copy contrast</span>}
            </div>
          ) : (
            <div className="bf-layers">
              {bfLayers.map((l, i) => (
                <motion.div
                  key={l}
                  className={"bf-layer bf-layer-" + i}
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: i * -26, x: i * 22, opacity: 1 }}
                  transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                >
                  <span>{l}</span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
      <p className="demo-note">Illustrative replay of the real pipeline. Banner is real ButterFly output; chat answers and copy are sample text.</p>
    </div>
  );
}

/* Schizophrenia paper: a scan viewer. A slice slider, a draggable comparison wipe, then the network. */

const mriSteps = ["Scan", "High-pass", "Fusion", "3D CNN", "Result"];

function highPass(img: HTMLImageElement) {
  const w = img.naturalWidth, h = img.naturalHeight;
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d")!;
  ctx.drawImage(img, 0, 0);
  const src = ctx.getImageData(0, 0, w, h);
  const g = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) g[i] = src.data[i * 4];
  // Box blur (radius 3) on rows then columns; the high-pass is the original minus the blur.
  const r = 3, tmp = new Float32Array(w * h), blur = new Float32Array(w * h);
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      let s = 0, n = 0;
      for (let k = -r; k <= r; k++) {
        const xx = x + k;
        if (xx >= 0 && xx < w) {
          s += g[y * w + xx];
          n++;
        }
      }
      tmp[y * w + x] = s / n;
    }
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      let s = 0, n = 0;
      for (let k = -r; k <= r; k++) {
        const yy = y + k;
        if (yy >= 0 && yy < h) {
          s += tmp[yy * w + x];
          n++;
        }
      }
      blur[y * w + x] = s / n;
    }
  const out = ctx.createImageData(w, h);
  for (let i = 0; i < w * h; i++) {
    const v = Math.min(255, Math.abs(g[i] - blur[i]) * 4);
    out.data[i * 4] = Math.min(255, v * 1.15);
    out.data[i * 4 + 1] = v * 0.55;
    out.data[i * 4 + 2] = v * 0.3;
    out.data[i * 4 + 3] = 255;
  }
  ctx.putImageData(out, 0, 0);
  return c.toDataURL("image/jpeg", 0.85);
}

const slices = [1, 2, 3, 4, 5].map((n) => `img/mri/slice-${n}.jpg`);
const loadImg = (src: string) =>
  new Promise<HTMLImageElement>((res) => {
    const i = new Image();
    i.onload = () => res(i);
    i.src = src;
  });

// The fused view (original + high-pass) and the coarser and coarser maps a CNN would reduce it to.
function derive(orig: HTMLImageElement, hp: HTMLImageElement) {
  const w = orig.naturalWidth, h = orig.naturalHeight;
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d")!;
  ctx.drawImage(orig, 0, 0);
  ctx.globalCompositeOperation = "screen";
  ctx.drawImage(hp, 0, 0);
  const fused = c.toDataURL("image/jpeg", 0.85);
  const maps = [40, 20, 10, 5].map((n) => {
    const small = document.createElement("canvas");
    small.width = small.height = n;
    small.getContext("2d")!.drawImage(c, 0, 0, n, n);
    const big = document.createElement("canvas");
    big.width = big.height = 240;
    const b = big.getContext("2d")!;
    b.imageSmoothingEnabled = false;
    b.drawImage(small, 0, 0, 240, 240);
    return big.toDataURL("image/png");
  });
  return { fused, maps };
}

type Derived = { hp: string; fused: string; maps: string[] };

export function MriDemo() {
  const { ref, step, go, playing } = useAutoStep(mriSteps.length, 4200);
  const [slice, setSlice] = useState(2);
  const [wipe, setWipe] = useState(50);
  const [derived, setDerived] = useState<Record<number, Derived>>({});
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (derived[slice]) return;
    let live = true;
    (async () => {
      const orig = await loadImg(slices[slice]);
      const hpUrl = highPass(orig);
      const hp = await loadImg(hpUrl);
      const d = derive(orig, hp);
      if (live) setDerived((x) => ({ ...x, [slice]: { hp: hpUrl, ...d } }));
    })();
    return () => {
      live = false;
    };
  }, [slice, derived]);

  // While autoplaying the high-pass step, sweep the wipe so the comparison is visible without a drag.
  useEffect(() => {
    if (step !== 1 || !playing) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      setWipe(50 + 38 * Math.sin((t - t0) / 700));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [step, playing]);

  const drag = (e: React.PointerEvent) => {
    if (e.buttons !== 1 && e.type !== "pointerdown") return;
    const r = stageRef.current!.getBoundingClientRect();
    setWipe(Math.max(0, Math.min(100, ((e.clientX - r.left) / r.width) * 100)));
    go(1);
  };

  const moveSlice = (dir: number) => {
    setSlice((s) => Math.max(0, Math.min(slices.length - 1, s + dir)));
    go(step);
  };
  const swipe = useSwipe(moveSlice);
  const canSwipe = step === 0 || step === 2;

  const d = derived[slice];
  const captions = [
    "A 3D MRI volume is a stack of slices. Swipe across the scan to move through it.",
    "Drag across the scan. The high-pass filter runs live in your browser and keeps only fine structure.",
    "Original and high-pass views are fused into one input, so the network sees both.",
    "Each 3D convolution layer condenses the fused brain into coarser, richer feature maps.",
    "The final features become one prediction: early-stage schizophrenia or healthy control.",
  ];
  return (
    <div className="mri" ref={ref}>
      <div className="mri-rail" role="tablist" aria-label="Method steps">
        <span className="mri-rail-line" aria-hidden="true">
          <motion.span
            initial={false}
            animate={{ scaleY: step / (mriSteps.length - 1) }}
            transition={{ duration: 0.6, ease }}
          />
        </span>
        {mriSteps.map((s, i) => (
          <button
            key={s}
            role="tab"
            aria-selected={i === step}
            onClick={() => go(i)}
            className={"mri-step" + (i < step ? " is-past" : "")}
          >
            <span className="mri-step-dot" aria-hidden="true" />
            {s}
          </button>
        ))}
      </div>
      <div className="mri-main">
        <div
          className={"mri-stage mri-stage-" + step}
          ref={stageRef}
          onPointerDown={step === 1 ? drag : canSwipe ? swipe.onPointerDown : undefined}
          onPointerMove={step === 1 ? drag : undefined}
          onPointerUp={canSwipe ? swipe.onPointerUp : undefined}
          onPointerCancel={swipe.onPointerCancel}
          tabIndex={0}
          aria-label="MRI viewer. Use the left and right arrow keys to change slice."
          onKeyDown={(e) => {
            const dir = arrowDir(e);
            if (!dir || step > 2) return;
            e.preventDefault();
            if (step === 1) {
              setWipe((w) => Math.max(0, Math.min(100, w + dir * 10)));
              go(1);
            } else moveSlice(dir);
          }}
        >
          {/* One brain, carried through every step. */}
          <div className="brain">
            {step === 0 &&
              slices.map((s, i) => (
                <motion.img
                  key={s}
                  layoutId={i === slice ? "brain-main" : undefined}
                  src={s}
                  alt={i === slice ? `Axial MRI slice ${slice + 1} of ${slices.length}` : ""}
                  className="brain-layer brain-stack"
                  initial={false}
                  animate={{
                    y: (i - slice) * -34,
                    x: (i - slice) * 26,
                    scale: i === slice ? 1 : 0.9,
                    opacity: i === slice ? 1 : Math.abs(i - slice) > 2 ? 0 : 0.45,
                    zIndex: 10 - Math.abs(i - slice),
                  }}
                  transition={{ duration: 0.5, ease }}
                />
              ))}
            {(step === 1 || step === 2) && (
              <>
                <motion.img
                  layoutId="brain-main"
                  className="brain-layer"
                  src={slices[slice]}
                  alt={`Axial MRI slice ${slice + 1}`}
                  transition={{ duration: 0.7, ease }}
                />
                {d && (
                  <motion.img
                    key={"hp" + step}
                    className={"brain-layer " + (step === 2 ? "brain-fuse" : "")}
                    src={d.hp}
                    alt=""
                    style={step === 1 ? { clipPath: `inset(0 0 0 ${wipe}%)` } : undefined}
                    initial={step === 2 ? { x: "35%", opacity: 0 } : false}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease }}
                  />
                )}
              </>
            )}
            {step === 3 && d && (
              <div className="brain-maps">
                {[d.fused, ...d.maps].map((m, i, all) => (
                  <Fragment key={i}>
                    {i > 0 && (
                      <motion.span
                        className="brain-arrow"
                        aria-hidden="true"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.3, ease, delay: 0.5 + i * 0.35 }}
                      />
                    )}
                    <motion.figure
                      className="brain-map"
                      initial={i === 0 ? false : { opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0, scale: 1 - i * 0.12 }}
                      transition={{ duration: 0.5, ease, delay: i === 0 ? 0 : 0.6 + i * 0.35 }}
                    >
                      <motion.img
                        layoutId={i === 0 ? "brain-main" : i === all.length - 1 ? "brain-last" : undefined}
                        transition={{ duration: 0.8, ease }}
                        src={m}
                        alt=""
                      />
                      <figcaption>{i === 0 ? "Fused input" : `Layer ${i}`}</figcaption>
                    </motion.figure>
                  </Fragment>
                ))}
              </div>
            )}
            {step === 4 && d && (
              <div className="brain-result">
                <Gauge value={0.87} text="87%" label="peak accuracy" delay={1}>
                  {/* The last 5×5 feature map travels into the ring: the features become the decision. */}
                  <motion.img
                    layoutId="brain-last"
                    className="brain-final"
                    src={d.maps[3]}
                    alt=""
                    animate={{ scale: 0.2, opacity: 0 }}
                    transition={{ layout: { duration: 0.7, ease }, default: { duration: 0.5, ease, delay: 0.7 } }}
                  />
                </Gauge>
                <div className="mri-out">
                  <div className="mri-classes" aria-label="Classifier output">
                    {(
                      [
                        ["Early-stage schizophrenia", 0.78],
                        ["Healthy control", 0.22],
                      ] as const
                    ).map(([label, v], i) => (
                      <div key={label} className={"mri-class" + (i === 0 ? " is-top" : "")}>
                        <span>{label}</span>
                        <span className="mri-class-bar">
                          <motion.span
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: v }}
                            transition={{ duration: 0.8, ease, delay: 1 + i * 0.1 }}
                          />
                        </span>
                      </div>
                    ))}
                  </div>
                  <ul className="mri-facts">
                    <li>
                      <strong>+5.44</strong> points over baseline
                    </li>
                    <li>
                      <strong>1.4M</strong> parameters
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <motion.span
            key={"sweep" + step}
            className="mri-sweep"
            aria-hidden="true"
            initial={{ x: "-30%", opacity: 1 }}
            animate={{ x: "130%", opacity: 0.2 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          />
          {step === 1 && (
            <span className="mri-handle" style={{ left: `${wipe}%` }} aria-hidden="true">
              <span />
            </span>
          )}
          <span className="mri-label mri-label-l">
            {["MRI volume", "Original", "Fused input", "3D CNN feature maps", "Prediction"][step]}
          </span>
          {step === 1 && <span className="mri-label mri-label-r">High-pass</span>}
        </div>
        {step <= 2 && (
          <label className="mri-slider">
            <span>Slice {slice + 1} / {slices.length}</span>
            <input
              type="range"
              min={0}
              max={slices.length - 1}
              value={slice}
              onChange={(e) => {
                setSlice(+e.target.value);
                go(step);
              }}
            />
          </label>
        )}
        <AnimatePresence mode="wait">
          <motion.p
            key={step}
            className="mri-caption"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {captions[step]}
          </motion.p>
        </AnimatePresence>
        <p className="demo-note">Public sample MRI (Wikimedia Commons), not study data. Feature maps and classifier output are a visual analogy.</p>
      </div>
    </div>
  );
}

/* QuadRAG: a query console. Pick a question, run it, watch four lanes retrieve, fuse and answer. */

type Hit = { lane: number; label: string };
const lanes = ["Image · CLIP", "Audio · transcript", "Description", "Domain caption"];
const questions = [
  {
    q: "When does the diagram first appear?",
    hits: [
      { lane: 0, label: "Frame 00:42" },
      { lane: 2, label: "“whiteboard with a flow diagram”" },
      { lane: 1, label: "“as you can see in this diagram…”" },
      { lane: 3, label: "Architecture overview" },
      { lane: 0, label: "Frame 01:05" },
    ],
    answer: "The diagram first appears at about 00:42 [Image], and the speaker starts walking through it at 01:05 [Audio].",
  },
  {
    q: "What problem is the speaker solving?",
    hits: [
      { lane: 1, label: "“the hard part is retrieval…”" },
      { lane: 3, label: "Problem statement" },
      { lane: 2, label: "“speaker at a podium, slide title”" },
      { lane: 0, label: "Frame 00:08" },
      { lane: 1, label: "“single index misses context”" },
    ],
    answer: "They argue one index misses context in video, so retrieval must combine what is seen and said [Audio][Caption].",
  },
  {
    q: "Which slide shows the results?",
    hits: [
      { lane: 0, label: "Frame 03:17" },
      { lane: 2, label: "“bar chart comparing methods”" },
      { lane: 3, label: "Results" },
      { lane: 1, label: "“and here are our numbers”" },
      { lane: 0, label: "Frame 03:21" },
    ],
    answer: "The results slide is at about 03:17, a bar chart comparing methods [Image][Description].",
  },
];
const phases = ["Embed query", "Search 4 indexes", "Fuse and rank", "Answer", "Result"];

export function QuadDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4, once: true });
  const reduce = useReducedMotion();
  const [qi, setQi] = useState(0);
  const [phase, setPhase] = useState(-1);
  const [typed, setTyped] = useState("");
  const run = useRef(0);

  const start = (i: number) => {
    setQi(i);
    const id = ++run.current;
    setTyped("");
    if (reduce) {
      setPhase(4);
      setTyped(questions[i].answer);
      return;
    }
    setPhase(0);
    const at = (ms: number, fn: () => void) => setTimeout(() => run.current === id && fn(), ms);
    at(600, () => setPhase(1));
    at(2200, () => setPhase(2));
    at(3600, () => {
      setPhase(3);
      const text = questions[i].answer;
      let n = 0;
      const t = setInterval(() => {
        if (run.current !== id) return clearInterval(t);
        n += 2;
        setTyped(text.slice(0, n));
        if (n >= text.length) {
          clearInterval(t);
          at(900, () => setPhase(4));
        }
      }, 24);
    });
  };

  useEffect(() => {
    if (inView && phase === -1) start(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const q = questions[qi];
  const fused: Hit[] = q.hits;
  const swipe = useSwipe((dir) => start((qi + dir + questions.length) % questions.length));
  return (
    <div className="qr" ref={ref}>
      <div className="qr-ask">
        <p className="qr-label">Ask the video</p>
        <div className="qr-chips">
          {questions.map((x, i) => (
            <button key={x.q} type="button" className={"qr-chip" + (i === qi ? " is-on" : "")} onClick={() => start(i)}>
              {x.q}
            </button>
          ))}
        </div>
      </div>
      <ol className="qr-phases" aria-label="Pipeline phase">
        {phases.map((p, i) => (
          <li key={p} className={i < phase ? "is-done" : i === phase ? "is-on" : undefined}>
            {p}
          </li>
        ))}
      </ol>
      <div className="qr-body" {...swipe}>
        <AnimatePresence mode="wait" initial={false}>
          {phase < 4 ? (
            <motion.div key="lanes" exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.25 }}>
              <div className="qr-lanes">
                {lanes.map((l, li) => (
                  <div className="qr-lane" key={l}>
                    <span className="qr-lane-name">{l}</span>
                    <div className="qr-lane-hits">
                      {phase >= 1 &&
                        q.hits
                          .filter((h) => h.lane === li)
                          .map((h, i) => (
                            <motion.span
                              key={qi + h.label}
                              className={"qr-hit lane-" + li}
                              initial={{ opacity: 0, x: -14 }}
                              animate={{ opacity: phase >= 2 ? 0.35 : 1, x: 0 }}
                              transition={{ duration: 0.35, ease, delay: 0.2 * li + i * 0.15 }}
                            >
                              {h.label}
                            </motion.span>
                          ))}
                      {phase === 1 && <span className="qr-scan" aria-hidden="true" />}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              className="qr-result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Gauge value={0.618} text="61.8%" label="answer accuracy" delay={0.7}>
                {/* The four indexes converge into one score. */}
                {lanes.map((l, li) => (
                  <motion.span
                    key={l}
                    className={"qr-merge lane-" + li}
                    aria-hidden="true"
                    initial={{ x: [-90, 90, -90, 90][li], y: [-70, -70, 70, 70][li], opacity: 1 }}
                    animate={{ x: 0, y: 0, opacity: 0, scale: 0.4 }}
                    transition={{ duration: 0.7, ease, delay: li * 0.06 }}
                  />
                ))}
              </Gauge>
              <div className="qr-result-facts">
                <p className="qr-label">Four indexes, one answer</p>
                <ul className="mri-facts">
                  <li>
                    <strong>+9.5%</strong> retrieval performance
                  </li>
                  <li>
                    <strong>0</strong> training runs
                  </li>
                </ul>
                <button type="button" className="qr-chip" onClick={() => start((qi + 1) % questions.length)}>
                  Ask the next question →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="qr-fused">
          <p className="qr-label">Fused ranking</p>
          <ol>
            <AnimatePresence>
              {phase >= 2 &&
                fused.map((h, i) => (
                  <motion.li
                    layout
                    key={qi + h.label}
                    className={"qr-rank lane-" + h.lane}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", duration: 0.5, bounce: 0.15, delay: i * 0.12 }}
                  >
                    <span className="qr-rank-n">{i + 1}</span>
                    {h.label}
                  </motion.li>
                ))}
            </AnimatePresence>
          </ol>
          <div className="qr-answer" aria-live="polite">
            {phase >= 3 && (
              <>
                <p className="qr-label">LLM answer</p>
                <p>
                  {typed}
                  {typed.length < q.answer.length && <span className="caret" aria-hidden="true" />}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <p className="demo-note">Illustrative walkthrough of the real architecture. Questions, hits and answers are sample text, not model output.</p>
    </div>
  );
}
