import "./App.css"
import { Route, Switch } from 'react-router-dom'
import { useState } from 'react';

import Landing from './components/pages/Landing'
import Home from './components/pages/Home'
import EditStatus from './components/forms/EditStatus';


import CoinDetailPage from "./cointracker/pages/CoinDetailPage";
import CoinSummaryPage from "./cointracker/pages/CoinSummaryPage";
import { WatchListContextProvider } from "./cointracker/context/watchListContext"
import CreateStatus from "./components/forms/CreateStatus";
import NavBar from "./components/layout/NavBar";
import Header from "./cointracker/components/Header";

function App() {
  const [user, setUser] = useState(null)


  return (
    <div className="container">

      <WatchListContextProvider>
        <Switch>


          <Route exact path='/' render={routerProps => <Landing {...routerProps} setUser={setUser} />} >         
          </Route>
          <Route path='/home' render={routerProps => <Home {...routerProps} user={user} setUser={setUser} />} >
            <Header />
            <NavBar />
            <CoinSummaryPage />
            <CoinDetailPage />
            <CreateStatus />
          </Route>

          <Route path='/update/:id' component={EditStatus} />

        </Switch>
      </WatchListContextProvider>
    </div>
  );
}

export default App;