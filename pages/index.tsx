import { BasicTable } from '@/components/BasicTable.components';
const Home = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center pt-[100px]">
        <h2>PILYTIX Scored Opportunities</h2>
        <BasicTable></BasicTable>
      </div>
    </>
  );
};

export default Home;
