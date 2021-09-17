import s from "./Footer.module.scss";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "../../../public/assets/f_logo_RGB-Blue_1024.svg";
import Twitter from "../../../public/assets/Logo blue.svg";
import Instagram from "../../../public/assets/Instagram-Icon.svg";

interface Props {
  className?: string;
  rightButton?: () => void;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn(s.footer, className)}>
      <div className={s.pageLinks}>
        <Link href="">
          <a>
            <span>Contact</span>
          </a>
        </Link>
        <Link href="">
          <a>
            <span>Testimonials</span>
          </a>
        </Link>
        <Link href="">
          <a>
            <span>Terms & Conditions</span>
          </a>
        </Link>
        <Link href="">
          <a>
            <span>Privacy Policy</span>
          </a>
        </Link>
        <Link href="">
          <a>
            <span>For teams</span>
          </a>
        </Link>
      </div>
      <div className={s.snsLinks}>
        <a>
          <Image alt="facebook" src={FacebookIcon} width={25} height={25} />
        </a>
        <a>
          <Image alt="instagram" src={Instagram} width={25} height={25} />
        </a>
        <a>
          <Image alt="twitter" src={Twitter} width={25} height={25} />
        </a>
      </div>
      <p className="mt-4">2021 Skill Forest, Inc. All Right Reserved.</p>
    </footer>
  );
};
