import React, { useState, useEffect } from 'react';
import { hourglass } from 'ldrs'; // Import hourglass
import './App.css';
import { GlobalStyle } from './styles/GlobalStyles';
import MainContent from './components/MainContent';
import OurExpertise from './components/OurExpertise';
import ContactUs from './components/ContactUs';

// Daftarkan komponen hourglass
hourglass.register();

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // State untuk melacak status loading

  // Simulasi proses loading, misalnya loading asset atau background
  useEffect(() => {
    // Misal proses loading, bisa diganti dengan logic fetch data atau loading asset yang sesungguhnya
    const timer = setTimeout(() => {
      setIsLoading(false); // Setelah loading selesai, ubah state menjadi false
    }, 3000); // Contoh loading selama 3 detik

    return () => clearTimeout(timer); // Bersihkan timeout jika component unmount
  }, []);

  return (
    <div className="app-container">
      <GlobalStyle />
      <div className="background-wrapper"></div>
      <MainContent />
      <OurExpertise />
      <ContactUs />
      {/* Tampilkan hourglass saat konten masih loading */}
      {isLoading && (
        <l-hourglass
          size="40"
          bg-opacity="0.1"
          speed="1.75"
          color="black"
        ></l-hourglass>
      )}

      {/* Konten akan muncul setelah loading selesai */}
      {!isLoading && (
        <div className="content">
          {/* Masukkan elemen yang sebelumnya tertunda loading, seperti background, item, dll */}
        </div>
      )}
    </div>
  );
}

export default App;
