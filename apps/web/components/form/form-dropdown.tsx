interface FormDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[] | string[];
  placeholder?: string;
}

export function FormDropdown({ value, onChange, options, placeholder }: FormDropdownProps) {
  const normalizedOptions = options.map((o) =>
    typeof o === 'string' ? { value: o, label: o } : o
  );

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 border border-[#EFEFEF] rounded-lg text-sm text-[#1A1A2E] bg-white focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:border-transparent"
    >
      {placeholder && <option value="">{placeholder}</option>}
      {normalizedOptions.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
}
