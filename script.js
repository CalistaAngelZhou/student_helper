const translations = {
    en: {
        pageTitle: "Echoes of Wisdom",
        languageLabel: "Choose language",
        navHome: "Home",
        navAbout: "About",
        navActivities: "Activities",
        navTeam: "Team",
        join: "Join Us",
        heroCta: "Discover Our Mission",
        aboutTitle: "About Our Project",
        aboutText: 'We created <strong>Echoes of Wisdom</strong> to build meaningful connections between students and the elderly. Through visits, conversations, storytelling, and activities, we hope to give them companionship while learning from their experiences and stories.',
        activitiesTitle: "Our Activities",
        activityStory: "💬 Storytelling",
        activityStoryText: "Talking with residents and sharing valuable life experiences.",
        activitySupport: "🤝 Assistance",
        activitySupportText: "Helping with daily activities and providing physical support.",
        activityMemories: "📸 Memories",
        activityMemoriesText: "Taking photos to preserve beautiful moments together.",
        teamTitle: "Our Team",
        rolePRLeader: "PR Leader",
        roleGroupLeader: "Group Leader",
        roleEventLeader: "Event Leader",
        roleSocialMedia: "Social Media",
        roleSocialMediaLeader: "Social Media Leader",
        followTitle: "Follow Us",
        followText: "Stay updated with our latest volunteer projects!",
        socialTitle: "Follow Us",
        socialText: "Stay connected with our latest volunteer projects!"
    },
    ms: {
        pageTitle: "Gema Kebijaksanaan",
        languageLabel: "Pilih bahasa",
        navHome: "Utama",
        navAbout: "Tentang",
        navActivities: "Aktiviti",
        navTeam: "Pasukan",
        join: "Sertai Kami",
        heroCta: "Kenali Misi Kami",
        aboutTitle: "Tentang Projek Kami",
        aboutText: 'Kami menubuhkan <strong>Gema Kebijaksanaan</strong> untuk mengeratkan hubungan antara pelajar dengan warga emas. Melalui lawatan, perbualan, perkongsian cerita dan aktiviti, kami berharap dapat menemani mereka sambil mempelajari pengalaman serta kisah hidup mereka.',
        activitiesTitle: "Aktiviti Kami",
        activityStory: "💬 Perkongsian Cerita",
        activityStoryText: "Berbual dengan penghuni dan berkongsi pengalaman hidup yang berharga.",
        activitySupport: "🤝 Bantuan",
        activitySupportText: "Membantu dalam aktiviti harian dan memberikan sokongan fizikal.",
        activityMemories: "📸 Kenangan",
        activityMemoriesText: "Mengambil gambar untuk mengabadikan detik indah bersama.",
        teamTitle: "Pasukan Kami",
        followTitle: "Ikuti Kami",
        followText: "Ikuti perkembangan projek sukarelawan terkini kami!",
        socialTitle: "Ikuti Kami",
        socialText: "Terus berhubung dengan projek sukarelawan terkini kami!"
    },
    zh: {
        pageTitle: "智慧回响",
        languageLabel: "选择语言",
        navHome: "首页",
        navAbout: "关于我们",
        navActivities: "活动",
        navTeam: "团队",
        join: "加入我们",
        heroCta: "了解我们的使命",
        aboutTitle: "关于我们的项目",
        aboutText: '我们创立了<strong>智慧回响</strong>，希望在学生与长者之间建立有意义的联系。通过探访、交谈、讲故事和开展活动，我们希望陪伴长者，同时从他们的经历与故事中学习。',
        activitiesTitle: "我们的活动",
        activityStory: "💬 分享故事",
        activityStoryText: "与长者交谈，分享宝贵的人生经历。",
        activitySupport: "🤝 协助关怀",
        activitySupportText: "协助日常活动并提供力所能及的支持。",
        activityMemories: "📸 美好回忆",
        activityMemoriesText: "拍照记录彼此共度的美好时刻。",
        teamTitle: "我们的团队",
        followTitle: "关注我们",
        followText: "了解我们最新的志愿服务项目！",
        socialTitle: "关注我们",
        socialText: "关注我们的最新志愿服务项目！"
    },
    ja: {
        pageTitle: "知恵のこだま",
        languageLabel: "言語を選択",
        navHome: "ホーム",
        navAbout: "プロジェクト紹介",
        navActivities: "活動内容",
        navTeam: "チーム",
        join: "参加する",
        heroCta: "私たちの使命を知る",
        aboutTitle: "プロジェクトについて",
        aboutText: '私たちは、学生と高齢者の間に心の通うつながりを築くために<strong>知恵のこだま</strong>を立ち上げました。訪問や会話、語り合い、さまざまな活動を通して寄り添いながら、皆さんの経験や物語から学ぶことを目指しています。',
        activitiesTitle: "活動内容",
        activityStory: "💬 思い出を語り合う",
        activityStoryText: "入居者の方々と会話し、貴重な人生経験を分かち合います。",
        activitySupport: "🤝 サポート",
        activitySupportText: "日常生活のお手伝いをし、必要な支援を行います。",
        activityMemories: "📸 思い出",
        activityMemoriesText: "一緒に過ごした素敵な瞬間を写真に残します。",
        teamTitle: "チーム紹介",
        followTitle: "フォローする",
        followText: "最新のボランティア活動をぜひご覧ください！",
        socialTitle: "フォローする",
        socialText: "最新のボランティア活動をチェックしてください！"
    }
};

const languageSelect = document.getElementById("language-select");
const navbar = document.querySelector(".navbar");

function updateScrollOffset() {
    document.documentElement.style.scrollPaddingTop = `${navbar.offsetHeight + 12}px`;
}

updateScrollOffset();
window.addEventListener("resize", updateScrollOffset);

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        document.querySelectorAll(".nav-links a").forEach((navLink) => {
            navLink.classList.remove("active");
        });
        link.classList.add("active");
    });
});

function setLanguage(language) {
    const selectedTranslations = translations[language] || translations.en;

    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const translatedText = selectedTranslations[element.dataset.i18n];
        if (translatedText) element.innerHTML = translatedText;
    });
    languageSelect.value = language in translations ? language : "en";
    languageSelect.setAttribute("aria-label", selectedTranslations.languageLabel);
}

languageSelect.addEventListener("change", (event) => {
    setLanguage(event.target.value);
});

setLanguage("en");

const clickLeafLayer = document.querySelector(".click-leaf-layer");
const leafLayer = document.querySelector(".leaf-layer");
const leafPath = "M54 8C31 8 12 15 9 34c-2 12 7 21 19 19C47 50 54 31 54 8ZM16 46c9-10 18-17 31-28C37 31 29 39 19 49";

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const fallingLeafCount = 18;

    for (let index = 0; index < fallingLeafCount; index += 1) {
        const leaf = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const shape = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const vein = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const duration = 12 + Math.random() * 14;

        leaf.setAttribute("viewBox", "0 0 64 64");
        leaf.setAttribute("aria-hidden", "true");
        leaf.classList.add("falling-leaf");
        leaf.style.left = `${Math.random() * 100}%`;
        leaf.style.setProperty("--leaf-size", `${22 + Math.random() * 30}px`);
        leaf.style.setProperty("--fall-duration", `${duration}s`);
        leaf.style.setProperty("--fall-delay", `${-Math.random() * duration}s`);
        leaf.style.setProperty("--sway", `${Math.random() * 140 - 70}px`);
        leaf.style.setProperty("--sway-end", `${Math.random() * 100 - 50}px`);
        leaf.style.setProperty("--spin", `${180 + Math.random() * 360}deg`);
        shape.setAttribute("d", leafPath);
        vein.setAttribute("d", "M16 46c9-10 18-17 31-28");
        vein.classList.add("falling-vein");
        leaf.append(shape, vein);
        leafLayer.appendChild(leaf);
    }
}

let lastTrailPosition = null;
let lastTrailTime = 0;

function createCursorLeaf(x, y) {
    const leaf = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const shape = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const vein = document.createElementNS("http://www.w3.org/2000/svg", "path");

    leaf.setAttribute("viewBox", "0 0 64 64");
    leaf.setAttribute("aria-hidden", "true");
    leaf.classList.add("cursor-leaf");
    leaf.style.left = `${x}px`;
    leaf.style.top = `${y}px`;
    leaf.style.setProperty("--drift-x", `${Math.random() * 36 - 18}px`);
    leaf.style.setProperty("--spin", `${Math.random() * 100 - 50}deg`);
    shape.setAttribute("d", leafPath);
    vein.setAttribute("d", "M16 46c9-10 18-17 31-28M24 37l-2-9m10 2 8-8");
    vein.classList.add("leaf-vein");
    leaf.append(shape, vein);
    clickLeafLayer.appendChild(leaf);
    leaf.addEventListener("animationend", () => leaf.remove(), { once: true });
}

document.addEventListener("mousemove", (event) => {
    if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;

    const now = performance.now();
    const movedEnough = !lastTrailPosition || Math.hypot(
        event.clientX - lastTrailPosition.x,
        event.clientY - lastTrailPosition.y
    ) >= 14;

    if (movedEnough && now - lastTrailTime >= 45) {
        createCursorLeaf(event.clientX, event.clientY);
        lastTrailPosition = { x: event.clientX, y: event.clientY };
        lastTrailTime = now;
    }
});

document.addEventListener("click", (event) => {
    if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;

    const leaf = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    leaf.setAttribute("viewBox", "0 0 64 64");
    leaf.classList.add("click-leaf");
    leaf.style.left = `${event.clientX}px`;
    leaf.style.top = `${event.clientY}px`;
    leaf.style.setProperty("--drift-x", `${Math.random() * 90 - 45}px`);
    leaf.style.setProperty("--spin", `${Math.random() * 180 - 90}deg`);
    path.setAttribute("d", leafPath);
    leaf.appendChild(path);

    const vein = document.createElementNS("http://www.w3.org/2000/svg", "path");
    vein.setAttribute("d", "M16 46c9-10 18-17 31-28M24 37l-2-9m10 2 8-8");
    vein.classList.add("leaf-vein");
    leaf.appendChild(vein);

    [[31, 38], [38, 35]].forEach(([cx, cy]) => {
        const eye = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        eye.setAttribute("cx", cx);
        eye.setAttribute("cy", cy);
        eye.setAttribute("r", "1.8");
        eye.classList.add("leaf-face");
        leaf.appendChild(eye);
    });

    const smile = document.createElementNS("http://www.w3.org/2000/svg", "path");
    smile.setAttribute("d", "M32 42q3 3 6-1");
    smile.classList.add("leaf-smile");
    leaf.appendChild(smile);

    clickLeafLayer.appendChild(leaf);
    leaf.addEventListener("animationend", () => leaf.remove(), { once: true });
});

const revealTargets = document.querySelectorAll("main section, .card, .team-card, .social-btn");

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.body.classList.add("reveal-ready");
    revealTargets.forEach((element) => element.classList.add("scroll-reveal"));

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealTargets.forEach((element) => revealObserver.observe(element));
} else {
    revealTargets.forEach((element) => element.classList.add("is-visible"));
}
