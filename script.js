// ==========================================
// 1. 你的“简易数据库” (可以随意添加或修改这里的数据)
// ==========================================
const friendsData = {
    "test1": {
        name: "测试小明",
        role: "CCMC 设计组",
        message: "小明，谢谢你这段时间为 CCMC 贡献的无数精美设计！祝你未来的旅程如同你的画笔一样，画出最绚丽多彩的风景。有缘我们江湖再见！",
        // 使用网络公共图片占位，保证测试时能显示图片
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop"
    },
    "test2": {
        name: "测试红红",
        role: "CCMC 策划组",
        message: "红红，每次活动策划有你在都让人无比安心！感谢你的付出与支持。祝你未来的日子里事事顺利，每天都充满阳光和好心情！",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop"
    }
};

// ==========================================
// 2. 兜底数据 (当网址不带 id，或者 id 拼写错误时展示的内容)
// ==========================================
const defaultData = {
    name: "亲爱的 CCMC 伙伴",
    role: "CCMC 大家庭",
    message: "感谢你一直以来对 CCMC 的支持与默默付出。虽然这里可能没有你的专属信息，但我们同样由衷地祝福你，愿你未来道路平坦，前途似锦，常回家看看！",
    // 默认展示一张好看的聚会合照或风景
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop"
};

// ==========================================
// 3. 页面渲染逻辑
// ==========================================

// 获取网址参数里的 id
const urlParams = new URLSearchParams(window.location.search);
const friendId = urlParams.get('id');

// 获取页面中的 HTML 节点
const nameElement = document.getElementById('friend-name');
const roleElement = document.getElementById('friend-role');
const blessingElement = document.getElementById('blessing-text');
const imgElement = document.getElementById('friend-img');

// 判断并更新网页内容
if (friendId && friendsData[friendId]) {
    // 1. 查无此人：如果网址里的 ID 在我们的名单里
    const currentFriend = friendsData[friendId];
    nameElement.innerText = currentFriend.name;
    roleElement.innerText = currentFriend.role;
    blessingElement.innerText = currentFriend.message;
    imgElement.src = currentFriend.image;
} else {
    // 2. 查无此人 / 普通访问：展示默认页面
    nameElement.innerText = defaultData.name;
    roleElement.innerText = defaultData.role;
    blessingElement.innerText = defaultData.message;
    imgElement.src = defaultData.image;
}

