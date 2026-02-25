import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="m-0 text-center p">© {new Date().getFullYear()} <b>Jane</b>, All right reserved.</p>
      </div>
    </footer>
  );
}
