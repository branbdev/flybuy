import { Container } from 'react-bootstrap';

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div>
        <Header />
        <main className='py-3'>
          <constainer>
            <HomeScreen />
          </constainer>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
