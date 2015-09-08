var React = require('react'),
    Link = require('react-router').Link;

var Info = React.createClass({
    render: function(){
        return(
            <div className="col-sm-12">
                <Link className="btn btn-primary" to="/">home</Link>

                <h1>About this project</h1>

                <h3>Sharing YouTube videos is my favorite thing on the internet.</h3>

                <p>Unfortunately, that does not mean it is without flaw.
                 In particular, there is one thing that I absolutely hate about the platform:
                </p>

                <h4>The Text.</h4>

                <p>I have seen otherwise awesome video content ruined by the choice of title and description too many times to count.
                On top of that, I probably don't have to tell you how awful YouTube comments are. 
                If you want to see <a href="https://en.wikipedia.org/wiki/Godwin%27s_law">Godwin's law</a> in action, just start reading 
                the "discussion" on your favorite videos.</p> 
                
                <h4>So how do we solve this?</h4>
                
                <p>By removing the text of course! The simplest way I have found to do this is to embed the video on a page with a few settings enabled.
                This method also ensures that the content creator gets any/all associated ad revenue, which is important (to me at least). In short:</p>  
                
                <p><strong>No more comments, no more spoiler-laden descriptions, no more "related" videos taking up 30% of the screen.</strong> </p>

                <h2>Contact</h2>
                
                <p>This project was created by Andrew Anderson, a frontend developer and hopeless internet addict living in Seattle WA.</p>
                <a href="https://github.com/atanderson"><i className="fa fa-4x fa-github"></i></a>
            </div>
        )
    }
});

module.exports = Info;