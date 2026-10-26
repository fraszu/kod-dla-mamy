import {
  SalonLocation,
  FeatureItem,
  CollectionItem,
  GalleryItem,
  FacebookPageLink,
  SocialLink,
  SpecialOccasion,
  TailoringServiceItem,
} from '../types';

export const MDM_INFO = {
  brandName: 'MDM',
  brandSuffix: 'Moda',
  fullName: 'MDM Moda Damsko-Męska',
  sinceYear: 1996,
  experienceYears: 30,
  phoneDisplay: '+48 603 104 600',
  phoneRaw: '+48603104600',
  phoneShort: '603 104 600',
  email: 'mdmmodadamskomeska@gmail.com',
  newsletterEmail: 'mdmmodadamskomesk@gmail.com',
  tagline: 'Elegancja od 1996 roku',
  heroSubtitle: 'Moda damska • Moda męska • Usługi krawieckie',
  heroHeadline: 'Elegancja, która pozostaje.',
  heroDescription:
    'Od 1996 roku pomagamy naszym klientom wyglądać wyjątkowo. Odkryj kolekcje na każdą uroczystość, perfekcyjne dopasowanie krawieckie oraz ponadczasową jakość w Tucholi i Czersku.',
  introLabel: 'MDM Moda Damsko-Męska',
  introTitle: 'Styl, który mówi więcej.',
  introText:
    'MDM to miejsce dla osób, które cenią jakość, elegancję i indywidualny styl. Od trzydziestu lat tworzymy przestrzeń, w której moda staje się czymś więcej niż tylko ubraniem — oferujemy pełne doradztwo wizerunkowe, stylizacje okolicznościowe oraz własną pracownię poprawek krawieckich.',
  hoursWeekday: 'Pon–Pt: 9:00–17:00',
  hoursSaturday: 'Sobota: 9:00–13:00',
  stats: [
    { number: '30', label: 'Lat doświadczenia' },
    { number: '50k+', label: 'Zadowolonych klientów' },
    { number: '100%', label: 'Pasji i krawiectwa' },
  ],
};

export const COLLECTIONS: CollectionItem[] = [
  {
    id: 'mens-fashion',
    title: 'Moda Męska',
    description: 'Garnitury ślubne i biznesowe, koszule, marynarki, krawaty oraz obuwie.',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1200',
    linkText: 'Poznaj kolekcję męską →',
    linkHref: '#locations',
  },
  {
    id: 'womens-fashion',
    title: 'Moda Damska',
    description: 'Suknie wieczorowe, kreacje koktajlowe, garsonki, płaszcze i dodatki.',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200',
    linkText: 'Poznaj kolekcję damską →',
    linkHref: '#locations',
  },
];

export const SPECIAL_OCCASIONS: SpecialOccasion[] = [
  {
    id: 'weddings',
    title: 'Śluby & Wesela',
    subtitle: 'Dla Pana Młodego, Świadka i Gości',
    badge: 'Uroczystości Ślubne',
    icon: '💍',
    description:
      'Kompletne stylizacje ślubne — garnitury w krojach slim i regular, kamizelki, koszule na spinki, muszki, poszetki oraz zjawiskowe suknie weselne dla pań i kreacje dla Mamy Pary Młodej.',
    highlights: [
      'Garnitury ślubne z taliowaniem i dopasowaniem na miarę',
      'Eleganckie kreacje dla Mamy Pary Młodej i Świadkowej',
      'Kompletna galanteria: spinki, poszetki, krawaty, muchy i paski',
    ],
    image: '/src/assets/images/wedding_groom_suit_1792422042462.jpg',
  },
  {
    id: 'proms',
    title: 'Studniówki & Półmetki',
    subtitle: 'Młoda elegancja i nowoczesny sznyt',
    badge: 'Bale & Studniówki',
    icon: '🎓',
    description:
      'Garnitury o nowoczesnym kroju slim-fit, modne kolory (granat, butelkowa zieleń, czerń, burgund) oraz olśniewające suknie balowe, w których zrobisz oszałamiające wrażenie na parkiecie.',
    highlights: [
      'Dopasowane fasony slim i nowoczesna kolorystyka',
      'Suknie wieczorowe maxi i koktajlowe na studniówkową noc',
      'Szybkie poprawki krawieckie od ręki na miejscu',
    ],
    image: '/src/assets/images/prom_ball_attire_1792422043193.jpg',
  },
  {
    id: 'communions',
    title: 'Komunie & Chrzciny',
    subtitle: 'Szykowna klasyka na uroczystości rodzinne',
    badge: 'Spotkania Rodzinne',
    icon: '🕊️',
    description:
      'Jasne i pastelowe sukienki, eleganckie garnitury damskie, klasyczne marynarki i koszule męskie idealne na rodzinne ceremonie w kościele oraz uroczyste przyjęcia.',
    highlights: [
      'Lekkie, oddychające tkaniny na wiosenne i letnie uroczystości',
      'Szykowne sukienki wizytowe, garsonki i garnitury damskie',
      'Komfort i nienaganny wygląd przez cały dzień spotkania',
    ],
    image: '/src/assets/images/communion_family_outfit_1792422044258.jpg',
  },
  {
    id: 'business',
    title: 'Biznes & Jubileusze',
    subtitle: 'Pewność siebie i nienaganny dress code',
    badge: 'Biznes & Bankiety',
    icon: '👔',
    description:
      'Formalne garnitury biznesowe, zestawy smart-casual, żakiety, spodnie w kant oraz wełniane płaszcze, które podkreślą Twój profesjonalizm podczas ważnych spotkań i bankietów.',
    highlights: [
      'Wysokogatunkowe tkaniny odporne na zagniecenia',
      'Koszule z łatwego w prasowaniu materiału non-iron',
      'Stylizacje na jubileusze firmowe, bankiety i gale',
    ],
    image: '/src/assets/images/business_tailored_suit_1792422043645.jpg',
  },
];

export const TAILORING_SERVICES: TailoringServiceItem[] = [
  {
    id: 'store-fit',
    title: 'Poprawki do zakupionych ubrań',
    description:
      'Kupując garnitur, marynarkę, sukienkę czy spodnie w salonach MDM, dopasowujemy je do Twojej sylwetki, aby leżały jak szyte na miarę.',
    icon: '✂️',
    examples: [
      'Skracanie i wydłużanie nogawek spodni',
      'Taliowanie marynarek i koszul',
      'Dopasowanie długości rękawów',
      'Korekta talii i długości sukienek',
    ],
  },
  {
    id: 'custom-clothes',
    title: 'Przynieś własne ubrania z szafy!',
    description:
      'Wykonujemy drobne usługi krawieckie również na Twoich własnych ubraniach. Masz w szafie ulubione spodnie do skrócenia lub płaszcz do zwężenia? Zrobimy to profesjonalnie!',
    icon: '🧵',
    examples: [
      'Skracanie dżinsów i spodni wizytowych',
      'Wymiana zamków błyskawicznych (suwaków)',
      'Zwężanie nogawek i rękawów',
      'Drobne naprawy, przeszycia i guziki',
    ],
  },
  {
    id: 'consultation',
    title: 'Przymiarka i doradztwo na miejscu',
    description:
      'Doświadczona obsługa dokona precyzyjnych pomiarów i podepnie ubranie szpilkami w salonie, doradzając optymalną linię i proporcje sylwetki.',
    icon: '📐',
    examples: [
      'Indywidualne doradztwo krawieckie',
      'Pomiary z uwzględnieniem obuwia wizytowego',
      'Sprawna i rzetelna realizacja',
      'Wieloletnie doświadczenie krawieckie',
    ],
  },
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'exp',
    icon: '✦',
    title: '30 lat doświadczenia',
    description: 'Od 1996 roku budujemy markę opartą na zaufaniu i jakości w Tucholi i Czersku.',
  },
  {
    id: 'tailoring',
    icon: '✂',
    title: 'Pracownia krawiecka',
    description: 'Dopasowanie garniturów i sukien oraz drobne przeróbki Twoich własnych ubrań z szafy.',
  },
  {
    id: 'consulting',
    icon: '♛',
    title: 'Stylizacje okolicznościowe',
    description: 'Kompleksowy dobór stylizacji na śluby, wesela, studniówki, komunie i jubileusze.',
  },
  {
    id: 'contact',
    icon: '☎',
    title: 'Kontakt telefoniczny: 603 104 600',
    description: 'Zadzwoń i zapytaj o dostępność rozmiaru, rezerwację garnituru lub poprawki.',
  },
];

export const SALONS: SalonLocation[] = [
  {
    id: 'tuchola-mens',
    city: 'Tuchola',
    address: 'Plac Wolności 7',
    department: 'Moda Męska & Krawiec',
    mapsQuery: 'MDM+Moda+Męska+Plac+Wolności+7+Tuchola',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=MDM+Moda+M%C4%99ska+Plac+Wolno%C5%9Bci+7+Tuchola',
    phone: '+48 603 104 600',
    phoneRaw: '+48603104600',
    openingHours: {
      weekday: '9:00 – 17:00',
      saturday: '9:00 – 13:00',
      sunday: 'Zamknięte',
    },
  },
  {
    id: 'tuchola-womens',
    city: 'Tuchola',
    address: 'Plac Wolności 17',
    department: 'Moda Damska',
    mapsQuery: 'MDM+Moda+Damska+Plac+Wolności+17+Tuchola',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=MDM+Moda+Damska+Plac+Wolno%C5%9Bci+17+Tuchola',
    phone: '+48 603 104 600',
    phoneRaw: '+48603104600',
    openingHours: {
      weekday: '9:00 – 17:00',
      saturday: '9:00 – 13:00',
      sunday: 'Zamknięte',
    },
  },
  {
    id: 'czersk',
    city: 'Czersk',
    address: 'ul. dr. Zielińskiego 3',
    department: 'Moda Damska i Męska & Krawiec',
    mapsQuery: 'MDM+Moda+dr.+Zielińskiego+3+Czersk',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=MDM+Moda+dr.+Zieli%C5%84skiego+3+Czersk',
    phone: '+48 603 104 600',
    phoneRaw: '+48603104600',
    openingHours: {
      weekday: '9:00 – 17:00',
      saturday: '9:00 – 13:00',
      sunday: 'Zamknięte',
    },
  },
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Precyzja krawiectwa',
    category: 'Moda Męska & Poprawki',
    alt: 'Męski garnitur wizytowy i detale krawieckie',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&auto=format&fit=crop&q=80',
  },
  {
    id: 'gal-2',
    title: 'Kreacje wieczorowe i ślubne',
    category: 'Moda Damska',
    alt: 'Elegancka suknia wieczorowa i złote akcenty',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1200&auto=format&fit=crop&q=80',
  },
  {
    id: 'gal-3',
    title: 'Galanteria i dodatki',
    category: 'Akcesoria Wizytowe',
    alt: 'Krawaty, poszetki i luksusowe akcesoria do garnituru',
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=1200&auto=format&fit=crop&q=80',
  },
  {
    id: 'gal-4',
    title: 'Stylizacje na wesela i uroczystości',
    category: 'Okazje Specjalne',
    alt: 'Kobieta w eleganckim płaszczu i luksusowej stylizacji',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&auto=format&fit=crop&q=80',
  },
  {
    id: 'gal-5',
    title: 'Garnitury studniówkowe i biznesowe',
    category: 'Moda Męska',
    alt: 'Mężczyzna w wełnianym płaszczu i klasycznej stylizacji',
    image: 'https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?w=1200&auto=format&fit=crop&q=80',
  },
  {
    id: 'gal-6',
    title: 'Kreacje koktajlowe i komunijne',
    category: 'Moda Damska',
    alt: 'Wyrafinowana stylizacja damska na uroczystości',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&auto=format&fit=crop&q=80',
  },
];

export const FACEBOOK_LINKS: FacebookPageLink[] = [
  {
    label: 'Facebook Czersk – Moda Męska',
    url: 'https://www.facebook.com/share/1KbMz59ZN9/?mibextid=wwXIfr',
  },
  {
    label: 'Facebook Czersk – Moda Damska',
    url: 'https://www.facebook.com/share/1H57mGEqzr/?mibextid=wwXIfr',
  },
  {
    label: 'Facebook Tuchola – Moda Męska',
    url: 'https://www.facebook.com/share/17m19jEiF6/?mibextid=wwXIfr',
  },
  {
    label: 'Facebook Tuchola – Moda Damska',
    url: 'https://www.facebook.com/share/1bWxXGvkT9/?mibextid=wwXIfr',
  },
];

export const INSTAGRAM_LINKS: SocialLink[] = [
  {
    label: 'Instagram Tuchola',
    url: 'https://www.instagram.com/mdmmodadamskomeskatuchola/',
    platform: 'instagram',
  },
  {
    label: 'Instagram Czersk',
    url: 'https://www.instagram.com/mdmmodadamskomeska_czersk/',
    platform: 'instagram',
  },
];
