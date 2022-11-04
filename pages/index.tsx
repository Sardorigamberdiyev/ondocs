import type { NextPage } from 'next';
import { LayoutMain } from '../components/layouts';
import withAuthGuard from '../components/hoc/with-auth.guard';
import InfoCard from '../components/info-card';

const Home: NextPage = () => {
  return (
    <LayoutMain
    pageName="Главная">
      <InfoCard 
      iconUrl="/icons/seen.png"
      iconColor="#2B63C0"
      text="Нужно подписать"
      count={4} />
    </LayoutMain>
  )
}

export default withAuthGuard(Home);
