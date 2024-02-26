import React from 'react';

function App() {
    
    function handleSignUp() {
        // Code to handle sign up goes here
        console.log('Sign up button clicked');
    }

    return (
        <div>
            <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0', margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div style={{ backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', padding: '20px', width: '300px' }}>
                    <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Sign Up</h2>
                    <form>
                        <div style={{ marginBottom: '15px' }}>
                            <input type="text" placeholder="Username" style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '16px' }} required />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <input type="email" placeholder="Email" style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '16px' }} required />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <input type="password" placeholder="Password" style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '16px' }} required />
                        </div>
                        <button type="submit" onClick={handleSignUp} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', width: '100%' }}>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
