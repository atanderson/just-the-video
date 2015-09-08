var React = require('react'),
    Router = require('react-router'),
    Search = require('./search');

var Error = React.createClass({
    mixins: [
        //Neeed for getParams()
        Router.State
    ],
    render: function(){
        //Error shortcode passed from transition to this page as parameter
        var errorCode = this.getParams().error,
            errorMessage;

        //If the pasted url does not have the video slug/id needed for the iframe
        if (errorCode = 'badslug') {
            errorMessage = 'Your YouTube url was formatted improperly. Please check that you copied it correctly.'
        }

        return(
            <div className="jumbotron">
                <Search />
                <p className="alert alert-danger">{errorMessage}</p>
            </div>
        )
    }
});

module.exports = Error;