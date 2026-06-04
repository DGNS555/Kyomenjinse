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
    previewAudio: "audio/鏡面人世 - 銭の花道.mp3",        // 試聴音源パス（例: "audio/01-preview.mp3"）
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
Don’t just laugh and turn away—
Face the eyes you try to flee.
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
    previewAudio: "audio/鏡面人世 - 鬼は内.mp3",        // 試聴音源パス（例: "audio/02-preview.mp3"）
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
    previewAudio: "audio/鏡面人世 - 欲世.mp3",        // 試聴音源パス（例: "audio/03-preview.mp3"）
    bandcamp: "https://kyomenjinse.bandcamp.com",            // BandcampのURL
    base: "https://kyoumenjinse.base.shop"                 // BASEのURL
  },
  {
    id: "04",
    title: "砂時計の砂",
    reading: "すなどけいのすな",
    album: "album-02",
    track: 1,
    releaseDate: "2024.09.10",
    youtubeId: "dQw4w9WgXcQ",
    description: "時間という砂が指の間からこぼれていく、哀愁のミドルテンポ。",
    lyricsJa: `砂が落ちていく
止められない時間の中で
あなたのことを
何度思い返しただろう

ひっくり返せば
また始まるけれど
同じ時間は
二度と戻らない

　砂時計の砂よ
　もっとゆっくり落ちてくれ
　あの日に戻れるなら
　何を変えるだろう

形のない後悔と
消えない温もりを抱えて
今日も砂が落ちていく
さらさら、さらさらと`,
    lyricsEn: `The sand falls—
in time that cannot be stopped,
how many times have I
thought back to you?

Turn it over
and it starts again,
but the same moment
never returns.

　Sand of the hourglass,
　fall a little slower.
　If I could go back to that day,
　what would I change?

Carrying formless regret
and a warmth that won't fade,
the sand falls again today—
softly, softly.`,
    tags: ["時間", "後悔", "ミドルテンポ"],
    color: "",
    artwork: "",                 // 曲ジャケット画像（例: "images/songs/04.jpg"）
    previewAudio: "",        // 試聴音源パス（例: "audio/04-preview.mp3"）
    bandcamp: "",            // BandcampのURL
    base: ""                 // BASEのURL
  },
  {
    id: "05",
    title: "透明な火",
    reading: "とうめいなひ",
    album: "album-02",
    track: 2,
    releaseDate: "2024.09.10",
    youtubeId: "dQw4w9WgXcQ",
    description: "見えないけれど確かに燃えている。感情の核にある、静かな衝動の歌。",
    lyricsJa: `見えないけど燃えている
胸の奥の透明な火
誰にも気づかれないまま
ずっと揺れ続けている

怒りでも悲しみでもなく
ただ在り続けようとする意志
それだけが私を動かす
冷えた世界の真ん中で

　消えないで、その火よ
　小さくてもいい
　透明でも構わない
　ただ在り続けて

嵐が過ぎてもまだ灯る
誰かに見えなくてもいい
私だけが知っている
この胸に宿る透明な火`,
    lyricsEn: `Invisible, yet burning—
a transparent flame deep in my chest,
unnoticed by anyone,
flickering on and on.

Not anger, not sorrow—
just the will to keep existing.
That alone moves me,
here in the center of a cold world.

　Don't go out, that flame—
　small is fine.
　Transparent is fine.
　Just keep burning.

Still lit after every storm,
it doesn't matter if no one sees.
Only I know it—
this transparent fire living in my chest.`,
    tags: ["衝動", "意志", "静かな強さ"],
    color: "#1e1208",
    artwork: "",                 // 曲ジャケット画像（例: "images/songs/05.jpg"）
    previewAudio: "",        // 試聴音源パス（例: "audio/05-preview.mp3"）
    bandcamp: "",            // BandcampのURL
    base: ""                 // BASEのURL
  },
  {
    id: "06",
    title: "月下の独白",
    reading: "げっかのどくはく",
    album: "album-02",
    track: 3,
    releaseDate: "2024.09.10",
    youtubeId: "dQw4w9WgXcQ",
    description: "月の下でひとり語りかける、誰にも届かないはずの言葉たち。",
    lyricsJa: `月よ、聞いているか
誰にも言えない話を
今夜だけあなたに
全部打ち明けてもいいか

笑っているふりをして
泣きそうになる夜がある
それでも朝になれば
また誰かの前に立つ

　月だけが知っている
　私の本当の声を
　丸く欠けても
　見守ってくれている

月下の独白を終えて
少しだけ軽くなった気がした
また明日も生きていける
そんな気がしてきた`,
    lyricsEn: `Moon, are you listening?
To the things I can tell no one—
just for tonight, may I
confess everything to you?

There are nights when I pretend to smile
while on the verge of tears.
Even so, when morning comes
I stand before someone again.

　Only the moon knows
　my true voice—
　even when it wanes and breaks,
　it watches over me.

When the monologue under the moon ends,
I feel just a little lighter.
I think I can live through tomorrow too—
that's how it feels.`,
    tags: ["独白", "月", "深夜"],
    color: "#251508",
    artwork: "",                 // 曲ジャケット画像（例: "images/songs/06.jpg"）
    previewAudio: "",        // 試聴音源パス（例: "audio/06-preview.mp3"）
    bandcamp: "",            // BandcampのURL
    base: ""                 // BASEのURL
  },
  {
    id: "07",
    title: "影遊び",
    titleEn: "Play with Shadows",
    reading: "かげあそび",
    album: "album-01",
    track: 4,
    releaseDate: "2026.02.26",
    youtubeId: "",
    artwork: "images/songs/影遊び.png",
    previewAudio: "audio/鏡面人世 - 影遊び.mp3",
    bandcamp: "https://kyomenjinse.bandcamp.com/album/hidden-songs-of-ukiyo",
    base: "",
    description: "夕焼けの影遊び――気づけば隣に居るのは、自分ではない“もうひとつの影”。",
    lyricsJa: ``,
    lyricsEn: ``,
    tags: ["Folk", "夕焼け", "影"],
    color: ""
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
    title: "乾いた季節に", // 後方互換のため残す
    titleJa: "乾いた季節に",
    titleEn: "",           // 英語タイトルなし → 非表示
    subtitle: "2nd Album",
    releaseDate: "2024.09.10",
    artwork: "",             // アルバムアートワーク（例: "images/albums/album-02.jpg"）
    coverColor: "#261408",
    coverAccent: "#e0c97a",
    description: "乾燥した空気の中で、それでも生き続けようとする意志を刻んだセカンドアルバム。砂や火、月などの自然のモチーフを通じて、内なる感情を描く。",
    trackCount: 7,
    concept: "乾いているから、火がつく。"
  }
];

// サイト基本情報
const SITE_INFO = {
  artistName: "鏡面人世",
  artistNameReading: "きょうめんじんせ",
  catchphrase: "浮世を映す鏡〜The Mirror of the Floating World〜",
  description: "鏡面人世（きょうめんじんせ）は、江戸視点で現世を奏でる音楽プロジェクト。",

  // ── SNSリンク（URLをここに入力してください） ──
  youtubeUrl:   "https://youtube.com/@kyomenjinse",   // 例: "https://www.youtube.com/@xxxxxx"
  tiktokUrl:    "https://www.tiktok.com/@kyomenjinse",   // 例: "https://www.tiktok.com/@xxxxxx"
  instagramUrl: "https://www.instagram.com/kyomenjinse",   // 例: "https://www.instagram.com/xxxxxx"
};
