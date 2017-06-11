import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap';
import './index.css';

class Root extends React.Component {

    constructor(){
        super();
        this.state = {
            quote: "Random Quote Generator",
            author: "Nick Mead",
        }
    }

    generateQuote(){
        var headers = new Headers();
        headers.append("Accept", "application/json");
        headers.append("X-Mashape-Key", "52UdAltVtbmshWfxrraGxAkuNEJnp1KwAxejsnb0QpH28dGN4p");
        var request = new Request("https://andruxnet-random-famous-quotes.p.mashape.com/", {
            headers: headers
        })
        console.log(request);
        fetch(request)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    quote: data.quote,
                    author: data.author
                })
            });
    }

    render(){
        return(
            <Display
                quote={this.state.quote}
                author={this.state.author}
                onClick={() => this.generateQuote()}
            />
        );
    }
}

class Display extends React.Component {
    render(){
        return(
            <div>
                <div className="quote">{this.props.quote}</div>
                <div className="author">-{this.props.author}</div>
                <button type="button" onClick={this.props.onClick}>Get Quote</button>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);
