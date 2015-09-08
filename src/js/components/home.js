var React = require('react'),
    Link = require('react-router').Link,
    Search = require('./search'),
    Info = require('./info');

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron clearfix">
                <div className="row row-collapse">
                    <div className="col-sm-12">
                        <h1 className="pull-left">Just the video.</h1>
                        <h2 className="pull-left"><Link to="/info"><i className="glyphicon glyphicon-info-sign"></i></Link></h2>
                    </div>
                </div>
                <Search />
            </div>
        )
    }
});

module.exports = Home;