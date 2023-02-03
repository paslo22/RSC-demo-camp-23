"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

interface IProps extends React.PropsWithChildren {
  href: string;
}

export default function NavLink({ href, children }: IProps) {
  let segments = useSelectedLayoutSegments();
  let active = href === `/${segments[0] || ""}`;

  return (
    <Link className={active ? "underline" : ""} href={href}>
      {children}
    </Link>
  );
}
