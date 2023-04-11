type LinkProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
};

const Link: React.FC<LinkProps> = ({ href = "#", children, className }) => {
  return (
    <a
      href={href}
      className={className}
      target={"_blank"}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default Link;
