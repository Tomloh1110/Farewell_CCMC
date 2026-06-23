// ==========================================
// 1. 31位朋友的完整名单数据库（全部手写真情信件均已录入）
// ==========================================
const friendsData = {
    "eric": {
        name: "Eric",
        role: "Tom",
        letter: "ermmm, 恭喜你得到我自制的小卡, 如果没有意外 我应该不会extend, and 你应该会在sembreak每天看到我, 除非你去找我Emily. But anyways, 记得多服侍 带Emily多去Church",
        capsuleLetter: "Eric，写给你的时间胶囊：其实一转眼我们就在一起服侍这么久了，虽然我要毕业了，但别忘了在小组和教会中继续发光发热！带好 Emily 噢！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "kelvin": {
        name: "Kelvin",
        role: "Tom",
        letter: "Ya, 算是我的Second Brother了\n几乎每天晚上我都会跑去你房间kacau你, 可能在别人眼中\n你是一个很随心很有责任心的人 but 在我这里\n你永远都是最cute的Kelvin, 之后跟kenxiong一起住了过后\n不要太迟睡料 不然我真的要白发送黑发了.\n这里永远是我们两个人的秘密,\n所以希望你可以早一天追到你心中的那个女孩子 ya U know I know~\n我要在你毕业之前看到你跟TA在一起 也给我吃一下你们的狗粮XD\n我毕业过后 记得要多想我 虽然我们才认识不到一年 but\n我会常回来看你们的, 不要跟教会的人吵架哈\n之后整个教会就属你跟Gloria最懂事了\n我会经常来找你吃八卦的啊哈哈哈哈哈哈",
        capsuleLetter: "Kelvin，写给你的时间胶囊：二哥！胶囊开启的时候我已经毕业啦，希望你这时候已经顺利脱单过着甜蜜生活啦，平时和大家少吵架，等我随时回来找你唠嗑吃瓜！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "gloria": {
        name: "Gloria",
        role: "Tom",
        letter: "Haloo Gloriaaa, 不知道之后还有没有机会再这样叫妳名字了,\n虽然妳开玩笑说我是妳永远的老大,\n但我知道妳已经不是Sem1那个懵懂的Gloria了,\n很抱歉这个sem才开始熟起来 刚开始要熟就要毕业了,\n所以之后记得跟Junior们多聊聊天 因为妳也是Senior之一了啦现在,\n虽然妳很人畜无害 但我知道妳没有那么笨 很多东西妳也是知道的\n只是没有说出来而已, 既然没要说出来的话\n那就继续做很可爱的Gloriaaa!!! 我知道妳有时候很喜欢靠自己来\n也很冷静 但妳也有很多人可以跟妳负担的, 最后记得要多露牙笑\n真的很好看!!",
        capsuleLetter: "Gloria，写给你的时间胶囊：老大在此！毕业快乐！不要老是把所有压力和心事自己憋着，多依靠大家，记得一定要多露齿笑，真的非常治愈！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "abner": {
        name: "Abner",
        role: "Tom",
        letter: "Yo Broooo, 很喜欢跟你讲话欸, 因为你讲的东西真的很match到我,\n我知道你是一个很有责任心的ahboy but 在我这里\n你就是最需要照顾的Junior, 上个sem看到你很down 我有点担心\nbut这个sem看到你好好地开心起来 我就放心很多了,\n记得不要跟别人吵架哈 不要破坏你在我心中乖乖的Abner形象哈.\nWell 你还是很幼稚 but\n我我觉得就是这份幼稚才能让其他人一见到你就很开心的理由, and\ndon't forget 多祷告 你要的全部东西 只有上帝才能给你的. 所以ya\n记得多message我 我毕业了过后会很想你的!!",
        capsuleLetter: "Abner，写给你的时间胶囊：幼稚又超级可爱的 Abner！希望你在新学期依然保持这份能带给大家欢乐的超能力，遇到挑战随时多祷告，上帝必指引你！想我了随时发消息！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "emily": {
        name: "Emily",
        role: "Tom",
        letter: "AhMaTeLahSi 很random的一个人,\n不知道为什么就突然跟我弟弟在一起了,\n这样我们家就无端端有了两个很random的人了 我是很正经的\n只有你们两个很random而已nia, 我想我毕业了过后 妳也不会有rasa\n因为妳来我们家的时候 我们又会再见面了, 除非我弟弟出轨 I guess,\n不然我们一定会在很意想不到的地方meet到的, 记得多去教会哈\n就算assignment很多也要去教会 妳看Adrian都有来\n所以妳也要跟Eric一起来!!!"
        capsuleLetter: "Emily，写给你的时间胶囊：哈哈哈哈我弟要是敢欺负你直接告诉我，我毕业了我们依然经常能见。记住再忙也要坚持去教会，Eric 也会陪你一起去！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "henry": {
        name: "Henry",
        role: "Tom",
        letter: "Tadaa, 没想到欸 我也会写信给你,\n就当作我毕业之前想跟你说的最后几句话呗, 很喜欢弄你\n可是感觉你都没有被我作弄 反而是我被你作弄就有, haiyaa\n下次我也要弄回来!! 记得多去教会哈 我们都很想你 and\n有机会 你可以去尝试其他的发型 感觉会很帅!!!",
        capsuleLetter: "Henry，写给你的时间胶囊：哼！每次想作弄你都被你反杀，太不甘心了！我毕业了你也要记得常去教会，顺便真的可以去换个帅气发型试一试！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "joseph": {
        name: "Joseph",
        role: "Tom",
        letter: "Hiii Joseph, 一想到之前被我当场抓到你去yab的样子\n我真的忘不掉你那个好像小孩做错事的样子 真的很cute,\n虽然我们距离很远 没有什么机会可以跟你一起吃到饭, but\n我感觉你是一个很看重朋友的人, 所以有机会\n我真的很想跟你一起吃个饭 不然我毕业都有遗憾了都...",
        capsuleLetter: "Joseph，写给你的时间胶囊：可爱惨了的做错事模样，现在想起来还在笑。以后哪怕离得再远，也务必找时间和我约个饭，我一直把你当很好的朋友！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "changzhe": {
        name: "Chang Zhe",
        role: "Tom",
        letter: "Wasaiii 超级难看到你的, 所以知道了吧 要常来教会哈,\n我跟他们都超想你的, 只有你来了 我们才能多看帅哥xd.\n不知道你是不是在忙学业 but 记得再忙也要按时吃饭 多余的时间嘞\n不用想我 我没有那么自恋哈哈哈哈规则, 如果真的有多余的时间\n就拿去祷告吧 上帝比我们都想你的~",
        capsuleLetter: "Chang Zhe，写给你的时间胶囊：大忙人！教会里的颜值担当，常来和我们聚聚啊。毕业后照顾好自己，按时吃饭，少自恋多祷告哈！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "zhechee": {
        name: "Zhe Chee",
        role: "Tom",
        letter: "Haa 这是一个message to Zhe Chee 思淇,\n我应该没有写错你的华语名字吧哈哈哈哈哈哈,\n妳是我第一个存两个语言在我电话的contact\n因为妳的英文和华语名字完全是不一样的念法, but\n我还是会prefer叫妳思淇 因为英文名字太难念了, 提到妳嘞\n我最有印象的还是妳的眼睛 真的超有神的我都做不到, and\n我毕业过后 教会就会少一个很吵的人了\n所以要轮到妳来负责做那个最E的人了哈 要加油!!!",
        capsuleLetter: "思淇，写给你的时间胶囊：我的大眼睛妹妹！我毕业走后，最吵最E的接力棒就交到你手里了，不要让我失望，把教会的气氛继续活跃起来！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "kenxiong": {
        name: "Ken Xiong",
        role: "Tom",
        letter: "看到我的message了吧!! 你没有来到教会之前\n我可能是那个很吵的人,但你来了过后 你就是那个最吵的人了,\n但有你在 真的很好, 整个教会的气氛都被你点燃了直接,\n我们毕业过后嘞 你再也烦不到Ennis了 but 你可以去烦Gloria的\n只要不喷口水在Gloria身上就好,\n不然我不敢想象她会怎样的reaction, 我算是很早就知道你了\nbut那个时候我没有理你那么多哈哈哈哈哈哈 但你现在有来教会\n我就开始跟你有些比较多话了. 所以趁我还没有毕业\n可以给多烦我 的不然我会渐渐的忘记你~ 因为你没有跟我吃饭~",
        capsuleLetter: "Ken Xiong，写给你的时间胶囊：你来了之后彻底抢走了我最吵的风头！不过你在真的很开心，我毕业了去烦 Gloria 吧但别招惹她生气哈，有空多聚，别断了联系！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "phoebe": {
        name: "Phoebe",
        role: "Tom",
        letter: "妳好 Phoebe~ 我很开心妳已经是Senior之一了,\n我印象中妳一直都是睡不醒的样子 but 妳很容易说on的\n我严重怀疑妳一定是个P人, btw 妳是Yee Xuan很厉害的人!!\n很凶的时候真的很凶 不凶的时候就真的没有表情的,\n最右印象就是妳讲yeenan的时候 哇真的帅爆了!\n还有一个我超佩服的就是妳 自拍真的是360度无死角的\n都找不到丑照了, but anyways 教会之后就剩下你们几个了\n记得carry好kenxiong和Gloria 不要打架!!",
        capsuleLetter: "Phoebe，写给你的时间胶囊：360度无死角的自拍女王！希望毕业后你上课别打瞌睡了，带好那几个皮孩，你是最棒的 Senior！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "shinrou": {
        name: "ShinRou",
        role: "Tom",
        letter: "MoshiMoshi, 终于轮到妳做Senior了哈哈哈哈哈哈哈 but\n妳依然还是CCMC的团宠 所以要好好珍惜她们的爱\n然后也要好好爱junior们, 哇 还有 妳的发型真的是千变万化\n而且真的都很好看 都不知道妳是怎样绑的\n有机会的话我要看妳是怎么绑的 妳哈哈哈哈哈哈,\n之后再也很难一起晚上出来聊天了 因为我毕业了\n你们就要找别人来代替我了 so sad. But 没关系你们要开开心心就好\n记得继续做CCMC的开心果 有躲在的地方氛围会直接变得很好\n所以不要管别人说妳什么哦 自己开心最重要!!!",
        capsuleLetter: "ShinRou，写给你的时间胶囊：永远的团宠！毕业后我就不能经常陪你深夜聊天啦。开心做自己，你的开朗能点亮任何人，加油！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "yeexuan": {
        name: "Yee Xuan",
        role: "Tom",
        letter: "Haizz 我毕业过后 妳应该是最开心的那个人了, 因为没有人再怒妳了,\n想当初一开始看到妳 妳就充满火药味的哈每个人, but\n我觉得妳是故意那样的 因为妳没有对哪些女生 or\n可能妳只是我最暴力, haizz 没事\n我相信之后还会有人继承我的position 继续跟随哈的. What can I say,\n恭喜cc下班啦 然后继续做kkkc的牛马哈哈哈哈哈哈哈 记得少惹人\n多点peace 明明是一个刀子嘴豆腐心的人 但嘴巴就是超毒的",
        capsuleLetter: "Yee Xuan，写给你的时间胶囊：毒舌女王！我走了终于没人怼你啦！少和别人起冲突，祝你的 KKKC 牛马生涯顺顺利利，其实我知道你心肠超软的！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "natalie": {
        name: "Natalie",
        role: "Tom",
        letter: "안녕, 比我还大小一届的Natalie, 在教会真的超安静的\n但网友的时候就很多话听, 看来我们很适合做网友哈哈哈哈哈哈哈\n所以有什么 我就会随时 reply 妳story的因为妳的story都超好看的,\n不愧是我一开始就认定的旅游博主, 之后去环游世界的时候 记得po\n多一点story 如果妳再开心 妳可以寄明信片xd 好啦 下个sem过后\n记得要多讲话 不要再diamdiam了 妳也是个Senior了\n记得多爱妳的Junior们 although 我知道妳讨厌弟弟哈哈哈哈哈哈",
        capsuleLetter: "Natalie，写给你的时间胶囊：我的最佳旅游博主网友！以后旅行一定要狂发 story 让我云旅游！在教会多说说话，要开始多照顾 junior 啦！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "ziwei": {
        name: "Zi Wei",
        role: "Tom",
        letter: "Yoo Zi Weiii, 我们两个真的是超级无厘头 不知道为什么一个眼神\n妳都能get到我的意思, 而且我们都是超感性的人\n所以不要去管别人讲什么哦 妳自己的感受是最重要的, and\n妳唱歌真的很好听歌 如果有妳带的崇拜 我都会很期待那一天的到来\nbut 很可惜 已经很久没有听到妳唱歌了\n有机会真的会很想再听妳唱歌 真的是很best!!! 这多个月星期\n我就要毕业了啦 不知道还能不能跟妳眼神多match几次\n所以记得要跟教会的人要好好的哦, 我知道妳可能没那么喜欢人\n但妳要记得教会是上帝的殿 所以不要忘记祷告哦~",
        capsuleLetter: "Zi Wei，写给你的时间胶囊：懂我的灵魂唱将！你的歌声真的很能安慰人。不要在意别人的眼光，上帝永远爱着你，坚持祷告，等我回来听你带崇拜！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "adrian": {
        name: "Adrian",
        role: "Tom",
        letter: "少爷好!! 虽然你没有花过钱在我身上 但我依然觉得你是少爷!!\n很可惜到毕业了 还没有跟你有过深刻的谈话 如果你有我再来一次\n我一定会主动找你 因为你的人真的很起码, 每次看到你在做assignment\n都觉得你很命苦, but 后来看到你很努力\n我就觉得你更命苦了哈哈哈哈哈哈哈哈,\n不知道你Farewell的时候会不会哭 but 我敢肯定\n你是哭到最惨的那个 (bushi)",
        capsuleLetter: "Adrian少爷，写给你的时间胶囊：哈哈哈哈！虽然很命苦但是你真的很拼。毕业大哭的时候记得拍下来给我看，继续加油，少爷！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "yongjun": {
        name: "Yong Jun",
        role: "Tom",
        letter: "Hallooo YongJun, 你看起来真的很年轻 我经常一度认为你是Junior\n结果你也是跟我们一起毕业了哈哈哈哈哈哈哈, 虽然脸很嫩 but\n你真的是一个big brother 还要麻烦你换教会的人事物\n真的是辛苦了!!! 之后不知道还有没有机会再见面\n我去sarawak的时候 一定会去找你玩的 不然你去马六甲也可以\n我也能带你走哈哈哈哈哈哈哈, 很可惜那么迟才要熟起来\n毕业过后记得要多多联系哦!!",
        capsuleLetter: "Yong Jun，写给你的时间胶囊：Big Brother！辛苦你挑起教会换届的重担。无论在马六甲还是东马，有空咱们随时约，毕业后多多联系！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "jiayao": {
        name: "Jia Yao",
        role: "Tom",
        letter: "もしもし 你真的是一个超随心随性的人, 很多东西都是okkk,\n跟你出门真的是超放心的, but 慢活真的太少了啦\n没有什么得到跟你聊到天 可能还没我有找到我们的共同话题\n有机会真的会很想跟你多讲话, 我很想念你之前烫过的头发\n真的很好看欸 不知道为什么现在没有了 but\n我感觉你带眼镜会有feel 你可以trytry看, 我们来不及熟了啦\n那就祝你intern顺利 然后找到男朋友 记得要po出来\n我很想吃你做的狗粮的!!!",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600"],
        capsuleLetter: "Jia Yao，写给你的时间胶囊：眼镜哥！祝你实习超级顺利，期待你早日脱单 po 狗粮闪瞎我们！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "ennis": {
        name: "Ennis",
        role: "Tom",
        letter: "Nis姐不愧是Nis姐, 毕业了还是一样看到CCMC最硬健的人, 很paiseh\n之前一直放妳的飞机, 之后肯定不会了!! Redang trip 一定要成\n不然我很难再看到你们了, 不敢想象毕业过后 妳会多爱飞来飞去, but\n照顾好自己就好了啦 妳可是Nis姐 是不会让别人担心的,\n哪里懂下次在机场会和妳遭遇 哇哈哈哈哈哈哈哈哈\n很可惜毕业了还不够认识妳 以后我会继续reply妳的story\n不然妳应该会忘记我了... but anyways Intern 快乐哈哈哈哈哈哈哈哈\n世界那么大 一定有妳的容身之处的!!",
        capsuleLetter: "Ennis，写给你的时间胶囊：Nis姐！放飞机的罪人向你致敬！热浪岛旅行一定要成功！世界这么大，凭你的硬朗绝对能创出一片天，加油！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "shirley": {
        name: "Shirley",
        role: "Tom",
        letter: "哇!! 真的超喜欢和妳呆在一起的 真的很舒服!! But\n感觉妳有很多心事在心里, 我也没敢问妳\n所以等妳之后想说的时候就跟妳最信任的人说哦\n我相信妳信任的人会很愿意听妳讲话的!!\n回想之前我们还是第一次参加as的camp的一Gang\n但在我轮到我们毕业了 时间真的过的挺快的,\n之后没有assignment了 记得多找我们聊天,\n等哪天我reply妳story的时候\n就是证明我们已经很久没有聊天了哈哈哈哈哈哈哈哈, but anyways\n记得多照顾好自己先 🙋 intern快乐!!",
        capsuleLetter: "Shirley，写给你的时间胶囊：和你呆在一起真的很温暖。别把太多压力藏在心里，空了多出来聚聚聊天，毕业后也要每天开心！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "yanyan": {
        name: "Yan Yan",
        role: "Tom",
        letter: "Yoo 竟然是YanYan欸, 要毕业了哈 CCMC又在失去一个领唱了\n妳跟ShinRou怎么评啊哈哈哈哈哈哈哈 没有什么跟妳聊到天 but\n我感觉妳真的是超好的一个人, 很喜欢作崇拜\n因为妳真的很kawaii的说 应该是参ShinRou太多了吧哈哈哈哈哈哈,\n以后不要在用鄙视的眼神看我了 我真的会takut啊哈哈哈哈哈\n记得多po story欸 不然都不知道妳得得好不好了 so\n毕业过后要好好的哦 想念我的就回来 也可以CCMC找ShinRou就好\n因为我在penang intern 所以应该很难再见到了...",
        capsuleLetter: "Yan Yan，写给你的时间胶囊：超可爱的 Yan Yan！别再用鄙视的眼神秒杀我啦（开玩笑）。祝你槟城实习顺利，以后要常常回来玩呀！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "hueichien": {
        name: "Huei Chien",
        role: "Tom",
        letter: "Hiiiii 真是的超搭的HueiChien, 妳真的超好的欸! 很喜欢跟妳讲话\n真的很开心, 知道妳一直都在忙辩论\n但是一直对自己很热爱的东西真的很佩服!!!\n我毕业过后会很想念你们的 少一个可以聊天和打闹的人\n我真的会很heartbreak的, but anyways 如果你们有想我的话\n可以跟我讲 我在penang而已 可以随时飞下来找你们玩的!!!\n所以before 我毕业之前 记得多找我出门 我我会提供情绪价值的!!!",
        capsuleLetter: "Huei Chien，写给你的时间胶囊：闪闪发光的辩手！我超佩服你的坚持。我就在槟城，你们随时来找我或者我飞回来找你们聚会打闹！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "justin": {
        name: "Justin",
        role: "Tom",
        letter: "Hi Justin, 从你sem 1看到你现在 真的感概时间过得真的很快,\n从我们做小组长 轮到你做小组长了, 记得要多多祷告\n不要忘记上帝的教导, 我知道你有时候很奇怪\n但只要是跟着圣经里的lesson 什么都好, 我们毕业\n就轮到你们做senior了哈 所以要照顾好自己 然后考试加油!!!",
        capsuleLetter: "Justin，写给你的时间胶囊：小组长接棒人！虽然你平时古灵精怪，但我对你百分百信任，带领好大家，多祷告依靠神，祝考试全 A！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "dunxiang": {
        name: "Dun Xiang",
        role: "Tom",
        letter: "Yeahhh 你弹piano的时候超帅的 but 我更喜欢听你唱歌,\n你真的超超人的, 而且你是一个很喜欢记录生活的人欸\n超喜欢看你的vlog的 因为感觉我也能体验到你的每一天了,\n很快你也要做senior了啦, 所以记得多教junior弹piano哦\n这样你就能更专业专心唱歌上了!! 如果想我们了的话\n就like我们的story吧 我们也能知道你想我们了xd哈哈哈哈哈哈",
        capsuleLetter: "Dun Xiang，写给你的时间胶囊：钢琴王子！你的 vlog 是我们大家的精神粮食，毕业后记得多产出。带好 junior，继续做那个温暖记录生活的男孩！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "kelly": {
        name: "Kelly",
        role: "Tom",
        letter: "Hi Kelly, 真的是一个很E的人, 连我那么E的人都不敢找妳讲话,\n妳真的很有责任哈哈哈哈哈哈, 毕业过后 记得要好好的哦\n要多多祷告教会的, 然后如果还记得我\n可以时不时like我的story的真的哈哈哈哈哈哈哈哈,\n那就先祝妳前途似锦 多想我们哈哈哈哈哈哈哈",
        capsuleLetter: "Kelly，写给你的时间胶囊：居然有比我更E的人！你的责任感超强。毕业后也要常和上帝沟通，多多想念我们，祝你前程似锦！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "weien": {
        name: "Wei En",
        role: "Tom",
        letter: "Hii Anak B40(I think T20 is more suitable for u), 很paiseh\n之前偷窥你们, 想想都觉得很幼稚, 希望你们不要放在心上,\n一直都觉得你真的是全能的, 感觉你什么都会做\n而且都是很pro的存在 拉拉克也是车滑轮\n没有想到一个东西是你会不会的, but\n你的头发真的是一个很神奇的存在,\n你已经差不多要教会头发最长的一男子了, but\n我很喜欢作你屁的那个发型 真的超帅的,\n毕业之前给我再摸多次你的微妙哈哈哈哈哈哈哈哈\n这样你才不会忘记我了xd",
        capsuleLetter: "Wei En，写给你的时间胶囊：全能王！长发及腰的男人，你真的很酷。毕业后我可就摸不到你那微妙的帅气头发了，千万别忘了我啊！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "lydia": {
        name: "Lydia",
        role: "Tom",
        letter: "Hii Lydia, 一开始听到这个名字 我真的以为是一个junior\n可是妳竟然是跟我一起毕业的同batch人,\n连我那么E的人都不敢找妳讲话 看来妳真的很I我觉得哈哈哈哈哈哈,\n记得要多敷衍我 真的我很随你们的敷 but\n我只有在uum才能看到你们paktor而已 story完全没有你们的痕迹的说,\nbut anyways 毕业快乐吧!!",
        capsuleLetter: "Lydia，写给你的时间胶囊：超 I 的同级战友！毕业了就不能经常看你们在 uum 暗戳戳秀恩爱啦，毕业快乐，未来生活美满！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "kianqiang": {
        name: "Kian Qiang",
        role: "Tom",
        letter: "Hi KianQiang, 真的很久没有看到你了欸, but\n我在有学校的各个角落看到你, 看到你过得很好 我就很放心了哦,\n记得要多联系我哈 你应该在我的ig ❓到时候多like我的story\n我就知道你还有在记得我了哦",
        capsuleLetter: "Kian Qiang，写给你的时间胶囊：兄弟！虽然不经常能坐下来长聊，但我始终关注着你，毕业后在社媒上要常互动，祝前程似锦！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "jingxi": {
        name: "Jing Xi",
        role: "Tom",
        letter: "Hola, 妳真的是Senior中的Senior了,\n连我这个Senior都要叫妳Senior的程度了哈哈哈哈哈哈哈哈,\n妳真的很slow 不管是吃饭还是说话都好, 我真的很想给妳开fast\nforward哈哈哈哈哈哈 恭喜熬了那么久 终于毕业了, intern的时候\n要专心intern 不要再摸鱼了, 我期待妳成为official lawyer的那天,\n到时候就可以请妳来跟kenxiong辩论了哈哈哈哈哈哈\n那就祝妳毕业快乐 前程似锦啦!!",
        capsuleLetter: "Jing Xi，写给你的时间胶囊：大 Senior！祝你顺利迈向专业律师之路，改天回来和最吵的 Ken Xiong 来一场世纪公堂辩论！毕业快乐！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "angelina": {
        name: "Angelina",
        role: "Tom",
        letter: "是Angelina欸, 妳跟妳boyfriend真的是我最超磕的cp!!!\n要多po你们两个的story 真的超好看的!!\n一开始还很paiseh找妳问Sabah的东西 后面后来再没有跟你认识了\n真的很不对不起!! but 我印象最深刻的还是妳的微笑拼\n简直是CCMC最positive的人 毕业快乐!!",
        capsuleLetter: "Angelina，写给你的时间胶囊：CCMC 阳光代表！多发甜蜜日常，每次看到你的笑容就被治愈，祝福你和男友长长久久，毕业快乐！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "junping": {
        name: "Jun Ping",
        role: "Tom",
        letter: "Damn random my boy~\n明明用点心那个发型都超帅了 奈何你懒懒惰惰哈哈哈哈哈哈哈哈, but 也好\n你现在的发型真的是超可爱的, 能认识到你真的很开心欸 妳很I\n但认识过后看自E到不是junping了哈哈哈哈哈哈,\n以后记得多like我story 不然你真的是diamdiam要到消失去了",
        capsuleLetter: "Jun Ping，写给你的时间胶囊：极度 Random 但超帅的你！毕业了也别在社媒上当隐形人，多互动多支持。祝未来一帆风顺！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    }
};

// 默认首页面数据
const defaultData = {
    name: "CCMC 伙伴",
    role: "Tom",
    letter: "非常感谢你一直以来对 CCMC 的支持与付出！这里凝聚了大家共同的回忆与汗水。\n虽然这里可能没有展示针对您个人的专属信件，但我们同样珍视与你共处的每一天。祝你前路顺遂，一切皆好！",
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

// ==========================================
// 3. 拦截留言提交 -> 异步上传至你的专属 Google 表格数据库 (无刷新) [1.1.2]
// ==========================================
const hiddenFriendName = document.getElementById('hidden-friend-name');
if (hiddenFriendName) {
    hiddenFriendName.value = currentFriend.name;
}

const messageForm = document.querySelector('.message-form');
if (messageForm) {
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        const submitBtn = messageForm.querySelector('.submit-msg-btn');
        submitBtn.innerText = "正在投递匿名邮件中...";
        submitBtn.disabled = true;

        const formData = new FormData(messageForm);
        
        fetch(messageForm.action, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' 
        })
        .then(() => {
            alert("匿名留言成功！Tom 已经能在他的专属 Google 表格里看到你的留言啦 🤫");
            messageForm.reset(); 
            submitBtn.innerText = "发送匿名邮件";
            submitBtn.disabled = false;
        })
        .catch(err => {
            console.error("提交至数据库失败:", err);
            alert("由于网络原因发送失败，请稍后再试。");
            submitBtn.innerText = "发送匿名邮件";
            submitBtn.disabled = false;
        });
    });
}

// ==========================================
// 4. 封面转场、返回封面及音乐控制逻辑
// ==========================================
const welcomeScreen = document.getElementById('welcome-screen');
const cardScreen = document.getElementById('card-screen');
const openBtn = document.getElementById('open-btn');
const backBtn = document.getElementById('back-btn');
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');

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

        musicBtn.classList.remove('hide');
        musicBtn.classList.add('show');
        backBtn.classList.remove('hide');
        backBtn.classList.add('show');
    }, 600);

    startConfetti();
});

backBtn.addEventListener('click', () => {
    backBtn.classList.add('hide');
    musicBtn.classList.add('hide');
    cardScreen.style.opacity = '0';
    
    setTimeout(() => {
        cardScreen.classList.add('hide');
        cardScreen.classList.remove('show');
        cardScreen.style.opacity = ''; 
        
        welcomeScreen.classList.remove('hide');
        setTimeout(() => {
            welcomeScreen.style.opacity = '1';
        }, 50);
    }, 600);
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
// 5. ⏳ 时间胶囊逻辑（7月31号 晚上11点59分 开启）
// ==========================================
const targetDate = new Date("2026-07-31T23:59:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;
    const container = document.getElementById('capsule-container');
    if (!container) return;

    if (diff > 0) {
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
setInterval(updateCountdown, 1000);
updateCountdown();

// ==========================================
// 6. 彩带雨逻辑
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
