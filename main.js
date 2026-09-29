/* =====================================================================
   main.js: shared by every page of the portfolio
   ---------------------------------------------------------------------
   Section A holds all your content. Everything below it is behavior.
   Each page tells this script which page it is with <body data-page="...">.
   ===================================================================== */
(() => {
'use strict';

/* =====================================================================
   A. CONTENT: edit your work here
   ---------------------------------------------------------------------
   Images: put files in an "images" folder next to the HTML pages, using
   the paths below (or change the paths). Until a file exists, a labeled
   placeholder frame shows instead. "ar" is the image's aspect ratio.
   ===================================================================== */
const SITE = {
  email: 'elianakingdesign@outlook.com',
  linkedin: 'https://www.linkedin.com/in/eliana-kingid',
  instagram: 'https://www.instagram.com/eyk.art/',
  instagramHandle: '@eyk.art',
  resume: 'Eliana_King_Resume.pdf',   // your resume PDF, next to the HTML pages
  heroPhoto: { src: 'images/eliana.jpg', alt: 'Eliana King smiling on the beach at sunset, leaning on a lifeguard stand', label: 'Your photo', ar: [4, 5] },
};

/* PLACEHOLDER PROJECTS: swap in your real ones.
   featured: true  → shows on the home page.
   featured: false → hidden from the home page, but still reachable through
                     "Next project" inside a case study.
   Case study images are expected at images/<slug>/process-1.jpg … and
   images/<slug>/outcome-1.jpg, outcome-2.jpg, outcome-3.jpg. */
const PROJECTS = [
  {
    // REAL PROJECT. Add a timeline if you like (blank fields are hidden on the site).
    slug: 'boot', featured: true,
    title: 'Boot “cups with sole”',
    summary: 'A cup shaped like a boot that works as its own coaster.',
    overview: 'This project explores how everyday objects can communicate meaning beyond their practical use. Shaped like a boot yet functioning as a coaster, the redesigned cup turns a routine object into something playful and expressive, inviting humor and lightness into daily use. Designed for a design-conscious audience that values play, care, and simplicity, it integrates function and emotion, turning a small daily habit into a moment of joy.',
    tags: ['Product', 'CMF', '3D printing'],
    context: 'Semiotics class',
    role: 'Research, concepting, CAD, 3D printing, rendering', timeline: '', team: 'Solo',
    cover: 'images/boot/cover.jpg', coverAlt: 'A glass standing in a purple silicone boot, with red, brown, gray, and tan boots floating around it',
    problem: 'Condensation seems minor, but it causes real everyday frustration: wet tables, slippery cups, and water rings. Boot builds the coaster into the cup itself. Its snug, reusable silicone base catches condensation and adds grip and protection, while the playful boot form lets you tell your drink apart by color and style.',
    // Optional on any project: a comparison table shown between Problem and Process
    market: {
      rows: [
        { product: 'Corkcicle Classic Coffee Mug', base: 'Silicone “stay put” bottom', price: '$34.95', note: 'Keeps an insulated mug from sliding. Rated 4.9 across 1,396 reviews.' },
        { product: 'Bacardi Cork Base Mug', base: 'Built-in cork coaster', price: '$16', note: 'Protects surfaces, but the cork is fused to an opaque ceramic mug.' },
        { product: 'Circo Labs Rolocoasters', base: 'Merino wool felt sleeve', price: '$60 for a set of 4', note: 'Catches condensation, but the sleeve is a separate piece that sells with the glasses.' },
      ],
      takeaway: 'Existing options either fuse the base to an opaque mug or sell it as a separate accessory. Boot keeps the glass clear and makes the base a removable, expressive part of the cup, with a personality none of them have.',
    },
    // "ar" is each process image's shape (width, height), so nothing gets cropped
    process: [
      { title: 'Initial exploration', ar: [2000, 1299], text: 'Explored base profiles and ways to build a coaster into the cup, keeping a clean visual connection between glass and base. The goal was to merge protection and personality in one seamless gesture.' },
      { title: 'Boot form concepts', ar: [2000, 1378], text: "Sketched variations that pair a coaster's function with the iconic silhouette of a boot. The form bridges practicality and expression, and each variation brings its own personality, turning the cup into a conversation piece." },
      { title: '3D printing', ar: [2000, 1305], text: 'Early prints refined fit and proportion: reshaping the toe box, slimming the glass, and separating the boot into its own flexible TPU piece. The final round dialed in the tolerance so the glass slides in and out snugly, printed in yellow TPU with translucent PLA. A cowboy version in brown TPU was printed to fit a real drinking glass.' },
    ],
    outcome: "A glass paired with a snug bio-silicone boot that catches condensation, adds grip, and protects the table. Each boot has its own color and style, so it also tells you whose drink is whose and turns a practical feature into a conversation piece.",
    tools: ['CAD', '3D printing (TPU, PLA)', 'Rendering', 'Material research'],
  },
  {
    // REAL PROJECT
    slug: 'ufp', featured: true,
    title: 'UFP Tradeshow Showpiece',
    summary: "A squeezable whale that shows off UFP's manufacturing processes in the palm of your hand.",
    tags: ['CAD', 'Tooling', 'Manufacturing'],
    context: 'CAD Internship, UFP Technologies',
    role: 'CAD Intern', timeline: 'May to August', team: 'Intern team',
    cover: 'images/ufp/cover.jpg', coverAlt: 'A clear blue whale filled with foam, resting in an open hand, with an inflated blowhole and a hot-stamped tail',
    overview: "UFP Technologies wanted a small, eye-catching showpiece for an upcoming tradeshow, something functional that shows off what its plants can do. As a CAD intern, I worked with the intern team to research UFP's core capabilities and bring them together in a playful whale that fits in your hand. Squeeze its tail, and the blowhole inflates.",
    // Optional on any project: a checklist, a goals list, and a "next time" section
    requirements: ['Showcase at least two core competencies', 'Use at least three materials', 'Keep the footprint under 4" × 4"', 'Embed the UFP logo'],
    goals: [
      'Get more proficient in SolidWorks and practice clear, manufacturable 2D drawings, including dimensioning, section views, and BOMs.',
      'Learn design for manufacturability and how choices made in CAD affect real production.',
      'Build real connections with my mentor and team by asking good questions and seeking feedback often.',
    ],
    // Steps with "groups" show a labeled gallery; click any image to enlarge it.
    // img: [file name in images/ufp, caption]
    process: [
      { title: 'Initial ideas', text: 'We started with four directions, each pairing a playful form with processes UFP already runs: a layered fidget, a turtle squishy, a wobbly creature, and Uic-Fac-Poe, a tic-tac-toe set with its own bag. All four were rendered in Vizcom.',
        groups: [{ images: [['idea-fidget', 'UFP fidget'], ['idea-turtle', 'Turtle squishy'], ['idea-wobbly', 'Wobbly creature'], ['idea-uicfacpoe', 'Uic-Fac-Poe']] }] },
      { title: 'Concept reevaluation', text: 'We chose the whale: a foam tail that works as a pump, pushing air through tubing and a check valve to inflate the blowhole. Quick AI renders tested the idea, then I worked out the proportions in CAD and sketched how the parts would come together.',
        groups: [
          { title: 'Quick AI renders', images: [['concept-cutaway', 'Cutaway of the pump system'], ['concept-render', 'First look at the form']] },
          { title: 'Finding proportions in CAD', images: [['concept-cad', 'Body profile in SolidWorks'], ['concept-whiteboard', 'Whiteboard build plan'], ['concept-cad-whale', 'Whale model'], ['concept-section', 'Section study']] },
        ] },
      { title: 'Tooling design', text: 'I designed the tooling in SolidWorks, with a set of tools for every process the whale needed: forming, sealing, stamping, and cutting.',
        groups: [
          { title: 'Vacuum forming molds', images: [['tool-body-mold', 'Whale body mold'], ['tool-body-mold-mirror', 'Whale body mold, mirror'], ['tool-tube-mold', 'Tube channel mold'], ['tool-tube-mold-mirror', 'Tube channel mold, mirror']] },
          { title: 'Sealing dies', images: [['tool-blowhole-seal', 'Blowhole perimeter seal'], ['tool-blowhole-seal-top', 'Blowhole perimeter seal, top'], ['tool-tail-seal', 'Tail and check valve perimeter seal'], ['tool-tail-seal-top', 'Tail and check valve perimeter seal, top']] },
          { title: 'Magnesium dies', images: [['tool-body-mag-die', 'Body sealing die'], ['tool-tail-text-mag-die', 'Tail text die face']] },
          { title: 'Die cuts', images: [['tool-foam-die-cut', 'Tail foam die cut'], ['tool-final-die-cut', 'Final die cut']] },
          { title: 'Panel cuts', images: [['tool-tail-panel-cut', 'Tail panel cut'], ['tool-blowhole-panel-cut', 'Blowhole panel cut']] },
        ] },
      { title: 'The pivot', text: 'We first trialed compression molding the body in closed-cell foam in Chicopee, but the parts came out inconsistent: the foam heated unevenly and the tubing channel would not form cleanly. So we switched to vacuum forming the whale halves, I designed magnesium dies to perimeter-seal each half together, keeping the original foam look, and we 3D printed new molds for forming.',
        groups: [{ images: [['pivot-compression', 'Compression molding trial'], ['pivot-foam', 'Compression-molded foam half'], ['pivot-mold', 'New 3D-printed forming mold']] }] },
      { title: 'Fabrication', text: 'Each whale took more than a dozen steps, from cutting and stamping the film to forming, sealing, stuffing, and gluing it together.',
        groups: [
          { title: 'Material prep', images: [['fab-panel-blowhole', 'Panel cutting, blowhole'], ['fab-die-cut-foam', 'Die cutting the foam'], ['fab-panel-tail', 'Panel cutting, tail']] },
          { title: 'Hot stamping', images: [['fab-hot-stamp-foil', 'Hot stamping setup'], ['fab-hot-stamp', 'Stamped tail text']] },
          { title: 'Vacuum forming', images: [['fab-vac-body', 'Forming the body'], ['fab-vac-tube', 'Forming the tube channels'], ['fab-vac-tail', 'Formed tail film'], ['fab-vac-half', 'Formed body half']] },
          { title: 'Sealing', images: [['fab-seal-release', 'Release valve seal'], ['fab-seal-blowhole', 'Perimeter seal, blowhole'], ['fab-seal-body', 'Perimeter seal, body'], ['fab-seal-tube', 'Tube seal, blowhole and tail'], ['fab-seal-tail', 'Perimeter seal, tail'], ['fab-seal-bar', 'Bar seal']] },
          { title: 'Final cut and stuffing', images: [['fab-final-cut', 'Final cut die'], ['fab-stuffing', 'Stuffing the halves'], ['fab-stuffed', 'Stuffed body shell']] },
        ] },
    ],
    // Optional on any project: an order-of-operations strip and a materials list
    timeline: [
      ['Panel cutting', 'Tail and blowhole'], ['Hot stamp', 'Tail'], ['Vacuum form', 'Tail'], ['Release valve seal', 'Blowhole'],
      ['Tube seal', 'Blowhole and tail'], ['Perimeter cut', 'Blowhole'], ['Perimeter seal', 'Foam into tail'], ['Perimeter cut', 'Tail'],
      ['Pivot', 'Compression molding to vacuum forming', true], ['Vacuum form', 'Whale bodies'], ['Perimeter seal', 'Bodies'],
      ['Stuff body shells', ''], ['Glue halves together', 'With the tube seal subassembly'],
    ],
    materials: {
      'Tube assembly': ['Blue TPU film', 'TPU tubing', 'Open-cell foam', 'Black hot stamping foil', 'Release valves', 'Check valves'],
      'Whale body': ['20 mil clear TPU film', '19 mil clear TPU film', 'Memory foam filler', 'Glue (Loctite 770 and 4011)'],
    },
    outcome: "A palm-sized whale with a clear TPU body filled with memory foam and a blue TPU tube assembly running from its foam tail to the blowhole. Squeezing the tail pushes air through a check valve to inflate the blowhole, and a release valve lets the stored air back out. The UFP logo is formed into the body, and the tail is hot-stamped with UFP's contact details. It met all four requirements.",
    nextTime: {
      Design: ['Vacuum form the blowhole so it can inflate more', 'Find a faster alternative to vacuum forming each body half', 'Shorten the tail to tuck the check valve inside the body'],
      Process: ['Align the tube seal more accurately, since it affects every step after it', 'Find a better way to stuff foam into the body, or a different filler'],
    },
    tools: ['SolidWorks', '3D printing', 'Vacuum forming', 'Heat sealing', 'Hot stamping', 'Die cutting'],
  },
  {
    slug: 'pause', featured: true,
    title: 'Pause',
    summary: 'A desk timer you twist instead of tap, so study breaks actually happen.',
    tags: ['Interaction', 'Product', 'Arduino'],
    context: 'Interaction Design Studio',
    role: 'Research, form, electronics, app flows', timeline: '10 weeks', team: 'Solo',
    cover: 'images/pause/cover.jpg', coverAlt: 'Pause, an aluminum dial timer, on a wooden study desk',
    problem: 'Students I interviewed kept skipping breaks. Phone timers are easy to dismiss, and picking up the phone to start one usually turned into twenty minutes of scrolling.',
    process: [
      { title: 'Listen', text: 'Interviewed 14 students and ran a week-long diary study on how they actually take breaks.' },
      { title: 'Sketch', text: 'Explored more than sixty forms and landed on a dial, because turning something feels like a commitment.' },
      { title: 'Prototype', text: 'Built working models with an Arduino, a rotary encoder, and a vibration motor, then tuned the feel in foam and 3D prints.' },
      { title: 'Test', text: 'Left three prototypes on real desks for a week and adjusted the detents until turning the dial felt right.' },
    ],
    outcome: "A palm-sized aluminum dial with a light ring that dims as focus time runs down, plus a companion app that stays out of the way. Testers took breaks they'd normally skip, and nobody reached for a phone to start a session.",
    tools: ['SolidWorks', 'KeyShot', 'Figma', 'Arduino', 'Foam modeling', '3D printing'],
  },
  {
    slug: 'grip', featured: true,
    title: 'Grip',
    summary: 'Kitchen tools shaped for hands with arthritis, designed to stay out on the counter.',
    tags: ['Inclusive design', 'Ergonomics', 'CMF'],
    context: 'Industrial Design Studio',
    role: 'Research, ergonomics, form, CMF', timeline: '8 weeks', team: 'Solo',
    cover: 'images/grip/cover.jpg', coverAlt: 'Four Grip kitchen utensils with soft sage handles on a counter',
    problem: 'Most adaptive utensils work, but they look clinical, so people hide them in a drawer or skip them entirely. I wanted tools that help without announcing it.',
    process: [
      { title: 'Research', text: 'Cooked alongside five home cooks with arthritis and spent an afternoon with an occupational therapist.' },
      { title: 'Form', text: 'Carved thirty foam handles and pressed clay grips to map where hands actually apply pressure.' },
      { title: 'Material', text: 'Tested silicone overmolds at different firmness levels until they felt soft but steady.' },
      { title: 'Refine', text: 'Unified four tools under one grip language and tuned proportions so they read as a set.' },
    ],
    outcome: 'A four-piece set with wide, soft-touch handles and a thumb rest that guides the hand into a relaxed hold. Every tester chose to keep theirs on the counter.',
    tools: ['Rhino', 'KeyShot', 'Foam carving', 'Clay', 'Silicone casting'],
  },
  {
    slug: 'drift', featured: false,
    title: 'Drift',
    summary: 'A wayfinding app and kiosk that help first-week students find their way.',
    tags: ['UX', 'Service design', 'Figma'],
    context: 'Interaction Design II',
    role: 'UX research, prototyping, visual design', timeline: '12 weeks', team: 'Team of 3',
    cover: 'images/drift/cover.jpg', coverAlt: 'Drift wayfinding app on a phone next to a campus kiosk',
    problem: 'New students told us the official campus map made them feel more lost, not less. It showed buildings, but not how people actually move between them.',
    process: [
      { title: 'Shadow', text: 'Followed first-years during move-in week and mapped where they hesitated, doubled back, or asked for help.' },
      { title: 'Map', text: 'Rebuilt directions around landmarks people really use, like the big red doors, instead of building codes.' },
      { title: 'Prototype', text: 'Tested paper prototypes, then clickable ones in Figma and ProtoPie, with twenty students.' },
      { title: 'Extend', text: 'Designed a matching kiosk for the quad so the app and the physical signs speak the same language.' },
    ],
    outcome: 'An app that gives landmark-based directions and a kiosk that mirrors it. In testing, students found their classes faster and said they felt calmer doing it.',
    tools: ['Figma', 'ProtoPie', 'Illustrator', 'Usability testing'],
  },
  {
    slug: 'haul', featured: false,
    title: 'Haul',
    summary: 'A modular bike bag that moves from handlebar to shoulder in one click.',
    tags: ['Soft goods', 'Product', 'Sewing'],
    context: 'Soft Goods Elective',
    role: 'Design, patterning, sewing, hardware', timeline: '6 weeks', team: 'Solo',
    cover: 'images/haul/cover.jpg', coverAlt: 'Haul, a waxed canvas bike bag, clipped to a handlebar',
    problem: 'Bike commuters juggle two bags: one that rides well and one that carries well off the bike. Swapping between them is a daily hassle.',
    process: [
      { title: 'Ride along', text: 'Rode with four commuters and noted every time they fumbled with a strap or a clip.' },
      { title: 'Mechanism', text: 'Designed and 3D-printed a one-handed mount that locks with an audible click.' },
      { title: 'Pattern', text: 'Drafted paper patterns and sewed three muslin versions before cutting any canvas.' },
      { title: 'Build', text: 'Sewed the final bag in waxed canvas with seatbelt webbing and printed hardware.' },
    ],
    outcome: 'One bag that rides tight on the handlebars and becomes a shoulder bag in a second. Testers used it daily for two weeks and kept it afterward.',
    tools: ['Fusion 360', 'Pattern making', 'Industrial sewing', '3D printing'],
  },
];

/* Fabrication page: standalone builds that show your making skills (featured projects
   live in PROJECTS instead). Each "stage" is one step of the build. "note" is optional.
   Images: images/fabrication/<slug>-1.jpg, -2.jpg … one per stage. */
const FABRICATION = [
  { title: 'Walnut side table', materials: 'Black walnut, brass inlay', slug: 'table',
    note: 'My first piece with hand-cut dovetails. Three test joints came before this one.',
    stages: ['Rough stock', 'Milled', 'Joinery', 'Finished'] },
  { title: 'Concrete pendant lamp', materials: 'Cast concrete, white oak, linen cord', slug: 'lamp',
    note: 'Cast in a 3D-printed mold I designed to release cleanly on the second pour.',
    stages: ['Printed mold', 'Pour', 'Demold', 'Finished'] },
  { title: 'Pause dial models', materials: 'Foam, PLA, machined aluminum', slug: 'dial',
    note: 'The dial went from blue foam to a machined part with a precise, even click.',
    stages: ['Foam', 'Printed', 'Machined', 'Finished'] },
  { title: 'Haul prototype bag', materials: 'Waxed canvas, seatbelt webbing', slug: 'bag',
    note: 'Three muslin mock-ups settled the proportions before I cut the final canvas.',
    stages: ['Pattern', 'Cut', 'Sewn', 'Finished'] },
];

/* Renderings page. "span" is how wide the tile is on desktop (out of 12 columns). */
const RENDERINGS = [
  { title: 'Boot, floating colorways', src: 'images/renders/boot-floating.jpg', ar: [2000, 1545], span: 7 },
  { title: 'Boot in bright colors', src: 'images/renders/boot-colors.jpg', ar: [1500, 1159], span: 5 },
  { title: 'Boot in neutrals', src: 'images/renders/boot-neutrals.jpg', ar: [1500, 1159], span: 6 },
  { title: 'Boot in warm tones', src: 'images/renders/boot-warm.jpg', ar: [1500, 1159], span: 6 },
  { title: 'Pause on a study desk', src: 'images/renders/pause-desk.jpg', ar: [16, 10], span: 7 },
  { title: 'Pause, exploded view', src: 'images/renders/pause-exploded.jpg', ar: [4, 5], span: 5 },
  { title: 'Grip set in the kitchen', src: 'images/renders/grip-kitchen.jpg', ar: [1, 1], span: 4 },
  { title: 'Grip handle detail', src: 'images/renders/grip-detail.jpg', ar: [1, 1], span: 4 },
  { title: 'Concrete lamp at dusk', src: 'images/renders/lamp-dusk.jpg', ar: [1, 1], span: 4 },
  { title: 'Haul on the handlebar', src: 'images/renders/haul-bike.jpg', ar: [4, 3], span: 6 },
  { title: 'Haul color options', src: 'images/renders/haul-colors.jpg', ar: [4, 3], span: 6 },
  { title: 'Drift kiosk in the quad', src: 'images/renders/drift-kiosk.jpg', ar: [21, 9], span: 12 },
];

/* Sketches page. x / y place each page when scattered (0 to 1); r is its tilt in degrees. */
const SKETCHES = [
  { title: 'Boot, base profile explorations', src: 'images/sketches/boot-profiles.jpg', ar: [1600, 1236], x: 0.02, y: 0.03, r: -6 },
  { title: 'Boot, concept 1: spiral ring', src: 'images/sketches/boot-spiral.jpg', ar: [1500, 1159], x: 0.33, y: 0.00, r: 4 },
  { title: 'Boot, concept 2: boot form', src: 'images/sketches/boot-form.jpg', ar: [1500, 1159], x: 0.64, y: 0.06, r: -3 },
  { title: 'Boot, concept 3: structured ring', src: 'images/sketches/boot-structured.jpg', ar: [1500, 1159], x: 0.97, y: 0.02, r: 7 },
  { title: 'Drift kiosk layouts', src: 'images/sketches/drift.jpg', ar: [4, 3], x: 0.12, y: 0.55, r: 5 },
  { title: 'Hand studies', src: 'images/sketches/hands.jpg', ar: [4, 5], x: 0.42, y: 0.48, r: -8 },
  { title: 'Chair studies', src: 'images/sketches/chairs.jpg', ar: [1, 1], x: 0.72, y: 0.58, r: 3 },
  { title: 'Grip ergonomics notes', src: 'images/sketches/grip-notes.jpg', ar: [3, 4], x: 0.95, y: 0.92, r: -5 },
  { title: 'Pause light ring', src: 'images/sketches/pause-ring.jpg', ar: [4, 3], x: 0.3, y: 1.0, r: 6 },
];

/* =====================================================================
   B. SETUP + HELPERS
   ===================================================================== */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
const root = document.documentElement;
const page = document.body.dataset.page || 'home';
const isHome = page === 'home';
const hasGSAP = typeof window.gsap !== 'undefined';
const hasST = hasGSAP && typeof window.ScrollTrigger !== 'undefined';
if (hasST) gsap.registerPlugin(ScrollTrigger);
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const motionOK = hasGSAP && !reduce;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const rand = (a, b) => a + Math.random() * (b - a);
const cssVar = (n) => getComputedStyle(root).getPropertyValue(n).trim();
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const homeLink = (hash) => (isHome ? hash : 'index.html' + hash);

// If GSAP didn't load, never leave the page stuck behind the intro
if (!hasGSAP) root.classList.remove('intro-play');

/* Image + quiet placeholder frame. The image fades in once it loads. */
const PH_ICON = '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="5" y="9" width="38" height="30" rx="3"/><circle cx="17" cy="19" r="4"/><path d="M5 34l11-10 9 8 6-5 12 10"/></svg>';
function media({ src, alt = '', label = '', ar = [4, 3], lazy = true }, cls = '') {
  return `<div class="ph ${cls}" style="--ar:${ar[0]}/${ar[1]}">
    <div class="ph-art" aria-hidden="true">${PH_ICON}</div>
    <span class="ph-label" aria-hidden="true"><b>${esc(label)}</b><span>${esc(src)}</span></span>
    <img src="${esc(src)}" alt="${esc(alt)}" ${lazy ? 'loading="lazy"' : ''} decoding="async" onload="this.classList.add('is-loaded')">
  </div>`;
}

/* The four studio objects (also used as section markers). viewBox 0 0 100 100 */
const SVG = {
  knob: `<svg viewBox="0 0 100 100"><circle class="f-orange" cx="50" cy="50" r="48"/>${
    Array.from({ length: 16 }, (_, i) => `<rect class="f-orange-deep" x="48.5" y="3" width="3" height="8" rx="1.5" transform="rotate(${i * 22.5} 50 50)"/>`).join('')
  }<circle class="f-orange-deep" cx="50" cy="50" r="35"/><circle class="f-orange" cx="50" cy="50" r="30"/><rect class="f-paper" x="46" y="14" width="8" height="26" rx="4"/></svg>`,
  tape: `<svg viewBox="0 0 100 100"><circle class="f-tape" cx="50" cy="50" r="48"/><circle cx="50" cy="50" r="40" fill="none" stroke="rgba(0,0,0,.08)" stroke-width="1.5"/><circle cx="50" cy="50" r="33" fill="none" stroke="rgba(0,0,0,.06)" stroke-width="1.5"/><circle class="f-tape-deep" cx="50" cy="50" r="27"/><circle class="f-paper" cx="50" cy="50" r="21"/><path class="f-tape" d="M50 2 L78 2 L74 12 Z"/></svg>`,
  block: `<svg viewBox="0 0 100 100"><rect class="f-green" x="4" y="4" width="92" height="92" rx="16"/>${
    [25, 50, 75].map((x) => [25, 50, 75].map((y) => `<circle class="f-green-deep" cx="${x}" cy="${y}" r="6.5"/>`).join('')).join('')
  }</svg>`,
  square: `<svg viewBox="0 0 100 100"><path class="f-blue" d="M8 94 L94 94 L8 8 Z" stroke="#2F5BEA" stroke-width="8" stroke-linejoin="round"/><path class="f-paper" d="M24 80 L62 80 L24 42 Z"/>${
    [20, 32, 44, 56, 68].map((y) => `<rect class="f-paper-a" x="6" y="${y}" width="9" height="2.5" rx="1"/>`).join('')
  }</svg>`,
};

/* =====================================================================
   C. SHARED CHROME: nav, mobile dock + sheet, cursor, footer, toast
   Written once here so every page stays in sync.
   ===================================================================== */
const NAV = [
  { id: 'work', label: 'Projects', href: homeLink('#work') },
  { id: 'fabrication', label: 'Fabrication', href: 'fabrication.html' },
  { id: 'renderings', label: 'Renderings', href: 'renderings.html' },
  { id: 'sketches', label: 'Sketches', href: 'sketches.html' },
  { id: 'about', label: 'About', href: homeLink('#about') },
  { id: 'contact', label: 'Contact', href: homeLink('#contact') },
];
const LABELS = { home: 'Home', work: 'Projects', fabrication: 'Fabrication', renderings: 'Renderings', sketches: 'Sketches', about: 'About', contact: 'Contact' };
const X_ICON = '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

document.body.insertAdjacentHTML('afterbegin', `
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="cursor is-hidden" id="cursor" aria-hidden="true"><span class="cursor-dot"></span><span class="cursor-label"></span></div>
  <header class="site-nav">
    <div class="nav-bg"></div>
    <nav class="nav-inner wrap" aria-label="Main">
      <a class="wordmark" href="${isHome ? '#home' : 'index.html'}" aria-label="Eliana King, home"><span data-svg="knob" aria-hidden="true"></span>Eliana King</a>
      <ul class="nav-links">
        ${NAV.map((n) => `<li><a href="${n.href}" data-id="${n.id}">${n.label}</a></li>`).join('')}
        <li aria-hidden="true" class="nav-indicator"></li>
      </ul>
    </nav>
  </header>
  <div class="dock">
    <span class="dock-current" aria-live="polite"><i aria-hidden="true"></i><span id="dock-label">${LABELS[page] || 'Home'}</span></span>
    <button class="dock-btn" type="button" aria-expanded="false" aria-controls="sheet">Menu</button>
  </div>
  <div class="sheet" id="sheet" role="dialog" aria-modal="true" aria-label="Site menu" hidden>
    <div class="sheet-bg"></div>
    <div class="sheet-panel">
      <ul>
        <li><a href="${isHome ? '#home' : 'index.html'}" data-id="home"><i aria-hidden="true"></i>Home</a></li>
        ${NAV.map((n) => `<li><a href="${n.href}" data-id="${n.id}"><i aria-hidden="true"></i>${n.label}</a></li>`).join('')}
      </ul>
      <button class="btn btn-ghost sheet-close" type="button">Close menu</button>
    </div>
  </div>`);

document.body.insertAdjacentHTML('beforeend', `
  <footer class="site-foot${isHome ? ' on-table' : ''}">
    <div class="wrap foot-inner">
      <span>© 2026 Eliana King</span>
      <ul class="foot-links">
        <li><a href="mailto:${esc(SITE.email)}">Email</a></li>
        <li><a href="${esc(SITE.linkedin)}" target="_blank" rel="noopener">LinkedIn</a></li>
        <li><a href="${esc(SITE.instagram)}" target="_blank" rel="noopener">Instagram</a></li>
        <li><a href="${esc(SITE.resume)}" download>Resume</a></li>
        ${isHome ? '<li class="only-fine">Try typing e-y-k.</li>' : ''}
      </ul>
    </div>
  </footer>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>`);

$$('[data-svg]').forEach((el) => { el.innerHTML = SVG[el.dataset.svg]; });

/* Toast message */
const toastEl = $('#toast');
let toastTimer;
function toast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('is-shown');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('is-shown'), 2800);
}

/* Scroll lock for overlays (keeps layout from jumping) */
let locks = 0;
function lockScroll() {
  if (locks++ === 0) {
    root.style.setProperty('--sbw', (window.innerWidth - root.clientWidth) + 'px');
    root.classList.add('is-locked');
  }
}
function unlockScroll() {
  if (locks > 0 && --locks === 0) root.classList.remove('is-locked');
}

/* Keep Tab focus inside an open overlay */
function trapFocus(container, e) {
  const f = $$('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])', container).filter((el) => el.offsetParent !== null);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

/* =====================================================================
   D. NAV BEHAVIOR: active state, sliding indicator, dock label, sheet
   ===================================================================== */
const navLinks = $$('.nav-links a');
const sheetLinks = $$('.sheet-panel a');
const indicator = $('.nav-indicator');
const dockLabel = $('#dock-label');
let activeId = null;

function moveIndicator() {
  const link = navLinks.find((a) => a.dataset.id === activeId);
  if (!link) { indicator.style.opacity = '0'; return; }
  indicator.style.opacity = '1';
  indicator.style.transform = `translateX(${link.offsetLeft + 13}px) scaleX(${(link.offsetWidth - 26) / 100})`;
}
function setActive(id) {
  if (id === activeId) return;
  activeId = id;
  [...navLinks, ...sheetLinks].forEach((a) => {
    if (a.dataset.id === id) a.setAttribute('aria-current', isHome ? 'true' : 'page');
    else a.removeAttribute('aria-current');
  });
  moveIndicator();
  const label = LABELS[id] || 'Home';
  if (motionOK && dockLabel.textContent !== label) {
    gsap.fromTo(dockLabel, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.45, ease: 'expo.out', onStart: () => { dockLabel.textContent = label; } });
  } else dockLabel.textContent = label;
}
if (isHome) {
  // On the home page, the active link follows whichever section is mid-screen
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) setActive(en.target.id); });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main > section[id]').forEach((s) => io.observe(s));
  setActive('home');
} else {
  setActive(page);
}
window.addEventListener('resize', moveIndicator);
if (document.fonts) document.fonts.ready.then(moveIndicator);

const onScroll = () => root.classList.toggle('nav-scrolled', window.scrollY > 24);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu sheet
const sheet = $('#sheet');
const dockBtn = $('.dock-btn');
function openSheet() {
  sheet.hidden = false;
  dockBtn.setAttribute('aria-expanded', 'true');
  lockScroll();
  if (motionOK) {
    gsap.fromTo('.sheet-bg', { opacity: 0 }, { opacity: 1, duration: 0.3 });
    gsap.fromTo('.sheet-panel', { yPercent: 100 }, { yPercent: 0, duration: 0.55, ease: 'expo.out' });
    gsap.from('.sheet-panel li', { y: 24, opacity: 0, stagger: 0.04, duration: 0.5, ease: 'expo.out', delay: 0.1 });
  }
  sheetLinks[0].focus();
}
function closeSheet(focusBack = true) {
  if (sheet.hidden) return;
  const done = () => { sheet.hidden = true; unlockScroll(); if (focusBack) dockBtn.focus(); };
  dockBtn.setAttribute('aria-expanded', 'false');
  if (motionOK) {
    gsap.to('.sheet-bg', { opacity: 0, duration: 0.25 });
    gsap.to('.sheet-panel', { yPercent: 100, duration: 0.35, ease: 'power3.in', onComplete: done });
  } else done();
}
dockBtn.addEventListener('click', openSheet);
$('.sheet-close').addEventListener('click', () => closeSheet());
$('.sheet-bg').addEventListener('click', () => closeSheet());
sheetLinks.forEach((a) => a.addEventListener('click', (e) => {
  const href = a.getAttribute('href');
  if (!href.startsWith('#')) { closeSheet(false); return; }   // another page: just go
  e.preventDefault();
  closeSheet(false);
  setTimeout(() => { $(href).scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); history.replaceState(null, '', href); }, motionOK ? 360 : 0);
}));

/* =====================================================================
   E. CUSTOM CURSOR (mouse only): a dot that turns into a label
   ===================================================================== */
(function initCursor() {
  if (!finePointer) return;
  root.classList.add('has-cursor');
  const cur = $('#cursor');
  const label = $('.cursor-label', cur);
  let x = -100, y = -100, tx = x, ty = y, raf = 0;
  const tick = () => {
    const k = reduce ? 1 : 0.3;
    x += (tx - x) * k; y += (ty - y) * k;
    cur.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    raf = (Math.abs(tx - x) > 0.1 || Math.abs(ty - y) > 0.1) ? requestAnimationFrame(tick) : 0;
  };
  window.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    tx = e.clientX; ty = e.clientY;
    cur.classList.remove('is-hidden');
    if (!raf) raf = requestAnimationFrame(tick);
  }, { passive: true });
  document.addEventListener('pointerover', (e) => {
    const t = e.target.closest('[data-cursor]');
    if (t) {
      label.textContent = t.dataset.cursor;
      cur.classList.add('is-label'); cur.classList.remove('is-link');
      return;
    }
    cur.classList.remove('is-label');
    cur.classList.toggle('is-link', !!e.target.closest('a, button, [role="button"]'));
  });
  document.addEventListener('pointerdown', () => cur.classList.add('is-down'));
  document.addEventListener('pointerup', () => cur.classList.remove('is-down'));
  document.documentElement.addEventListener('mouseleave', () => cur.classList.add('is-hidden'));
})();

/* =====================================================================
   F. LIGHTBOX (renderings + sketches pages): arrows, swipe, Esc
   ===================================================================== */
const GALLERIES = { renderings: RENDERINGS, sketches: SKETCHES, case: [] };   // "case" fills in when a case study opens
let lb = null, lbFrame = null, lbGallery = null, lbIndex = 0, lbReturn = null;
if (page === 'renderings' || page === 'sketches' || isHome) {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="lb" id="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" hidden>
      <div class="lb-bg"></div>
      <button class="lb-btn lb-close" type="button" aria-label="Close viewer">${X_ICON}</button>
      <button class="lb-btn lb-prev" type="button" aria-label="Previous image"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M13 3l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <button class="lb-btn lb-next" type="button" aria-label="Next image"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 3l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <div class="lb-frame">
        <div class="lb-media"></div>
        <div class="lb-caprow"><p class="lb-cap"></p><span class="lb-count" aria-live="polite"></span></div>
      </div>
    </div>`);
  lb = $('#lightbox');
  lbFrame = $('.lb-frame', lb);
  $('.lb-close', lb).addEventListener('click', closeLightbox);
  $('.lb-prev', lb).addEventListener('click', () => lbGo(-1));
  $('.lb-next', lb).addEventListener('click', () => lbGo(1));
  $('.lb-bg', lb).addEventListener('click', closeLightbox);
  let sx = null; // swipe on touch screens
  lbFrame.addEventListener('pointerdown', (e) => { sx = e.clientX; });
  lbFrame.addEventListener('pointerup', (e) => {
    if (sx === null) return;
    const dx = e.clientX - sx; sx = null;
    if (Math.abs(dx) > 50) lbGo(dx < 0 ? 1 : -1);
  });
}
function lbRender() {
  const list = GALLERIES[lbGallery];
  const item = list[lbIndex];
  lbFrame.style.setProperty('--arn', item.ar[0] / item.ar[1]);
  $('.lb-media', lb).innerHTML = media({ src: item.src, alt: item.title, label: item.title, ar: item.ar, lazy: false });
  $('.lb-cap', lb).textContent = item.title;
  $('.lb-count', lb).textContent = `${lbIndex + 1} of ${list.length}`;
}
function openLightbox(gallery, index, from) {
  lbGallery = gallery; lbIndex = index; lbReturn = from;
  lbRender();
  lb.hidden = false;
  lockScroll();
  if (motionOK) {
    gsap.fromTo('.lb-bg', { opacity: 0 }, { opacity: 1, duration: 0.35 });
    gsap.fromTo(lbFrame, { opacity: 0, scale: 0.9, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'expo.out' });
    gsap.fromTo('.lb-btn', { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, stagger: 0.05, duration: 0.5, ease: 'back.out(2)', delay: 0.15 });
  }
  $('.lb-close', lb).focus({ preventScroll: true });
}
function lbGo(dir) {
  const len = GALLERIES[lbGallery].length;
  lbIndex = (lbIndex + dir + len) % len;
  if (motionOK) {
    gsap.to(lbFrame, { x: -50 * dir, opacity: 0, duration: 0.18, ease: 'power2.in', onComplete: () => {
      lbRender();
      gsap.fromTo(lbFrame, { x: 50 * dir, opacity: 0 }, { x: 0, opacity: 1, duration: 0.45, ease: 'expo.out' });
    } });
  } else lbRender();
}
function closeLightbox() {
  if (!lb || lb.hidden) return;
  const done = () => { lb.hidden = true; unlockScroll(); if (lbReturn) lbReturn.focus({ preventScroll: true }); };
  if (motionOK) {
    gsap.to(lbFrame, { opacity: 0, scale: 0.94, duration: 0.25, ease: 'power2.in' });
    gsap.to('.lb-bg, .lb-btn', { opacity: 0, duration: 0.3, onComplete: done });
  } else done();
}

/* =====================================================================
   G. HOME PAGE
   ===================================================================== */
let Physics = null;
let caseEl = null, caseOpen = null, pushedCase = false;
let requestCloseCase = () => {};

if (isHome) {
  /* ---- G1. Content ---- */
  $('#hero-photo').innerHTML = media({ ...SITE.heroPhoto, lazy: false });

  const featured = PROJECTS.filter((p) => p.featured);
  $('#work-count').textContent = `(${featured.length})`;
  $('#project-grid').innerHTML = featured.map((p) => `
    <li class="card" data-slug="${p.slug}" data-reveal>
      <a class="card-link" href="#case/${p.slug}" data-cursor="View project">
        ${media({ src: p.cover, alt: p.coverAlt, label: `${p.title} cover`, ar: [16, 10] }, 'card-media')}
        <div class="card-row"><h3 class="card-title">${esc(p.title)}</h3></div>
        <p class="card-summary">${esc(p.summary)}</p>
        <ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      </a>
    </li>`).join('');

  const emailLink = $('#email-link');
  emailLink.href = `mailto:${SITE.email}`;
  emailLink.textContent = SITE.email;
  $('#link-linkedin').href = SITE.linkedin;
  $('#link-instagram').href = SITE.instagram;
  $('#ig-handle').textContent = SITE.instagramHandle;
  $('#link-resume').href = SITE.resume;
  $('#copy-email').addEventListener('click', () => {
    const fail = () => toast(`Couldn't copy. The address is ${SITE.email}`);
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(SITE.email).then(() => toast('Email copied'), fail);
    else fail();
  });

  /* ---- G2. Hero name: letters pop and change color when touched ---- */
  $$('.name-line').forEach((line) => {
    line.innerHTML = [...line.textContent.trim()].map((c) => `<span class="ch">${c}</span>`).join('');
  });
  const letters = $$('.hero-name .ch');
  // Colors the letters flash when they bounce. Edit or add hex codes here.
  const letterColors = ['#450E9E', '#316479', '#429BBD', '#B3CAD6'];
  const inkColor = cssVar('--ink');
  const popLetter = (ch, delay = 0) => {
    if (!motionOK || gsap.isTweening(ch)) return;
    gsap.timeline({ delay })
      .to(ch, { yPercent: -22, rotation: rand(-14, 14), scale: 1.08, color: letterColors[Math.floor(Math.random() * letterColors.length)], duration: 0.22, ease: 'power2.out' })
      .to(ch, { yPercent: 0, rotation: 0, scale: 1, duration: 1, ease: 'elastic.out(1, 0.35)' })
      .to(ch, { color: inkColor, duration: 0.6 }, '-=0.3');
  };
  letters.forEach((ch) => ch.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') popLetter(ch); }));
  $('#hero-name').addEventListener('click', () => letters.forEach((ch, i) => popLetter(ch, i * 0.05)));

  /* ---- G3. The table: tiny physics so you can pick things up and toss them ---- */
  Physics = (() => {
    const box = $('#playground');
    const arena = $('#arena');
    const G = 2400;          // gravity (px/s²)
    const BOUNCE = 0.42;     // how bouncy collisions are
    const bodies = [];
    let W = 0, H = 0, floor = 0, ceil = 0, raf = 0, last = 0, visible = false, calm = 0, released = false;
    const kinds = { knob: { round: true, fit: 1 }, tape: { round: true, fit: 1 }, block: { round: false, fit: 0.9 }, square: { round: false, fit: 0.84 } };
    const baseSize = () => (window.innerWidth < 720 ? 60 : window.innerWidth < 1100 ? 80 : 96);

    const measure = () => { W = box.clientWidth; H = box.clientHeight; floor = H - 16; ceil = 8; };
    const render = (b) => { b.el.style.transform = `translate3d(${b.x - b.r}px, ${b.y - b.r}px, 0) rotate(${b.a}rad)`; };

    function add(type, x, y, mult = 1) {
      const el = document.createElement('div');
      el.className = 'obj';
      el.dataset.cursor = 'Drag';
      el.innerHTML = SVG[type];
      const size = baseSize() * mult;
      el.style.width = el.style.height = size + 'px';
      arena.appendChild(el);
      const b = { el, type, r: size / 2, cr: (size / 2) * kinds[type].fit, round: kinds[type].round, x, y, vx: 0, vy: 0, a: 0, va: 0, drag: false, mult };
      bodies.push(b);
      bindDrag(b);
      render(b);
      return b;
    }

    function step(now) {
      raf = 0;
      const dt = Math.min((now - last) / 1000, 1 / 30);
      last = now;
      for (const b of bodies) {
        if (b.drag) continue;
        b.vy += G * dt;
        b.x += b.vx * dt; b.y += b.vy * dt; b.a += b.va * dt;
        if (b.x - b.cr < 0) { b.x = b.cr; b.vx = Math.abs(b.vx) * BOUNCE; b.va *= -0.6; }
        if (b.x + b.cr > W) { b.x = W - b.cr; b.vx = -Math.abs(b.vx) * BOUNCE; b.va *= -0.6; }
        if (b.y - b.cr < ceil && b.vy < 0) { b.y = ceil + b.cr; b.vy = Math.abs(b.vy) * BOUNCE; }
        if (b.y + b.cr >= floor) {
          b.y = floor - b.cr;
          if (b.vy > 0) b.vy = -b.vy * BOUNCE;
          if (Math.abs(b.vy) < 90) b.vy = 0;
          if (b.round) { b.vx *= Math.pow(0.25, dt); b.va = b.vx / b.r; }
          else {
            // flat things slide to a stop and settle onto a side
            b.vx *= Math.pow(0.02, dt);
            const q = Math.PI / 2, target = Math.round(b.a / q) * q;
            b.va = (target - b.a) * 10;
          }
          if (Math.abs(b.vx) < 3) b.vx = 0;
        } else {
          b.va *= Math.pow(0.5, dt);
        }
      }
      // circle-vs-circle collisions (a held object acts like a heavy paddle)
      for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
          const A = bodies[i], B = bodies[j];
          const dx = B.x - A.x, dy = B.y - A.y, min = A.cr + B.cr;
          const d2 = dx * dx + dy * dy;
          if (d2 >= min * min || d2 === 0) continue;
          const d = Math.sqrt(d2), nx = dx / d, ny = dy / d, overlap = min - d;
          const ma = A.drag ? 0 : 1, mb = B.drag ? 0 : 1, tot = ma + mb;
          if (!tot) continue;
          A.x -= nx * overlap * (ma / tot); A.y -= ny * overlap * (ma / tot);
          B.x += nx * overlap * (mb / tot); B.y += ny * overlap * (mb / tot);
          const vn = (B.vx - A.vx) * nx + (B.vy - A.vy) * ny;
          if (vn < 0) {
            const jn = (-(1 + BOUNCE) * vn) / tot;
            A.vx -= jn * nx * ma; A.vy -= jn * ny * ma;
            B.vx += jn * nx * mb; B.vy += jn * ny * mb;
          }
        }
      }
      let moving = false;
      for (const b of bodies) {
        render(b);
        if (b.drag || Math.abs(b.vx) > 4 || Math.abs(b.vy) > 30 || Math.abs(b.va) > 0.03) moving = true;
      }
      calm = moving ? 0 : calm + 1;
      if (calm < 20 && visible) raf = requestAnimationFrame(step);
    }
    function wake() {
      if (reduce) return;
      calm = 0;
      if (!raf && visible) { last = performance.now(); raf = requestAnimationFrame(step); }
    }

    function bindDrag(b) {
      let samples = [], ox = 0, oy = 0;
      b.el.addEventListener('pointerdown', (e) => {
        if (e.button !== 0) return;
        e.preventDefault();
        const r = box.getBoundingClientRect();
        b.drag = true;
        b.el.setPointerCapture(e.pointerId);
        b.el.classList.add('is-held');
        b.el.style.zIndex = '2';
        ox = e.clientX - r.left - b.x; oy = e.clientY - r.top - b.y;
        samples = [{ x: e.clientX, y: e.clientY, t: performance.now() }];
        b.vx = b.vy = 0;
        wake();
      });
      b.el.addEventListener('pointermove', (e) => {
        if (!b.drag) return;
        const r = box.getBoundingClientRect();
        const nx = clamp(e.clientX - r.left - ox, b.cr, W - b.cr);
        const ny = clamp(e.clientY - r.top - oy, ceil + b.cr, floor - b.cr);
        const t = performance.now();
        samples.push({ x: e.clientX, y: e.clientY, t });
        while (samples.length > 2 && t - samples[0].t > 90) samples.shift();
        const s0 = samples[0], sdt = Math.max((t - s0.t) / 1000, 0.008);
        b.vx = (e.clientX - s0.x) / sdt; b.vy = (e.clientY - s0.y) / sdt;
        b.a += (nx - b.x) * 0.012;   // a little spin as you drag
        b.x = nx; b.y = ny;
        render(b);
      });
      const end = () => {
        if (!b.drag) return;
        b.drag = false;
        b.el.classList.remove('is-held');
        b.el.style.zIndex = '';
        const lastS = samples[samples.length - 1];
        if (!lastS || performance.now() - lastS.t > 80) { b.vx = 0; b.vy = 0; }   // held still, so just drop it
        b.vx = clamp(b.vx, -2800, 2800); b.vy = clamp(b.vy, -2800, 2800);
        b.va = (b.vx / b.r) * 0.6;
        if (reduce) { b.y = floor - b.cr; b.vx = b.vy = 0; render(b); }
        wake();
      };
      b.el.addEventListener('pointerup', end);
      b.el.addEventListener('pointercancel', end);
    }

    // Objects drop onto the table the first time you scroll down to it
    function release() {
      if (released) return;
      released = true;
      if (!motionOK) { bodies.forEach((b) => { b.el.style.opacity = ''; }); return; }
      bodies.forEach((b, i) => {
        b.y = ceil + b.cr + i * 24;
        b.vx = rand(-140, 140);
        b.a = rand(-0.5, 0.5);
        b.el.style.opacity = '';
        render(b);
        gsap.from(b.el, { opacity: 0, duration: 0.25, delay: i * 0.05 });
      });
      wake();
    }

    function init() {
      measure();
      const xs = W < 720 ? [0.2, 0.42, 0.64, 0.84] : [0.34, 0.48, 0.62, 0.78];
      ['knob', 'block', 'square', 'tape'].forEach((t, i) => {
        const b = add(t, xs[i] * W, 0);
        b.y = floor - b.cr;
        if (motionOK) b.el.style.opacity = '0';
        render(b);
      });
      new IntersectionObserver(([en]) => {
        visible = en.isIntersecting;
        if (visible && en.intersectionRatio >= 0.35) release();
        if (visible) wake();
      }, { threshold: [0, 0.35] }).observe(box);
      let rt;
      window.addEventListener('resize', () => {
        clearTimeout(rt);
        rt = setTimeout(() => {
          const oldW = W;
          measure();
          const s = baseSize();
          bodies.forEach((b) => {
            const size = s * b.mult;
            b.el.style.width = b.el.style.height = size + 'px';
            b.r = size / 2; b.cr = b.r * kinds[b.type].fit;
            b.x = clamp(oldW ? (b.x / oldW) * W : b.x, b.cr, W - b.cr);
            b.y = Math.min(b.y, floor - b.cr);
            render(b);
          });
          wake();
        }, 150);
      });
    }

    // Easter egg: empty the parts drawer onto the table
    function rain() {
      measure();
      release();
      const types = Object.keys(kinds), extras = [];
      for (let i = 0; i < 12; i++) {
        setTimeout(() => {
          const b = add(types[i % 4], rand(0.08, 0.92) * W, 0, rand(0.45, 0.7));
          b.y = reduce ? floor - b.cr : ceil + b.cr + rand(0, 40);
          b.vx = rand(-250, 250);
          b.a = rand(-1, 1);
          render(b);
          extras.push(b);
          wake();
        }, reduce ? 0 : i * 80);
      }
      setTimeout(() => { // tidy the extras away after a while
        extras.forEach((b) => {
          const remove = () => { b.el.remove(); bodies.splice(bodies.indexOf(b), 1); };
          if (motionOK) gsap.to(b.el, { opacity: 0, duration: 0.6, onComplete: remove }); else remove();
        });
      }, 20000);
    }
    init();
    return { rain, box };
  })();

  /* ---- G4. Project cards → case study (the cover grows into the page) ---- */
  document.body.insertAdjacentHTML('beforeend', `
    <div class="case" id="case" role="dialog" aria-modal="true" aria-labelledby="case-title" hidden>
      <div class="case-bg"></div>
      <div class="case-scroll">
        <div class="case-top">
          <span class="case-crumb">Projects / <b id="case-crumb-title"></b></span>
          <button class="btn btn-ghost btn-sm case-close" type="button">${X_ICON} Close</button>
        </div>
        <div id="case-body"></div>
      </div>
    </div>`);
  caseEl = $('#case');
  const caseBody = $('#case-body');
  const caseScroll = $('.case-scroll', caseEl);
  const baseTitle = document.title;
  let hiddenCard = null, caseReturnFocus = null;

  const caseHTML = (p) => {
    GALLERIES.case = [];
    const next = PROJECTS[(PROJECTS.indexOf(p) + 1) % PROJECTS.length];
    const img = (name, alt, label, ar = [4, 3]) => media({ src: `images/${p.slug}/${name}.jpg`, alt, label, ar });
    return `
      <div class="case-hero">${media({ src: p.cover, alt: p.coverAlt, label: `${p.title} cover`, ar: [16, 10], lazy: false }, 'case-media')}</div>
      <div class="case-inner">
        <header class="case-fade">
          ${p.context ? `<p class="case-kicker">${esc(p.context)}</p>` : ''}
          <h2 class="case-title" id="case-title" tabindex="-1">${esc(p.title)}</h2>
          <p class="case-summary">${esc(p.summary)}</p>
        </header>
        <dl class="case-meta case-fade">
          ${[['Role', p.role], ['Timeline', p.timeline], ['Team', p.team], ['Tools', p.tools.join(', ')]]
            .filter(([, v]) => v).map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('')}
        </dl>
        ${p.overview ? `<section class="case-block case-fade" aria-labelledby="h-overview">
          <div class="case-sec"><h3 id="h-overview">Overview</h3><div><p>${esc(p.overview)}</p></div></div>
        </section>` : ''}
        ${p.problem ? `<section class="case-block case-fade" aria-labelledby="h-problem">
          <div class="case-sec"><h3 id="h-problem">Problem</h3><div><p>${esc(p.problem)}</p></div></div>
        </section>` : ''}
        ${p.requirements ? `<section class="case-block case-fade" aria-labelledby="h-req">
          <div class="case-sec"><h3 id="h-req">Requirements</h3><div>
            <ul class="checklist">${p.requirements.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>
          </div></div>
        </section>` : ''}
        ${p.goals ? `<section class="case-block case-fade" aria-labelledby="h-goals">
          <div class="case-sec"><h3 id="h-goals">My goals</h3><div>
            <ol class="goal-list">${p.goals.map((g) => `<li>${esc(g)}</li>`).join('')}</ol>
          </div></div>
        </section>` : ''}
        ${p.market ? `<section class="case-block case-fade" aria-labelledby="h-market">
          <div class="case-sec"><h3 id="h-market">Market</h3><div>
            <table class="market">
              <thead><tr><th scope="col">Product</th><th scope="col">Base</th><th scope="col">Price</th><th scope="col">What it does</th></tr></thead>
              <tbody>${p.market.rows.map((r) => `
                <tr>
                  <th scope="row">${esc(r.product)}</th>
                  <td data-label="Base">${esc(r.base)}</td>
                  <td data-label="Price" class="market-price">${esc(r.price)}</td>
                  <td data-label="What it does">${esc(r.note)}</td>
                </tr>`).join('')}
              </tbody>
            </table>
            ${p.market.takeaway ? `<p class="market-takeaway"><b>Where ${esc(p.title.split(' ')[0])} fits:</b> ${esc(p.market.takeaway)}</p>` : ''}
          </div></div>
        </section>` : ''}
        <section class="case-block case-fade" aria-labelledby="h-process">
          <div class="case-sec"><h3 id="h-process">Process</h3><div></div></div>
          <ol class="steps">${p.process.map((s, i) => s.groups ? `
            <li class="step step-wide">
              <h4><span class="step-n">${i + 1}</span>${esc(s.title)}</h4>
              <p>${esc(s.text)}</p>
              ${s.groups.map((g) => `<div class="step-group">${g.title ? `<h5>${esc(g.title)}</h5>` : ''}
                <div class="gallery">${g.images.map(([file, cap]) => {
                  const k = GALLERIES.case.push({ title: cap, src: `images/${p.slug}/${file}.jpg`, ar: [4, 3] }) - 1;
                  return `<figure class="gfig"><button type="button" class="gfig-btn" data-lb="${k}" data-cursor="Enlarge" aria-label="Enlarge: ${esc(cap)}">${media({ src: `images/${p.slug}/${file}.jpg`, alt: cap, label: cap, ar: [4, 3] })}</button><figcaption>${esc(cap)}</figcaption></figure>`;
                }).join('')}</div></div>`).join('')}
            </li>` : `
            <li class="step">
              ${img(`process-${i + 1}`, `${p.title} process: ${s.title}`, `${p.title}, process ${i + 1}`, s.ar)}
              <h4><span class="step-n">${i + 1}</span>${esc(s.title)}</h4>
              <p>${esc(s.text)}</p>
            </li>`).join('')}
          </ol>
        </section>
        ${p.timeline ? `<section class="case-block case-fade" aria-labelledby="h-ops">
          <div class="case-sec"><h3 id="h-ops">Order of operations</h3><div></div></div>
          <ol class="timeline">${p.timeline.map(([t, d, pivot]) => `<li${pivot ? ' class="is-pivot"' : ''}><b>${esc(t)}</b>${d ? `<span>${esc(d)}</span>` : ''}</li>`).join('')}</ol>
        </section>` : ''}
        ${p.materials ? `<section class="case-block case-fade" aria-labelledby="h-mat">
          <div class="case-sec"><h3 id="h-mat">Materials</h3><div class="next-cols">
            ${Object.entries(p.materials).map(([k, items]) => `<div><h4>${esc(k)}</h4><ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></div>`).join('')}
          </div></div>
        </section>` : ''}
        <section class="case-block case-fade" aria-labelledby="h-outcome">
          <div class="case-sec"><h3 id="h-outcome">Outcome</h3><div><p>${esc(p.outcome)}</p></div></div>
          <div class="outcome-grid">
            ${img('outcome-1', `${p.title}, final design`, `${p.title}, outcome 1`, [16, 9])}
            ${img('outcome-2', `${p.title}, detail view`, `${p.title}, outcome 2`)}
            ${img('outcome-3', `${p.title}, in use`, `${p.title}, outcome 3`)}
          </div>
        </section>
        ${p.nextTime ? `<section class="case-block case-fade" aria-labelledby="h-next">
          <div class="case-sec"><h3 id="h-next">What I'd do next time</h3><div class="next-cols">
            ${Object.entries(p.nextTime).map(([k, items]) => `<div><h4>${esc(k)}</h4><ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></div>`).join('')}
          </div></div>
        </section>` : ''}
        <nav class="case-next case-fade" aria-label="Next project">
          <button type="button" class="next-btn" data-next="${next.slug}" data-cursor="Next"><span class="next-label">Next project</span><span class="next-title">${esc(next.title)}</span></button>
        </nav>
      </div>`;
  };
  const coverOf = (slug) => $(`.card[data-slug="${slug}"] .card-media`);
  const flipFrom = (a, b) => ({ x: a.left - b.left, y: a.top - b.top, scaleX: a.width / b.width, scaleY: a.height / b.height, transformOrigin: '0 0' });
  const fill = (p) => {
    caseBody.innerHTML = caseHTML(p);
    $('#case-crumb-title').textContent = p.title;
    document.title = `${p.title} | Eliana King`;
    caseReturnFocus = $(`.card[data-slug="${p.slug}"] .card-link`);
  };

  const openCase = (slug, fromCard) => {
    const p = PROJECTS.find((x) => x.slug === slug);
    if (!p || caseOpen === slug) return;
    caseOpen = slug;
    fill(p);
    caseEl.hidden = false;
    caseScroll.scrollTop = 0;
    lockScroll();
    const cover = coverOf(slug);
    const target = $('.case-media', caseEl);
    if (motionOK) {
      const card = fromCard && cover ? cover.getBoundingClientRect() : null;
      gsap.set('.case-fade', { opacity: 0, y: 30 });
      gsap.fromTo('.case-bg', { opacity: 0 }, { opacity: 1, duration: 0.45, ease: 'power2.out' });
      gsap.fromTo('.case-top > *', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.4, delay: 0.4 });
      if (card) {
        hiddenCard = cover; cover.style.visibility = 'hidden';
        gsap.fromTo(target, flipFrom(card, target.getBoundingClientRect()), { x: 0, y: 0, scaleX: 1, scaleY: 1, duration: 0.85, ease: 'expo.inOut', clearProps: 'transform' });
      } else {
        gsap.fromTo(target, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: 'expo.out' });
      }
      gsap.to('.case-fade', { opacity: 1, y: 0, stagger: 0.07, duration: 0.9, ease: 'expo.out', delay: card ? 0.55 : 0.2 });
    }
    $('.case-close', caseEl).focus({ preventScroll: true });
  };

  const closeCase = () => {
    if (!caseOpen) return;
    const slug = caseOpen;
    caseOpen = null;
    const cover = coverOf(slug);
    const target = $('.case-media', caseEl);
    const done = () => {
      caseEl.hidden = true;
      caseBody.innerHTML = '';
      if (hasGSAP) gsap.set(caseEl.children, { clearProps: 'opacity' });
      if (hiddenCard) { hiddenCard.style.visibility = ''; hiddenCard = null; }
      unlockScroll();
      document.title = baseTitle;
      if (caseReturnFocus) caseReturnFocus.focus({ preventScroll: true });
    };
    if (motionOK && cover && target) {
      // make sure the card is on screen behind the overlay, then fly back into it
      const cr = cover.getBoundingClientRect();
      if (cr.bottom < 0 || cr.top > window.innerHeight) {
        window.scrollTo({ top: window.scrollY + cr.top - (window.innerHeight - cr.height) / 2, behavior: 'instant' });
      }
      if (hiddenCard && hiddenCard !== cover) hiddenCard.style.visibility = '';
      hiddenCard = cover; cover.style.visibility = 'hidden';
      gsap.to('.case-fade, .case-top > *', { opacity: 0, duration: 0.25 });
      gsap.to('.case-bg', { opacity: 0, duration: 0.45, delay: 0.3 });
      gsap.to(target, { ...flipFrom(cover.getBoundingClientRect(), target.getBoundingClientRect()), duration: 0.75, ease: 'expo.inOut', onComplete: done });
    } else if (motionOK) {
      gsap.to(caseEl.children, { opacity: 0, duration: 0.35, onComplete: done });   // project isn't on the home page, so just fade
    } else done();
  };

  // "Next project" swaps the content in place
  const swapCase = (slug) => {
    const p = PROJECTS.find((x) => x.slug === slug);
    history.replaceState(history.state, '', `#case/${slug}`);
    const apply = () => {
      if (hiddenCard) { hiddenCard.style.visibility = ''; hiddenCard = null; }
      caseOpen = slug;
      fill(p);
      caseScroll.scrollTop = 0;
      if (motionOK) {
        gsap.from('.case-media', { opacity: 0, y: 30, duration: 0.6, ease: 'expo.out' });
        gsap.from('.case-fade', { opacity: 0, y: 30, stagger: 0.06, duration: 0.8, ease: 'expo.out', delay: 0.1 });
      }
      $('#case-title').focus({ preventScroll: true });
    };
    if (motionOK) gsap.to(caseBody, { opacity: 0, duration: 0.25, onComplete: () => { apply(); gsap.set(caseBody, { opacity: 1 }); } });
    else apply();
  };

  $('#project-grid').addEventListener('click', (e) => {
    const link = e.target.closest('.card-link');
    if (!link || e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    const slug = link.closest('.card').dataset.slug;
    history.pushState({ case: slug }, '', `#case/${slug}`);
    pushedCase = true;
    openCase(slug, true);
  });
  requestCloseCase = () => {
    if (pushedCase) { pushedCase = false; history.back(); }   // popstate closes it
    else { history.replaceState(null, '', location.pathname + location.search + '#work'); closeCase(); }
  };
  $('.case-close', caseEl).addEventListener('click', () => requestCloseCase());
  caseEl.addEventListener('click', (e) => {
    const nb = e.target.closest('.next-btn');
    if (nb) swapCase(nb.dataset.next);
    const g = e.target.closest('.gfig-btn');
    if (g) openLightbox('case', +g.dataset.lb, g);
  });
  window.addEventListener('popstate', () => {
    const m = location.hash.match(/^#case\/([\w-]+)/);
    if (m && caseOpen !== m[1]) openCase(m[1], false);
    else if (!m && caseOpen) { pushedCase = false; closeCase(); }
  });

  /* ---- G5. Intro + hero entrance ---- */
  const heroIn = () => {
    if (!motionOK) return;
    gsap.timeline()
      .from('.hero-hello', { y: 20, opacity: 0, duration: 0.6, ease: 'expo.out' })
      .from(letters, { yPercent: 60, opacity: 0, rotation: () => rand(-20, 20), duration: 1, ease: 'expo.out', stagger: 0.04 }, '-=0.45')
      .from('.hero-intro, .hero-cta', { y: 24, opacity: 0, duration: 0.8, ease: 'expo.out', stagger: 0.1 }, '-=0.7')
      // the photo has a CSS hover transition, so pause it while GSAP moves the photo in
      .fromTo('.polaroid', { y: 80, rotation: 14, opacity: 0 }, {
        y: 0, rotation: 3, opacity: 1, duration: 1.1, ease: 'expo.out', clearProps: 'transform,opacity',
        onStart: () => { $('.polaroid').style.transition = 'none'; },
        onComplete: () => { $('.polaroid').style.transition = ''; },
      }, '-=0.9');
  };
  const intro = $('#intro');
  if (intro && root.classList.contains('intro-play')) {
    lockScroll();
    const tl = gsap.timeline({
      onComplete: () => {
        intro.remove();
        root.classList.remove('intro-play');
        unlockScroll();
        try { sessionStorage.setItem('ek-intro-seen', '1'); } catch (e) {}
        heroIn();
      },
    });
    tl.from('.box', { scale: 0.6, rotation: -10, opacity: 0, duration: 0.45, ease: 'back.out(1.8)' })
      .to('.box-tape', { scaleY: 0, duration: 0.4, ease: 'power2.in' }, '+=0.05')
      .to('.flap-l', { rotationY: -168, duration: 0.55, ease: 'power3.inOut' }, '-=0.02')
      .to('.flap-r', { rotationY: 168, duration: 0.55, ease: 'power3.inOut' }, '<')
      .fromTo('.intro-name', { y: 40, scale: 0.4, opacity: 0 }, { y: -150, scale: 1, opacity: 1, duration: 0.55, ease: 'back.out(1.6)' }, '-=0.3')
      .to('.intro-stage', { scale: 1.08, opacity: 0, duration: 0.35, ease: 'power2.in' }, '+=0.3')
      .to(intro, { opacity: 0, duration: 0.25 }, '-=0.1');
    const skip = () => tl.progress(1);
    intro.addEventListener('click', skip);
    document.addEventListener('keydown', skip, { once: true });
  } else {
    if (intro) intro.remove();
    heroIn();
  }

  // Deep link straight to a case study, e.g. yoursite.com/#case/pause
  const deep = location.hash.match(/^#case\/([\w-]+)/);
  if (deep) openCase(deep[1], false);
}

/* =====================================================================
   H. FABRICATION PAGE: move across a photo to step through the build
   ===================================================================== */
if (page === 'fabrication') {
  $('#fab-grid').innerHTML = FABRICATION.map((f) => `
    <li class="fab" data-reveal>
      <div class="fab-media" data-cursor="Scrub" aria-hidden="true">
        ${f.stages.map((s, j) => media({
          src: `images/fabrication/${f.slug}-${j + 1}.jpg`,
          alt: `${f.title}, ${s.toLowerCase()} stage`,
          label: `${f.title}: ${s}`, ar: [4, 3],
        }, j === f.stages.length - 1 ? 'is-active' : '')).join('')}
      </div>
      <div class="fab-progress" aria-hidden="true"><span></span></div>
      <ol class="fab-steps" style="--n:${f.stages.length}" aria-label="${esc(f.title)} build stages">
        ${f.stages.map((s, j) => `<li><button type="button" aria-pressed="${j === f.stages.length - 1}">${j + 1}. ${esc(s)}</button></li>`).join('')}
      </ol>
      <div class="fab-text">
        <h3>${esc(f.title)}</h3>
        <p class="fab-mat">${esc(f.materials)}</p>
        ${f.note ? `<p>${esc(f.note)}</p>` : ''}
      </div>
    </li>`).join('');

  $$('.fab').forEach((fab) => {
    const stages = $$('.ph', fab);
    const btns = $$('.fab-steps button', fab);
    const bar = $('.fab-progress span', fab);
    const mediaBox = $('.fab-media', fab);
    const n = stages.length;
    let idx = n - 1;
    const set = (i) => {
      if (i === idx) return;
      idx = i;
      stages.forEach((s, j) => s.classList.toggle('is-active', j === i));
      btns.forEach((b, j) => b.setAttribute('aria-pressed', String(j === i)));
      bar.style.transform = `scaleX(${(i + 1) / n})`;
    };
    mediaBox.addEventListener('pointermove', (e) => {
      const r = mediaBox.getBoundingClientRect();
      set(clamp(Math.floor(((e.clientX - r.left) / r.width) * n), 0, n - 1));
    });
    btns.forEach((b, j) => b.addEventListener('click', () => set(j)));
  });
}

/* =====================================================================
   I. RENDERINGS PAGE
   ===================================================================== */
if (page === 'renderings') {
  $('#render-grid').innerHTML = RENDERINGS.map((r, i) => `
    <li style="--span:${r.span}" data-reveal>
      <button class="render-item" type="button" data-index="${i}" data-cursor="Open">
        ${media({ src: r.src, alt: r.title, label: r.title, ar: r.ar })}
        <span class="render-cap">${esc(r.title)}</span>
      </button>
    </li>`).join('');
  $('#render-grid').addEventListener('click', (e) => {
    const b = e.target.closest('.render-item');
    if (b) openLightbox('renderings', +b.dataset.index, b);
  });
}

/* =====================================================================
   J. SKETCHES PAGE: scattered pages you can drag, or tidy into a grid
   ===================================================================== */
if (page === 'sketches') {
  const book = $('#sketchbook');
  book.innerHTML = SKETCHES.map((s, i) => `
    <button class="sketch" type="button" data-index="${i}" data-cursor="Drag or click" aria-label="Open sketch: ${esc(s.title)}">
      ${media({ src: s.src, alt: s.title, label: s.title, ar: s.ar })}
      <span class="sketch-cap" aria-hidden="true">${esc(s.title)}</span>
    </button>`).join('');
  const cards = $$('.sketch', book);
  const tidyBtn = $('#tidy-btn');
  const state = SKETCHES.map((s) => ({ fx: s.x, fy: s.y, r: s.r, x: 0, y: 0 }));
  let tidy = false, z = 10, cardW = 200;
  const mobile = () => window.innerWidth < 720;

  const place = (el, s, animate, i = 0) => {
    if (hasGSAP) {
      if (animate && motionOK) gsap.to(el, { x: s.x, y: s.y, rotation: s.r, scale: 1, duration: 0.9, ease: 'expo.inOut', delay: i * 0.03 });
      else gsap.set(el, { x: s.x, y: s.y, rotation: s.r, scale: 1 });
    } else el.style.transform = `translate(${s.x}px, ${s.y}px) rotate(${s.r}deg)`;
  };
  const layout = (animate = false) => {
    const W = book.clientWidth, gap = mobile() ? 14 : 28;
    const grid = tidy || mobile();
    const cols = mobile() ? 2 : W > 1050 ? 4 : 3;
    cardW = grid ? Math.floor((W - gap * (cols + 1)) / cols) : clamp(W * 0.2, 150, 250);
    cards.forEach((c) => { c.style.width = cardW + 'px'; });
    const heights = cards.map((c) => c.offsetHeight);
    book.classList.toggle('can-drag', !mobile() && finePointer);
    if (grid) {
      // masonry: drop each page into the shortest column
      const colH = Array(cols).fill(gap + 8);
      state.forEach((s, i) => {
        const c = colH.indexOf(Math.min(...colH));
        s.x = gap + c * (cardW + gap);
        s.y = colH[c];
        s.r = mobile() ? SKETCHES[i].r * 0.3 : 0;
        colH[c] += heights[i] + gap + 6;
      });
      book.style.height = Math.max(...colH) + 'px';
    } else {
      const H = clamp(W * 0.7, 760, 920);
      book.style.height = H + 'px';
      state.forEach((s, i) => {
        s.x = s.fx * (W - cardW - 20) + 10;
        s.y = s.fy * (H - heights[i] - 30) + 20;
      });
    }
    cards.forEach((c, i) => place(c, state[i], animate, i));
  };

  // Drag (desktop). A click without movement opens the page; hovering straightens it.
  cards.forEach((el, i) => {
    let sx, sy, ox, oy, moved = false, down = false, lastX = 0;
    el.addEventListener('pointerenter', (e) => {
      if (e.pointerType !== 'mouse' || down || mobile() || !hasGSAP) return;
      gsap.to(el, { rotation: 0, scale: 1.02, duration: motionOK ? 0.5 : 0, ease: 'back.out(2)', overwrite: 'auto' });
    });
    el.addEventListener('pointerleave', (e) => {
      if (e.pointerType !== 'mouse' || down || mobile() || !hasGSAP) return;
      gsap.to(el, { rotation: state[i].r, scale: 1, duration: motionOK ? 0.6 : 0, ease: 'back.out(2)', overwrite: 'auto' });
    });
    el.addEventListener('pointerdown', (e) => {
      if (mobile() || e.pointerType !== 'mouse' || e.button !== 0) return;
      down = true; moved = false;
      sx = e.clientX; sy = e.clientY; ox = state[i].x; oy = state[i].y; lastX = e.clientX;
      el.setPointerCapture(e.pointerId);
    });
    el.addEventListener('pointermove', (e) => {
      if (!down) return;
      const dx = e.clientX - sx, dy = e.clientY - sy;
      if (!moved && Math.hypot(dx, dy) < 6) return;
      if (!moved) {
        moved = true;
        el.classList.add('is-grabbed');
        el.style.zIndex = ++z;
        if (tidy) { // start from the grid, but stop being tidy
          tidy = false;
          tidyBtn.textContent = 'Tidy up';
          tidyBtn.setAttribute('aria-pressed', 'false');
        }
      }
      const W = book.clientWidth, H = book.clientHeight;
      const s = state[i];
      s.x = clamp(ox + dx, -cardW * 0.3, W - cardW * 0.7);
      s.y = clamp(oy + dy, -20, H - el.offsetHeight * 0.4);
      const tilt = clamp((e.clientX - lastX) * 0.6, -12, 12);   // lean into the motion
      lastX = e.clientX;
      if (hasGSAP) {
        gsap.set(el, { x: s.x, y: s.y });
        gsap.to(el, { rotation: tilt, scale: 1.05, duration: motionOK ? 0.3 : 0, overwrite: 'auto' });
      } else el.style.transform = `translate(${s.x}px, ${s.y}px) rotate(${s.r}deg)`;
    });
    const end = () => {
      if (!down) return;
      down = false;
      if (!moved) return;
      el.classList.remove('is-grabbed');
      el._dragged = true;
      const s = state[i], W = book.clientWidth, H = book.clientHeight;
      s.r = clamp(s.r + rand(-3, 3), -10, 10);
      s.fx = clamp((s.x - 10) / (W - cardW - 20), -0.2, 1.2);
      s.fy = clamp((s.y - 20) / (H - el.offsetHeight - 30), -0.1, 1.1);
      if (hasGSAP) gsap.to(el, { rotation: 0, scale: 1.02, duration: motionOK ? 0.6 : 0, ease: 'back.out(2.2)', overwrite: 'auto' });
      // remember where every other page sits too
      cards.forEach((c, j) => {
        if (j === i) return;
        state[j].fx = (state[j].x - 10) / (W - cardW - 20);
        state[j].fy = (state[j].y - 20) / (H - c.offsetHeight - 30);
      });
    };
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
    el.addEventListener('click', (e) => {
      if (el._dragged) { el._dragged = false; e.preventDefault(); return; }
      openLightbox('sketches', i, el);
    });
  });

  tidyBtn.addEventListener('click', () => {
    tidy = !tidy;
    if (!tidy) state.forEach((s, i) => { s.fx = SKETCHES[i].x; s.fy = SKETCHES[i].y; s.r = SKETCHES[i].r + rand(-2, 2); });
    else cards.forEach((c) => { c.style.zIndex = ''; });
    tidyBtn.textContent = tidy ? 'Scatter again' : 'Tidy up';
    tidyBtn.setAttribute('aria-pressed', String(tidy));
    layout(true);
  });

  let rt;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => layout(false), 150); });
  if (document.fonts) document.fonts.ready.then(() => layout(false));
  layout(false);

  // Pages drop onto the table when you scroll to them
  if (motionOK && hasST) {
    gsap.set(cards, { opacity: 0 });
    ScrollTrigger.create({
      trigger: book, start: 'top 85%', once: true,
      onEnter: () => cards.forEach((c, i) => {
        gsap.fromTo(c, { opacity: 0, scale: 1.25 }, { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.4)', delay: i * 0.07 });
      }),
    });
  }
}

/* =====================================================================
   K. SCROLL REVEALS (every page): staggered, transforms + opacity only
   ===================================================================== */
if (motionOK && hasST) {
  const els = $$('[data-reveal]');
  gsap.set(els, { opacity: 0, y: 40 });
  ScrollTrigger.batch(els, {
    start: 'top 90%', once: true,
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 1, ease: 'expo.out', stagger: 0.1, overwrite: true }),
  });
  // Section markers roll in like the objects on the table
  $$('.sec-marker').forEach((m) => gsap.from(m, {
    rotation: -200, x: -60, opacity: 0, duration: 1.1, ease: 'expo.out',
    scrollTrigger: { trigger: m, start: 'top 92%', once: true },
  }));
}

/* =====================================================================
   L. KEYBOARD: Esc closes things, arrows browse, focus stays in overlays
   ===================================================================== */
let keyBuffer = '';
document.addEventListener('keydown', (e) => {
  if (lb && !lb.hidden) {
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowRight') lbGo(1);
    else if (e.key === 'ArrowLeft') lbGo(-1);
    else if (e.key === 'Tab') trapFocus(lb, e);
    return;
  }
  if (caseOpen) {
    if (e.key === 'Escape') requestCloseCase();
    else if (e.key === 'Tab') trapFocus(caseEl, e);
    return;
  }
  if (!sheet.hidden) {
    if (e.key === 'Escape') closeSheet();
    else if (e.key === 'Tab') trapFocus(sheet, e);
    return;
  }
  // Easter egg (home page): type "eyk"
  if (Physics && e.key && e.key.length === 1 && !e.metaKey && !e.ctrlKey) {
    keyBuffer = (keyBuffer + e.key.toLowerCase()).slice(-3);
    if (keyBuffer === 'eyk') {
      keyBuffer = '';
      toast('You found the parts drawer.');
      Physics.box.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
      setTimeout(() => Physics.rain(), reduce ? 0 : 700);
    }
  }
});

})();
