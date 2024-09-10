import React, { useRef } from "react";
import QRCode from 'qrcodejs2';
import Logo from '../images/logo-qr-generator.svg'
import Pattern from '../images/bg-illustration.svg'

function QRCodeComponent({url, onBack}){

    const qrcodeRef = React.useRef(null);

    React.useEffect(() => {
        if (qrcodeRef.current) {
           
            qrcodeRef.current.innerHTML = '';
            
            new QRCode(qrcodeRef.current, {
                text: url,
                width: 256,
                height: 256,
            });
        }
    }, [url]);

    return(
        <div className="qrcode">
            <div className="qrcode__logo-container">
                <img className='qrcode__logo' src={Logo} alt='Logo Of QR Generator'/>
            </div>
            
            <div className="qrcode__main">
                
                <div className="qrcode__container" ref={qrcodeRef}>
                
                </div>
                <button className="qrcode__back-button" onClick={onBack}>
                 Back to Search
                </button>
            </div>
        </div>
    )
}

export default QRCodeComponent;