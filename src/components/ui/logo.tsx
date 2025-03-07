import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size: number;
}

export const Logo = ({ size }: LogoProps) => {
  return (
    <Link href="/">
      <Image
        src={"/logo.png"}
        alt="Z"
        width={size}
        height={size}
        quality={100}
      />
    </Link>
  );
};
