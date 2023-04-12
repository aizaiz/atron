import type { NextPage } from 'next'
import React, { useEffect } from 'react';

import { useRouter } from 'next/router';
import { ParsedUrlQueryInput } from 'querystring';

// import type { UrlObject } from 'url';

type RedirectProps = {
  href: string;
  query?: string | ParsedUrlQueryInput | null | undefined;
};

function Redirect({ href, query }: RedirectProps): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    if (!query) {
      router.replace(href);
      return;
    }

    router.replace({
      pathname: href,
      query,
    });
  });

  return <div />;
}


const Home: NextPage = () => {
  return (
    <Redirect href='/home' />
  )
}

export default Home
