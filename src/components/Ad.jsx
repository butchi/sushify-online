var React = require('react');

var Ad = React.createClass({
  render: function () {
    return (
      <ins className="adsbygoogle"
        style={{ display: 'inline-block', width: this.props.width + 'px', height: this.props.height + 'px'}}
        data-ad-client="ca-pub-3241315962888840"
        data-ad-slot="0991193574"></ins>
    );
  },

  componentDidMount: function () {
    (adsbygoogle = window.adsbygoogle || []).push({});
  }
});

module.exports = Ad;
