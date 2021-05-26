import React from 'react';
import Layout from '../../components/Layout';

import s from './Empty.module.scss';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <div>
      <Layout className={s.layout}>
        <div>This is Empty Page for {title}</div>
      </Layout>
    </div>
  );
};

export default EmptyPage;
