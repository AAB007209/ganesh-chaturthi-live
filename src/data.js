export const PHASES = [
  {
    key: 'morning', label: 'Morning', from: 5, to: 12,
    note: 'Kakad aarti at first light. Bells, camphor, and the first modak of the day placed at his feet.',
    img: 'morning', light: true, bgPos: '50% 50%',
    tint: 'rgba(255,232,190,.18)', filter: 'brightness(1) saturate(1.02) contrast(1)',
    icon: 'M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z',
    moods: ['peaceful', 'devotional'],
  },
  {
    key: 'evening', label: 'Afternoon–Evening', from: 12, to: 19,
    note: 'Sandhya aarti at dusk. Devotees gather before Bappa with flowers, diyas and prayers',
    img: 'sunset', light: true, bgPos: '50% 46%',
    tint: 'rgba(255,150,60,.2)', filter: 'brightness(1.02) saturate(1.06) contrast(1.02)',
    icon: 'M12 10V4M4.9 9.9l1.4 1.4M2 18h2M20 18h2M17.7 11.3l1.4-1.4M22 22H2M16 6l-4 4-4-4M16 18a4 4 0 0 0-8 0',
    moods: ['festive', 'devotional'],
  },
  {
    key: 'night', label: 'Night', from: 19, to: 5,
    note: 'Shej aarti, the last of the day. Prasad goes round, then everyone heads home.',
    img: 'night', light: false, bgPos: '50% 50%',
    tint: 'rgba(90,130,255,.1)', filter: 'none',
    icon: 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z',
    moods: ['energetic', 'meditative'],
  },
];

// Only night-2 artwork is used for the 'night' phase (see stageImage()).
export const STAGE_IMAGE = { morning: 'ganesh-morning.png', sunset: 'ganesh-sunset.png', night: 'ganesh-night-2.png' };

export const SONGS = [
  // Morning
  { id: 'ekadantaya', title: 'Ekadantaya Vakratundaya', artist: 'Shankar Mahadevan', dur: 360, yt: 're88S-5fpmA', art: ['#3A2A5E', '#E9A93C'], moods: ['meditative', 'devotional'], times: ['morning'] },
  { id: 'vakratunda', title: 'Vakratunda Mahakaya', artist: 'Suresh Wadkar', dur: 230, yt: 'BRL8z-UAGDo', art: ['#4B2E83', '#E9A93C'], moods: ['meditative', 'peaceful'], times: ['morning'] },
  { id: 'ganeshdhun', title: 'Ganesh Dhun', artist: 'Shankar Mahadevan', dur: 297, yt: 'aLlJpfr0mV0', art: ['#8A2B12', '#E9A93C'], moods: ['meditative', 'devotional'], times: ['morning'] },
  { id: 'ganeshchalisa', title: 'Ganesh Chalisa', artist: 'Shankar Mahadevan', dur: 300, yt: 'JNCnzcVIcuw', art: ['#123A46', '#E9A93C'], moods: ['meditative', 'devotional'], times: ['morning'] },
  { id: 'omgan', title: 'Om Gan Ganpataye Namo Namah', artist: 'Shankar Mahadevan', dur: 367, yt: 'c_063To9M8o', art: ['#2C3F6B', '#D8C6A6'], moods: ['meditative', 'devotional'], times: ['morning'] },
  { id: 'morya', title: 'Morya Morya', artist: 'Manish Rajgire', dur: 244, yt: 'Abv3Rc3aTkY', art: ['#6B2E1F', '#E9A93C'], moods: ['festive'], times: ['morning'] },
  { id: 'omkar', title: 'Omkar Swaroopa', artist: 'Ravindra Sathe', dur: 289, yt: '2gxvEnH-Lgs', art: ['#2C3F6B', '#E9A93C'], moods: ['spiritual', 'devotional'], times: ['morning'] },
  { id: 'shanti', title: 'Shanti Path', artist: 'Traditional chant', dur: 336, yt: 'LA6Cx5axjbE', art: ['#14283A', '#C9B79A'], moods: ['meditative', 'peaceful'], times: ['morning'] },
  // Afternoon–Evening
  { id: 'sukhkarta', title: 'Sukhkarta Dukhharta', artist: 'Lata Mangeshkar', dur: 312, yt: 'h85xdHRX5T4', art: ['#8E2436', '#F3C05A'], moods: ['devotional', 'peaceful'], times: ['evening'] },
  { id: 'shendur', title: 'Shendur Laal Chadhayo', artist: 'Ravindra Sathe', dur: 258, yt: 'vVgz3Pg-EMs', art: ['#A83B2A', '#F5D08A'], moods: ['devotional'], times: ['evening'] },
  { id: 'ganraj', title: 'Ganraj Rangi Nachto', artist: 'Lata Mangeshkar', dur: 271, yt: 'egz1xOLfKRA', art: ['#7A1F3D', '#F0A93C'], moods: ['devotional', 'festive'], times: ['evening'] },
  { id: 'jaidev', title: 'Jai Dev Jai Dev', artist: 'Traditional aarti', dur: 198, yt: 'lvtiy6szfwQ', art: ['#3F2A5E', '#F3C05A'], moods: ['devotional', 'spiritual'], times: ['evening'] },
  { id: 'heyganaraya', title: 'Hey Ganaraya', artist: 'Divya Kumar', dur: 292, yt: 'v10jDT7SJsw', art: ['#B5472E', '#F0A93C'], moods: ['festive', 'energetic'], times: ['evening'] },
  { id: 'ganraya', title: 'Ganraya', artist: 'Snigdhajit Bhowmik, Fukra Insaan', dur: 232, yt: '8LBjCghCyvA', art: ['#C0341C', '#F2C066'], moods: ['festive', 'energetic'], times: ['evening'] },
  { id: 'heybappamorya', title: 'Hey Bappa Morya', artist: 'Sonu Nigam, Shankar Mahadevan', dur: 213, yt: 'woNa-KD1Cgg', art: ['#7A1F3D', '#F5D08A'], moods: ['devotional', 'festive'], times: ['evening'] },
  { id: 'morayavinayaka', title: 'Moraya Vinayaka', artist: 'Shankar Mahadevan', dur: 233, yt: 'rOuZ3yddxpg', art: ['#A83B2A', '#E9A93C'], moods: ['devotional', 'festive'], times: ['evening'] },
  { id: 'ganeshtandav', title: 'Ganesh Tandav Stotram', artist: 'Shankar Mahadevan', dur: 387, yt: 'OOWveA63cjI', art: ['#123A46', '#F0A93C'], moods: ['devotional', 'energetic'], times: ['evening'] },
  // Night
  { id: 'aalareganesha', title: 'Aala Re Aala Ganesha', artist: 'Wajid Khan, Ganesh Chandanshive', dur: 331, yt: 'JWHnsYVPTuI', art: ['#7A2E1E', '#F2A63C'], moods: ['festive', 'energetic'], times: ['night'] },
  { id: 'gajanana', title: 'Gajanana', artist: 'Sukhwinder Singh', dur: 281, yt: 'KJF8t-BWVRM', art: ['#B5472E', '#FFD98A'], moods: ['festive', 'energetic'], times: ['night'] },
  { id: 'devashree', title: 'Deva Shree Ganesha', artist: 'Ajay-Atul', dur: 295, yt: 'RCCYorPLJmQ', art: ['#C0341C', '#F7C356'], moods: ['energetic', 'festive'], times: ['night'] },
  { id: 'dankabaja', title: 'Danka Baja', artist: 'Dev Negi', dur: 183, yt: 'dsl8UKnLlQM', art: ['#9A2A1E', '#F5B24A'], moods: ['energetic', 'festive'], times: ['night'] },
  { id: 'ganeshanthem', title: 'Ganesh Anthem', artist: 'Shankar Mahadevan, Manjiri Iyer, Thaman S', dur: 280, yt: 'Pyeo6iNlsWs', art: ['#7A1F3D', '#F2A63C'], moods: ['energetic', 'festive'], times: ['night'] },
  { id: 'mouryare', title: 'Mourya Re', artist: 'Shankar Mahadevan', dur: 255, yt: '8jff2wz3Hpk', art: ['#8A2B12', '#F0782B'], moods: ['energetic', 'festive'], times: ['night'] },
  { id: 'shambhusutaya', title: 'Shambhu Sutaya', artist: 'Shankar Mahadevan, Vishal Dadlani', dur: 285, yt: 'DOvG7MC8i7E', art: ['#8E2C4A', '#F0A93C'], moods: ['energetic', 'festive'], times: ['night'] },
  { id: 'saddadilvitu', title: 'Sadda Dil Vi Tu (Ga Ga Ga Ganpati)', artist: 'Hard Kaur, Sachin-Jigar', dur: 329, yt: 'ILnYRHmvJOI', art: ['#A8321C', '#F5C24A'], moods: ['energetic', 'festive'], times: ['night'] },
  { id: 'bappa', title: 'Bappa', artist: 'Vishal Dadlani', dur: 220, yt: 'sHkd4XxKPdU', art: ['#7A3B12', '#F2C066'], moods: ['festive', 'energetic'], times: ['night'] },
  { id: 'rajeoraje', title: 'Raje O Raje', artist: 'Sachet-Parampara', dur: 200, yt: '_LNtu1vDeec', art: ['#3F2A5E', '#E9A93C'], moods: ['devotional', 'festive'], times: ['night'] },
  { id: 'jaishreeganesha', title: 'Jai Shree Ganesha', artist: 'Shankar Mahadevan, Siddharth Mahadevan, Shivam Mahadevan', dur: 240, yt: '2ffqE2w7aOg', art: ['#8A2B12', '#F2C066'], moods: ['devotional', 'festive'], times: ['night'] },
];

export const TOPICS = {
  modak: {
    label: 'The modak stall across the street', eyebrow: 'The offering', title: 'Why modak?',
    body: [
      'Modak is the sweet Ganesha is said to love most — a soft rice-flour shell folded around jaggery and coconut, steamed until it turns translucent.',
      'The shape carries the meaning. Plain outside, sweet at the centre: the reward of patience, of learning, of sitting with something difficult until it opens.',
      'Twenty-one are offered at the puja. Families still fold them by hand the night before the festival begins.',
    ],
  },
  marigold: {
    label: 'The marigold strands overhead', eyebrow: 'The decoration', title: 'Why marigolds everywhere?',
    body: [
      'Zendu — marigold — is the flower of Indian festival because it is stubborn. It holds its colour for days off the stem and grows almost anywhere.',
      'A long garland is called a toran, and it marks a threshold: you are entering somewhere.',
      'The colour is the point too. Orange and yellow for the sun, and for what people wish on the year ahead.',
    ],
  },
  offerings: {
    label: 'The offerings laid at his feet', eyebrow: 'Naivedya', title: 'What is offered',
    body: [
      'The plate placed before him is fixed by custom: twenty-one modaks, twenty-one blades of durva grass, red hibiscus, coconut, jaggery, bananas, and a lamp. Laddoo sits beside the modak — the motichoor and besan kind — and in much of India it is the sweet he is shown holding.',
      'Durva is the odd one out: a common lawn grass, worth nothing, offered in a bunch of twenty-one. The story goes that a demon named Analasura burned everything he looked at, and Ganesha swallowed him whole — which left a fire raging inside him. Nothing cooled it until sages brought handfuls of durva; twenty-one blades put it out.',
      'So the grass is offered for what it did, not what it cost. Twenty-one is read as the five senses, five organs of action, five vital airs, five elements, and the mind — the whole of a person, handed over. The rule most families keep is simply that the first plate of the day goes to him before anyone else eats.',
    ],
  },
  dhol: {
    label: 'The dhol-tasha pathak', eyebrow: 'The sound', title: 'The dhol',
    body: [
      'A dhol is a two-headed barrel drum, worn at the waist and struck with a curved stick on one side and the bare hand on the other. Paired with the flat tasha and the brass jhanj, it makes the sound the festival is carried on.',
      'A pathak is the troupe that plays it — often a hundred or more, mostly volunteers, rehearsing for months in a school ground before the ten days begin.',
      'They set the pace of the procession. When the drums stop, the whole street stops with them.',
    ],
  }
};

// Intrinsic artwork sizes, used to replicate background-size:cover when pinning.
export const IMG_SIZE = {
  morning: { w: 1619, h: 971 },
  sunset: { w: 1552, h: 983 },
  night: { w: 1620, h: 971 },
};

// Pin anchors as fractions of the ARTWORK, so they track the scene, not the window.
export const PINS = [
  { k: 'marigold', fx: 0.2604, fy: 0.2260 },
  { k: 'modak', fx: 0.8640, fy: 0.3798 },
  { k: 'offerings', fx: 0.5351, fy: 0.5720, minVh: 620 },
];

export const STORY_FACTS = [
  { text: 'Bhadrapada Shukla Chaturthi — his birthday' },
  { text: 'Public since 1893' },
];

export const CHAPTERS = [
  {
    num: '01', era: 'The deity',
    icon: 'M12 3c-2.4 2.2-3.6 4.3-3.6 6.3 0 2 1.6 3.7 3.6 3.7s3.6-1.7 3.6-3.7C15.6 7.3 14.4 5.2 12 3zM7 20.5c1.2-1.2 3-1.8 5-1.8s3.8.6 5 1.8M12 13v6',
    title: 'The one you greet first',
    body: 'Before any journey, any wedding, any new shop or exam or ledger — Ganesha is greeted first. He is Vighnaharta, remover of obstacles, and Buddhi-data, giver of intelligence.',
    body2: 'Ganesha was born from the love and divine power of Goddess Parvati. Wishing for a guardian of her own, she created a child from the sacred turmeric paste of her body and breathed life into him. She named him Ganesha and entrusted him with a simple duty — to guard her door and let no one enter without her permission.',
    body3: 'When Lord Shiva returned and found a young boy blocking his way, a fierce encounter followed. In the struggle, Ganesha lost his head. Seeing Parvati’s grief, Shiva promised to restore her son. The head of an elephant was placed upon him, and Ganesha was brought back to life, becoming the beloved remover of obstacles and the lord of new beginnings.',
    pull: 'Born of devotion, restored by love, and blessed with the wisdom of an elephant — Ganesha became the guardian of every beginning.',
  },
  {
    num: '02', era: 'The occasion',
    icon: 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z',
    title: 'What is Ganesh Chaturthi?',
    body: 'Ganesh Chaturthi is a celebration of the birth of Lord Ganesha, the beloved remover of obstacles and the guardian of new beginnings. It is a time when families welcome him into their homes with prayers, offerings and devotion, celebrating his presence with love and reverence.',
    body2: 'The word Chaturthi means the fourth day of the lunar fortnight. Ganesh Chaturthi falls on the fourth day of the waxing moon in the month of Bhadrapada, marking the auspicious occasion of Ganesha’s birth.',
    pull: 'The fourth day of the waxing moon, kept every year as the day Ganesha came home.',
  },
  {
    num: '03', era: 'Origins & Patronage',
    icon: 'M12 3l1.9 4.3 4.6.5-3.4 3.1.9 4.6L12 13.3 8 15.5l.9-4.6L5.5 7.8l4.6-.5L12 3zM12 17v4',
    title: 'From household shrine to public festival',
    body: 'For centuries this was a household observance — an idol of river clay, a family puja, a quiet immersion in the nearest water. It isn’t known when or how Ganesh Chaturthi first began, but Pune has celebrated it publicly since the era of Chhatrapati Shivaji, the seventeenth-century founder of the Maratha Empire. He used the celebration as a means to promote harmony and unity across castes',
    body2: 'The Peshwas who ruled after him were devotees of Ganesha in their own right, and it was they who turned that devotion into a public festival — held every year in their capital, Pune, through the month of Bhadrapad.',
    pull: 'A ruling family’s own devotion, opened up into a festival for the whole capital.',
  },
  {
    num: '04', era: '1893',
    icon: 'M4 21V6l8-3v18M12 21V9l8 3v9M8 9h.01M8 13h.01M16 15h.01',
    title: 'Tilak makes it public',
    body: 'That patronage did not survive the British Raj. Once state support fell away, the festival shrank back into a private, family observance across Maharashtra.',
    body2: 'It was Bal Gangadhar Tilak — freedom fighter and social reformer — who revived it, championing the festival as a way around the colonial government’s 1892 law banning public Hindu assembly. He relaunched it in Pune and in Girgaon, Mumbai.',
    pull: 'A law built to stop a crowd from gathering, answered with a festival the law could not touch.',
  },
  {
    num: '05', era: 'The mandal',
    icon: 'M16 20v-2a4 4 0 0 0-8 0v2M12 12a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zM5.5 20v-1.5a3 3 0 0 1 2-2.8M18.5 20v-1.5a3 3 0 0 0-2-2.8',
    title: 'A festival the street runs itself',
    body: 'What Tilak began grew into something much bigger. The mandal — the neighbourhood committee — became the heart of Ganesh Chaturthi. It is where people come together to welcome the idol, collect funds, feed visitors, arrange the pathak and prepare for the final visarjan.',
    body2: 'The mandap belongs to everyone. Set on public ground, it welcomes all who arrive. During the festival, devotees stand in long queues, patiently waiting for a glimpse of Ganesha and his blessings — united by faith, devotion and love.',
    pull: 'A shared space of faith, where every devotee arrives with a prayer and leaves with a blessing',
  },
  {
    num: '06', era: 'At present',
    icon: 'M3 15c1.8 0 1.8-1.5 3.6-1.5S8.4 15 10.2 15s1.8-1.5 3.6-1.5S15.6 15 17.4 15s1.8-1.5 3.6-1.5M3 19.5c1.8 0 1.8-1.5 3.6-1.5s1.8 1.5 3.6 1.5 1.8-1.5 3.6-1.5 1.8 1.5 3.6 1.5 1.8-1.5 3.6-1.5M12 3v7M9 6l3-3 3 3',
    title: 'Until We Meet Again',
    body: 'While the public celebration traditionally culminates on Anant Chaturdashi, many families welcome Ganesha into their homes for different durations — 1, 3, 5, 7, 11, or even 21 days — guided by their own customs, Sankalpa, and regional traditions.',
    body2: 'Whenever the time comes, the idol is carried out through the streets, accompanied by prayers, music and the familiar call of “Ganpati Bappa Morya.” And then, with love and faith, he is returned to the water. Plaster and chemical paint have made that ending costly, and a slow shift is underway — back to river clay, to natural colour, to immersion tanks that let a city keep its lakes.',
    pull: 'What we welcome with love, we learn to release with faith. The parting words remain the same: come early next year, Bappa.',
  },
];

export const ABOUT_STATS = [
  { icon: 'M12 3v3M5.6 5.6l2.1 2.1M3 12h3M5.6 18.4l2.1-2.1M12 21v-3M18.4 18.4l-2.1-2.1M21 12h-3M18.4 5.6l-2.1 2.1M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z', value: 'Three modes', label: 'The scene follows your clock' },
  { icon: 'M9 18V6l10-2v12M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM19 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z', value: `${SONGS.length} songs`, label: 'Grouped by time of day' },
  { icon: 'M12 21s-7-4.4-7-9.5A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 7 3.5C19 16.6 12 21 12 21z', value: 'Hotspots', label: 'Things on the street, explained' },
];

export const ABOUT_SECTIONS = [
  {
    icon: 'M12 21s-7-4.4-7-9.5A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 7 3.5C19 16.6 12 21 12 21z',
    title: 'How this came about',
    body: 'Every year Ganesh Chaturthi brings its own vibe and energy — streets lit up, music playing, people gathering to welcome him home. It is one of the most widely celebrated festivals across India, and I wanted a single page that gives that feeling back.',
    points: [
      { text: 'One street, staged as a living scene, carrying the music, the story and the little details of the festival.' },
      { text: 'The hour you open it in decides the light, the note in the corner and what plays.' },
      { text: 'The story kept in its own room, for whoever is curious enough to open it.' },
    ],
  },
];

export const ABOUT_IDEA = {
  body: [
    "I spend a fair bit of time on sites that take an ordinary idea and turn it into something you actually want to sit with — a radio station, a bus route, a roadside saloon. A few of these stuck with me and got me thinking about what I could build in the same spirit.",
    "Ganesh Chaturthi was right around the corner, and everyone nearby was playing Ganpati songs on loop — so the idea landed: a single page for that. It turned out to be the most fun I've had building anything.",
    "Putting it together also had me pausing more than once to check a story or a fact about Ganesha properly before writing it down — which is how the story and the street hotspots on this site came to be.",
  ],
  inspirations: [
    { label: 'Gali', url: 'https://gali-fm.vercel.app/' },
    { label: 'Bus Driver', url: 'https://busdriver.wtf/' },
    { label: 'Deluxe Saloon', url: 'https://www.deluxesaloon.space/' },
  ],
};

export const ABOUT_DISCLAIMER = 'This website is built purely for non-commercial purposes — to collect and play Ganesh songs in one place for the festival. All credit for the music belongs to the original singers, composers, lyricists and labels. No copyright or ownership is claimed over any of the songs; they are embedded here only in celebration of the festival, and will be taken down on request from a rights holder.';

export const NAV_ITEMS = [
  { key: 'home', label: 'Home' },
  { key: 'music', label: 'Music' },
  { key: 'story', label: 'The Story' },
  { key: 'about', label: 'About' },
];
