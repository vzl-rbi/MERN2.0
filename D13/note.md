a## yo pani use garda bhayo sabai id ko image ayesi

## image ko thauma `src= {image}` garne book ko personal image show hunxa hai

// const image = book.imageUrl?.startsWith("http")
// ? book.imageUrl
// : book.imageUrl
// ? `http://localhost:8000/${book.imageUrl}`
// : "https://via.placeholder.com/150";

## other css, html, js has `<a href="#> See More</a>` anchor tag for Direct navigation with full page refresh

but #react has Client-side navigation without page refresh
`` import { Link } from 'react-router-dom';

// Client-side navigation without page refresh
`<Link to="/book/">See More</Link>`

## Another alternative method

import { useNavigate } from 'react-router-dom';

function MyComponent() {
const navigate = useNavigate(); // Initialize once

const handleClick = () => {
navigate('/book/');
};

return (
<button onClick={handleClick}>See More</button>
);
}
