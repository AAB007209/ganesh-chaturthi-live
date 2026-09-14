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
    note: 'Sandhya aarti as the light turns. The whole lane sings Sukhkarta Dukhharta together.',
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
  { id: 'vakratunda', title: 'Vakratunda Mahakaya', artist: 'Suresh Wadkar', dur: 230, yt: 'BRL8z-UAGDo', art: ['#4B2E83', '#E9A93C'], moods: ['meditative', 'peaceful'], times: ['morning', 'night'] },
  { id: 'sukhkarta', title: 'Sukhkarta Dukhharta', artist: 'Lata Mangeshkar', dur: 312, yt: 'h85xdHRX5T4', art: ['#8E2436', '#F3C05A'], moods: ['devotional', 'peaceful'], times: ['morning', 'evening'] },
  { id: 'atharva', title: 'Ganapati Atharvashirsha', artist: 'Traditional chant', dur: 425, yt: '-NzffqdFu9Q', art: ['#123A46', '#D8C6A6'], moods: ['meditative', 'spiritual'], times: ['morning', 'night'] },
  { id: 'shendur', title: 'Shendur Laal Chadhayo', artist: 'Traditional aarti', dur: 258, yt: 'vVgz3Pg-EMs', art: ['#A83B2A', '#F5D08A'], moods: ['devotional'], times: ['morning', 'evening'] },
  { id: 'omkar', title: 'Omkar Swaroopa', artist: 'Ravindra Sathe', dur: 289, yt: '2gxvEnH-Lgs', art: ['#2C3F6B', '#E9A93C'], moods: ['spiritual', 'devotional'], times: ['morning', 'evening'] },
  { id: 'ganraj', title: 'Ganraj Rangi Nachto', artist: 'Traditional', dur: 271, yt: 'egz1xOLfKRA', art: ['#7A1F3D', '#F0A93C'], moods: ['devotional', 'festive'], times: ['morning', 'evening'] },
  { id: 'gajanana', title: 'Gajanana', artist: 'Sukhwinder Singh', dur: 281, yt: 'KJF8t-BWVRM', art: ['#B5472E', '#FFD98A'], moods: ['festive', 'energetic'], times: ['evening', 'night'] },
  { id: 'devashree', title: 'Deva Shree Ganesha', artist: 'Ajay-Atul', dur: 295, yt: 'RCCYorPLJmQ', art: ['#C0341C', '#F7C356'], moods: ['energetic', 'festive'], times: ['evening', 'night'] },
  { id: 'mouryare', title: 'Mourya Re', artist: 'Shankar Mahadevan', dur: 255, yt: '8jff2wz3Hpk', art: ['#8A2B12', '#F0782B'], moods: ['energetic', 'festive'], times: ['evening', 'night'] },
  { id: 'morya', title: 'Morya Morya', artist: 'Traditional', dur: 244, yt: 'Abv3Rc3aTkY', art: ['#6B2E1F', '#E9A93C'], moods: ['festive'], times: ['night'] },
  { id: 'jaidev', title: 'Jai Dev Jai Dev', artist: 'Traditional aarti', dur: 198, yt: 'lvtiy6szfwQ', art: ['#3F2A5E', '#F3C05A'], moods: ['devotional', 'spiritual'], times: ['evening', 'night'] },
  { id: 'shanti', title: 'Shanti Path', artist: 'Traditional chant', dur: 336, yt: 'LA6Cx5axjbE', art: ['#14283A', '#C9B79A'], moods: ['meditative', 'peaceful'], times: ['night', 'morning'] },
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
  murti: {
    label: 'The idol on the plinth', eyebrow: 'The guest', title: 'Ten days in the house',
    body: [
      'For these ten days the idol is not an object in a shrine. He is a guest: woken in the morning, bathed, dressed, fed twice a day, sung to at dawn and dusk.',
      'The clay is chosen with the ending in mind. River clay dissolves; plaster does not, which is why so many mandals have gone back to the older material.',
      'Everything around him — the arch, the garlands, the fruit at his feet — is rebuilt from scratch every year by the people who live on this lane.',
    ],
  },
  diya: {
    label: 'The aarti trays held by the crowd', eyebrow: 'The light', title: 'The diya',
    body: [
      'A clay cup, oil or ghee, a twist of cotton. The diya is the oldest thing in the frame, and the cheapest.',
      'Lamps are lit at dusk and again for aarti, when the flame is circled before the idol and then passed around so everyone can hold their hands over it and touch them to their eyes.',
      'One is enough to see by. The reason there are hundreds is that everybody brings their own.',
    ],
  },
  marigold: {
    label: 'The marigold strands overhead', eyebrow: 'The decoration', title: 'Why marigolds everywhere?',
    body: [
      'Zendu — marigold — is the flower of Indian festival because it is stubborn. It holds its colour for days off the stem and grows almost anywhere.',
      'The strands are strung by hand in the days before, usually by whoever in the lane is free. A long garland is called a toran, and it marks a threshold: you are entering somewhere.',
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
  },
  aarti: {
    label: 'The priest performing aarti', eyebrow: 'The ritual', title: 'What the aarti is doing',
    body: [
      'The lamp is circled clockwise before the idol while the whole lane sings — the same five or six verses that everyone here learned as a child.',
      'It closes with the flame carried out into the crowd. You pass your palms over it and touch them to your forehead; the light is meant to be taken away, not left behind.',
      'Then prasad goes around, and the street goes back to being a street until the next one.',
    ],
  },
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
  { text: 'Ten days, one guest in the house' },
  { text: 'Public since 1893' },
];

export const CHAPTERS = [
  {
    num: '01', era: 'The deity',
    icon: 'M12 3c-2.4 2.2-3.6 4.3-3.6 6.3 0 2 1.6 3.7 3.6 3.7s3.6-1.7 3.6-3.7C15.6 7.3 14.4 5.2 12 3zM7 20.5c1.2-1.2 3-1.8 5-1.8s3.8.6 5 1.8M12 13v6',
    title: 'The one you greet first',
    body: 'Before any journey, any wedding, any new shop or exam or ledger — Ganesha is greeted first. He is Vighnaharta, remover of obstacles, and Buddhi-data, giver of intelligence.',
    body2: 'The elephant head holds the story most people know: Parvati shaped a boy from turmeric paste to guard her door, Shiva returned to find a stranger refusing him entry, and what followed was repaired with the head of the first creature found facing north.',
    pull: 'Read another way, the form is instruction — large ears to listen, small eyes to concentrate, a trunk strong enough to uproot a tree and fine enough to lift a needle.',
  },
  {
    num: '02', era: 'Origins',
    icon: 'M12 3l1.9 4.3 4.6.5-3.4 3.1.9 4.6L12 13.3 8 15.5l.9-4.6L5.5 7.8l4.6-.5L12 3zM12 17v4',
    title: 'From household shrine to Chaturthi',
    body: 'Ganesha worship is old, layered and largely domestic. Verses in the Puranas fix his place at the head of every rite; the Ganapati Atharvashirsha gives him a devotional text of his own.',
    body2: 'Ganesh Chaturthi marks his birth, on the fourth day of the waxing moon in Bhadrapada. For centuries it was a household observance — an idol of river clay, a family puja, a quiet immersion in the nearest water.',
    pull: 'For most of its life this was a festival you would only see if you were invited inside.',
  },
  {
    num: '03', era: 'Patronage',
    icon: 'M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6',
    title: 'The Peshwa street',
    body: 'Under the Peshwas in eighteenth-century Pune the festival stepped outside. Rulers sponsored public celebration, and the city built the habit of a shared civic occasion around it.',
    body2: 'When that patronage ended with the fall of the Peshwa state, the public festival receded. It went back indoors, and stayed there for most of a century.',
    pull: 'Without someone to fund it, the celebration simply went back behind closed doors.',
  },
  {
    num: '04', era: '1893',
    icon: 'M4 21V6l8-3v18M12 21V9l8 3v9M8 9h.01M8 13h.01M16 15h.01',
    title: 'Tilak makes it public',
    body: 'Colonial law restricted political assembly. It did not restrict religious assembly. In 1893 Bal Gangadhar Tilak began organising the Sarvajanik Ganeshotsav — the people’s Ganesh festival — in Pune.',
    body2: 'Idols were installed in public mandaps, funded by neighbourhood subscription, open to anyone who walked in. Ten days of lectures, songs, theatre and debate.',
    pull: 'Ten days of lawful crowd. A festival that was also a meeting, in plain sight.',
  },
  {
    num: '05', era: 'The mandal',
    icon: 'M16 20v-2a4 4 0 0 0-8 0v2M12 12a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zM5.5 20v-1.5a3 3 0 0 1 2-2.8M18.5 20v-1.5a3 3 0 0 0-2-2.8',
    title: 'A festival the street runs itself',
    body: 'What Tilak started outlived its politics. The mandal — the neighbourhood committee — became the real institution: collecting funds, commissioning the idol, feeding visitors, arranging the pathak, organising the visarjan.',
    body2: 'Because the mandap sits on public ground, it belongs to whoever arrives. In Mumbai’s older lanes the queues run for hours and hold every kind of person the city has.',
    pull: 'Nobody owns the mandap. That is the whole design.',
  },
  {
    num: '06', era: 'Now',
    icon: 'M3 15c1.8 0 1.8-1.5 3.6-1.5S8.4 15 10.2 15s1.8-1.5 3.6-1.5S15.6 15 17.4 15s1.8-1.5 3.6-1.5M3 19.5c1.8 0 1.8-1.5 3.6-1.5s1.8 1.5 3.6 1.5 1.8-1.5 3.6-1.5 1.8 1.5 3.6 1.5 1.8-1.5 3.6-1.5M12 3v7M9 6l3-3 3 3',
    title: 'Ten days, then the water',
    body: 'The festival still ends the way it always did. On Anant Chaturdashi the idol is carried out through the streets it arrived by, and given to the water.',
    body2: 'Plaster and chemical paint have made that ending costly, and a slow shift is underway — back to river clay, to natural colour, to immersion tanks that let a city keep its lakes.',
    pull: 'What you welcome with love, you also learn to release. The parting line has not changed: come early next year.',
  },
];

export const ABOUT_STATS = [
  { icon: 'M12 3v3M5.6 5.6l2.1 2.1M3 12h3M5.6 18.4l2.1-2.1M12 21v-3M18.4 18.4l-2.1-2.1M21 12h-3M18.4 5.6l-2.1 2.1M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z', value: 'Three modes', label: 'The scene follows your clock' },
  { icon: 'M9 18V6l10-2v12M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM19 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z', value: 'Twelve songs', label: 'Grouped by time of day' },
  { icon: 'M12 21s-7-4.4-7-9.5A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 7 3.5C19 16.6 12 21 12 21z', value: 'Hotspots', label: 'Things on the street, explained' },
];

export const ABOUT_SECTIONS = [
  {
    icon: 'M12 21s-7-4.4-7-9.5A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 7 3.5C19 16.6 12 21 12 21z',
    title: 'How this came about',
    body: 'Every year the lane outside my house turns into a pandal — lights strung between balconies, a speaker that never sleeps, camphor in the air after the evening aarti. Living away from it, I wanted a single page that gives that street back.',
    points: [
      { text: 'A night scene instead of a homepage — you arrive already inside the festival.' },
      { text: 'The hour you open it in decides the light, the note in the corner and what plays.' },
      { text: 'The story kept in its own room, for whoever is curious enough to open it.' },
    ],
  },
];

export const ABOUT_LINKS = [
  { label: 'Ganesh Chaturthi — background reading', note: 'add link' },
  { label: 'Aarti and bhajan credits', note: 'add link' },
  { label: 'Illustration source', note: 'add link' },
  { label: 'Source code', note: 'github' },
];

export const NAV_ITEMS = [
  { key: 'home', label: 'Home' },
  { key: 'music', label: 'Music' },
  { key: 'story', label: 'The Story' },
  { key: 'about', label: 'About' },
];
