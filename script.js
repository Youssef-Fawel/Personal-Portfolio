document.addEventListener('DOMContentLoaded', function() {
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

    const projectDetails = {
        1: {
            title: "Temperature Conversion Program",
            image: "Photos/Temperature.png",
            description: "A web-based tool designed to convert temperatures between Celsius, Fahrenheit, and Kelvin. Users can input a temperature and select the unit they want to convert from and to, with real-time conversion results.",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            link: "#"
        },
        2: {
            title: "Guessing Game",
            image: "Photos/Guessing.png",
            description: "An interactive game where the user tries to guess a randomly generated number between 1 and 100. The game provides feedback on whether the guess is too high or too low and tracks the number of attempts until the user guesses correctly.",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            link: "#"
        },
        3: {
            title: "Contact Management System",
            image: "Photos/Contact.png",
            description: "A web-based system that allows users to add, edit, and delete contacts. The system features a form for inputting contact details such as name, email, and phone number. Contacts are stored in the browser's localStorage for persistent data management, and users can view and manage their contact list easily.",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
            link: "#"
        },
        4: {
            title: "Sudoku Solver",
            image: "Photos/Sudoku.png",
            description: "An application that solves Sudoku puzzles automatically. Users can input the numbers of a Sudoku puzzle into a grid, and the solver uses algorithms to fill in the remaining cells to complete the puzzle. This project demonstrates problem-solving techniques and algorithmic thinking.",
            technologies: ["Java"],
            link: "#"
        },
        5: {
            title: "Web Scraping Program",
            image: "Photos/Scraping.png",
            description: "A Python tool that extracts data from e-commerce websites. It scrapes product details such as names, prices, and ratings, and saves the data in a CSV file for further analysis or processing. This project highlights the use of web scraping techniques for data collection.",
            technologies: ["Python"],
            link: "#"
        },
        6: {
            title: "Calculator Web Application",
            image: "Photos/calculator.png",
            description: "A responsive web calculator built with HTML, CSS, and JavaScript. It performs basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator features a user-friendly interface and handles various edge cases to ensure accurate calculations.",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            link: "#"
        },
        7: {
            title: "Healthy Eating Website",
            image: "Photos/healthy-eating-website.png",
            description: "A website dedicated to promoting healthy living through nutrition and exercise. It features recipes for balanced meals, sports routines for physical fitness, and tips for maintaining a healthy lifestyle. The site is built with HTML, CSS, JavaScript, PHP, and SQL for dynamic content management.",
            technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "SQL"],
            link: "#"
        },
        8: {
            title: "EcoSmartHome Website",
            image: "Photos/ecosmarthome.png",
            description: "A website focused on sustainable and smart home solutions. It provides information about eco-friendly technologies, smart home devices, and energy-saving practices. The site is designed with HTML, CSS, and JavaScript to offer an engaging user experience and promote green living.",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            link: "#"
        },
        9: {
            title: "E-commerce Website for Home Building",
            image: "Photos/ecommerce-home-building.png",
            description: "An e-commerce platform specializing in products for home construction and renovation. It includes features such as product listings, shopping cart functionality, and user accounts. The website is developed using HTML5, CSS3, JavaScript, PHP, and SQL for a complete shopping experience.",
            technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "SQL"],
            link: "#"
        }
    };

    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalTechnologies = document.getElementById('modal-technologies');
    const modalLink = document.getElementById('modal-link');
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
                modalLink.href = project.link;
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
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);

    setInterval(nextSlide, 5000);

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
});