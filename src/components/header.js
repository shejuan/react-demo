import React, { Component } from 'react'
import {
	NavLink
} from 'react-router-dom'
import '../style/css/header.css'

class Header extends Component {
	render() {
		return (
			<header className="myHeader">
				<nav>
					<ul>
						<li><NavLink exact to="/">首页</NavLink></li>
						<li><NavLink to="/news">新闻</NavLink></li>
						<li><NavLink to='/course'>课程</NavLink></li>
						<li><NavLink to="/joinUs">加入我们</NavLink></li>
					</ul>
				</nav>
			</header>
		)
	}
}
export default Header