window.RESOURCES_BPO = [
  {
    name: "Kwestyon",
    by: "Sheina Mendez \u2014 4 yrs as CSR & QA",
    use: "Listening + Reading Aloud (Wed)",
    desc: "Call-center interview prep, mock calls, and call-handling tips from a former agent and QA analyst.",
    url: "https://www.youtube.com/c/kwestyon",
  },
  {
    name: "Call Center Training Tips",
    by: "Kevin Olega",
    use: "Listening + Speaking (Fri)",
    desc: "Mock call scripts, interview answers, and English clarity lessons aimed at landing and keeping a BPO job.",
    url: "https://www.youtube.com/c/CallCenterTrainingTips",
  },
  {
    name: "Call Center Academy",
    by: "ESL / customer-service focused",
    use: "Extra listening, any day",
    desc: "Intermediate English for customer service \u2014 active listening drills, role plays, and empathy scripts.",
    url: "https://www.youtube.com/channel/UCZK8sf1tpwq4k1ieEmBVS5w",
  },
];
window.RESOURCES_GENERAL = [
  {
    name: "VOA Learning English",
    by: "Voice of America",
    use: "Listening (Mon)",
    desc: "Free news broadcasts at two speaking speeds \u2014 good for building up listening stamina.",
    url: "https://learningenglish.voanews.com/",
  },
  {
    name: "TED Talks",
    by: "TED",
    use: "Listening + Shadowing (Tue)",
    desc: "Short, subtitled talks \u2014 turn captions off once you know the content, then shadow.",
    url: "https://www.ted.com/talks",
  },
  {
    name: "BBC Learning English",
    by: "BBC",
    use: "Grammar + Listening, any day",
    desc: "6 Minute English and short grammar lessons focused on everyday spoken English.",
    url: "https://www.bbc.co.uk/learningenglish",
  },
  {
    name: "Project Gutenberg",
    by: "Public domain library",
    use: "Reading Aloud, any day",
    desc: "Free books and short stories \u2014 pick a chapter to read aloud and record yourself.",
    url: "https://www.gutenberg.org/",
  },
];

// ===== next block =====

(function () {
  function buildResCards(hostId, items) {
    const host = document.getElementById(hostId);
    if (!host) return;
    host.innerHTML = "";
    items.forEach((r) => {
      const card = document.createElement("div");
      card.className = "res-card";
      card.innerHTML = `
        <div class="rc-top">
          <div>
            <div class="rc-name">${r.name}</div>
            <div class="rc-by">${r.by}</div>
          </div>
        </div>
        <div class="rc-tag">${r.use}</div>
        <div class="rc-desc">${r.desc}</div>
        <a class="rc-link" href="${r.url}" target="_blank" rel="noopener">Open channel \u2197</a>`;
      host.appendChild(card);
    });
  }
  buildResCards("resGridBpo", window.RESOURCES_BPO);
  buildResCards("resGridGeneral", window.RESOURCES_GENERAL);
})();

// ===== next block =====

(function () {
  const BLOCKS = [
    {
      id: "listening",
      order: "01",
      label: "Listening",
      time: "9:00 – 9:20",
      dur: "20 min",
      desc: (d) =>
        `Listen actively to ${d.material}. Jot 2–3 new words or phrases you hear.`,
    },
    {
      id: "shadowing",
      order: "02",
      label: "Shadowing",
      time: "9:20 – 9:40",
      dur: "20 min",
      desc: () =>
        `Replay the same clip and shadow it line by line — match pace, rhythm and tone.`,
    },
    {
      id: "reading",
      order: "03",
      label: "Reading Aloud",
      time: "9:40 – 9:55",
      dur: "15 min",
      desc: (d) =>
        `Read aloud: ${d.reading}. Record yourself and focus on pronunciation.`,
    },
    {
      id: "speaking",
      order: "04",
      label: "Speaking",
      time: "9:55 – 10:20",
      dur: "25 min",
      desc: () =>
        `Answer one interview-style question out loud for 60–90 sec. Record, then replay.`,
    },
    {
      id: "grammar",
      order: "05",
      label: "Grammar",
      time: "10:20 – 10:45",
      dur: "25 min",
      desc: () =>
        `Correct 2–3 sentences from today's recording. Drill one grammar point.`,
    },
    {
      id: "structure",
      order: "06",
      label: "Structure",
      time: "10:45 – 11:00",
      dur: "15 min",
      desc: () =>
        `Re-answer using PREP — Point, Reason, Example, Point. Keep it under 45 seconds.`,
    },
  ];

  const WEEKDAY_CONTENT = {
    0: {
      material: "a podcast or video on a hobby you enjoy",
      materialUrl: null,
      materialSource: null,
      reading: "any book of your choice",
      readingUrl: "https://www.gutenberg.org/",
      readingSource: "Project Gutenberg",
    },
    1: {
      material: "a VOA Learning English news broadcast",
      materialUrl: "https://learningenglish.voanews.com/",
      materialSource: "VOA Learning English",
      reading: "a news article (BBC News / Rappler)",
      readingUrl: "https://www.bbc.com/news",
      readingSource: "BBC News",
      readingUrl2: "https://www.rappler.com/",
      readingSource2: "Rappler",
    },
    2: {
      material: "a TED Talk (8–10 min)",
      materialUrl: "https://www.ted.com/talks",
      materialSource: "TED Talks",
      reading: "a chapter from a fiction book or graded reader",
      readingUrl: "https://www.gutenberg.org/",
      readingSource: "Project Gutenberg",
    },
    3: {
      material:
        "a Kwestyon video (Sheina Mendez) \u2014 call-handling tips or a mock call",
      materialUrl: "https://www.youtube.com/c/kwestyon",
      materialSource: "Kwestyon",
      reading:
        "a mock call script from kwestyon.com, or a customer-service email",
      readingUrl: "https://kwestyon.com/",
      readingSource: "kwestyon.com",
    },
    4: {
      material: "a YouTube interview or talk-show clip",
      materialUrl: null,
      materialSource: null,
      reading: "a short story, blog post, or poem",
      readingUrl: "https://www.gutenberg.org/",
      readingSource: "Project Gutenberg",
    },
    5: {
      material:
        "a Call Center Training Tips video (Kevin Olega) on interview answers",
      materialUrl: "https://www.youtube.com/c/CallCenterTrainingTips",
      materialSource: "Call Center Training Tips",
      reading: "the script from that video, copied out and read back",
      readingUrl: "https://callcentertrainingtips.com/",
      readingSource: "callcentertrainingtips.com",
    },
    6: {
      material: "a free-choice podcast or video",
      materialUrl: null,
      materialSource: null,
      reading: "any book you enjoy",
      readingUrl: "https://www.gutenberg.org/",
      readingSource: "Project Gutenberg",
    },
  };

  const QUOTES = [
    "Fluency is a habit before it is a talent.",
    "Every session is one interview question you\u2019ll never freeze on again.",
    "Say it out loud today. Say it easily tomorrow.",
    "Discipline now, confidence later.",
    "You are not behind. You are in training.",
    "Small reps, spoken daily, become fluency.",
    "The mic doesn\u2019t lie. Neither does practice.",
    "Today\u2019s twenty minutes is tomorrow\u2019s fluent answer.",
    "Consistency is the only accent you need to fix.",
    "Show up, speak up, level up.",
  ];

  const WD_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const PROGRAM_LEN = 30;
  const PROGRAM_START_FIXED = "2026-08-19";
  const STORAGE_KEY = "fluent30-progress-v1";

  let state = { programStart: null, days: {} };
  let selectedDate = new Date();
  let weekAnchor = new Date();
  let activeTab = "today";

  function fmtKey(d) {
    return (
      d.getFullYear() +
      "-" +
      String(d.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(d.getDate()).padStart(2, "0")
    );
  }
  function parseKey(k) {
    const [y, m, d] = k.split("-").map(Number);
    return new Date(y, m - 1, d);
  }
  function addDays(d, n) {
    const r = new Date(d);
    r.setDate(r.getDate() + n);
    r.setHours(0, 0, 0, 0);
    return r;
  }
  function clampMidnight(d) {
    const r = new Date(d);
    r.setHours(0, 0, 0, 0);
    return r;
  }
  function sameDay(a, b) {
    return fmtKey(a) === fmtKey(b);
  }
  function startOfWeek(d) {
    const day = d.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    return addDays(d, diff);
  }

  function dayIndex(d) {
    // 1-based index within program, may be <1 or >30
    const start = parseKey(state.programStart);
    const diff = Math.round((clampMidnight(d) - start) / 86400000);
    return diff + 1;
  }

  function getBlocksFor(key) {
    return (state.days[key] && state.days[key]) || {};
  }
  function fractionFor(key) {
    const rec = getBlocksFor(key);
    let n = 0;
    BLOCKS.forEach((b) => {
      if (rec[b.id]) n++;
    });
    return n / BLOCKS.length;
  }
  function isComplete(key) {
    return fractionFor(key) === 1;
  }

  async function loadState() {
    try {
      const res = await window.storage.get(STORAGE_KEY, false);
      if (res && res.value) {
        const parsed = JSON.parse(res.value);
        if (parsed && parsed.programStart) {
          state = parsed;
        }
      }
    } catch (e) {
      /* no existing record yet */
    }
    if (!state.programStart) {
      state.programStart = PROGRAM_START_FIXED;
      await saveState();
    }
    {
      const start = parseKey(state.programStart);
      const end = addDays(start, PROGRAM_LEN - 1);
      const today = clampMidnight(new Date());
      selectedDate = today < start ? start : today > end ? end : today;
    }
    weekAnchor = new Date(selectedDate);
  }

  let saving = false;
  async function saveState() {
    try {
      saving = true;
      await window.storage.set(STORAGE_KEY, JSON.stringify(state), false);
    } catch (e) {
      console.error("Could not save progress", e);
    } finally {
      saving = false;
    }
  }

  function toggleBlock(key, blockId) {
    if (!state.days[key]) state.days[key] = {};
    state.days[key][blockId] = !state.days[key][blockId];
    saveState();
    renderAll();
  }

  function resetProgress() {
    if (
      !confirm(
        "Reset all saved progress? This clears every day you\u2019ve logged and cannot be undone.",
      )
    )
      return;
    state = { programStart: PROGRAM_START_FIXED, days: {} };
    saveState();
    const start = parseKey(state.programStart);
    const end = addDays(start, PROGRAM_LEN - 1);
    const today = clampMidnight(new Date());
    selectedDate = today < start ? start : today > end ? end : today;
    weekAnchor = new Date(selectedDate);
    renderAll();
  }

  // ---------- streak & stats ----------
  function programDatesElapsed() {
    const start = parseKey(state.programStart);
    const today = clampMidnight(new Date());
    const end =
      today < addDays(start, PROGRAM_LEN - 1)
        ? today
        : addDays(start, PROGRAM_LEN - 1);
    const out = [];
    let d = new Date(start);
    while (d <= end) {
      out.push(fmtKey(d));
      d = addDays(d, 1);
    }
    return out;
  }

  function computeStats() {
    const dates = programDatesElapsed();
    let current = 0;
    let idx = dates.length - 1;
    if (idx >= 0 && !isComplete(dates[idx])) idx--;
    for (; idx >= 0; idx--) {
      if (isComplete(dates[idx])) current++;
      else break;
    }

    let best = 0,
      run = 0;
    dates.forEach((k) => {
      if (isComplete(k)) {
        run++;
        best = Math.max(best, run);
      } else {
        run = 0;
      }
    });

    let doneBlocks = 0;
    dates.forEach((k) => {
      const rec = getBlocksFor(k);
      BLOCKS.forEach((b) => {
        if (rec[b.id]) doneBlocks++;
      });
    });
    const totalPossible = dates.length * BLOCKS.length;
    const overallPct = totalPossible ? doneBlocks / totalPossible : 0;

    const skillPct = {};
    BLOCKS.forEach((b) => {
      let n = 0;
      dates.forEach((k) => {
        if (getBlocksFor(k)[b.id]) n++;
      });
      skillPct[b.id] = dates.length ? n / dates.length : 0;
    });

    let fullDays = 0;
    dates.forEach((k) => {
      if (isComplete(k)) fullDays++;
    });

    return {
      current,
      best,
      overallPct,
      skillPct,
      fullDays,
      elapsed: dates.length,
      dates,
    };
  }

  function weeklyTrend() {
    const start = parseKey(state.programStart);
    const weeks = [];
    for (let w = 0; w < 5; w++) {
      const wStart = addDays(start, w * 7);
      if (dayIndex(wStart) > PROGRAM_LEN) break;
      let done = 0,
        possible = 0;
      for (let i = 0; i < 7; i++) {
        const d = addDays(wStart, i);
        const di = dayIndex(d);
        if (di < 1 || di > PROGRAM_LEN) continue;
        if (clampMidnight(d) > clampMidnight(new Date())) continue;
        const rec = getBlocksFor(fmtKey(d));
        BLOCKS.forEach((b) => {
          possible++;
          if (rec[b.id]) done++;
        });
      }
      weeks.push({
        label: "Wk " + (w + 1),
        pct: possible ? done / possible : 0,
      });
    }
    return weeks;
  }

  // ---------- rendering helpers ----------
  function ringSVG(fraction, size, stroke, centerBig, centerSmall) {
    const r = (size - stroke) / 2;
    const c = 2 * Math.PI * r;
    const offset = c * (1 - fraction);
    return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--surface-2)" stroke-width="${stroke}"/>
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="url(#goldGrad)" stroke-width="${stroke}"
        stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${offset}"
        transform="rotate(-90 ${size / 2} ${size / 2})" style="transition: stroke-dashoffset .8s var(--ease);"/>
      <defs><linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#E9CE8F"/><stop offset="100%" stop-color="#C9A24B"/>
      </linearGradient></defs>
    </svg>`;
  }

  function checkSVG() {
    return `<svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.5 12L13 4.5" stroke="#0A0908" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  }

  function playIcon() {
    return `<svg viewBox="0 0 16 16" width="10" height="10" fill="none"><path d="M4 2.5v11l10-5.5-10-5.5z" fill="currentColor"/></svg>`;
  }
  function bookIcon() {
    return `<svg viewBox="0 0 16 16" width="10" height="10" fill="none"><path d="M2 2.8c1.8-.6 3.6-.6 5.4 0v9.9c-1.8-.6-3.6-.6-5.4 0V2.8zM8.6 2.8c1.8-.6 3.6-.6 5.4 0v9.9c-1.8-.6-3.6-.6-5.4 0V2.8z" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/></svg>`;
  }

  function taskLinksHTML(blockId, wd) {
    const links = [];
    if (
      (blockId === "listening" || blockId === "shadowing") &&
      wd.materialUrl
    ) {
      links.push({
        url: wd.materialUrl,
        label: `Watch / listen \u2014 ${wd.materialSource}`,
        icon: playIcon(),
      });
    }
    if (blockId === "reading" && wd.readingUrl) {
      links.push({
        url: wd.readingUrl,
        label: `Read \u2014 ${wd.readingSource}`,
        icon: bookIcon(),
      });
      if (wd.readingUrl2) {
        links.push({
          url: wd.readingUrl2,
          label: `Read \u2014 ${wd.readingSource2}`,
          icon: bookIcon(),
        });
      }
    }
    if (!links.length) return "";
    return `<div class="task-links">${links.map((l) => `<a class="task-link" href="${l.url}" target="_blank" rel="noopener">${l.icon}${l.label} \u2197</a>`).join("")}</div>`;
  }

  // ---------- render: Today ----------
  function renderToday() {
    const key = fmtKey(selectedDate);
    const di = dayIndex(selectedDate);
    const frac = fractionFor(key);
    const doneCount = Math.round(frac * BLOCKS.length);

    document.getElementById("dayLabel").textContent =
      `DAY ${Math.max(1, Math.min(di, PROGRAM_LEN))} OF ${PROGRAM_LEN}`;
    document.getElementById("dayDate").textContent =
      selectedDate.toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
      });

    const ringWrap = document.getElementById("todayRing");
    ringWrap.innerHTML =
      ringSVG(frac, 96, 8) +
      `<div class="ring-center"><div class="n">${doneCount}/${BLOCKS.length}</div><div class="d">Sessions</div></div>`;
    ringWrap.style.position = "relative";
    ringWrap.querySelector(".ring-center").style.position = "absolute";

    const qIdx =
      (((Math.max(1, di) - 1) % QUOTES.length) + QUOTES.length) % QUOTES.length;
    document.getElementById("heroQuote").textContent =
      "\u201C" + QUOTES[qIdx] + "\u201D";

    const wd = WEEKDAY_CONTENT[selectedDate.getDay()];
    const list = document.getElementById("checklist");
    list.innerHTML = "";
    BLOCKS.forEach((b) => {
      const done = !!getBlocksFor(key)[b.id];
      const row = document.createElement("div");
      row.className = "block-row" + (done ? " done" : "");
      row.innerHTML = `
        <div class="block-order">${b.order}</div>
        <div class="block-time">${b.time}</div>
        <div class="block-main">
          <div class="label">${b.label} <span class="dur">${b.dur}</span></div>
          <div class="desc">${b.desc(wd)}</div>
          ${taskLinksHTML(b.id, wd)}
        </div>
        <div class="checkbox">${checkSVG()}</div>`;
      row.addEventListener("click", (e) => {
        if (e.target.closest(".task-link")) return;
        toggleBlock(key, b.id);
      });
      list.appendChild(row);
    });

    document.getElementById("prevDay").disabled = di <= 1;
    document.getElementById("nextDay").disabled = di >= PROGRAM_LEN;
  }

  // ---------- render: Week ----------
  function renderWeek() {
    const wkStart = startOfWeek(weekAnchor);
    const wkEnd = addDays(wkStart, 6);
    document.getElementById("weekRange").textContent =
      `${MONTHS[wkStart.getMonth()].slice(0, 3)} ${wkStart.getDate()} – ${MONTHS[wkEnd.getMonth()].slice(0, 3)} ${wkEnd.getDate()}`;

    const grid = document.getElementById("weekGrid");
    grid.innerHTML = "";
    const today = clampMidnight(new Date());
    for (let i = 0; i < 7; i++) {
      const d = addDays(wkStart, i);
      const key = fmtKey(d);
      const di = dayIndex(d);
      const outside = di < 1 || di > PROGRAM_LEN;
      const frac = fractionFor(key);
      const doneCount = Math.round(frac * BLOCKS.length);
      const card = document.createElement("div");
      card.className =
        "day-card" +
        (sameDay(d, today) ? " today" : "") +
        (outside ? " outside" : "");
      card.innerHTML = `
        <div class="wd">${WD_SHORT[d.getDay()]}</div>
        ${ringSVG(frac, 46, 5)}
        <div class="dn">${d.getDate()}</div>
        <div class="frac">${doneCount}/${BLOCKS.length}</div>`;
      const ringHost = card.querySelector("svg").parentElement;
      card.querySelector("svg").style.margin = "-2px 0";
      if (!outside) {
        card.addEventListener("click", () => {
          selectedDate = d;
          switchTab("today");
        });
      }
      grid.appendChild(card);
    }

    const prevAllowed = dayIndex(addDays(wkStart, -1)) >= 1;
    const nextAllowed = dayIndex(addDays(wkEnd, 1)) <= PROGRAM_LEN;
    document.getElementById("prevWeek").disabled = !prevAllowed;
    document.getElementById("nextWeek").disabled = !nextAllowed;
  }

  // ---------- render: Month ----------
  function renderMonth() {
    const grid = document.getElementById("monthGrid");
    grid.innerHTML = "";
    const start = parseKey(state.programStart);
    const selKey = fmtKey(selectedDate);
    for (let i = 0; i < PROGRAM_LEN; i++) {
      const d = addDays(start, i);
      const key = fmtKey(d);
      const frac = fractionFor(key);
      const bg =
        frac === 0
          ? "var(--surface-2)"
          : frac <= 0.34
            ? "#4A3D22"
            : frac <= 0.67
              ? "#7A6432"
              : frac < 1
                ? "#C9A24B"
                : "#E9CE8F";
      const cell = document.createElement("div");
      cell.className = "month-cell" + (key === selKey ? " selected" : "");
      cell.style.background = bg;
      cell.innerHTML = `<div class="dnum" style="color:${frac > 0.67 ? "#0A0908" : "var(--cream)"}">${i + 1}</div>`;
      cell.title =
        d.toLocaleDateString(undefined, {
          weekday: "long",
          month: "short",
          day: "numeric",
        }) + ` — ${Math.round(frac * BLOCKS.length)}/${BLOCKS.length} done`;
      cell.addEventListener("click", () => {
        selectedDate = d;
        switchTab("today");
      });
      grid.appendChild(cell);
    }
  }

  // ---------- render: Progress ----------
  function renderProgress() {
    const stats = computeStats();
    const statRow = document.getElementById("statRow");
    statRow.innerHTML = `
      <div class="stat-tile"><div class="v">${stats.current}</div><div class="k">Current streak</div></div>
      <div class="stat-tile"><div class="v">${stats.best}</div><div class="k">Best streak</div></div>
      <div class="stat-tile"><div class="v">${stats.fullDays}</div><div class="k">Full days done</div></div>
      <div class="stat-tile"><div class="v">${Math.round(stats.overallPct * 100)}%</div><div class="k">Overall completion</div></div>`;

    const skillHost = document.getElementById("skillBars");
    skillHost.innerHTML = "";
    BLOCKS.forEach((b) => {
      const pct = stats.skillPct[b.id] || 0;
      const item = document.createElement("div");
      item.className = "bar-item";
      item.innerHTML = `
        <div class="top"><span class="lbl">${b.label}</span><span class="pct">${Math.round(pct * 100)}%</span></div>
        <div class="bar-track"><div class="bar-fill" style="width:${pct * 100}%"></div></div>`;
      skillHost.appendChild(item);
    });

    const trend = weeklyTrend();
    const trendHost = document.getElementById("trendRow");
    trendHost.innerHTML = "";
    trend.forEach((w) => {
      const col = document.createElement("div");
      col.className = "trend-col";
      const barH = Math.max(4, w.pct * 100);
      col.innerHTML = `<div style="font-family:var(--font-mono); font-size:10px; color:var(--gold-dim);">${Math.round(w.pct * 100)}%</div>
        <div class="trend-bar" style="height:${barH}%"></div>
        <div class="trend-lbl">${w.label}</div>`;
      trendHost.appendChild(col);
    });
  }

  function renderStreakBadge() {
    const stats = computeStats();
    document.getElementById("streakNum").textContent = stats.current;
  }

  function renderAll() {
    renderToday();
    renderWeek();
    renderMonth();
    renderProgress();
    renderStreakBadge();
  }

  // ---------- tabs ----------
  function switchTab(tab) {
    activeTab = tab;
    document.querySelectorAll("nav.tabs button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === tab);
    });
    document.querySelectorAll("section.view").forEach((sec) => {
      sec.classList.toggle("active", sec.id === "view-" + tab);
    });
    renderAll();
  }

  // ---------- events ----------
  document.querySelectorAll("nav.tabs button").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });
  document.getElementById("prevDay").addEventListener("click", () => {
    selectedDate = addDays(selectedDate, -1);
    renderToday();
  });
  document.getElementById("nextDay").addEventListener("click", () => {
    selectedDate = addDays(selectedDate, 1);
    renderToday();
  });
  document.getElementById("prevWeek").addEventListener("click", () => {
    weekAnchor = addDays(weekAnchor, -7);
    renderWeek();
  });
  document.getElementById("nextWeek").addEventListener("click", () => {
    weekAnchor = addDays(weekAnchor, 7);
    renderWeek();
  });
  document.getElementById("resetBtn").addEventListener("click", resetProgress);

  // ---------- init ----------
  (async function init() {
    try {
      await loadState();
      renderAll();
    } catch (e) {
      console.error("Init failed:", e);
    } finally {
      document.getElementById("loading").classList.add("hidden");
      document.getElementById("app").classList.add("ready");
    }
  })();
})();