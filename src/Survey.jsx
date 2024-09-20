
import React, { useState} from "react";
import "./Survey.css";
import StarRating from "./Components/StarRating";
import {useNavigate} from "react-router-dom";


function Survey() {
  const navigate  = useNavigate()
  const questions = [
    { id: 1, text: "How satisfied are you with our products?", type: "rating", range: 5 },
    { id: 2, text: "How fair are the prices compared to similar retailers?", type: "rating", range: 5 },
    { id: 3, text: "How satisfied are you with the value for your purchases?", type: "rating", range: 5 },
    { id: 4, text: "On a scale of 1-10, how likely would you recommend us to your friends and family?", type: "rating", range: 10 },
    { id: 5, text: "What could we do to improve our service?", type: "text" }
  ];

  const [responses, setResponses] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handleInputChange = (id, value) => {
    setResponses({ ...responses, [id]: value });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    const confirmSubmission = window.confirm("Are you sure you want to submit the survey?");
    if (confirmSubmission) {
      localStorage.setItem("surveyResponses", JSON.stringify(responses));
      navigate('/thankyou');
    }
  };

 
  return (
    <div className="survey-container">
      <h2>Customer Satisfaction Survey</h2>
      <div className="question-box">
        <p>{questions[currentQuestion].text}</p>
        {questions[currentQuestion].type === "rating" ? (
          <StarRating
            maxRating={questions[currentQuestion].range}
            currentRating={responses[questions[currentQuestion].id] || null} // set null as default
            onRatingChange={(value) => handleInputChange(questions[currentQuestion].id, value)}
          />
        ) : (
          <textarea
            value={responses[questions[currentQuestion].id] || ""}
            onChange={(e) => handleInputChange(questions[currentQuestion].id, e.target.value)}
          />
        )}
      </div>
      <div className="controls">
        {currentQuestion > 0 && (
          <button className="prev-btn" onClick={prevQuestion}>
            Previous
          </button>
        )}
        <button className="next-btn" onClick={nextQuestion}>
          {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
        </button>
      </div>
    </div>
  );
}

export default Survey;
