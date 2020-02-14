import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import { One } from './One'
import { Two } from './Two'
import { Three } from './Three'
import { Four } from './Four'
import { Five } from './Five'


export const Blog = () => {

    const [posts, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://jsonplaceholder.typicode.com/posts');
            setUsers(result.data)
        }
        fetchData()
    }, [])

    const user1 = posts.filter((elt) => elt.userId === 1)
    const user2 = posts.filter((elt) => elt.userId === 2)
    const user3 = posts.filter((elt) => elt.userId === 3)
    const user4 = posts.filter((elt) => elt.userId === 4)
    const user5 = posts.filter((elt) => elt.userId === 5)

    return (
        <div>
            <Router>
                <nav id='navbar' className="navbar navbar-light">
                    <p><span className='h4'>My Blog</span> <small>Version 2020 - I tried to use react-router dom</small></p>
                    <ul >
                        <div >
                            <ul className='list-group list-group-horizontal ' role='tablist'>
                            <li className='list-group-item '>
                                <NavLink exact activeClassName='current' to='/'>User 1</NavLink>
                                </li>
                                <li className='list-group-item nav-item '>
                                <NavLink exact activeClassName='current' to='/two'> User-2</NavLink>
                                </li>
                                <li className='list-group-item nav-item '>
                                <NavLink exact activeClassName='current' to='/three'>User-3</NavLink>
                                </li>
                                <li className='list-group-item nav-item '>
                                <NavLink exact activeClassName='current' to='/four'>User-4</NavLink>
                                </li>
                                <li className='list-group-item nav-item '>
                                <NavLink exact activeClassName='current' to='/five'>User-5</NavLink>
                                </li>
                            </ul>

                        </div>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path='/' > <One data={user1} /> </Route>
                    <Route path='/two' > <Two data={user2} /> </Route>
                    <Route path='/three' > <Three data={user3} /></Route>
                    <Route path='/four'> <Four data={user4}/></Route>
                    <Route path='/five' ><Five data={user5}/> </Route>
                </Switch>

            </Router>

        </div>
    )
}

export const Footer = () =>{
    return(
        <div className='jumbotron bgFooter py-2'>
            <h4>Blog version 2020</h4>
           <p className='lead'>I’ve been learning React for a few months and I’m doing a few little apps like this to practice React.</p>
           <p>I used : Create-React-App - Bootstrap IV - Axios - <a href="https://jsonplaceholder.typicode.com/">Json placeHolder API</a></p>
           <p>© Fevrier 2020 Laurent CAMINADE</p>
        </div>
    )
}

