import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import AppHeader from './components/common/header';
import AppHome from './views/home';
import { Layout } from 'antd';

const { Header , Content } = Layout;

function App() {
  return (
    <Layout className="mainlayout">
     <Header> 
       <AppHeader/>
     </Header>
     <Content>
       <AppHome/>
     </Content>
    </Layout>

  );
}

export default App;
