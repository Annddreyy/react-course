import React from "react";

const Header = () => {
    return (
        <nav className="left-navigation">
			<ul>
				<li>
					<a href="/profile">Profile</a>
				</li>
				<li>
					<a href="/messages">Messages</a>
				</li>
				<li>
					<a href="/music">Music</a>
				</li>
				<li>
					<a href="/settings">Settings</a>
				</li>
			</ul>
		</nav>
    )
};

export default Header;