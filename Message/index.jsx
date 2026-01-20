const { useState } = React;

const ToggleApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div id="toggle-container">
      <button
        id="toggle-button"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? 'Hide' : 'Show'} Message
      </button>

      {isVisible && (
        <p id="message">I love freeCodeCamp!</p>
      )}
    </div>
  );
};

ReactDOM.createRoot(
  document.getElementById("root")
).render(<ToggleApp />);
