# Unicode_tasks
## Tasks for Frontend 

## Task 1:Name-"Portfolio.html" , "Portfolio.css"
### Web portfolio using HTML and CSS.
## Description

A simple profile page using HTML and CSS. It includes a profile picture, a navbar: internally linking to 4 sections each: an "About Me" section containing general info, "Education" section containing education details,"Achievements Section" and a "Skills and Interests" section. The fifth link on the navbar redirects to the "contactme.html" page, which contains my contact details like address, email, phone number etc. More about this - to be covered in the Task 2 section of this readme.
#### Styling and features added:
For the Portfolio page "Portfolio.html", I have linked a css file "Portfolio.css" for styling.
* -created a favicon for my portfolio website using the online favicon generator https://favicon.io/favicon-generator/ and downloaded the image as "android-chrome-512x512.png".
* -used fontawesome cdn for all the icons in the footer section.
* -have made use of google fonts throughout the website
* - Created a mobile responsive page without using predefined bootstrap classes, wrote code from scratch using CSS mediaqueries and flexbox instead.
* -used profile picture "Profilepic1.jpg"
created a fade-out separator using gradients to separate header from profile picture
* -added shadow effects to the profile picture, to give it a postcard effectand for the navbar: added colour change + shadow effects to **highlight** the navbar buttons when the cursor **hovers** over it.
* -for the rest of the content used two background images "heading_bg.jpg" and "contentbg1.jpg". Gave shadow effects to the heading box. Center-aligned entire layout of the web-page's content.
* -used flexbox for the footer fontawesome icons, each redirecting to my respective social media page/ linkedIn/Github. Shadow and color change highlight on hovering cursor usedfor these icons as well. added a copyright stamp at the end of each page.


##SCREENSHOTS
1.Homepage
![homepage](/Screenshots/Homepage.png)
2.About Me
![About Me](/Screenshots/Aboutme.png)
3.Education
![Education](/Screenshots/Education.png)
4.Achievements
![Achievements](/Screenshots/Achievements.png)
5.Skills and Interests
![Skills and Interests](/Screenshots/Skills.png)
6.Footer section
![Footer Section](/Screenshots/Footer_section.png)

7.Responsive design:Across various hand-held devices
**On reducing Screen-size:**
![Responsive design demo](/Screenshots/mobile_responsive1.png)
![Responsive navbar](/Screenshots/mobile_responsive2.png)
![Responsive design demo](/Screenshots/mobile_responsive3.png)
![Responsive design demo](/Screenshots/mobile_responsive4.png)
![Responsive design demo](/Screenshots/mobile_responsive5.png)
![Responsive design demo](/Screenshots/mobile_responsive6.png)
![Responsive design demo](/Screenshots/mobile_responsive7.png)
![Responsive design demo](/Screenshots/mobile_responsive8.png)
![Responsive design demo](/Screenshots/mobile_responsive9.png)

## Task 2:Name- "Contactme.html", "Contactme.css"
### "Contact Me" page with Form validation using Javascript
## Description
This webpage is a continuation of the above website created for task 1. Styling is more or less the same(linked file here is "Contactme.css"), following the same color scheme, navbars, positioning with a couple of new fonts added to suit the form layout.Again. mediaqueries are used here as well to add responsive design to the webpage.
#### Additional Styling/features added:
* -new 'home' icon(using fontawesome cdn) added to the navbar, which links back to "Portfolio.html". Others link to specific sections of the file "Portfolio.html", just as in the previous task.
* -form with method = "POST" created, as forms might collect sensitive/personal data.
* -Automatic HTML validation added in the input elements using "required" attribute- so that user cannot keep any field empty. Autocomplete attribute is used as well. For email input field type="email" attribute is also added, which performs validation to some extent as well.
* -upon selecting the input field,the current field in which the user is typing gets highlighted/focused on with a background-color and bottom border. 
* -placeholders are used to show exemplary valid input field formats. Valid formats are displayed separately as well.
* -submit button invokes the javascript 'validate()' method- which uses RegEx to perfrom validation check. Each Regular expression has been contructed from scratch and tested using the online Regex tester- https://regex101.com/ . Styling: upon hovering cursor opacity of submit and reset button changes.
* -If user - input does not match given regex, then appropriate error message is displayed using an alert window, and user has to re-enter the entire those fields
* -Below the form, my basic contact info is provided, with appropriate semantic tags(eg. <address></address> for the address). fontawesome icons are again used for every contact detail, to make the overall layout more visually appealing. email link provided redirects to the users' default mail inbox, with a mail addressed to my given id composed as: Subject:'Enter Subject' and body:'Write your message here'.
* -in a similar fashion as in the previous webpage, the footer section is provided with links to various social media accounts. Upon cursor hover again shadow and color-change highlight occurs. copyright stamp is provided.

##SCREENSHOTS
1.Contactme.html
![Contact me page](/Screenshots/Contactme.png)
![home icon](/Screenshots/Home_icon.png)
2.Highlighted text fields
![highlighted field](/Screenshots/highlight_field.png)
3.Entering invalid data in email and phone number fields
![invalid data entered](/Screenshots/invalid_phone.png)
4.Error messages displayed
![Error message](/Screenshots/Errormsg1.png)
![Error message](/Screenshots/Errormsg2.png)
5.Get in touch section (basic contact details) + Footer section
![Get in touch section +footer](/Screenshots/Footer.png)
6.Responsive design
![Responsive design demo](/Screenshots/mobile_responsive10.png)
![Responsive design demo](/Screenshots/mobile_responsive11.png)
![Responsive design demo](/Screenshots/mobile_responsive12.png)



## Task 3:Name-"covid19data.html","covid19data.css","covid19data.js"
### Displaying COVID-19 data from an API in tabular format on the html webpage, using API calls in javascript.  
## Description
A simple webpage displaying world-wide country-wise data on COVID19 stats including various fields such as total no. of cases, total recovered, total cases per million population etc(total 13 fields) by fetching JSON data from an API( link:https://rapidapi.com/spamakashrajtech/api/corona-virus-world-and-india-data) ; all in a tabular format. The styling of the table and the entire webpage is done using the linked file "covid19data.js".
* Initially, html doc prepared. with a favicon image- 'covidfavicon.png' . Google fonts are used for styling.
* a div element with id="subheading" is created, which I will use to display the specific date and time at which the statistic was taken using the one of the various objects and object properties from the API data.
* A div element with id="myTable" created, where we shall append the data in tabular format using javascript.
* the javascript file "covid19data.js" is linked in the body element using <script></script>

#### the "covid19data.js" file:
* Here, I have made an API call using the fetch() method.
* I've created a method 'generateTable()' where the data fetched and returned by the .json() function will be sent as an argument. the data will be displayed in the console as well, since I've added 'console.log(data);'' . Errors caught,if any, will be displayed in the console as well.(the catch() block)
* inside the function genarateTable(), first we create an H4 element. Then we access the 'statistic_taken_at' data from the API, store it in a variable, and then use innerHTML and appendChild() methods to dsiplay it on our HTML page in the element with id="subheading"
* next, a table element is created. Object property names are accessed using the Object.keys() function and stored in an array . Similarly, no of columns, object property values etc values are accessed and stored in respective variables. Use of Loops, nested loops, insertRow() , document.createElement , appendChild, insertCell methods are used to create 1.The header row first , cell by cell and consequently: 2.Create the rest of the data rows, cell by cell. Looping constructs used are the for-loop and nested-for loop.
* finally the element created initially with id="myTable" in the HTML document is accessed and the element 'table' thus generated is appended to the HTML page body.

##SCREENSHOTS
![Covid data table](/covid1.png)

![Covid data table](/covid2.png)

![Covid data table](/covid3.png)
















