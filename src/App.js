import './App.css';
import FeaturedPosts from './components/FeaturedPosts';
import TrendingPosts from './components/TrendingPosts';

function App() {
  return (
    <div className="App">
    <FeaturedPosts/>
    <TrendingPosts/>
    </div>
  );
}

export default App;
