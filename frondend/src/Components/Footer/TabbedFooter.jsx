import React, { useState } from 'react';
import './TabbedFooter.css'; // Import your CSS file for styling if needed


const TabbedFooter = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const openPage = (pageName, color, event) => {
    setActiveTab(pageName);
    // Update styles or perform other actions based on the selected tab
    event.target.style.backgroundColor = color;
  }

  return (
    <div>
      <button className={`tablink ${activeTab === 'Home' && 'active'}`} onClick={(e) => openPage('Home', 'red', e)}>Branches</button>
      <button className={`tablink ${activeTab === 'News' && 'active'}`} onClick={(e) => openPage('News', 'green', e)} id="defaultOpen">Terms </button>
      <button className={`tablink ${activeTab === 'Contact' && 'active'}`} onClick={(e) => openPage('Contact', 'blue', e)}>Contact </button>
      <button className={`tablink ${activeTab === 'About' && 'active'}`} onClick={(e) => openPage('About', 'orange', e)}>About </button>

      <div id="Home" className={`tabcontent ${activeTab === 'Home' ? 'show' : ''}`}>
        <h3>Branch</h3>
        <ul>
          <li>T. Nagar Branch
#27, Ranganathan Street, T. Nagar, Chennai-600 017.</li>
<li>Pallikaranai Branch
#1A, Jeyachandran Nagar, Velachery-Tambaram Main Road, Pallikaranai-600100.</li>

<li>Tambaram Branch
#19, Muthuranga Mudali St, Tambaram West, Tambaram, Chennai, Tamil Nadu 600045</li>
          </ul>
      </div>

      <div id="News" className={`tabcontent ${activeTab === 'News' ? 'show' : ''}`}>
        <h3>Terms</h3>
        <ul>
          Return will be processed only if:            
<li>it is determined that the product was not damaged while in your possession;</li>
             
<li>the product is not different from what was shipped to you;</li>
             
<li>the product is returned in original condition (with brand’s/manufacturer's box, MRP tag intact, user manual, warranty card and all the accessories therein).</li>
        </ul>
      </div>

      <div id="Contact" className={`tabcontent ${activeTab === 'Contact' ? 'show' : ''}`}>
        <h3>Contact</h3>
        <ul>
          <li><b>Email us:</b><a href="mailto:sri011741@gmail.com">stylelab@gmail.com</a></li>
          <li><b>Whatsapp us:</b>1234567890</li>
        </ul>
      </div>

      <div id="About" className={`tabcontent ${activeTab === 'About' ? 'show' : ''}`}>
        <h3>About</h3>
        <ul>
          <li><b>Our Vision</b><br/>

Quality products at affordable prices. To be at the forefront of the textile sector with our continuous search for excellence and perfection, while putting our strong foothold on conventional practices.</li>
        <li><b>Our Mission</b><br/>

To be at the forefront of the textile sector with our continuous search for excellence and perfection, while putting our strong foothold on conventional practices.</li>
        </ul>
      </div>

    
    </div>
  );
}

export default TabbedFooter;
