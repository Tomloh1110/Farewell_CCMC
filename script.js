// ==========================================
// 1. 名单数据库（完全满足：信件、照片、祝福语 3大板块）
// ==========================================
const friendsData = {
    "test1": {
        name: "小明",
        role: "CCMC 设计组",
        // 板块1：写给他的长信 (在代码中输入 \n 可以直接让信件在手机上换行)
        letter: "好久不见。还记得你刚加入 CCMC 的时候，还是个略带羞涩的新人。\n在过去的几年里，我们一起熬夜改图，一起为了策划案争论不休，也一起吃过无数顿外卖。谢谢你留下那些精彩又用心的设计，CCMC 的每一个高光时刻都有你的汗水。\n虽然我们要在这里说再见了，但这段共同奋斗的记忆永远都在。祝你在新的旅程中顺顺利利！",
        // 板块2：他的专属合照
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop",
        // 板块3：最后的专属祝福语
        blessing: "最后，祝你未来的路越走越宽广！灵感永远爆棚，天天好心情！"
    },
    "test2": {
        name: "红红",
        role: "CCMC 策划组",
        letter: "时光过得真快，转眼就到了要送别你的时候。\n非常感恩在 CCMC 与你相遇，每次活动策划有你在都让人感到无比踏实。你的细心、你的靠谱，我们每个人都看在眼里、记在心上。\n愿你未来在新的岗位上继续发光发热，展现属于你的风采！",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop",
        blessing: "最后，祝你在新的旅程中一切顺利，天天开心，所得皆所愿！"
    }
};

// 默认兜底页面数据
const defaultData = {
    name: "亲爱的 CCMC 伙伴",
    role: "CCMC 大家庭",
    letter: "非常感谢你一直以来对 CCMC 的支持与付出！这里凝聚了大家共同的回忆与汗水。\n虽然这里可能没有展示针对您个人的专属信件，但我们同样珍视与你共处的每一天。祝你前路顺遂，一切皆好！",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop",
    blessing: "最后，祝你未来人生道路平坦，常回家看看，CCMC 永远是你的港湾！"
};

// ==========================================
// 2. 解析网址参数，初始化网页内容
// ==========================================
const urlParams = new URLSearchParams(window.location.search);
const friendId = urlParams.get('id');

const welcomeTitle = document.getElementById('welcome-title');
const nameElement = document.getElementById('friend-name');
const roleElement = document.getElementById('friend-role');
const letterElement = document.getElementById('letter-content');
const imgElement = document.getElementById('friend-img');
const blessingElement = document.getElementById('blessing-text');

// 根据 ID 从数据库提取数据
let currentFriend = defaultData;
if (friendId && friendsData[friendId]) {
    currentFriend = friendsData[friendId];
}

// 把对应的文字填入网页中
welcomeTitle.innerText = "亲爱的 " + currentFriend.name;
nameElement.innerText = currentFriend.name;
roleElement.innerText = currentFriend.role;
letterElement.innerText = currentFriend.letter;
imgElement.src = currentFriend.image;
blessingElement.innerText = currentFriend.blessing;

// ==========================================
// 3. 页面转场与音乐逻辑
// ==========================================
const welcomeScreen = document.getElementById('welcome-screen');
const cardScreen = document.getElementById('card-screen');
const openBtn = document.getElementById('open-btn');
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');

openBtn.addEventListener('click', () => {
    // 播放音乐
    bgMusic.play().then(() => {
        musicBtn.classList.add('music-playing');
    }).catch(err => console.log("音乐播放受阻:", err));

    // 渐出封面
    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
        welcomeScreen.classList.add('hide');
        
        // 渐入卡片
        cardScreen.classList.remove('hide');
        setTimeout(() => {
            cardScreen.classList.add('show');
        }, 50);

        // 显示音乐按钮
        musicBtn.classList.remove('hide');
        musicBtn.classList.add('show');
    }, 800);

    // 触发五彩礼花
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
// 4. 彩带雨效果逻辑（保持不变）
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
