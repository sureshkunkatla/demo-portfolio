import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { IoIosSend } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Heading from "../commonComponents/Heading";

const ContactMain = () => {
  const [formState, setFormState] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFlipped, setIsFlipped] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState("submitting");
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setFormState("success");
        setFormData({ name: "", email: "", message: "" });
        setIsFlipped(true);
      })
      .catch((error) => {
        setFormState("error");
        setIsFlipped(true);
      });
  };

  return (
    <div className="max-w-[1200px] mx-5 py-16 xl:mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <Heading text={"Contact"}/>
        <p className="text-slateGray text-md text-center mt-4">
          Have a project in mind or just want to say hello? I'd love to hear
          from you!
        </p>
      </motion.div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-[100%] md:w-[50%]"
        >
          <div
            className={`overflow-hidden rounded-xl bg-midnightBlue border border-slateGray shadow-lg transition-transform transform-style-preserve-3d duration-500 ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            <div
              className={`relative p-6 sm:p-8 ${
                isFlipped ? "rotate-y-180" : ""
              }`}
            >
              {formState === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute w-full h-full inset-0 flex flex-col backface-hidden bg-midnightBlue  items-center justify-center z-10 p-6"
                >
                  <FiCheckCircle className="w-16 h-16 text-white mb-4" />
                  <h3 className="text-xl font-medium text-white">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground text-center mt-2 text-white">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    className={
                      "w-auto p-2 rounded-md mt-3 font-semibold bg-goldenYellow text-base transition-all duration-300 relative overflow-hidden group"
                    }
                    disabled={formState === "submitting"}
                    onClick={() => [setIsFlipped(false), setFormState('idle')]}
                  >
                    Close
                  </button>
                </motion.div>
              )}
              {formState === "error" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute w-full h-full inset-0 flex flex-col backface-hidden bg-midnightBlue  items-center justify-center z-10 p-6"
                >
                  <IoMdCloseCircleOutline className="w-16 h-16 text-white mb-4" />
                  <h3 className="text-xl font-medium text-white">
                    Failed to send Message
                  </h3>
                  <p className="text-muted-foreground text-center mt-2 text-white">
                    Please try again after sometime.
                  </p>
                  <button
                    className={
                      "w-auto p-2 rounded-md mt-3 font-semibold bg-goldenYellow transition-all duration-300 relative overflow-hidden group"
                    }
                    disabled={formState === "submitting"}
                    onClick={() => [setIsFlipped(false),setFormState('idle')]}
                  >
                    Close
                  </button>
                </motion.div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-5 backface-hidden"
              >
                <div className="space-y-2">
                  <div className="relative">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="h-12 w-[100%] pl-4 pr-4 bg-deepNavy border border-slateGray rounded-md  transition-all duration-300 text-white"
                      required
                    />
                    <motion.span
                      className="absolute bottom-0 left-0 h-[2px] bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: formData.name ? "100%" : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="h-12 w-[100%] pl-4 pr-4 bg-deepNavy border border-slateGray rounded-md  transition-all duration-300 text-white"
                      required
                    />
                    <motion.span
                      className="absolute bottom-0 left-0 h-[2px] bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: formData.email ? "100%" : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="min-h-[120px] w-[100%] pl-4 pr-4 pt-2 bg-deepNavy border border-slateGray rounded-md  transition-all duration-300 text-white resize-none"
                      required
                    />
                    <motion.span
                      className="absolute bottom-0 left-0 h-[2px] bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: formData.message ? "100%" : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className={
                    "w-full h-12 text-base transition-all duration-300 relative overflow-hidden group"
                  }
                  disabled={formState === "submitting"}
                >
                  <span className="relative flex items-center justify-center gap-2 bg-goldenYellow p-2 rounded-md">
                    {formState === "submitting" ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <IoIosSend className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-[100%] md:w-[50%]  flex flex-col justify-center items-center mt-10 md:mt-0"
        >
          <div className="w-[100%] md:w-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="bg-midnightBlue w-[100%] rounded-md p-6 flex items-start space-x-4"
            >
              <div className="bg-deepNavy p-3 rounded-full">
                <IoMdMail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-white">Email</h3>
                <a
                  href="mailto:suresh.kunkatla7@gmail.com"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors text-white"
                >
                  suresh.kunkatla7@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="bg-midnightBlue rounded-md p-6 flex items-start space-x-4"
            >
              <div className="bg-deepNavy p-3 rounded-full">
                <FaLinkedin className="w-5 h-5 text-primary text-white" />
              </div>
              <div>
                <h3 className="font-medium text-white">Phone</h3>
                <a
                  href="https://www.linkedin.com/in/sureshkunkatla/"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors text-white"
                >
                  sureshkunkatla
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="bg-midnightBlue rounded-md p-6 flex items-start space-x-4"
            >
              <div className="bg-deepNavy p-3 rounded-full">
                <IoLocationSharp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-white">Location</h3>
                <p className="text-muted-foreground text-white">Tanuku</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactMain;
