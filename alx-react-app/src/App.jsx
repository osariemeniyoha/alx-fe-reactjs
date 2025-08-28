import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      {/* Task 1: WelcomeMessage */}
      <WelcomeMessage />

      {/* Task 3: UserProfile */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
    </>
  );
}

export default App;
