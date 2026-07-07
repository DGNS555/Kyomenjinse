/**
 * 鏡面人世 - 楽曲データ
 * ここを編集することで、サイトの情報が更新されます。
 * =====================================================
 *
 * 【編集方法】
 * - SONGS: 楽曲情報を追加・編集します
 * - ALBUMS: アルバム情報を追加・編集します
 * - youtubeId: YouTubeのURLの末尾のID部分を入力してください
 *   例）https://www.youtube.com/watch?v=XXXXX → "XXXXX"
 *
 * 【歌詞について】
 * - lyricsJa: 日本語歌詞（1行ずつ書く。空行は段落区切り）
 * - lyricsEn: 英語訳（日本語と同じ行数・同じ順番で書く）
 *   ※ 英訳がない場合は lyricsEn を "" にするか、行を空にしてください
 * - titleEn: 英語サブタイトル（任意）。設定すると日本語タイトルの下に表示されます
 *   ※ 不要な場合は行ごと削除してください
 *
 * 【試聴・購入リンクについて】
 * - previewAudio: 試聴音源ファイルのパス（例: "audio/song01-preview.mp3"）
 *   ※ ファイルはサイトと同じフォルダの audio/ フォルダに入れてください
 *   ※ 未設定の場合はプレイヤーが表示されません
 * - artwork: 曲ごとのジャケット画像パス（例: "images/songs/01.jpg"）
 *   ※ 未設定の場合はアルバムアートワークを自動で使用します
 *   ※ どちらもない場合は画像エリアは非表示になります
 * - bandcamp: BandcampのURL（例: "https://xxxx.bandcamp.com/track/xxxx"）
 * - base: BASEのURL（例: "https://xxxx.base.shop/items/xxxx"）
 *   ※ bandcamp / base はどちらか一方だけでも動作します
 *
 */

const SONGS = [
  {
    id: "01",
    title: "銭の花道",
    titleEn: "the Wealth Devide",           // ← 英語サブタイトル。不要なら "" のままでOK
    reading: "ぜにのはなみち",
    album: "album-01",
    track: 1,
    releaseDate: "2026.2.11",
    youtubeId: "",
    description: "同じ月が照らしても、落ちる影の長さは違う。表通りと裏路地の見えない境界線を描いた一曲。",
    lyricsJa: `　銭の花道ゃお偉ぇもんの通り道
　長屋の影ゃ踏んじゃくれねぇ
　身の丈知れと仰せだが
　空ぁ誰のもんでぇ

上様笑いやぁ高みの見物
下々ぁ今日も腹の虫
上見りゃ霞むお天道様
下向きゃ泥が跳ね返る

表通りゃ絹の匂い
裏路地ぁ煤けた夢ばかり
金看板にゃ灯りが揺れて
届かぬ袖を風が撫でる

分相応たぁ誰が決めた
口を噤めば楽だとさ
月は同じく照らすのに
影の長さが違いやす

　銭の花道ゃお偉ぇもんの通り道
　長屋の影ぁ踏んじゃくれねぇ
　身の丈知れと仰せだが
　空ぁ誰のもんでぇ

　笑い声だけ天まで届き
　泣き言ぁ地べたに沈む
　それでも息ぁしてやしょう
　この世ぁ誰の庭でぇ

お城の奥じゃ盃回り
長屋じゃ水も値が上がる
「これが世の理」と申すなら
ずいぶんと軽いお裁きで

空は広ぇと聞いちゃいるが
手ぇ伸ばしゃ雲ばかり
夢見ちゃいけねぇ身分なら
いっそ夢ごと売りやしょか

　銭の花道ゃお偉ぇもんの通り道
　長屋の影ぁ踏んじゃくれねぇ
　身の丈知れと仰せだが
　空ぁ誰のもんでぇ

　笑い声だけ天まで届き
　泣き言ぁ地べたに沈む
　それでも息ぁしてやしょう
　この世ぁ誰の庭でぇ

影踏み遊びの世の中で
足跡ひとつ残しゃせん
風が吹きゃぁ塀も揺れる
その日を待っておりやすぜ`,
    lyricsEn: `　The road of money is a path meant for the powerful.
　They do not even step into the shadows of the poor tenements.
　They tell us to “know our place” and stay within our limits.
　But tell me—who does the sky belong to?
　
Those above laugh while watching comfortably from higher ground.
Those below still struggle with hunger today.
When I look up, even the sun seems blurred by haze.
When I look down, mud splashes back at me.
　
The main streets smell of silk and luxury.
The back alleys are filled only with soot-covered dreams.
Golden shop signs flicker in the light.
The wind brushes sleeves we can never reach.

Who decided what place in life we deserve?
They say life is easier if we stay silent.
The moon shines equally upon everyone.
Yet the length of our shadows is different.

　The road of money is a path meant for the powerful.
　They do not even step into the shadows of the poor tenements.
　They tell us to “know our place” and stay within our limits.
　But tell me—who does the sky belong to?

　Only laughter seems to reach the heavens.
　While cries and complaints sink into the dirt.
　Even so, we keep on living and breathing.
　But whose world is this, really?
　
Deep inside the castle, drinks continue to flow.
Meanwhile, even water becomes expensive in the poor districts.
If they call this “the natural order of the world,”
Then justice feels terribly light and unfair.

They say the sky is wide and open.
But when I reach for it, I touch only clouds.
If someone of my status is forbidden to dream,
Then perhaps I should sell my dreams away entirely.

　The road of money is a path meant for the powerful.
　They do not even step into the shadows of the poor tenements.
　They tell us to “know our place” and stay within our limits.
　But tell me—who does the sky belong to?

　Only laughter seems to reach the heavens.
　While cries and complaints sink into the dirt.
　Even so, we keep on living and breathing.
　But whose world is this, really?

In this world, where people step on one another’s shadows,
Not even a single footprint is allowed to remain.
But when the wind blows, even the walls begin to shake.
And I’ll be waiting for that day to come.`,
    tags: ["Rock", "社会", "風刺"],
    color: "",
    artwork: "",                 // 曲ジャケット画像（例: "images/songs/01.jpg"）
    previewAudio: "audio/KJS-001.mp3",        // 試聴音源パス（例: "audio/01-preview.mp3"）
    bandcamp: "https://kyomenjinse.bandcamp.com",            // BandcampのURL
    base: "https://kyoumenjinse.base.shop"                 // BASEのURL
  },
  {
    id: "02",
    title: "鬼は内",
    titleEn: "the Demon is Inside You",
    reading: "おにはうち",
    album: "album-01",
    track: 2,
    releaseDate: "2026.02.25",
    youtubeId: "",
    description: "鬼は外にあらず。内にあり。重低音和ラップ。",
    lyricsJa: `鬼は外ぁ威勢が良いが
吐いた唾ぁてめぇに掛かる
赤鬼青鬼笑わせらぁ
本物ぁ町人面して歩いてら

清廉潔白看板ぶら下げ
裏じゃ算盤欲で弾く
追い出しゃ済むってなぁ
そいつぁ随分都合が良いじゃねぇか

　福は外　鬼は内
　追い払うほど牙を剥く
　福は外　鬼は内
　胸ん中で火ぃが吹く
　福は外　鬼は内
　綺麗ごたぁ端へ置きな
　福は外　鬼は内
　醜さごと抱きな

鬼も情けも裏表
人の性根ぁ紙一重
追い出しゃ春は来やしねぇ
内で燃やせその焔

御上も町も大騒ぎ
正義の旗ぁ振り回し
叩き出された影法師
行き場もなく夜を彷徨う

怒りも妬みも弱さもな
みんなてめぇの分身だ
鏡割っても映るのは
己の内の鬼ばかり

撒いた豆より吐く言葉
刺さりゃ骨まで響くのさ
笑って済ますな目ぇ合わせ
鬼は内で息してる

　福は外　鬼は内
　外面だけの幸せ
　福は外　鬼は内
　張りぼての春景色

鬼を抱けりゃ福になる
闇を呑みゃ光になる
追い出す祭りぁもう終い
内から芽吹け　福は内

てめぇん中の鬼を
誰が裁けるってんだ
追い出しゃでけぇ化け物
出なきゃただの人間で

善も悪もねぇこの世
あるのは選ぶ覚悟だけ
鬼ぁ内で飼い慣らせ
それが粋ってもんだろ？

　福は外　鬼は内
　福は外　鬼は内
　叫ぶたびに気づくはず
　鬼も福も己が内
　福は外　鬼は内
`,
    lyricsEn: `Shouting “Oni out!” loud and proud,
But the spit you throw comes back around.
Red demons, blue demons—what a joke,
The real ones walk in townsfolk cloaks.

Pure and righteous signs held high,
Counting profit out of sight.
Think you’re clean just kicking them away?
That’s a mighty convenient game to play.

　Fuku outside, Oni inside
　The more you drive them out, the more they bare their fangs.
　Fuku outside, Oni inside
　A fire starts burning deep inside your chest.
　Fuku outside, Oni inside
　Leave your pretty lies off to the side.
　Fuku outside, Oni inside
　Hold your ugliness and don’t let go.

Demons and mercy—two sides of one face.
Human nature is paper-thin.
Drive them out, and spring will never come.
Let that flame burn deep within.

Lords and towns all in uproar,
Waving flags of justice high.
Shadow figures cast aside,
Left to wander through the night.

Anger, jealousy, weakness too—
Every one belongs to you.
Break the mirror if you dare,
Still your demon’s standing there.

Words you throw are sharper than beans,
Piercing bone and echoing deep.
Don’t just laugh and turn away—Face the eyes you try to flee.
The demon breathes inside of you.

　Fuku outside, Oni inside
　Surface smiles and shallow peace.
　Fuku outside, Oni inside
　Springtime made of paper dreams.

Hold your demon—fortune grows.
Drink the darkness—light will rise.
That old ritual’s reached its end.
Let new fortune bloom inside.

The demon living deep in you—
Who has the right to judge its fate?
Drive it out—it grows monstrous.
Leave it be—it stays human.

Good and evil fade away.
Only choices shape the way.
Raise your demon, tame it slow—
That’s the style the wise ones know.

　Fuku outside, Oni inside
　Fuku outside, Oni inside
　Shout it loud and you will see:
　Fortune and demon live in me.
　Fuku outside, Oni inside`,
    tags: ["Hiphop", "内面", "鬼"],
    color: "",
    artwork: "",                 // 曲ジャケット画像（例: "images/songs/02.jpg"）
    previewAudio: "audio/KJS-002.mp3",        // 試聴音源パス（例: "audio/02-preview.mp3"）
    bandcamp: "https://kyomenjinse.bandcamp.com",            // BandcampのURL
    base: "https://kyoumenjinse.base.shop"                 // BASEのURL
  },
  {
    id: "03",
    title: "欲世",
    titleEn: "In Greed We Trust",
    reading: "よくせ",
    album: "album-01",
    track: 3,
    releaseDate: "2026.02.28",
    youtubeId: "",
    description: "拝金と個人主義が蔓延る俗世を、三味線と毒で斬る社会風刺民謡ラップ。",
    lyricsJa: `拝金拝金　南無金大明神
己が価値を追人で量り申す
見栄張り合戦　勝ち負け芝居
宵越しの情けは持たぬが流行りかい？

粋だの洒落だの言う割にゃ
腹の底じゃ損得ばかり
惚れた腫れたも算盤勘定
「重てぇ縁は御免だ」って退散上等

所帯？子育て？冗談じゃねぇ
己が時間が一番でぇ
自由気ままを旗印
されど孤独は胸ずしり

あれも欲しい　これも欲しい
それでも責は負いたかねぇ
楽な蜜だけ舐め回し
苦ぇ薬は他人任せ

　てやんでぇ　てやんでぇ
　てめぇばかりじゃ世は回らねぇ
　惚れた腫れたも面倒と
　逃げりゃ明日は来やしねぇ

　てやんでぇ　てやんでぇ
　情け失くしゃ家立たねぇ
　銭じゃ買えぬ温もりを
　何処へ捨てた浮世人

便利至極のこの俗世
独りで何でも出来申す
されど屏風の裏側で
泣き言ひとつ言えやせぬ

縁を結ぶは手間暇よ
我慢も忍びも情のうち
てめぇ可愛さ突き通しゃ
気づきゃ独りの影法師

「まだ早ぇ」「まだ遊びてぇ」
言い続けりゃ時は逃げ
気づきゃ白髪がちらほらと
鏡の中で睨み合い

浮世は回る回る独楽のごと
己ばかりが軸じゃねぇ
支え支えられ成るが理
忘れちまえば只の砂

　てやんでぇ　てやんでぇ
　強がりばかりの江戸っ子気取り
　背負う覚悟もねぇくせに
　夢ばかり語り申す

　てやんでぇ　てやんでぇ
　情けなきゃ家は冷える
　銭とほまれを抱き締めて
　ひとり寝るのが関の山

三味線鳴らして笑う影
浮世は今日も欲まみれ
さてさて次は誰が舞う
あっしか、あんたか、それとも、、、`,
    lyricsEn: `Greed upon greed — all hail the Great God of Gold
Measuring one’s worth by followers alone
A battle of vanity, a theater of wins and loss
“Compassion beyond tonight?” — is that out of style now?

Speaking of elegance, style, and wit
Yet deep inside, it’s profit over all
Even love and heartbreak are counted on an abacus
“Heavy bonds? Spare me.” — and off they go

A household? Raising children? Don’t make me laugh
My own time comes first
Freedom and comfort raised like a banner
Yet loneliness weighs heavy on the chest

Want this, want that
Still unwilling to bear responsibility
Licking only the sweetest honey
Leaving bitter medicine for someone else

　Teyandee, teyandee
　The world won’t turn for your sake alone
　Calling love and bonds a burden
　Run away — tomorrow may never come
　
　Teyandee, teyandee
　Without compassion, no home can stand
　Warmth can never be bought with coins
　Where did you throw it away, people of the floating world?
　
In this worldly age of endless convenience
One can survive entirely alone
Yet behind the folding screen
Not even a single complaint can be spoken

Bonds are built through time and effort
Patience and endurance are part of compassion
Push selfish love of self too far
And you’ll wake to find yourself a lonely shadow

“Still too early.” “I still want to play.”
Keep saying it — time slips away
Then one day, silver strands begin to show
As you stare back into the mirror

The floating world spins like a spinning top
You alone are not its axis
We live by supporting and being supported
Forget that truth — and all turns to dust

　Teyandee, teyandee
　All swagger, pretending to be tough
　No resolve to carry life’s burden
　Yet full of grand dreams and empty words
　
　Teyandee, teyandee
　Without compassion, a home grows cold
　Clutching coins and hollow praise
　Sleeping alone — that’s where the road may end
　
A shamisen echoes as shadows laugh
This floating world remains stained with greed
Now then — who dances next?
Me… you… or perhaps someone else?`,
    tags: ["Hiphop", "欲", "拝金"],
    color: "",
    artwork: "",                 // 曲ジャケット画像（例: "images/songs/03.jpg"）
    previewAudio: "audio/KJS-003.mp3",        // 試聴音源パス（例: "audio/03-preview.mp3"）
    bandcamp: "https://kyomenjinse.bandcamp.com",            // BandcampのURL
    base: "https://kyoumenjinse.base.shop"                 // BASEのURL
  },
  {
    id: "04",
    title: "影遊び",
    titleEn: "Play with Shadows",
    reading: "かげあそび",
    album: "album-01",
    track: 4,
    releaseDate: "2026.02.26",
    youtubeId: "",
    description: "夕焼けの影遊び――気づけば隣に居るのは、自分ではない“もうひとつの影”。",
    lyricsJa: `夕焼け 小焼け
誰の影

路地裏 朱に染まりゃ
ぬるりと影が腕を掴む
「もういいかい」って耳鳴りさ
振り向きゃ誰も居ないじゃないか

石畳ひび割れ夕が刺す
足音ひとつ溶けちまう
帰るはずだろあたしはさ
影だけ先へ滑り出す

影踏み　鬼さん　此方へと
境越えりゃ戻れない
名を呼ぶ声が絡みつく
喉の奥まで茜色

　影　影　どこへ行く
　茜空ぁの向こう側
　手ぇ引くなって言ってんだ
　帰れない　帰れない

　影　影　誰のもの
　あたしは此処にいるだろう
　笑ってるのは誰だよ
　あたしじゃない　あたしじゃない

年ごと増えてく消えた数
帳面の隅で終いかよ
「訳あり」で片付ける
冷てぇ世間のやり口さ

誰かの娘　誰かの影
すうっと夕闇　飲み込んで
探すふりだけしてみせて
本当は誰も見ちゃいない

ねぇ
影ってのは
どっちが本物だい？

　影　影　連れて行く
　宵の底まで堕としてく
　遊びじゃないと気づいたよ
　遅すぎる　遅すぎる

　影　影　もう居ない
　あたしの名を呼ぶなよ
　「ただいま」さえ言えぬまま
　夕焼けに裂かれてく`,
    lyricsEn: `Sunset glow, fading light
Whose shadow is this?

When the alley turns crimson red,
a slick shadow grabs my arm.
"Are you ready?" it whispers in my ear—
I turn around, but no one is there.

Cracked stone pavement, evening pierces through,
a single footstep melts away.
I should be heading home by now,
yet only my shadow slips ahead.

Shadow-stepping, calling me near,
once I cross the line, there's no return.
A voice calling out my name
wraps around my throat in crimson dusk.

　Shadow, shadow—where are you going?
　Beyond the burning evening sky.
　Don't you dare pull my hand,
　I can't go back, I can't go back.
 
　Shadow, shadow—who do you belong to?
　I'm standing right here, aren't I?
　Who is it that's laughing there?
　It's not me… it's not me…
 
Each year, the number grows—
names that quietly disappear.
Left to fade in the corner of a ledger,
dismissed with "there were circumstances."

Someone's daughter, someone's shadow,
swallowed whole by the falling night.
They pretend to search, just for show,
but deep down, no one truly looks.

Hey…
Tell me—
which one of us is real?

　Shadow, shadow, taking me away,
　dragging me down into the depths of night.
　I know now this isn't a game,
　but it's too late… far too late.
 
　Shadow, shadow—I'm already gone,
　don't call my name anymore.
　Before I can even say "I'm home,"
　I'm torn apart by the setting sun.`,
    tags: ["影", "夕焼け", "失踪"],
    color: "",
    artwork: "",                 // 曲ジャケット画像（例: "images/songs/04.jpg"）
    previewAudio: "audio/KJS-004.mp3",        // 試聴音源パス（例: "audio/04-preview.mp3"）
    bandcamp: "https://kyomenjinse.bandcamp.com/album/hidden-songs-of-ukiyo",            // BandcampのURL
    base: "https://kyoumenjinse.base.shop"                 // BASEのURL
  },
  {
    id: "05",
    title: "虚実瓦版",
    titleEn: "Lost in Echo Chamber",
    reading: "きょじつかわらばん",
    album: "album-01",
    track: 5,
    releaseDate: "2026.03.03",
    youtubeId: "",
    description: "嘘と真が入り混じる情報社会を、江戸言葉と和風ラップで映す鏡面人世流、現代浮世絵。",
    lyricsJa: `宵より流るる風聞の
真か虚かも知らぬ間に
瓦版は空を飛び
影は影を産み申す…

へい旦那、聞きなすって
噂ぁ千里を走るとよ
筆も持たねぇ町人が
指先ひとつで世を弾く

その面見せぬ影法師
口八丁で世直し気取り
真朱の嘘を塗り重ね
真の骨は土の下

風吹きゃ桶屋が儲かると
誰が決めたか因果の糸
絡まり合うは嘘と実
解けぬままに朝を待つ

　嘘か真か
　真か嘘か
　廻る廻る　風車
　書き付け一枚　命取り
　嗚呼、浮きの世は紙芝居

　嘘か真か
　真か嘘か
　鳴るや鳴るや拍子木が
　笑うは誰ぞ泣くは誰
　鏡の向こうは闇ばかり

早桶担ぐは早すぎる
噂ひとつで首が飛ぶ
火の無き所に煙立て
火事と騒いで銭を取る

見世物小屋の口上師
涙ひとつで客を釣る
まこと語ればそりゃ疎まれ
虚言語れば拍手喝采

真は静かに息潜め
嘘は太鼓で町を打つ
耳を貸すほど遠ざかり
目を閉じるほど鮮やかに

　嘘か真か
　真か嘘か
　廻る廻る風車
　書き付け一枚命取り
　嗚呼、浮きの世は紙芝居

　嘘か真か
　真か嘘か
　鳴るや鳴るや拍子木が
　笑うは誰ぞ泣くは誰
　鏡の向こうは闇ばかり

　嘘か真か
　真か嘘か
　廻る廻る風車
　瓦版ひとつ世を裂けば
　血潮は見えず文字ばかり

　嘘か真か
　真か嘘か
　鳴るや鳴るや拍子木が
　嗚呼、浮世絵よこの現世
　刷られて消える運命かよ`,
    lyricsEn: `Rumors drift through the night air,
Before we know what’s truth or lie.
News sheets soar across the sky,
And shadows give birth to more shadows…

Hey mister, lend me your ear,
They say rumors run a thousand miles.
Townsfolk with no pen in hand
Now flick the world with just a fingertip.

Faceless figures in the dark,
Playing saviors with silver tongues.
Layer upon layer of crimson lies,
While truth lies buried beneath the dirt.

“When the wind blows, the bucket seller profits”—
Who first spun that thread of fate?
Truth and falsehood twist together,
Waiting for dawn that never untangles them.

　Truth or lie?
　Lie or truth?
　Round and round the windmill spins.
　One written page can seal your fate,
　Ah… this floating world’s a paper play.
 
　Truth or lie?
　Lie or truth?
　Hear the clack of wooden blocks.
　Who is laughing? Who will cry?
　Beyond the mirror—nothing but darkness.
 
Too quick to carry the coffin,
One rumor and heads begin to roll.
Smoke rises where no fire burns,
Shout “fire!” and profit from the panic.

The carnival preacher on the stage,
Selling tears to lure the crowd.
Speak the truth and you’ll be shunned,
Speak sweet lies and earn applause.

Truth hides quietly, holding its breath,
Lies pound drums through the town.
The closer you lean to listen, The farther away it slips.
Close your eyes—And somehow it grows clearer.

　Truth or lie?
　Lie or truth?
　Round and round the windmill spins.
　One written page can seal your fate,
　Ah… this floating world’s a paper play.
 
　Truth or lie?
　Lie or truth?
　Hear the clack of wooden blocks.
　Who is laughing? Who will cry?
　Beyond the mirror—nothing but darkness.
 
　Truth or lie?
　Lie or truth?
　Round and round the windmill spins.
　One news sheet can tear the world apart,
　No blood in sight—only endless words.
 
　Truth or lie?
　Lie or truth?
　Hear the clack of wooden blocks.
　Ah, this world—a painted ukiyo-e,
　Printed only to fade away.`,
    tags: ["情報", "嘘", "真実"],
    color: "",
    artwork: "",                 // 曲ジャケット画像（例: "images/songs/05.jpg"）
    previewAudio: "audio/KJS-005.mp3",        // 試聴音源パス（例: "audio/05-preview.mp3"）
    bandcamp: "https://kyomenjinse.bandcamp.com/album/hidden-songs-of-ukiyo",            // BandcampのURL
    base: "https://kyoumenjinse.base.shop"                 // BASEのURL
  },
  {
    id: "06",
    title: "飛耳長目",
    titleEn: "Seeing Through the Lies",
    reading: "ひじちょうもく",
    album: "album-01",
    track: 6,
    releaseDate: "2026.03.11",
    youtubeId: "",
    description: "甘き噂の裏を見抜け──世に蔓延る企みを、飛耳長目の眼差しで暴く江戸民謡ラップ。",
    lyricsJa: `表通りゃ祭り囃子
裏路地じゃ密談囃子
旦那衆ゃ綺麗事
袖の下じゃ腹探り

もっともらしく並べた話
笑顔の裏で銭数える
耳にゃ甘ぇが舌にゃ毒
知らずに飲めばそれ傀儡

　ほいさ　ほいさ　目ぇ開けな
　世間はからくり芝居でさぁ
　そらよ　そらよ　騙されな
　声でかい程に裏がある
　ほいさ　ほいさ　聞き分けな
　甘ぇ噂にゃ刺がある
　耳を澄まし目を凝らしゃ
　真も嘘も見えてくらぁ

井戸端話しぁ火の粉の種
誰かが撒いて誰かが燃やす
正義だなんて旗掲げ
裏じゃ誰かが糸を引く

旦那ちょいと考えな
その騒ぎ誰が得をする
銭の流れを追ってみりゃ
影の主も見えてくらぁ

　ほいさ　ほいさ　目ぇ開けな
　世間はからくり芝居でさぁ
　そらよ　そらよ　踊るなよ
　笛吹く奴は何処に居る
　ほいさ　ほいさ　聞き分けな
　甘ぇ言葉にゃ裏がある
　耳と目玉を働かしゃ
　闇の仕掛けも透けて来らぁ

瓦の噂ぁ半分芝居
世間話ぁ半分商い
踊る阿呆に見る阿呆
どっちも阿呆じゃ世は変わらん

耳を飛ばして遠く聞け
目を長くして先を見ろ
此れぞ世渡り
其の名も飛耳長目

　ほいさ　ほいさ　目ぇ開けな
　世間はからくり芝居でさ
　そらよ　そらよ　騙されな
　踊らす奴ぁ何処に居る
　ほいさ　ほいさ　忘れんな
　真を見抜くは己次第
　刃より弓より強ぇのは
　飛耳長目の知恵袋`,
    lyricsEn: `On the main street, festival drums resound
In the back alleys, secret talks go down
Fine words spoken by the wealthy men
But behind closed doors, schemes begin

Stories lined up sounding oh so right
Counting coins behind a smiling light
Sweet to the ear, but poison on the tongue
Drink it unaware — now you're the puppet one

　Hoisa, hoisa — open your eyes
　This whole world's a puppet disguise
　Sorayo, sorayo — don't be fooled
　The loudest voices hide the cruel
　Hoisa, hoisa — listen close
　Sweet rumors always hide their thorns
　Sharpen your ears, focus your sight
　Truth and lies both come to light

Gossip at the well sparks flying flames
Someone spreads it, someone fans the blaze
Holding high the banner of “justice” proud
While hidden hands control the crowd

Hey now, friend — stop and think
Who gains profit when the chaos sinks?
Follow the trail where the money streams
And the shadow master starts to be seen

　Hoisa, hoisa — open your eyes
　This whole world's a puppet disguise
　Sorayo, sorayo — don't you dance
　Who's playing the flute behind this trance?
　Hoisa, hoisa — hear the truth
　Sweet words always hide their proof
　Use your eyes and use your mind
　Even dark schemes you will find

Half the rumors are theater plays
Half the chatter is trade these days
Fools who dance and fools who stare
Nothing changes if fools are everywhere

Send your ears to places far
Stretch your sight beyond the dark
This is how one walks this life
Its name is Hiji-Chomoku

　Hoisa, hoisa — open your eyes
　This whole world's a puppet disguise
　Sorayo, sorayo — don't be fooled
　Who's pulling strings behind the rule?
　Hoisa, hoisa — don't forget
　Truth depends on yourself instead
　Sharper than blades, stronger than bows
　Hiji-Chomoku — wisdom knows`,
    tags: ["陰謀", "諜報", "裏社会"],
    color: "",
    artwork: "",                 // 曲ジャケット画像（例: "images/songs/06.jpg"）
    previewAudio: "audio/KJS-006.mp3",        // 試聴音源パス（例: "audio/06-preview.mp3"）
    bandcamp: "https://kyomenjinse.bandcamp.com/album/hidden-songs-of-ukiyo",            // BandcampのURL
    base: "https://kyoumenjinse.base.shop"                 // BASEのURL
  },
  {
    id: "07",
    title: "お江戸大炎上",
    titleEn: "Edo is Burning",
    decoText: "お江戸|大炎上",
    reading: "おえどだいえんじょう",
    album: "album-01",
    track: 7,
    releaseDate: "2026.03.15",
    youtubeId: "",
    description: "江戸火消しの目線から、噂と群衆が小火を大炎上へ変える“炎上社会”を皮肉った和風民謡ラップ。",
    lyricsJa: `真昼間っから騒がしく
またまた何処ぞで火の手だと
小さき火種舞っただけ
町はたちまち大騒ぎ

風吹きゃすぐに燃え上がり
野次馬共が群れ集う
煙の向こうで騒ぐ声
火元ぁ知らずに騒ぐだけ

　火事でぃ火事でぃまた火事でぃ
　カンカン鳴らせよ半鐘を
　小火も風乗りゃ大火事さ
　火消し泣かせの世の騒ぎ

誰か落とした火種が一つ
風に流れて町を行く
聞いた見たぞと声重ね
火の粉は遠く飛び散るぞ

町の衆やよく覚えとけ
大火の裏にゃ風がある
その風呼ぶ声聞こえたら
止まれ考え釣られんなぁ

　火事でぃ火事でぃまた火事でぃ
　カンカン鳴らせよ半鐘を
　小火も風乗りゃ大火事さ
　火消し泣かせの世の騒ぎ

こちとら町の火消し衆
本に町をば守りてぇ
だが此の頃ぁ火事よりも
騒ぎばかりが多すぎる

燃えりゃ誰かが得をして
消しゃ誰かがほくそ笑む
だがその裏でまた誰か
火種ひとつ落としてる

　火事でぃ火事でぃまた火事でぃ
　カンカン鳴らせよ半鐘を
　小火も風乗りゃ大火事さ
　火消し泣かせの世の騒ぎ

　火事でぃ火事でぃまた火事でぃ
　こちとら休む暇もねぇ
　小火で済むならそれで良い
　炎上ばかりは御免だぜ`,
    lyricsEn: `Broad daylight, yet the town’s in noise again
They say another fire’s begun somewhere
Just a tiny spark was all it took
Now the whole town’s losing its mind

One gust of wind and the flames rise high
Crowds of gawkers gather around
Shouting voices through the smoke
No one knows the source, yet everyone screams

　Fire, fire, another fire again!
　Ring the alarm bell, let it clang!
　Even a spark can turn into an inferno
　What a troublesome age for firefighters

Someone dropped a single spark somewhere
The wind carried it through the streets
“I heard!” “I saw!” the voices pile up
And embers scatter far and wide

People of the town, remember this well
Behind every blaze, there’s always a wind
And when you hear the voices calling it forth
Stop and think—don’t get swept away

　Fire, fire, another fire again!
　Ring the alarm bell, let it clang!
　Even a spark can turn into an inferno
　What a troublesome age for firefighters

We’re the firefighters of this town
Truly trying to keep it safe
But these days more than real fires
It’s the endless uproars that never stop

When things burn, someone profits
When they fade, someone smirks in the dark
And somewhere behind it all
Another spark is quietly dropped

　Fire, fire, another fire again!
　Ring the alarm bell, let it clang!
　Even a spark can turn into an inferno
　What a troublesome age for firefighters
 
　Fire, fire, another fire again!
　We barely get a moment to rest
　If only small fires stayed small
　But endless outrage? Spare us that.`,
    tags: ["炎上", "火消し", "騒動"],
    color: "",
    artwork: "",
    previewAudio: "audio/KJS-007.mp3",
    bandcamp: "https://kyomenjinse.bandcamp.com/album/hidden-songs-of-ukiyo",
    base: "https://kyoumenjinse.base.shop",
  },
    {
    id: "08",
    title: "光網祝詞",
    titleEn: "Hymn of the Luminous Net",
    reading: "こうもうのりと",
    album: "album-01",
    track: 8,
    releaseDate: "2026.03.09",
    youtubeId: "",
    description: "光の網に宿る新しき御霊へ捧ぐ、江戸言葉で綴るIT讃歌。",
    lyricsJa: `誰吹き寄せた風童
遠き声まで運び来る
見えぬ糸張る空の網
星の瞬き繋ぎんす

からくり細工の骨もなく
血潮も持たねど息づいて
指も触れぬに文飛ばし
万里彼方へ橋を掛け

　あゝ
　光の網で世を満たせ
　海より広き声の道
　泡と消えぬこの灯なら
　人の想いを結びなよ

銭も持たぬに富を生み
姿持たぬに世を巡り
カラクリよりもなお深く
人の夢路を編み上げる

　あゝ
　光の網で世を満たせ
　海より広き声の道
　泡と消えぬこの灯なら
　人の想いを結びなよ

　あゝ
　今宵は誰の手に宿る
　波間を越えて時代を越え
　声なき声を届けなや
　いと尊き無垢の灯よ
　明日を照らしんせ`,
    lyricsEn: `Who carried forth this child of wind,
Bringing voices from afar?
An unseen web stretches across the sky,
Binding together the flicker of stars.

A crafted thing with neither bones,
Nor blood within, yet still it breathes.
Without a touch, it sends forth letters,
Casting bridges across ten thousand miles.

　Ah—
　Fill this world with the luminous net,
　A road of voices wider than the sea.
　If this flame shall never fade like foam,
　Then let it bind the hearts of humankind.

Though holding no coin, it creates great wealth,
Though having no form, it wanders the world.
Deeper still than any crafted device,
It weaves together the pathways of dreams.

　Ah—
　Fill this world with the luminous net,
　A road of voices wider than the sea.
　If this flame shall never fade like foam,
　Then let it bind the hearts of humankind.

　Ah—
　In whose hands shall it dwell tonight?
　Crossing waves, transcending time itself,
　Delivering voices that bear no sound.
　O precious and innocent flame,
　Shine your light upon tomorrow.`,
    tags: ["光", "ネット", "繋がり"],
    color: "",
    artwork: "",                 // 曲ジャケット画像（例: "images/songs/06.jpg"）
    previewAudio: "audio/KJS-008.mp3",        // 試聴音源パス（例: "audio/06-preview.mp3"）
    bandcamp: "https://kyomenjinse.bandcamp.com/album/hidden-songs-of-ukiyo",            // BandcampのURL
    base: "https://kyoumenjinse.base.shop"                 // BASEのURL
  },
      {
    id: "09",
    title: "日々上々",
    titleEn: "Days Getting Better",
    reading: "ひびじょうじょう",
    album: "album-02",
    track: 1,
    releaseDate: "2026.06.25",
    youtubeId: "",
    description: "世知辛い日々だからこそ、笑って歩けりゃ上々よ。",
    lyricsJa: `米は高ぇし財布は軽ぇ
風が通るぜ懐ん中
「昨日のツケはどうしたよ」
「明日の俺に任せとけ」

長屋の壁は薄っぺら
笑い声なら良く響く
ボロでも囲めば暖けぇな
それがなんだか悪くねぇ

上見りゃキリねぇこの世の値
下見りゃ似たよな顔ばかり
無ぇもん数えてどうすんだ
今あるもんで笑っとけ

　無ぇけど笑う無いなり上々
　今日も何とかそれで行こう
　足りねぇ分は分け合いで
　それでも腹は満たされる

　無ぇけど笑う無いなり上々
　明日のことなら明日でいい
　なんとかなるさのその先で
　今日も生きてるそれで上等

飯はどうするあるもん食え
昨日の残りもまだイケるって
酒は無ぇから水で乾杯
笑えりゃそれで上出来よ

足りねぇ足りねぇ言ってるが
満ちてるもんもあるだろよ
隣のやつと肩並べ
くだらん話で夜を越え

「……まぁ、それでもな」

　無ぇけど笑う無いなり上々
　今日もなんとかそれで行こう
　足りねぇ分は分け合いで
　それでも心満たされる

　無ぇけど笑う無いなり上々
　泣いても腹は減るだけさ
　だから笑って食って寝て
　それで良いんだ　それで上等`,
    lyricsEn: `Rice keeps getting pricey, my wallet's running dry.
The wind blows through the holes where my money should lie.
"What about the bill from yesterday?"
"Leave it to tomorrow's me," I say.

These old apartment walls are paper thin,
But laughter always finds its way within.
Even this worn-out place feels warm somehow,
And honestly, I'm good with it for now.

Look up, there's no end to what you could buy.
Look around, we're all just getting by.
Why count the things that we don't own?
Just laugh with what we've got at home.

　We've got nothing, but we're smiling—life's still going right.
　We'll make it through another day somehow tonight.
　What we're missing, we can always share.
　Somehow there's enough for everyone there.

　We've got nothing, but we're smiling—life's still going right.
　Tomorrow can just wait until tomorrow's light.
　Beyond the words, "It'll all work out somehow,"
　We're still alive today, and that's enough for now.

"What are we eating?" "Whatever's left."
Yesterday's leftovers still beat regret.
No sake tonight, so we'll toast with water.
If we can laugh, nothing could matter.

Always saying, "It's never enough,"
But haven't we already got enough?
Stand shoulder to shoulder with your friend,
Talking nonsense till the night's end.

"...Well... even so."

　We've got nothing, but we're smiling—life's still going right.
　We'll make it through another day somehow tonight.
　What we're missing, we can always share.
　Still our hearts are full beyond compare.

　We've got nothing, but we're smiling—life's still going right.
　Crying only leaves you hungry through the night.
　So laugh a little, eat, and get some sleep.
　That's enough for us—that's all we need.`,
    tags: ["暮らし", "物価高", "モチベーション"],
    color: "",
    artwork: "",                 // 曲ジャケット画像（例: "images/songs/06.jpg"）
    previewAudio: "audio/KJS-009.mp3",        // 試聴音源パス（例: "audio/06-preview.mp3"）
    bandcamp: "https://kyomenjinse.bandcamp.com/album/life-in-ukiyo",            // BandcampのURL
    base: "https://kyoumenjinse.base.shop"                 // BASEのURL
  },
      {
    id: "10",
    title: "持ちつ持たれつ",
    titleEn: "Holding Each Other Up",
    decoText: "持ちつ|持たれつ",
    reading: "もちつもたれつ",
    album: "album-02",
    track: 2,
    releaseDate: "2026.07.02",
    youtubeId: "",
    description: "持ちつ持たれつ、今日もふたりで浮世道。",
    lyricsJa: `朝はばたばた夜ぁくたくた
言葉足らずも何時ものこと
小さな喧嘩もたまにする
だけど帰りゃ隣に居る

　持ちつ持たれつ浮世道
　うまく行かぬ日もあるけれど
　あんた疲れた顔してりゃ
　黙って茶でも淹れやしょう

　持ちつ持たれつこの暮らし
　泣いて笑って今日になる
　派手じゃなくても悪かない
　おめぇと居ればまぁ上々

銭の工面に悩む日も
先見えぬ夜あるけれど
夢をこぼせば聞いてくれ
そのひと言にゃ救われる

　持ちつ持たれつ浮世道
　転ぶ日ぁ互いに手を貸して
　強がる背中見てるから
　無理はするんじゃありゃせんよ

　持ちつ持たれつこの日々を
　歳を重ねて行けたなら
　しわが増えたと笑い合う
　そんな明日が来ることを

　持ちつ持たれつ　持ちつ持たれつ
　あんたとならば怖かない`,
    lyricsEn: `Busy mornings, exhausted nights,
We're never very good with words.
Now and then, we argue over little things,
Yet somehow, you're always there beside me when I come home.

　We lean on each other—such is the way of life.
　Some days, nothing goes as planned.
　When I see the weariness on your face,
　I'll quietly brew you a cup of tea.

　We lean on each other in this life we share.
　We cry, we laugh, and another day begins.
　It may not be a glamorous life,
　But with you beside me, it's more than enough.

There are days when money keeps us awake,
And nights when tomorrow feels out of sight.
Whenever I let my dreams spill out,
You listen—and your few words carry me through.

　We lean on each other—such is the way of life.
　When one of us stumbles, the other reaches out a hand.
　I see the strength you're trying to hide,
　So don't push yourself too hard.

　We lean on each other through all our days.
　If we can grow old together,
　We'll laugh about the wrinkles we've earned,
　And hope for a tomorrow just like that.

　We lean on each other, always leaning on each other.
　As long as I'm with you, there's nothing to fear.`,
    tags: ["夫婦", "支え合い", "Reggae"],
    color: "",
    artwork: "",                 // 曲ジャケット画像（例: "images/songs/06.jpg"）
    previewAudio: "audio/KJS-010.mp3",        // 試聴音源パス（例: "audio/06-preview.mp3"）
    bandcamp: "https://kyomenjinse.bandcamp.com/album/life-in-ukiyo",            // BandcampのURL
    base: "https://kyoumenjinse.base.shop"                 // BASEのURL
  },
      {
    id: "11",
    title: "働々節",
    titleEn: "Sweat, Grit & Pride",
    reading: "どうどうぶし",
    album: "album-02",
    track: 3,
    releaseDate: "2026.07.02",
    youtubeId: "",
    description: "働いて、擦り減って、それでも家族の為に踏ん張る者達への讃歌。",
    lyricsJa: `朝まだ暗ぇうちからよ
草鞋の紐ぁ締め直し
踏ん張り踏ん張り踏みしめて
今日も稼ぎに向かいやす

汗にまみれたこの背中
愚痴なんざぁ似合わねぇ
腕と根性叩き込み
世間の波ゃ渡りやす

背負ったものぁ軽くねぇ
守る灯ひとつ胸に抱き
転んで泥を喰ったとて
また立ちゃそれで上等よ

　働き働き働いて
　この身を安く売りゃしねぇ
　家を支える為だから
　弱音なんざぁ吐いちゃいねぇ

　絡繰思考が増えようと
　見えねぇ算段増えようと
　最後に人の世回すのぁ
　汗水　根性　意地ってもん

早ぇ知恵も増えやした
便利な世間になりやした
それでも飯ぁ湧きゃしねぇ
手ぇ動かしてなんぼよな

泥に塗れたこの指が
明日の飯を呼び寄せる
誰かが楽に笑う陰
誰かが汗を流してる

笑われようと構やしねぇ
胸張る誇りぁ捨てやしねぇ
折れて曲がって尚立って
踏ん張る背中が道を引く

　家族を支える為だから
　今日もこの足止めやせん
　最後に人の世回すのぁ
　汗水　根性　意地ってもん

　どんだけ知識が増えようと
　どんな時代が来ようとも
　最後に人の世繋ぐのぁ
　汗水　根性　意地ってもん

　働き働き働いて
　胸張りゃそれで上等よ
　家族を支える為だから
　この身ぁまだまだ折れやせん

　どんな絡繰増えようと
　時代がどっちへ転ぼうと
　最後に人の世守るのぁ
　汗水　根性　意地ってもん`,
    lyricsEn: `Before the dawn has even broken,
I tighten the straps on my worn work boots.
Step by step, standing my ground,
I head out once again to earn an honest living.

This back is soaked with sweat,
Complaints don't suit a man like me.
With skill in my hands and grit in my heart,
I make my way through life's rough waters.

The weight I carry is no small thing.
I keep a single light close to my heart—The family I'm sworn to protect.
Even if I fall face-first into the mud,
As long as I rise again, that's enough.

　Work, and keep on working.
　I won't sell my life cheaply.
　Everything I do is for my family,
　So I won't waste my breath on self-pity.

　No matter how many clever machines appear,
　Or how complicated the world becomes,
　In the end, what keeps this world turning
　Is sweat, determination, and unwavering pride.

The world has grown wiser,
And life has become more convenient.
But meals don't simply appear on the table.
Nothing happens until these hands get moving.

These mud-stained hands
Call tomorrow's meal into being.
Behind every easy smile,
Someone else is shedding sweat.

They can laugh at me if they want.
I'll never throw away the pride I carry.
Bent, battered, and worn, I still stand,
And a steadfast back carves the road ahead.

　Because I'm providing for my family,
　These feet won't stop today either.
　In the end, what keeps this world turning
　Is sweat, determination, and unwavering pride.

　No matter how far knowledge advances,
　No matter what age may come,
　In the end, what holds humanity together
　Is sweat, determination, and unwavering pride.

　Work, and keep on working.
　If I can hold my head high, that's enough.
　Everything I do is for my family,
　And I still have plenty of strength left in me.

　No matter what new machines may come,
　Or where the times may lead us,
　In the end, what protects this world
　Is sweat, determination, and unwavering pride.`,
    tags: ["労働", "職人", "誇り"],
    color: "",
    artwork: "",                 // 曲ジャケット画像（例: "images/songs/06.jpg"）
    previewAudio: "audio/KJS-011.mp3",        // 試聴音源パス（例: "audio/06-preview.mp3"）
    bandcamp: "https://kyomenjinse.bandcamp.com/album/life-in-ukiyo",            // BandcampのURL
    base: "https://kyoumenjinse.base.shop"                 // BASEのURL
  },
      {
    id: "12",
    title: "子守下手",
    titleEn: "A Clumsy Lullaby",
    reading: "こもりべた",
    album: "album-02",
    track: 4,
    releaseDate: "2026.07.02",
    youtubeId: "",
    description: "不器用な親父から「おめぇ」に贈る、江戸流子守唄。",
    lyricsJa: `長屋の隅で朝が来りゃ
小せぇ足音パタパタと
寝癖のまんまで駆けて来て
「とーちゃん」なんて呼びやがる

舌足らずのその声が
胸ん中まで染みて来らぁ
笑って転んでまた笑う
忙しい奴だ本当によ

不器用な手で抱き上げりゃ
妙に軽くてあったけぇ
泣くんじゃねぇやと言いながら
こっちが先に負けちまう

銭ぁねぇがようちにはなぁ
立派なもんぁ買えねぇが
この腕だけはいつだって
空けといてやる覚えとき

　おめぇのかたちを覚えてく
　小せぇ手ぇから少しずつ
　笑った顔も泣き顔も
　この目にゃ全部焼き付ける

　おめぇのかたちを覚えてく
　昨日よりもまたデケェ気がすらぁ
　気付けばいつか届かねぇ
　そんな日ぃまで見ててやる

よちよち歩きも板に付き
調子に乗って転びやがる
涙こらえて鼻垂れて
また立ち上がるその姿

誰に似たんだその意地は
たぶん俺だと言いてぇが
てめぇの方がよっぽどよ
根性座っていやがるぜぃ

肩車して町歩きゃ
目ぇ丸くして空見てる
「あれ何？」なんて聞かれても
上手く答えりゃ出来ねぇが

分かんねぇ事ぁ山程だ
それでも一緒に覚えりゃいい
転び方から立ち方まで
俺もまだまだ修行中

　おめぇのかたちを覚えてく
　小せぇ背中も少しずつ
　走る姿も怒った顔も
　全部この胸刻み込む

　おめぇのかたちを覚えてく
　昨日よりまた強くなりゃ
　そのうち俺の背を越して
　遠くへ行く日も来るんだろう

そのうち手も離れちまい
置いてきぼり食らうだろ
口も利かねぇ日も来りゃ
それもまぁまぁ仕様がねぇ

それでも今この小せぇ
手ぇが俺を掴んでる
この温もりを忘れねぇ
忘れちゃならねぇ気がしてよ

　おめぇのかたちを覚えてく
　小せぇ今を忘れねぇ
　泣き顔　笑顔もその全部
　宝みてぇに抱えてく

　おめぇのかたちを覚えてく
　いつかこの手を離れても
　何処に居たって忘れねぇ
　おめぇは俺の大事だよ`,
    lyricsEn: `Morning breaks over our little row house,
And I hear the patter of tiny feet.
You come running in with your bed hair still a mess,
Calling out, "Daddy!"

That clumsy little voice of yours
Finds its way straight into my heart.
You laugh, you fall, then laugh again—
You're one busy little soul.

When I lift you with these awkward hands,
You feel so light... and so warm.
I tell you not to cry,
Yet somehow I'm the first one to give in.

We don't have much money here.
I can't buy you anything fancy.
But these arms will always be here for you.
Never forget that.

　I'm learning every little part of you,
　Little by little, from those tiny hands on.
　Your smiling face, your tearful face—
　I'll cherish every one of them in my memory.

　I'm learning every little part of you.
　You already seem bigger than you were yesterday.
　Before I know it, you'll be out of my reach,
　But until that day, I'll be watching over you.

Your wobbly little steps grow steadier each day,
Then you get carried away and tumble again.
Holding back your tears, nose running,
You stand up once more.

I wonder where you got that stubborn spirit.
I'd like to say it came from me,
But truth be told,
You've got far more grit than I ever did.

When you're on my shoulders as we walk through town,
You stare wide-eyed up at the sky.
"What's that?" you ask me,
Though I don't always know the answer.

There are so many things I still don't understand.
That's alright—we'll learn them together.
From how to fall to how to stand again,
I'm still learning myself.

　I'm learning every little part of you,
　Even that little back of yours as it grows.
　The way you run, the face you make when you're angry—
　I'll carve every moment into my heart.

　I'm learning every little part of you.
　Each day you grow a little stronger.
　Someday you'll be taller than me,
　And you'll set off into a world of your own.

One day you'll stop holding my hand,
And I'll probably be left behind.
There may even come a day
When we hardly speak at all.

But right now, this tiny hand
Is still holding tightly onto mine.
I don't ever want to forget this warmth.
I don't think I ever should.

　I'm learning every little part of you.
　I'll never forget who you are today.
　Your tears, your laughter—every precious moment,
　I'll hold them close like priceless treasures.

　I'm learning every little part of you.
　Even when you someday let go of my hand,
　No matter where life takes you,
　You'll always be the most precious part of mine.`,
    tags: ["子守", "不器用", "親心"],
    color: "",
    artwork: "",                 // 曲ジャケット画像（例: "images/songs/06.jpg"）
    previewAudio: "audio/KJS-012.mp3",        // 試聴音源パス（例: "audio/06-preview.mp3"）
    bandcamp: "https://kyomenjinse.bandcamp.com/album/life-in-ukiyo",            // BandcampのURL
    base: "https://kyoumenjinse.base.shop"                 // BASEのURL
  },
      {
    id: "13",
    title: "藍傘",
    titleEn: "the Indigo Umbrella",
    reading: "あいがさ",
    album: "album-02",
    track: 5,
    releaseDate: "2026.07.02",
    youtubeId: "",
    description: "藍染めの傘が呼び覚ます、記憶の中のその情け。",
    lyricsJa: `春の雨がしとしとと
軒に滴り道濡らす
見かけし傘は藍の色
遠き日のこと胸に浮く

初の勤めの帰り道
覚えぬ町に足止まり
細かき雨粒降り出して
空は静かに暮れかかる

その折ふいに差し出され
この手に触れしは藍の傘
「濡れるぞ」との一言が
今も微かに耳残る

　名も顔も思い出せぬ
　されど忘れぬ藍の色
　春の雨に濡れし日の
　借りし情が胸にある

礼もそこそこ顔上げりゃ
人影ひとつ見当たらぬ
振り向く先も雨ばかり
町はしずかに煙るだけ

借りし傘持ち歩く道
胸の内にはぬくもりが
春の小雨はやむことなく
一日濡らして過ぎてゆく

　顔も名も思い出せぬ
　されど忘れぬ藍の色
　返す宛ても知らぬまま
　借りし情が胸にある

年を重ねて今至り
霞む記憶のその中で
顔も名も遠ざかれど
藍の色だけ残りけり

春の雨が降るたびに
胸の奥にて揺れるもの
返せぬままのこの情
いつか誰かに渡せたら`,
    lyricsEn: `A gentle spring rain falls in quiet streams,
Dripping from the eaves and darkening the road.
An umbrella, deep indigo in color,
Calls back a memory from long ago.

It was after my very first day at work,
In a town I barely knew.
A fine rain began to fall,
As evening quietly settled over the sky.

Then, without a word of warning,
An indigo umbrella was placed into my hand.
"You'll get soaked," was all they said.
Even now, those words softly echo in my ears.

　I can no longer remember the face, Nor even the name.
　Yet I'll never forget that shade of indigo,
　The kindness I borrowed
　On that rainy spring day remains in my heart.

When I looked up to offer my thanks,
There was no one left in sight.
Everywhere I turned, there was only rain,
And the town fading into its quiet mist.

As I walked on beneath the borrowed umbrella,
A quiet warmth filled my heart.
The spring rain never let up,
Washing gently over the whole day.

　The face is gone. The name is gone.
　But the indigo remains.
　Though I never knew where to return the umbrella,
　The kindness I borrowed has never left my heart.

The years have come and gone,
And memory has grown faint.
The face has faded, the name has vanished,
Yet the color of that indigo still remains.

Whenever the spring rain begins to fall,
Something stirs deep within me.
If only this kindness I could never repay
Might someday be passed on to someone else.`,
    tags: ["傘", "雨", "記憶"],
    color: "",
    artwork: "",                 // 曲ジャケット画像（例: "images/songs/06.jpg"）
    previewAudio: "audio/KJS-013.mp3",        // 試聴音源パス（例: "audio/06-preview.mp3"）
    bandcamp: "https://kyomenjinse.bandcamp.com/album/life-in-ukiyo",            // BandcampのURL
    base: "https://kyoumenjinse.base.shop"                 // BASEのURL
  },
      {
    id: "14",
    title: "渡し舟",
    titleEn: "The Ferry Beyond",
    reading: "わたしぶね",
    album: "album-02",
    track: 6,
    releaseDate: "2026.07.02",
    youtubeId: "",
    description: "霧の向こうへ渡った友を想い、此岸に残された者の静かな誓いを綴った一曲。",
    lyricsJa: `宵の川風冷たくて
灯火揺れて影滲む
昨日までぁ隣にて
馬鹿笑いをしてたのに

安酒煽り朝迎え
「また明日な」と手を振った
その声今じゃ聞こえねぇ
静けさだけが残りやがる

霧の向こうで何してる
相棒そっちはどうでぇ具合
薄情者と言いてぇが
冗談さえも出やしねぇ

　渡し舟や遠ざかり
　呼べど声ぁ届かねぇ
　忘れやしねぇ相棒よ
　ここで俺ぁ立ち続ける

馬鹿みてぇに笑う奴
腹抱えては騒いでた
転んだってもすぐ立って
「まだ行ける」と歯を見せる

あの日の事ぁ言わねぇが
風ばかりが冷てぇ夜
気がつきゃおめぇ居ねぇまま
笑い声だけ残しやがる

悔しさなんざ吐かねぇが
胸の奥で燻ってる
それでも俺ぁ歩き出す
おめぇみてぇに前向いて

　渡し舟ぁ遠ざかり
　呼べど声ぁ届かねぇ
　忘れやしねぇ相棒よ
　こっちで俺ぁ立ち続ける

　渡し舟ぁ遠ざかり
　呼べど声ぁ届かねぇ
　忘れやしねぇ相棒よ
　こっちで俺ぁ立ち続ける

　忘れやしねぇ相棒よ
　こっちで俺ぁ立ち続ける`,
    lyricsEn: `The evening river breeze is cold,
Lantern lights tremble, their shadows blurred.
Only yesterday you were beside me,
Laughing so hard we could barely stand.

We'd drink cheap liquor until morning came,
Then wave and say, "See you tomorrow."
Now your voice can no longer reach me,
Leaving only silence behind.

What are you doing beyond the mist?
My old friend... how are things over there?
I'd like to call you a heartless fool,
But even jokes won't come anymore.

　The ferry drifts farther away,
　No matter how I call, my voice can't reach you.
　I'll never forget you, my friend.
　I'll keep standing here, on this side.

You were the kind who laughed without shame,
Holding your stomach from laughing so hard.
Even when you fell, you'd get right back up,
Grinning, saying, "I've still got plenty left."

I won't speak of that day.
Only the cold wind remains tonight.
Before I knew it, you were gone,
Leaving nothing but your laughter behind.

I won't speak my regrets aloud,
Though they still smolder deep inside.
Even so, I'll keep walking forward,
Just like you always did.

　The ferry drifts farther away,
　No matter how I call, my voice can't reach you.
　I'll never forget you, my friend.
　I'll keep standing here, carrying on.

　The ferry drifts farther away,
　No matter how I call, my voice can't reach you.
　I'll never forget you, my friend.
　I'll keep standing here, carrying on.

　I'll never forget you, my friend.
　I'll keep standing here, carrying on.`,
    tags: ["別れ", "舟", "三途川"],
    color: "",
    artwork: "",                 // 曲ジャケット画像（例: "images/songs/06.jpg"）
    previewAudio: "audio/KJS-014.mp3",        // 試聴音源パス（例: "audio/06-preview.mp3"）
    bandcamp: "https://kyomenjinse.bandcamp.com/album/life-in-ukiyo",            // BandcampのURL
    base: "https://kyoumenjinse.base.shop"                 // BASEのURL
  },
      {
    id: "15",
    title: "恩毎上位",
    titleEn: "On My Way",
    reading: "おんまいうぇい",
    album: "album-02",
    track: 7,
    releaseDate: "2026.07.02",
    youtubeId: "",
    description: "支えてくれた人々からの恩を胸に、己の道を最後まで歩き抜く覚悟を歌った和風ラップ。",
    lyricsJa: `誰かの地図じゃ辿り着けねぇ
正しさなんて時代でブレる
笑われた夢も荷物に背負って
泥だらけでも足止めねぇ

向かい風なら前行く証拠
迷いも不安も連れてく道中
上手くやれずに遠回り上等
積み木のように積む今日も

　恩毎上位
　この足で行く最後の日まで
　雨降りゃ濡れて風なら受けて
　倒れりゃ立ってまた歩くだけ

　恩毎上位
　誰のためでもねぇ俺の人生
　迷ってもいい止まらなければ
　今日を積み重ねまた明日へ

貰った情けに背中押されて
悔し涙さえ燃料に変えて
派手じゃなくていい誇れりゃいい
死ぬまで自分で歩けりゃいい

世間のペースに飲まれりゃ迷子
焦りは視界を曇らす雑音
だから今日だけちゃんと越えよう
昨日の自分を一歩でも

　恩毎上位
　この足で行く最後の日まで
　雨降りゃ濡れて風なら受けて
　倒れりゃ立ってまた歩くだけ

　恩毎上位
　誰のためでもねぇ俺の人生
　終わりの時も胸張れるよう
　この道だけを歩いてく

近道なくても俺の道
転んだ数だけ増える意味
最後のその時笑えりゃいい
恩毎上位...On My Way`,
    lyricsEn: `No one else's map can lead me there.
What's called right changes with the times.
Even the dreams they laughed at, I carry on my back.
Covered in mud, I still refuse to stop.

A headwind only proves I'm moving forward.
Doubt and fear travel beside me.
If I have to take the long way around, so be it.
Today is another brick laid upon tomorrow.

　On My Way.
　I'll walk this road until my final day.
　If it rains, I'll get wet. If the wind blows, I'll face it.
　If I fall, I'll stand again and keep walking.

　On My Way.
　This is my life—no one else's.
　It's alright to lose my way, as long as I never stop.
　One more day built upon the last, And then another tomorrow.

The kindness I've received has pushed me onward.
Even bitter tears become my fuel.
I don't need a flashy life—only one I can be proud of.
As long as I can walk on my own until the end, that's enough.

If I chase the world's pace, I'll only lose myself.
Haste clouds my sight with needless noise.
So today, I'll simply make it through today,
Taking at least one step beyond who I was yesterday.

　On My Way.
　I'll walk this road until my final day.
　If it rains, I'll get wet. If the wind blows, I'll face it.
　If I fall, I'll stand again and keep walking.

　On My Way.
　This is my life—no one else's.
　So that when my journey reaches its end, I can hold my head high,
　Knowing I walked only my own road.

Even without shortcuts, this is my path.
Every fall gives my journey greater meaning.
If I can smile when the end finally comes,
Then I'll know... I'm still On My Way.`,
    tags: ["道", "人生", "覚悟"],
    color: "",
    artwork: "",                 // 曲ジャケット画像（例: "images/songs/06.jpg"）
    previewAudio: "audio/KJS-015.mp3",        // 試聴音源パス（例: "audio/06-preview.mp3"）
    bandcamp: "https://kyomenjinse.bandcamp.com/album/life-in-ukiyo",            // BandcampのURL
    base: "https://kyoumenjinse.base.shop"                 // BASEのURL
  }
];

const ALBUMS = [
  {
    id: "album-01",
    title: "裏唄集 - Hidden Songs of Ukiyo", // 後方互換のため残す
    titleJa: "裏唄集",
    titleEn: "Hidden Songs of Ukiyo",
    subtitle: "1st Album",
    releaseDate: "2026.03.26",
    artwork: "images/albums/album-01.png",             // アルバムアートワーク（例: "images/albums/album-01.jpg"）
    coverColor: "#261408",
    coverAccent: "#c9a84c",
    description: "鏡面人世ファーストアルバム。全8曲収録。",
    trackCount: 8,
    concept: "現代社会の闇を江戸鏡が映し出す。"
  },
  {
    id: "album-02",
    title: "人情景 - Life in Ukiyo", // 後方互換のため残す
    titleJa: "人情景",
    titleEn: "Life in Ukiyo",           // 英語タイトルなし → 非表示
    subtitle: "2nd Album",
    releaseDate: "2026.07.02",
    artwork: "images/albums/album-02.png",             // アルバムアートワーク（例: "images/albums/album-02.jpg"）
    coverColor: "#261408",
    coverAccent: "#e0c97a",
    description: "セカンドアルバム。全7曲収録。",
    trackCount: 7,
    concept: "笑えど泣けど生き暮らす。長屋、人の世、此処にあり。"
  }
];

// サイト基本情報
const SITE_INFO = {
  artistName: "鏡面人世",
  artistNameReading: "きょうめんじんせ",
  catchphrase: "浮世を映す鏡〜The Mirror of the Floating World〜",
  description: "鏡面人世（きょうめんじんせ）は、江戸視点で現世を奏でる音楽プロジェクト。",

// ── サイトURL（canonicalやOGP生成に使用） ──
  siteUrl: "https://kyomenjinse.com",

  // ── SNSリンク（URLをここに入力してください） ──
  youtubeUrl:   "https://youtube.com/@kyomenjinse",
  tiktokUrl:    "https://www.tiktok.com/@kyomenjinse",
  instagramUrl: "https://www.instagram.com/kyomenjinse",
};

/**
 * ニュース一覧
 * =====================================================
 * 新しいニュースを追加する場合は配列の先頭に追記してください（新しい順）。
 *
 * 各項目：
 * - date : 日付（例: "2026.06.10"）
 * - tag  : カテゴリ（例: "RELEASE" "LIVE" "INFO" "NEW" "UPDATE"）
 * - text : 本文
 * - url  : リンク先（任意。不要なら行ごと削除してOK）
 */
const NEWS = [
  // ↓ ここに追記（新しいものを上に）
 {
  date: "2026.07.07",
  tag:  "Streaming",
  text: "Single「子守下手 - A Clumsy Lullaby」AppleMusic,YoutubeMusicにてストリーミング配信開始！他ストアも順次配信予定。",
  url:  "https://kyomenjinse.bandcamp.com/album/life-in-ukiyo"
  },
  {
  date: "2026.07.02",
  tag:  "Release",
  text: "2nd Album「人情景 - Life in Ukiyo」Bandcampにてリリース販売開始！",
  url:  "https://kyomenjinse.bandcamp.com/album/life-in-ukiyo"
  },
  {
  date: "2026.06.25",
  tag:  "Streaming",
  text: "Single「日々上々 - Days Getting Better」ストリーミング配信開始！",
  url:  "https://kyomenjinse.bandcamp.com/album/life-in-ukiyo"
  },
];
