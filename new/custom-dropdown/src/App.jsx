import './App.css'
import CustomDropdown from './components/CustomDropdown';

function App() {

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const handleSelect = (option) => {
    console.log('Selected option:', option);
  };

  return (
    <div className="app">
      <h1>Custom Dropdown Example</h1>
      <CustomDropdown options={options} onSelect={handleSelect} />
    </div>
  );
};

export default App
