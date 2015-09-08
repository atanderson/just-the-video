var React = require('react'),
    Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    Route = Router.Route,
    App = require('./components/app'),
    Video = require('./components/video'),
    Info = require('./components/info'),
    Error = require('./components/error'),
    Home = require('./components/home');

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="video" path="video/:slug&:title" handler={Video} />
        <Route name="info" path="info" handler={Info} />
        <Route name="error" path="error/:error" handler={Error} />
        <DefaultRoute handler={Home} />
    </Route>
)

Router.run(routes, function(Root){
    React.render(<Root />, document.getElementById('app'))
});

