function createJbFooter(type) {
    let footerContent = type === 'powered'
      ? 'Powered by jbtoner.com'
      : 'Hosted by jbtoner.com';
  
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
        #jb-container p span {
          width: 0px;
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          opacity: 0;
        }
        #jb-container a:hover span {
          max-width: 500px;
          width: 15px;
          opacity: 1;
          color: #88c5e1;
        }
        #jb-container a:hover {
          color: white;
        }
        #jb-container img {
          width: 105px;
          max-width: 100%;
        }
        #jb-container a:hover img {
          filter: contrast(2) brightness(2) saturate(0);
        }
        @media (max-width: 600px) {
          #jb-container a {
            width: 100%;
            flex-direction: column;
            text-align: center;
          }
        }
      </style>
      <div id="jb-container" role="contentinfo">
        <a href="https://jbtoner.com" target="_blank" aria-label="${footerContent} by jbtoner.com">
          <p><span class="left-tag">&lt;</span> ${footerContent} by jbtoner.com <span class="right-tag">&nbsp;/&gt;</span></p>
          <img src="https://cdn.jsdelivr.net/gh/DarrenToner/Poweredby-Hostedby-JbToner.com@master/jbtonercom-footerlogo.svg" alt="JB Toner Logo">
        </a>
      </div>
    `;
  
    let footer = document.querySelector('footer');
    if (footer) {
      footer.innerHTML += footerDiv.innerHTML;
    }
  }
  