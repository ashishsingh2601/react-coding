import './App.css'
import Accordian from './components/Accordian'
import { useState } from 'react';

function App() {

  const [accordianIndex, setAccordianIndex] = useState(0);

  const handleChange = (activeAccordian) => {
    setAccordianIndex(activeAccordian);
  }


  return (
  <main>
    <Accordian currentAccordian={accordianIndex} onChange={handleChange}>
      <Accordian.HeaderContainer>
        <Accordian.HeaderItem label="First" index={0}>
          <Accordian.ContentItem index={0}>
            <strong>First Content</strong>
          </Accordian.ContentItem>
        </Accordian.HeaderItem>

        <Accordian.HeaderItem label="Second" index={1}>
        <Accordian.ContentItem index={1}>
          <strong>Second Content</strong>
        </Accordian.ContentItem>
        </Accordian.HeaderItem>
        <Accordian.HeaderItem label="Third" index={2}>

        <Accordian.ContentItem index={2}>
          <strong>Third Content</strong>
        </Accordian.ContentItem>
        </Accordian.HeaderItem>
      </Accordian.HeaderContainer>
      {/* <Accordian.ContentContainer>
        <Accordian.ContentItem index={0}>
          <strong>First Content</strong>
        </Accordian.ContentItem>
        <Accordian.ContentItem index={1}>
          <strong>Second Content</strong>
        </Accordian.ContentItem>
        <Accordian.ContentItem index={2}>
          <strong>Third Content</strong>
        </Accordian.ContentItem>
      </Accordian.ContentContainer> */}
    </Accordian>
  </main>
  )
}

export default App
