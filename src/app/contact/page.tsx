import React from 'react';

function Contact() {
  return (
    <div>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#333' }}>Fashion Store</h1>
      <p style={{ color: '#666' }}>
        Welcome to Fashion Store! Explore our exclusive collection of dresses for both men and women.
      </p>
      <div style={{ margin: '20px 0' }}>
        <h2>Our Categories</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <strong>Men Fashion:</strong> Stylish suits, casual wear, and accessories.
          </li>
          <li>
            <strong>Women Fashion:</strong> Elegant dresses, trendy outfits, and more.
          </li>
        </ul>
      </div>
      <div style={{ margin: '20px 0' }}>
        <h2>Contact Us</h2>
        <p><strong>Address:</strong> 123 Fashion Street, Style City, TX 56789</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Email:</strong> contact@fashionstore.com</p>
      </div>
    </div>
    </div>
  );
}

export default Contact;
