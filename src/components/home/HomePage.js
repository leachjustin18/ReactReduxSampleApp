import React, {Component} from 'react';
import {Link} from 'react-router';

class HomePage extends Component {
    render() {
        return(
            <div className="jumbotron">
                <h1>Administration</h1>
                <p>React, redux, react router.  All using glorious ES6</p>
                <Link to="about" className="btn btn-primary" type="button">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;