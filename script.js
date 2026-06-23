// ==========================================
// 1. 31位朋友的完整名单数据库 (首批 10 人手写信已录入)
// ==========================================
const friendsData = {
    "eric": {
        name: "Eric",
        role: "Tom",
        letter: "ermmm, 恭喜你得到我自制的小卡, 如果没有意外 我应该不会extend, and 你应该会在sembreak每天看到我, 除非你去找我Emily. But anyways, 记得多服侍 带Emily多去Church",
        capsuleLetter: "Eric，这是我写在时间胶囊里的一封密信。\n有些话平时不好意思当面说，但到了这一刻，真的非常感谢你！祝你万事顺遂！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "kelvin": {
        name: "Kelvin",
        role: "Tom",
        letter: "Ya, 算是我的Second Brother了\n几乎每天晚上我都会跑去你房间kacau你, 可能在别人眼中\n你是一个很随心很有责任心的人 but 在我这里\n你永远都是最cute的Kelvin, 之后跟kenxiong一起住了过后\n不要太迟睡料 不然我真的要白发送黑发了.\n这里永远是我们两个人的秘密,\n所以希望你可以早一天追到你心中的那个女孩子 ya U know I know~\n我要在你毕业之前看到你跟TA在一起 也给我吃一下你们的狗粮XD\n我毕业过后 记得要多想我 虽然我们才认识不到一年 but\n我会常回来看你们的, 不要跟教会的人吵架哈\n之后整个教会就属你跟Gloria最懂事了\n我会经常来找你吃八卦的啊哈哈哈哈哈哈",
        capsuleLetter: "Kelvin，时间胶囊打开了。感谢你一路的陪伴，愿我们顶峰相见！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "gloria": {
        name: "Gloria",
        role: "Tom",
        letter: "Haloo Gloriaaa, 不知道之后还有没有机会再这样叫妳名字了,\n虽然妳开玩笑说我是妳永远的老大,\n但我知道妳已经不是Sem1那个懵懂的Gloria了,\n很抱歉这个sem才开始熟起来 刚开始要熟就要毕业了,\n所以之后记得跟Junior们多聊聊天 因为妳也是Senior之一了啦现在,\n虽然妳很人畜无害 但我知道妳没有那么笨 很多东西妳也是知道的\n只是没有说出来而已, 既然没要说出来的话\n那就继续做很可爱的Gloriaaa!!! 我知道妳有时候很喜欢靠自己来\n也很冷静 但妳也有很多人可以跟妳负担的, 最后记得要多露牙笑\n真的很好看!!",
        capsuleLetter: "Gloria，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "abner": {
        name: "Abner",
        role: "Tom",
        letter: "Yo Broooo, 很喜欢跟你讲话欸, 因为你讲的东西真的很match到我,\n我知道你是一个很有责任心的ahboy but 在我这里\n你就是最需要照顾的Junior, 上个sem看到你很down 我有点担心\nbut这个sem看到你好好地开心起来 我就放心很多了,\n记得不要跟别人吵架哈 不要破坏你在我心中乖乖的Abner形象哈.\nWell 你还是很幼稚 but\n我我觉得就是这份幼稚才能让其他人一见到你就很开心的理由, and\ndon't forget 多祷告 你要的全部东西 只有上帝才能给你的. 所以ya\n记得多message我 我毕业了过后会很想你的!!",
        capsuleLetter: "Abner，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "emily": {
        name: "Emily",
        role: "Tom",
        letter: "AhMaTeLahSi 很random的一个人,\n不知道为什么就突然跟我弟弟在一起了,\n这样我们家就无端端有了两个很random的人了 我是很正经的\n只有你们两个很random而已nia, 我想我毕业了过后 妳也不会有rasa\n因为妳来我们家的时候 我们又会再见面了, 除非我弟弟出轨 I guess,\n不然我们一定会在很意想不到的地方meet到的, 记得多去教会哈\n就算assignment很多也要去教会 妳看Adrian都有来\n所以妳也要跟Eric一起来!!!",
        capsuleLetter: "Emily，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "henry": {
        name: "Henry",
        role: "Tom",
        letter: "Tadaa, 没想到欸 我也会写信给你,\n就当作我毕业之前想跟你说的最后几句话呗, 很喜欢弄你\n可是感觉你都没有被我作弄 反而是我被你作弄就有, haiyaa\n下次我也要弄回来!! 记得多去教会哈 我们都很想你 and\n有机会 你可以去尝试其他的发型 感觉会很帅!!!",
        capsuleLetter: "Henry，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "joseph": {
        name: "Joseph",
        role: "Tom",
        letter: "Hiii Joseph, 一想到之前被我当场抓到你去yab的样子\n我真的忘不掉你那个好像小孩做错事的样子 真的很cute,\n虽然我们距离很远 没有什么机会可以跟你一起吃到饭, but\n我感觉你是一个很看重朋友的人, 所以有机会\n我真的很想跟你一起吃个饭 不然我毕业都有遗憾了都...",
        capsuleLetter: "Joseph，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "changzhe": {
        name: "Chang Zhe",
        role: "Tom",
        letter: "Wasaiii 超级难看到你的, 所以知道了吧 要常来教会哈,\n我跟他们都超想你的, 只有你来了 我们才能多看帅哥xd.\n不知道你是不是在忙学业 but 记得再忙也要按时吃饭 多余的时间嘞\n不用想我 我没有那么自恋哈哈哈哈规则, 如果真的有多余的时间\n就拿去祷告吧 上帝比我们都想你的~",
        capsuleLetter: "Chang Zhe，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "zhechee": {
        name: "Zhe Chee",
        role: "Tom",
        letter: "Haa 这是一个message to Zhe Chee 思淇,\n我应该没有写错你的华语名字吧哈哈哈哈哈哈,\n妳是我第一个存两个语言在我电话的contact\n因为妳的英文和华语名字完全是不一样的念法, but\n我还是会prefer叫妳思淇 因为英文名字太难念了, 提到妳嘞\n我最有印象的还是妳的眼睛 真的超有神的我都做不到, and\n我毕业过后 教会就会少一个很吵的人了\n所以要轮到妳来负责做那个最E的人了哈 要加油!!!",
        capsuleLetter: "Zhe Chee，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "kenxiong": {
        name: "Ken Xiong",
        role: "Tom",
        letter: "看到我的message了吧!! 你没有来到教会之前\n我可能是那个很吵的人,但你来了过后 你就是那个最吵的人了,\n但有你在 真的很好, 整个教会的气氛都被你点燃了直接,\n我们毕业过后嘞 你再也烦不到Ennis了 but 你可以去烦Gloria的\n只要不喷口水在Gloria身上就好,\n不然我不敢想象她会怎样的reaction, 我算是很早就知道你了\nbut那个时候我没有理你那么多哈哈哈哈哈哈 但你现在有来教会\n我就开始跟你有些比较多话了. 所以趁我还没有毕业\n可以给你多烦我 的不然我会渐渐的忘记你~ 因为你没有跟我吃饭~",
        capsuleLetter: "Ken Xiong，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "phoebe": {
        name: "Phoebe",
        role: "Tom",
        letter: "你好 Phoebe~ 很开心你能已经也是Senior之一了, 我印象中妳一直都是睡不醒的样子 but妳很容易说on的 我严重怀疑妳是一个P人, btw 妳是弹Piano很厉害的人!! 很凶的时候真的很凶 不凶的时候就真的没有表情的, 最有印象就是妳训yeenan的时候 真的帅爆了! 还有一个我超佩服的就是妳自拍真的是360无死角的 都找不到丑照了, but anyways 教会之后就剩下你们几个了 记得carry好kenxiong和Gloria 不要打架了!!",
        capsuleLetter: "Phoebe，时间胶囊已解锁！感谢一路陪伴，祝前途似锦！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "shinrou": {
        name: "ShinRou",
        role: "Tom",
        letter: "MoshiMoshi, 终于轮到妳做Senior了哈哈哈哈哈哈 but妳依然是CCMC的团宠 所以要好好珍惜她们的爱 然后也要好好爱junior们, 哇 还有妳的发型真的是千变万化 而且真的都很好看 不知道妳是怎么样绑的 有机会的话我要看妳是怎么样绑的哈哈哈哈哈哈, 之后再也更难一起晚上出来聊天了 因为我毕业了 你们就要拨别人来代替我了 so sad. But 没关系你们要开开心心就好 记得继续做CCMC的开心果 有地方的地方双商会直接变得很好 所以不要管别人说妳什么哦 自己开心最重要!!!",
        capsuleLetter: "ShinRou，时间胶囊已解锁！感谢一路陪伴，祝前途似锦！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "yeexuan": {
        name: "Yee Xuan",
        role: "Tom",
        letter: "Haizz 我毕业过后 妳应该是最开心的那个人了, 因为没有人再怼妳了,\n想当初一开始看到妳 妳就充满尖酸刻薄的咆哮个人, but\n我觉得妳是故意选择性的 妳没有针对哪些女生 or\n可能妳只对我最暴力, haizz 没事\n我相信之后还会有人继承我的position 继续跟妳怼的, What can I say,\n慈善cc下班啦 然后继续做kkke的牛马哈哈哈哈哈哈 记得少惹人\n多点peace 明明是一个刀子嘴豆腐心的人 但嘴巴就是超毒的~",
        capsuleLetter: "Yee Xuan，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "natalie": {
        name: "Natalie",
        role: "Tom",
        letter: "安呀, 比我还小一届的Natalie, 在教会真的超安静的 但网聊的时候就很多话, 看来我们很适合做网友哈哈哈哈 所以有什么我会随时reply 妳story的 因为妳的story都挺好看的, 不愧是我一开始就认定的旅游博主, 之后去环游世界的时候 记得po多一点story 如果妳再好心 可以给我说明后台xd 妳剩下个sem过后 记得要多讲话 不要再diamdiam了 妳也是个Senior了 记得多爱妳的Junior们 although 我知道妳讨厌弟弟哈哈哈哈哈哈",
        capsuleLetter: "Natalie，时间胶囊已解锁！感谢一路陪伴，祝前途似锦！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "ziwei": {
        name: "Zi Wei",
        role: "Tom",
        letter: "Yoo Zi Weiii, 我们两个真的是超级无厘头 不不知道为什么一个眼神 妳都能get到我的意思, 而且我们都是超感性的人 所以不要去管别人讲什么哦 妳自己的感受是最重要的, and 妳唱歌真的很舒服如果具有妳带的崇拜 我都会很期待那一天的到来 but 很可惜 已经没人装有听到妳唱歌了 有机会真的会很想听妳唱歌 真的超级best!! 这几个星期 我就要毕业了啦 不知道还能不能跟妳眼神多match几次 所以记得要跟教会的人要好好的哦, 我知道妳可能没那么喜欢人 但妳要记得教会是上帝的殿 所以不要忘记祷告哦~",
        capsuleLetter: "Zi Wei，时间胶囊已解锁！感谢一路陪伴，祝前途似锦！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "adrian": {
        name: "Adrian",
        role: "Tom",
        letter: "少爷好!! 虽然你没有花过钱在我身上 但我依然觉得你是少爷!! 很可惜到毕业了 还没有跟你熟起来 如果给我再来一次 我一定要先认识你 因为你真的超幼稚的, 每次看到你在做assignment 都觉得你很辛苦, but 后来看到你很努力 觉得你更辛苦了 哈哈哈哈哈哈哈哈, 我就觉得你更虚了 告诉我你会不会哭 but 我很肯定 你是哭到最惨的那个 (bushi)",
        capsuleLetter: "Adrian，时间胶囊已解锁！感谢一路陪伴，祝前途似锦！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "yongjun": {
        name: "Yong Jun",
        role: "Tom",
        letter: "Hallooo YongJun, 你看起来真的很年轻 我经常一度认为你是Junior 结果你也是跟我们一起毕业了哈哈哈哈哈哈哈哈, 虽然脸很嫩 but 你真的是一个big brother 还要麻烦你做教会的人事物理 真的辛苦了!!! 之后不知道还有没有机会再见面 我去sarawak的时候 一定会去找你玩的 不不然你去西马也可以 我也能带你走哈哈哈哈轮, 很可惜那么迟才熟起来 毕业过后记得要多联系哦!!",
        capsuleLetter: "Yong Jun，时间胶囊已解锁！感谢一路陪伴，祝前途似锦！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "jiayao": {
        name: "Jia Yao",
        role: "Tom",
        letter: "もしもし 你真的是一个超随心随性的人, 很多东西都是 okkk, 跟你们真的是超级放心的, but 讲话的太少了 啦 没什么得到跟你聊到天 可能还没找到我们共同的话题 有机会真的会很想跟你多讲话, 我很想念你之前烫过的头发 真的很好看 不知道为什么现在没有了 but 我感觉你带眼镜会很有feel 你可以trytry看. 我们来不及熟了啦 那就祝你intern顺利 然后找到男朋友 记得要po出来 我很想吃你撒 of 狗粮的!!!",
        capsuleLetter: "Jia Yao，时间胶囊已解锁！感谢一路陪伴，祝前途似锦！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "ennis": {
        name: "Ennis",
        role: "Tom",
        letter: "Nis姐不愧是Nis姐, 毕业了还是一样看到CCMC嘴最硬的人, 很paiseh 之前一直放妳的飞机, 之后肯定不会了!! Redang trip 一定要成 不不然很难再看到你们了, 不敢想象毕业过后 妳会多爱飞来飞去, but 照顾好自己就好了啦 妳可是Nis姐 是不会让别人担心的, 哪里懂下次在机场会和妳偶遇呢 哈哈哈哈哈哈 很可惜毕业了还不够认识妳 以后我会继续reply妳的story 不然妳应该会忘记我了... but anyways Intern 快乐哈哈哈哈哈哈 世界上那么大 一定有妳的容身之处的!!",
        capsuleLetter: "Ennis，时间胶囊已解锁！感谢一路陪伴，祝前途似锦！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "shirley": {
        name: "Shirley",
        role: "Tom",
        letter: "哇!! 真的超喜欢和妳呆在一起的 真的很舒服!! But 感觉妳有很多心事在心里, 我也没敢问妳 所以等妳之后想说的时候就跟妳最信任的人说哦 我相信妳的信靠人会愿意聆听妳讲话的!! 回想之前我们还是第一次参加as的camp 的一Gang 但现在我们到我们毕业了 时间真的过的挺快的, 之后没有assignment了 记得多找我们聊天, 等哪天我reply妳story的时候 就是证明我们已经很久没有聊天了哈哈哈哈哈哈, but anyways 记得多照顾好自己 祝intern快乐!!",
        capsuleLetter: "Shirley，时间胶囊已解锁！感谢一路陪伴，祝前途似锦！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "yanyan": {
        name: "Yan Yan",
        role: "Tom",
        letter: "Yoo 竟然是YanYan欸, 要毕业了哈 CCMC又在失去一个领唱了 妳要ShinRou怎么活啊哈哈哈哈 都没有什么跟妳聊到天 but 我感觉妳真的是超好的一个人, 很喜欢作弄妳 因为妳真的很kawaii的说 应该是 妳跟ShinRou太多了哈哈轮, 以后不要在用鄙视的眼神看着了 我真的会takut啊哈哈哈哈 记得多po story欸 不然都不知道妳过得好不好了 so 毕业过后要好好的哦 想念我们的话就回来CCMC找ShinRou就好 因为我在penang intern 所以应该很难再见到了...",
        capsuleLetter: "Yan Yan，时间胶囊已解锁！感谢一路陪伴，祝前途似锦！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "hueichien": {
        name: "Huei Chien",
        role: "Tom",
        letter: "Hiiiii 真的是超搭的HueiChien, 妳真的超懂的欸!! 很喜欢跟妳讲话 真的会很开心, 知道妳一直都在忙解释 但是一直做自己很热爱的东西真的很酷!!! 我毕业过后会很想念妳们的 少一个可以聊天和打闹的人 我真的会heartbreak的, but anyways 如果妳们有想我的话 可以跟我讲 我在penang而已 可以随时飞下来找你们玩的!!! 所以before 我毕业之前 记得多找我出门 我我会提供满满价值的!!!",
        capsuleLetter: "Huei Chien，时间胶囊已解锁！感谢一路陪伴，祝前途似锦！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "justin": {
        name: "Justin",
        role: "Tom",
        letter: "Hi Justin, 从你sem 1看到你现在 真的感概时间过得真的很快, 从我们做小组长 轮到你做小组长了, 记得要多多祷告 不要忘记上帝的教导, 我知道你有时候很奇怪 但只要是跟着圣经里面的lesson 什么都好, 我们毕业 就会轮到你做senior了啦 所以要照顾好自己 然后考试加油!!!",
        capsuleLetter: "Justin，时间胶囊已解锁！感谢一路陪伴，祝前途似锦！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "dunxiang": {
        name: "Dun Xiang",
        role: "Tom",
        letter: "Yeahhh 妳弹piano的时候超帅的 but 我更喜欢听妳唱歌,\n你真的超温和的，而且你是一个很喜欢记录生活的人\n超喜欢看你的vlog 的因为感觉我也能体会到你的每一天了，\n很快你也要做senior了啦，所以记得多教Junior弹piano哦\n这样你就能更专业在合唱歌上面了!! 如果想我们了话\n就like我们的story吧 我们也能知道你想我们了xd哈哈哈哈",
        capsuleLetter: "Dun Xiang，时间胶囊已解锁！感谢一路陪伴，祝前途似锦！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "kelly": {
        name: "Kelly",
        role: "Tom",
        letter: "Hi Kelly, 真的是一个很i的人, 连我那么E的人都不敢找妳讲话,\n真的要听Gloria哈哈哈哈, 毕业过后记得要好好的哦\n要多去祷告哈的, 然后如果还记得我\n可以时时like我的story的真的 哈哈哈哈哈哈哈哈,\n那就先祝妳前途似锦 多想我们哈哈哈哈哈哈哈",
        capsuleLetter: "Kelly，时间胶囊已解锁！感谢一路陪伴，祝前途似锦！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "weien": {
        name: "Wei En",
        role: "Tom",
        letter: "Hii Anak B40(I think T20 is more suitable for u), 很paiseh\n之前偷窥你们, 想想都觉得很幼稚, 希望你们不要放在心上,\n一直都觉得你真的是全能的, 感觉你什么都会\n而且都是很pro的存在 拉小提琴 滑轮\n没有想到一个东西是你不会的, but\n你的头发真的是一个很神奇的存在,\n你已经差不多是教会头发最长的人了, but\n我很喜欢你留的那个发型 真的超帅的,\n毕业之前允许我再摸多次你的头发哈哈哈哈哈哈\n这样你就不会忘记我了xd",
        capsuleLetter: "Wei En，时间胶囊已解锁！感谢一路陪伴，祝前途似锦！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "lydia": {
        name: "Lydia",
        role: "Tom",
        letter: "Hii Lydia, 一开始听到这个名字 我真的认为是一个junior\n可是妳竟然是我那一毕业的同一batch人,\n连我那么E的人都不敢找妳讲话 看来妳真的很i我觉得哈哈哈哈,\n记得要多赖赖我 真的很随和的欸 but\n我只有在uum才能看到你们paktor而已 story完全没有你们的痕迹的说,\nbut anyways 毕业快乐哈!!",
        capsuleLetter: "Lydia，时间胶囊已解锁！感谢一路陪伴，祝前途似锦！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "kianqiang": {
        name: "Kian Qiang",
        role: "Tom",
        letter: "Hi KianQiang, 真的很久没有看到你了欸, but\n我在学校的每个角落看到你, 看到你过得好 我就很放心了哦,\n记得要多联系我哈 你应该在我的ig了 到时候多like我的story\n我就知道你还有在记得我了哈",
        capsuleLetter: "Kian Qiang，时间胶囊已解锁！感谢一路陪伴，祝前途似锦！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "jingxi": {
        name: "Jing Xi",
        role: "Tom",
        letter: "Hola, 妳真的Senior中的Senior了,\n连我这个Senior都要叫妳姐姐 看来妳真的给教会很多哈哈哈哈,\n妳真的很slow 不管是说话还是速度都好, 我真的超想给妳画fast\nforward哈哈哈哈 恭喜妳熬了那么久终于毕业了, intern的时候\n要专心intern 不要再摸鱼了, 我期待妳成为official lawyer的那天,\n到时候就可以请你来跟kenxiong辩论了哈哈哈哈\n那就祝妳毕业快乐 前程似锦啦!!",
        capsuleLetter: "Jing Xi，时间胶囊已解锁！感谢一路陪伴，祝前途似锦！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "angelina": {
        name: "Angelina",
        role: "Tom",
        letter: "是Angelina欸, 妳跟妳boyfriend 真的跑的超甜的cp!!!\n要多po他们两个的story 真的超好看的!!\n一开始还paiseh找妳问Sabah的东西 到后来再也没跟你认认真真聊了\n真的极不对起! but 我印象最深刻的还是妳的微笑\n简直是CCMC最positive的人 毕业快乐!!",
        capsuleLetter: "Angelina，时间胶囊已解锁！感谢一路陪伴，祝前途似锦！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "junping": {
        name: "Jun Ping",
        role: "Tom",
        letter: "Damn random my boy~ 明明用点心 整个发型都超帅的\n奈何你很懒惰 哈哈哈哈哈哈哈哈, but 也好\n你现在的发型真的挺可爱的, 能认识你真的很开心 跟你很熟\n但认识过后 简直不像是junping了哈哈哈哈哈哈,\n以后记得多like我story 不然你真的diamdiam到消失去了",
        capsuleLetter: "Jun Ping，时间胶囊已解锁！感谢一路陪伴，祝前途似锦！",
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

// 设置悄悄话提交表单成功后的重定向网页链接
document.getElementById('redirect-url').value = window.location.href + (window.location.search ? '&sent=true' : '?sent=true');

// ==========================================
// 3. 检测是否成功提交了悄悄话留言
// ==========================================
if (urlParams.get('sent') === 'true') {
    alert("留言发送成功！Tom 已经能在他的专属 Google 表格里看到你的留言啦 🤫");
    const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search.replace(/[?&]sent=true/, '');
    window.history.replaceState({ path: cleanUrl }, '', cleanUrl);
}

// ==========================================
// 4. 拦截留言提交 -> 异步上传至你的专属 Google 表格数据库 (无刷新)
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
// 5. 封面转场、返回封面及音乐控制逻辑
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
// 6. ⏳ 时间胶囊逻辑（7月31号 晚上11点59分 开启）
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
// 7. 彩带雨逻辑
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
