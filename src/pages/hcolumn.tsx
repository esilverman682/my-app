import Head from 'next/head';
import { Header, Footer } from '../components';
import { client } from '../client';
import HomeColumn from '../components/HomeColumn';


export default function Hcolumn() {
  const { useQuery } = client;
  const { generalSettings } = useQuery();
  const homecolumn = useQuery().homecolumns()?.nodes;

  return (
    <>
      <Header
        title={generalSettings.title}
        description={generalSettings.description}
      />
      <Head>
        <title>Meet the Team - {generalSettings.title}</title>
      </Head>
      <main className="content content-single">
        <div className="wrap">
          <h2>Team Members</h2>
          {homecolumn.map((homecolumns) => (
          <HomeColumn key={homecolumns.id} Homecolumn={homecolumns} />))}
        </div>
      </main>
      <Footer copyrightHolder={generalSettings.title} />
    </>
  );
}