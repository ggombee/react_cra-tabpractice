import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './component/Header';
import Login from './component/Login';
import Club from './component/Club';
import Coupon from './component/Coupon';
import Notice from './component/Notice';
import MarketMain from './component/Market/MarketMain';
import Gift from './component/Gift';
import Footer from './component/Footer';

// main 라우터 이용 페이지 전환
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/Login" component={Login} />
        <Route exact path="/Club" component={Club} />
        <Route path="/Coupon" component={Coupon} />
        <Route path="/Notice" component={Notice} />
        <Route path="/Market/MarketMain" component={MarketMain} />
        <Route path="/Gift" component={Gift} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
