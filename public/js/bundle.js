(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-dom'), require('./Ad')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-dom', './Ad'], factory) :
  factory(global.React,global.reactDom,global.Ad);
}(this, function (React,reactDom,Ad) { 'use strict';

  React = 'default' in React ? React['default'] : React;
  Ad = 'default' in Ad ? Ad['default'] : Ad;

  var Homepage = React.createClass({
    /**
     * Initial state
     */
    getInitialState: function () {
      return {
        js_in: "",
        js_out: "",
        err: null,
        activeTab: 'code'
      };
    },

    /**
     * Click 'Compress Javascript' button
     */
    handleCompressClick: function (e) {
      alert('Handle click event!');
      console.log('> handleCompressClick!');
      e.preventDefault();

      fetch('/api/js', {
        method: 'post'
      }).then(function (response) {
        return response.json();
      }).then(function (jsonResponse) {
        this.setState({ js_out: jsonResponse.js_out.code });
      }).catch(function (error) {
        this.setState({ err: 'Error: Unable to compress JavaScript' });
      });
    },

    /**
     * Render
     */
    render: function () {
      var appErrors;
      if (this.state.err) {
        appErrors = React.createElement(
          'div',
          { className: 'app_errors' },
          React.createElement(
            'ul',
            null,
            React.createElement(
              'li',
              null,
              this.state.err
            )
          )
        );
      }

      return React.createElement(
        'div',
        { id: 'HomepageComponent' },
        React.createElement(
          'section',
          { className: 'box' },
          appErrors,
          React.createElement(
            'ul',
            { className: 'tabs' },
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { href: '#js_in' },
                'Copy & Paste Javascript Code'
              )
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { href: '#js_files' },
                'Upload Javascript Files'
              )
            ),
            React.createElement(
              'li',
              { className: 'js_out' },
              React.createElement(
                'a',
                { href: '#js_out' },
                'Output'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'tab_container' },
            React.createElement(
              'div',
              { id: 'js_in', className: 'tab_content' },
              React.createElement(
                'form',
                { action: '/', method: 'post', encType: 'multipart/form-data' },
                React.createElement(
                  'h2',
                  null,
                  'Javascript Code Input'
                ),
                React.createElement('textarea', { name: 'js_in', id: 'js_in', rows: '40', cols: '80', spellCheck: 'false', autoComplete: 'off', autoCorrect: 'off', autoCapitalize: 'off', value: this.state.js_in }),
                React.createElement(
                  'p',
                  null,
                  React.createElement(Ad, { slot: '0991193574', width: 728, height: 90 })
                ),
                React.createElement(
                  'button',
                  { type: 'submit', className: 'submit', onClick: this.handleCompressClick },
                  'Compress Javascript'
                )
              )
            ),
            React.createElement(
              'div',
              { id: 'js_files', className: 'tab_content' },
              React.createElement(
                'form',
                { action: '/', method: 'post', encType: 'multipart/form-data' },
                React.createElement(
                  'h2',
                  null,
                  'Javascript File Upload'
                ),
                React.createElement(
                  'p',
                  null,
                  'Multiple file uploads will be combined ',
                  React.createElement(
                    'strong',
                    null,
                    'in order'
                  ),
                  ' and compressed together as one file.'
                ),
                React.createElement(
                  'div',
                  { id: 'js_files_fields' },
                  React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'file', name: 'js_file_0' })
                  ),
                  React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'file', name: 'js_file_1' })
                  )
                ),
                React.createElement(
                  'p',
                  null,
                  React.createElement(
                    'a',
                    { id: 'js_files_add', href: '#' },
                    '+ Upload Another File'
                  )
                ),
                React.createElement(
                  'p',
                  null,
                  React.createElement(Ad, { slot: '0991193574', width: 728, height: 90 })
                ),
                React.createElement(
                  'button',
                  { type: 'submit', className: 'submit', onClick: this.handleUploadClick },
                  'Upload Files & Compress Javascript'
                )
              )
            ),
            React.createElement(
              'div',
              { id: 'js_out', className: 'tab_content' },
              React.createElement(
                'h2',
                null,
                'Compressed Javascript Output'
              ),
              React.createElement(
                'form',
                { action: 'get' },
                React.createElement(
                  'p',
                  null,
                  React.createElement('textarea', { name: 'js_out', id: 'js_out_textarea', rows: '40', cols: '80', spellCheck: 'false', autoComplete: 'off', autoCorrect: 'off', autoCapitalize: 'off', value: this.state.js_out.replace(/&(?!amp;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') })
                )
              ),
              React.createElement(
                'button',
                { id: 'js_out_download', className: 'submit', onClick: this.handleDownloadClick },
                'Download .JS File'
              )
            )
          ),
          React.createElement('div', { className: 'clear' })
        ),
        React.createElement(
          'section',
          { className: 'box' },
          React.createElement(
            'h2',
            null,
            'What Is This?'
          ),
          React.createElement(
            'p',
            null,
            'JSCompress.com is an online javascript compressor that allows you to compress and minify your javascript files. Compressed javascript files are ideal for production environments since they typically reduce the size of the file by 30-90%. Most of the filesize reduction is achieved by removing comments and extra whitespace characters that are not needed by web browsers or visitors.'
          ),
          React.createElement(
            'h2',
            null,
            'Why Would I Want To Compress Javascript?'
          ),
          React.createElement(
            'p',
            null,
            'There are a number of reasons why compressing your javascript files is a good idea:'
          ),
          React.createElement(
            'ul',
            null,
            React.createElement(
              'li',
              null,
              'Quicker download times for your users.'
            ),
            React.createElement(
              'li',
              null,
              'Reduced bandwidth consumption of your website.'
            ),
            React.createElement(
              'li',
              null,
              'Reduced number of HTTP requests on your server when combining many javascript files into one compressed file, thus reducing the server load and allowing more visitors to access your website.'
            ),
            React.createElement(
              'li',
              null,
              'Comments and whitespace are not needed for javascript execution; Removing them will reduce file size and speed up script execution times.'
            )
          ),
          React.createElement(
            'h2',
            null,
            'What Javascript Compression Method is Used?'
          ),
          React.createElement(
            'p',
            null,
            'JSCompress.com uses ',
            React.createElement(
              'a',
              {
                href: 'https://github.com/mishoo/UglifyJS2' },
              'UglifyJS2'
            ),
            ' for all javascript minification and compression.'
          )
        )
      );
    }
  });

  var mountNode = document.getElementById("content");
  reactDom.ReactDOM.render(new Homepage({}), mountNode);

}));