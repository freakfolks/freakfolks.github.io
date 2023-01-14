import React from 'react'
import Footer from './Footer';
import AboutPic from './about-img.png';
import { Link} from "react-router-dom";

const About = () => {
  return (
    <>
   <header class="header">

    <Link to='/' class="logo"> <i class="fas fa-microphone"></i> Honest Talk </Link>

    <div id="menu-btn" class="fas fa-bars"></div>

    <nav class="navbar">
        <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/about'>about</Link></li>
            <li><Link to='/talks'>Talks +</Link>
                <ul>
                    <li><Link to="/Youth">Youth</Link></li>
                    <li><Link to="/Lifestyle">Lifestyle</Link></li>
                    <li><Link to="/Education">Education</Link></li>
                    <li><Link to="/Technology">Technology</Link></li>
                    <li><Link to="/Healthcare">Healthcare</Link></li>                    
                    <li><Link to="/Entrepreneurship">Entrepreneurship</Link></li>
                    <li><Link to="/Women">Women In Leadership</Link></li>
                    <li><Link to="/Business">Business & Leadership</Link></li>
                </ul>
            </li>
            <li><Link to="/pages">pages +</Link>
                <ul>
                    <li><Link to="/Speakers">our speakers</Link></li>
                    <li><Link to="/Blog">blogs</Link></li>
                </ul>
            </li>
            <li><Link to="/contact">contact</Link></li>
        </ul>
    </nav>

</header>
<section class="heading">
    <h3>About us</h3>
    <p> < Link to="/">home >></Link> about </p>
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
<section class="footer">

    <div class="box-container">

        <div class="box">
            <h3>Explore</h3>
            <Link to='/'> <i class="fas fa-arrow-right"></i> Home </Link>
            <Link to='/about'> <i class="fas fa-arrow-right"></i> About </Link>
            <Link to="/Speakers"> <i class="fas fa-arrow-right"></i> Speakers </Link>
            <Link to="/Blog"> <i class="fas fa-arrow-right"></i> Blog </Link>
            <Link to='/contact'> <i class="fas fa-arrow-right"></i> Contact </Link>
            <a href="#"> <i class="fas fa-arrow-right"></i> our partners </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> media coverage </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> newsletter </a>
        </div>

        <div class="box">
            <h3>Categories</h3>
            <Link to="/Youth"> <i class="fas fa-arrow-right"></i> Youth </Link>
            <Link to="/Lifestyle"> <i class="fas fa-arrow-right"></i> Lifestyle </Link>
            <Link to="/Education"> <i class="fas fa-arrow-right"></i> Education </Link>
            <Link to="/Technology"> <i class="fas fa-arrow-right"></i> Technology </Link>
            <Link to="/Healthcare"> <i class="fas fa-arrow-right"></i> Healthcare </Link>
            <Link to="/Entrepreneurship"> <i class="fas fa-arrow-right"></i> Entrepreneurship </Link>
            <Link to="/Women"> <i class="fas fa-arrow-right"></i> Women In Leadership </Link>
            <Link to="/Business"> <i class="fas fa-arrow-right"></i> Business & Leadership </Link>
        </div>

        <div class="box">
            <h3>Quick Links</h3>
            <a href="#"> <i class="fas fa-arrow-right"></i> become a speaker </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> jobs & careers </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> feedback </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> help center </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> certificates </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> Sponsorship </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> campus ambassdor </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> freak folks </a>
        </div>

        <div class="box">
            <h3>Follow Us</h3>
            <a href="https://www.youtube.com"> <i class="fab fa-youtube"></i> youtube </a>
            <a href="https://www.spotify.com"> <i class="fab fa-spotify"></i> spotify </a>
            <a href="https://www.facebook.com"> <i class="fab fa-facebook-f"></i> facebook </a>
            <a href="https://www.twitter.com"> <i class="fab fa-twitter"></i> twitter </a>
            <a href="https://www.linkedIn.com"> <i class="fab fa-linkedin"></i> linkedin </a>
            <a href="https://www.instagram.com"> <i class="fab fa-instagram"></i> instagram </a>
            <a href="https://www.pinterest.com"> <i class="fab fa-pinterest"></i> pinterest </a>
            <a href="https://www.quora.com"> <i class="fab fa-quora"></i> quora </a>
        </div>

    </div>

    <div class="credit"> Developed by <span>Freak Folks</span> | all rights reserved! </div>

</section>
    </>
  )
}

export default About