function createFooter(type) {
  window.addEventListener('DOMContentLoaded', () => {
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
          padding: 20px;
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
        #jb-container a:hover {
          text-decoration: underline;
        }
        #jb-container img {
          width: 125px;
          max-width: 100%;
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
        <a href="https://jbtoner.com" target="_blank" aria-label="${footerContent}">
          <p>${footerContent}</p>
          <img src="jbtonercom-footerlogo.svg" alt="JB Toner Logo">
        </a>
      </div>`;

    let footer = document.querySelector('footer');
    if (footer) {
      footer.innerHTML += footerDiv.innerHTML;
    }
  });
}
