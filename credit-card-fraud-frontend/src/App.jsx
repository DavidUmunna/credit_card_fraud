import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import FraudDetectionForm from './components/FraudDetectionForm';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/fraud-detection" component={FraudDetectionForm} />
            </Switch>
        </Router>
    );
};

export default App;