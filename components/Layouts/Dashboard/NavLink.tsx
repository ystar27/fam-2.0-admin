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
  const isActive = pathname === href;
  console.log(pathname, href);

  return (
    <Link href={href} passHref>
      <a
        style={isActive ? activeStyle : {}}
        className={`block w-full ${className} ${isActive && activeClassName}`}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
}
