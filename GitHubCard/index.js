/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/tfaramar')
  .then((data) => {
    const cardContainer = document.querySelector('.cards');cardContainer.appendChild(createCard(data.data));
    console.log(data);
  })
  .catch((data) => {
    console.log('data not available');
  })
  

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['mjherich', 'bryanszendel', 'daredtech', 'pj-wise', 'hamidoudiallo96', 'projectLewis', 'rich-fswd21'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/



function createCard(userObject) {
  //define new elements
  const card = document.createElement('div');
  const userImage = document.createElement('img');
  const cardInfo = document.createElement('div');
  const fullName = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const profileLink = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  //define structure of elements
  card.appendChild(userImage)
  card.appendChild(cardInfo)
  cardInfo.appendChild(fullName)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(userLocation)
  cardInfo.appendChild(userProfile)
  userProfile.appendChild(profileLink)
  cardInfo.appendChild(userFollowers)
  cardInfo.appendChild(userFollowing)
  cardInfo.appendChild(userBio)


  //set class names
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  fullName.classList.add('name')
  userName.classList.add('username')

  //add content to elements
  fullName.textContent = `${userObject.name}`;
  userName.textContent = `${userObject.login}`;
  userLocation.textContent = `Location: ${userObject.location}`;
  userProfile.textContent = `Profile: ${profileLink}`;
  userFollowers.textContent = `Followers: ${userObject.followers_url}`;
  userFollowing.textContent = `Following: ${userObject.following_url}`;
  userBio.textContent = `Bio: ${userObject.bio}`;

  profileLink.href = `${userObject.html_url}`;
  userImage.src = `${userObject.avatar_url}`;
  userImage.alt = 'Image or avatar of GitHub user';

  
  return card;

}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
