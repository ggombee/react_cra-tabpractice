import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './component/Header';
import Club from './component/Club';
import Coupon from './component/Coupon';
import Login from './component/Login';
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
        {/* <Route path="/Vicmarket" component={Vicmarket} />
        <Route path="/Event" component={Event} />
        <Route path="/Leaflet" component={Leaflet} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
