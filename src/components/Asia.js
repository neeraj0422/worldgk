import React, { useState } from 'react';
import './Asia.css';

function Asia() {
  const [showCountries, setShowCountries] = useState(false);
  const [showPlaces, setShowPlaces] = useState(false);

  const handleCountriesClick = () => {
    setShowCountries(!showCountries);
  };

  const handlePlacesClick = () => {
    setShowPlaces(!showPlaces);
  };

  return (
    <div
   
  >
        <h1>Asia</h1>
      <p>
        Asia is the largest continent in the world, covering a significant portion of the Earth's landmass.
        It is home to diverse cultures, breathtaking landscapes, and vibrant cities.
        
            <br></br>
            
            <ul>
<li>spanning from the Mediterranean Sea to the Pacific Ocean and from the Arctic to the Indian Ocean.</li>
<li>It boasts a wide range of landscapes, including frozen tundra, lush rainforests, towering mountains, and expansive deserts.</li>
<li>Asia has a rich historical heritage, with ancient civilizations and powerful empires shaping its past.</li>
<li>The continent is the birthplace of major world religions such as Hinduism, Buddhism, and Confucianism.</li>
<li>Asia is home to diverse ethnic groups and languages, with a population exceeding 4.6 billion people.</li>
<li>Economically, Asia is a powerhouse with rapidly growing economies and influential global players.</li>
<li>The continent faces challenges such as poverty, environmental degradation, and political tensions.</li>
<li>Asia's cities are hubs of innovation, commerce, and technological advancements.</li>
<li>Rapid urbanization and sustainable development are key issues for the continent.</li>
<li>Despite challenges, Asia's resilience, cultural heritage, and economic dynamism continue to shape its trajectory and global affairs.</li>
</ul>
      </p>
      <button onClick={handleCountriesClick}>Show Countries</button>
      {showCountries && (
        <ul>
        <li>Afghanistan</li>
        <li>Armenia</li>
        <li>Azerbaijan</li>
        <li>Bahrain</li>
        <li>Bangladesh</li>
        <li>Bhutan</li>
        <li>Brunei</li>
        <li>Cambodia</li>
        <li>China</li>
        <li>Cyprus</li>
        <li>East Timor (Timor-Leste)</li>
        <li>Georgia</li>
        <li>India</li>
        <li>Indonesia</li>
        <li>Iran</li>
        <li>Iraq</li>
        <li>Israel</li>
        <li>Japan</li>
        <li>Jordan</li>
        <li>Kazakhstan</li>
        <li>Kuwait</li>
        <li>Kyrgyzstan</li>
        <li>Laos</li>
        <li>Lebanon</li>
        <li>Malaysia</li>
        <li>Maldives</li>
        <li>Mongolia</li>
        <li>Myanmar (Burma)</li>
        <li>Nepal</li>
        <li>North Korea (Democratic People's Republic of Korea)</li>
        <li>Oman</li>
        <li>Pakistan</li>
        <li>Palestine</li>
        <li>Philippines</li>
        <li>Qatar</li>
        <li>Russia</li>
        <li>Saudi Arabia</li>
        <li>Singapore</li>
        <li>South Korea (Republic of Korea)</li>
        <li>Sri Lanka</li>
        <li>Syria</li>
        <li>Taiwan</li>
        <li>Tajikistan</li>
        <li>Thailand</li>
        <li>Turkey</li>
        <li>Turkmenistan</li>
        <li>United Arab Emirates</li>
        <li>Uzbekistan</li>
        <li>Vietnam</li>
        <li>Yemen</li>
      </ul>
      )}
      <button onClick={handlePlacesClick}>Show Must-Visit Places</button>
      {showPlaces && (
       

<ul>
  <li>Afghanistan:
    <ul>
      <li>Bamiyan Valley</li>
      <li>Blue Mosque, Mazar-i-Sharif</li>
      <li>Herat Citadel</li>
    </ul>
  </li>
  <li>Armenia:
    <ul>
      <li>Tatev Monastery</li>
      <li>Lake Sevan</li>
      <li>Garni Temple</li>
    </ul>
  </li>
  <li>Azerbaijan:
    <ul>
      <li>Maiden Tower, Baku</li>
      <li>Heydar Aliyev Center, Baku</li>
      <li>Gobustan National Park</li>
    </ul>
  </li>
  <li>China:
    <ul>
      <li>Great Wall of China</li>
      <li>Forbidden City, Beijing</li>
      <li>Terracotta Army, Xi'an</li>
    </ul>
  </li>
  <li>India:
    <ul>
      <li>Taj Mahal, Agra</li>
      <li>Jaipur's Pink City</li>
      <li>Varanasi Ghats</li>
    </ul>
  </li>
  <li>Indonesia:
    <ul>
      <li>Borobudur Temple, Yogyakarta</li>
      <li>Bali's Rice Terraces</li>
      <li>Komodo National Park</li>
    </ul>
  </li>
  <li>Iran:
    <ul>
      <li>Persepolis</li>
      <li>Isfahan's Naqsh-e Jahan Square</li>
      <li>Shiraz's Pink Mosque</li>
    </ul>
  </li>
  <li>Japan:
    <ul>
      <li>Mount Fuji</li>
      <li>Kyoto's Golden Pavilion</li>
      <li>Tokyo's Shibuya Crossing</li>
    </ul>
  </li>
  <li>Malaysia:
    <ul>
      <li>Petronas Twin Towers, Kuala Lumpur</li>
      <li>Langkawi Island</li>
      <li>Georgetown, Penang</li>
    </ul>
  </li>
  <li>Nepal:
    <ul>
      <li>Mount Everest</li>
      <li>Kathmandu's Durbar Square</li>
      <li>Pokhara and the Annapurna Range</li>
    </ul>
  </li>
</ul>
      )}
    </div>
  );
}

export default Asia;
