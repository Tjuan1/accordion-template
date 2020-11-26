import React, { useState } from 'react';
import data from './data';
import AccordionItem from './Accordion';
function App() {
  const [ items, setItems ] = useState(data);
  return <main className="container">
      <div className="question-container">
        <div className="title">
          <h3>Items</h3>
        </div>
        <section className="section">
          {
          items.map((item)=> {
            return <AccordionItem 
            key={item.id} 
            {...item} />
          })}
        </section>
      </div>
  </main>;
}

export default App;
