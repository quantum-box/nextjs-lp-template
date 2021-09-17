import Link from "next/link";
import { useSession } from "next-auth/react";
import { Button } from "@chakra-ui/react";
import cn from "classnames";
import Image from "next/image";

interface Props {
  className?: string;
  rightButton?: () => void;
}

export const AppBar: React.FC<Props> = ({ className, rightButton }) => {
  const { data: session, status } = useSession();
  return (
    <header
      className={cn(
        "flex justify-between bg-white min-h-20 items-center px-2 border-b",
        className
      )}
    >
      {/* <p>logo</p> */}
      <Link href="/">
        <Image
          className="cursor-pointer"
          src="/assets/logo-preview.svg"
          width="200"
          height="50"
        />
      </Link>
      {rightButton && (
        <Button onClick={rightButton} colorScheme="teal" variant="outline">
          プレビュー版を試す
        </Button>
      )}
    </header>
  );
};
