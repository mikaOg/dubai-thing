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
  excerpt: string;
  highlights: string[];
  includes: string[];
  excludes: string[];
  itinerary: { day: string; title: string; detail: string }[];
};

export const tours: Tour[] = [
  {
    slug: 'danakil-depression-expedition',
    title: 'Danakil Depression Expedition',
    location: 'Afar Region, Ethiopia',
    duration: '4 Days / 3 Nights',
    groupSize: '2–12 people',
    difficulty: 'Challenging',
    price: 650,
    rating: 4.9,
    reviews: 214,
    image: '/tours/danakil.jpg',
    excerpt:
      'Walk across one of the hottest and most surreal landscapes on Earth — neon sulphur springs, salt flats and live volcanoes.',
    highlights: [
      'Stand at the rim of Erta Ale lava lake',
      'Explore the psychedelic Dallol sulphur fields',
      'Camp under desert stars with Afar guides',
      'Cross the endless salt flats of Lake Assal',
    ],
    includes: [
      'Professional English-speaking guide',
      '4x4 transport with driver',
      'All camping equipment',
      'All meals during the trek',
      'Park and region permits',
      'Scout and local Afar guide fees',
    ],
    excludes: ['International flights', 'Travel insurance', 'Personal expenses', 'Tips'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Mekelle → Hamedela',
        detail:
          'Depart Mekelle in the morning and drive across the desert to Hamedela. Settle into camp and watch the sunset over the salt pans.',
      },
      {
        day: 'Day 2',
        title: 'Dallol Sulphur Springs',
        detail:
          'Early start to Dallol, the hottest inhabited place on Earth. Explore acid pools, salt chimneys and mineral formations in every colour.',
      },
      {
        day: 'Day 3',
        title: 'Erta Ale Volcano',
        detail:
          'Drive to the base of Erta Ale and hike 3 hours to the summit. Spend the night at the rim watching the lava lake glow.',
      },
      {
        day: 'Day 4',
        title: 'Salt Caravan → Mekelle',
        detail:
          'Descend at sunrise, visit a traditional salt caravan cutting blocks by hand, then return to Mekelle.',
      },
    ],
  },
  {
    slug: 'erta-ale-volcano-trek',
    title: 'Erta Ale Volcano Trek',
    location: 'Afar Region, Ethiopia',
    duration: '3 Days / 2 Nights',
    groupSize: '2–10 people',
    difficulty: 'Challenging',
    price: 520,
    rating: 4.8,
    reviews: 168,
    image: '/tours/erta-ale.jpg',
    excerpt:
      'A focused trek to the world’s longest-existing lava lake. Hike at night, sleep at the crater rim, wake to a glowing sky.',
    highlights: [
      'Night hike to the crater rim',
      'Overnight camp beside an active lava lake',
      'Traditional Afar village visit',
      'Sunrise over the Danakil plains',
    ],
    includes: [
      'Guide and Afar scouts',
      '4x4 transport',
      'Camping gear and mattresses',
      'All meals',
      'Permits',
    ],
    excludes: ['Flights', 'Insurance', 'Tips', 'Personal gear'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Mekelle → Base Camp',
        detail: 'Drive to the volcano base, dinner and briefing, then begin the night hike.',
      },
      {
        day: 'Day 2',
        title: 'Crater Rim',
        detail: 'Reach the rim before midnight. Camp and watch the lava lake through the night.',
      },
      {
        day: 'Day 3',
        title: 'Descend → Mekelle',
        detail: 'Sunrise descent, visit a salt caravan, drive back to Mekelle.',
      },
    ],
  },
  {
    slug: 'dallol-sulphur-springs',
    title: 'Dallol Sulphur Springs Day Trip',
    location: 'Dallol, Afar',
    duration: '2 Days / 1 Night',
    groupSize: '2–14 people',
    difficulty: 'Easy',
    price: 380,
    rating: 4.7,
    reviews: 142,
    image: '/tours/dallol.jpg',
    excerpt:
      'The most colourful place on the planet. Acid pools, salt towers and neon-green springs in a single unforgettable day.',
    highlights: [
      'Neon green and yellow acid pools',
      'Salt mountain formations',
      'Potash and sulphur deposits',
      'Photography paradise at golden hour',
    ],
    includes: ['Guide', '4x4 transport', 'Camping', 'Meals', 'Permits'],
    excludes: ['Flights', 'Insurance', 'Tips'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Hamedela → Dallol',
        detail: 'Drive to Dallol and spend the afternoon exploring the sulphur fields.',
      },
      {
        day: 'Day 2',
        title: 'Salt Flats → Return',
        detail: 'Morning at the salt flats, then return to Mekelle.',
      },
    ],
  },
  {
    slug: 'lake-assal-salt-caravan',
    title: 'Lake Assal & Salt Caravan',
    location: 'Afar Region, Ethiopia',
    duration: '3 Days / 2 Nights',
    groupSize: '2–12 people',
    difficulty: 'Moderate',
    price: 450,
    rating: 4.8,
    reviews: 97,
    image: '/tours/assal.jpg',
    excerpt:
      'Travel with the legendary camel caravans that have crossed these salt flats for centuries.',
    highlights: [
      'Camel caravan trekking',
      'Salt block cutting demonstration',
      'Lake Assal sunset',
      'Afar cultural evening',
    ],
    includes: ['Guide', '4x4 transport', 'Camping', 'Meals', 'Permits'],
    excludes: ['Flights', 'Insurance', 'Tips'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrive Hamedela',
        detail: 'Drive from Mekelle, set up camp, evening at the salt lake.',
      },
      {
        day: 'Day 2',
        title: 'Caravan Day',
        detail: 'Walk with the camel caravan and learn traditional salt extraction.',
      },
      {
        day: 'Day 3',
        title: 'Return',
        detail: 'Sunrise at Lake Assal, then drive back to Mekelle.',
      },
    ],
  },
  {
    slug: 'afar-salt-flats-camping',
    title: 'Afar Salt Flats Camping Adventure',
    location: 'Danakil, Afar',
    duration: '5 Days / 4 Nights',
    groupSize: '2–12 people',
    difficulty: 'Moderate',
    price: 790,
    rating: 4.9,
    reviews: 76,
    image: '/tours/afar.jpg',
    excerpt:
      'Our deepest desert journey — five days across salt, sulphur and volcanic terrain with full camping support.',
    highlights: [
      'Erta Ale lava lake',
      'Dallol sulphur fields',
      'Lake Assal salt flats',
      'Two nights wild camping',
    ],
    includes: ['Guide', '4x4 transport', 'Full camp setup', 'All meals', 'Permits'],
    excludes: ['Flights', 'Insurance', 'Tips'],
    itinerary: [
      { day: 'Day 1', title: 'Mekelle → Hamedela', detail: 'Drive and camp.' },
      { day: 'Day 2', title: 'Dallol', detail: 'Full day at the sulphur springs.' },
      { day: 'Day 3', title: 'Salt Flats', detail: 'Cross to Lake Assal and camp.' },
      { day: 'Day 4', title: 'Erta Ale', detail: 'Night hike and crater camp.' },
      { day: 'Day 5', title: 'Return to Mekelle', detail: 'Sunrise descent and drive back.' },
    ],
  },
  {
    slug: 'danakil-photography-tour',
    title: 'Danakil Photography Tour',
    location: 'Afar Region, Ethiopia',
    duration: '6 Days / 5 Nights',
    groupSize: '4–8 people',
    difficulty: 'Moderate',
    price: 980,
    rating: 5.0,
    reviews: 41,
    image: '/tours/photography.jpg',
    excerpt:
      'Built around light, not miles. Timed arrivals at Dallol, Erta Ale and the salt caravans for the best possible shots.',
    highlights: [
      'Golden hour at Dallol',
      'Night lava lake photography',
      'Caravan silhouettes at dawn',
      'Small group, photography-focused guide',
    ],
    includes: ['Photographer guide', '4x4 transport', 'Camping', 'All meals', 'Permits'],
    excludes: ['Flights', 'Insurance', 'Camera gear', 'Tips'],
    itinerary: [
      { day: 'Day 1', title: 'Arrive Mekelle', detail: 'Briefing and gear check.' },
      { day: 'Day 2', title: 'Hamedela', detail: 'Sunset over the salt pans.' },
      { day: 'Day 3', title: 'Dallol', detail: 'Golden hour and blue hour shoots.' },
      { day: 'Day 4', title: 'Caravan Day', detail: 'Dawn shoot with the salt caravans.' },
      { day: 'Day 5', title: 'Erta Ale', detail: 'Night hike and lava lake shoot.' },
      { day: 'Day 6', title: 'Return', detail: 'Descend and drive to Mekelle.' },
    ],
  },
];

export function getTour(slug: string) {
  return tours.find((t) => t.slug === slug);
}
