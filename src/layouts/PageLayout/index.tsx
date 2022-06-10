import React, { FC } from 'react';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import Sidebar from '../../shared/Sidebar';
import style from './PageLayout.module.scss';

interface IPageLayout {
  children: React.ReactNode;
}

const PageLayout: FC<IPageLayout> = ({ children }) => {
  return (
    <div className={style.section_wrapper}>
      <Header />
      <div className={style.page_wrapper}>
        <div>
          <Sidebar />
        </div>
        {/* <div className={style.content_wrapper}>{children}</div> */}
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
