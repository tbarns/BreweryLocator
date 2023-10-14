import './Projects.css';
import icon from '../../icon.ico';

const Brew = () => {
  return (
    <div className='projectDiv'>
      <img src={icon} className="Logo" alt="Icon of a beer mug" />
      <h1> Brewery Explorer 🍻 </h1>
      <p className='AppDesc'>
        Ready for a beery adventure? Dive into the Brewery Explorer! It's not just another app – it's your passport to discovering hidden beer gems worldwide. 🌍 Travel city by city, uncovering the stories behind each brew house. Cheers to exploring!
      </p>
      
      <div className='techUsed'>
        <p className='techTitle'>
          Brewed With:
        </p>
        <ul>
          <li>JavaScript</li>
          <li>Google Maps API</li>
          <li>Open Brewery API</li>
          <li>GitHub</li>
          <li>Heroku</li>
        </ul>
      </div>
      <div>
        <a href="https://brewme-0348777a47b8.herokuapp.com/" className="ExternalLink">
          <p className="ExternalLinkP">Start Your Beery Voyage! 🚀</p>
        </a>
      </div>
    </div>
  )
}

export default Brew;
