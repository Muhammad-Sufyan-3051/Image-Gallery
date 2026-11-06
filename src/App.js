import './App.css';
import { Nav } from './components/nav/Nav';
import { Header } from './components/header/Header';
import { Images } from './components/images/Images';
import images from './components/assets/ImagesData';

function App() {
  console.log(images);
  return (
    <div>
      <Nav />
      <Header />
      <Images />
    </div>
  );
}

export default App;
