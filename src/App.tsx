import './App.css'
import ButtonExercise from './components/ButtonExercise'

function App() {

  const handleClick = () => {
    console.log("Button clicked");
  }

  return (
    <>
      <ButtonExercise size='small' onClick={handleClick}>
        Small
      </ButtonExercise>
      <ButtonExercise size='medium' onClick={handleClick}>
        Medium
      </ButtonExercise>
      <ButtonExercise size='large' onClick={handleClick}>
        Large
      </ButtonExercise>
    </>
  )
}

export default App
