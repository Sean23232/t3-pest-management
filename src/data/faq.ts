import { BUSINESS } from '../config/business';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  isPlaceholder?: boolean;
  placeholderNote?: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'pests-handled',
    question: 'What types of pests does T3 Pest Management handle?',
    answer:
      'T3 Pest Management specializes in pest eradication and general pest control. Verified areas of service include general household pests, rodents, roaches, bed bugs, and scorpions. If you are experiencing another pest issue, reach out directly to discuss your specific concern.',
  },
  {
    id: 'one-time-service',
    question: 'Do you offer one-time pest control services?',
    answer:
      'Yes. T3 Pest Management offers a one-time service option for customers who need focused assistance addressing a specific pest problem without committing to an ongoing plan.',
  },
  {
    id: 'regular-maintenance',
    question: 'Do you offer regular maintenance?',
    answer:
      'Yes. Regularly scheduled maintenance is available for customers who prefer consistent, ongoing pest management for their property.',
    isPlaceholder: true,
    placeholderNote:
      '[Editable Placeholder: Confirm exact maintenance schedule intervals (e.g., monthly, bi-monthly, or quarterly) once finalized.]',
  },
  {
    id: 'rodent-exclusion',
    question: 'Do you provide rodent exclusion services?',
    answer:
      'Yes. In addition to rodent elimination, T3 Pest Management provides basic exclusion services to help address entry points and reduce the likelihood of repeat activity.',
  },
  {
    id: 'schedule-appointment',
    question: 'How can I schedule an appointment?',
    answer: `T3 Pest Management is open 5 days a week. You can call directly at ${BUSINESS.phone.display} or submit an appointment inquiry through our Request an Estimate form.`,
    isPlaceholder: true,
    placeholderNote: `[Editable Placeholder: ${BUSINESS.hours.detailPlaceholder}]`,
  },
  {
    id: 'warranty-coverage',
    question: 'What does the warranty cover?',
    answer:
      'T3 Pest Management references a 60-unit warranty on most pests on its existing website; however, exact warranty duration (such as days), eligible pests, exclusions, and conditions must be confirmed prior to publishing specific warranty guarantees.',
    isPlaceholder: true,
    placeholderNote: BUSINESS.warranty.placeholderText,
  },
];
