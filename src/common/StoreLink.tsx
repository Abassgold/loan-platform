import Image from "next/image";
import { ButtonLinkProps } from "./ButtonLink";
import Link from "next/link";

function StoreLink({
  href,
  target,
  logo,
  upperText,
  lowerText,
}: ButtonLinkProps) {
  return (
    <Link href={href} target={target}>
      <Image src={logo || ''} alt={`${lowerText} logo`} className="w-5" />
      <div>
        <p className="text-xs">{upperText}</p>
        <p>{lowerText}</p>
      </div>
    </Link>
  );
}

export default StoreLink;
