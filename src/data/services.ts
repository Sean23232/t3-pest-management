export interface PestService {
  slug: string;
  id: string;
  title: string;
  shortTitle: string;
  cardHeadline: string;
  cardDescription: string;
  image: string;
  imageAlt: string;
  heroSubtitle: string;
  overviewParagraphs: string[];
  focusAreas: {
    title: string;
    detail: string;
  }[];
  serviceOptionsNote: string;
  editableScopePlaceholder: string;
  seoTitle: string;
  seoDescription: string;
}

export const PEST_SERVICES: PestService[] = [
  {
    slug: 'general-pest-control',
    id: 'general',
    title: 'General Pest Control',
    shortTitle: 'General Pest Control',
    cardHeadline: 'GENERAL PEST CONTROL',
    cardDescription:
      'Professional pest control for common household pest problems, with service options designed around your needs.',
    image: '/images/service-general.jpg',
    imageAlt: 'Well-maintained modern home exterior perimeter representing preventative general pest control',
    heroSubtitle:
      'Practical, dependable pest management structured to address unwanted household pests and protect your property.',
    overviewParagraphs: [
      'T3 Pest Management specializes in pest eradication and general pest control built around straightforward, dependable execution. Rather than one-size-fits-all promises, service begins with understanding what pest activity is occurring on your property.',
      'Customers may arrange either a one-time service to address a specific active issue or regularly scheduled maintenance to maintain ongoing protection throughout the year.',
    ],
    focusAreas: [
      {
        title: 'Targeted Household Pest Management',
        detail:
          'Focused attention on common household pest concerns affecting interior living spaces and exterior perimeters.',
      },
      {
        title: 'One-Time or Recurring Options',
        detail:
          'Choose a single targeted visit for immediate concerns or regularly scheduled maintenance for continued peace of mind.',
      },
      {
        title: 'Practical Property Inspection',
        detail:
          'Clear assessment of visible pest activity and conducive perimeter conditions discussed directly with you.',
      },
    ],
    serviceOptionsNote:
      'Available as both One-Time Service and Regularly Scheduled Maintenance.',
    editableScopePlaceholder:
      '[Editable Placeholder: List specific additional covered household pests or seasonal frequency details once confirmed by T3 Pest Management.]',
    seoTitle: 'General Pest Control | T3 Pest Management',
    seoDescription:
      'Professional general pest control by T3 Pest Management. Flexible one-time treatments and ongoing scheduled maintenance. Open 5 days a week.',
  },
  {
    slug: 'rodent-control',
    id: 'rodents',
    title: 'Rodent Control & Exclusion',
    shortTitle: 'Rodent Control',
    cardHeadline: 'RODENT CONTROL',
    cardDescription:
      "Don't let rodents take over your property. T3 Pest Management offers rodent elimination along with basic exclusion services to help address entry points.",
    image: '/images/service-rodent.jpg',
    imageAlt: 'Heavy-gauge stainless steel mesh and exterior sealant securing a residential foundation vent for rodent exclusion',
    heroSubtitle:
      'Focused rodent elimination paired with basic exclusion work to help address vulnerable entry points around your property.',
    overviewParagraphs: [
      "Don't let rodents take over your property. Rodent activity creates disruption and property concern quickly when entry gaps and access routes remain open.",
      'T3 Pest Management provides rodent elimination alongside basic exclusion services designed to help close off accessible entry points rather than treating symptoms alone.',
    ],
    focusAreas: [
      {
        title: 'Active Rodent Elimination',
        detail:
          'Practical, targeted effort focused on resolving active rodent presence inside and around the structure.',
      },
      {
        title: 'Basic Exclusion Services',
        detail:
          'Identification and basic sealing of common structural entry points to help keep rodents from returning.',
      },
      {
        title: 'Follow-Up & Maintenance Path',
        detail:
          'Available through one-time resolution or ongoing scheduled maintenance according to your property needs.',
      },
    ],
    serviceOptionsNote:
      'Includes rodent elimination and basic exclusion assessment; confirm specific structural scope upon inspection.',
    editableScopePlaceholder:
      '[Editable Placeholder: Confirm exact rodent exclusion materials, inspection checklist items, and whether follow-up monitoring visits are included.]',
    seoTitle: 'Rodent Control & Basic Exclusion | T3 Pest Management',
    seoDescription:
      "Don't let rodents take over your property. T3 Pest Management provides rodent elimination and basic exclusion services to address entry points.",
  },
  {
    slug: 'roach-control',
    id: 'roaches',
    title: 'Roach Control',
    shortTitle: 'Roach Control',
    cardHeadline: 'ROACH CONTROL',
    cardDescription:
      'Professional solutions for roach problems, helping address infestations and restore greater peace of mind.',
    image: '/images/service-roach.jpg',
    imageAlt: 'Spotless modern kitchen cabinetry and stone countertop inspected with a focused diagnostic beam',
    heroSubtitle:
      'Professional, discreet roach control aimed at addressing infestations thoroughly and restoring comfort across living areas.',
    overviewParagraphs: [
      'Roach activity in kitchens, utility rooms, or structural voids demands a disciplined, practical approach rather than temporary store-bought fixes.',
      'T3 Pest Management addresses roach infestations directly with professional pest management tailored to the severity of activity and layout of your space.',
    ],
    focusAreas: [
      {
        title: 'Focused Infestation Response',
        detail:
          'Addressed directly with practical pest eradication measures suited to the areas where roach activity is observed.',
      },
      {
        title: 'Discreet, Professional Service',
        detail:
          'Respectful care around kitchens, pantries, baths, and interior utility spaces with clear communication.',
      },
      {
        title: 'Ongoing Prevention Options',
        detail:
          'Transition from initial control into regularly scheduled maintenance when recurring protection makes sense.',
      },
    ],
    serviceOptionsNote:
      'Available for active infestations and ongoing residential or property care.',
    editableScopePlaceholder:
      '[Editable Placeholder: Add confirmed species coverage (e.g., German, American) or preparation instructions if supplied by T3 Pest Management.]',
    seoTitle: 'Roach Control | T3 Pest Management',
    seoDescription:
      'Professional roach control solutions from T3 Pest Management to help address infestations and restore peace of mind.',
  },
  {
    slug: 'bed-bug-control',
    id: 'bed-bugs',
    title: 'Bed Bug Control',
    shortTitle: 'Bed Bug Control',
    cardHeadline: 'BED BUG CONTROL',
    cardDescription:
      'Targeted pest management for bed bug concerns, with an approach focused on addressing the infestation.',
    image: '/images/service-bedbug.jpg',
    imageAlt: 'Calm, immaculate contemporary bedroom sanctuary representing discreet bed bug resolution',
    heroSubtitle:
      'Discreet, targeted bed bug management focused squarely on resolving the infestation and restoring your comfort.',
    overviewParagraphs: [
      'Suspected or active bed bug activity is stressful and requires attentive, calm, professional handling from the very first conversation.',
      'T3 Pest Management provides targeted pest management for bed bug concerns, taking your situation seriously with a disciplined approach aimed at addressing the infestation.',
    ],
    focusAreas: [
      {
        title: 'Dedicated Infestation Focus',
        detail:
          'Measured, methodical service geared toward addressing active bed bug concerns across affected rooms.',
      },
      {
        title: 'Direct Communication',
        detail:
          'Clear discussion of what to expect when you call or schedule an appointment with T3 Pest Management.',
      },
      {
        title: 'Discreet Care for Your Space',
        detail:
          'Professional conduct designed to protect your privacy and help you take back your living space.',
      },
    ],
    serviceOptionsNote:
      'Call (325) 864-9407 or submit an estimate inquiry to discuss scope and scheduling.',
    editableScopePlaceholder:
      '[Editable Placeholder: Confirm preparation guidelines, treatment modalities, and follow-up policy once verified by T3 Pest Management.]',
    seoTitle: 'Bed Bug Control | T3 Pest Management',
    seoDescription:
      'Targeted bed bug control by T3 Pest Management. Discreet, professional service focused on addressing infestations.',
  },
  {
    slug: 'scorpion-control',
    id: 'scorpions',
    title: 'Scorpion Control',
    shortTitle: 'Scorpion Control',
    cardHeadline: 'SCORPION CONTROL',
    cardDescription:
      'Professional pest management for scorpion concerns, helping you address unwanted pest activity around your property.',
    image: '/images/service-scorpion.jpg',
    imageAlt: 'Modern stone exterior perimeter and walkway illuminated at dusk representing scorpion perimeter management',
    heroSubtitle:
      'Dedicated perimeter and property pest management for scorpion concerns, helping keep unwanted activity away from your space.',
    overviewParagraphs: [
      'Scorpion activity around stone walls, exterior thresholds, garages, and interior spaces requires consistent, dependable management.',
      'T3 Pest Management offers practical scorpion pest control solutions through either focused one-time service or scheduled maintenance visits.',
    ],
    focusAreas: [
      {
        title: 'Exterior & Perimeter Attention',
        detail:
          'Focused effort addressing scorpion concerns around property perimeters, entryways, and interior spaces.',
      },
      {
        title: 'One-Time or Scheduled Maintenance',
        detail:
          'Arrange an immediate service call or select ongoing maintenance to stay ahead of seasonal activity.',
      },
      {
        title: 'Results-First Accountability',
        detail:
          'Guided by our core standard: providing results, not excuses.',
      },
    ],
    serviceOptionsNote:
      'Well suited for regularly scheduled maintenance or immediate one-time response.',
    editableScopePlaceholder:
      '[Editable Placeholder: Confirm specific regional scorpion species and exterior perimeter recommendations if applicable.]',
    seoTitle: 'Scorpion Control | T3 Pest Management',
    seoDescription:
      'Professional scorpion control by T3 Pest Management. Address unwanted scorpion activity around your home and property.',
  },
];

export function getServiceBySlug(slug: string | undefined): PestService | undefined {
  return PEST_SERVICES.find((service) => service.slug === slug);
}
