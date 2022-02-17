import Header from '@/components/Header';
import withAuth from '@/HOC/withAuth';

function Home() {
  return (
    <>
      <Header />
    </>
  );
}

export default withAuth(Home);
