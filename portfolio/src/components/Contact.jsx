import React from "react";
import { useState } from "react";


function Contact(){

        const[email, setEmail] = useState('');
        const[company, setCompany] = useState('');
        const[name, setName] = useState('');
        const[phone, setPhone] = useState('');
        const[pay, setPay] = useState('');
        const[errorMessage, setErrorMessage] = useState('');

        const handleInputChange = (e) => {
            const {target} = e;
            const inputType = target.name;
            const inputValue = target.value;

            if (inputType === 'email'){
                setEmail('inputValue');
            } else if (inputType === 'name'){
                setName(inputValue);
            } else if (inputType === 'company'){
                setCompany(inputValue);
            } else if (inputType === 'phone'){
                setPhone(inputValue);
            } else {
                setPay(inputValue);
            }
        };

        const handleFormSubmit = (e) => {
            e.preventDefault();

            if (!email || !name || !phone || !company){
                setErrorMessage('You did not include sufficient contact information!');
                return;
            }
            if (!pay){
                setPay('N/A');
                return;
            }

            setCompany('');
            setEmail('');
            setName('');
            setPhone('');
            setPay('');
        };

        return(
            <div className="formContainer">
                <h1>Hello, if you are interested in having me work for you, please leave your contact information:</h1>

                <form className="form" onSubmit={handleFormSubmit}>
                    <input
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="name"
                        placeholder="name"
                    />
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="email"
                    />
                    <input
                        value={phone}
                        name="phone"
                        onChange={handleInputChange}
                        type="phone"
                        placeholder="phone"
                    />
                    <input
                        value={company}
                        name="company"
                        onChange={handleInputChange}
                        type="company"
                        placeholder="company"
                    />
                    <input
                        value={pay}
                        name="pay"
                        onChange={handleInputChange}
                        type="pay"
                        placeholder="pay"
                    />
                    <button type="submit">Submit</button>
                        
                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
        );


};

export default Contact;