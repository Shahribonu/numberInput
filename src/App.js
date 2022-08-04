import { useState } from "react";
import "./App.css";

function App() {
  const [numberList, setNumberList] = useState([{ number: "" }]);

  const handleNumberChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...numberList];
    list[index][name] = value;
    setNumberList(list);
  };

  const handleNumberRemove = (index) => {
    const list = [...numberList];
    list.splice(index, 1);
    setNumberList(list);
  };

  const handleNumberAdd = () => {
    setNumberList([...numberList, { number: "" }]);
  };

  return (
    <form className="App" autoComplete="off">
      <div className="form-field">
        <label htmlFor="number">Number(s)</label>
        {numberList.map((singleService, index) => (
          <div key={index} className="services">
            <div className="first-division">
              <input
                name="number"
                type="number"
                id="number"
                value={singleService.number}
                onChange={(e) => handleNumberChange(e, index)}
                required
                onInput={(e) => {
                  if (e.target.value.length > e.target.maxLength)
                    e.target.value = e.target.value.slice(
                      0,
                      e.target.maxLength
                    );
                }}
                maxlength={9}
              />
              {numberList.length - 1 === index && (
                <button
                  type="button"
                  onClick={handleNumberAdd}
                  className="add-btn"
                >
                  <span>Add a number</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {numberList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleNumberRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="output">
        <h2>Output</h2>
        {numberList &&
          numberList.map((singleService, index) => (
            <ul key={index}>
              {singleService.number ? <li>{singleService.number}</li> : null}
            </ul>
          ))}
      </div>
    </form>
  );
}

export default App;
