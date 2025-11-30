const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    hongniu: {
        api: 'http://hongniuzy2.com/api.php/provide/vod/from/hnm3u8',
        name: '紅牛資源',
    },
    liangzi: {
        api: 'http://cj.lziapi.com/api.php/provide/vod/from/lzm3u8',
        name: '量子資源',
    },
    kaifang: {
        api: 'http://vod-demo.onrender.com/pubdovod.php',
        name: '開放電影',
    },
    youzhi: {
        api: 'http://api.1080zyku.com/inc/api.php/provide/vod',
        name: '优质资源库',
    },
    sanshijiu: {
        api: 'http://39kan.com/api.php/provide/vod',
        name: '39影視',
    },
    tiantang: {
        api: 'http://vipmv.cc/api.php/provide/vod',
        name: '天堂资源',
    },
    lehuo: {
        api: 'http://lehootv.com/api.php/provide/vod',
        name: '乐活影视',
    },
    tangrenjie1: {
        api: 'http://tangrenjie.tv/api.php/provide/vod',
        name: '唐人街',
    },
    kudian1: {
        api: 'http://api.kuapi.cc/api.php/provide/vod',
        name: '酷点资源',
    },
    wolong1: {
        api: 'http://collect.wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    },
    kudian2: {
        api: 'http://kudian10.com/api.php/provide/vod',
        name: '酷点资源',
    },
    tangrenjie2: {
        api: 'http://tangrenjie.tv/api.php/provide/vod/at/xm',
        name: '唐人街',
    },
    senlin: {
        api: 'http://slapibf.com/api.php/provide/vod',
        name: '森林资源',
    },
    yingku: {
        api: 'http://api.ykapi.net/api.php/provide/vod',
        name: '影库资源网',
    },
    kuache1: {
        api: 'http://caiji.kczyapi.com/api.php/provide/vod/from/kcm3u8',
        name: '快车资源',
    },
    tantan: {
        api: 'http://apittzy.com/api.php/provide/vod',
        name: '探探资源',
    },
    shandian1: {
        api: 'http://sdzyapi.com/api.php/provide/vod/from/sdm3u8',
        name: '閃電資源',
    },
    jinying: {
        api: 'http://jyzyapi.com/provide/vod/from/jinyingm3u8',
        name: '金鹰资源',
    },
    guangsu: {
        api: 'http://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8',
        name: '光速资源',
    },
    aosika: {
        api: 'http://aosikazy.com/api.php/provide/vod',
        name: '奥斯卡资源网',
    },
    laoya: {
        api: 'http://api.apilyzy.com/api.php/provide/vod',
        name: '老鸭资源采集',
    },
    uku1: {
        api: 'http://api.ukuapi.com/api.php/provide/vod',
        name: 'U酷资源',
    },
    beidouxing: {
        api: 'http://m3u8.bdxzyapi.com/api.php/provide/vod',
        name: '北斗星资源',
    },
    yinghua1: {
        api: 'http://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源网',
    },
    kudian3: {
        api: 'http://api.kuapi.cc/api.php/provide/vod',
        name: '酷点资源',
    },
    shandian2: {
        api: 'http://sdzyapi.com/api.php/provide/vod',
        name: '闪电资源',
    },
    feisu1: {
        api: 'http://feisuzy.com/api.php/provide/vod',
        name: '飞速资源',
    },
    kuaibo: {
        api: 'http://www.kuaibozy.com/api.php/provide/vod',
        name: '快播资源',
    },
    baidu1: {
        api: 'http://api.apibdzy.com/api.php/provide/vod',
        name: '百度资源',
    },
    aidan: {
        api: 'http://lovedan.net/api.php/provide/vod',
        name: '艾旦影视',
    },
    piaohua1: {
        api: 'http://www.zzrhgg.com/api.php/provide/vod',
        name: '飘花电影',
    },
    wangmin: {
        api: 'http://prinevillesda.org/api.php/provide/vod',
        name: '网民电影',
    },
    siwa: {
        api: 'http://siwazyw.cc/api.php/provide/vod',
        name: '丝袜资源',
    },
    tiankong: {
        api: 'http://m3u8.tiankongapi.com/api.php/provide/vod/from/tkm3u8',
        name: '天空資源',
    },
    haiwaikan1: {
        api: 'http://haiwaikan.com/api.php/provide/vod',
        name: '海外看資源',
    },
    haiwaikan2: {
        api: 'https://haiwaikan.com/api.php/provide/vod/',
        name: '海外看|点播🪜',
    },
    sanliuling: {
        api: 'https://360zy.com/api.php/provide/vod/',
        name: '360|点播',
    },
    heimuer: {
        api: 'https://www.heimuer.tv/api.php/provide/vod',
        name: '黑木耳|点播',
    },
    citong: {
        api: 'http://ys9.cttv.vip/api.php/provide/vod/',
        name: '刺桐|点播',
    },
    guanwang: {
        api: 'http://gwcms.cttv.vip/api.php/provide/vod/',
        name: '官网|点播',
    },
    yeyu: {
        api: 'https://yyff.540734621.xyz/api.php/provide/vod/',
        name: '业余|点播',
    },
    huaweiba: {
        api: 'https://hw8.live/api.php/provide/vod/',
        name: '华为吧|点播',
    },
    xiaohuangren: {
        api: 'https://iqyi.xiaohuangrentv.com/api.php/provide/vod/',
        name: '小黄人|点播',
    },
    niuniu: {
        api: 'https://api.niuniuzy.me/api.php/provide/vod/',
        name: '牛牛|点播',
    },
    yaya: {
        api: 'https://cj.yayazy.net/api.php/provide/vod/',
        name: '丫丫|点播',
    },
    uku2: {
        api: 'https://api.ukuapi.com/api.php/provide/vod/',
        name: 'U酷|点播',
    },
    haohua1: {
        api: 'https://hhzyapi.com/api.php/provide/vod',
        name: '豪华|点播',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速|点播',
    },
    sijiu: {
        api: 'https://49zyw.com/api.php/provide/vod/',
        name: '四九|点播',
    },
    suoni: {
        api: 'https://suoniapi.com/api.php/provide/vod/',
        name: '索尼|点播',
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod/',
        name: 'ikun|点播',
    },
    feifan: {
        api: 'http://cj.ffzyapi.com/api.php/provide/vod/',
        name: '非凡|点播',
    },
    liangzi2: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '量子|点播',
    },
    baofeng: {
        api: 'https://bfzyapi.com/api.php/provide/vod/',
        name: '暴风|点播',
    },
    hongniu2: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod/',
        name: '红牛|点播',
    },
    feisu2: {
        api: 'https://www.feisuzyapi.com/api.php/provide/vod/',
        name: '飞速|点播',
    },
    kuaiikan: {
        api: 'https://www.kuaikan-api.com/api.php/provide/vod/',
        name: '快看|点播',
    },
    xiongzhang: {
        api: 'https://xzcjz.com/api.php/provide/vod/',
        name: '熊掌|点播',
    },
    kuache2: {
        api: 'https://caiji.kczyapi.com/api.php/provide/vod/from/kcm3u8/',
        name: '快车|点播',
    },
    shandian3: {
        api: 'http://sdzyapi.com/api.php/provide/vod/',
        name: '闪电|点播',
    },
    yinghua2: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod/',
        name: '樱花|点播',
    },
    wolong2: {
        api: 'https://collect.wolongzyw.com/api.php/provide/vod/',
        name: '卧龙|点播',
    },
    piaohua2: {
        api: 'http://www.ahjiuman.com/api.php/provide/vod/at/json',
        name: '飘花|点播',
    },
    tianyi: {
        api: 'https://www.911ysw.top/tianyi.php/provide/vod/',
        name: '天翼|点播',
    },
    huya: {
        api: 'https://www.huyaapi.com/api.php/provide/vod/',
        name: '虎牙|点播',
    },
    baidu2: {
        api: 'https://api.apibdzy.com/api.php/provide/vod/',
        name: '百度|点播',
    },
    piaoling: {
        api: 'https://p2100.net/api.php/provide/vod/',
        name: '飘零|点播',
    },
    wujin: {
        api: 'https://api.wujinapi.com/api.php/provide/vod/',
        name: '无尽|点播',
    },
    subo: {
        api: 'https://subocaiji.com/api.php/provide/vod/',
        name: '速博|点播',
    },
    modu: {
        api: 'https://caiji.moduapi.cc/api.php/provide/vod/',
        name: '魔都|点播',
    },
    zuida: {
        api: 'http://zuidazy.me/api.php/provide/vod/',
        name: '最大|点播',
    },
    qihu: {
        api: 'https://caiji.qhzyapi.com/api.php/provide/vod/',
        name: '奇虎|点播',
    },
    haohua2: {
        api: 'https://hhzyapi.com/api.php/provide/vod/',
        name: '火狐|点播',
    },
    xinlang: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod/',
        name: '新浪|点播',
    },
    kuaiyun: {
        api: 'https://www.kuaiyunzy.com/api.php/provide/vod/',
        name: '快云|点播',
    },
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
