import { useRef, useState } from 'react';
import type { NextPage } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Autoplay, Swiper as SwiperType } from 'swiper';
import { useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { LayoutMain } from '../components/layouts';
import { Colors } from '../common/variables/color.variables';
import { AppCard, AppPagination, AppLimitSelect } from '../components/app';
import { DocsTable, DocsTableFilter } from '../components/pages/docs';
import { IDocsTableFilterProps } from '../components/pages/docs/docs-table-filter/docs-table-filter.interfaces';
import { NewsSlideItem } from '../components/pages/news';
import { RootState } from '../store/store';
import { newsList } from '../common/variables/data.variables';
import InfoCard from '../components/info-card';
import withAuthGuard from '../components/hoc/with-auth.guard';
import styles from './index.module.sass';

const Home: NextPage = () => {
  const [_, setSwiper] = useState<SwiperType>();
  const [filterActive, setFilterActive] = useState<IDocsTableFilterProps['filterActive']>('filter-one');
  const prevSlideBtn = useRef(null);
  const nextSlideBtn = useRef(null);
  const isLowVision = useSelector((state: RootState) => state.lowVision.isActive);

  const swipperNavigation = {
    nextEl: nextSlideBtn.current,
    prevEl: prevSlideBtn.current
  };

  const lowVisionClassName = isLowVision ? ' lowVision' : '';

  return (
    <LayoutMain
    pageName="Главная">
      <div className={styles.home}>
        <div className={styles.home__infoCardList}>
          <InfoCard 
          iconUrl="/icons/seen.png"
          iconColor={Colors.blue}
          text="Нужно подписать"
          count={2}
          go="" />
          <InfoCard 
          iconUrl="/icons/clock.png"
          iconColor={Colors.orange}
          text="В ожидании"
          count={5}
          go="" />
          <InfoCard 
          iconUrl="/icons/seen.png"
          iconColor={Colors.lightGreen}
          text="Подписанные"
          count={3}
          go="" />
          <InfoCard 
          iconUrl="/icons/location.png"
          iconColor={Colors.pink}
          text="Отмененные"
          count={7}
          go="" />
        </div>
      </div>
      <AppCard className={styles.home__card + lowVisionClassName}>
        <div className={styles.home__swiper}>
          <div className={styles.home__swiper__slideBtns}>
            <div className={styles.home__swiper__prevBtn}
            ref={prevSlideBtn}>
              <i className={styles.home__leftArrowIcon} />
            </div>
            <div className={styles.home__swiper__nextBtn}
            ref={nextSlideBtn}>
              <i className={styles.home__rightArrowIcon} />
            </div>
          </div>
          <Swiper
          onSwiper={setSwiper}
          effect="fade"
          autoplay={{ delay: 30 * 1000 }}
          navigation={swipperNavigation}
          modules={[EffectFade, Navigation, Autoplay]}>
            {
              newsList.map((news) => (
                <SwiperSlide key={news.id}>
                  <NewsSlideItem 
                  key={news.id} 
                  news={news} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </AppCard>
      <div className={styles.home__tableWrapper}>
        <DocsTableFilter
        filterActive={filterActive}
        filterOneText="Все документы"
        filterTwoText="Счет фактура"
        filterThreeText="Договор"
        filterFourText="Доверенность"
        filterFiveText="ТТН"
        filterOneClick={() => setFilterActive('filter-one')}
        filterTwoClick={() => setFilterActive('filter-two')}
        filterThreeClick={() => setFilterActive('filter-three')}
        filterFourClick={() => setFilterActive('filter-four')}
        filterFiveClick={() => setFilterActive('filter-five')} />
        <AppCard className={styles.home__tableWrapper__card}>
          <DocsTable tableData={['asdf123', 'aaw22', '123qwe']} />
        </AppCard>
      </div>
      <div className={styles.home__paginationLimit}>
        <AppLimitSelect getLimitValue={(limit) => console.log(limit)} />
        <AppPagination />
      </div>
    </LayoutMain>
  )
}

export default withAuthGuard(Home);
