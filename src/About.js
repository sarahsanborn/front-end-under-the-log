const About = () => {

  return (
    <div className="page-container">
      <section className="page-inner">
        <h1 className="headline">About</h1>
        <p>Under The Log is an interactive foraging app that shows edible plants and fungi observed by community members in Washington State. The website was created by <a href="https://www.linkedin.com/in/sarah-sanborn-profile/">
          Sarah Sanborn</a> and <a href="https://www.linkedin.com/in/tara-alsaidi/">Tara Alsaidi</a> for their 
          capstone project at <a href="https://adadevelopersacademy.org/">Ada Developers Academy</a>. 
          Code for this project can be <a href="https://github.com/sarahsanborn/front-end-under-the-log">viewed on Github</a>.</p>
        <p>Sarah and Tara were interested in creating a website that would help foragers find 
          edible plants and fungi in Washington State. Oftentimes, the best way to find a plant 
          or mushroom is to go to the exact spot where someone else recently observed that species. 
          Under The Log accomplishes this by pulling recent observation data from 
          iNaturalist – a social network and database of community observations of biodiversity 
          across the globe.</p>
        <p>While iNaturalist is a powerful tool, the database does not allow a user to filter 
          observations by edibility. Tara and Sarah hand-selected specific edible plants and 
          fungi to pull from iNaturalist based on Jim Meuninck’s book “Basic Essentials: 
          Edible Wild Plants and Useful Herbs,” edible species listed on <a href="https://northernbushcraft.com/">Northern Bushcraft</a>, 
          and Sarah and Tara’s personal knowledge. Additionally, only observations whose 
          identification was deemed “research grade” by iNaturalist would be pulled to be 
          displayed on the map. iNaturalist defines an observation as “research grade” quality 
          when the observation has a photo, date, coordinates, and two-thirds of the community 
          agree with the identification. </p>
        <p>Sarah and Tara hope this website encourages more people to get outside and to use Under The Log as their foraging companion. Read more on our forage respectfully and responsibly page.</p>
        <h2>Technologies used to create Under The Log</h2>
        <ul>
          <li>iNaturalist API</li>
          <li>Mapbox Studio</li>
          <li>Uber’s Mapbox plugin: React-Map-GL</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>CSS/HTML</li>
          <li>Google Firestore Database</li>
          <li>Google Firebase user authentication</li>
          <li>Google Firebase hosting</li>
        </ul>
      </section>
    </div>
  );
};

export default About;