type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function Button({ children, className = "",type="button",disabled=false }: ButtonProps) {
  return (
    <button
      className={`rounded-md bg-linear-to-r from-[#F9959D] to-[#A465B8]
      px-5 py-2 text-sm font-medium text-white font-poppins cursor-pointer
      hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-400
      ${className}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
