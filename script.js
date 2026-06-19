// ==========================================
// 1. 31位朋友的完整名单数据库 (含3张测试照片与时间胶囊信件)
// ==========================================
const friendsData = {
    "eric": {
        name: "Eric",
        role: "Tom",
        letter: "好久不见。Eric，谢谢你一直以来对我的支持！\n在过去的时光里，我们一起经历了很多有趣的事情。希望这封卡片能带给你一点小惊喜，也祝你未来的路越走越宽广！",
        // 📷 默认放入 3 张高清测试照片，支持轮播滑动
        images: [
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop"
        ],
        // ⏳ 7月31号 晚上11点59分 才能打开的专属信
        capsuleLetter: "Eric，这是我写在时间胶囊里的一封密信。\n有些话平时不好意思当面说，但到了这一刻，真的非常感谢你！祝你万事顺遂！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "kelvin": {
        name: "Kelvin",
        role: "Tom",
        letter: "Kelvin，很高兴能在这里为你写下这段专属内容。希望我们未来的日子都充满阳光！",
        images: [
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop"
        ],
        capsuleLetter: "Kelvin，时间胶囊打开了。感谢你一路的陪伴，愿我们顶峰相见！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "gloria": {
        name: "Gloria",
        role: "Tom",
        letter: "写给 Gloria 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Gloria，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "abner": {
        name: "Abner",
        role: "Tom",
        letter: "写给 Abner 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Abner，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "emily": {
        name: "Emily",
        role: "Tom",
        letter: "写给 Emily 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Emily，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "henry": {
        name: "Henry",
        role: "Tom",
        letter: "写给 Henry 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Henry，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "joseph": {
        name: "Joseph",
        role: "Tom",
        letter: "写给 Joseph 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Joseph，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "changzhe": {
        name: "Chang Zhe",
        role: "Tom",
        letter: "写给 Chang Zhe 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Chang Zhe，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "zhechee": {
        name: "Zhe Chee",
        role: "Tom",
        letter: "写给 Zhe Chee 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Zhe Chee，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "kenxiong": {
        name: "Ken Xiong",
        role: "Tom",
        letter: "写给 Ken Xiong 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Ken Xiong，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "phoebe": {
        name: "Phoebe",
        role: "Tom",
        letter: "写给 Phoebe 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Phoebe，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "shinrou": {
        name: "ShinRou",
        role: "Tom",
        letter: "写给 ShinRou 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "ShinRou，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "yeexuan": {
        name: "Yee Xuan",
        role: "Tom",
        letter: "写给 Yee Xuan 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Yee Xuan，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "natalie": {
        name: "Natalie",
        role: "Tom",
        letter: "写给 Natalie 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Natalie，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "ziwei": {
        name: "Zi Wei",
        role: "Tom",
        letter: "写给 Zi Wei 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Zi Wei，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "adrian": {
        name: "Adrian",
        role: "Tom",
        letter: "写给 Adrian 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Adrian，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "yongjun": {
        name: "Yong Jun",
        role: "Tom",
        letter: "写给 Yong Jun 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Yong Jun，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "jiayao": {
        name: "Jia Yao",
        role: "Tom",
        letter: "写给 Jia Yao 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Jia Yao，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "ennis": {
        name: "Ennis",
        role: "Tom",
        letter: "写给 Ennis 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Ennis，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "shirley": {
        name: "Shirley",
        role: "Tom",
        letter: "写给 Shirley 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Shirley，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "yanyan": {
        name: "Yan Yan",
        role: "Tom",
        letter: "写给 Yan Yan 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Yan Yan，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "hueichien": {
        name: "Huei Chien",
        role: "Tom",
        letter: "写给 Huei Chien 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Huei Chien，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "justin": {
        name: "Justin",
        role: "Tom",
        letter: "写给 Justin 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Justin，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "dunxiang": {
        name: "Dun Xiang",
        role: "Tom",
        letter: "写给 Dun Xiang 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Dun Xiang，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "kelly": {
        name: "Kelly",
        role: "Tom",
        letter: "写给 Kelly 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Kelly，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "weien": {
        name: "Wei En",
        role: "Tom",
        letter: "写给 Wei En 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Wei En，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "lydia": {
        name: "Lydia",
        role: "Tom",
        letter: "写给 Lydia 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Lydia，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "kianqiang": {
        name: "Kian Qiang",
        role: "Tom",
        letter: "写给 Kian Qiang 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Kian Qiang，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "jingxi": {
        name: "Jing Xi",
        role: "Tom",
        letter: "写给 Jing Xi 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Jing Xi，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "angelina": {
        name: "Angelina",
        role: "Tom",
        letter: "写给 Angelina 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Angelina，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "junping": {
        name: "Jun Ping",
        role: "Tom",
        letter: "写给 Jun Ping 的信件内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Jun Ping，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    }
};

// 默认首页面数据
const defaultData = {
    name: "CCMC 伙伴",
    role: "Tom",
    letter: "非常感谢你一直以来对 CCMC 的支持与付出！这里凝聚了大家共同的回忆与汗水。\n虽然这里可能没有展示针对您个人的专属信件，但我们同样珍视与你共处的每一天。祝你前路顺遂，一切皆好！",
    images: [
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop"
    ],
    capsuleLetter: "时间胶囊已解锁！感谢 CCMC 大家庭中每一个努力闪光的你，愿你未来一帆风顺！",
    blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
};

// ==========================================
// 2. 解析网址参数 ?id=... (高兼容度版)
// ==========================================
const urlParams = new URLSearchParams(window.location.search);
const friendId = urlParams.get('id') ? urlParams.get('id').toLowerCase() : null;

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

// 设置悄悄话提交表单成功后的重定向网页链接，以便发送成功后返回
document.getElementById('redirect-url').value = window.location.href + (window.location.search ? '&sent=true' : '?sent=true');

// ==========================================
// 3. 检测是否成功提交了悄悄话留言
// ==========================================
if (urlParams.get('sent') === 'true') {
    alert("留言发送成功！Tom 会在邮箱里收到你的悄悄话 🤫");
    // 清除网址后缀中的 &sent=true 标识，防止用户手动刷新页面时重复弹窗
    const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search.replace(/[?&]sent=true/, '');
    window.history.replaceState({ path: cleanUrl }, '', cleanUrl);
}

// ==========================================
// 4. 动态渲染自适应照片滑轨 (3张测试照片)
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
// 6. 封面转场、返回封面及音乐控制逻辑
// ==========================================
const welcomeScreen = document.getElementById('welcome-screen');
const cardScreen = document.getElementById('card-screen');
const openBtn = document.getElementById('open-btn');
const backBtn = document.getElementById('back-btn');
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');

// A. 点击“开启惊喜”
openBtn.addEventListener('click', () => {
    bgMusic.play().then(() => {
        musicBtn.classList.add('music-playing');
    }).catch(err => console.log("音频播放受到限制:", err));

    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
        welcomeScreen.classList.add('hide');
        
        cardScreen.classList.remove('hide');
        setTimeout(() => {
            cardScreen.classList.add('show');
        }, 50);

        // 呈现音乐按键和左上角的返回按钮
        musicBtn.classList.remove('hide');
        musicBtn.classList.add('show');
        backBtn.classList.remove('hide');
        backBtn.classList.add('show');
    }, 600);

    startConfetti();
});

// B. 新增：点击左上角“返回封面”按钮
backBtn.addEventListener('click', () => {
    // 隐藏返回键、音乐控制按钮和卡片
    backBtn.classList.add('hide');
    musicBtn.classList.add('hide');
    cardScreen.style.opacity = '0';
    
    setTimeout(() => {
        cardScreen.classList.add('hide');
        cardScreen.classList.remove('show');
        cardScreen.style.opacity = ''; // 还原
        
        // 呈现并渐渐淡入封面页
        welcomeScreen.classList.remove('hide');
        setTimeout(() => {
            welcomeScreen.style.opacity = '1';
        }, 50);
    }, 600);
});

// C. 悬浮音乐按钮控制
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
// 7. ⏳ 时间胶囊逻辑（7月31号 晚上11点59分 开启）
// ==========================================
// 锁定时间：2026年7月31日 23时59分00秒
const targetDate = new Date("2026-07-31T23:59:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;
    const container = document.getElementById('capsule-container');
    if (!container) return;

    if (diff > 0) {
        // 如果还未到设定的解锁时间，显示锁闭状态与精确倒计时
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        container.innerHTML = `
            <div class="locked-capsule">
                <div class="lock-icon">🔒</div>
                <p class="capsule-status-text">时间胶囊锁闭中...</p>
                <div class="countdown-timer">${days}天 ${hours}时 ${minutes}分 ${seconds}秒</div>
                <p class="capsule-notice">将于 2026年7月31日 23:59 自动解锁</p>
            </div>
        `;
    } else {
        // 到了解锁时间，自动显示解开的钥匙和点击开启的按钮
        if (!container.classList.contains('unlocked-open')) {
            container.innerHTML = `
                <div class="unlocked-capsule">
                    <div class="lock-icon open-lock">🔓</div>
                    <p class="capsule-status-text">专属时间胶囊已解锁！</p>
                    <button id="open-capsule-btn" class="open-capsule-btn">开启时间胶囊</button>
                </div>
            `;
            
            const openCapsuleBtn = document.getElementById('open-capsule-btn');
            if (openCapsuleBtn) {
                openCapsuleBtn.addEventListener('click', () => {
                    container.classList.add('unlocked-open');
                    container.innerHTML = `
                        <div class="capsule-letter-paper">
                            <div class="capsule-paper-header">⏳ 开启于 2026-07-31 23:59</div>
                            <p class="capsule-letter-text">${currentFriend.capsuleLetter || "这是写给你的专属时间胶囊信件..."}</p>
                        </div>
                    `;
                });
            }
        }
    }
}
// 每一秒刷新一次倒计时
setInterval(updateCountdown, 1000);
updateCountdown();

// ==========================================
// 8. 彩带雨逻辑
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
