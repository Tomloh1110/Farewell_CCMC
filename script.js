// ==========================================
// 1. 名单数据库（完全匹配：长信、多图、祝福语结构）
// ==========================================
const friendsData = {
    "test1": {
        name: "小明",
        role: "CCMC 设计组",
        letter: "好久不见。还记得你刚加入 CCMC 的时候，还是个略带羞涩的新人。\n在过去的几年里，我们一起熬夜改图，一起为了策划案争论不休，也一起吃过无数顿外卖。谢谢你留下那些精彩又用心的设计，CCMC 的每一个高光时刻都有你的汗水。\n虽然我们要在这里说再见了，但这段共同奋斗的记忆永远都在。祝你在新的旅程中顺顺利利！",
        images: [
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop"
        ],
        blessing: "最后，祝你未来的路越走越宽广！灵感永远爆棚，天天好心情！"
    },
    "test2": {
        name: "红红",
        role: "CCMC 策划组",
        letter: "时光过得真快，转眼就到了要送别你的时候。\n非常感恩在 CCMC 与你相遇，每次活动策划有你在都让人感到无比踏实。你的细心、你的靠谱，我们每个人都看在眼里、记在心上。\n愿你未来在新的岗位上继续发光发热，展现属于你的风采！",
        images: [
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop"
        ],
        blessing: "最后，祝你在新的旅程中一切顺利，天天开心，所得皆所愿！"
    }
};

// 默认兜底页面数据
const defaultData = {
    name: "CCMC 伙伴",
    role: "CCMC 大家庭",
    letter: "非常感谢你一直以来对 CCMC 的支持与付出！这里凝聚了大家共同的回忆与汗水。\n虽然这里可能没有展示针对您个人的专属信件，但我们同样珍视与你共处的每一天。祝你前路顺遂，一切皆好！",
    images: [
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop"
    ],
    blessing: "最后，祝你未来人生道路平坦，常回家看看，CCMC 永远是你的港湾！"
};

// ==========================================
// 2. 解析 URL 参数并渲染文字内容
// ==========================================
const urlParams = new URLSearchParams(window.location.search);
const friendId = urlParams.get('id');

const welcomeTitle = document.getElementById('welcome-title');
const nameElement = document.getElementById('friend-name');
const roleElement = document.getElementById('friend-role');
const letterElement = document.getElementById('letter-content');
const blessingElement = document.getElementById('blessing-text');

let currentFriend = defaultData;
if (friendId && friendsData[friendId]) {
    currentFriend = friendsData[friendId];
}

// 渲染文字
welcomeTitle.innerText = "亲爱的 " + currentFriend.name;
nameElement.innerText = currentFriend.name;
roleElement.innerText = currentFriend.role;
letterElement.innerText = currentFriend.letter;
blessingElement.innerText = currentFriend.blessing;

// ==========================================
// 3. 动态渲染自适应照片滑轨
// ==========================================
const carouselTrack = document.getElementById('carousel-track');
const carouselDots = document.getElementById('carousel-dots');
const imagesArray = currentFriend.images || [];

carouselTrack.innerHTML = '';
carouselDots.innerHTML = '';

imagesArray.forEach((imgUrl, index) => {
    // 创建照片 Slide 节点
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    
    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = `回忆照片 ${index + 1}`;
    
    // 照片绑定点击原图查看功能 (优化大图模式)
    img.addEventListener('click', () => {
        openLightbox(imgUrl);
    });

    const caption = document.createElement('div');
    caption.className = 'caption';
    caption.innerText = `❤️ 精彩瞬间 (${index + 1}/${imagesArray.length})`;

    slide.appendChild(img);
    slide.appendChild(caption);
    carouselTrack.appendChild(slide);

    // 创建滑动指示圆点
    const dot = document.createElement('div');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    carouselDots.appendChild(dot);
});

// 监听移动端手势滑动
carouselTrack.addEventListener('scroll', () => {
    const width = carouselTrack.clientWidth;
    const index = Math.round(carouselTrack.scrollLeft / width);
    
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
        if (idx === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
});

// ==========================================
// 4. 原图查看器 (Lightbox) 交互
// ==========================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(url) {
    lightboxImg.src = url;
    lightbox.classList.remove('hide');
}

lightbox.addEventListener('click', () => {
    lightbox.classList.add('hide');
});

// ==========================================
// 5. 封面转场及音乐控制
// ==========================================
const welcomeScreen = document.getElementById('welcome-screen');
const cardScreen = document.getElementById('card-screen');
const openBtn = document.getElementById('open-btn');
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');

openBtn.addEventListener('click', () => {
    // 手机端在交互后播放音乐
    bgMusic.play().then(() => {
        musicBtn.classList.add('music-playing');
    }).catch(err => console.log("音频加载中或浏览器策略拦截:", err));

    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
        welcomeScreen.classList.add('hide');
        
        cardScreen.classList.remove('hide');
        setTimeout(() => {
            cardScreen.classList.add('show');
        }, 50);

        musicBtn.classList.remove('hide');
        musicBtn.classList.add('show');
    }, 600);

    startConfetti();
});

musicBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.classList.add('music-playing');
    } else {
        bgMusic.pause();
        musicBtn.classList.remove('music-playing');
    }
});

// ==========================================
// 6. 彩带雨动画效果
// ==========================================
function startConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const colors = ["#f2797a", "#f9ca24", "#70a1ff", "#2ed573", "#ff7f50", "#d89a84"];
    const particles = [];

    for (let i = 0; i < 120; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * canvas.height,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 5,
            tiltAngleIncremental: Math.random() * 0.07 + 0.02,
            tiltAngle: 0
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, index) => {
            p.tiltAngle += p.tiltAngleIncremental;
            p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
            p.x += Math.sin(p.tiltAngle);
            p.tilt = Math.sin(p.tiltAngle - index / 3) * 15;

            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
            ctx.stroke();
        });

        const activeParticles = particles.filter(p => p.y < canvas.height);
        if (activeParticles.length > 0) {
            animationFrameId = requestAnimationFrame(draw);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        }
    }
    draw();
}
