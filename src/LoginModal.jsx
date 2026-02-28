import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = ({
    isOpen,
    onClose,
    initialView = 'signin'
}) => {
    const [view, setView] = useState(initialView);

    if (!isOpen) return null;

    return (
        <div
            className="overlay"
            onClick={onClose}
        >
            <div
                className="modal"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="close"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className="head">
                    <h2>
                        {view === 'signin' ? 'Sign In' : 'Sign Up'}
                    </h2>
                    <p>
                        {view === 'signin'
                            ? 'Welcome back! Please enter your details.'
                            : 'Create an account to get started.'}
                    </p>
                </div>
                <form
                    className="form"
                    onSubmit={(e) => e.preventDefault()}
                >
                    {view === 'signup' && (
                        <div className="box">
                            <label>Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                    )}
                    <div className="box">
                        <label>Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="box">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn"
                        onClick={() => alert(`${view === 'signin' ? 'Logged in' : 'Signed up'} successfully!`)}
                    >
                        {view === 'signin' ? 'Sign In' : 'Create Account'}
                    </button>
                </form>
                <div className="foot">
                    <p>
                        {view === 'signin'
                            ? "Don't have an account?"
                            : "Already have an account?"}{' '}
                        <span
                            onClick={() => setView(view === 'signin' ? 'signup' : 'signin')}
                        >
                            {view === 'signin' ? 'Sign Up' : 'Sign In'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
