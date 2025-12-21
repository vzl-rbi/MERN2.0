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

## `const formData = new FormData()`

alternative
{
bookName,
authorName,
bookPrice,
isbnNumber,
publication,
publicationAt,
image,
},
{
headers: {
"Content-Type": "multipart/form-data",
},
}

## alternative way

const handleSubmit = async (e) => {
e.preventDefault();
const formData = new FormData()
formData.append('bookName', bookName)
formData.append('bookPrice', bookPrice)
formData.append('authorName', authorName)
formData.append('isbnNumber', isbnNumber)
const res = await axios.post(
"http://localhost:8000/book", formData
);
};
