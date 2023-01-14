import React from 'react'
import Footer from './Footer';
import AboutPic from './about-img.png';
import { Link} from "react-router-dom";
import course from '../images/main-course-1.png';
import course1 from '../images/main-course-2.png'
import course2 from '../images/main-course-3.png'
import course3 from '../images/main-course-4.png'
import course4 from '../images/main-course-5.png'
import course5 from '../images/main-course-5.png'
function Lifestyle() {
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
    <h3>course 02</h3>
    <p> <a href="home.html">home >></a> course-2 </p>
</section>



<section class="course-2">

    <div class="box">
        <div class="image">
            <img src={course} alt=""/>
        </div>
        <div class="content">
            <span>business</span>
            <h3>learning is what makes you perfect</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quam.</p>
            <a href="#" class="btn">read more</a>
            <div class="icons">
                <a href="#"> <i class="fas fa-book"></i> 12 modules </a>
                <a href="#"> <i class="fas fa-clock"></i> 6 hours </a>
            </div>
        </div>
    </div>

    <div class="box">
        <div class="image">
            <img src={course1} alt=""/>
        </div>
        <div class="content">
            <span>language</span>
            <h3>learning is what makes you perfect</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quam.</p>
            <a href="#" class="btn">read more</a>
            <div class="icons">
                <a href="#"> <i class="fas fa-book"></i> 12 modules </a>
                <a href="#"> <i class="fas fa-clock"></i> 6 hours </a>
            </div>
        </div>
    </div>

    <div class="box">
        <div class="image">
            <img src={course2} alt=""/>
        </div>
        <div class="content">
            <span>development</span>
            <h3>learning is what makes you perfect</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quam.</p>
            <a href="#" class="btn">read more</a>
            <div class="icons">
                <a href="#"> <i class="fas fa-book"></i> 12 modules </a>
                <a href="#"> <i class="fas fa-clock"></i> 6 hours </a>
            </div>
        </div>
    </div>

    <div class="box">
        <div class="image">
            <img src={course3} alt=""/>
        </div>
        <div class="content">
            <span>teaching</span>
            <h3>learning is what makes you perfect</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quam.</p>
            <a href="#" class="btn">read more</a>
            <div class="icons">
                <a href="#"> <i class="fas fa-book"></i> 12 modules </a>
                <a href="#"> <i class="fas fa-clock"></i> 6 hours </a>
            </div>
        </div>
    </div>

    <div class="box">
        <div class="image">
            <img src={course4} alt=""/>
        </div>
        <div class="content">
            <span>designing</span>
            <h3>learning is what makes you perfect</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quam.</p>
            <a href="#" class="btn">read more</a>
            <div class="icons">
                <a href="#"> <i class="fas fa-book"></i> 12 modules </a>
                <a href="#"> <i class="fas fa-clock"></i> 6 hours </a>
            </div>
        </div>
    </div>

    <div class="box">
        <div class="image">
            <img src={course5} alt=""/>
        </div>
        <div class="content">
            <span>speaking</span>
            <h3>learning is what makes you perfect</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quam.</p>
            <a href="#" class="btn">read more</a>
            <div class="icons">
                <a href="#"> <i class="fas fa-book"></i> 12 modules </a>
                <a href="#"> <i class="fas fa-clock"></i> 6 hours </a>
            </div>
        </div>
    </div>

</section>
        </>
    )
}
export default Lifestyle;