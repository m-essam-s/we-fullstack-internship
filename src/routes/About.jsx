const About = () => {
    let aboutMe = [
        "Welcome to my digital space! I'm Mohamed Essam, an aspiring software engineer currently pursuing a Bachelor's degree in Computer Science and Engineering at King Salman International University. With a passion for technology and a focus on integrating Artificial Intelligence, I am driven by the desire to contribute to innovative projects that push the boundaries of what’s possible.",
        "My journey in software development began with a strong foundation in programming languages like C, Python, and JavaScript, and has since expanded to include expertise in both front-end and back-end development. I've had the privilege of interning at esteemed organizations such as Telecom Egypt and CIB Egypt, where I honed my skills in full-stack development, working with technologies like React, PHP, Laravel, and MySQL.",
        "My academic and professional experiences have fueled my passion for AI, leading me to gain a deep understanding of Machine Learning, Deep Learning, and their applications. During my time as an AI intern at Zewail City of Science and Technology, I explored the intersections of AI and embedded systems, which solidified my interest in this dynamic field.",
        "Beyond formal education and internships, I've embarked on self-learning projects that challenge my problem-solving abilities and creativity. From developing a cross-platform car rental app using Flutter and Firebase to creating a comprehensive Learning Management System database, I continually seek opportunities to apply my skills in real-world scenarios.",
        "Participation in the Egyptian Collegiate Programming Contest and other collaborative programming challenges has further sharpened my analytical thinking and teamwork abilities. These experiences have not only enhanced my technical prowess but also my ability to deliver under pressure.",
        "As I continue my journey in software engineering, I am committed to leveraging my skills in AI and software development to contribute to transformative projects. I invite you to explore my portfolio, where you can learn more about my work and the projects that drive my passion for innovation.",
    ]

    return (
        <section className="about" id="about">
            <h2 className="sec-title">About</h2>
            <div className="sec-content" id="about-content">
                {aboutMe.map((para, index) => <p key={index} className="about-p">{para}</p>)}
            </div>
        </section>


    )
}

export default About