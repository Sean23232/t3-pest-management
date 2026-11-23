/**
 * Central source of truth for T3 Pest Management / T3 Pest Control.
 *
 * Verified facts below are drawn directly from https://t3pestmanagement.com/.
 * Fields marked with `isPlaceholder: true` or `isConfirmed: false` indicate
 * items that have not yet been formally supplied and MUST be confirmed by the
 * business owner before publishing final values.
 */

export interface SocialProfile {
  label: string;
  url: string;
}

export const BUSINESS = {
  brandName: 'T3 Pest Management',
  alternateName: 'T3 Pest Control',
  slogan: 'Providing results, not excuses.',
  websiteUrl: 'https://t3pestmanagement.com',

  // Verified directly from https://t3pestmanagement.com/ (tel:3258649407 & vehicle door)
  phone: {
    display: '(325) 864-9407',
    href: 'tel:3258649407',
    editableNote: 'Verified from existing site; update in src/config/business.ts if changed.',
  },

  // Missing on existing site — editable placeholders
  email: {
    value: '[Email Address — Editable Placeholder]',
    isPlaceholder: true,
    helper: 'Insert confirmed business email address to enable direct mailto links.',
  },

  serviceArea: {
    value: '[Service Area / Cities & Counties — Editable Placeholder]',
    isPlaceholder: true,
    helper: 'Add verified service cities, counties, and regional coverage for Local SEO.',
  },

  physicalLocation: {
    value: '[Office Address or Base Location — Editable Placeholder]',
    isPlaceholder: true,
    helper: 'Optional street address or service-base city if applicable.',
  },

  hours: {
    verifiedSummary: 'Open 5 days a week',
    detailPlaceholder: '[Confirm Operating Days & Hours, e.g., Mon–Fri 8:00 AM – 5:00 PM]',
    isDetailPlaceholder: true,
  },

  // Trust Strip Item #2 requirement: confirm Residential & Commercial before claiming
  propertyScope: {
    confirmedLabel: '',
    placeholderLabel: 'Residential & Commercial [Confirm Coverage]',
    isConfirmed: false,
  },

  // Warranty requirement: existing site cuts off at "We warranty our work on most pests for 60"
  // Exact duration, eligible pests, and conditions must be confirmed before publishing.
  warranty: {
    isConfirmed: false,
    referenceNote:
      'Existing website references a 60-unit warranty covering most pests; exact duration and terms are pending confirmation.',
    placeholderText:
      '[Warranty Terms Placeholder: Confirm exact 60-unit duration (e.g., days), eligible pests, and coverage conditions prior to publishing.]',
    confirmedSummary: '',
  },

  // Populate only when actual verified company social profiles are supplied.
  socialProfiles: [] as SocialProfile[],
} as const;
