import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function AdminHead(props: any) {
  return (
    <Head>
      <title>{props.title || "ADMIN DASHBOARD"}</title>
      <meta
        name="description"
        content={props.description || "FAM - Admin Dashboard"}
      />
      {/* <Link rel="icon" href="/favicon.ico" /> */}
    </Head>
  );
}
