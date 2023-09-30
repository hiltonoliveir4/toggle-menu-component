interface ButtonNavMenuProps {
  title: string;
  page: string;
  active: boolean;
  onClick: () => void;
}

export default function ButtonNavMenu({
  title,
  page,
  active,
  onClick,
}: ButtonNavMenuProps) {
  return (
    <button className={active ? "btn-active" : ""} onClick={onClick}>
      {title}
    </button>
  );
}
