import useReveal from "../lib/useReveal";

export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
