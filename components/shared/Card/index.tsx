import s from "./Card.module.scss";
import cn from "classnames";

type Props = {
  className?: string;
  children: React.ReactNode;
} & JSX.IntrinsicElements["button"];

export const Card: React.FC<Props> = ({ className, children, onClick }) => {
  if (!onClick) {
    return <div className={cn(className, s.container)}>{children}</div>;
  }
  return (
    <button onClick={onClick} className={cn(className, s.container)}>
      {children}
    </button>
  );
};
