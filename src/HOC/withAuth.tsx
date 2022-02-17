import { NextComponentType } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function withAuth<T>(WrappedComponent: NextComponentType<T>) {
  const Auth = (pageProps: T) => {
    const router = useRouter();
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.replace('/auth');
      } else {
        if (token != 'test') {
          localStorage.removeItem('token');
          router.replace('/auth');
        }
      }
    }, []);

    return <WrappedComponent {...pageProps} />;
  };
  return Auth;
}

export default withAuth;
