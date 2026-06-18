// ==========================================
// 1. 31位朋友的完整名单数据库
// ==========================================
const friendsData = {
    "eric": {
        name: "Eric",
        role: "CCMC 伙伴",
        letter: "写给 Eric 的长信内容……\n在代码里使用 '\\n' 可以实现换行哦！",
        images: ["/Farewell_CCMC/images/eric.jpg", "/Farewell_CCMC/images/eric_2.jpg"], // 默认预设了合照路径，你可以放多张
        blessing: "祝你未来的路越走越宽广！前途似锦！"
    },
    "kelvin": {
        name: "Kelvin",
        role: "CCMC 伙伴",
        letter: "写给 Kelvin 的长信内容……",
        images: ["/Farewell_CCMC/images/kelvin.jpg"],
        blessing: "最后，祝你天天开心，所得皆所愿！"
    },
    "gloria": {
        name: "Gloria",
        role: "CCMC 伙伴",
        letter: "写给 Gloria 的长信内容……",
        images: ["/Farewell_CCMC/images/gloria.jpg"],
        blessing: "祝你未来人生道路平坦，常回家看看！"
    },
    "abner": {
        name: "Abner",
        role: "CCMC 伙伴",
        letter: "写给 Abner 的长信内容……",
        images: ["/Farewell_CCMC/images/abner.jpg"],
        blessing: "最后，祝你未来一切顺利，天天都有好心情！"
    },
    "emily": {
        name: "Emily",
        role: "CCMC 伙伴",
        letter: "写给 Emily 的长信内容……",
        images: ["/Farewell_CCMC/images/emily.jpg"],
        blessing: "最后，祝你心想事成，万事顺遂！"
    },
    "henry": {
        name: "Henry",
        role: "CCMC 伙伴",
        letter: "写给 Henry 的长信内容……",
        images: ["/Farewell_CCMC/images/henry.jpg"],
        blessing: "祝你一往无前，未来发光发热！"
    },
    "joseph": {
        name: "Joseph",
        role: "CCMC 伙伴",
        letter: "写给 Joseph 的长信内容……",
        images: ["/Farewell_CCMC/images/joseph.jpg"],
        blessing: "最后，祝你生活愉快，前程似锦！"
    },
    "changzhe": {
        name: "Chang Zhe",
        role: "CCMC 伙伴",
        letter: "写给 Chang Zhe 的长信内容……",
        images: ["/Farewell_CCMC/images/changzhe.jpg"],
        blessing: "最后，祝你新的旅程一切顺利，所得皆所愿！"
    },
    "zhechee": {
        name: "Zhe Chee",
        role: "CCMC 伙伴",
        letter: "写给 Zhe Chee 的长信内容……",
        images: ["/Farewell_CCMC/images/zhechee.jpg"],
        blessing: "最后，祝你天天开心，所得皆所愿！"
    },
    "kenxiong": {
        name: "Ken Xiong",
        role: "CCMC 伙伴",
        letter: "写给 Ken Xiong 的长信内容……",
        images: ["/Farewell_CCMC/images/kenxiong.jpg"],
        blessing: "最后，祝你未来人生道路平坦，万事顺利！"
    },
    "phoebe": {
        name: "Phoebe",
        role: "CCMC 伙伴",
        letter: "写给 Phoebe 的长信内容……",
        images: ["/Farewell_CCMC/images/phoebe.jpg"],
        blessing: "最后，祝你新的旅程充满阳光和好心情！"
    },
    "shinrou": {
        name: "ShinRou",
        role: "CCMC 伙伴",
        letter: "写给 ShinRou 的长信内容……",
        images: ["/Farewell_CCMC/images/shinrou.jpg"],
        blessing: "最后，祝你新的旅程一切顺利，天天开心！"
    },
    "yeexuan": {
        name: "Yee Xuan",
        role: "CCMC 伙伴",
        letter: "写给 Yee Xuan 的长信内容……",
        images: ["/Farewell_CCMC/images/yeexuan.jpg"],
        blessing: "最后，祝你心想事成，万事顺遂！"
    },
    "natalie": {
        name: "Natalie",
        role: "CCMC 伙伴",
        letter: "写给 Natalie 的长信内容……",
        images: ["/Farewell_CCMC/images/natalie.jpg"],
        blessing: "最后，祝你天天开心，所得皆所愿！"
    },
    "ziwei": {
        name: "Zi Wei",
        role: "CCMC 伙伴",
        letter: "写给 Zi Wei 的长信内容……",
        images: ["/Farewell_CCMC/images/ziwei.jpg"],
        blessing: "祝你未来人生道路平坦，前路顺遂！"
    },
    "adrian": {
        name: "Adrian",
        role: "CCMC 伙伴",
        letter: "写给 Adrian 的长信内容……",
        images: ["/Farewell_CCMC/images/adrian.jpg"],
        blessing: "最后，祝你新的旅程一切顺利，天天开心！"
    },
    "yongjun": {
        name: "Yong Jun",
        role: "CCMC 伙伴",
        letter: "写给 Yong Jun 的长信内容……",
        images: ["/Farewell_CCMC/images/yongjun.jpg"],
        blessing: "祝你一往无前，未来发光发热！"
    },
    "jiayao": {
        name: "Jia Yao",
        role: "CCMC 伙伴",
        letter: "写给 Jia Yao 的长信内容……",
        images: ["/Farewell_CCMC/images/jiayao.jpg"],
        blessing: "最后，祝你未来一切顺利，天天都有好心情！"
    },
    "ennis": {
        name: "Ennis",
        role: "CCMC 伙伴",
        letter: "写给 Ennis 的长信内容……",
        images: ["/Farewell_CCMC/images/ennis.jpg"],
        blessing: "最后，祝你生活愉快，前程似锦！"
    },
    "shirley": {
        name: "Shirley",
        role: "CCMC 伙伴",
        letter: "写给 Shirley 的长信内容……",
        images: ["/Farewell_CCMC/images/shirley.jpg"],
        blessing: "祝你未来人生道路平坦，常回家看看！"
    },
    "yanyan": {
        name: "Yan Yan",
        role: "CCMC 伙伴",
        letter: "写给 Yan Yan 的长信内容……",
        images: ["/Farewell_CCMC/images/yanyan.jpg"],
        blessing: "最后，祝你天天开心，所得皆所愿！"
    },
    "hueichien": {
        name: "Huei Chien",
        role: "CCMC 伙伴",
        letter: "写给 Huei Chien 的长信内容……",
        images: ["/Farewell_CCMC/images/hueichien.jpg"],
        blessing: "最后，祝你新的旅程一切顺利，天天开心！"
    },
    "justin": {
        name: "Justin",
        role: "CCMC 伙伴",
        letter: "写给 Justin 的长信内容……",
        images: ["/Farewell_CCMC/images/justin.jpg"],
        blessing: "最后，祝你心想事成，万事顺遂！"
    },
    "dunxiang": {
        name: "Dun Xiang",
        role: "CCMC 伙伴",
        letter: "写给 Dun Xiang 的长信内容……",
        images: ["/Farewell_CCMC/images/dunxiang.jpg"],
        blessing: "祝你一往无前，未来发光发热！"
    },
    "kelly": {
        name: "Kelly",
        role: "CCMC 伙伴",
        letter: "写给 Kelly 的长信内容……",
        images: ["/Farewell_CCMC/images/kelly.jpg"],
        blessing: "最后，祝你未来一切顺利，天天都有好心情！"
    },
    "weien": {
        name: "Wei En",
        role: "CCMC 伙伴",
        letter: "写给 Wei En 的长信内容……",
        images: ["/Farewell_CCMC/images/weien.jpg"],
        blessing: "最后，祝你新的旅程一切顺利，天天开心！"
    },
    "lydia": {
        name: "Lydia",
        role: "CCMC 伙伴",
        letter: "写给 Lydia 的长信内容……",
        images: ["/Farewell_CCMC/images/lydia.jpg"],
        blessing: "最后，祝你生活愉快，前程似锦！"
    },
    "kianqiang": {
        name: "Kian Qiang",
        role: "CCMC 伙伴",
        letter: "写给 Kian Qiang 的长信内容……",
        images: ["/Farewell_CCMC/images/kianqiang.jpg"],
        blessing: "最后，祝你天天开心，所得皆所愿！"
    },
    "jingxi": {
        name: "Jing Xi",
        role: "CCMC 伙伴",
        letter: "写给 Jing Xi 的长信内容……",
        images: ["/Farewell_CCMC/images/jingxi.jpg"],
        blessing: "祝你未来人生道路平坦，前路顺遂！"
    },
    "angelina": {
        name: "Angelina",
        role: "CCMC 伙伴",
        letter: "写给 Angelina 的长信内容……",
        images: ["/Farewell_CCMC/images/angelina.jpg"],
        blessing: "最后，祝你新的旅程一切顺利，天天开心！"
    },
    "junping": {
        name: "Jun Ping",
        role: "CCMC 伙伴",
        letter: "写给 Jun Ping 的长信内容……",
        images: ["/Farewell_CCMC/images/junping.jpg"],
        blessing: "最后，祝你未来一切顺利，天天都有好心情！"
    }
};

// 默认兜底页面数据
const defaultData = {
    name: "CCMC 伙伴",
    role: "CCMC 大家庭",
    letter: "非常感谢你一直以来对 CCMC 的支持与付出！这里凝聚了大家共同的回忆与汗水。\n虽然这里可能没有展示针对您个人的专属信件，但我们同样珍视与你共处的每一天。祝你前路顺遂，一切皆好！",
    images: ["/Farewell_CCMC/images/default.jpg"],
    blessing: "最后，祝你未来人生道路平坦，常回家看看，CCMC 永远是你的港湾！"
};

// ==========================================
// 2. 核心魔法：解析网址路径而无需问号（?id=）
// ==========================================
function getFriendIdFromPath() {
    const path = window.location.pathname; // 获取当前网址路径，例如 "/Farewell_CCMC/eric"
    const pathSegments = path.split('/').filter(Boolean); // 分割并清除空数组
    
    // 如果最后一段不是仓库名，说明是具体的某个人名
    if (pathSegments.length > 0) {
        const lastSegment = pathSegments[pathSegments.length - 1];
        if (lastSegment !== "Farewell_CCMC" && lastSegment !== "index.html" && lastSegment !== "404.html") {
            return lastSegment.toLowerCase(); // 返回小写的 ID
        }
    }
    return null;
}

const friendId = getFriendIdFromPath();

// ==========================================
// 3. 渲染页面内容
// ==========================================
const welcomeTitle = document.getElementById('welcome-title');
const nameElement = document.getElementById('friend-name');
const roleElement = document.getElementById('friend-role');
const letterElement = document.getElementById('letter-content');
const blessingElement = document.getElementById('blessing-text');

let currentFriend = defaultData;
if (friendId && friendsData[friendId]) {
    currentFriend = friendsData[friendId];
}

welcomeTitle.innerText = "亲爱的 " + currentFriend.name;
nameElement.innerText = currentFriend.name;
roleElement.innerText = currentFriend.role;
letterElement.innerText = currentFriend.letter;
blessingElement.innerText = currentFriend.blessing;

// ==========================================
// 4. 动态渲染自适应照片滑轨
// ==========================================
const carouselTrack = document.getElementById('carousel-track');
const carouselDots = document.getElementById('carousel-dots');
const imagesArray = currentFriend.images || [];

carouselTrack.innerHTML = '';
carouselDots.innerHTML = '';

imagesArray.forEach((imgUrl, index) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    
    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = `回忆照片 ${index + 1}`;
    
    // 如果图片加载失败，自动隐藏该卡片（防止上传照片前页面显示红叉）
    img.onerror = () => {
        slide.style.display = 'none';
    };
    
    img.addEventListener('click', () => {
        openLightbox(imgUrl);
    });

    const caption = document.createElement('div');
    caption.className = 'caption';
    caption.innerText = `❤️ 精彩瞬间 (${index + 1}/${imagesArray.length})`;

    slide.appendChild(img);
    slide.appendChild(caption);
    carouselTrack.appendChild(slide);

    const dot = document.createElement('div');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    carouselDots.appendChild(dot);
});

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
// 5. 原图查看器 (Lightbox) 交互
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
// 6. 封面转场及音乐控制
// ==========================================
const welcomeScreen = document.getElementById('welcome-screen');
const cardScreen = document.getElementById('card-screen');
const openBtn = document.getElementById('open-btn');
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');

openBtn.addEventListener('click', () => {
    bgMusic.play().then(() => {
        musicBtn.classList.add('music-playing');
    }).catch(err => console.log("音乐播放:", err));

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
// 7. 彩带雨动画效果
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
