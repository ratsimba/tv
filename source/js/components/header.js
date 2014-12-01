var React = require('react');

var Header = React.createClass({

    render: function() {
        return (
            <div className="header">
                <button className="clear" onClick={this.props.clearHandler}>clear</button>
                <button className="pause" onClick={this.props.pauseHandler}>pause</button>
                <button className="resume" onClick={this.props.resumeHandler}>resume</button>
            </div>
        );
    }

});

module.exports = Header;
