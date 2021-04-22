import { Route, Switch, Redirect } from 'react-router-dom'
import About from './Components/About/About';
import Contact from './Components/Contact Us/Contact';
import News from './Components/News/News';
import Services from './Components/Services/Services';
import Login from './Components/Login/Login';
import SinglePage from './Components/SinglePage/SinglePage';
import Register from './Components/Register/Register';

const AppRouter = () => {
    return (
        <div className="routing">
            <Switch>
                <Route path="/home" component={SinglePage} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/news" component={News} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Redirect to="/home" />
            </Switch>
        </div>
    );
}

export default AppRouter;