import React, { useState } from "react";
import MobileStepper from "@mui/material/MobileStepper";
import student from "../images/student.png";
import boy from "../images/boy.png";
import father from "../images/father.png";
import laptop from "../images/laptop.png";
import teacher from "../images/teacher.png";
import badge from "../images/badge.png";
import barChart from "../images/bar-chart.png";
import eyes from "../images/eyes.png";
import foundation from "../images/foundation.png";
import infographic from "../images/infographic.png";
import target from "../images/target.png";
import pic from "../images/pic.png";
const steps = [
  "Which describes you best?",
  "Which are you most interested in?",
  "You're in the right place",
  "What is your math comfort level?",
  "You're on your way!",
];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    selectedOptionStep1: "",
    selectedOptionStep2: "",
    selectedOptionStep4: "",
  });

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (step, option) => {
    setFormData({
      ...formData,
      [`selectedOptionStep${step}`]: option,
    });
    setSelectedOption(option); // Update selected option state
  };

  const handleContinue = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSelectedOption(""); // Reset selected option state
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <>
            <h2 className="text-xl font-bold mt-4 text-center">
              Which describes you best?
            </h2>
            <p className="text-center text-sm mt-1">
              This will help us personalize your experience
            </p>
            <div className="p-1 max-w-lg mx-auto">
              <div
                className={`border border-gray-400 rounded-md  my-5 p-1 cursor-pointer flex ${
                  selectedOption === "Student" ? " border-yellow-400 hover:shadow-lg border-2 border-opacity-40" : ""
                }`}
                onClick={() => handleOptionChange(1, "Student")}
              >
                <img src={student} alt="" width="40px" height="20px" />
                <p className=" py-2 px-3">Student or soon be enrolled</p>
              </div>
              <div
                className={`border border-gray-400 rounded-md  my-5 p-1 cursor-pointer flex  ${
                  selectedOption === "Professional" ? "border-red-500" : ""
                }`}
                onClick={() => handleOptionChange(1, "Professional")}
              >
                <img src={badge} alt="" width="40px" height="20px" />
                <p className=" py-2 px-3">Professional pursuing a career</p>
              </div>
              <div
                className={`border border-gray-400 rounded-md  my-5 p-1 cursor-pointer flex  ${
                  selectedOption === "Parent" ? "border-red-500" : ""
                }`}
                onClick={() => handleOptionChange(1, "Parent")}
              >
                <img src={father} alt="" width="40px" height="20px" />
                <p className=" py-2 px-3">Parent of a school-age child</p>
              </div>
              <div
                className={`border border-gray-400 rounded-md  my-5 p-1 cursor-pointer flex  ${
                  selectedOption === "Lifelong learner" ? "border-red-500" : ""
                }`}
                onClick={() => handleOptionChange(1, "Lifelong learner")}
              >
                <img src={laptop} alt="" width="40px" height="20px" />
                <p className=" py-2 px-3">Lifelong learner</p>
              </div>
              <div
                className={`border border-gray-400 rounded-md  my-5 p-1 cursor-pointer flex  ${
                  selectedOption === "Teacher" ? "border-red-500" : ""
                }`}
                onClick={() => handleOptionChange(1, "Teacher")}
              >
                <img src={teacher} alt="" width="40px" height="20px" />
                <p className=" py-2 px-3">Teacher</p>
              </div>
              <div
                className={`border border-gray-400 rounded-md  my-5 p-1 cursor-pointer flex  ${
                  selectedOption === "Other" ? "border-red-500" : ""
                }`}
                onClick={() => handleOptionChange(1, "Other")}
              >
                <img src={boy} alt="" width="40px" height="20px" />
                <p className=" py-2 px-3">Other</p>
              </div>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <h2 className="text-xl font-bold mt-4 text-center">
              Which are you most interested in?
            </h2>
            <p className="text-center text-sm mt-1">
              Choose just one. This will help us get you started (but won't
              limit your experience)
            </p>
            <div className="p-1 max-w-lg mx-auto">
              <div
                className={`border border-gray-400 rounded-md  my-5 p-1 cursor-pointer flex ${
                  selectedOption === "Learning" ? "border-red-500" : ""
                }`}
                onClick={() => handleOptionChange(1, "Learning")}
              >
                <img src={barChart} alt="" width="40px" height="20px" />
                <p className=" py-2 px-3">
                  Learning specific skills to advance my career
                </p>
              </div>
              <div
                className={`border border-gray-400 rounded-md  my-5 p-1 cursor-pointer flex ${
                  selectedOption === "Exploring" ? "border-red-500" : ""
                }`}
                onClick={() => handleOptionChange(1, "Exploring")}
              >
                <img src={infographic} alt="" width="40px" height="20px" />
                <p className=" py-2 px-3">
                  Exploring new topics I'm interested in
                </p>
              </div>
              <div
                className={`border border-gray-400 rounded-md  my-5 p-1 cursor-pointer flex ${
                  selectedOption === "Refreshing" ? "border-red-500" : ""
                }`}
                onClick={() => handleOptionChange(1, "Refreshing")}
              >
                <img src={foundation} alt="" width="40px" height="20px" />
                <p className=" py-2 px-3">Refreshing my math foundations</p>
              </div>
              <div
                className={`border border-gray-400 rounded-md  my-5 p-1 cursor-pointer flex ${
                  selectedOption === "Exercising" ? "border-red-500" : ""
                }`}
                onClick={() => handleOptionChange(1, "Exercising")}
              >
                <img src={target} alt="" width="40px" height="20px" />
                <p className=" py-2 px-3">Exercising my brain to stay sharp</p>
              </div>
              <div
                className={`border border-gray-400 rounded-md  my-5 p-1 cursor-pointer flex ${
                  selectedOption === "Something else" ? "border-red-500" : ""
                }`}
                onClick={() => handleOptionChange(1, "Something else")}
              >
                <img src={eyes} alt="" width="40px" height="20px" />
                <p className=" py-2 px-3">Something else</p>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-row ">
              {/* Image */}
              <img
                src={pic}
                alt="Brilliant"
                width="200px"
                height="400px"
                className=" m-20"
              />
              {/* Text */}
              <div className=" w-2/3 py-28">
                <h2 className="text-xl font-bold my-4 ">
                  You're in the right place
                </h2>
                <p>
                  Brilliant gets you hands-on to help improve your professional
                  skills and knowledge. You'll interact with concepts and solve
                  fun problems in math, science, and computer science.
                </p>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <>
            <h2 className="text-xl font-bold mt-8 text-center">
              What is your math comfort level?
            </h2>
            <p className="text-center text-sm my-4">
              {" "}
              Choose the highest level you feel confident in - you can always
              adjust later
            </p>
            <div className="flex flex-row p-5 gap-4 mb-5">
              <div
                className={`border border-gray-400 rounded-md p-8 h-36 w-80 cursor-pointer ${
                  selectedOption === "Arithmetic" ? "border-red-500" : ""
                }`}
                onClick={() => handleOptionChange(1, "Arithmetic")}
              >
                <p className="text-sm text-center">5 × 1/2 = ?</p>
                <p className="font-semibold text-sm py-2 text-center">
                  Arithmetic
                </p>
                <p className="text-md opacity-50 text-center">Introductory</p>
              </div>
              <div
                className={`border border-gray-400 rounded-md p-8 h-36 w-80 cursor-pointer ${
                  selectedOption === " Basic Algebra" ? "border-red-500" : ""
                }`}
                onClick={() => handleOptionChange(1, " Basic Algebra")}
              >
                <p className="text-sm text-center">3x + 5 = 4</p>
                <p className="font-semibold text-sm py-2 text-center">
                  Basic Algebra
                </p>
                <p className="text-md opacity-50 text-center">Foundational</p>
              </div>
              <div
                className={`border border-gray-400 rounded-md p-4 h-36 w-80 cursor-pointer ${
                  selectedOption === "Intermediate Algebra"
                    ? "border-red-500"
                    : ""
                }`}
                onClick={() => handleOptionChange(1, "Intermediate Algebra")}
              >
                <p className="text-sm text-center">
                  x = (-b ± √ (b2 - 4ac) )/2a
                </p>
                <p className="font-semibold text-sm py-2 text-center">
                  Intermediate Algebra
                </p>
                <p className="text-md opacity-50 text-center">Intermediate</p>
              </div>
              <div
                className={`border border-gray-400 rounded-md p-8 h-36 w-80 cursor-pointer ${
                  selectedOption === "Calculus" ? "border-red-500" : ""
                }`}
                onClick={() => handleOptionChange(1, "Calculus")}
              >
                <p className="text-sm text-center">∫x2dx=0</p>
                <p className="font-semibold text-sm py-2 text-center">
                  Calculus
                </p>
                <p className="text-md opacity-50 text-center">Advanced</p>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
           <div className="max-w-4xl mx-auto">
            <div className="flex flex-row ">
              {/* Image */}
              <img
                src="https://img.freepik.com/free-vector/corporate-website-abstract-concept-illustration-official-company-website-business-online-representation-corporate-vision-page-web-development-graphic-design-service_335657-354.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1712102400&semt=ais" 
              
                className=" h-60 w-72 m-10"
              />
              {/* Text */}
              <div className=" w-2/3 py-12">
                <h2 className="text-xl font-bold my-4 ">
                You're on your way!
                </h2>
                <p className="text-yellow-400 text-xl">★★★★★</p>
                <p className= "italic">
                "Through its engaging and well-structured courses, Brilliant has
                taught me mathematical concepts that I previously struggled to
                understand. I now feel confident approaching both technical job
                interviews and real-world problem-solving situations.""
                </p>
              </div>
            </div>
          </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl p-4 relative mx-auto">
      <form onSubmit={handleSubmit}>
        <MobileStepper
          variant="progress"
          steps={steps.length}
          position="static"
          activeStep={activeStep}
          className="mt-8"
          backButton={null} // Remove the "Back" button
          nextButton={null} // Remove the "Next" button
          sx={{
            "& .MuiMobileStepper-progress .MuiLinearProgress-bar": {
              backgroundColor: "#69B0CD !important",
            },
            "& .MuiMobileStepper-progress": {
              backgroundColor: "lightGray",
              width: "100%",
              borderRadius: "10px",
            },
          }}
        />

        {renderStepContent()}

        {/* Continue button */}
        {activeStep < steps.length - 1 && (
          <div className="text-center">
            <button
              type="button"
              onClick={handleContinue}
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 "
            >
              Continue
            </button>
          </div>
        )}

        {/* Submit button */}
        {activeStep === steps.length - 1 && (
          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white py-2 px-8 rounded-md hover:bg-gray-800"
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;

          