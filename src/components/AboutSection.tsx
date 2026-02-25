const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">About Me</h2>
        <div className="bg-card rounded-xl p-8 shadow-card space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            I am Sridhar S, an Information Technology student and aspiring Python Developer with a strong interest in Data Structures, backend development, and building practical applications. I enjoy solving problems and improving my logical thinking skills through consistent DSA practice.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I have hands-on experience developing projects like a Student Management System (Python + Streamlit) and a DSA Problem Tracker, where I implemented authentication, CRUD operations, filtering, grading systems, and structured data handling.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I believe in learning by building real-world projects that strengthen my understanding of OOP, backend logic, and clean code practices. Currently, I am focused on mastering Python, improving problem-solving skills, and learning Flask to grow as a backend developer.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My goal is to build efficient, scalable Python applications and continuously evolve as a software engineer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
