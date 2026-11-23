import { Edit3 } from 'lucide-react';

interface EditablePlaceholderProps {
  text: string;
  surface?: 'dark' | 'light';
  inline?: boolean;
  className?: string;
}

export function EditablePlaceholder({
  text,
  surface = 'light',
  inline = false,
  className = '',
}: EditablePlaceholderProps) {
  if (inline) {
    return (
      <span
        title="Editable placeholder — confirm with T3 Pest Management before publishing"
        className={`inline-flex items-center gap-1.5 rounded border border-dashed px-2 py-0.5 text-xs font-medium ${
          surface === 'dark'
            ? 'border-[#C69A53]/45 bg-[#C69A53]/10 text-[#E5C894]'
            : 'border-[#C69A53]/60 bg-[#C69A53]/10 text-[#7A5922]'
        } ${className}`}
      >
        <Edit3 className="h-3 w-3 shrink-0 opacity-80" aria-hidden="true" />
        <span>{text}</span>
      </span>
    );
  }

  return (
    <div
      className={`flex items-start gap-2.5 rounded-sm border border-dashed px-3.5 py-2.5 text-xs leading-relaxed ${
        surface === 'dark'
          ? 'border-[#C69A53]/40 bg-[#18232D]/80 text-[#D8DEE4]'
          : 'border-[#C69A53]/55 bg-[#F7F6F2] text-[#43505C]'
      } ${className}`}
    >
      <Edit3
        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C69A53]"
        aria-hidden="true"
      />
      <span>{text}</span>
    </div>
  );
}
