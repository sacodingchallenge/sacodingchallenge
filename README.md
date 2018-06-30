# San Antonio Coding Challenge

### File Structure

```
.
├── css                     
│   └── style.css           # Styles for whole site (~300 line file)
├── images                  
│   ├── favicon             # Favicon files
│   ├── og                  # Original photos (before resize and compression)
│   └── ...                 # All other photos
├── js                      
│   ├── events.js           # Handles event pagination (More V button)
│   ├── formatAPIData.js    # Formats Meetup API Data
│   ├── hideFooterText.js   # Hide footer icon text (text shown when JS disabled)
│   └── lazyCarousel.js     # Lazy loads Bootstrap Carousel images
├── views                   
│   ├── partials            # EJS partials - footer, google analytics, meta info, nav
│   └── ...                 # All the view files
└── server.js               # Express server
```

### Running the code locally
1.  Clone the repo
```
git clone https://github.com/sacodingchallenge/sacodingchallenge.git
```
2.  Navigate into the sacodingchallenge folder (it's saved wherever you ran line #1)
```
cd sacodingchallenge
```
3.  Install the necessary dependencies
```
npm i
```
4.  Start the server
```
node server.js
```
5.  See the site
```
http://localhost:3000/
```

### Adding a New Page

1. Make a new EJS file in the **views** folder
2. Add styling to **css/styles.css** (with a comment to split up the styles)
3. Add any necessary JavaScript to a new file in the **js** folder
4. Add a new endpoint in **server.js**

### Making Your First Commit
Go through [this guide](https://github.com/Roshanjossey/first-contributions). After that, apply what you've learned. 

#### Overview:
1.  Fork the repo
2.  Clone it
3.  Create a branch
4.  Make changes
5.  Commit them
6.  Push changes to your branch on GitHub
7.  Submit your changes for review