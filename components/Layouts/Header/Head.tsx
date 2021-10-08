import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AdminHead(props: any) {
  return (
    <Head>
      <title>{props.title || 'ADMIN DASHBOARD'}</title>
      <meta name="description" content={props.description || 'FAM - Admin Dashboard'} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
