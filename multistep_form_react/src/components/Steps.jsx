import "../components/Steps.css";

const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
      <div className="step active">
        <i className="bi bi-person"></i>
        <p>Identificação</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <i className="bi bi-star"></i>
        <p>Avaliação</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <i className="bi bi-send"></i>
        <p>Envio</p>
      </div>
    </div>
  );
};

export default Steps;
