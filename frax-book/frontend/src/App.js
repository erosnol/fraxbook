import "./App.css"
import { Route, Switch } from 'react-router-dom'
import { useState } from 'react';

import Landing from './components/pages/Landing'
import Home from './components/pages/Home'
import EditStatus from './components/forms/EditStatus';


import CoinDetailPage from "./cointracker/pages/CoinDetailPage";
import { WatchListContextProvider } from "./cointracker/context/watchListContext"


function App() {
  const [user, setUser] = useState(null)


  return (
    <div className="container">

      <WatchListContextProvider>
        <Switch>
          <Route exact path='/' render={routerProps => <Landing {...routerProps} setUser={setUser} />} />
          <Route path='/home' render={routerProps => <Home {...routerProps} user={user} setUser={setUser} />} />
          <Route path="/coins/:id" component={CoinDetailPage} />
          <Route path='/update/:id' component={EditStatus} />
        </Switch>
      </WatchListContextProvider>
    </div>
  );
}

export default App;