export type Tour = {
  slug: string;
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  price: number;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  excerpt: string;
  highlights: string[];
  includes: string[];
  excludes: string[];
  itinerary: { day: string; title: string; detail: string }[];
};

export const tours: Tour[] = [
  {
    slug: 'mekelle-city-rock-churches',
    title: 'Mekelle City & Rock Churches Day Tour',
    location: 'Mekelle, Tigray',
    duration: '1 Day',
    groupSize: '2–15 people',
    difficulty: 'Easy',
    price: 3500,
    rating: 4.7,
    reviews: 312,
    image: '/tours/mekelle.jpg',
    gallery: ['/tours/mekelle-1.jpg', '/tours/mekelle-2.jpg', '/tours/mekelle-3.jpg'],
    excerpt:
      'A full day in and around Mekelle — the old town, the market, the Emperor Yohannes palace and the rock-hewn churches of Tigray.',
    highlights: [
      'Mekelle old town & spice market',
      'Emperor Yohannes IV Palace',
      'Tigray rock-hewn churches',
      'Traditional coffee ceremony',
    ],
    includes: ['English-speaking guide', 'Private car', 'Entry fees', 'Lunch', 'Water'],
    excludes: ['Hotel pickup outside Mekelle', 'Tips', 'Personal purchases'],
    itinerary: [
      { day: 'Morning', title: 'Old town & market', detail: 'Walking tour of the old town, spice market and Emperor Yohannes palace.' },
      { day: 'Afternoon', title: 'Rock churches', detail: 'Drive out to the rock-hewn churches of Tigray and return for sunset.' },
    ],
  },
  {
    slug: 'lake-hashenge-day-trip',
    title: 'Lake Hashenge Day Trip',
    location: 'Southern Tigray',
    duration: '1 Day',
    groupSize: '2–12 people',
    difficulty: 'Easy',
    price: 4900,
    rating: 4.6,
    reviews: 178,
    image: '/tours/hashenge.jpg',
    gallery: ['/tours/hashenge-1.jpg', '/tours/hashenge-2.jpg', '/tours/hashenge-3.jpg'],
    excerpt:
      'A relaxed day at Lake Hashenge — crater lake, birdlife and a picnic lunch on the shore.',
    highlights: ['Crater lake views', 'Birdwatching', 'Picnic on the shore', 'Photo stops'],
    includes: ['Guide', 'Transport', 'Picnic lunch', 'Water'],
    excludes: ['Tips', 'Personal expenses'],
    itinerary: [
      { day: 'Morning', title: 'Drive to Hashenge', detail: 'Scenic drive from Mekelle through the Tigray highlands.' },
      { day: 'Afternoon', title: 'Lake & return', detail: 'Walk the shoreline, picnic lunch, return to Mekelle by evening.' },
    ],
  },
  {
    slug: 'danakil-salt-flats-day-trip',
    title: 'Danakil Salt Flats Day Trip',
    location: 'Afar Region',
    duration: '1 Day',
    groupSize: '2–10 people',
    difficulty: 'Moderate',
    price: 5900,
    rating: 4.7,
    reviews: 224,
    image: '/tours/salt-flats.jpg',
    gallery: ['/tours/salt-flats-1.jpg', '/tours/salt-flats-2.jpg', '/tours/salt-flats-3.jpg'],
    excerpt:
      'A long single-day drive into the salt flats — camel caravans, salt cutters and the endless white plains.',
    highlights: ['Camel caravans', 'Salt cutter demonstration', 'Endless salt plains', 'Afar village visit'],
    includes: ['Guide', '4x4 transport', 'Lunch', 'Water', 'Permits'],
    excludes: ['Tips', 'Insurance'],
    itinerary: [
      { day: 'Early', title: 'Drive to salt flats', detail: 'Early start from Mekelle, arrive at the salt flats by mid-morning.' },
      { day: 'Late', title: 'Return', detail: 'Explore the salt plains and caravans, then return to Mekelle.' },
    ],
  },
  {
    slug: 'dallol-sulphur-springs',
    title: 'Dallol Sulphur Springs',
    location: 'Dallol, Afar',
    duration: '2 Days / 1 Night',
    groupSize: '2–14 people',
    difficulty: 'Easy',
    price: 9900,
    rating: 4.8,
    reviews: 189,
    image: '/tours/dallol.jpg',
    gallery: ['/tours/dallol-1.jpg', '/tours/dallol-2.jpg', '/tours/dallol-3.jpg'],
    excerpt:
      'The most colourful place on Earth. Acid pools, salt towers and neon-green springs in a two-day expedition.',
    highlights: ['Neon green acid pools', 'Salt mountain formations', 'Overnight camp', 'Golden-hour photography'],
    includes: ['Guide', '4x4 transport', 'Camping', 'All meals', 'Permits'],
    excludes: ['Flights', 'Insurance', 'Tips'],
    itinerary: [
      { day: 'Day 1', title: 'Hamedela → Dallol', detail: 'Drive to Dallol and explore the sulphur fields in the afternoon light.' },
      { day: 'Day 2', title: 'Salt flats → Return', detail: 'Morning at the salt flats, then return to Mekelle.' },
    ],
  },
  {
    slug: 'erta-ale-volcano-trek',
    title: 'Erta Ale Volcano Trek',
    location: 'Afar Region',
    duration: '3 Days / 2 Nights',
    groupSize: '2–10 people',
    difficulty: 'Challenging',
    price: 24900,
    rating: 4.9,
    reviews: 412,
    image: '/tours/erta-ale.jpg',
    gallery: ['/tours/erta-ale-1.jpg', '/tours/erta-ale-2.jpg', '/tours/erta-ale-3.jpg'],
    excerpt:
      "Trek to the world's longest-existing lava lake. Night hike, crater-rim camp, unforgettable sunrise.",
    highlights: ['Night hike to the rim', 'Camp beside the lava lake', 'Afar village visit', 'Sunrise over Danakil'],
    includes: ['Guide & Afar scouts', '4x4 transport', 'Camping gear', 'All meals', 'Permits'],
    excludes: ['Flights', 'Insurance', 'Tips', 'Personal gear'],
    itinerary: [
      { day: 'Day 1', title: 'Mekelle → Base Camp', detail: 'Drive to volcano base, dinner and briefing, then begin the night hike.' },
      { day: 'Day 2', title: 'Crater Rim', detail: 'Reach the rim before midnight. Camp and watch the lava lake.' },
      { day: 'Day 3', title: 'Descend → Mekelle', detail: 'Sunrise descent, visit a salt caravan, drive back to Mekelle.' },
    ],
  },
  {
    slug: 'lake-assal-salt-caravan',
    title: 'Lake Assal & Salt Caravan',
    location: 'Afar Region',
    duration: '3 Days / 2 Nights',
    groupSize: '2–12 people',
    difficulty: 'Moderate',
    price: 31900,
    rating: 4.8,
    reviews: 147,
    image: '/tours/assal.jpg',
    gallery: ['/tours/assal-1.jpg', '/tours/assal-2.jpg', '/tours/assal-3.jpg'],
    excerpt:
      'Travel with the legendary camel caravans that have crossed these salt flats for centuries.',
    highlights: ['Camel caravan trek', 'Salt cutting demo', 'Lake Assal sunset', 'Afar cultural evening'],
    includes: ['Guide', '4x4 transport', 'Camping', 'Meals', 'Permits'],
    excludes: ['Flights', 'Insurance', 'Tips'],
    itinerary: [
      { day: 'Day 1', title: 'Arrive Hamedela', detail: 'Drive from Mekelle, camp, evening at the salt lake.' },
      { day: 'Day 2', title: 'Caravan day', detail: 'Walk with the camel caravan, learn traditional salt extraction.' },
      { day: 'Day 3', title: 'Return', detail: 'Sunrise at Lake Assal, then drive back to Mekelle.' },
    ],
  },
  {
    slug: 'danakil-depression-expedition',
    title: 'Danakil Depression Expedition',
    location: 'Afar Region',
    duration: '4 Days / 3 Nights',
    groupSize: '2–12 people',
    difficulty: 'Challenging',
    price: 49900,
    rating: 4.9,
    reviews: 264,
    image: '/tours/danakil.jpg',
    gallery: ['/tours/danakil-1.jpg', '/tours/danakil-2.jpg', '/tours/danakil-3.jpg'],
    excerpt:
      'Our classic full expedition — Dallol, Erta Ale and the salt flats, all in one journey.',
    highlights: ['Erta Ale lava lake', 'Dallol sulphur fields', 'Lake Assal salt flats', 'Two nights wild camping'],
    includes: ['Guide', '4x4 transport', 'Full camp', 'All meals', 'Permits', 'Scouts'],
    excludes: ['Flights', 'Insurance', 'Tips', 'Personal gear'],
    itinerary: [
      { day: 'Day 1', title: 'Mekelle → Hamedela', detail: 'Drive and camp.' },
      { day: 'Day 2', title: 'Dallol', detail: 'Full day at the sulphur springs.' },
      { day: 'Day 3', title: 'Erta Ale', detail: 'Night hike and crater camp.' },
      { day: 'Day 4', title: 'Return', detail: 'Sunrise descent and drive back to Mekelle.' },
    ],
  },
  {
    slug: 'danakil-photography-tour',
    title: 'Danakil Photography Tour',
    location: 'Afar Region',
    duration: '6 Days / 5 Nights',
    groupSize: '4–8 people',
    difficulty: 'Moderate',
    price: 64900,
    rating: 5.0,
    reviews: 58,
    image: '/tours/photography.jpg',
    gallery: ['/tours/photography-1.jpg', '/tours/photography-2.jpg', '/tours/photography-3.jpg'],
    excerpt:
      'Built around light, not miles. Timed arrivals for golden hour at Dallol, lava lake at night, caravans at dawn.',
    highlights: ['Golden hour at Dallol', 'Night lava lake shoot', 'Caravan silhouettes', 'Small group, pro guide'],
    includes: ['Photographer guide', '4x4 transport', 'Camping', 'All meals', 'Permits'],
    excludes: ['Flights', 'Insurance', 'Camera gear', 'Tips'],
    itinerary: [
      { day: 'Day 1', title: 'Arrive Mekelle', detail: 'Briefing and gear check.' },
      { day: 'Day 2', title: 'Hamedela', detail: 'Sunset over the salt pans.' },
      { day: 'Day 3', title: 'Dallol', detail: 'Golden + blue hour shoots.' },
      { day: 'Day 4', title: 'Caravan day', detail: 'Dawn shoot with the salt caravans.' },
      { day: 'Day 5', title: 'Erta Ale', detail: 'Night hike and lava lake shoot.' },
      { day: 'Day 6', title: 'Return', detail: 'Descend and drive to Mekelle.' },
    ],
  },
];

export function getTour(slug: string) {
  return tours.find((t) => t.slug === slug);
}
