LoveliFolk Home Page - Web Developer
====================================

Introduction
------------

The purpose of this exercise is to recreate the supplied design ('design.jpg') using HTML5, CSS3 and supplied assets. There is also a simple shopping basket which should have some basic functionality applied. Please spend no more than an evening working on this test, if you don't have time to complete all of it then think about what you can achieve.

Description
-----------

The web page should have the following properties:

* Should match design.jpg in terms of visual design. 
* The font stack used throughout (apart from the logos) is: Arial, Helvetica, sans-serif.
* The menu at the top of the page should contain links.
* The menu should have rollovers on the 'SHOP', 'ABOUT' and 'CONTACT' links that resemble the current appearance of the 'HOME' link.
* Each of the four large rectangles that contain images and text should be clickable links.

Requirements
------------

### Page Layout

Create a single HTML5 document and associated single CSS3 document that renders the web page according to the supplied design. The completed page should be "pixel perfect" with some latitude allowed for the way different browsers and platforms render text. Use the supplied assets; create any necessary visual effects using CSS (i.e. not with additional image assets).

Use your judgement to create normal or bold text as appropriate; aim to reproduce the design as accurately as possible. Ensure that you use the correct colours throughout. 

### Shopping Cart Functionality

You are required to prototype some basic cart functionality.

The only functionality requested is as follows:

* When a user clicks "Add to basket" the item should be added to the basket. 
* If a user tries to add an item to the basket which is already present, the quantity of that item should be incremented by one.
* When a user clicks the "remove" link next to a line item it should remove all of those items from the basket.
* The basket's visual representation should be kept in sync with the program state.
* The contents of the cart should persist over page refreshes using client side technology.

If you have experience writing specs or tests then your code should be accompanied by them.

#### Design Variations

* Variation 01 (design-cart-01.jpg) can either display the cart on mouse hover over or on click.
* Variation 02 (design-cart-02.jpg) should display the cart on click. Use Javascript to hide the page content and replace it with the shopping cart. The details section can contain the greek text for now.

Those images are examples only. You can implement the cart display in any way you feel is appropriate.

**Note:** You're not required to implement full eCommerce shopping functionality. This is a toy example, you could consider it a click-model prototype.

You can use any library you are familiar with (jQuery, MooTools, underscore, etc...).

Advice
------

We are looking for well-designed markup and styles, and a good understanding of how to separate the concerns of HTML, CSS and JavaScript. We are interested in how accurately you can reproduce a given design using these technologies, the use of idiomatic and best practices, and attention to cross-browser incompatibilities. 

There may be too much to achieve in a single evening, we'll look at what you have completed and may carry on the conversation in the technical interview. If you are applying for a Javascript heavy roll then you should plan your time accordingly.

Output
------

We have created a basic skeleton to give you a starting point. You'll find image assets in www/css/assets. 

	www
	|--css
	|  |--assets (all images...)
	|  +--style.css
	|--js
	|  +--script.js
	+--index.html
	

You can obviously add as many files as you need and link out to external resources as required. If you'd prefer to use your own file structure then please, go ahead.

Once you finish the development, please zip all files and send it back to the person handling your recruitment.

Good luck, happy hacking!


