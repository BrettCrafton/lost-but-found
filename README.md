# Lost But Found

A lost animal database with success stories.

Live Project at: <a href="https://bc-lost-but-found.herokuapp.com/success-stories" target="_blank" rel="noreferrer"> https://bc-lost-but-found.herokuapp.com/success-stories </a>

<a href="https://bc-lost-but-found.herokuapp.com/success-stories" target="_blank" rel="noreferrer"> <img src="https://github.com/BrettCrafton/BrettCrafton/blob/main/assets/lost-but-found-small.gif?raw=true" alt="project example"/> </a>

## How It's Made:

**Tech used:** EJS, CSS with Bootstrap, JavaScript, Node.js (w/ Express, Passport, Multer, Morgan, ), MongoDB, Cloudinary

Text

## Optimizations / Add-Ons:

Additional login options like google/facebook/etc.

Toggling for animals within profile page, so that "notorious" escapers can easily be listed without having to remake a new post everytime. 

## Lessons Learned:

Database usage with images via Cloudinary. Strengthed my knowledge of MVC architecture. Regular breaking of node.js building my backend while I worked out bugs. Extensive use of git/github in a more team / best practices method. Uploaded designs and build framework to Wiki. Created a "project" for workflow. Created issues with milestone and specifics. Created a PR submission template for use while merging.

## APP Use:

After creating account or signing in, you will be directed to the profile page. Here you will have the ability to insert the lost animals information and upload a picture. After clicking submit it will upload your animal to the lost animal "feed". The animal will also be displayed on your profile page. 

To nagivate around the website you can use the navigation buttons at the top. To view all animals currently lost you can click on the "Lost Pets" button, to view the success stores you click "Reunited", you can to go back to your profile with the "Profile" button, and you can log out with the "Logout" button.

On the Lost Pets feed / Reunited feed, you can click on individual animals to get more details and see their "post". On the Lost Pets feed it allows any user to make comments in regards to the animal, so the community can assist in getting the animal back home. Additionally, the owner of the post will be able to delete the entire post from here if needed and comment owners can delete their comments if needed. 

After reunited, the owner can navigate to the profile page and click the "Reunited" button for an animal's post. This will move the post off the Lost Pets feed and will now display on the Reunited feed.

Users are not limited to just 1 lost animal, they can post multiple animals at a time.

### Install

`npm install`

---

#### Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---

#### Run

`npm start`

## Other Projects:

**You Can't Afford Rent:** https://github.com/BrettCrafton/You-Cant-Afford-Rent
<a href="https://you-cant-afford-rent.herokuapp.com/" target="_blank" rel="noreferrer"> <img src="https://github.com/BrettCrafton/BrettCrafton/blob/main/assets/you%20cant%20afford%20rent%20gif.gif?raw=true" alt="project example" width="600"/> </a>

**Magical World of Harry Potter:** https://github.com/BrettCrafton/Magical-World-of-Harry-Potter
<a href="https://brettcrafton.com/Portfolio/Harry%20Potter/index.html" target="_blank" rel="noreferrer"> <img src="https://github.com/BrettCrafton/BrettCrafton/blob/main/assets/Harry%20Potter%20gif.gif?raw=true" alt="project example"/> </a>


**Cocktail Recipes:** https://github.com/BrettCrafton/Cocktail-Recipes
<a href="https://brettcrafton.com/Portfolio/Bar%20API/index.html" target="_blank" rel="noreferrer"> <img src="https://github.com/BrettCrafton/BrettCrafton/blob/main/assets/Cocktail%20Recipe%20gif.gif?raw=true" alt="project example"/> </a>


**Rick and Morty Parasite Detector:** https://github.com/BrettCrafton/Rick-and-Morty-Parasite-Detector
<a href="https://brettcrafton.com/Portfolio/Rick-and-Morty/index.html" target="_blank" rel="noreferrer"> <img src="https://github.com/BrettCrafton/BrettCrafton/blob/main/assets/Rick%20and%20Morty%20gif.gif?raw=true" alt="project example"/> </a>


**NASA APOD:** https://github.com/BrettCrafton/NASA-APOD
<a href="https://brettcrafton.com/Portfolio/NASA%20API/index.html" target="_blank" rel="noreferrer"> <img src="https://github.com/BrettCrafton/BrettCrafton/blob/main/assets/NASA%20APOD%20gif.gif?raw=true" alt="project example"/> </a>
