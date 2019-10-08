import {routerActions} from 'react-router-dom';

const userIsAuthenticated = user.req

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="login" component={LoginPage} />
    <Route path="logout" component={LogoutPage} />
    <Route path="navbar" component={NavBar} />

    <Route path="profilepage" pages={ProfilePage} />
    <Route path="signup" pages={SignupPage} />
    <Route path="dreamjobjourney" pages={DreamJobJourneyPage} />

    <Route path="about" component={AboutPage} />
    <Route path="activity" component={Activity} />
    <Route path="experience" component={Experience} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);