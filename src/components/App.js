import React from 'react';
import Search from './Search';
import QRCodeComponent from './QRCode';
function App() {
  const [ currentView , setCurrentView] = React.useState('search')

  const [ url , setUrl ] = React.useState('');

  const handleGenerateQRCode = (url) =>{
    setUrl(url);
    setCurrentView('qrcode')
  };

  const handleBackToSearch = ()=>{
    setCurrentView('search');
  };



  return (
    <div className="page">
      <div className="page__container">
        {currentView === 'search' ? (
          <Search onGenerateQRCode={handleGenerateQRCode}/>
        ) : (
          <QRCodeComponent url={url} onBack={handleBackToSearch}/>
        )}

      </div>
    </div>
  );
}

export default App;
