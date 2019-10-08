import {routerActions} from 'react-router-dom';
import 

import ProfilePage from './pages/ProfilePage/ProfilePage';

const userIsAuthenticated = user.req

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="login" component={LoginPage} />
    <Route path="logout" component={LogoutPage} />
    <Route path="navbar" component={NavBar} />

    <Route path="profile" pages={ProfilePage} />
    <Route path="signup" pages={SignupPage} />
    <Route path="dreamjobjourney" pages={DreamJobJourneyPage} />

    <Route path="about" component={AboutPage} />
    <Route path="activity" component={Activity} />
    <Route path="experience" component={Experience} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);