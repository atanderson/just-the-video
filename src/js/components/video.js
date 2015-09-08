var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link;

var Video = React.createClass({
    mixins: [
        //Neeed for getParams()
        Router.State
    ],
    render: function(){
        //Parse the url parameters and create the youtube embed link
        var slug = this.getParams().slug,
            title = this.getParams().title,
            //showinfo=0 hides the title, iv_load_policy=3 hides annotationss
            url = "http://www.youtube.com/embed/" + slug + "?showinfo=0&iv_load_policy=3";

        return (
            <div className="col-sm-10 col-sm-offset-1">
                <h1>{title}</h1>
                <div className="content embed-responsive embed-responsive-16by9">
                    <iframe id="video" className="embed-responsive-item" allowFullScreen="true" type="text/html" width="640" height="390"
                        src={url} frameBorder="0" />
                </div>
                <Link className="btn btn-default" to="/">generate another</Link>
            </div>
        )
    }
});

module.exports = Video;