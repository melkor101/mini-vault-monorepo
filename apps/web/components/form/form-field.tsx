export function FormField({ label, children, error, required }: { label: string; children: React.ReactNode; error?: string; required?: boolean }) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-[#1A1A2E]">
        {label}
        {required && <span className="text-[#6C63FF] ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
