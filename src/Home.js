import { useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My New blog', body: 'Lorem ipsum dolor sit amet consectetur.', author: 'lorem', id: 1},
        {title: 'New Technology', body: 'Lorem ipsum dolor sit amet consectetur.', author: 'ipsum', id: 2},
        {title: 'The Importance of IOT', body: 'Lorem ipsum dolor sit amet consectetur.', author: 'dolor', id: 3}
    ])

    return ( 
        <div className="home">
            <Bloglist blogs= {blogs} title="All blogs"/>
        </div>
     );
}

export default Home;

