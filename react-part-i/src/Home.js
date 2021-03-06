import React, { Component } from 'react';
import avatar from './img/profile.png';

export default class Home extends Component {

  render() {
    return (
      <div>
        <div className="content pure-u-3-4">
        <div>
            <div className="posts">
                <h1 className="content-subhead">Home</h1>

                <section className="post">
                    <header className="post-header">
                        <img width="48" height="48" alt="Luis Gracia&#x27;s avatar" className="post-avatar" src={avatar} />

                        <h2 className="post-title">Welcome to Bookstore App</h2>

                        <p className="post-meta">
                            By <a href="/" className="post-author">Luis Garcia</a> under <a className="post-category post-category-design" href="/">Pure CSS</a> <a className="post-category post-category-pure" href="/">JavaScript ES6</a> <a className="post-category post-category-js" href="/">ReactJS</a>
                        </p>
                    </header>

                    <div className="post-description">
                        <p>
                        <b>Declarative: </b>
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
Declarative views make your code more predictable and easier to debug.
                        </p>
                        <p>
                        <b>Component-Based: </b>
                        Build encapsulated components that manage their own state, then compose them to make complex UIs.
Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
                        </p>
                        <p>
                        <b>Learn Once, Write Anywhere: </b>
                        We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
                        React can also render on the server using Node and power mobile apps using React Native.
                        </p>
                    </div>
                </section>
            </div>
        </div>
        </div>
      </div>
    );
  }

}