import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from './components';
import { store } from './store';
import { Provider } from 'react-redux';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Rewards = lazy(() => import('./pages/Rewards'));

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route path='/rewards' element={<Rewards />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
