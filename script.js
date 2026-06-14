// 1. 获取网址后面的参数（例如获取 ?id=alex 中的 alex）
const urlParams = new URLSearchParams(window.location.search);
const friendId = urlParams.get('id'); // 这里拿到的就是 id 的值

// 2. 找到 HTML 页面中用来显示名字和祝福语的“坑位”
const nameElement = document.getElementById('friend-name');
const blessingElement = document.getElementById('blessing-text');

// 3. 编写识别逻辑
if (friendId) {
    // 如果网址里有 id 参数（比如 ?id=alex）
    nameElement.innerText = "你好, " + friendId + "！";
    blessingElement.innerText = "这是一条专门为您生成的测试祝福语。看到这行字说明你的专属二维码已经可以工作啦！";
} else {
    // 如果网址里什么参数都没有（比如直接打开主页）
    nameElement.innerText = "你好, 朋友！";
    blessingElement.innerText = "欢迎来到这个神秘空间，请扫描你的专属二维码进入哦。";
}
