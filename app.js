document.documentElement.classList.add("js");

const phrases = [
  {
    chinese: "很高兴认识你！",
    pinyin: "Nǐ hěn gāoxìng rènshi nǐ!",
    translation: "Nice to meet you!",
    hint: "用于第一次见面时的友好表达"
  },
  {
    chinese: "请问，这里是哪里？",
    pinyin: "Qǐngwèn, zhèlǐ shì nǎlǐ?",
    translation: "Excuse me, where is this place?",
    hint: "用于询问位置或开启一段对话"
  },
  {
    chinese: "我需要一杯水。",
    pinyin: "Wǒ xūyào yì bēi shuǐ.",
    translation: "I need a glass of water.",
    hint: "用于餐厅、咖啡店等日常场景"
  },
  {
    chinese: "我们明天见。",
    pinyin: "Wǒmen míngtiān jiàn.",
    translation: "See you tomorrow.",
    hint: "用于和朋友约定再次见面"
  },
  {
    chinese: "我正在学习中文。",
    pinyin: "Wǒ zhèngzài xuéxí Zhōngwén.",
    translation: "I am learning Chinese.",
    hint: "用于介绍自己正在做的事情"
  }
];

const courses = {
  pinyin: {
    title: "拼音入门",
    description: "从声母、韵母到四声，建立清晰准确的中文发音基础。",
    lessons: [
      { id: "pinyin-1", title: "认识 23 个声母", detail: "发音位置 · 6 分钟" },
      { id: "pinyin-2", title: "掌握 24 个韵母", detail: "单韵母与复韵母 · 8 分钟" },
      { id: "pinyin-3", title: "读准四个声调", detail: "阴平阳平 · 10 分钟" },
      { id: "pinyin-4", title: "拼音综合练习", detail: "声母韵母拼读 · 11 分钟" }
    ]
  },
  character: {
    title: "汉字起步",
    description: "认识基本笔画和结构规律，让汉字不再只是陌生的图形。",
    lessons: [
      { id: "character-1", title: "汉字的书写顺序", detail: "横竖撇捺 · 9 分钟" },
      { id: "character-2", title: "独体字与合体字", detail: "结构分类 · 10 分钟" },
      { id: "character-3", title: "偏旁表意小课堂", detail: "常见偏旁 · 12 分钟" },
      { id: "character-4", title: "汉字组词练习", detail: "从字到词 · 14 分钟" }
    ]
  },
  dialogue: {
    title: "日常对话",
    description: "围绕真实生活场景开口表达，从得体问候到独立表达需求。",
    lessons: [
      { id: "dialogue-1", title: "第一次见面", detail: "问候与自我介绍 · 10 分钟" },
      { id: "dialogue-2", title: "在餐厅点餐", detail: "询问与选择 · 13 分钟" },
      { id: "dialogue-3", title: "问路与方向", detail: "位置词与指路 · 13 分钟" },
      { id: "dialogue-4", title: "购物结账", detail: "价格与付款 · 14 分钟" }
    ]
  },
  listening: {
    title: "听力练习",
    description: "从慢速对话开始，训练抓取关键词、辨认语气和理解细节。",
    lessons: [
      { id: "listening-1", title: "问候与自我介绍", detail: "慢速对话 · 8 分钟" },
      { id: "listening-2", title: "数字与时间", detail: "关键信息 · 10 分钟" },
      { id: "listening-3", title: "在餐厅点餐", detail: "场景听力 · 11 分钟" },
      { id: "listening-4", title: "日常对话挑战", detail: "自然语速 · 11 分钟" }
    ]
  }
};

const vocabulary = [
  { id: "nihao", character: "你好", pinyin: "nǐ hǎo", category: "基础", meaning: "你好；您好", example: "你好，很高兴认识你。", examplePinyin: "Nǐ hǎo, hěn gāoxìng rènshi nǐ." },
  { id: "xiexie", character: "谢谢", pinyin: "xièxie", category: "基础", meaning: "谢谢", example: "谢谢你的帮助。", examplePinyin: "Xièxie nǐ de bāngzhù." },
  { id: "zhongguo", character: "中国", pinyin: "Zhōngguó", category: "基础", meaning: "中国", example: "我来自中国。", examplePinyin: "Wǒ láizì Zhōngguó." },
  { id: "shui", character: "水", pinyin: "shuǐ", category: "基础", meaning: "水", example: "我想喝一杯水。", examplePinyin: "Wǒ xiǎng hē yì bēi shuǐ." },
  { id: "buyong", character: "不用", pinyin: "bú yòng", category: "日常", meaning: "不用；不需要", example: "不用，谢谢。", examplePinyin: "Bú yòng, xièxie." },
  { id: "qing", character: "请", pinyin: "qǐng", category: "日常", meaning: "请", example: "请坐。", examplePinyin: "Qǐng zuò." },
  { id: "laoshi", character: "老师", pinyin: "lǎoshī", category: "日常", meaning: "老师", example: "李老师，您好。", examplePinyin: "Lǐ lǎoshī, nín hǎo." },
  { id: "pengyou", character: "朋友", pinyin: "péngyou", category: "日常", meaning: "朋友", example: "他是我的朋友。", examplePinyin: "Tā shì wǒ de péngyou." },
  { id: "chi", character: "吃", pinyin: "chī", category: "动作", meaning: "吃", example: "我们一起吃午饭。", examplePinyin: "Wǒmen yìqǐ chī wǔfàn." },
  { id: "qu", character: "去", pinyin: "qù", category: "动作", meaning: "去", example: "我想去中国。", examplePinyin: "Wǒ xiǎng qù Zhōngguó." },
  { id: "xihuan", character: "喜欢", pinyin: "xǐhuan", category: "动作", meaning: "喜欢", example: "我喜欢学习中文。", examplePinyin: "Wǒ xǐhuan xuéxí Zhōngwén." },
  { id: "zaijian", character: "再见", pinyin: "zàijiàn", category: "动作", meaning: "再见", example: "明天见，再见。", examplePinyin: "Míngtiān jiàn, zàijiàn." }
];

const quizQuestions = [
  {
    question: "“你好”是什么意思？",
    options: ["谢谢", "你好", "再见", "请坐"],
    answer: 1,
    explanation: "“你好”用于向别人问候，表达“你好、您好”。"
  },
  {
    question: "“请坐。”中的“请”表示什么？",
    options: ["请求", "感谢", "道歉", "疑问"],
    answer: 0,
    explanation: "“请”可以表示请求或有礼貌地请别人做某事。"
  },
  {
    question: "“水”的正确拼音是？",
    options: ["suǐ", "shuǐ", "shuì", "suī"],
    answer: 1,
    explanation: "“水”读作 shuǐ，是翘舌音 sh 加复韵母 ui。"
  }
];

const storageKeys = {
  lessons: "cn-site-completed-lessons",
  words: "cn-site-mastered-words",
  phrase: "cn-site-phrase-index"
};

const state = {
  completedLessons: new Set(readArrayStorage(storageKeys.lessons)),
  masteredWords: new Set(readArrayStorage(storageKeys.words)),
  phraseIndex: readStorage(storageKeys.phrase, 0),
  activeCourse: null,
  vocabularyFilter: "全部",
  vocabularyQuery: "",
  quiz: createQuizState(),
  toastTimer: null
};

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const courseDialog = document.querySelector("[data-course-dialog]");
const toast = document.querySelector("[data-toast]");
const progressLabel = document.querySelector("[data-progress-label]");
const progressBar = document.querySelector("[data-progress-bar]");
const vocabularyGrid = document.querySelector("[data-vocabulary-grid]");
const vocabularyEmpty = document.querySelector("[data-vocabulary-empty]");

function readStorage(key, fallback) {
  try {
    const value = window.localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

function readArrayStorage(key) {
  const value = readStorage(key, []);
  return Array.isArray(value) ? value : [];
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    showToast("浏览器未允许保存本地数据");
  }
}

function createQuizState() {
  return {
    index: 0,
    score: 0,
    answered: false,
    finished: false,
    selected: null,
    results: []
  };
}

function setHeaderState() {
  header.classList.toggle("scrolled", window.scrollY > 12);
}

function closeNavigation() {
  nav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

function setupNavigation() {
  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNavigation));

  document.addEventListener("click", (event) => {
    if (!nav.classList.contains("open")) return;
    if (!nav.contains(event.target) && !navToggle.contains(event.target)) closeNavigation();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("open")) {
      closeNavigation();
      navToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeNavigation();
  });
}

function setupRevealAnimations() {
  const items = document.querySelectorAll("[data-reveal]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || reduceMotion) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14 });

  items.forEach((item) => observer.observe(item));
}

function speakText(text) {
  if (!("speechSynthesis" in window)) {
    showToast("当前浏览器暂不支持语音朗读");
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const chineseVoice = window.speechSynthesis.getVoices().find((voice) => /^zh(-|_)/i.test(voice.lang));
  utterance.lang = "zh-CN";
  utterance.rate = 0.78;
  if (chineseVoice) utterance.voice = chineseVoice;
  window.speechSynthesis.speak(utterance);
}

function showToast(message) {
  window.clearTimeout(state.toastTimer);
  toast.textContent = message;
  toast.classList.add("visible");
  state.toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2600);
}

function updateOverallProgress() {
  const totalLessons = Object.values(courses).reduce((total, course) => total + course.lessons.length, 0);
  const percentage = Math.round((state.completedLessons.size / totalLessons) * 100);
  progressLabel.textContent = `${percentage}%`;
  progressBar.style.width = `${percentage}%`;
}

function updateCourseButtons() {
  document.querySelectorAll("[data-open-course]").forEach((button) => {
    const course = courses[button.dataset.openCourse];
    const completed = course.lessons.filter((lesson) => state.completedLessons.has(lesson.id)).length;
    const isComplete = completed === course.lessons.length;
    button.classList.toggle("completed", isComplete);
    button.querySelector("span").textContent = isComplete ? "课程已完成" : completed > 0 ? "继续课程" : "开始课程";
  });
}

function openCourse(courseId) {
  const course = courses[courseId];
  if (!course) return;

  state.activeCourse = courseId;
  document.querySelector("[data-dialog-title]").textContent = course.title;
  document.querySelector("[data-dialog-description]").textContent = course.description;
  renderLessonList();
  document.body.classList.add("dialog-open");

  if (typeof courseDialog.showModal === "function") {
    courseDialog.showModal();
  } else {
    courseDialog.setAttribute("open", "");
  }
}

function closeCourse() {
  if (typeof courseDialog.close === "function") courseDialog.close();
  else courseDialog.removeAttribute("open");
  document.body.classList.remove("dialog-open");
}

function renderLessonList() {
  const list = document.querySelector("[data-lesson-list]");
  const course = courses[state.activeCourse];
  list.replaceChildren();

  course.lessons.forEach((lesson, index) => {
    const isCompleted = state.completedLessons.has(lesson.id);
    const item = document.createElement("button");
    item.type = "button";
    item.className = `lesson-item${isCompleted ? " completed" : ""}`;
    item.setAttribute("aria-pressed", String(isCompleted));

    const lessonIndex = document.createElement("span");
    lessonIndex.className = "lesson-index";
    lessonIndex.textContent = isCompleted ? "✓" : String(index + 1).padStart(2, "0");

    const copy = document.createElement("span");
    copy.className = "lesson-copy";
    const title = document.createElement("strong");
    title.textContent = lesson.title;
    const detail = document.createElement("small");
    detail.textContent = lesson.detail;
    copy.append(title, detail);

    const status = document.createElement("span");
    status.className = "lesson-status";
    status.textContent = isCompleted ? "已完成" : "标记完成";

    item.append(lessonIndex, copy, status);
    item.addEventListener("click", () => toggleLesson(lesson.id));
    list.append(item);
  });

  const completed = course.lessons.filter((lesson) => state.completedLessons.has(lesson.id)).length;
  document.querySelector("[data-dialog-progress]").textContent = `已完成 ${completed} / ${course.lessons.length} 课`;
}

function toggleLesson(lessonId) {
  if (state.completedLessons.has(lessonId)) {
    state.completedLessons.delete(lessonId);
    showToast("已取消本节课的完成标记");
  } else {
    state.completedLessons.add(lessonId);
    showToast("课程进度已保存");
  }

  writeStorage(storageKeys.lessons, [...state.completedLessons]);
  renderLessonList();
  updateOverallProgress();
  updateCourseButtons();
}

function setupCourses() {
  document.querySelectorAll("[data-open-course]").forEach((button) => {
    button.addEventListener("click", () => openCourse(button.dataset.openCourse));
  });

  document.querySelector("[data-dialog-close]").addEventListener("click", closeCourse);
  document.querySelector("[data-close-dialog]").addEventListener("click", closeCourse);

  courseDialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
  courseDialog.addEventListener("click", (event) => {
    const bounds = courseDialog.getBoundingClientRect();
    const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (outside) closeCourse();
  });

  updateOverallProgress();
  updateCourseButtons();
}

function normalizePhraseIndex() {
  const value = Number(state.phraseIndex);
  state.phraseIndex = Number.isInteger(value) ? ((value % phrases.length) + phrases.length) % phrases.length : 0;
}

function renderPhrase() {
  normalizePhraseIndex();
  const phrase = phrases[state.phraseIndex];
  document.querySelector("[data-phrase-count]").textContent = `${state.phraseIndex + 1} / ${phrases.length}`;
  document.querySelector("[data-phrase-hint]").textContent = phrase.hint;
  document.querySelector("[data-phrase-chinese]").textContent = phrase.chinese;
  document.querySelector("[data-phrase-pinyin]").textContent = phrase.pinyin;
  document.querySelector("[data-phrase-translation]").textContent = phrase.translation;
}

function changePhrase(step) {
  state.phraseIndex = (state.phraseIndex + step + phrases.length) % phrases.length;
  writeStorage(storageKeys.phrase, state.phraseIndex);
  renderPhrase();
}

function setupPhrases() {
  renderPhrase();
  document.querySelector("[data-previous-phrase]").addEventListener("click", () => changePhrase(-1));
  document.querySelector("[data-next-phrase]").addEventListener("click", () => changePhrase(1));
  document.querySelector("[data-speak-phrase]").addEventListener("click", () => {
    const phrase = phrases[state.phraseIndex];
    speakText(`${phrase.chinese}。${phrase.chinese}`);
  });

  document.querySelectorAll("[data-speak]").forEach((button) => {
    button.addEventListener("click", () => speakText(button.dataset.speak));
  });
}

function createQuizOption(question, index, letter) {
  const option = document.createElement("button");
  option.type = "button";
  option.className = "quiz-option";
  option.dataset.letter = letter;
  option.textContent = question.options[index];
  option.addEventListener("click", () => answerQuiz(index));
  return option;
}

function renderQuiz() {
  const quiz = state.quiz;
  const question = quizQuestions[quiz.index];
  const options = document.querySelector("[data-quiz-options]");
  const feedback = document.querySelector("[data-quiz-feedback]");
  const nextButton = document.querySelector("[data-quiz-next]");

  document.querySelector("[data-quiz-kicker]").textContent = quiz.finished ? "测验完成" : `第 ${quiz.index + 1} 题 · 选择正确含义`;
  document.querySelector("[data-quiz-question]").textContent = quiz.finished ? `你答对了 ${quiz.score} / ${quizQuestions.length} 题` : question.question;
  document.querySelector("[data-quiz-score]").textContent = `${quiz.score} / ${quizQuestions.length}`;
  options.replaceChildren();
  options.hidden = quiz.finished;

  if (quiz.finished) {
    feedback.textContent = quiz.score === quizQuestions.length ? "太棒了，全部答对！继续保持。" : quiz.score >= 2 ? "掌握得不错，再复习一下错题吧。" : "别着急，完成课程后再回来挑战一次。";
    setNextButtonLabel("重新测验");
    nextButton.disabled = false;
  } else {
    question.options.forEach((_, index) => options.append(createQuizOption(question, index, String.fromCharCode(65 + index))));

    if (quiz.answered) {
      options.querySelectorAll("button").forEach((option, index) => {
        option.disabled = true;
        if (index === question.answer) option.classList.add("correct");
        if (index === quiz.selected && index !== question.answer) option.classList.add("incorrect");
      });
      feedback.textContent = quiz.selected === question.answer ? `回答正确。${question.explanation}` : `正确答案是 ${String.fromCharCode(65 + question.answer)}。${question.explanation}`;
      setNextButtonLabel(quiz.index === quizQuestions.length - 1 ? "查看结果" : "下一题");
      nextButton.disabled = false;
    } else {
      feedback.textContent = "选择一个答案开始测验。";
      setNextButtonLabel("下一题");
      nextButton.disabled = true;
    }
  }

  renderQuizDots();
}

function renderQuizDots() {
  const dots = document.querySelector("[data-quiz-dots]");
  dots.replaceChildren();

  quizQuestions.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = "quiz-dot";
    if (!state.quiz.finished && index === state.quiz.index) dot.classList.add("active");
    if (state.quiz.results[index] === true) dot.classList.add("correct");
    if (state.quiz.results[index] === false) dot.classList.add("incorrect");
    dots.append(dot);
  });
}

function setNextButtonLabel(label) {
  const button = document.querySelector("[data-quiz-next]");
  button.replaceChildren(document.createTextNode(label));
  const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  icon.setAttribute("viewBox", "0 0 24 24");
  icon.setAttribute("aria-hidden", "true");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M5 12h14M13 6l6 6-6 6");
  icon.append(path);
  button.append(icon);
}

function answerQuiz(selected) {
  const quiz = state.quiz;
  if (quiz.answered || quiz.finished) return;
  quiz.selected = selected;
  quiz.answered = true;
  const isCorrect = selected === quizQuestions[quiz.index].answer;
  quiz.results[quiz.index] = isCorrect;
  if (isCorrect) quiz.score += 1;
  renderQuiz();
}

function nextQuizQuestion() {
  const quiz = state.quiz;
  if (!quiz.answered) return;

  if (quiz.index === quizQuestions.length - 1) {
    quiz.finished = true;
  } else {
    quiz.index += 1;
    quiz.answered = false;
    quiz.selected = null;
  }
  renderQuiz();
}

function setupQuiz() {
  document.querySelector("[data-quiz-next]").addEventListener("click", () => {
    if (state.quiz.finished) {
      state.quiz = createQuizState();
      renderQuiz();
      return;
    }
    nextQuizQuestion();
  });
  renderQuiz();
}

function createVocabularyCard(word) {
  const isMastered = state.masteredWords.has(word.id);
  const card = document.createElement("article");
  card.className = `vocabulary-card${isMastered ? " mastered" : ""}`;

  const character = document.createElement("div");
  character.className = "word-character";
  character.textContent = word.character;

  const info = document.createElement("div");
  info.className = "word-info";
  const meta = document.createElement("div");
  meta.className = "word-meta";
  const pinyin = document.createElement("span");
  pinyin.className = "word-pinyin";
  pinyin.textContent = word.pinyin;
  const category = document.createElement("span");
  category.className = "word-category";
  category.textContent = word.category;
  meta.append(pinyin, category);
  const meaning = document.createElement("p");
  meaning.className = "word-meaning";
  meaning.textContent = word.meaning;
  const example = document.createElement("p");
  example.className = "word-example";
  const exampleChinese = document.createElement("span");
  exampleChinese.textContent = `${word.example} `;
  example.append(exampleChinese, document.createTextNode(word.examplePinyin));
  info.append(meta, meaning, example);

  const actions = document.createElement("div");
  actions.className = "word-actions";
  const speakButton = createWordButton("朗读词语", speakIcon, () => speakText(`${word.character}。${word.example}`));
  const masterButton = createWordButton(isMastered ? "取消掌握标记" : "标记为已掌握", isMastered ? checkIcon : bookmarkIcon, () => toggleMasteredWord(word.id));
  if (isMastered) masterButton.classList.add("mastered");
  actions.append(speakButton, masterButton);
  card.append(character, info, actions);
  return card;
}

const speakIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15 9.5a4 4 0 0 1 0 5M18 7a7 7 0 0 1 0 10"/></svg>';
const bookmarkIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18l-6-4-6 4V4Z"/></svg>';
const checkIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>';

function createWordButton(label, icon, handler) {
  const button = document.createElement("button");
  button.type = "button";
  button.setAttribute("aria-label", label);
  button.title = label;
  button.innerHTML = icon;
  button.addEventListener("click", handler);
  return button;
}

function toggleMasteredWord(wordId) {
  if (state.masteredWords.has(wordId)) {
    state.masteredWords.delete(wordId);
    showToast("已取消掌握标记");
  } else {
    state.masteredWords.add(wordId);
    showToast("已加入你的掌握词汇");
  }
  writeStorage(storageKeys.words, [...state.masteredWords]);
  renderVocabulary();
}

function normalizeSearchText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("zh-CN")
    .replace(/\s+/g, " ")
    .trim();
}

function renderVocabulary() {
  const query = normalizeSearchText(state.vocabularyQuery);
  const filteredWords = vocabulary.filter((word) => {
    const categoryMatches = state.vocabularyFilter === "全部" || word.category === state.vocabularyFilter;
    const searchable = normalizeSearchText(`${word.character} ${word.pinyin} ${word.meaning} ${word.example}`);
    return categoryMatches && (!query || searchable.includes(query));
  });

  const fragment = document.createDocumentFragment();
  filteredWords.forEach((word) => fragment.append(createVocabularyCard(word)));
  vocabularyGrid.replaceChildren(fragment);
  vocabularyEmpty.hidden = filteredWords.length !== 0;
}

function setupVocabulary() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.vocabularyFilter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("active", item === button));
      renderVocabulary();
    });
  });

  document.querySelector("[data-vocabulary-search]").addEventListener("input", (event) => {
    state.vocabularyQuery = event.target.value;
    renderVocabulary();
  });

  renderVocabulary();
}

function setupMiscellaneous() {
  document.querySelector("[data-current-year]").textContent = new Date().getFullYear();
  if ("speechSynthesis" in window && "SpeechSynthesisUtterance" in window) {
    window.speechSynthesis.getVoices();
  }
}

setupNavigation();
setupRevealAnimations();
setupCourses();
setupPhrases();
setupQuiz();
setupVocabulary();
setupMiscellaneous();
