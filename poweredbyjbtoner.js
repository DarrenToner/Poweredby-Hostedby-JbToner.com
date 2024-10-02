window.addEventListener('DOMContentLoaded', function() {
    let footerDiv = document.createElement('div');
    footerDiv.innerHTML = `
      <style>
        #jb-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 6px;
          font-family: sans-serif;
          background-color: #071315;
          color: #b6bdc8;
          width: 100%;
          max-width: 100vw;
          box-sizing: border-box;
          position: relative;
          bottom: 0;
          margin: 0;
          border: 0;
        }
        #jb-container * {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          transition: all 0.2s ease-in-out;
        }
        #jb-container a {
          text-decoration: none;
          color: #b6bdc8;
          display: flex;
          align-items: center;
          font-size: 14px;
          width: 100%;
          justify-content: space-between;
        }
        #jb-container p {
          position: relative;
          overflow: hidden;
          margin: 0;
          display: flex;
        }
        #jb-container a:hover {
          color: white;
        }
        #jb-container img {
          width: 105px;
          max-width: 100%;
        }
      </style>
      <div id="jb-container" role="contentinfo">
        <a href="https://jbtoner.com" target="_blank" aria-label="Powered by jbtoner.com">
          <p>Powered by jbtoner.com</p>
          <img src="https://cdn.jsdelivr.net/gh/DarrenToner/Poweredby-Hostedby-JbToner.com@master/jbtonercom-footerlogo.svg" alt="JB Toner Logo">
        </a>
      </div>`;
  
    let footer = document.querySelector('footer');
    if (footer) {
      footer.innerHTML += footerDiv.innerHTML;
    }
  });
  