import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/router";
import Link from "next/link";

const NavListChild = ({
  href,
  item,
  children,
  className,
  activeStyle,
  ...props
}: any) => {
  const { pathname } = useRouter();
  const isActive = href == pathname;

  return (
    <Link href={href} passHref>
      <a
        style={isActive ? activeStyle : {}}
        className={`${className}`}
        {...props}
      >
        <div className={"ml-5 flex items-center"}>
          <FontAwesomeIcon className={"h-2 mr-3"} icon={faCircle} />
          {item.name}
        </div>
      </a>
    </Link>
  );
};

export default NavListChild;
