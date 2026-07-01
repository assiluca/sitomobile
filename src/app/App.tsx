import { useRef, useLayoutEffect } from "react";
import { motion, useMotionValue } from "motion/react";
import svgPaths from "@/imports/MobileIntroEOutro/svg-by72vn00th";
import imgPhoto1 from "@/imports/MobileIntroEOutro/805759dbd082a7888f0f0962a94316df3572ec71.png";
import imgPhoto2 from "@/imports/MobileIntroEOutro/e2c078892a5753817a7bd866e3aeb2591c9cf37a.png";

// ─── Palette & fonts ──────────────────────────────────────────────────────────
const PINK   = "#dc3ecc";
const BLUE   = "#533edc";
const RED    = "#dc3e41";
const YELLOW = "#dc953e";
const LIGHT  = "#f3f3f3";
const DARK   = "#151515";

// Commercial fonts loaded via Typekit + Google Fonts fallbacks
const FH  = "'dharma-gothic-e', 'Dharma Gothic E', 'Bebas Neue', sans-serif"; // Heavy
const FEB = "'dharma-gothic-e', 'Dharma Gothic E', 'Barlow Condensed', sans-serif"; // ExBold
const FR  = "'gelica', 'Gelica', 'DM Sans', system-ui, sans-serif"; // Regular / Light

const ease = [0.16, 1, 0.3, 1] as const;

// ─── Primitives ───────────────────────────────────────────────────────────────

function FadeUp({
  children, delay = 0, style, className,
}: {
  children: React.ReactNode; delay?: number;
  style?: React.CSSProperties; className?: string;
}) {
  return (
    <motion.div
      className={className} style={style}
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease, delay }}
      viewport={{ once: true, margin: "-40px" }}
    >
      {children}
    </motion.div>
  );
}

function DrawLine({
  d, stroke, strokeWidth, viewBox, w, h, style, delay = 0, lj = "round" as const,
}: {
  d: string; stroke: string; strokeWidth: number; viewBox: string;
  w: number; h: number; style?: React.CSSProperties; delay?: number;
  lj?: "round" | "bevel" | "miter";
}) {
  return (
    <svg fill="none" viewBox={viewBox} style={{ width: w, height: h, overflow: "visible", ...style }}>
      <motion.path
        d={d} stroke={stroke} strokeWidth={strokeWidth}
        strokeLinejoin={lj} fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay }}
        viewport={{ once: true, margin: "-80px" }}
      />
    </svg>
  );
}

// ─── Status bar ───────────────────────────────────────────────────────────────

function StatusBar({ color = LIGHT }: { color?: string }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "12px 24px 4px", color, position: "relative", zIndex: 20,
    }}>
      <span style={{ fontFamily: "system-ui", fontSize: 14, fontWeight: 600 }}>9:41</span>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <svg width="17" height="11" viewBox="0 0 19.2 12.2264" fill="none">
          <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="currentColor" fillRule="evenodd" />
        </svg>
        <svg width="15" height="11" viewBox="0 0 17.1417 12.3283" fill="none">
          <path clipRule="evenodd" d={svgPaths.p18b35300} fill="currentColor" fillRule="evenodd" />
        </svg>
        <svg width="24" height="12" viewBox="0 0 27.328 13" fill="none">
          <rect height="12" opacity="0.35" rx="3.8" stroke="currentColor" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p7a14d80} fill="currentColor" opacity="0.4" />
          <rect fill="currentColor" height="9" rx="2.5" width="21" x="2" y="2" />
        </svg>
      </div>
    </div>
  );
}

// ─── 1. INTRO (Pink / Magenta) — 875 px ───────────────────────────────────────

function IntroScreen() {
  return (
    <section style={{ background: PINK, height: 875, position: "relative", overflow: "hidden" }}>
      <StatusBar />

      {/* "22 000 000 000" — original: left calc(25%+3.5px)=104px top-224 fs-180 lh-144 */}
      <div style={{
        position: "absolute", left: 104, top: 224, zIndex: 5,
        fontFamily: FEB, fontWeight: 800, fontSize: 180,
        color: LIGHT, textTransform: "uppercase", lineHeight: "144px",
      }}>
        {["22", "000", "000", "000"].map((row, i) => (
          <motion.p key={i} style={{ margin: 0 }}
            initial={{ x: 90, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.95, ease, delay: 0.45 + i * 0.1 }}
          >{row}</motion.p>
        ))}
      </div>
    </section>
  );
}

// ─── 2. VISUALIZZAZIONI (Blue) — 875 px ───────────────────────────────────────

function VisualizzazioniScreen() {
  return (
    <section style={{ background: BLUE, height: 875, position: "relative", overflow: "hidden" }}>
      {/* "22" — original Group6: left-24 top-243 (=1118-875) fs-250 lh-150 */}
      <motion.p style={{
        position: "absolute", left: 24, top: 243,
        fontFamily: FEB, fontWeight: 800, fontSize: 250, lineHeight: "150px",
        color: "#fff", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0, zIndex: 2,
      }}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease }} viewport={{ once: true }}
      >22</motion.p>

      {/* "mld" — original Group6: left=calc(50%+5px) top=242.5 -translate-y-1/2 h=59 w=60 flex-col justify-center leading-0 → inner p leading=150px */}
      <motion.div style={{
        position: "absolute", left: "calc(50% + 5px)", top: 242.5,
        transform: "translateY(-50%)",
        display: "flex", flexDirection: "column", justifyContent: "center",
        height: 59, width: 60, lineHeight: 0,
        fontFamily: FEB, fontWeight: 800, fontSize: 50,
        color: "#fff", textTransform: "uppercase", zIndex: 2,
      }}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease }} viewport={{ once: true }}
      >
        <p style={{ lineHeight: "150px", margin: 0 }}>mld</p>
      </motion.div>

      {/* "VISUALIZZAZIONI" — original: left-25 top-406 (=1281-875) Heavy fs-72 */}
      <FadeUp delay={0.4} style={{ position: "absolute", left: 25, top: 406, width: 353, zIndex: 2 }}>
        <p style={{ fontFamily: FH, fontWeight: 700, fontSize: 72, lineHeight: "normal", color: "#fff", textTransform: "uppercase", margin: 0 }}>
          VISUALIZZAZIONI
        </p>
      </FadeUp>

      {/* Body text — original Frame2: left-24 top-476 (=1351-875) Gelica Regular 20px w-319 */}
      <FadeUp delay={0.7} style={{ position: "absolute", left: 24, top: 476, padding: 10, zIndex: 2 }}>
        <p style={{ fontFamily: FR, fontSize: 20, lineHeight: "normal", color: LIGHT, width: 319, margin: 0 }}>
          Quasi tre volte l&apos;intera popolazione mondiale. Un flusso ininterrotto di sguardi incollati ai video di queste Olimpiadi Invernali.
        </p>
      </FadeUp>
    </section>
  );
}

// ─── 3. INTERAZIONI (Red) — 874 px ────────────────────────────────────────────

function InterazioniScreen() {
  return (
    <section style={{ background: RED, height: 874, position: "relative", overflow: "hidden" }}>
      {/* "1.0" — original Group5: left-21 top-271 fs-250 lh-150 */}
      <motion.p style={{
        position: "absolute", left: 21, top: 271,
        fontFamily: FEB, fontWeight: 800, fontSize: 250, lineHeight: "150px",
        color: "#fff", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0, zIndex: 2,
      }}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease }} viewport={{ once: true }}
      >1.0</motion.p>

      {/* "mld" — original Group5: left=203 top=270.5 -translate-y-1/2 h=59 w=60 flex-col justify-center leading-0 → inner p leading=150px */}
      <motion.div style={{
        position: "absolute", left: 203, top: 270.5,
        transform: "translateY(-50%)",
        display: "flex", flexDirection: "column", justifyContent: "center",
        height: 59, width: 60, lineHeight: 0,
        fontFamily: FEB, fontWeight: 800, fontSize: 50,
        color: "#fff", textTransform: "uppercase", zIndex: 2,
      }}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease }} viewport={{ once: true }}
      >
        <p style={{ lineHeight: "150px", margin: 0 }}>mld</p>
      </motion.div>

      {/* "INTERAZIONI" — original Group4: left-24 top-430 Heavy fs-72 */}
      <FadeUp delay={0.4} style={{ position: "absolute", left: 24, top: 430, zIndex: 2 }}>
        <p style={{ fontFamily: FH, fontWeight: 700, fontSize: 72, lineHeight: "normal", color: "#fff", textTransform: "uppercase", margin: 0, width: 322 }}>
          INTERAZIONI
        </p>
      </FadeUp>

      {/* Body text — original: left-23 top-516 w-347 */}
      <FadeUp delay={0.7} style={{ position: "absolute", left: 23, top: 516, zIndex: 2 }}>
        <p style={{ fontFamily: FR, fontSize: 20, lineHeight: "normal", color: LIGHT, width: 347, margin: 0 }}>
          Un&apos;ondata di commenti, condivisioni e reazioni. Il pubblico ha partecipato attivamente a ogni singolo istante dei Giochi.
        </p>
      </FadeUp>
    </section>
  );
}

// ─── 4. POST PUBBLICATI (Yellow) — 872 px, rounded-[32px] ────────────────────

function PostPubblicatiScreen() {
  return (
    <section style={{ background: YELLOW, height: 872, position: "relative", overflow: "hidden", borderRadius: 32 }}>
      {/* "27" — original Group3: left-23 top-280 fs-250 lh-150 */}
      <motion.p style={{
        position: "absolute", left: 23, top: 280,
        fontFamily: FEB, fontWeight: 800, fontSize: 250, lineHeight: "150px",
        color: "#fff", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0, zIndex: 2,
      }}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease }} viewport={{ once: true }}
      >27</motion.p>

      {/* "mln" — original Group3: left=205 top=279.5 -translate-y-1/2 h=59 w=75 flex-col justify-center leading-0 → inner p leading=150px */}
      <motion.div style={{
        position: "absolute", left: 205, top: 279.5,
        transform: "translateY(-50%)",
        display: "flex", flexDirection: "column", justifyContent: "center",
        height: 59, width: 75, lineHeight: 0,
        fontFamily: FEB, fontWeight: 800, fontSize: 50,
        color: "#fff", textTransform: "uppercase", zIndex: 2,
      }}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease }} viewport={{ once: true }}
      >
        <p style={{ lineHeight: "150px", margin: 0 }}>mln</p>
      </motion.div>

      {/* "POST PUBBLICATI" — original: left-23 top-430 Heavy fs-72 w-364 */}
      <FadeUp delay={0.4} style={{ position: "absolute", left: 23, top: 430, zIndex: 2 }}>
        <p style={{ fontFamily: FH, fontWeight: 700, fontSize: 72, lineHeight: "normal", color: "#fff", textTransform: "uppercase", margin: 0, width: 364 }}>
          POST PUBBLICATI
        </p>
      </FadeUp>

      {/* Body text — original: left-23 top-524 w-356 */}
      <FadeUp delay={0.7} style={{ position: "absolute", left: 23, top: 524, zIndex: 2 }}>
        <p style={{ fontFamily: FR, fontSize: 20, lineHeight: "normal", color: LIGHT, width: 356, margin: 0 }}>
          La voglia di esserci ha inondato i social, tra racconti in prima persona e un&apos;infinita x di meme.
        </p>
      </FadeUp>
    </section>
  );
}

// ─── 5. VIDEO — title sticky in background, cards scroll over it ──────────────
// Title: sticky z:1, big (163px as original). Cards: z:2, scroll on top covering title.

const VIDEO_ROTATIONS = [-7.3, 7, -3.8, 2.1, -5.2, 4.5, -2.7, 6.1, -4.4, 3.2,
  -6.5, 5.8, -3.1, 1.8, -5.9, 4.0, -2.3, 6.7, -4.0, 2.8];
const VIDEO_SHADES = [
  "#3d2fb8","#2e22a0","#4a3cc4","#241a8c","#5540d4",
  "#3a2aac","#2a1e94","#4636bc","#2c1f98","#4030b0",
  "#341e6e","#1e1680","#4228a8","#261a86","#3e2eb6",
  "#321c7a","#1c1478","#402ab0","#2a1e90","#3c2cb4",
];

function VideoScreen() {
  const words = ["TU", "HAI", "VISTO", "QUESTI", "VIDEO?"];

  return (
    <section style={{ background: BLUE, position: "relative" }}>

      {/* ── Sticky title — exact original size (163px Heavy, left=19 top=163 w=383 lh=137) */}
      {/* z-index: 1 so cards (z:2) scroll over and cover it */}
      <div style={{
        position: "sticky",
        top: 0,
        height: 874, // original section height → title stays exposed this long
        zIndex: 1,
        background: BLUE,
        overflow: "hidden",
        pointerEvents: "none",
      }}>
        <div style={{ position: "absolute", left: 19, top: 163, width: 383 }}>
          <p style={{
            fontFamily: FH, fontWeight: 700, fontSize: 163,
            lineHeight: "137px", color: "#fff", textTransform: "uppercase",
            margin: 0, wordBreak: "break-word",
          }}>
            {words.map((word, i) => (
              <motion.span
                key={word}
                style={{ display: "inline-block", marginRight: i < words.length - 1 ? "0.08em" : 0 }}
                initial={{ opacity: 0, y: 60, skewY: 4 }}
                whileInView={{ opacity: 1, y: 0, skewY: 0 }}
                transition={{ duration: 0.75, ease, delay: 0.12 + i * 0.12 }}
                viewport={{ once: true, margin: "-80px" }}
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>
      </div>

      {/* ── Cards — z:2, scroll over the sticky title.
           NO background on this wrapper: gaps between cards stay transparent,
           so the sticky title (z:1) with its text remains visible underneath. */}
      <div style={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 20,
        padding: "24px 32px 80px",
        marginTop: 0,
      }}>
        {Array.from({ length: 10 }, (_, i) => {
          const rotate = VIDEO_ROTATIONS[i];
          const ml = i % 3 === 0 ? 0 : i % 3 === 1 ? 24 : -14;
          return (
            <motion.div
              key={i}
              style={{
                position: "relative",
                width: 253,
                height: 451,
                borderRadius: 10,
                background: VIDEO_SHADES[i],
                border: "1px solid rgba(255,255,255,0.1)",
                marginLeft: ml,
                flexShrink: 0,
                overflow: "hidden",
              }}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              viewport={{ once: true, margin: "-20px" }}
            >
              {/* Arc */}
              <div style={{ position: "absolute", left: -24, top: 80, width: 200, height: 210, opacity: 0.2 }}>
                <svg viewBox="0 0 341.207 361.844" fill="none" style={{ width: "100%", height: "100%" }}>
                  <path d={svgPaths.p23ad3900} stroke="#fff" strokeWidth={81} />
                </svg>
              </div>
              {/* Play button */}
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: "rgba(255,255,255,0.16)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="16" height="19" viewBox="0 0 16 19" fill="none">
                    <path d="M2 1.5L14 9.5L2 17.5V1.5Z" fill="white" />
                  </svg>
                </div>
              </div>
              {/* Tilt indicator */}
              <div style={{ position: "absolute", bottom: 14, left: 14, fontFamily: FR, fontSize: 11, color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>
                #{i + 1}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// ─── 6. EDITORIAL CONTENT ────────────────────────────────────────────────────
// All coordinates from original global positions minus S=4375 (section start).
// Structure for each element mirrors the Figma import exactly.

function EditorialSection() {
  const S = 4375;
  const t = (g: number) => g - S; // global → section-relative top

  return (
    <section style={{ position: "relative", height: 6580 - S, background: "#fff" }}>

      {/* ── Blue line ── outer flex: left=-23 top=4269 w=619.5 h=471.049
          inner: flex-none rotate(-3.04deg)
          inner-inner: h=440 w=597 → SVG overflows via inset, fits viewBox 615.492×465.178
          Rendered first → text is on top by DOM order */}
      <div style={{
        position: "absolute", left: -23, top: t(4269),
        width: 619.5, height: 471,
        display: "flex", alignItems: "center", justifyContent: "center",
        pointerEvents: "none",
      }}>
        <div style={{ flexShrink: 0, transform: "rotate(-3.04deg)" }}>
          <svg width={615.492} height={465.178} viewBox="0 0 615.492 465.178"
            fill="none" style={{ display: "block", overflow: "visible" }}>
            <motion.path
              d={svgPaths.p8d8ed00} stroke={BLUE} strokeWidth={35}
              strokeLinejoin="round" fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              viewport={{ once: true, margin: "-40px" }}
            />
          </svg>
        </div>
      </div>

      {/* ── Article text 1 ── left=19 top=4509 w=354 — zIndex:1 over the line */}
      <FadeUp delay={0.3} style={{ position: "absolute", left: 19, top: t(4509), width: 354, zIndex: 1 }}>
        <p style={{ fontFamily: FR, fontSize: 20, lineHeight: "normal", color: DARK, margin: 0 }}>
          Le olimpiadi invernali sono state molto condivise sui social, e ne è rilevato è un evento estremamente{" "}
          <span style={{ fontFamily: FR, fontWeight: 600, color: BLUE }}>decentralizzato dallo sport. </span>
        </p>
      </FadeUp>

      {/* ── Red blob ── outer flex: left=-36.34 top=4634 w=356.481 h=550.264
          inner: flex-none rotate(-0.57deg)
          SVG viewBox=349.657×543.083 */}
      <motion.div style={{
        position: "absolute", left: -36.34, top: t(4634),
        width: 356.481, height: 550.264,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease }} viewport={{ once: true, margin: "-60px" }}
      >
        <div style={{ flexShrink: 0, transform: "rotate(-0.57deg)" }}>
          <svg width={349.657} height={543.083} viewBox="0 0 349.657 543.083"
            fill="none" style={{ display: "block" }}>
            <path d={svgPaths.p36945700} fill={RED} />
          </svg>
        </div>
      </motion.div>

      {/* ── Photo 1 ── outer flex: left=51 top=4647 w=319.48 h=591.151
          inner: flex-none rotate(-1.72deg)
          img: 301.034×577.646 */}
      <motion.div style={{
        position: "absolute", left: 51, top: t(4647),
        width: 319.48, height: 591.151,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.15 }} viewport={{ once: true, margin: "-60px" }}
      >
        <div style={{ flexShrink: 0, transform: "rotate(-1.72deg)" }}>
          <img src={imgPhoto1} alt=""
            width={301.034} height={577.646}
            style={{ display: "block", maxWidth: "none" }} />
        </div>
      </motion.div>

      {/* ── Article text 2 ── left=24 top=5267 w=296 zIndex:1 over red line */}
      <FadeUp delay={0.2} style={{ position: "absolute", left: 24, top: t(5267), width: 296, zIndex: 1 }}>
        <p style={{ fontFamily: FR, fontSize: 20, lineHeight: "normal", color: DARK, margin: 0 }}>
          Anche gli utenti che non c&apos;entrano nulla si sono sentiti chiamati in causa a{" "}
          <span style={{ fontFamily: FR, fontWeight: 600, color: RED }}>&quot;recensire&quot;</span>
          {" "}questa olimpiade.{" "}
        </p>
      </FadeUp>

      {/* ── Red line ── outer: left=-353.53 top=5282 w=891.531 h=773.913
          SVG: absolute inset=[-2.23%, 0, -2.26%, -0.33%] → 894.45×808.669
          No flex, no rotation — just a plain container with SVG overflowing inset */}
      <div style={{
        position: "absolute", left: -353.53, top: t(5282),
        width: 891.531, height: 773.913,
        pointerEvents: "none",
      }}>
        <svg
          width={894.45} height={808.669} viewBox="0 0 894.45 808.669"
          fill="none"
          style={{ position: "absolute", left: -2.94, top: -17.26, display: "block", overflow: "visible" }}
        >
          <motion.path
            d={svgPaths.p2c85a380} stroke={RED} strokeWidth={35}
            strokeLinejoin="round" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-60px" }}
          />
        </svg>
      </div>

      {/* ── Yellow blob ── outer flex: left=76 top=5402 w=273.912 h=557.984
          inner: flex-none scaleY(-1) rotate(179.88deg)
          SVG viewBox=271.692×552.387 */}
      <motion.div style={{
        position: "absolute", left: 76, top: t(5402),
        width: 273.912, height: 557.984,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease }} viewport={{ once: true, margin: "-60px" }}
      >
        <div style={{ flexShrink: 0, transform: "scaleY(-1) rotate(179.88deg)" }}>
          <svg width={271.692} height={552.387} viewBox="0 0 271.692 552.387"
            fill="none" style={{ display: "block" }}>
            <path d={svgPaths.p30f93200} fill={YELLOW} />
          </svg>
        </div>
      </motion.div>

      {/* ── Photo 2 ── outer flex: left=59 top=5393 w=281.975 h=519.778
          inner: flex-none scaleY(-1) rotate(-178.11deg)
          img: 264.187×506.625 */}
      <motion.div style={{
        position: "absolute", left: 59, top: t(5393),
        width: 281.975, height: 519.778,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.15 }} viewport={{ once: true, margin: "-60px" }}
      >
        <div style={{ flexShrink: 0, transform: "scaleY(-1) rotate(-178.11deg)" }}>
          <img src={imgPhoto2} alt=""
            width={264.187} height={506.625}
            style={{ display: "block", maxWidth: "none" }} />
        </div>
      </motion.div>

      {/* ── Orange blob ── left=20 top=6108 w=357 h=267
          SVG: absolute inset=[1.31px, 3px, 2.11px, 5.14px] → 348.851×263.568 */}
      <motion.div style={{ position: "absolute", left: 20, top: t(6108), width: 357, height: 267 }}
        initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease }} viewport={{ once: true }}
      >
        <svg width={348.851} height={263.568} viewBox="0 0 348.851 263.568"
          fill="none" style={{ position: "absolute", left: 5.14, top: 1.31 }}>
          <path d={svgPaths.p28465b40} fill={YELLOW} />
        </svg>
      </motion.div>

      {/* ── "Tutti hanno interagito" ── original: -translate-x-1/2 left=197.5 top=6152 w=391 fs=58 ExBold
          left px = 197.5 − 391/2 = 2px  (avoids transform conflict with FadeUp's y animation) */}
      <div style={{ position: "absolute", left: 2, top: t(6152), width: 391, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p style={{ fontFamily: FEB, fontWeight: 800, fontSize: 58, lineHeight: 0.8, color: LIGHT, textTransform: "uppercase", margin: 0 }}>
            Tutti hanno interagito
          </p>
          <p style={{ fontFamily: FEB, fontWeight: 800, fontSize: 58, lineHeight: 0.8, color: LIGHT, textTransform: "uppercase", margin: 0 }}>
            secondo trend prestabiliti
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 7. SCEGLI UN TREND ───────────────────────────────────────────────────────
// global 6580–6718 = 138 px
// "scegli un trend": left=calc(50%-168px)=33px top=0 fs=68 lh=31 Heavy BLUE
// subtitle: -translate-x-1/2 left=50% top=52 Gelica Light 16px tracking=-0.64 w=342

function ScegliSection() {
  return (
    <section style={{ position: "relative", height: 138, background: "#fff" }}>
      <div style={{ position: "absolute", left: 33, top: 0 }}>
        <motion.p
          style={{
            fontFamily: FH, fontWeight: 700, fontSize: 68, lineHeight: "31px",
            color: BLUE, textTransform: "uppercase", margin: 0, whiteSpace: "nowrap",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          viewport={{ once: true }}
        >scegli un trend</motion.p>
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, top: 52, textAlign: "center" }}>
        <motion.p
          style={{
            fontFamily: FR, fontWeight: 300, fontSize: 16, lineHeight: 1.1,
            color: DARK, letterSpacing: -0.64, margin: "0 auto", width: 342,
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          viewport={{ once: true }}
        >Dai un&apos;occhiata alle categorie qui sotto e inizia da quella che ti incuriosisce di più.</motion.p>
      </div>
    </section>
  );
}

// ─── 8. CARDS ─────────────────────────────────────────────────────────────────
// global 6718–7325 = 607 px
// CardRedFull  (red,  256×355): top=0,  left=73
// CardRedFull1 (blue, 212×295): top=30, left=378 (=calc(100%-24px))
// CardRedFull2 (pink, 212×295): top=33, left=-188 — pure SVG

function CardsSection() {
  return (
    <section style={{ position: "relative", height: 607, background: "#fff", overflow: "hidden" }}>

      {/* ── CardRedFull — red 256×355 ── */}
      <motion.div
        style={{ position: "absolute", left: 73, top: 0, width: 256, height: 355, borderRadius: 15, background: RED, overflow: "hidden" }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease }}
        viewport={{ once: true }}
      >
        {/* Arc: flex left=-48 top=120.62 w=337.751 h=359.647, inner rotate(78.29deg), SVG 341.207×361.844 */}
        <div style={{ position: "absolute", left: -48, top: 120.62, width: 337.751, height: 359.647, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ flexShrink: 0, transform: "rotate(78.29deg)" }}>
            <svg width={341.207} height={361.844} viewBox="0 0 341.207 361.844" fill="none" style={{ display: "block" }}>
              <path d={svgPaths.p23ad3900} stroke="#FAA7A9" strokeWidth={81} />
            </svg>
          </div>
        </div>
        {/* Pin icon — left=117 top=37 */}
        <div style={{ position: "absolute", left: 117, top: 37, width: 22, height: 18 }}>
          <svg viewBox="0 0 25 21" fill="none" style={{ position: "absolute", inset: "-1.5px -1.5px", width: 25, height: 21 }}>
            <path d={svgPaths.p2cc48c80} stroke={LIGHT} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
          </svg>
        </div>
        {/* Label — center at (128, 101.5) w=320 */}
        <div style={{ position: "absolute", left: 128, top: 101.5, transform: "translate(-50%,-50%)", width: 320, height: 117, display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
          <p style={{ fontFamily: FEB, fontWeight: 800, fontSize: 45, lineHeight: 0.77, color: LIGHT, textTransform: "uppercase", margin: 0 }}>villaggio</p>
          <p style={{ fontFamily: FEB, fontWeight: 800, fontSize: 45, lineHeight: 0.77, color: LIGHT, textTransform: "uppercase", margin: 0 }}>olimpico</p>
        </div>
      </motion.div>

      {/* ── CardRedFull1 — blue 212×295, left=378 top=30 ── */}
      <motion.div
        style={{ position: "absolute", left: 378, top: 30, width: 212, height: 295, borderRadius: 15, background: BLUE, overflow: "hidden" }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div style={{ position: "absolute", left: -48, top: 30.62, width: 337.751, height: 359.647, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ flexShrink: 0, transform: "rotate(78.29deg)" }}>
            <svg width={333.269} height={341.845} viewBox="0 0 333.269 341.845" fill="none" style={{ display: "block" }}>
              <path d={svgPaths.p510d300} stroke="#8688F3" strokeWidth={61} />
            </svg>
          </div>
        </div>
        <div style={{ position: "absolute", left: 117, top: 37, width: 22, height: 18 }}>
          <svg viewBox="0 0 25 21" fill="none" style={{ position: "absolute", inset: "-1.5px -1.5px", width: 25, height: 21 }}>
            <path d={svgPaths.p2cc48c80} stroke={LIGHT} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
          </svg>
        </div>
        <div style={{ position: "absolute", left: 128, top: 101.5, transform: "translate(-50%,-50%)", width: 320, height: 117, display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
          <p style={{ fontFamily: FEB, fontWeight: 800, fontSize: 45, lineHeight: 0.77, color: LIGHT, textTransform: "uppercase", margin: 0 }}>villaggio</p>
          <p style={{ fontFamily: FEB, fontWeight: 800, fontSize: 45, lineHeight: 0.77, color: LIGHT, textTransform: "uppercase", margin: 0 }}>olimpico</p>
        </div>
      </motion.div>

      {/* ── CardRedFull2 — pink 212×295, left=-188 top=33 — pure SVG ── */}
      <div style={{ position: "absolute", left: -188, top: 33, width: 212, height: 295 }}>
        <svg fill="none" preserveAspectRatio="none" viewBox="0 0 212 295"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <defs>
            <clipPath id="cardpink-clip">
              <rect fill="white" height="295" rx="15" width="212" />
            </clipPath>
          </defs>
          <g clipPath="url(#cardpink-clip)">
            <rect fill={PINK} height="295" rx="15" width="212" />
            <path d={svgPaths.p13def1e0} stroke="#F5B2EF" strokeWidth={61} />
            <path d={svgPaths.pc80e5e0} stroke={LIGHT} strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
          </g>
        </svg>
      </div>

    </section>
  );
}

// ─── 9. WARNING ───────────────────────────────────────────────────────────────
// global 7325–8059 = 734 px
// Group8 blob: left=68 top=0 w=281.634 h=237, inner SVG 230.843×204.321
// "!": -translate-x-1/2 left=205.88 top=69.15 w=80.88 h=142.104 rotate(2.53deg) fs=178 #faa7a9
// "Sei sicuro": centered top=272 w=353 RED tracking=-0.8

function WarningSection() {
  return (
    <section style={{ position: "relative", height: 734, background: "#fff" }}>

      {/* Red blob */}
      <motion.div
        style={{ position: "absolute", left: 68, top: 0, width: 281.634, height: 237 }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease }}
        viewport={{ once: true }}
      >
        <svg width={230.843} height={204.321} viewBox="0 0 230.843 204.321" fill="none"
          style={{ position: "absolute", left: 24.92, top: 28.73 }}>
          <path d={svgPaths.p296cf200} fill={RED} />
        </svg>
      </motion.div>

      {/* "!" — -translate-x-1/2 left=205.88 top=69.15 w=80.88 h=142.104 rotate(2.53deg) */}
      <motion.div
        style={{
          position: "absolute",
          left: 205.88 - 80.88 / 2,
          top: 69.15,
          width: 80.88, height: 142.104,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease, delay: 0.15 }}
        viewport={{ once: true }}
      >
        <div style={{ transform: "rotate(2.53deg)" }}>
          <p style={{ fontFamily: FH, fontWeight: 700, fontSize: 178, lineHeight: 0.8, color: "#faa7a9", textTransform: "uppercase", margin: 0 }}>!</p>
        </div>
      </motion.div>

      {/* "Sei sicuro..." — centered top=272 both paragraphs RED tracking=-0.8 */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 272, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
          viewport={{ once: true }}
        >
          <p style={{ fontFamily: FR, fontWeight: 600, fontSize: 20, lineHeight: 1.1, color: RED, letterSpacing: -0.8, margin: "0 auto", width: 353 }}>
            Sei sicuro di voler continuare?{" "}
          </p>
          <p style={{ fontFamily: FR, fontSize: 20, lineHeight: 1.1, color: RED, letterSpacing: -0.8, margin: "0 auto", width: 353 }}>
            La prossima parte è legata alle 4 card, guardale per avere un&apos;esperienza completa, altrimenti continua a scrollare.
          </p>
        </motion.div>
      </div>

    </section>
  );
}

// ─── 10. QUESTIONS ────────────────────────────────────────────────────────────
// Q1 "Questa socialità…" — original: left calc(50%-177px)=24px top=8059 BLUE fs=75 lh=0.85 w=354
// Q1 sub — original: right-align left=378 top=8412 w=291
// Q1 blue line — original: left calc(75%+24.5px)=325px top=8119
// Section start = 8059, height = ~630

function Question1Section() {
  return (
    <section style={{ position: "relative", background: "#fff", height: 630, overflow: "hidden" }}>
      {/* Blue decorative arc — original: left=325 top=60 (8119-8059) rotate=-76.82 */}
      <div style={{ position: "absolute", left: 325, top: 60, pointerEvents: "none" }}>
        <DrawLine
          d={svgPaths.p25e4ed00} stroke={BLUE} strokeWidth={35}
          viewBox="0 0 342.333 266.389" w={240} h={190}
          delay={0.1}
        />
      </div>

      {/* Question heading */}
      <FadeUp style={{ position: "absolute", left: 24, top: 0, width: 354 }}>
        <p style={{ fontFamily: FH, fontWeight: 700, fontSize: 75, lineHeight: 0.85, color: BLUE, textTransform: "uppercase", margin: 0 }}>
          Questa socialità è uno sviluppo naturale dei massmedia?
        </p>
      </FadeUp>

      {/* Right-aligned body — original: -translate-x-full left=378 top=353 (8412-8059) w=291 right-align */}
      <FadeUp delay={0.35} style={{ position: "absolute", right: 24, top: 353, width: 291, textAlign: "right" }}>
        <p style={{ fontFamily: FR, fontSize: 20, lineHeight: 1.4, color: DARK, margin: 0 }}>
          Le prossime olimpiadi avranno la stessa viralità, o questa è stata solo una eccezione?
        </p>
      </FadeUp>
    </section>
  );
}

// Q2 "Si sono avvicinate…" — original: left=24 top=8650 RED fs=75 lh=0.85 w=354
// Q2 red line — original: left=-108 top=8985
// Q2 sub — original: right-align left=378 top=8942 w=301
// Section start = 8650, height = ~535

function Question2Section() {
  return (
    <section style={{ position: "relative", background: "#fff", height: 535, overflow: "hidden" }}>
      {/* Red decorative line — original: left=-108 top=335 (8985-8650) */}
      <div style={{ position: "absolute", left: -108, top: 335, pointerEvents: "none" }}>
        <DrawLine
          d={svgPaths.p6b35440} stroke={RED} strokeWidth={35}
          viewBox="0 0 174.657 227.745" w={130} h={170}
          delay={0.1}
        />
      </div>

      {/* Question heading */}
      <FadeUp style={{ position: "absolute", left: 24, top: 0, width: 354 }}>
        <p style={{ fontFamily: FH, fontWeight: 700, fontSize: 75, lineHeight: 0.85, color: RED, textTransform: "uppercase", margin: 0, whiteSpace: "pre-line" }}>
          {`sI SONO AVVICINATE LE PERSONE \nALLO SPORT?`}
        </p>
      </FadeUp>

      {/* Right-aligned body — original: -translate-x-full left=378 top=292 (8942-8650) w=301 */}
      <FadeUp delay={0.35} style={{ position: "absolute", right: 24, top: 292, width: 301, textAlign: "right" }}>
        <p style={{ fontFamily: FR, fontSize: 20, lineHeight: 1.4, color: DARK, margin: 0 }}>
          La gente ha iniziato a seguire gli sport di queste olimpiadi invernali o è stato un fenomeno temporaneo?{" "}
        </p>
      </FadeUp>
    </section>
  );
}

// ─── 11. CTA ─────────────────────────────────────────────────────────────────
// Original: Group7 at left=52 top=9158
// Orange line: left=-38.5 top=9282 → relative top=124
// Section height: 9580-9158 = 422

function CTASection() {
  return (
    <section style={{ position: "relative", background: "#fff", height: 422, overflow: "hidden" }}>
      {/* Orange arc — original: left=-38.5 top=124 (9282-9158) */}
      <div style={{ position: "absolute", left: -38, top: 124, pointerEvents: "none", opacity: 0.8 }}>
        <DrawLine
          d={svgPaths.p2f9e5180} stroke={YELLOW} strokeWidth={35}
          viewBox="0 0 500.863 221.484" w={370} h={170}
          delay={0.1}
        />
      </div>

      {/* CTA button group — original: left=52 top=0 */}
      <FadeUp style={{ position: "absolute", left: 52, top: 0 }} delay={0.3}>
        {/* Purple rounded background shape */}
        <div style={{ position: "relative", width: 298, height: 97 }}>
          <svg viewBox="0 0 298 96.769" fill="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            <path d={svgPaths.p38919700} fill={BLUE} />
          </svg>
          {/* Inner lighter pill */}
          <div style={{ position: "absolute", left: 30, top: 18, width: 244, height: 59, borderRadius: 24, background: "#8688f3" }} />
          {/* Label */}
          <p style={{
            position: "absolute", left: "50%", top: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: FEB, fontWeight: 800, fontSize: 26,
            lineHeight: 0.95, color: LIGHT, textTransform: "uppercase",
            textAlign: "center", width: 130, margin: 0,
          }}>Facci sapere la tua opinione</p>
          {/* Arrow icon */}
          <motion.div
            style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", width: 42, height: 42 }}
            animate={{ rotate: [-6.71] }}
            whileHover={{ rotate: 0, scale: 1.1 }}
          >
            <svg viewBox="0 0 30.3433 29.906" fill="none" style={{ width: "100%", height: "100%" }}>
              <path d={svgPaths.p2b006b00} fill={LIGHT} />
            </svg>
          </motion.div>
        </div>
      </FadeUp>
    </section>
  );
}

// ─── 12. FOOTER ───────────────────────────────────────────────────────────────
// Original Frame1: left=0 top=9580 h=224 w=402 bg=#151515

function Footer() {
  const pills = [
    { label: "Cucina italiana", color: YELLOW, left: 24 },
    { label: "Villaggio olimpico", color: RED, left: 116 },
    { label: "VIP inaspettati", color: PINK, left: 209 },
    { label: "Sport\ninsoliti", color: BLUE, left: 302 },
  ];

  return (
    <section style={{ background: DARK, height: 224, position: "relative", overflow: "hidden" }}>
      {/* "LE PIU VISTE DELLA STORIA" — original: left=24 top=16 fs=68 lh=0.8 Heavy center right=24 */}
      <FadeUp style={{ position: "absolute", left: 24, right: 24, top: 16, textAlign: "center" }}>
        <p style={{ fontFamily: FH, fontWeight: 700, fontSize: 68, lineHeight: 0.8, color: LIGHT, textTransform: "uppercase", margin: 0 }}>
          LE PIU VISTE DELLA STORIA
        </p>
      </FadeUp>

      {/* Category pills — original Group9-12: top=134, varying lefts */}
      {pills.map((pill, i) => (
        <motion.div key={pill.label}
          style={{
            position: "absolute", left: pill.left, top: 134,
            background: pill.color, height: 34, borderRadius: 10,
            padding: "0 8px", display: "flex", alignItems: "center", justifyContent: "center",
            width: i === 3 ? 76 : i === 2 ? 79 : i === 1 ? 77 : 77,
          }}
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.07 }}
          viewport={{ once: true }}
        >
          <p style={{ fontFamily: FR, fontSize: 12, lineHeight: 1, color: "#fff", margin: 0, textAlign: "center", whiteSpace: "pre-line" }}>
            {pill.label}
          </p>
        </motion.div>
      ))}

      {/* Credits — original: -translate-x-1/2 left=201px top=183px w=354 fs=10 center */}
      <FadeUp delay={0.5} style={{ position: "absolute", left: "50%", top: 183, transform: "translateX(-50%)", width: 354, textAlign: "center" }}>
        <p style={{ fontFamily: FR, fontSize: 10, lineHeight: 1.5, color: LIGHT, opacity: 0.6, margin: 0 }}>
          Design by: Luca Assinnato, Simone Busato, Nicola Castriotta, Edoardo Cicerone, Filippo Esposito, Mattia Lampugnani
        </p>
      </FadeUp>
    </section>
  );
}

// ─── Stacking cards (scroll-driven) ──────────────────────────────────────────
// Container: 5 × 875 px tall. A sticky viewport (height 875) stays at top:0.
// Inside it, each card is absolutely positioned. Cards 2-4 start at y=875
// (below viewport) and animate to y=0 via useTransform as the user scrolls,
// creating the "card slides on top of the previous one" parallax effect.

function StackingCards() {
  const ref = useRef<HTMLDivElement>(null);
  const H = 875;
  const TH = H * 5; // 4375 px total container height
  const span = TH - H; // 3500 px of effective scroll range

  // Use plain MotionValues driven by a window scroll listener —
  // avoids useScroll({ target }) which warns about non-static position.
  const y2 = useMotionValue(H);
  const y3 = useMotionValue(H);
  const y4 = useMotionValue(H);

  useLayoutEffect(() => {
    if (!ref.current) return;

    // Measure absolute document top once after mount
    const elTop =
      ref.current.getBoundingClientRect().top + window.scrollY;

    // Scroll ranges for each card (absolute document scroll positions)
    const ranges = [
      { mv: y2, start: elTop + span * 0.05, end: elTop + span * 0.37 },
      { mv: y3, start: elTop + span * 0.37, end: elTop + span * 0.69 },
      { mv: y4, start: elTop + span * 0.69, end: elTop + span * 0.95 },
    ];

    const update = () => {
      const s = window.scrollY;
      for (const { mv, start, end } of ranges) {
        if (s <= start) mv.set(H);
        else if (s >= end) mv.set(0);
        else mv.set(H * (1 - (s - start) / (end - start)));
      }
    };

    update(); // set initial values
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [H, span, y2, y3, y4]);

  return (
    <div ref={ref} style={{ height: TH, position: "relative" }}>
      {/* Sticky viewport — clips and frames all cards */}
      <div style={{ position: "sticky", top: 0, height: H, overflow: "hidden" }}>
        {/* Card 1 — always at y:0, base layer */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
          <IntroScreen />
        </div>
        {/* Card 2 — slides from below */}
        <motion.div style={{ position: "absolute", inset: 0, zIndex: 2, y: y2 }}>
          <VisualizzazioniScreen />
        </motion.div>
        {/* Card 3 */}
        <motion.div style={{ position: "absolute", inset: 0, zIndex: 3, y: y3 }}>
          <InterazioniScreen />
        </motion.div>
        {/* Card 4 — PostPubblicati (borderRadius:32 gives physical-card feel) */}
        <motion.div style={{ position: "absolute", inset: 0, zIndex: 4, y: y4 }}>
          <PostPubblicatiScreen />
        </motion.div>

        {/* ── Hamburger — sticky, always on top of all cards (z:10) ── */}
        {/* Closed state: 3 plain lines, no background, lowered position */}
        <div style={{
          position: "absolute",
          top: 80,
          right: 16,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: 7,
          cursor: "pointer",
          padding: 8,
        }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ width: 32, height: 3, borderRadius: 2, background: "#fff" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ background: "#111", minHeight: "100vh", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "40px 0 80px" }}>
      <div style={{
        width: 402, borderRadius: 40, overflow: "clip",
        boxShadow: "0 4px 0 2px #333, 0 0 0 3px #222, 0 40px 80px rgba(0,0,0,0.7)",
        background: "#fff", position: "relative",
      }}>
        {/* ── 4 stacking colored cards — scroll-driven parallax ── */}
        <StackingCards />

        {/* ── Rest of the prototype ── */}
        <VideoScreen />
        <EditorialSection />
        <ScegliSection />
        <CardsSection />
        <WarningSection />
        <Question1Section />
        <Question2Section />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
