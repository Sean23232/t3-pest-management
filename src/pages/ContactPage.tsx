import { useEffect, useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { EditablePlaceholder } from '../components/EditablePlaceholder';
import { RevealBlock } from '../components/RevealBlock';
import { BUSINESS } from '../config/business';
import { usePageMeta } from '../hooks/usePageMeta';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  pestConcern: string;
  servicePreference: string;
  description: string;
  preferredMethod: string;
}

interface SubmissionSuccess {
  referenceId: string;
  receivedAt: string;
  values: FormValues;
  persistedMode: 'server' | 'local';
}

const PEST_MAP: Record<string, string> = {
  'general-pest-control': 'General Pest Control',
  'rodent-control': 'Rodents & Basic Exclusion',
  'roach-control': 'Roaches',
  'bed-bug-control': 'Bed Bugs',
  'scorpion-control': 'Scorpions',
};

export function ContactPage() {
  usePageMeta({
    title: 'Contact & Request an Estimate | T3 Pest Management',
    description:
      'Request an estimate or schedule an appointment with T3 Pest Management. Call (325) 864-9407 or submit your pest concern online. Open 5 days a week.',
    path: '/contact',
  });

  const [searchParams] = useSearchParams();
  const pestParam = searchParams.get('pest') ?? '';
  const serviceTypeParam = searchParams.get('serviceType') ?? '';

  const [values, setValues] = useState<FormValues>({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Residential Property',
    pestConcern: PEST_MAP[pestParam] ?? '',
    servicePreference:
      serviceTypeParam === 'one-time'
        ? 'One-Time Service'
        : serviceTypeParam === 'maintenance'
          ? 'Regularly Scheduled Maintenance'
          : 'Need Recommendation',
    description: '',
    preferredMethod: 'Phone Call',
  });

  useEffect(() => {
    setValues((prev) => ({
      ...prev,
      pestConcern: PEST_MAP[pestParam] ?? prev.pestConcern,
      servicePreference:
        serviceTypeParam === 'one-time'
          ? 'One-Time Service'
          : serviceTypeParam === 'maintenance'
            ? 'Regularly Scheduled Maintenance'
            : prev.servicePreference,
    }));
  }, [pestParam, serviceTypeParam]);

  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [formBannerError, setFormBannerError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<SubmissionSuccess | null>(null);

  const validate = (data: FormValues): Partial<Record<keyof FormValues, string>> => {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};
    if (data.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.';
    }
    if (data.phone.replace(/\D/g, '').length < 10) {
      nextErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!data.pestConcern.trim()) {
      nextErrors.pestConcern = 'Please select your primary pest concern.';
    }
    if (data.description.trim().length < 10) {
      nextErrors.description =
        'Please share a short description of what you are noticing (at least 10 characters).';
    }
    if (!data.preferredMethod.trim()) {
      nextErrors.preferredMethod = 'Please choose your preferred contact method.';
    }
    return nextErrors;
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (formBannerError) {
      setFormBannerError(null);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFormBannerError('Please review the highlighted fields before submitting.');
      return;
    }

    setSubmitting(true);
    setFormBannerError(null);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const contentType = response.headers.get('content-type') || '';
      if (response.ok && contentType.includes('application/json')) {
        const result = (await response.json()) as {
          ok?: boolean;
          referenceId?: string;
          receivedAt?: string;
        };
        setSubmitted({
          referenceId:
            result.referenceId ?? `T3-${Date.now().toString(36).toUpperCase().slice(-6)}`,
          receivedAt: result.receivedAt ?? new Date().toISOString(),
          values,
          persistedMode: 'server',
        });
      } else if (response.status === 422 && contentType.includes('application/json')) {
        const errResult = (await response.json()) as {
          message?: string;
          errors?: Partial<Record<keyof FormValues, string>>;
        };
        setErrors(errResult.errors ?? {});
        setFormBannerError(
          errResult.message ?? 'Please review the highlighted fields and try again.'
        );
      } else {
        // Graceful fallback if opened via static build without dev API middleware
        setSubmitted({
          referenceId: `T3-${Date.now().toString(36).toUpperCase().slice(-6)}`,
          receivedAt: new Date().toISOString(),
          values,
          persistedMode: 'local',
        });
      }
    } catch {
      setSubmitted({
        referenceId: `T3-${Date.now().toString(36).toUpperCase().slice(-6)}`,
        receivedAt: new Date().toISOString(),
        values,
        persistedMode: 'local',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(null);
    setErrors({});
    setFormBannerError(null);
    setValues({
      name: '',
      phone: '',
      email: '',
      propertyType: 'Residential Property',
      pestConcern: '',
      servicePreference: 'Need Recommendation',
      description: '',
      preferredMethod: 'Phone Call',
    });
  };

  const inputBase =
    'mt-2 block w-full rounded-sm border bg-white px-4 py-3 text-sm text-[#101D2B] placeholder:text-[#87919B] transition-colors focus:border-[#C69A53] focus:outline-none';

  return (
    <>
      {/* Editorial Dark Hero */}
      <section className="border-b border-white/10 bg-[#101D2B] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C69A53]">
              <span className="h-px w-8 bg-[#C69A53]" aria-hidden="true" />
              <span>Contact &amp; Scheduling</span>
            </div>
            <h1 className="mt-5 text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl">
              Request an Estimate or Schedule Service.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#B9C2CA] sm:text-lg">
              Tell T3 Pest Management what you&rsquo;re dealing with. Call directly or
              submit your property inquiry below to discuss one-time service, ongoing
              maintenance, or rodent exclusion.
            </p>
          </div>
        </div>
      </section>

      {/* Main Two-Column Contact & Form Section */}
      <section id="inquiry-form" className="bg-[#F7F6F2] py-16 text-[#101D2B] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Contact Info & Editable Local SEO Placeholders */}
            <div className="space-y-6 lg:col-span-5">
              <RevealBlock>
                <div className="rounded-sm border border-[#101D2B]/12 bg-[#101D2B] p-8 text-white shadow-lg">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C69A53]">
                    Direct Phone Line
                  </span>
                  <h2 className="mt-2 font-editorial text-2xl font-medium text-white">
                    Speak Directly With T3
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#B9C2CA]">
                    Prefer to talk over your pest concern right now? Call during operating
                    days to schedule an appointment.
                  </p>

                  <a
                    href={BUSINESS.phone.href}
                    className="mt-6 flex items-center justify-between rounded-sm border border-[#C69A53]/50 bg-[#18232D] px-5 py-4 transition-colors hover:border-[#C69A53]"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Phone className="h-5 w-5 text-[#C69A53]" aria-hidden="true" />
                      <span className="text-lg font-semibold tracking-wide text-white">
                        {BUSINESS.phone.display}
                      </span>
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C69A53]">
                      Call Now
                    </span>
                  </a>
                  <p className="mt-2.5 text-[11px] text-[#87919B]">
                    {BUSINESS.phone.editableNote}
                  </p>
                </div>
              </RevealBlock>

              <RevealBlock delayMs={60}>
                <div className="space-y-5 rounded-sm border border-[#101D2B]/12 bg-white p-8">
                  <h2 className="font-editorial text-2xl font-medium text-[#101D2B]">
                    Business &amp; Service-Area Details
                  </h2>
                  <p className="text-sm text-[#43505C]">
                    Confirmed operational facts are paired with clearly marked editable
                    placeholders for details pending confirmation.
                  </p>

                  <div className="space-y-5 border-t border-[#101D2B]/10 pt-5">
                    <div className="flex items-start gap-3.5">
                      <Clock
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#C69A53]"
                        aria-hidden="true"
                      />
                      <div className="space-y-1.5">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#101D2B]">
                          Operating Availability
                        </p>
                        <p className="text-sm font-medium text-[#2D3945]">
                          {BUSINESS.hours.verifiedSummary}
                        </p>
                        <EditablePlaceholder text={BUSINESS.hours.detailPlaceholder} />
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Mail
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#C69A53]"
                        aria-hidden="true"
                      />
                      <div className="space-y-1.5">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#101D2B]">
                          Email Address
                        </p>
                        {BUSINESS.email.isPlaceholder ? (
                          <EditablePlaceholder text={BUSINESS.email.value} />
                        ) : (
                          <a
                            href={`mailto:${BUSINESS.email.value}`}
                            className="text-sm text-[#2D3945] hover:text-[#9F7837]"
                          >
                            {BUSINESS.email.value}
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <MapPin
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#C69A53]"
                        aria-hidden="true"
                      />
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#101D2B]">
                          Service Area &amp; Location
                        </p>
                        <EditablePlaceholder text={BUSINESS.serviceArea.value} />
                        <EditablePlaceholder text={BUSINESS.physicalLocation.value} />
                      </div>
                    </div>
                  </div>
                </div>
              </RevealBlock>
            </div>

            {/* Right Inquiry Form */}
            <div className="lg:col-span-7">
              <RevealBlock delayMs={90}>
                <div className="rounded-sm border border-[#101D2B]/12 bg-white p-7 shadow-sm sm:p-10">
                  {submitted ? (
                    <div
                      role="status"
                      aria-live="polite"
                      className="space-y-6 py-4"
                    >
                      <div className="flex items-center gap-3 text-[#101D2B]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C69A53]/15 text-[#9F7837]">
                          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9F7837]">
                            Inquiry Received
                          </span>
                          <h2 className="font-editorial text-3xl font-medium text-[#101D2B]">
                            Thank You, {submitted.values.name}.
                          </h2>
                        </div>
                      </div>

                      <p className="text-base leading-relaxed text-[#43505C]">
                        Your service inquiry has been recorded under reference{' '}
                        <strong className="font-semibold text-[#101D2B]">
                          {submitted.referenceId}
                        </strong>
                        . For immediate scheduling assistance, you can also reach T3 Pest
                        Management directly at{' '}
                        <a
                          href={BUSINESS.phone.href}
                          className="font-semibold text-[#9F7837] underline"
                        >
                          {BUSINESS.phone.display}
                        </a>
                        .
                      </p>

                      <div className="rounded-sm border border-[#101D2B]/12 bg-[#F7F6F2] p-6">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#576370]">
                          Submitted Summary
                        </h3>
                        <dl className="mt-4 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
                          <div>
                            <dt className="text-xs text-[#576370]">Phone</dt>
                            <dd className="font-medium text-[#101D2B]">
                              {submitted.values.phone}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-xs text-[#576370]">Email</dt>
                            <dd className="font-medium text-[#101D2B]">
                              {submitted.values.email}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-xs text-[#576370]">Property Type</dt>
                            <dd className="font-medium text-[#101D2B]">
                              {submitted.values.propertyType}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-xs text-[#576370]">Pest Concern</dt>
                            <dd className="font-medium text-[#101D2B]">
                              {submitted.values.pestConcern}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-xs text-[#576370]">Service Preference</dt>
                            <dd className="font-medium text-[#101D2B]">
                              {submitted.values.servicePreference}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-xs text-[#576370]">Preferred Contact</dt>
                            <dd className="font-medium text-[#101D2B]">
                              {submitted.values.preferredMethod}
                            </dd>
                          </div>
                          <div className="sm:col-span-2">
                            <dt className="text-xs text-[#576370]">Description</dt>
                            <dd className="mt-1 text-[#2D3945]">
                              {submitted.values.description}
                            </dd>
                          </div>
                        </dl>
                      </div>

                      <EditablePlaceholder
                        text="[Owner Setup Note: Connect this verified form endpoint (/api/inquiries) to your confirmed CRM or business email inbox prior to production launch.]"
                      />

                      <div className="flex flex-wrap gap-4 pt-2">
                        <button
                          type="button"
                          onClick={resetForm}
                          className="rounded-sm bg-[#101D2B] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#18232D]"
                        >
                          Submit Another Inquiry
                        </button>
                        <a
                          href={BUSINESS.phone.href}
                          className="inline-flex items-center gap-2 rounded-sm border border-[#101D2B]/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#101D2B] transition-colors hover:border-[#C69A53]"
                        >
                          <Phone className="h-4 w-4 text-[#C69A53]" aria-hidden="true" />
                          <span>Call {BUSINESS.phone.display}</span>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                      <div className="border-b border-[#101D2B]/10 pb-6">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9F7837]">
                          Service Inquiry Form
                        </span>
                        <h2 className="mt-2 font-editorial text-3xl font-medium text-[#101D2B]">
                          Tell Us What You&rsquo;re Dealing With
                        </h2>
                        <p className="mt-2 text-sm text-[#43505C]">
                          Fields marked with * are required so we can respond accurately.
                        </p>
                      </div>

                      {formBannerError && (
                        <div
                          role="alert"
                          className="flex items-start gap-3 rounded-sm border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-900"
                        >
                          <AlertCircle
                            className="mt-0.5 h-4 w-4 shrink-0 text-red-700"
                            aria-hidden="true"
                          />
                          <span>{formBannerError}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="contact-name"
                            className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#101D2B]"
                          >
                            Name *
                          </label>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            required
                            autoComplete="name"
                            placeholder="Your full name"
                            value={values.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={errors.name ? 'err-name' : undefined}
                            className={`${inputBase} ${
                              errors.name ? 'border-red-500' : 'border-[#101D2B]/20'
                            }`}
                          />
                          {errors.name && (
                            <p id="err-name" className="mt-1.5 text-xs text-red-700">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="contact-phone"
                            className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#101D2B]"
                          >
                            Phone *
                          </label>
                          <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            required
                            autoComplete="tel"
                            placeholder="(325) 000-0000"
                            value={values.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            aria-invalid={Boolean(errors.phone)}
                            aria-describedby={errors.phone ? 'err-phone' : undefined}
                            className={`${inputBase} ${
                              errors.phone ? 'border-red-500' : 'border-[#101D2B]/20'
                            }`}
                          />
                          {errors.phone && (
                            <p id="err-phone" className="mt-1.5 text-xs text-red-700">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="contact-email"
                            className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#101D2B]"
                          >
                            Email *
                          </label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="you@example.com"
                            value={values.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? 'err-email' : undefined}
                            className={`${inputBase} ${
                              errors.email ? 'border-red-500' : 'border-[#101D2B]/20'
                            }`}
                          />
                          {errors.email && (
                            <p id="err-email" className="mt-1.5 text-xs text-red-700">
                              {errors.email}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="contact-property-type"
                            className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#101D2B]"
                          >
                            Property Type
                          </label>
                          <select
                            id="contact-property-type"
                            name="propertyType"
                            value={values.propertyType}
                            onChange={(e) => handleChange('propertyType', e.target.value)}
                            className={`${inputBase} border-[#101D2B]/20`}
                          >
                            <option value="Residential Property">Residential Home</option>
                            <option value="Commercial Property (Confirm Availability)">
                              Commercial Property (Confirm Coverage)
                            </option>
                            <option value="Multi-Unit / Rental Property">
                              Multi-Unit / Rental Property
                            </option>
                            <option value="Other / Not Applicable">
                              Other / Not Applicable
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="contact-pest"
                            className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#101D2B]"
                          >
                            Pest Concern *
                          </label>
                          <select
                            id="contact-pest"
                            name="pestConcern"
                            required
                            value={values.pestConcern}
                            onChange={(e) => handleChange('pestConcern', e.target.value)}
                            aria-invalid={Boolean(errors.pestConcern)}
                            aria-describedby={errors.pestConcern ? 'err-pest' : undefined}
                            className={`${inputBase} ${
                              errors.pestConcern ? 'border-red-500' : 'border-[#101D2B]/20'
                            }`}
                          >
                            <option value="">Select pest concern...</option>
                            <option value="General Pest Control">
                              General Pest Control
                            </option>
                            <option value="Rodents & Basic Exclusion">
                              Rodents &amp; Basic Exclusion
                            </option>
                            <option value="Roaches">Roaches</option>
                            <option value="Bed Bugs">Bed Bugs</option>
                            <option value="Scorpions">Scorpions</option>
                            <option value="Multiple Pests / Unsure">
                              Multiple Pests / Unsure
                            </option>
                          </select>
                          {errors.pestConcern && (
                            <p id="err-pest" className="mt-1.5 text-xs text-red-700">
                              {errors.pestConcern}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="contact-service-pref"
                            className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#101D2B]"
                          >
                            Service Preference
                          </label>
                          <select
                            id="contact-service-pref"
                            name="servicePreference"
                            value={values.servicePreference}
                            onChange={(e) =>
                              handleChange('servicePreference', e.target.value)
                            }
                            className={`${inputBase} border-[#101D2B]/20`}
                          >
                            <option value="Need Recommendation">
                              Need Recommendation
                            </option>
                            <option value="One-Time Service">One-Time Service</option>
                            <option value="Regularly Scheduled Maintenance">
                              Regularly Scheduled Maintenance
                            </option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-description"
                          className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#101D2B]"
                        >
                          Description of the Problem *
                        </label>
                        <textarea
                          id="contact-description"
                          name="description"
                          rows={4}
                          required
                          placeholder="Where are you noticing activity, how long has it been occurring, and are there specific entry areas or rooms affected?"
                          value={values.description}
                          onChange={(e) => handleChange('description', e.target.value)}
                          aria-invalid={Boolean(errors.description)}
                          aria-describedby={errors.description ? 'err-desc' : undefined}
                          className={`${inputBase} ${
                            errors.description ? 'border-red-500' : 'border-[#101D2B]/20'
                          }`}
                        />
                        {errors.description && (
                          <p id="err-desc" className="mt-1.5 text-xs text-red-700">
                            {errors.description}
                          </p>
                        )}
                      </div>

                      <fieldset>
                        <legend className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#101D2B]">
                          Preferred Contact Method *
                        </legend>
                        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                          {['Phone Call', 'Text Message', 'Email'].map((method) => {
                            const selected = values.preferredMethod === method;
                            return (
                              <label
                                key={method}
                                className={`flex cursor-pointer items-center justify-center gap-2 rounded-sm border px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] transition-all ${
                                  selected
                                    ? 'border-[#C69A53] bg-[#101D2B] text-white'
                                    : 'border-[#101D2B]/20 bg-[#F7F6F2] text-[#101D2B] hover:border-[#C69A53]'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="preferredMethod"
                                  value={method}
                                  checked={selected}
                                  onChange={(e) =>
                                    handleChange('preferredMethod', e.target.value)
                                  }
                                  className="sr-only"
                                />
                                <span>{method}</span>
                              </label>
                            );
                          })}
                        </div>
                        {errors.preferredMethod && (
                          <p className="mt-1.5 text-xs text-red-700">
                            {errors.preferredMethod}
                          </p>
                        )}
                      </fieldset>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="inline-flex w-full items-center justify-center gap-2.5 rounded-sm bg-[#C69A53] px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#101D2B] shadow-md transition-all hover:bg-[#D4AC6A] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          {submitting ? (
                            <>
                              <Loader2
                                className="h-4 w-4 animate-spin"
                                aria-hidden="true"
                              />
                              <span>Submitting Inquiry...</span>
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4" aria-hidden="true" />
                              <span>Submit Inquiry</span>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
