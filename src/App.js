import './App.css';
import { Nav } from './components/Nav/Nav';
import { Header } from './components/Header/Header';
import { Images } from './components/Images/Images';
import images from './components/assets/ImagesData';
import { Footer } from './components/Footer/Footer';

function App() {
  console.log(images);
  return (
    <div>
      <Nav />
      <Header />
      <Images images={images} />
      <Footer />
    </div>
  );
}

export default App;
