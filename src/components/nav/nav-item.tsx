"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavItemProps {
  label: string;
  icon: IconDefinition;
  href: string;
  active?: boolean;
}

export const NavItem = ({ label, icon, href, active }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-6 py-3 
      ${active || isActive ? "opacity-100" : "opacity-50"}
      hover:opacity-100`}
    >
      <FontAwesomeIcon icon={icon} className="size-6" />
      <div className="text-lg">{label}</div>
    </Link>
  );
};
