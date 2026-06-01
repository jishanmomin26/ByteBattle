const SubmitProject = () => {
  return (
    <section id="submit-project" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Project Submission</h2>
        <p className="mb-8">
          Ready to submit your project? Click below.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSekT9nmU7-kgyN3W-I9bslcCfUGntzOOv1hfwQeKS8Q9EIdMg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
        >
          Submit Project
        </a>
      </div>
    </section>
  );
};

export default SubmitProject;