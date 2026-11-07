import './App.css';
import { Nav } from './components/nav/Nav';
import { Header } from './components/header/Header';
import { Images } from './components/images/Images';
import images from './components/assets/ImagesData';
import { Footer } from './components/foooter/Footer';

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
