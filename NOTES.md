Please add any additional notes here…

### GET /cards/:cardId

I'm not sure if there is an error with the data provided as sizes.json and cards.json appear to be identical. I believe that because of this I was unable to access "available sizes" in order to deliver the information requested for GET /cards/:cardId on the readme.

As I have already demonstrated my ability to cross match two different files and use promise.all, I will use my remaining time to attempt the next end point, however I believe this section would have required accessing data from all three json files to provide the imageUrl and available sizes.

### with more time...

I could create a tested util function to read files instead of repeating the code for each of my controller functions

split the tests up more - eg for POST /cards, i should test the new cards id seperately to make it clearer what has passed/failed

POST /cards should possibly have had its title altered according to its position in a similar way to the id (although it isnt clear if this should just be given on user input.)

catch errors during fs readfile and writefile

I have commented out the fs.writefile for POST /cards as jest--watch was making this loop. I made a new file for the updated data as i didn't want to alter the original data. I am aware, however that in a real world testing situation I could seed the test data
