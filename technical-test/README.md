# Technical Test ReadMe

In this technical test I have attempted to use some more of the complex skills that I learned in my time as a Junior Angular Developer, whilst still maintaining readability and reusability.

## Model

The creation of the model was a vital step in reusability. Whilst the data used in this test is currently static data, any data that is passed in will also become readable within the accordion providing that it matches the syntax set in the model. The model includes an ID for each set of data, which allows for individual data targeting within the component HTML file.

The model also contains randomly generated Lorem Ipsum. The amount of Lorem Ipsum varies for each dataset, in order to show that the accordion title should remain at the top of the screen. This allows the user to click and close the accordion even if they are far down into the text.

## HTML

The HTML file initiates a for loop, which allows unique data sets from the model to be differentiated based on it's ID number. From here, a header is set for each accordion's title and content using data binding. The accordion content is initially set to hidden by default.

For the arrow, I have imported Favicons into the index.html file. I then used a tertiary operator to target the boolean value of each dataset. This checks to see if the data is hidden, and if so, the data is shown - and vice versa. I was asked to make use of tertiary operators in my last role, as my team leader felt they delivered much cleaner code, and I am inclined to agree.

## CSS

I kept the CSS intentionally simple. The pictures provided showed a white background with blue text, so I kept to this minimalistic design. I did add grey to the background of each title on hover, as I felt it was slightly better UX, and the grey meant that the text of each title was still readable.

## TS

The TS file contains an import of the accordion data model, and then static data for each part of the accordion. Below the constructor is a simple function that works with the tertiary operator. It simply targets the element by it's ID, checks to see if that element contains 'hide' (which it does by default in the HTML tags), and alters the dataset based on what it is being told.
