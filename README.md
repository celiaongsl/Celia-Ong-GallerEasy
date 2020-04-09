# To start app: 
```
npm i
npm start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Overview:
We’ve been approached by a client who wants to develop their own web app to aggregate
results from various online image libraries. Their eventual goal is to provide a dynamic, clean
interface for use across all devices to make it effortless for users to search for images across
many different services at once.
They’re still in the deal-making stage with their contacts, but in the meantime they’ve given
2359 Media the green light to go ahead and create a functional, proof-of-concept (POC)
front-end web app for them!

# POC requirements:
The client has given us a list of things to focus on so that they can get a real feel for how the
final production-ready app will perform. Here’s the important requirements for the
development of the POC web app:
● The user should be able to search by keyword for images
● Images should be shown in a grid with consistent width and height images, without
stretching the images (cropping is ok, so long as the image fills the grid space), with a
default maximum of 8 images shown per search
● The user should be able to add and remove a tag from images to mark or unmark
them as a favourite image
● Different app states should ideally be accounted for with UI feedback to the user, e.g.
errors, loading, etc

## The client also had a few other features in mind, but considered these as secondary and only required if we’re able to fulfil the above requirements:
● Add a “Fetch More” button displayed below the results that will fetch the next 8
image results for the current search
● A dedicated page that the user can go to to view their tagged favourite images at
any time