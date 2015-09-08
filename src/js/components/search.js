var React = require('react'),
    Router = require('react-router');

var Search = React.createClass({
    mixins: [
        //Neeed for transitionTo() in handleSubmit()
        Router.Navigation
    ],
    handleSubmit: function(){
        var router = this.context.router,
            urlInput = this.refs.url.getDOMNode(),
            titleInput = this.refs.title.getDOMNode(),
            videoUrl = urlInput.value,
            videoTitle = titleInput.value,
            //represents the video id (aka what's after ?v=)
            slug = videoUrl.substring(32);

        //Empty the inputs
        urlInput.value = '';
        titleInput.value = '';

        //Needed(?) to prevent routing errors.
        if (!videoTitle){
            videoTitle = ' ';
        }

        //If the slug is 'valid'
        //TODO: improve validation
        if (slug.length == 11){
            router.transitionTo('video', {slug: slug, title: encodeURIComponent(videoTitle)});
        } else {
            router.transitionTo('error', {error: 'badslug'});
        }
    },
    render: function(){
        return (
            <form className="row row-collapse clearfix" onSubmit={this.handleSubmit}>
                <div className="col-sm-5">
                    <label htmlFor="yt-url">YouTube video url</label>
                    <input id="yt-url" type="text" className="form-control" ref="url" />
                </div>
                <div className="col-sm-5">
                    <label htmlFor="title">Custom video title (optional)</label>
                    <input type="text" className="form-control" ref="title" />
                </div>
                <div className="col-sm-2">
                    <button type="submit" className="btn btn-block btn-primary">generate</button>
                </div>
            </form>
        )
    }
});

module.exports = Search;