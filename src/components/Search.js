import React from 'react'
import Logo from '../images/logo-qr-generator.svg'
import Pattern from '../images/bg-illustration.svg'
function Search ({onGenerateQRCode}) {
    const [ error, setError] = React.useState('')
    const [ url , setUrl ] = React.useState('');
   
    const isUrlValid = (string) =>{
        try{
            new URL(string);
            return true
        } catch (_) {
            return false
        }
    };

    const handleChange = (e) =>{
        setUrl(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(isUrlValid(url)){
            setError('');
            onGenerateQRCode(url);
        } else{
            setError('Please enter a valid URL')
        }
        
    }

    return(
        <div className='search'>
            <div className='search__container'>
                <img className='search__logo' src={Logo} alt='Logo Of QR Generator'></img>
            </div>
            <form className='search__input-container' onSubmit={handleSubmit} noValidate> 
                    <input 
                    onChange={handleChange}
                    value={url}
                    type='url'
                    placeholder='Enter an Url' 
                    className='search__input'
                    required >
                    </input>
                    <button className='search__button'>QR Code</button>
            </form>
            {error && <span className='search__input-error'>{error}</span>}
            <img src={Pattern} className='search__pattern'></img>
        </div>
        
    )
};

export default Search;