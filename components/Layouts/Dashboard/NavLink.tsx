import { useRouter } from "next/router";
import Link from "next/link";

export default function NavLink({
  href,
  activeClassName,
  children,
  activeStyle,
  className,
  ...props
}: any) {
  const { pathname } = useRouter();
  const isActive = href == pathname;

  return (
    <Link
      style={isActive ? activeStyle : {}}
      className={`block w-full ${className} ${isActive && activeClassName}`}
      {...props}
      href={href}
      passHref
    >
      <a className={className}>{children}</a>
    </Link>
  );
}
