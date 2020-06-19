# **sei-Project-2**

Project 2: Multi-page site using NASA's public RESTful API's
This site is a pair-coded using NASA's public API's. We used the API's to GET & POST to display varied content to the viewer and ability to search NASA's database.

This was our first time using API's in an independent project and I really enjoyed looking through what was returned to inspire ideas for pages on our site.
You can check it out here:
https://a-der.github.io/sei-project-2/

Or checkout the GitHub repo here to download:
https://github.com/A-Der/sei-project-2

# Brief
- Find and use a RESTful API to build a multi-page site

# Technologies Used
- Insomnia
- React
- Axios
- Express
- Node
- AJAX
- Bulma
- Sass
- GitHub

# **Our Approach** #

# Initial search through API
We searched for an interesting free API and came across NASA's database. There was a plethora of API's to choose from, images from various satellites and land rovers, project information amongst many others.

We decided on using a handful of different API's across our site;
1. The 'Picture of The Day' is directl from NASA theirselves which we dedidcated a page to, complete with owners name and a short description of what the photo is displaying.

2. A library containing many of NASA's projects past and present was an interesting feature we came upon. We used one API request to display a small selection (instead of 12500) of projects ordered by date. Upon selecting one of these projects, this sent a seperate API request to retrieve data about that specific project and load onto a seperate page.

3. Using NASA's imagery database we created a search page which will take any word(s) as a query and return an array of images that are associated. The viewer can click through the search results which also includes a short description too of each image. We also included a dropdown selection list of popular searches.

# Wins and Challenges
Finding such an interesting API with many ways to GET different collections of images/information was both a win and also a challenge. There was lots of information work with but it also meant the requests could be a little more complicated than other API's. Most notably the project search and display. As the inital request for the projects only returned their date and ID, we had to take the ID upon selecting and fire off a new GET request using that ID. The user-end process is seemless and I am pleased with the outcome.