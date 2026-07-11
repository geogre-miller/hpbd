/* ================================================================
   NỘI DUNG CÁ NHÂN — chỉ cần sửa khối birthdayData bên dưới
   ================================================================ */
const birthdayData = {
  girlfriendName: "Tên của em",
  boyfriendName: "Tên của anh",
  birthdayDate: "Ngày sinh nhật của em",
  opening: {
    title: "Có một điều nhỏ anh muốn gửi em",
    message: "Anh đã gom những khoảnh khắc của chúng mình vào đây. Mở thư rồi cùng anh đi qua từng kỷ niệm nhé.",
  },
  hero: {
    eyebrow: "Một ngày thật đặc biệt",
    title: "Chúc mừng sinh nhật bbi yêu dấu của anh",
    message: "Hôm nay, anh chỉ mong em được vui theo cách em thích, được ở cạnh những người em yêu và luôn nhớ rằng em được trân trọng nhiều đến thế nào.",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Khoảnh khắc dịu dàng của cô gái trong ngày nắng đẹp",
    caption: "Ngày có em, mọi thứ bỗng dịu dàng hơn",
  },
  filmIntro: "Mỗi bức ảnh là một đoạn ngắn, nhưng ghép lại lại thành câu chuyện anh luôn muốn xem thêm nhiều lần nữa.",
  memories: [
    {
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1400&q=85",
      alt: "Hai người nắm tay nhau giữa khung cảnh ấm áp",
      date: "Chương đầu tiên",
      title: "Ngày mình bắt đầu",
      caption: "Khi ấy chưa ai biết chúng mình sẽ đi được bao xa. Anh chỉ nhớ mình đã vui rất lâu sau buổi gặp đó.",
      hidden: "Tấm này anh vẫn thường lén xem lại.",
    },
    {
      image: "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=1400&q=85",
      alt: "Buổi hẹn bên mặt hồ trong ánh chiều dịu",
      date: "Một chiều bình thường",
      title: "Chẳng cần dịp gì cả",
      caption: "Một buổi hẹn không có kế hoạch lớn, vậy mà lại thành một ngày anh nhớ rõ từng chi tiết nhỏ.",
      hidden: "Vì em cười nhiều nên hôm đó trời cũng đẹp hơn.",
    },
    {
      image: "https://images.unsplash.com/photo-1481841580057-e2b9927a05c6?auto=format&fit=crop&w=1400&q=85",
      alt: "Hai người cùng ngắm thành phố khi trời tối",
      date: "Một lần đi xa",
      title: "Chúng mình và một nơi mới",
      caption: "Đi đâu cũng được, miễn là cuối ngày vẫn có người cùng kể lại những chuyện vụn vặt trên đường.",
      hidden: "Anh thích nhất đoạn mình đi lạc nhưng vẫn cười.",
    },
    {
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1400&q=85",
      alt: "Đôi tay đan vào nhau trong khoảnh khắc yên bình",
      date: "Ngày gần đây",
      title: "Bình yên có hình dáng của em",
      caption: "Cảm ơn em vì đã khiến những ngày rất đỗi bình thường của anh trở thành điều đáng mong chờ.",
      hidden: "Mình còn nhiều nơi phải cùng nhau ghé qua lắm.",
    },
  ],
  scrapbook: {
    image: "https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?auto=format&fit=crop&w=700&q=85",
    imageAlt: "Tấm ảnh nhỏ trong cuốn sổ kỷ niệm",
    paper: "Anh thích cách em để ý đến những điều rất nhỏ mà người khác thường bỏ qua.",
    ribbon: "Mong em luôn đủ tự tin để chọn điều khiến mình hạnh phúc.",
    flower: "Mong tuổi mới đối xử với em thật dịu dàng.",
    gift: "Phiếu quà tặng: một buổi hẹn do em chọn, anh lo tất cả.",
  },
  letter: {
    greeting: "Gửi em,",
    content: "Cảm ơn em vì đã xuất hiện và làm những ngày bình thường của anh có thêm thật nhiều điều để nhớ.\n\nAnh không hứa mọi ngày đều hoàn hảo, nhưng anh muốn mình vẫn là người lắng nghe em, cùng em vui khi có chuyện tốt và ở lại khi ngày dài hơn thường lệ.\n\nSinh nhật này, mong em luôn khỏe, luôn được yêu thương đúng cách và đủ can đảm để bước về phía những điều em thật sự mong muốn.",
    signature: "Thương em nhiều, mèo cam",
  },
  cakeMessages: {
    idle: "Chạm vào bánh kem để thắp nến",
    lit: "Chúc mừng sinh nhật em! Hôm nay là ngày dành riêng cho cô gái anh luôn muốn thấy mỉm cười.",
    blownOut: "Nhắm mắt lại và ước một điều nhé…",
    relight: "Nến đã sáng trở lại. Mong điều em vừa ước sẽ sớm thành hiện thực.",
  },
  wishes: [
    "Mong em luôn có thật nhiều lý do để mỉm cười mỗi sáng.",
    "Mong những dự định em ấp ủ sẽ dần thành hình theo cách đẹp nhất.",
    "Mong em được làm công việc khiến mình tự hào và sống những ngày không phải vội vàng.",
    "Mong quanh em luôn là những người biết trân trọng sự tử tế của em.",
    "Mong mình còn được cùng nhau ăn thật nhiều món ngon và đi đến những nơi chưa từng ghé.",
    "Mong em luôn nhớ rằng dù có một ngày không ổn, em vẫn không phải trải qua nó một mình.",
  ],
  allWishesMessage: "Tada, em đã tìm thấy hết rồi. Điều cuối cùng anh mong nhất: trong mọi tuổi mới, em vẫn luôn được là chính mình và thấy hạnh phúc với cuộc sống em chọn.",
  quizEnabled: true,
  quiz: [
    {
      question: "Điều anh nhớ nhất sau buổi hẹn đầu tiên là gì?",
      options: ["Món ăn hôm đó", "Nụ cười của em", "Con đường mình đi"],
      answer: 1,
      feedback: "Đúng rồi, nụ cười ấy đến giờ anh vẫn nhớ.",
      gentleFeedback: "Cũng là một kỷ niệm đáng nhớ. Nhưng đáp án anh cất riêng là nụ cười của em.",
    },
    {
      question: "Một buổi hẹn thật hợp với hai đứa mình sẽ là…",
      options: ["Ăn ngon rồi đi dạo", "Ngủ nướng đến trưa", "Ngồi im không nói gì"],
      answer: 0,
      feedback: "Chuẩn rồi, có đồ ăn ngon là câu chuyện sẽ dài thêm.",
      gentleFeedback: "Nghe cũng thú vị, nhưng ăn ngon rồi đi dạo vẫn đúng chất hai đứa mình hơn.",
    },
    {
      question: "Anh muốn cùng em viết thêm bao nhiêu chương nữa?",
      options: ["Một chương", "Mười chương", "Thật nhiều, không cần đếm"],
      answer: 2,
      feedback: "Đáp án này thì chắc chắn rồi.",
      gentleFeedback: "Con số nào rồi cũng hết. Anh chọn thật nhiều, không cần đếm.",
    },
  ],
  final: {
    title: "Cảm ơn em vì đã đến và ở lại",
    message: "Chúc mừng sinh nhật em — người anh muốn đồng hành trong thật nhiều chương tiếp theo. Mong hôm nay mở đầu cho một tuổi mới ấm áp, bình yên và đầy những điều em mong đợi.",
    image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Hai người cùng nhìn về phía hoàng hôn",
    gift: "Món quà cuối cùng không nằm trong chiếc hộp nào cả: đó là lời hứa anh sẽ dành thời gian để cùng em tạo thêm thật nhiều kỷ niệm mới.",
  },
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

function validateBirthdayData() {
  if (!birthdayData.memories.length || !birthdayData.wishes.length) throw new Error("Cần có ít nhất một kỷ niệm và một lời chúc.");
  if (birthdayData.quizEnabled && birthdayData.quiz.some(({ options, answer }) => !options[answer])) throw new Error("Đáp án câu đố chưa hợp lệ.");
  if (!isBlowing(.12, .02) || isBlowing(.03, .02)) throw new Error("Ngưỡng nhận biết hơi thổi chưa hợp lệ.");
}

function fallbackImage(label) {
  const safe = label.replace(/[<>&"]/g, "");
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="#f4c8ce"/><stop offset="1" stop-color="#7b2948"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><text x="50%" y="50%" fill="#fff8eb" font-family="sans-serif" font-size="34" text-anchor="middle">${safe}</text></svg>`)}`;
}

function setImage(img, src, alt) {
  img.src = src;
  img.alt = alt;
  img.addEventListener("error", () => { img.src = fallbackImage("Ảnh kỷ niệm đang được chuẩn bị"); }, { once: true });
}

function renderContent() {
  $("#ngay-sinh-nhat").textContent = birthdayData.birthdayDate;
  $("#loi-chao-mo-dau").textContent = birthdayData.opening.title;
  $("#loi-nhan-mo-dau").textContent = birthdayData.opening.message;
  $("#phong-thu-mo-dau").setAttribute("aria-label", `Mở phong thư sinh nhật dành cho ${birthdayData.girlfriendName}`);
  $("#hero-eyebrow").textContent = birthdayData.hero.eyebrow;
  $("#hero-title").textContent = birthdayData.hero.title;
  $("#hero-message").textContent = birthdayData.hero.message;
  $("#hero-caption").textContent = birthdayData.hero.caption;
  setImage($("#hero-image"), birthdayData.hero.image, birthdayData.hero.imageAlt);
  $("#film-intro").textContent = birthdayData.filmIntro;
  $("#paper-secret").textContent = birthdayData.scrapbook.paper;
  $("#ribbon-secret").textContent = birthdayData.scrapbook.ribbon;
  $("#flower-secret").textContent = birthdayData.scrapbook.flower;
  $("#gift-secret").textContent = birthdayData.scrapbook.gift;
  setImage($("#scrapbook-image"), birthdayData.scrapbook.image, birthdayData.scrapbook.imageAlt);
  $("#letter-greeting").textContent = birthdayData.letter.greeting;
  $("#letter-content").textContent = birthdayData.letter.content;
  $("#letter-signature").textContent = birthdayData.letter.signature.replace("Tên của anh", birthdayData.boyfriendName);
  $("#cake-message").textContent = birthdayData.cakeMessages.idle;
  $("#cake").setAttribute("aria-label", birthdayData.cakeMessages.idle);
  $("#final-title").textContent = birthdayData.final.title;
  $("#final-message").textContent = birthdayData.final.message;
  $("#final-gift-message").textContent = birthdayData.final.gift;
  setImage($("#final-image"), birthdayData.final.image, birthdayData.final.imageAlt);

  $("#film-stage").innerHTML = birthdayData.memories.map((memory, index) => `
    <article class="film-frame-item${index === 0 ? " is-active" : ""}" data-index="${index}">
      <button class="film-image-button" type="button" aria-label="Hiện lời nhắn ẩn của ảnh ${index + 1}">
        <img src="${memory.image}" alt="${memory.alt}" />
        <span class="hidden-caption">${memory.hidden}</span>
      </button>
      <div class="film-copy">
        <p class="eyebrow">Kỷ niệm ${String(index + 1).padStart(2, "0")}</p>
        <h3>${memory.title}</h3>
        <p>${memory.caption}</p>
        <button class="viewer-open mic-button" type="button" data-index="${index}">Phóng to ảnh</button>
      </div>
    </article>`).join("");
  $$("#film-stage img").forEach((img) => img.addEventListener("error", () => { img.src = fallbackImage("Ảnh kỷ niệm đang được chuẩn bị"); }, { once: true }));
  updateFilm(0);

  const labels = ["Mở thẻ lời nhắn", "Mở phong thư nhỏ", "Lật mặt sau tấm ảnh", "Mở bông hoa giấy", "Bóc nhãn dán kỷ niệm", "Mở mảnh giấy gấp"];
  $("#wish-objects").innerHTML = birthdayData.wishes.map((wish, index) => `
    <button class="wish-object" type="button" data-index="${index}" aria-expanded="false">
      <span class="closed-mark" aria-hidden="true">${["✦","♥","☼","❀","★","∞"][index % 6]}</span>
      <span class="wish-label">${labels[index % labels.length]}</span>
      <span class="wish-text">${wish}</span>
    </button>`).join("");
  updateWishProgress();

  if (!birthdayData.quizEnabled) $("#do-vui").hidden = true;
}

function setupOpening() {
  const opening = $("#mo-dau");
  const envelope = $("#phong-thu-mo-dau");
  let startY = 0;
  let opened = false;
  const finish = () => {
    if (opened) return;
    opened = true;
    envelope.classList.add("is-open");
    envelope.setAttribute("aria-expanded", "true");
    $(".opening-note").setAttribute("aria-hidden", "false");
    envelope.setAttribute("aria-label", `${birthdayData.opening.title}. ${birthdayData.opening.message}`);
    $("#goi-y-mo-thu").textContent = "Phong thư đã mở";
    setTimeout(() => {
      opening.classList.add("is-gone");
      document.documentElement.classList.remove("intro-locked");
      document.body.classList.remove("intro-locked");
      scrollTo(0, 0);
    }, reducedMotion ? 80 : 2600);
  };
  envelope.addEventListener("click", finish, { once: true });
  envelope.addEventListener("pointerdown", (event) => { startY = event.clientY; });
  envelope.addEventListener("pointerup", (event) => { if (startY - event.clientY > 35) finish(); });
}

function setupReveals() {
  if (reducedMotion) return $$(".reveal").forEach((item) => item.classList.add("is-visible"));
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    observer.unobserve(entry.target);
  }), { threshold: .12 });
  $$(".reveal").forEach((item) => observer.observe(item));
}

function setupHeroTilt() {
  const wrap = $("#anh-chinh-wrap");
  const photo = $("#anh-chinh");
  if (reducedMotion) return;
  const tilt = (event) => {
    const box = wrap.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - .5;
    const y = (event.clientY - box.top) / box.height - .5;
    photo.style.setProperty("--tilt-x", `${-y * 7}deg`);
    photo.style.setProperty("--tilt-y", `${x * 7}deg`);
  };
  wrap.addEventListener("pointermove", tilt);
  wrap.addEventListener("pointerleave", () => {
    photo.style.setProperty("--tilt-x", "0deg");
    photo.style.setProperty("--tilt-y", "0deg");
  });
}

let activeFilmIndex = 0;
function updateFilm(index) {
  activeFilmIndex = Math.max(0, Math.min(birthdayData.memories.length - 1, index));
  $$(".film-frame-item").forEach((frame, frameIndex) => {
    frame.classList.toggle("is-active", frameIndex === activeFilmIndex);
    frame.classList.toggle("is-before", frameIndex < activeFilmIndex);
  });
  $("#film-frame").textContent = `Khung hình ${String(activeFilmIndex + 1).padStart(2, "0")}`;
  $("#film-date").textContent = birthdayData.memories[activeFilmIndex].date;
  $("#film-progress-bar").style.width = `${((activeFilmIndex + 1) / birthdayData.memories.length) * 100}%`;
}

function setupFilm() {
  const section = $("#thuoc-phim");
  let ticking = false;
  const handleScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const rect = section.getBoundingClientRect();
      const range = section.offsetHeight - innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / Math.max(range, 1)));
      updateFilm(Math.min(birthdayData.memories.length - 1, Math.floor(progress * birthdayData.memories.length)));
      ticking = false;
    });
  };
  addEventListener("scroll", handleScroll, { passive: true });
  $$(".film-image-button").forEach((button) => button.addEventListener("click", () => {
    const open = button.classList.toggle("show-caption");
    button.setAttribute("aria-label", open ? "Ẩn lời nhắn của ảnh" : "Hiện lời nhắn ẩn của ảnh");
    if (open) popHeart(button.getBoundingClientRect().left + 40, button.getBoundingClientRect().top + 60);
  }));
  $$(".viewer-open").forEach((button) => button.addEventListener("click", () => openViewer(Number(button.dataset.index))));
}

function setupScrapbook() {
  $$(".scrapbook-object").forEach((object) => object.addEventListener("click", (event) => {
    if (object.classList.contains("stamp")) return popHeart(event.clientX, event.clientY);
    const open = object.classList.toggle("is-open");
    object.setAttribute("aria-expanded", String(open));
  }));
  const photo = $("#anh-keo-tha");
  let dragging = false;
  let start = { x: 0, y: 0 };
  let offset = { x: 0, y: 0 };
  photo.addEventListener("pointerdown", (event) => {
    dragging = true;
    start = { x: event.clientX - offset.x, y: event.clientY - offset.y };
    photo.setPointerCapture(event.pointerId);
  });
  photo.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    offset.x = Math.max(-45, Math.min(45, event.clientX - start.x));
    offset.y = Math.max(-45, Math.min(45, event.clientY - start.y));
    photo.style.setProperty("--drag-x", `${offset.x}px`);
    photo.style.setProperty("--drag-y", `${offset.y}px`);
  });
  photo.addEventListener("pointerup", () => { dragging = false; });
}

function setupLetter() {
  const letter = $("#folded-letter");
  letter.addEventListener("click", () => {
    const open = letter.classList.toggle("is-open");
    letter.setAttribute("aria-expanded", String(open));
  });
}

let cakeState = 0;
let fireworksActive = false;
let clearConfettiTimer;
function setCakeState(nextState, fromMic = false) {
  const cake = $("#cake");
  const section = $("#banh-kem");
  cakeState = nextState;
  cake.classList.remove("is-bouncing", "is-smoking");
  void cake.offsetWidth;
  if (nextState === 1 || nextState === 3) {
    cake.classList.add("is-lit", "is-bouncing");
    section.classList.add("is-warm");
    fireworksActive = !reducedMotion;
    launchCelebration();
    const message = nextState === 1 ? birthdayData.cakeMessages.lit : birthdayData.cakeMessages.relight;
    $("#cake-message").textContent = message;
    cake.setAttribute("aria-label", `${message} Chạm để thổi tắt nến.`);
  } else {
    cake.classList.remove("is-lit");
    cake.classList.add("is-smoking");
    section.classList.remove("is-warm");
    fireworksActive = false;
    clearConfetti();
    $("#cake-message").textContent = birthdayData.cakeMessages.blownOut;
    cake.setAttribute("aria-label", `${birthdayData.cakeMessages.blownOut} Chạm để thắp nến lại.`);
    if (fromMic) $("#mic-status").textContent = "Anh nghe thấy rồi — nến đã tắt!";
  }
}

function setupCake() {
  $("#cake").addEventListener("click", () => setCakeState(cakeState === 0 ? 1 : cakeState === 1 || cakeState === 3 ? 2 : 3));
  $("#cake-area").addEventListener("click", (event) => {
    if (!fireworksActive || event.target.closest("button")) return;
    launchFirework(event.clientX, event.clientY);
  });
  setupMicrophone();
  setupFireworks();
}

function launchCelebration() {
  if (!reducedMotion) {
    for (let i = 0; i < (innerWidth < 700 ? 24 : 46); i += 1) {
      const piece = document.createElement("span");
      piece.className = "confetti";
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.background = ["#c44b73", "#d8a849", "#7b2948", "#f5b6c8", "#fff8eb"][i % 5];
      piece.style.setProperty("--drift", `${Math.random() * 10 - 5}rem`);
      piece.style.setProperty("--duration", `${3 + Math.random() * 2}s`);
      $("#confetti-layer").append(piece);
      piece.addEventListener("animationend", () => piece.remove());
    }
  }
  clearTimeout(clearConfettiTimer);
  clearConfettiTimer = setTimeout(clearConfetti, 5500);
}

function clearConfetti() {
  $$(".confetti").forEach((piece) => piece.remove());
}

function calculateRms(values) {
  return Math.sqrt(values.reduce((sum, value) => sum + value * value, 0) / values.length);
}

function isBlowing(rms, baseline) {
  return rms >= Math.max(.065, baseline * 2.2);
}

function setupMicrophone() {
  const button = $("#mic-button");
  const status = $("#mic-status");
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!navigator.mediaDevices?.getUserMedia || !AudioContextClass) {
    button.disabled = true;
    status.textContent = "Thiết bị này chưa hỗ trợ thổi nến bằng micro. Em vẫn có thể chạm vào bánh nhé.";
    return;
  }
  button.disabled = false;
  button.addEventListener("click", async () => {
    if (cakeState !== 1 && cakeState !== 3) setCakeState(cakeState === 0 ? 1 : 3);
    button.disabled = true;
    status.textContent = "Đang chờ em cho phép dùng micro…";
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const context = new AudioContextClass();
      await context.resume();
      const analyser = context.createAnalyser();
      analyser.fftSize = 1024;
      analyser.smoothingTimeConstant = .25;
      context.createMediaStreamSource(stream).connect(analyser);
      const values = new Float32Array(analyser.fftSize);
      const baselineSamples = [];
      let baseline = .01;
      let strongFrames = 0;
      status.textContent = "Giữ yên một chút để micro nghe mức âm thanh xung quanh nhé.";
      const started = performance.now();
      const stopListening = async () => {
        stream.getTracks().forEach((track) => track.stop());
        await context.close();
        button.disabled = false;
      };
      const listen = () => {
        analyser.getFloatTimeDomainData(values);
        const rms = calculateRms(values);
        const elapsed = performance.now() - started;
        if (elapsed < 700) {
          baselineSamples.push(rms);
          setTimeout(listen, 50);
          return;
        }
        if (baselineSamples.length) {
          baseline = Math.max(.008, baselineSamples.reduce((sum, value) => sum + value, 0) / baselineSamples.length);
          baselineSamples.length = 0;
          status.textContent = "Micro đã sẵn sàng. Em hãy thổi đều về phía thiết bị nhé.";
        }
        strongFrames = isBlowing(rms, baseline) ? strongFrames + 1 : Math.max(0, strongFrames - 1);
        if (strongFrames >= 4 && (cakeState === 1 || cakeState === 3)) {
          setCakeState(2, true);
          stopListening();
          return;
        }
        if (elapsed > 15000) {
          stopListening();
          status.textContent = "Chưa nghe thấy hơi thổi. Em có thể thử lại hoặc chạm vào bánh để tắt nến nhé.";
          return;
        }
        setTimeout(listen, 50);
      };
      listen();
    } catch {
      button.disabled = false;
      status.textContent = "Không thể dùng micro lúc này. Không sao, em vẫn có thể chạm vào bánh để tiếp tục nhé.";
    }
  });
}

const particles = [];
let fireworkContext;
function setupFireworks() {
  const canvas = $("#fireworks");
  fireworkContext = canvas.getContext("2d");
  const resize = () => {
    const ratio = Math.min(devicePixelRatio || 1, 2);
    canvas.width = canvas.clientWidth * ratio;
    canvas.height = canvas.clientHeight * ratio;
    fireworkContext.setTransform(ratio, 0, 0, ratio, 0, 0);
  };
  resize();
  addEventListener("resize", resize);
  let lastLaunch = 0;
  const animate = (time) => {
    fireworkContext.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    if (document.hidden) {
      requestAnimationFrame(animate);
      return;
    }
    if (fireworksActive && !document.hidden && time - lastLaunch > (innerWidth < 700 ? 1200 : 700)) {
      launchFirework(canvas.clientWidth * (.15 + Math.random() * .7), canvas.clientHeight * (.18 + Math.random() * .42), true);
      lastLaunch = time;
    }
    for (let i = particles.length - 1; i >= 0; i -= 1) {
      const particle = particles[i];
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += .035;
      particle.life -= .018;
      if (particle.life <= 0) { particles.splice(i, 1); continue; }
      fireworkContext.globalAlpha = particle.life;
      fireworkContext.fillStyle = particle.color;
      fireworkContext.beginPath();
      fireworkContext.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
      fireworkContext.fill();
    }
    fireworkContext.globalAlpha = 1;
    requestAnimationFrame(animate);
  };
  if (!reducedMotion) requestAnimationFrame(animate);
}

function launchFirework(x, y, local = false) {
  if (reducedMotion || particles.length > 240) return;
  const canvas = $("#fireworks");
  const rect = canvas.getBoundingClientRect();
  const originX = local ? x : x - rect.left;
  const originY = local ? y : y - rect.top;
  const count = innerWidth < 700 ? 18 : 30;
  const colors = ["#c44b73", "#d8a849", "#f5b6c8", "#fff8eb", "#7b2948"];
  for (let i = 0; i < count; i += 1) {
    const angle = (Math.PI * 2 * i) / count;
    const speed = 1.2 + Math.random() * 2.6;
    particles.push({ x: originX, y: originY, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 1, color: colors[i % colors.length] });
  }
}

function updateWishProgress() {
  const opened = $$(".wish-object.is-open").length;
  $("#wish-progress").textContent = `Đã mở ${opened}/${birthdayData.wishes.length} lời nhắn`;
  if (opened === birthdayData.wishes.length) {
    $("#all-wishes").textContent = birthdayData.allWishesMessage;
    $("#all-wishes").hidden = false;
    launchCelebration();
  }
}

function setupWishes() {
  $$(".wish-object").forEach((object) => object.addEventListener("click", (event) => {
    if (object.classList.contains("is-open")) return;
    object.classList.add("is-open");
    object.setAttribute("aria-expanded", "true");
    popHeart(event.clientX, event.clientY);
    updateWishProgress();
  }));
}

let quizIndex = 0;
let quizScore = 0;
function setupQuiz() {
  if (!birthdayData.quizEnabled) return;
  $("#start-quiz").addEventListener("click", () => {
    $("#quiz-start").hidden = true;
    $("#quiz-content").hidden = false;
    showQuizQuestion();
  });
}

function showQuizQuestion() {
  const quiz = birthdayData.quiz[quizIndex];
  $("#quiz-count").textContent = `Câu ${quizIndex + 1}/${birthdayData.quiz.length}`;
  $("#quiz-question").textContent = quiz.question;
  $("#quiz-feedback").textContent = "";
  $("#quiz-options").innerHTML = quiz.options.map((option, index) => `<button class="quiz-option" type="button" data-index="${index}">${option}</button>`).join("");
  $$(".quiz-option").forEach((option) => option.addEventListener("click", () => answerQuiz(Number(option.dataset.index))));
}

function answerQuiz(answer) {
  const quiz = birthdayData.quiz[quizIndex];
  $$(".quiz-option").forEach((option) => { option.disabled = true; });
  const correct = answer === quiz.answer;
  if (correct) quizScore += 1;
  $("#quiz-feedback").textContent = correct ? quiz.feedback : quiz.gentleFeedback;
  setTimeout(() => {
    quizIndex += 1;
    if (quizIndex < birthdayData.quiz.length) return showQuizQuestion();
    $("#quiz-content").innerHTML = `<p class="quiz-count">Đã hoàn thành</p><h3>Em nhớ được ${quizScore}/${birthdayData.quiz.length} câu</h3><p class="quiz-feedback">Cảm ơn em đã cùng anh mở lại những chuyện nhỏ này. Kỷ niệm đẹp nhất vẫn là những điều mình sắp cùng nhau tạo ra.</p>`;
    launchCelebration();
  }, 1500);
}

let viewerIndex = 0;
let viewerTouchX = 0;
function openViewer(index) {
  viewerIndex = (index + birthdayData.memories.length) % birthdayData.memories.length;
  const memory = birthdayData.memories[viewerIndex];
  setImage($("#viewer-image"), memory.image, memory.alt);
  $("#viewer-caption").textContent = `${memory.title} — ${memory.date}`;
  const dialog = $("#photo-viewer");
  if (!dialog.open) dialog.showModal();
}

function setupViewer() {
  const dialog = $("#photo-viewer");
  $("#viewer-close").addEventListener("click", () => dialog.close());
  $("#viewer-prev").addEventListener("click", () => openViewer(viewerIndex - 1));
  $("#viewer-next").addEventListener("click", () => openViewer(viewerIndex + 1));
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener("pointerdown", (event) => { viewerTouchX = event.clientX; });
  dialog.addEventListener("pointerup", (event) => {
    const distance = event.clientX - viewerTouchX;
    if (Math.abs(distance) > 55) openViewer(viewerIndex + (distance < 0 ? 1 : -1));
  });
}

function setupFinalGift() {
  const button = $("#final-gift-button");
  button.addEventListener("click", () => {
    const gift = $("#final-gift");
    gift.hidden = !gift.hidden;
    button.setAttribute("aria-expanded", String(!gift.hidden));
    button.textContent = gift.hidden ? "Mở món quà cuối cùng" : "Khép món quà lại";
    if (!gift.hidden) launchCelebration();
  });
}

function popHeart(x, y) {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = "♥";
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  $("#heart-layer").append(heart);
  heart.addEventListener("animationend", () => heart.remove());
}

validateBirthdayData();
renderContent();
setupOpening();
setupReveals();
setupHeroTilt();
setupFilm();
setupScrapbook();
setupLetter();
setupCake();
setupWishes();
setupQuiz();
setupViewer();
setupFinalGift();
