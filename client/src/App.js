import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
// import SearchResultsContainer from './components/SearchResultsContainer';
// import WatchPage from './components/WatchPage';
const LazySearchResultsContainer = React.lazy(()=> import('./components/SearchResultsContainer'))
const LazyWatchPage = React.lazy(()=> import('./components/WatchPage'))

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: 'watch',
        element: <LazyWatchPage />
        // element: <WatchPage />
      },
      {
        path: 'searchresults/:query',
        element: <LazySearchResultsContainer />
        
      },
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        
        <RouterProvider router={appRouter} />
        {/*  
      header
      body
        sidebar
          subscribed channels
          history
          playlist
        main container
          buttonList
          video Container
            videoCard
      */}
      </div>
    </Provider>
  );
}

export default App;
