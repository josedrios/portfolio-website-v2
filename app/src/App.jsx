import './styles/main.scss';
import Header from './components/Header';

function App() {
  return (
    <div id="website-container">
      <Header />
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <p>
        This is an example sentence to show how a p tag would look. Im going to write a little more gibberish just to show its text wrapping capabilities and how it would look like in the UI.
      </p>
      <p>This is a <span>span</span> word in a sentence</p>
      <p>This is a <strong>bold</strong> word in a sentence</p>
      <p>This is a <i>italic</i> word in a sentence</p>
      <h1>Spacing Increments</h1>
      <div className='spacing-xs'/>
      <div className='spacing-sm'/>
      <div className='spacing-md'/>
      <div className='spacing-lg'/>
      <div className='spacing-xl'/>
    </div>
  );
}

export default App;
