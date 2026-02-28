import React, { useState } from 'react';
import './App.css';
import LoginModal from './LoginModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalView, setModalView] = useState('signin');

  const openModal = (view) => {
    setModalView(view);
    setIsModalOpen(true);
  };

  return (
    <div className="web">
      <header>
        <div className="title">
          <h1>SUBSCRIPTION MANAGMENT</h1>
        </div>
        <nav>
          <ul>
            <li onClick={() => openModal('signin')}>Sign In</li>
            <li onClick={() => openModal('signup')}>Sign Up</li>
            <li>Active Plans</li>
            <li>Plans</li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <section id="plans">
          <div className="heading">
            <h2>Choose Your Plan</h2>
            <p>Simple and transparent pricing.</p>
          </div>
          <div className="plansName">
            <div className="plan">
              <h3>Basic</h3>
              <ul>
                <li>5 Projects</li>
                <li>Email Support</li>
                <li>Monthly Reports</li>
                <li>price: 250</li>
              </ul>
              <button className="cart">Subscribe</button>
            </div>
            <div className="plan">
              <h3>Medium</h3>
              <ul>
                <li>20 Projects</li>
                <li>Priority Email Support</li>
                <li>Weekly Reports</li>
                <li>price: 500</li>
              </ul>
              <button className="cart">Subscribe</button>
            </div>
            <div className="plan">
              <h3>Pro</h3>
              <ul>
                <li>Unlimited Projects</li>
                <li>24/7 Support</li>
                <li>Daily Reports</li>
                <li>price: 1000</li>
              </ul>
              <button className="cart">Subscribe</button>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <div>
          <h3>Arkadas</h3>
          <p>© 2026 Arkadas. All rights reserved.</p>
        </div>
      </footer>

      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialView={modalView}
      />
    </div>
  );
}

export default App;
