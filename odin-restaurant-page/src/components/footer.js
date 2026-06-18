const createFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const footerTop = document.createElement("div");
  footerTop.classList.add("footer-top");

  const footerColumn1 = document.createElement("div");
  footerColumn1.classList.add("footer-column");

  footerColumn1.innerHTML = `
    <h3>Visit Us</h3>
    <p>123 Main Street</p>
    <p>Athens, Greece</p>
  `;

  const footerColumn2 = document.createElement("div");
  footerColumn2.classList.add("footer-column");
  footerColumn2.innerHTML = `<h3>Opening Hours</h3>
   <p>Mon-Fri: 11am - 10pm</p>
   <p>Sat-Sun: 12pm - 11pm</p> 
  `;

  const footerColumn3 = document.createElement("div");
  footerColumn3.classList.add("footer-column");
  footerColumn3.innerHTML = `<h3>Contact</h3>
  <a href="tel: +30213778965">+30 213 778 965</a>
    <a href="mailto:info@agorabistro.com">info@agorabistro.com</a>
  `;

  const footerColumn4 = document.createElement("div");
  footerColumn4.classList.add("footer-column");
  footerColumn4.innerHTML = `<h3>Follow Us</h3>
  <div class="footer-social-icons">
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Agora Bistro on Facebook">
    <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M14.2 8.2V6.7c0-.72.48-.89.82-.89h2.08V2.62L14.23 2.6c-3.19 0-3.91 2.43-3.91 3.99v1.61H7.8v3.57h2.52V22h3.88V11.77h2.92l.39-3.57H14.2Z"
                ></path>
              </svg>
    </a>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Agora Bistro on Instagram">
    <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm8.2 2H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Zm-4 3.15A4.85 4.85 0 1 1 7.15 12 4.85 4.85 0 0 1 12 7.15Zm0 2A2.85 2.85 0 1 0 14.85 12 2.85 2.85 0 0 0 12 9.15ZM17.2 6.6a1.15 1.15 0 1 1-1.15 1.15A1.15 1.15 0 0 1 17.2 6.6Z"
                ></path>
              </svg>
    </a>
    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Agora Bistro on Twitter">
    <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 2.16c-5.7 0-10.34 4.64-10.34 10.34s4.64 10.34 10.34 10.34 10.34-4.64 10.34-10.34S17.7 2.16 12 2.16zM9.58 16c-.58-.58-.58-1.52 0-2.1s1.52-.58 2.1 0 .58 1.52 0 2.1-1.52.58-2.1 0zM9.58 9c-.58-.58-.58-1.52 0-2.1s1.52-.58 2.1 0 .58 1.52 0 2.1-1.52.58-2.1 0z"
                ></path>
              </svg>
              </a>
  
  </div>
  `;

  const footerBottom = document.createElement("div");
  footerBottom.classList.add("footer-bottom");
  footerBottom.innerHTML = `
    <p>&copy; 2026 Agora Bistro. All rights reserved.</p>
    <span class="footer-divider">|</span>
    <p>Designed and Developed by
      <a class="footer-credit-link" href="https://github.com/devchsykas" target="_blank" rel="noopener noreferrer">
       <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 2C6.48 2 2 6.59 2 12.25c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.97c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.49A10.18 10.18 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z"
              ></path>
            </svg>
            Chris Sykas
      </a>
    </p>
  `;

  footerTop.appendChild(footerColumn1);
  footerTop.appendChild(footerColumn2);
  footerTop.appendChild(footerColumn3);
  footerTop.appendChild(footerColumn4);
  footer.appendChild(footerTop);
  footer.appendChild(footerBottom);

  return footer;
};

export default createFooter;
