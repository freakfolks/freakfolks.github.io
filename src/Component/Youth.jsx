import React from 'react'
import Footer from './Footer';
import AboutPic from './about-img.png';
import { Link} from "react-router-dom";
import course from '../images/course-1.png';
import course1 from '../images/course-2.png'
import course2 from '../images/course-3.png'
import course3 from '../images/course-4.png'
import course4 from '../images/course-5.png'
import course5 from '../images/course-6.png'
import course6 from '../images/course-7.png'
import course7 from '../images/course-8.png'
import course8 from '../images/course-9.png'

const Youth = () => {
  return (
    <>
    <header class="header">

    <Link to="/" class="logo"> <i class="fas fa-microphone"></i> Honest Talk </Link>

    <div id="menu-btn" class="fas fa-bars"></div>

    <nav class="navbar">
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><a href="#">Talks +</a>
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
            <li><a href="#">pages +</a>
                <ul>
                    <li><Link to="/Seakers">our speakers</Link></li>
                    <li><Link to="/Blog">blogs</Link></li>
                </ul>
            </li>
            <li><Link to="/contact">contact</Link></li>
        </ul>
    </nav>

</header>



<section class="heading">
    <h3>course 01</h3>
    <p> <Link to="/">home >></Link> course-1 </p>
</section>



<section class="course-1">

    <div class="box">
        <img src={course} alt=""/>
        <h3>web design</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, earum.</p>
        <a href="#" class="btn">read more</a>
    </div>

    <div class="box">
        <img src={course1}alt=""/>
        <h3>seo marketing</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, earum.</p>
        <a href="#" class="btn">read more</a>
    </div>

    <div class="box">
        <img src={course2} alt=""/>
        <h3>science & biology</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, earum.</p>
        <a href="#" class="btn">read more</a>
    </div>

    <div class="box">
        <img src={course3} alt=""/>
        <h3>music & dance</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, earum.</p>
        <a href="#" class="btn">read more</a>
    </div>

    <div class="box">
        <img src={course4} alt=""/>
        <h3>digital marketing</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, earum.</p>
        <a href="#" class="btn">read more</a>
    </div>

    <div class="box">
        <img src={course5} alt=""/>
        <h3>maths & statistics</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, earum.</p>
        <a href="#" class="btn">read more</a>
    </div>

    <div class="box">
        <img src={course6} alt=""/>
        <h3>data analysis</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, earum.</p>
        <a href="#" class="btn">read more</a>
    </div>

    <div class="box">
        <img src={course7} alt=""/>
        <h3>email marketing</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, earum.</p>
        <a href="#" class="btn">read more</a>
    </div>

    <div class="box">
        <img src={course8} alt=""/>
        <h3>graphic design</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, earum.</p>
        <a href="#" class="btn">read more</a>
    </div>

</section>
    </>
  )
}
export default Youth;