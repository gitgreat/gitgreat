//Child component within the HomepageApp and the CreateEventApp to toggle 
//between the two App pages.
var Nav = () => (
  <div className="nav">
  	<a href='/' className="title">Friends</a>
    <a href='/'>Home </a>
    <a href='/create'>Create Event</a>
    <a href='#'>Log In</a>
  </div>
);

window.Nav = Nav;