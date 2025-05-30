const Footer = () => {
  return (
    <footer className="bg-sky-800  text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Paragraph Description */}
        <p className="text-center md:text-left text-sm md:text-base">
          Welcome to To-do List this is a Assignment given by Celebal Technology and Its under React JS domain and this app is responsive
        </p>

        {/* Copyright */}
        <p className="text-center md:text-right text-sm md:text-base">
          &copy; 2025 Priyanshu Verma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
