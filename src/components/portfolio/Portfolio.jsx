import './portfolio.scss';

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className='active'>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Branding</li>
        <li>Design</li>
      </ul>

      <div className="container">
        <div className="item">
          <a href="https://github.com/SyedH482/research">
          <img src="../../assets/chrome-extension.png" alt=""/>
          </a>
          <h3>Chrome Extension</h3>
        </div>
      </div>
    </div>
  )
}
