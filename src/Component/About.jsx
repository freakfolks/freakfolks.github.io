import React from 'react'
import AboutPic from './about-img.png';
import { Link} from "react-router-dom";

const About = () => {
  return (
    <>

<section class="heading">
    <h3>About us</h3>
    <p> < Link to="/">home</Link> about </p>
</section>
<section class="about">

    <div class="image">
        <img src={AboutPic} alt=""/>
    </div>

    <div class="content">
        <h3>I will stay with you until you pass your exam.</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id ducimus at maiores repellat aut debitis aliquam esse, quisquam nobis laborum velit voluptate excepturi obcaecati dignissimos omnis. Fugiat hic quod nobis?</p>
        <a href="#" class="btn">learn more</a>
    </div>

</section>
    </>
  )
}

export default About