document.addEventListener('DOMContentLoaded', function() {
    // Navbar and scroll functionality
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const scrollUpBtn = document.querySelector('.scroll-up-btn');
        navbar.classList.toggle("sticky", window.scrollY > 20);
        scrollUpBtn.classList.toggle("show", window.scrollY > 500);
    });

    document.querySelector('.scroll-up-btn').addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    document.querySelectorAll('.navbar .menu li a').forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
        });
    });

    document.querySelector('.menu-btn').addEventListener('click', function() {
        document.querySelector('.navbar .menu').classList.toggle("active");
        this.classList.toggle("active");
    });

    // Typing animation
    try {
        new Typed(".typing", {
            strings: ["Software Engineering Student", "Web Developer", "Problem Solver", "Tech Enthusiast"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });

        new Typed(".typing-2", {
            strings: ["Software Engineer Student", "Web Developer", "Problem Solver", "Tech Enthusiast"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    } catch (error) {
        console.error("Error initializing Typed.js:", error);
    }

    const projectDetails = {        
        1: {   
            title: "Albert Einstein Tribute",             
            image: "Photos/Einstein_Tribute.png",             
            description: "An interactive web tribute dedicated to Albert Einstein, showcasing his life, achievements, and lasting impact on science. The site features dynamic animations, including a unique intro with Einstein's famous E=mc² equation, and sections highlighting his qualities, achievements, and legacy.",      
            technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"]      
        },   
        2: {           
            
            title: "Temperature Conversion Program",            
            image: "Photos/Temperature.png",         
            description: "A web-based tool designed to convert temperatures between Celsius, Fahrenheit, and Kelvin. Users can input a temperature and select the unit they want to convert from and to, with real-time conversion results.",          
            technologies: ["HTML5", "CSS3", "JavaScript"]      
        },       
        3: {           
            title: "Guessing Game",           
            image: "Photos/Guessing.png",           
            description: "An interactive game where the user tries to guess a randomly generated number between 1 and 100. The game provides feedback on whether the guess is too high or too low and tracks the number of attempts until the user guesses correctly.",        
            technologies: ["HTML5", "CSS3", "JavaScript"]     
        },    
        4: {           
            title: "Contact Management System",       
            image: "Photos/Contact.png",         
            description: "A web-based system that allows users to add, edit, and delete contacts. The system features a form for inputting contact details such as name, email, and phone number. Contacts are stored in the browser's localStorage for persistent data management, and users can view and manage their contact list easily.",          
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL"]       
        },         
        5: {           
            title: "Sudoku Solver",        
            image: "Photos/Sudoku.png",          
            description: "An application that solves Sudoku puzzles automatically. Users can input the numbers of a Sudoku puzzle into a grid, and the solver uses algorithms to fill in the remaining cells to complete the puzzle. This project demonstrates problem-solving techniques and algorithmic thinking.",        
            technologies: ["Java"]        
        },      
        6: {           
            title: "Web Scraping Program",    
            image: "Photos/Scraping.png",         
            description: "A Python tool that extracts data from e-commerce websites. It scrapes product details such as names, prices, and ratings, and saves the data in a CSV file for further analysis or processing. This project highlights the use of web scraping techniques for data collection.",        
            technologies: ["Python"]       
        },        
        7: {           
            title: "Calculator Web Application",         
            image: "Photos/calculator.png",          
            description: "A responsive web calculator built with HTML, CSS, and JavaScript. It performs basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator features a user-friendly interface and handles various edge cases to ensure accurate calculations.",       
            technologies: ["HTML5", "CSS3", "JavaScript"] 
        },      
        8: {             
            title: "Healthy Eating Website",          
            image: "Photos/healthy-eating-website.png",     
            description: "A website dedicated to promoting healthy living through nutrition and exercise. It features recipes for balanced meals, sports routines for physical fitness, and tips for maintaining a healthy lifestyle. The site is built with HTML, CSS, JavaScript, PHP, and SQL for dynamic content management.",            
            technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "SQL"]     
        },      
        9: {           
            title: "EcoSmartHome Website",      
            image: "Photos/ecosmarthome.png",         
            description: "A website focused on sustainable and smart home solutions. It provides information about eco-friendly technologies, smart home devices, and energy-saving practices. The site is designed with HTML, CSS, and JavaScript to offer an engaging user experience and promote green living.",         
            technologies: ["HTML5", "CSS3", "JavaScript"]     
        },        
        10: {            
            title: "E-commerce Website for Home Building",       
            image: "Photos/ecommerce-home-building.png",        
            description: "An e-commerce platform specializing in products for home construction and renovation. It includes features such as product listings, shopping cart functionality, and user accounts. The website is developed using HTML5, CSS3, JavaScript, PHP, and SQL for a complete shopping experience.",       
            technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "SQL"]       
        },      
        11: {          
            title: "Task Management System",          
            image: "Photos/Task.png",            
            description: "A comprehensive tool for managing user tasks with features like adding, updating, and deleting tasks, session management, priority settings, and automated reminders for tasks due the next day. The system is built using HTML5, CSS3, JavaScript, PHP, MySQL, and Bootstrap for efficient task handling and a user-friendly interface.",         
            technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"]   
        }   
    };

    // Modal functionality
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalTechnologies = document.getElementById('modal-technologies');
    const closeModal = document.querySelector('.close-modal');

    document.querySelectorAll('.view-project').forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.getAttribute('data-id');
            const project = projectDetails[projectId];

            if (project) {
                modalTitle.textContent = project.title;
                modalImage.src = project.image;
                modalDescription.textContent = project.description;
                modalTechnologies.textContent = `Technologies used: ${project.technologies.join(', ')}`;
                modal.style.display = "block";
            }
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

let currentSlide = 0;
const slides = document.querySelectorAll('.project-card');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);

// Auto-rotate slides
const autoRotateInterval = 2000; // 2 seconds
setInterval(nextSlide, autoRotateInterval);


    // Project filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            slides.forEach(slide => {
                if (filter === 'all' || slide.getAttribute('data-category') === filter) {
                    slide.style.display = 'block';
                } else {
                    slide.style.display = 'none';
                }
            });
        });
    });

    // Update copyright year
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;

    // Implement lazy loading for project images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => lazyLoadObserver.observe(img));

    // Keyboard navigation for project slider
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// jQuery for menu button (if you're using jQuery)
$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
});

// Vanilla JavaScript alternative for jQuery functionality
document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.navbar .menu').classList.toggle("active");
    this.querySelector('i').classList.toggle("active");
});

window.addEventListener('scroll', function() {
    if (this.scrollY > 20) {
        document.querySelector('.navbar').classList.add("sticky");
    } else {
        document.querySelector('.navbar').classList.remove("sticky");
    }
});
