export default function Button({ children, variant = "primary", ...props }) {
  const base = "px-4 py-2 rounded text-white font-semibold";

  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-500 hover:bg-gray-600",
    danger: "bg-red-600 hover:bg-red-700",
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
