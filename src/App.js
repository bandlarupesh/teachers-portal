import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ImageCarousel from './components/ImageCarousel';
import ImageGallery from './components/ImageGallery';
import Subheader from './components/Subheader';

function App() {
  return (
    <div className="App">
      <Header />
      <Subheader />
      <ImageCarousel />
      <ImageGallery />
      <Footer />
    </div>
  );
}

export default App;
