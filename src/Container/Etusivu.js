import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Maat from './Maat'
import Saat from './Saat/Saat'
import classes from './Etu.module.css'

class Etusivu extends Component {
    render () {
        return (
            <div className={classes.Etu}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" 
                                        exact
                                        activeStyle={{
                                            color: '#fff',
                                            textDecoration: 'underline'
                                        }}>Counries</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/saat',
                               
                            }}activeStyle={{
                                color: '#fff',
                                textDecoration: 'underline'
                            }}>WEATHER</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Route path="/" exact component={Maat} />
                <Route path="/saat" component={Saat} />
            </div>
        );
    }
}

export default Etusivu;