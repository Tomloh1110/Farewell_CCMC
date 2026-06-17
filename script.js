// ==========================================
// 1. 你的名单数据库 (你可以根据格式，自由添加更多的人)
// ==========================================
const friendsData = {
    "test1": {
        name: "测试小明",
        role: "CCMC 设计组",
        message: "小明，谢谢你这段时间为 CCMC 贡献的无数精美设计！祝你未来的旅程如同你的画笔一样，画出最绚丽多彩的风景。有缘我们江湖再见！",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop"
    },
    "test2": {
        name: "测试红红",
        role: "CCMC 策划组",
        message: "红红，每次活动策划有你在都让人无比安心！感谢你的付出与支持。祝你未来的日子里事事顺利，每天都充满阳光和好心情！",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop"
    }
    // 以后要增加第 3 个人，只需在这里像下面这样写：
    // ,
    // "friendId": {
    //     name: "真实姓名",
    //     role: "真实职位",
    //     message: "真实祝福语",
    //     image: "真实图片链接"
    // }
};

// 默认兜底页面内容
const defaultData = {
    name: "亲爱的 CCMC 伙伴",
    role: "CCMC 大家庭",
    message: "感谢你一直以来对 CCMC 的支持与默默付出。虽然这里可能没有你的专属信息，但我们同样由衷地祝福你，愿你未来道路平坦，前途似锦，常回家看看！",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop"
};

// ==========================================
// 2. 解析网址参数，初始化网页内容
// ==========================================
const urlParams = new URLSearchParams(window.location.search);
const friendId = urlParams.get('id');

const welcomeTitle = document.getElementById('welcome-title');
const nameElement = document.getElementById('friend-name');
const roleElement = document.getElementById('friend-role');
const blessingElement = document.getElementById('blessing-text');
const imgElement = document.getElementById('friend-img');

// 提前把信息填好在隐藏的卡片里
let currentFriend = defaultData;
if (friendId && friendsData[friendId]) {
    currentFriend = friendsData[friendId];
}

welcomeTitle.innerText = "亲爱的 " + currentFriend.name;
nameElement.innerText = currentFriend.name;
roleElement.innerText = currentFriend.role;
blessingElement.innerText = currentFriend.message;
imgElement.src = currentFriend.image;

// ==========================================
// 3. 页面转场、音乐与特效逻辑
// ==========================================
const welcomeScreen = document.getElementById('welcome-screen');
const cardScreen = document.getElementById('card-screen');
const openBtn = document.getElementById('open-btn');
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');

// 点击“开启惊喜”按钮
openBtn.addEventListener('click', () => {
    // a. 播放音乐
    bgMusic.play().then(() => {
        musicBtn.classList.add('music-playing');
    }).catch(err => console.log("音乐播放受阻:", err));

    // b. 渐出封面
    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
        welcomeScreen.classList.add('hide');
        
        // c. 渐入卡片
        cardScreen.classList.remove('hide');
        // 延时一下以触发 CSS 动画
        setTimeout(() => {
            cardScreen.classList.add('show');
        }, 50);

        // d. 显示音乐控制悬浮按钮
        musicBtn.classList.remove('hide');
        musicBtn.classList.add('show');
    }, 800);

    // e. 触发五彩礼花彩带特效
    startConfetti();
});

// 悬浮音乐按钮点击逻辑（暂停/播放）
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
// 4. 纯 JS 实现的彩带雨特效
// ==========================================
function startConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // 自动适应屏幕尺寸
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const colors = ["#f2797a", "#f9ca24", "#70a1ff", "#2ed573", "#ff7f50", "#d89a84"];
    const particles = [];

    // 初始化彩带粒子
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

    // 绘制循环
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

        // 检查彩带是否全部飘出屏幕，没有就继续绘制
        const activeParticles = particles.filter(p => p.y < canvas.height);
        if (activeParticles.length > 0) {
            animationFrameId = requestAnimationFrame(draw);
        } else {
            // 结束后清除画布并注销事件监听
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        }
    }
    draw();
}
