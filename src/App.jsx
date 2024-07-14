import { useState } from 'react';

import './App.css'

export default function App  ()  {
  const [coffeeSize, setCoffeeSize] = useState("sm");
  const handleSizeChange = (evt) => {
    setCoffeeSize(evt.target.value);
  };
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleChange = (evt) => {
    setHasAccepted(evt.target.checked);
  };
  return (
    <>
      <h1>Select coffee size</h1>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={coffeeSize === "sm"}
          onChange={handleSizeChange}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"  
          checked={coffeeSize === "md"}
          onChange={handleSizeChange}
        />
        Meduim
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={coffeeSize === "lg"}
          onChange={handleSizeChange}
        />
        Large
      </label>

      <div>
      <label>
        <input type="checkbox" name="terms" checked={hasAccepted}
          onChange={handleChange} /> 
				I accept terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>
        Proceed
      </button>
    </div>
    </>
  );
};

