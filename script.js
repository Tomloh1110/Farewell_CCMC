// ==========================================
// 1. 31位朋友的完整名单数据库 (首批 10 人手写信已完美导入)
// ==========================================
const friendsData = {
    "eric": {
        name: "Eric",
        role: "Tom",
        letter: "ermmm, 恭喜你得到我自制的小卡, 如果没有意外 我应该不会extend, and 你应该会在sembreak每天看到我, 除非你去找我Emily. But anyways, 记得多服侍 带Emily多去Church",
        images: [
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop"
        ],
        capsuleLetter: "Eric，这是我写在时间胶囊里的一封密信。\n有些话平时不好意思当面说，但到了这一刻，真的非常感谢你！祝你万事顺遂！",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "kelvin": {
        name: "Kelvin",
        role: "Tom",
        letter: "Ya, 算是我的Second Brother了\n几乎每天晚上我都会跑去你房间kacau你, 可能在别人眼中\n你是一个很随心很有责任心的人 but 在我这里\n你永远都是最cute的Kelvin, 之后跟kenxiong一起住了过后\n不要太迟睡料 不然我真的要白发送黑发了.\n这里永远是我们两个人的秘密,\n所以希望你可以早一天追到你心中的那个女孩子 ya U know I know~\n我要在你毕业之前看到你跟TA在一起 也给我吃一下你们的狗粮XD\n我毕业过后 记得要多想我 虽然我们才认识不到一年 but\n我会常回来看你们的, 不要跟教会的人吵架哈\n之后整个教会就属你跟Gloria最懂事了\n我会经常来找你吃八卦的啊哈哈哈哈哈哈",
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
        letter: "Haloo Gloriaaa, 不知道之后还有没有机会再这样叫妳名字了,\n虽然妳开玩笑说我是妳永远的老大,\n但我知道妳已经不是Sem1那个懵懂的Gloria了,\n很抱歉这个sem才开始熟起来 刚开始要熟就要毕业了,\n所以之后记得跟Junior们多聊聊天 因为妳也是Senior之一了啦现在,\n虽然妳很人畜无害 但我知道妳没有那么笨 很多东西妳也是知道的\n只是没有说出来而已, 既然没要说出来的话\n那就继续做很可爱的Gloriaaa!!! 我知道妳有时候很喜欢靠自己来\n也很冷静 但妳也有很多人可以跟妳负担的, 最后记得要多露牙笑\n真的很好看!!",
        images: [
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop"
        ],
        capsuleLetter: "Gloria，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "abner": {
        name: "Abner",
        role: "Tom",
        letter: "Yo Broooo, 很喜欢跟你讲话欸, 因为你讲的东西真的很match到我,\n我知道你是一个很有责任心的ahboy but 在我这里\n你就是最需要照顾的Junior, 上个sem看到你很down 我有点担心\nbut这个sem看到你好好地开心起来 我就放心很多了,\n记得不要跟别人吵架哈 不要破坏你在我心中乖乖的Abner形象哈.\nWell 你还是很幼稚 but\n我我觉得就是这份幼稚才能让其他人一见到你就很开心的理由, and\ndon't forget 多祷告 你要的全部东西 只有上帝才能给你的. 所以ya\n记得多message我 我毕业了过后会很想你的!!",
        images: [
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop"
        ],
        capsuleLetter: "Abner，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "emily": {
        name: "Emily",
        role: "Tom",
        letter: "AhMaTeLahSi 很random的一个人,\n不知道为什么就突然跟我弟弟在一起了,\n这样我们家就无端端有了两个很random的人了 我是很正经的\n只有你们两个很random而已nia, 我想我毕业了过后 妳也不会有rasa\n因为妳来我们家的时候 我们又会再见面了, 除非我弟弟出轨 I guess,\n不然我们一定会在很意想不到的地方meet到的, 记得多去教会哈\n就算assignment很多也要去教会 妳看Adrian都有来\n所以妳也要跟Eric一起来!!!",
        images: [
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop"
        ],
        capsuleLetter: "Emily，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "henry": {
        name: "Henry",
        role: "Tom",
        letter: "Tadaa, 没想到欸 我也会写信给你,\n就当作我毕业之前想跟你说的最后几句话呗, 很喜欢弄你\n可是感觉你都没有被我作弄 反而是我被你作弄就有, haiyaa\n下次我也要弄回来!! 记得多去教会哈 我们都很想你 and\n有机会 你可以去尝试其他的发型 感觉会很帅!!!",
        images: [
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop"
        ],
        capsuleLetter: "Henry，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "joseph": {
        name: "Joseph",
        role: "Tom",
        letter: "Hiii Joseph, 一想到之前被我当场抓到你去yab的样子\n我真的忘不掉你那个好像小孩做错事的样子 真的很cute,\n虽然我们距离很远 没有什么机会可以跟你一起吃到饭, but\n我感觉你是一个很看重朋友的人, 所以有机会\n我真的很想跟你一起吃个饭 不然我毕业都有遗憾了都...",
        images: [
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop"
        ],
        capsuleLetter: "Joseph，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "changzhe": {
        name: "Chang Zhe",
        role: "Tom",
        letter: "Wasaiii 超级难看到你的, 所以知道了吧 要常来教会哈,\n我跟他们都超想你的, 只有你来了 我们才能多看帅哥xd.\n不知道你是不是在忙学业 but 记得再忙也要按时吃饭 多余的时间嘞\n不用想我 我没有那么自恋哈哈哈哈哈哈哈哈, 如果真的有多余的时间\n就拿去祷告吧 上帝比我们都想你的~",
        images: [
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop"
        ],
        capsuleLetter: "Chang Zhe，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "zhechee": {
        name: "Zhe Chee",
        role: "Tom",
        letter: "Haa 这是一个message to Zhe Chee 思淇,\n我应该没有写错你的华语名字吧哈哈哈哈哈哈,\n妳是我第一个存两个语言在我电话的contact\n因为妳的英文和华语名字完全是不一样的念法, but\n我还是会prefer叫妳思淇 因为英文名字太难念了, 提到妳嘞\n我最有印象的还是妳的眼睛 真的超有神的我都做不到, and\n我毕业过后 教会就会少一个很吵的人了\n所以要轮到妳来负责做那个最E的人了哈 要加油!!!",
        images: [
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop"
        ],
        capsuleLetter: "Zhe Chee，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "kenxiong": {
        name: "Ken Xiong",
        role: "Tom",
        letter: "看到我的message了吧!! 你没有来到教会之前\n我可能是那个很吵的人,但你来了过后 你就是那个最吵的人了,\n但有你在 真的很好, 整个教会的气氛都被你点燃了直接,\n我们毕业过后嘞 你再也烦不到Ennis了 but 你可以去烦Gloria的\n只要不喷口水在Gloria身上就好,\n不然我不敢想象她会怎样的reaction, 我算是很早就知道你了\nbut那个时候我没有理你那么多哈哈哈哈哈哈 但你现在有来教会\n我就开始跟你有些比较多话了. 所以趁我还没有毕业\n可以给你多烦我 的不然我会渐渐的忘记你~ 因为你没有跟我吃饭~",
        images: [
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop"
        ],
        capsuleLetter: "Ken Xiong，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    // ==========================================
    // 以下朋友的内容，你可以在未来把他们的信写进 Excel 后发给我转换，或者你自己填空
    // ==========================================
    "phoebe": {
        name: "Phoebe",
        role: "Tom",
        letter: "写给 Phoebe 的长信内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Phoebe，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "shinrou": {
        name: "ShinRou",
        role: "Tom",
        letter: "写给 ShinRou 的长信内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "ShinRou，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "yeexuan": {
        name: "Yee Xuan",
        role: "Tom",
        letter: "写给 Yee Xuan 的长信内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Yee Xuan，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "natalie": {
        name: "Natalie",
        role: "Tom",
        letter: "写给 Natalie 的长信内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Natalie，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "ziwei": {
        name: "Zi Wei",
        role: "Tom",
        letter: "写给 Zi Wei 的长信内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Zi Wei，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "adrian": {
        name: "Adrian",
        role: "Tom",
        letter: "写给 Adrian 的长信内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Adrian，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "yongjun": {
        name: "Yong Jun",
        role: "Tom",
        letter: "写给 Yong Jun 的长信内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Yong Jun，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "jiayao": {
        name: "Jia Yao",
        role: "Tom",
        letter: "写给 Jia Yao 的长信内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Jia Yao，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "ennis": {
        name: "Ennis",
        role: "Tom",
        letter: "写给 Ennis 的长信内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Ennis，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "shirley": {
        name: "Shirley",
        role: "Tom",
        letter: "写给 Shirley 的长信内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Shirley，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "yanyan": {
        name: "Yan Yan",
        role: "Tom",
        letter: "写给 Yan Yan 的长信内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Yan Yan，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦, 愿神的平安与你同在"
    },
    "hueichien": {
        name: "Huei Chien",
        role: "Tom",
        letter: "写给 Huei Chien 的长信内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Huei Chien，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "justin": {
        name: "Justin",
        role: "Tom",
        letter: "写给 Justin 的长信内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Justin，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "dunxiang": {
        name: "Dun Xiang",
        role: "Tom",
        letter: "写给 Dun Xiang 的长信内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Dun Xiang，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "kelly": {
        name: "Kelly",
        role: "Tom",
        letter: "写给 Kelly 的长信内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Kelly，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "weien": {
        name: "Wei En",
        role: "Tom",
        letter: "写给 Wei En 的长信内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Wei En，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "lydia": {
        name: "Lydia",
        role: "Tom",
        letter: "写给 Lydia 的长信内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Lydia，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "kianqiang": {
        name: "Kian Qiang",
        role: "Tom",
        letter: "写给 Kian Qiang 的长信内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Kian Qiang，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "jingxi": {
        name: "Jing Xi",
        role: "Tom",
        letter: "写给 Jing Xi 的长信内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Jing Xi，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "angelina": {
        name: "Angelina",
        role: "Tom",
        letter: "写给 Angelina 的长信内容...",
        images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600", "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600", "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"],
        capsuleLetter: "Angelina，时间胶囊已解锁！写给你的悄悄话...",
        blessing: "谢谢你愿意看到这里，祝你前途似锦，愿神的平安与你同在"
    },
    "junping": {
        name: "Jun Ping",
        role: "Tom",
        letter: "写给 Jun Ping 的长信内容...",
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
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600"
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
    const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search.replace(/[?&]sent=true/, '');
    window.history.replaceState({ path: cleanUrl }, '', cleanUrl);
}

// ==========================================
// 4. 动态渲染自适应照片滑轨与左右按键逻辑
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

// 照片添加左右点击控制按钮的事件监听 [1]
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        const width = carouselTrack.clientWidth;
        carouselTrack.scrollBy({ left: -width, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        const width = carouselTrack.clientWidth;
        carouselTrack.scrollBy({ left: width, behavior: 'smooth' });
    });
}

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
// 7. ⏳ 时间胶囊逻辑（7月31号 晚上11点59分 开启）
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
