import {
    uuid
} from 'uuidv4';

export let staticQuestions = [{
        text: 'Have you played around with the new CSS Flexbox or Grid specs?',
        answer: {
            title: `Flexbox is mainly meant for 1-dimensional layouts while Grid is meant for 2-dimensional layouts.`,
            par1: `Flexbox solves many common problems in CSS, such as vertical centering of elements within a container, sticky footer, etc. Bootstrap and Bulma are based on Flexbox, and it is probably the recommended way to create layouts these days. Have tried Flexbox before but ran into some browser incompatibility issues (Safari) in using flex-grow, and I had to rewrite my code using inline-blocks and math to calculate the widths in percentages, it wasn't a nice experience.`,
            par2: `Grid is by far the most intuitive approach for creating grid-based layouts (it better be!) but browser support is not wide at the moment.
        `,

        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()

    },

    {
        text: 'Explain the usage of "table-layout" property',
        answer: {
            title: `The table-layout property defines the algorithm used to lay out table cells, rows, and columns.`,
            par1: `auto - Browsers use an automatic table layout algorithm. The column width is set by the widest unbreakable content in the cells. The content will dictate the layout.`,
            par2: `fixed - The layout is fixed based on the first row. Set the width of those, and the rest of the table follows. If no widths are present on the first row, the column widths are divided equally across the table, regardless of content inside the cells.
        `,
            par3: `initial - Sets this property to its default value.
        `,
            par4: `inherit - Inherits this property from its parent element.
        `,

        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()


    },


    {
        text: ' How does CSS actually work (under the hood of browser)?',
        answer: {
            title: `When a browser displays a document, it must combine the document's content with its style information. It processes the document in two stages:`,
            par1: `The browser converts HTML and CSS into the DOM (Document Object Model). The DOM represents the document in the computer's memory. It combines the document's content with its style.`,
            par2: `The browser displays the contents of the DOM.
        
        `,


        },
        note: '',
        known: false,
        technology: 'CSS',
        id: 'lolek'

    },


    {
        text: `What's the difference between SCSS and Sass?`,
        answer: {
            title: `There are two syntaxes available for Sass. The first, known as SCSS (Sassy CSS) and used throughout this reference, is an extension of the syntax of CSS. This means that every valid CSS stylesheet is a valid SCSS file with the same meaning. This syntax is enhanced with the Sass features described below. Files using this syntax have the .scss extension.`,
            par1: `The second and older syntax, known as the indented syntax (or sometimes just Sass), provides a more concise way of writing CSS. It uses indentation rather than brackets to indicate nesting of selectors, and newlines rather than semicolons to separate properties. Files using this syntax have the .sass extension.`,

        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()
    },

    {
        text: `Describe pseudo-elements and discuss what they are used for.`,
        answer: {
            title: `A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s). They can be used for decoration (:first-line, :first-letter) or adding elements to the markup (combined with content: ...) without having to modify the markup (:before, :after).`,
            par1: `:first-line and :first-letter can be used to decorate text.`,
            par2: `Used in the .clearfix hack to add a zero-space element with clear: both.`,
            par3: `Triangular arrows in tooltips use :before and :after. Encourages separation of concerns because the triangle is considered part of styling and not really the DOM, but not really possible to draw a triangle with just CSS styles.`,

        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()
    },

    {
        text: `How is responsive design different from adaptive design?`,
        answer: {
            title: `Both responsive and adaptive design attempt to optimize the user experience across different devices, adjusting for different viewport sizes, resolutions, usage contexts, control mechanisms, and so on.`,
            par1: `Responsive design works on the principle of flexibility — a single fluid website that can look good on any device. Responsive websites use media queries, flexible grids, and responsive images to create a user experience that flexes and changes based on a multitude of factors. Like a single ball growing or shrinking to fit through several different hoops.`,
            par2: `Adaptive design is more like the modern definition of progressive enhancement. Instead of one flexible design, adaptive design detects the device and other features, and then provides the appropriate feature and layout based on a predefined set of viewport sizes and other characteristics. The site detects the type of device used, and delivers the pre-set layout for that device. Instead of a single ball going through several different-sized hoops, you’d have several different balls to use depending on the hoop size.`,


        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()
    },

    {
        text: `What's the difference between a relative, fixed, absolute and statically positioned element?`,
        answer: {
            title: `A positioned element is an element whose computed position property is either relative, absolute, fixed or sticky.`,
            par1: `static - The default position; the element will flow into the page as it normally would. The top, right, bottom, left and z-index properties do not apply.`,
            par2: `relative - The element's position is adjusted relative to itself, without changing layout (and thus leaving a gap for the element where it would have been had it not been positioned).`,
            par3: `absolute - The element is removed from the flow of the page and positioned at a specified position relative to its closest positioned ancestor if any, or otherwise relative to the initial containing block. Absolutely positioned boxes can have margins, and they do not collapse with any other margins. These elements do not affect the position of other elements.`,
            par4: `fixed - The element is removed from the flow of the page and positioned at a specified position relative to the viewport and doesn't move when scrolled.`,
            par5: `sticky - Sticky positioning is a hybrid of relative and fixed positioning. The element is treated as relative positioned until it crosses a specified threshold, at which point it is treated as fixed positioned.
        `,


        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()
    },


    {
        text: `Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?`,
        answer: {
            title: `translate() is a value of CSS transform. Changing transform or opacity does not trigger browser reflow or repaint but does trigger compositions; whereas changing the absolute positioning triggers reflow. transform causes the browser to create a GPU layer for the element but changing absolute positioning properties uses the CPU. Hence translate() is more efficient and will result in shorter paint times for smoother animations.`,
            par1: `When using translate(), the element still occupies its original space (sort of like position: relative), unlike in changing the absolute positioning.`,
        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()
    },

    {
        text: `Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?`,
        answer: {
            title: `translate() is a value of CSS transform. Changing transform or opacity does not trigger browser reflow or repaint but does trigger compositions; whereas changing the absolute positioning triggers reflow. transform causes the browser to create a GPU layer for the element but changing absolute positioning properties uses the CPU. Hence translate() is more efficient and will result in shorter paint times for smoother animations.`,
            par1: `When using translate(), the element still occupies its original space (sort of like position: relative), unlike in changing the absolute positioning.`,
        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()
    },


    {
        text: `Can you explain the difference between coding a website to be responsive versus using a mobile-first strategy?`,
        answer: {
            title: `Making a website responsive means the some elements will respond by adapting its size or other functionality according to the device's screen size, typically the viewport width, through CSS media queries, for example, making the font size smaller on smaller devices.`,
            par1: `A mobile-first strategy is also responsive, however it agrees we should default and define all the styles for mobile devices, and only add specific responsive rules to other devices later. `,
            par2: `A mobile-first strategy has 2 main advantages: It's more performant on mobile devices, since all the rules applied for them don't have to be validated against any media queries.
        It forces to write cleaner code in respect to responsive CSS rules.`,
        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()
    },

    {
        text: `What is the difference between the usage of an ID and a Class?`,
        answer: {
            title: `In the CSS, a class selector is a name preceded by a full stop (“.”) and an ID selector is a name preceded by a hash character (“#”)`,
            par1: ` An ID is unique. A particular ID can be only assigned to a single element. IDs are used when specific styling is being tried to be achieved over a single element.`,
            par2: `Class – Just like the word suggests, a class is a collective way of targetting HTML elements for styling. Classes are not unique and multiple elements can have the same class. In fact, multiple classes can also be added to the same element to achieve the desired style and look. Below is an example of the usage of classes.`,
        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()
    },

    {
        text: `What is the RGB stream?`,
        answer: {
            title: `RGB is a system of representing a certain colour in CSS.`,
            par1: `here are three streams in this nomenclature of representing a colour, namely the Red, Green and Blue stream. The intensity of the three colours is represented in numbers ranging from 0 to 256. This allows CSS to have a wide range of colours spreading across the entire spectrum of visible colours.`,

        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()
    },


    {
        text: `What are the ways to assign a certain colour to an element in CSS?`,
        answer: {
            title: `CSS can assign a wide range of colours to elements using different notations. There are three notations as of now that are used that are explained below:`,
            par1: `Hexadecimal notation.
        A colour in hexadecimal string notation always begins with the character “#”. After that, the hexadecimal digits of the colour code is written. The string is case-insensitive.`,
            par2: `RGB functional notation.
        RGB (Red/Green/Blue) functional notation, like hexadecimal string notation, represents colours using their red, green, and blue components (as well as, optionally, an alpha channel component for opacity). However, instead of using a string, the colour is defined using the CSS function RGB(). This function accepts as its input parameters the values of the red, green, and blue components and an optional fourth parameter, the value for the alpha channel.`,
            par3: `HSL functional notation.
        Designers and artists often prefer to work using the HSL (Hue/Saturation/Luminosity) colour method. On the web, HSL colours are represented using HSL functional notation. The HSL() CSS function is very similar to the RGB() function in usage otherwise`,

        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()
    },

    {
        text: ` Explain the CSS Box Model and its different elements`,
        answer: {
            title: `The CSS box model describes the rectangular boxes that are generated for elements in the document tree and laid out according to the visual formatting model. Each box has a content area (e.g. text, an image, etc.) and an optional surrounding padding, border, and margin areas. he CSS box model is responsible for calculating:`,
            par1: `How much space a block element takes up.`,
            par2: `Whether or not borders and/or margins overlap, or collapse.
       `,
            par3: `A box’s dimensions.`,

        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()
    },

    {
        text: `What is the z-index in CSS? `,
        answer: {
            title: `The z-index helps specify the stack order of positioned elements that may overlap one another. The z-index default value is zero and can take on either a positive or negative number.`,
            par1: `An element with a higher z-index is always stacked above than a lower index. `,
            par2: `Z-Index can take the following values: Auto (sets the stack order equal to its parents), Number(Orders the stack order), Initial (sets this property to its default value (0)), Inherit (Inherits this property from its parent element)
       `,


        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()
    },

    {
        text: `What are CSS Sprites? `,
        answer: {
            title: `CSS sprites combine multiple images into one single larger image. It is a commonly-used technique for icons (Gmail uses it). This is how you could implement it:`,
            par1: `se a sprite generator that packs multiple images into one and generates the appropriate CSS for it.`,
            par2: `Each image would have a corresponding CSS class with background-image, background-position and background-size properties defined.
       `,
            par3: `To use that image, add the corresponding class to your element.`


        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()
    },

    {
        text: ` What is the overflow property in CSS used for?`,
        answer: {
            title: `The overflow property specifies what should happen if content overflows an element’s box. This property specifies whether to clip content or to add scrollbars when an element’s content is too big to fit in a specified area.`,
        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()
    },

    {
        text: `What will this piece of CSS code do to an element? .container { margin: 0 auto; }`,
        answer: {
            title: `When you have specified a width on the object that you have applied margin: 0 auto to, the object will sit centrally within its parent container. Specifying auto as the second parameter basically tells the browser to automatically determine the left and right margins itself, which it does by setting them equally. It guarantees that the left and right margins will be set to the same size. The first parameter 0 indicates that the top and bottom margins will both be set to 0.`,
        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()
    },

    {
        text: `What is responsive web design?`,
        answer: {
            title: `Responsive design is an approach to web page creation that makes use of flexible layouts, flexible images and cascading style sheet media queries. The goal of responsive design is to build web pages that detect the visitor’s screen size and orientation and change the layout accordingly.`,
        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()
    },

    {
        text: `What is the difference between {visibility: hidden} and {display: none}`,
        answer: {
            title: `Those two CSS rules control the visibility of a given element`,
            par1: `display:none means that the tag in question will not appear on the page at all (although you can still interact with it through the DOM). There will be no space allocated for it between the other tags.`,
            par2: `visibility:hidden means that unlike display:none, the tag is not visible, but space is allocated for it on the page. The tag is rendered, it just isn’t seen on the page.`
        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()
    },


    {
        text: `Explain the concept of specificity in CSS`,
        answer: {
            title: `Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied. Specificity is based on the matching rules which are composed of different sorts of CSS selectors.`,
            par1: `Specificity is a weight that is applied to a given CSS declaration, determined by the number of each selector type in the matching selector. When multiple declarations have equal specificity, the last declaration found in the CSS is applied to the element. `,
            par2: `Specificity only applies when the same element is targeted by multiple declarations. As per CSS rules, directly targeted elements will always take precedence over rules which an element inherits from its ancestor.`
        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()
    },

    {
        text: `What is CSS flexbox?`,
        answer: {
            title: `The flexbox layout officially called CSS flexible box layout module is a new layout module in CSS3.`,
            par1: `It is made to improve the items align, directions and order in the container even when they are with dynamic, or even unknown size. The prime characteristic of the flex container is the ability to modify the width or height of its children to fill the available space in the best possible way on different screen sizes.`,
            par2: `Many designers and developers find this flexbox layout easier to use, as the positioning of the elements is simpler thus more complex layouts can be achieved with less code, leading to a simpler development process.`,
            par3: `Flexbox layout algorithm is direction based unlike the block or inline layout which are vertically and horizontally based. This flexbox layout should be used for small application components, while the new CSS Grid Layout Module is emerging to handle the large scale layouts.`
        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()
    },

    {
        text: `How does a browser determine what elements match a CSS selector?`,
        answer: {
            title: `Browsers match selectors from rightmost (key selector) to left.`,
            par1: `Browsers filter out elements in the DOM according to the key selector and traverse up its parent elements to determine matches. The shorter the length of the selector chain, the faster the browser can determine if that element matches the selector.

        `,
            par2: `For example with this selector p span, browsers firstly find all the <span> elements and traverse up its parent all the way up to the root to find the <p> element. For a particular <span>, as soon as it finds a <p>, it knows that the <span> matches and can stop its matching.`,

        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()
    },

    {
        text: ` Explain the scenario you would use translate() instead of absolute positioning? `,
        answer: {
            title: `Translate is a value of CSS transform. Changing transform or opacity does not trigger browser reflow or repaint but does trigger compositions; whereas changing the absolute positioning triggers reflow. `,
            par1: `Transform causes the browser to create a GPU layer for the element but changing absolute positioning properties uses the CPU. Hence translate() is more efficient and will result in shorter paint times for smoother animations.

        `,
            par2: `When using translate(), the element still occupies its original space (sort of like position: relative), unlike in changing the absolute positioning.`,

        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()
    },

    {
        text: `Explain the difference in approach when designing a responsive website over a mobile-first strategy?`,
        answer: {
            title: `These two approaches are not exclusive.`,
            par1: `Making a website responsive means some elements will respond by adapting its size or other functionality according to the device’s screen size, typically the viewport width, through CSS media queries.
        `,


        },
        note: '',
        known: false,
        technology: 'CSS',
        id: uuid()
    },

    // #######################################################################################
    // #############################           HTML                  #########################
    // #######################################################################################
    {
        text: 'Describe HTML',
        answer: {
            title: `Hypertext Markup Language or HTML is a markup language that is used to create website templates or WebPages to present the content on the World Wide Web.`,
            par1: `HTML pages are saved by adding .html or .HTML in web page name.`,

        },
        note: '',
        known: false,
        technology: 'HTML',
        id: uuid()
    },

    {
        text: 'What is Anchor tag and how can you open an URL into a new tab when clicked?',
        answer: {
            title: `Anchor tag in HTML is used to link between two sections or two different web pages or website templates.`,
            par1: `To open an URL into a new tab in the browser upon a click, we need to add target attribute equal to _blank.`,
            par2: `<a href=”#” target=”_blank”></a>`,

        },
        note: '',
        known: false,
        technology: 'HTML',
        id: uuid()
    },

    {
        text: 'Define Semantic elements in HTML',
        answer: {
            title: `Semantic elements are HTML elements that represent its meaning to the browser and developer about its contents.`,
            par1: `For Example – p tag represents a paragraph, a tag represents anchor tag, form tag, table tag, article tag and many more are semantic elements in HTML. Whereas, div tag, span tag, bold tag are not semantic elements.`,
            par2: `<a href=”#” target=”_blank”></a>`,

        },
        note: '',
        known: false,
        technology: 'HTML',
        id: uuid()
    },

    {
        text: 'Define attributes in HTML tag',
        answer: {
            title: `The HTML tag contains a field inside their tag which is called attributes of that tag.`,
            par1: `<img src=”#”> here in this tag src is img tag attributes.`,
            par2: `<input type=” text”> here in this tag type is input tag attributes.`,

        },
        note: '',
        known: false,
        technology: 'HTML',
        id: uuid()
    },

    {
        text: `Can we modify the attribute's value of the HTML tag dynamically?`,
        answer: {
            title: `Yes, we can modify the value of the attributes by using JavaScript.`,
            par1: `<img src=”#”> here in this tag src is img tag attributes.`,
            par2: `<input type=” text”> here in this tag type is input tag attributes.`,

        },
        note: '',
        known: false,
        technology: 'HTML',
        id: uuid()
    },

    {
        text: `How can we comment in HTML?`,
        answer: {
            title: `Comments are used by developers to keep a track of the code functionality and also help the other developers in understanding the code functionalities easily.`,
            par1: `The commented outlines will not be shown in the browser. To comment a line, the line should start by this <!– and end by this –>. Comments can be of one line or of multiple lines.`,


        },
        note: '',
        known: false,
        technology: 'HTML',
        id: uuid()
    },

    {
        text: `What are inline elements and block-level elements in HTML?`,
        answer: {
            title: `Block elements are the blocks that take the full available width and always start from a new line. It will stretch itself to the full available width of the available container width. Block-level elements are <div>, <p>, <img>, <section> and many more.`,
            par1: `Inline elements are the elements that will only take the width that is required to fit into the container.`,


        },
        note: '',
        known: false,
        technology: 'HTML',
        id: uuid()
    },

    {
        text: `Can we change inline elements into block-level elements?`,
        answer: {
            title: `Yes, we can change inline elements into block-level elements by adding display equal to block in its CSS tag. Writing it will change the inline elements into block elements and then inline elements will also take the full width of the container.`,
            par1: `Inline elements are the elements that will only take the width that is required to fit into the container.`,


        },
        note: '',
        known: false,
        technology: 'HTML',
        id: uuid()
    },

    {
        text: `What are <br> tags in HTML?`,
        answer: {
            title: `<br> tags are used to enter a new line into the HTML contents. These tags are generally used to separate two different lines of text between each other.`,



        },
        note: '',
        known: false,
        technology: 'HTML',
        id: uuid()
    },

    {
        text: `Explain the structure of the HTML webpage.`,
        answer: {
            title: `The common structure which all HTML pages follow are enlisted below:`,
            par1: `DOCTYPE – It is a special tag in HTML which is always written at the top of the HTML document, i.e. at the start of the HTML template. DOCTYPE is used to convey to the browser about the HTML version.`,
            par2: ` HTML – After DOCTYPE tag, the HTML tag is written to start the template. All the code will be placed into this HTMLtag. It works as the container for the whole HTML page elements.`,
            par3: `HEAD – <head> tag is the first element inside the <HTML> tag. It is used to provide information to the browser about the page and its contents. Search Engine Optimization (SEO) techniques are written inside this tag. <title>, <meta> tags are written inside these tag. CSS and JS external links or internal CSS and JS are also written inside this tag.`,
            par4: `BODY – <body> tags are written after the closing tag of the <head> tag, i.e. after </head>. Whatever HTML code is written inside these tags will be shown by the browser as website content.`,


        },
        note: '',
        known: false,
        technology: 'HTML',
        id: uuid()
    },

    {
        text: `Why Meta tags are used in HTML?`,
        answer: {
            title: `Meta tags in HTML are used by the developer to tell the browser about the page description, author of the template, character set, keywords and many more.`,
            par1: `Meta tags are used for search engine optimization to tell the search engine about the page contents.`,



        },
        note: '',
        known: false,
        technology: 'HTML',
        id: uuid()
    },

    {
        text: `Explain list elements in HTML`,
        answer: {
            title: `Enlisted below are the list elements in HTML:`,
            par1: `Ordered List (<ol>) – An Ordered List or ol tag is the list that lists the items in an ordered way, i.e. numbered or alphabetically.`,
            par2: `Unordered List (<ul>) – An Unordered List or ul tag is the list which will list the items in an unordered way, i.e. in bulleted format or in any other format.`,
            par3: `Definition List (<dl>) – A Definition List or dl tag arrange the items in the way in which they are arranged in a dictionary.`,



        },
        note: '',
        known: false,
        technology: 'HTML',
        id: uuid()
    },

    {
        text: ` Define iframe in HTML`,
        answer: {
            title: `Iframe tag is written as <iframe>.`,
            par1: `An iframe is used to display different document content inside the different document content in a rectangular region in the browser. When different document content is embedded into a current HTML content, then it is known as an inline iframe.`,



        },
        note: '',
        known: false,
        technology: 'HTML',
        id: uuid()
    },

    {
        text: `Define forms in HTML.`,
        answer: {
            title: `Forms in HTML are required when we want to collect the user information whenever a user fills any form or provides any details and when we want to save it into our database.`,
        },
        note: '',
        known: false,
        technology: 'HTML',
        id: uuid()
    },

    {
        text: ` Define iframe in HTML`,
        answer: {
            title: `Iframe tag is written as <iframe>.`,
            par1: `An iframe is used to display different document content inside the different document content in a rectangular region in the browser. When different document content is embedded into a current HTML content, then it is known as an inline iframe.`,



        },
        note: '',
        known: false,
        technology: 'HTML',
        id: uuid()
    },

    {
        text: `How can we create a hyperlink in HTML?`,
        answer: {
            title: `An anchor tag or <a> tag in HTML is used to create hyperlinks. This creates a path between two different HTML web pages.`,
            par1: `Unvisited Link – These links are blue in color and underlined.`,
            par2: `Visited Link – These links are purple in color and underlined.`,
            par3: `Active Link – These links are red in color and underlined.`,



        },
        note: '',
        known: false,
        technology: 'HTML',
        id: uuid()
    },

    {
        text: `Why do we use the required attribute in HTML?`,
        answer: {
            title: `The required attribute is used in HTML to make the field mandatory. It forces the user to fill that particular field to submit the form.`,
            par1: `If the field is input then it will throw a default HTML error.`,

        },
        note: '',
        known: false,
        technology: 'HTML',
        id: uuid()
    },

    {
        text: `What are Web Workers?`,
        answer: {
            title: `Web Workers is a code of JavaScript which runs in the background threads without disturbing the performance of the page. It is used for computing-heavy tasks like an access database or function.`,


        },
        note: '',
        known: false,
        technology: 'HTML',
        id: uuid()
    },


    {
        text: `What is the SVG element?`,
        answer: {
            title: `SVG is a followed XML format; it stands for Scalable Vector Graphics which is used to create vector graphics with the support for interactivity and animation.`,
            par1: `SVG is resolution independent as it does not lose its quality when they are resized or zoomed.`,

        },
        note: '',
        known: false,
        technology: 'HTML',
        id: uuid()
    },


    {
        text: `Explain about Canvas.`,
        answer: {
            title: ` Canvas is a pixel-based graphics and it is one of the new features of HTML5.`,
            par1: `It provides a space in the document where we can draw graphics by using JavaScript and it is resolution dependent, hence the quality will be affected when it's zoomed or resized.`,

        },
        note: '',
        known: false,
        technology: 'HTML',
        id: uuid()
    },


    {
        text: `What is Quirks mode in HTML5?`,
        answer: {
            title: `If we do not include the <!DOCTYPE> element in our HTML page or Document, it will go to Quirks Mode. In this mode, the HTML element depends on the browser. Hence the content will be displayed according to the browser.`,

        },
        note: '',
        known: false,
        technology: 'HTML',
        id: uuid()
    },

    // #######################################################################################
    // #############################           JAVASCRIPT            #########################
    // #######################################################################################
    {
        text: 'What is Coercion in JavaScript?',
        answer: {
            title: `Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on). Any type, be it primitive or an object, is a valid subject for type coercion. To recall, primitives are: number, string, boolean, null, undefined + Symbol (added in ES6). Type coercion can be explicit and implicit.`,
            par1: `When a developer expresses the intention to convert between types by writing the appropriate code, like Number(value), it’s called explicit type coercion (or type casting).`,
            par2: `Since JavaScript is a weakly-typed language, values can also be converted between different types automatically, and it is called implicit type coercion. It usually happens when you apply operators to values of different types, like
      1 == null, 2/’5', null + new Date(), or it can be triggered by the surrounding context, like with if (value) {…}, where value is coerced to boolean.`,
            par3: `Implicit type coercion is a double edge sword: it’s a great source of frustration and defects, but also a useful mechanism that allows us to write less code without losing the readability.`
        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What is Scope in JavaScript? ',
        answer: {
            title: `Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. The two types of scope are local and global`,
            par1: `Global variables are those declared outside of a block`,
            par2: `Local variables are those declared inside of a block`,
            par3: `Using local scope, we can actually create new variables with the same name as a variable in an outer scope without changing or reassigning the original value.`,
            par4: `Variables declared with the var keyword are always function-scoped, meaning they recognize functions as having a separate scope. This locally-scoped variable is therefore not accessible from the global scope.`,
            par5: `The new keywords let and const, however, are block-scoped. This means that a new, local scope is created from any kind of block, including function blocks, if statements, and for and while loops.`
        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'Explain equality in JavaScript.',
        answer: {
            title: 'The equality operator converts the operands if they are not of the same type, then applies strict comparison. If both operands are objects, then JavaScript compares internal references which are equal when operands refer to the same object in memory.'
        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'Write the errors shown in JavaScript ?',
        answer: {
            title: `There are three different types of errors in JavaScript.`,
            par1: `Syntax error: A syntax error is an error in the syntax of a sequence of characters or tokens that are intended to be written in a particular programming language.`,
            par2: `Logical error: It is the most difficult error to be traced as it is the error on the logical part of the coding or logical error is a bug in a program that causes to operate incorrectly and terminate abnormally.`,
            par3: `Runtime Error: A runtime error is an error that occurs during the running of the program, also known as the exceptions.`,

        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What is the difference between innerHTML & innerText ?',
        answer: {
            title: 'The innerText property sets or returns the text content as plain text of the specified node, and all its descendants whereas the innerHTML property sets or returns the plain text or HTML contents in the elements. Unlike innerText, inner HTML lets you work with HTML rich text and doesn’t automatically encode and decode text.'
        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'How many ways an HTML element can be accessed in a JavaScript code ?',
        answer: {
            title: `There are four possible ways to access HTML element in JavaScript which are:`,
            par1: `getElementById() Method: It is used to get the element by its id name.`,
            par2: `getElementsByClass() Method: It is used to get all the elements that have the given classname.`,
            par3: `getElementsByTagName() Method: It is used to get all the elements that have the given tag name.`,
            par4: `querySelector() Method: This function takes CSS style selector and returns the first selected element.`,

        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What is typeof operator?',
        answer: {
            title: `The typeof operator is used to get the data type (returns a string) of its operand. The operand can be either a literal or a data structure such as a variable, a function, or an object. The operator returns the data type.`,
            par1: `There are six possible values that typeof returns: object, boolean, function, number, string, and undefined. `,

        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What is the object type?',
        answer: {
            title: `Objects, in JavaScript, is it’s most important data-type and forms the building blocks for modern JavaScript. These objects are quite different from JavaScript’s primitive data-types(Number, String, Boolean, null, undefined and symbol) in the sense that while these primitive data-types all store a single value each (depending on their types).`,
            par1: `Objects are more complex and each object may contain any combination of these primitive data-types as well as reference data-types.`,
            par2: `An object, is a reference data type. Variables that are assigned a reference value are given a reference or a pointer to that value. That reference or pointer points to the location in memory where the object is stored. The variables don’t actually store the value.`,
            par3: `Loosely speaking, objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs. These keys can be variables or functions and are called properties and methods, respectively, in the context of an object`,
            par4: `An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where a key is a string (also called a “property name”), and value can be anything.`,

        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'Explain arrays in JavaScript.',
        answer: {
            title: `In JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable. Unlike most languages where array is a reference to the multiple variable, in JavaScript array is a single variable that stores multiple elements.`,
            par1: `An array in JavaScript can hold different elements.
      We can store Numbers, Strings and Boolean in a single array.`,
            par2: `Array in JavaScript are indexed from 0 `,
            par3: `Length property of an Array returns the length of an Array. Length of an Array is always one more than the highest index of an Array.`,


        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'Explain Values and Types in JavaScript.',
        answer: {
            title: `There are two kinds of types in JavaScript: primitive types and reference types. There are, correspondingly, two kinds of data values that can be stored in variables, passed as arguments, returned by methods, and operated on: primitive values and reference values.`,
            par1: `JavaScript's primitive data types are boolean, number, and undefined; its reference types are string, object (including the null object), and function. Strings compare by value (ASCII lexicographical order), not reference, when used as operands of the equality and relational operators.`,
            par2: `The boolean type has the truth values true and false. A number can be either an integer or floating-point; JavaScript does not explicitly distinguish between them. The integer bitwise-logical and shift operators work with 32-bit signed two's-complement integers. Floating-point numbers are in 64-bit IEEE 754 format.`,
            par3: `An object in JavaScript is a container that associates names and indexes with data of arbitrary type. These associations are called properties. Properties with function values are called the object's methods.`,
            par4: `Each type has a corresponding object class: Boolean, Number, String, Object, and Function. JavaScript converts values to objects by constructing an object of the corresponding class for the value's type.`,

        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'Explain Null and Undefined in JavaScript.',
        answer: {
            title: `In JavaScript there are only six falsy values. Both null and undefined are two of the six falsy values.`,
            par1: `null is an empty or non-existent value.`,
            par2: `null must be assigned`,
            par3: `Undefined most typically means a variable has been declared, but not defined.`,
            par4: `null and undefined are both primitives. However an error shows that typeof null = object`,
            par5: `null !== undefined but null == undefined`,
        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },


    {
        text: 'What is strict mode?',
        answer: {
            title: `Strict Mode was a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. This strict context prevents certain actions from being taken and throws more exceptions. The statement “use strict”; instructs the browser to use the Strict mode, which is a reduced and safer feature set of JavaScript.`,
            par1: `Strict mode eliminates some JavaScript silent errors by changing them to throw errors.`,
            par2: `Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that’s not strict mode.`,
            par3: `It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object).`,
            par4: `It disables features that are confusing or poorly thought out.`,

        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What is a Polyfill?',
        answer: {
            title: `A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.`
        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What is let keyword in JavaScript?',
        answer: {
            title: `The let keyword is used to declare variables in JavaScript.`,
            par1: `let allows you to declare variables that are limited to a scope of a block statement, or expression on which it is used, unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope. `,
            par2: `The other difference between var and let is that the latter is initialized to a value only when a parser evaluates it (see below).`,
            par3: `Just like const the let does not create properties of the window object when declared globally (in the top-most scope).`,


        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },




    {
        text: 'What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript? ',
        answer: {
            title: `The let keyword is used to declare variables in JavaScript.`,
            par1: `let allows you to declare variables that are limited to a scope of a block statement, or expression on which it is used, unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope. `,
            par2: `The other difference between var and let is that the latter is initialized to a value only when a parser evaluates it (see below).`,
            par3: `Just like const the let does not create properties of the window object when declared globally (in the top-most scope).`,


        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What is the difference between `==` and `===`?',
        answer: {
            title: `Since JavaScript support both strict equality and type-converting equality, it's important to know which operator is used for which operation. `,
            par1: `"==" operator is known as type coercion operator and anytime if both values are same and compared using == operator, type coercion happens. On the other hand === is known as strictly equality operator. `,
            par2: `the ‘===’ operator tests for strict equality i.e it will not do the type conversion hence if the two values are not of the same type, when compared, it will return false.`,
            par3: `In general “===” operator is recommended since it never does type conversion we are doing an exact comparison thus it always produces correct results.`,


        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },



    {
        text: 'How to compare two objects in JavaScript?',
        answer: {
            title: `It’s easy to compare objects for equality, but not so easy to tell if they contain the same values.`,
            par1: `"==" operator is known as type coercion operator and anytime if both values are same and compared using == operator, type coercion happens. On the other hand === is known as strictly equality operator. `,
            par2: `the ‘===’ operator tests for strict equality i.e it will not do the type conversion hence if the two values are not of the same type, when compared, it will return false.`,
            par3: `In general “===” operator is recommended since it never does type conversion we are doing an exact comparison thus it always produces correct results.`,


        },
        note: '',
        level: 'mid',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What is the difference between anonymous and named functions?',
        answer: {
            title: `Anonymous functions are function expressions, and thus we can pass them as variables and return functions. When used as IIFE, they are used to maintain scope.`,
            par1: `Anonymous functions are function expressions, and thus we can pass them as variables and return functions. When used as IIFE, they are used to maintain scope.`,
            par2: `Anonymous functions are functions without a name. There are a couple of ways to create anonymous functions however they are all created on application runtime. `,
            par3: `One of the more famous use cases for anonymous functions are Immediately Invokable Function Expressions (IIFE). IIFE, for short, is a pattern that uses an anonymous function which immediately creates and invokes the contents of the function.`,


        },
        note: '',
        level: 'mid',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'Describe closure concept in JavaScript as best as you could.',
        answer: {
            title: `A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.`,
            par1: `To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function.`,
            par2: `The inner function will have access to the variables in the outer function scope, even after the outer function has returned.`,
            par3: `Among other things, closures are commonly used to give objects data privacy. Data privacy is an essential property that helps us program to an interface, not an implementation. This is an important concept that helps us build more robust software because implementation details are more likely to change in breaking ways than interface contracts.`,
            par4: `In JavaScript, closures are the primary mechanism used to enable data privacy. When you use closures for data privacy, the enclosed variables are only in scope within the containing (outer) function. You can’t get at the data from an outside scope except through the object’s privileged methods. In JavaScript, any exposed method defined within the closure scope is privileged.`,


        },
        note: '',
        level: 'mid',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },



    {
        text: 'What is IIFEs (Immediately Invoked Function Expressions)?',
        answer: {
            title: `An Immediately-invoked Function Expression (IIFE for friends) is a way to execute functions immediately, as soon as they are created.`,
            par1: `IIFEs are very useful because they don’t pollute the global object, and they are a simple way to isolate variables declarations.`,
            par2: `We can make any function expression an IIFE by wrapping it in parentheses, and adding a following pair of parentheses at the end. The parentheses surrounding the function definition lets JavaScript know that it will process a function expression. The last pair of parentheses invoke the function.`,
        },
        note: '',
        level: 'mid',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: `What's the difference between using “let” and “var” to declare a variable in ES6?`,
        answer: {
            title: `Main difference is scoping rules.`,
            par1: ` A variable defined using a var statement is known throughout the function it is defined in, from the start of the function.`,
            par2: `A variable defined using a let statement is only known in the block it is defined in, from the moment it is defined onward.`,
        },
        note: '',
        level: 'mid',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'When should You use Arrow functions in ES6?',
        answer: {
            title: `Why use arrow functions almost everywhere?`,
            par1: `Scope safety: When arrow functions are used consistently, everything is guaranteed to use the same thisObject as the root. If even a single standard function callback is mixed in with a bunch of arrow functions there's a chance the scope will become messed up.`,
            par2: `Compactness: Arrow functions are easier to read and write.`,
            par3: `Clarity: When almost everything is an arrow function, any regular function immediately sticks out for defining the scope. A developer can always look up the next-higher function statement to see what the thisObject is.`,
            par4: `One of the primary usecases for arrow functions in JavaScript, is for functions that get applied over and over again to items in a list. For example, if you have an array of values that you want to transform using a map, an arrow function is ideal.`,
            par5: `Another place arrow functions make for cleaner and more intuitive code is in managing asynchronous code. Promises make it far easier to manage async code. However, while using promises still requires defining functions that run after your asynchronous code or call completes. This is an ideal location for an arrow function, especially if your resulting function is stateful, referencing something in your object.`,
        },
        note: '',
        level: 'mid',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What is the motivation for bringing Symbols to ES6?',
        answer: {
            title: 'They are known as unique symbols and their only intended use is to avoid name clashes between properties. For example, ECMAScript itself can now introduce extension hooks via certain methods that you can put on objects (e.g. to define their iteration protocol) without risking them to clash with user names.'
        },
        note: '',
        level: 'mid',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What are the benefits of using spread syntax in ES6 and how is it different from rest syntax? ',
        answer: {
            title: `Why use arrow functions almost everywhere?`,
            par1: `Copying an array.
      The traditional way was to use the Array.prototype.slice()method. But with the spread operator, it just takes three dots …`,
            par2: `Concatenating arrays. This objective was previously achieved by using the Array.prototype.concat() method. Now it can be easily achieved using the spread operator.`,
            par3: `Spreading elements together with an individual element`,
            par4: `Spreading elements on function calls. `,
            par5: `Spread syntax for object literals. The traditional way of achieving this was by using the Object.assign() method.
      The Object.assign() method can be used to copy the values of all enumerables’ own properties from one or more source objects to a target object, and it will return the target object.
      But with the spread operator, three dots simply get the job done.`,
            par6: `It is a collection of all remaining elements (hence, the name rest, as in “the rest of the elements”) into an array. Spread operator is the opposite to rest parameter, where rest parameter collects items into an array, the spread operator unpacks the collected elements into single elements.`,
        },
        note: '',
        level: 'mid',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What is the definition of a higher-order function?',
        answer: {
            title: 'A higher order function is a function that takes a function as an argument, or returns a function. Higher order function is in contrast to first order functions, which don’t take a function as an argument or return a function as output.'
        },
        note: '',
        level: 'mid',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },





    {
        text: 'What is generator in JS?',
        answer: ' A generator-function is defined like a normal function, but whenever it needs to generate a value, it does so with the yield keyword rather than return. The yield statement suspends function’s execution and sends a value back to caller, but retains enough state to enable function to resume where it is left off. When resumed, the function continues execution immediately after the last yield run.',
        note: '',
        level: 'mid',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'When should we use generators in ES6?',
        answer: {
            title: `There are many awesome use cases of generators.`,
            par1: `When you implement an iterator, you have to manually make an iterator object with a next() method. Also, you have to manually save the state. Often times, it becomes really hard to do that. Since generators are also iterables, they can be used to implement iterables without the extra boilerplate code. `,
            par2: `Generators can also receive values using the next(val) function. Then the generator is called an observer since it wakes up when it receives new values. In a sense, it keeps observing for values and acts when it gets one.`,
            par3: `Ifinite Data Streams.
      It’s possible to create generators that never end.`,
        },
        note: '',
        level: 'mid',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What is Hoisting in JavaScript?',
        answer: {
            title: `Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.`,
            par1: `Functions declarations go to the very top, so will sit above all of the variable declarations.`,

        },
        note: '',
        level: 'mid',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },



    {
        text: 'What does the term "Transpiling" stand for?',
        answer: {
            title: `There's no way to polyfill new syntax that has been added to the language. So the better option is to use a tool that converts your newer code into older code equivalents. This process is commonly called transpiling, a term for transforming + compiling.`,
            par1: `Typically you insert the transpiler into your build process, similar to your code linter or your minifier. There are quite a few great transpilers for you to choose from: Babel (Transpiles ES6+ into ES5) and Traceur (Transpiles ES6, ES7, and beyond into ES5)`,
            par2: `In other words: Transpilers, or source-to-source compilers, are tools that read source code written in one programming language, and produce the equivalent code in another language. Languages you write that transpile to JavaScript are often called compile-to-JS languages, and are said to target JavaScript.`
        },
        answer: '',
        note: '',
        level: 'mid',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },


    {
        text: 'Can you describe the main difference between a `.forEach` loop and a `.map()` loop and why you would pick one versus the other?',
        answer: {
            title: `Both of these functions were introduced in ECMA2016`,
            par1: `forEach() — executes a provided function once for each array element.`,
            par2: `forEach() method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array.`,
            par3: `forEach() may be preferable when you’re not trying to change the data in your array, but instead want to just do something with it — like saving it to a database or logging it out.`,
            par4: `map() — creates a new array with the results of calling a provided function on every element in the calling array.`,
            par5: `the map() method will also call a provided function on every element in the array. The difference is that map() utilizes return values and actually returns a new Array of the same size.`,
            par5: `map() might be preferable when changing or altering data. Not only is it faster but it returns a new Array. This means we can do cool things like chaining on other methods ( map(), filter(), reduce(), etc.)`,

        },
        note: '',
        level: 'mid',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What does the && operator do?',
        answer: {
            title: `The AND operator is represented with two ampersands &&. AND “&&” finds the first falsy value`,
            par1: `Evaluates operands from left to right.`,
            par2: `For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.`,
            par3: `If all operands have been evaluated (i.e. all were truthy), returns the last operand.`,
            par4: `In other words, AND returns the first falsy value or the last value if none were found.      `,


        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What does the || operator do?',
        answer: {
            title: `Logical operators OR. Although it's called “logical”, it can be applied to values of any type, not only boolean. Their result can also be of any type. OR “||” finds the first truthy value`,
            par1: ` OR evaluates operands from left to right.`,
            par2: `For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.`,
            par3: ` If all operands have been evaluated (i.e. all were false), returns the last operand.`,


        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What is the DOM?',

        answer: {
            title: `The Document Object Model, or the “DOM”, is an interface to web pages. It is essentially an API to the page, allowing programs to read and manipulate the page’s content, structure, and styles.`,
            par1: `Although similar to other forms of the source HTML document, the DOM is different in a number of ways.`,
            par2: `It is always valid HTML.`,
            par3: ` It is a living model that can be modifed by Javascript.`,
            par4: `It doesn't include pseudo-elements (e.g. ::after). `,
            par5: `It does include hidden elements (e.g. with display: none).`,

        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What is Event Propagation?',
        answer: {
            title: `Event propagation is a mechanism that defines how events propagate or travel through the DOM tree to arrive at its target and what happens to it afterward. In modern browser event propagation proceeds in two phases: capturing, and bubbling phase.`,
            par1: `With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.`,
            par2: `With capturing, the event is first captured by the outermost element and propagated to the inner elements.`,
        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: `What's Event Bubbling?`,
        answer: {
            title: `Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. The event propagation mode determines in which order the elements receive the event.`,
            par1: `With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.`,
            par2: `We can use the addEventListener(type, listener, useCapture) to register event handlers for in either bubbling (default) or capturing mode. To use the bubbling model pass the third argument as false.`,
        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: `What's Event Capturing?`,
        answer: {
            title: `Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. The event propagation mode determines in which order the elements receive the event.`,
            par1: `With capturing, the event is first captured by the outermost element and propagated to the inner elements.`,
            par2: `We can use the addEventListener(type, listener, useCapture) to register event handlers for in either bubbling (default) or capturing mode. To use the bubbling model pass the third argument as true.`
        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: `What's the difference between event.preventDefault() and event.stopPropagation() methods?`,
        answer: {
            title: `Event propagation is a mechanism of how events propagate through the DOM tree to arrive at its target.`,
            par1: `Event Propagation has three phases: Capturing Phase (the event starts from the window down until it reaches the event.target),
      Target Phase (the event has reached the event.target)
      Bubling Phase (the event bubbles up from the event.target element up until it reaches the window).`,
            par2: `The event.preventDefault() method prevents the default behavior of an element. If we use form element it prevents form submitting. If we use a href element it prevents navigating. If we use contextMenu element it prevents displaying.`,
            par3: `The event.stopPropagation() method stops the propagation of an event from occurring in the bubbling or capturing phase.`,


        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What is event.target ?',
        answer: {
            title: `The target event property returns the element that triggered the event.`,
            par1: `The target property gets the element on which the event originally occurred, opposed to the currentTarget property, which always refers to the element whose event listener triggered the event.`,



        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What is event.currentTarget?',
        answer: {
            title: `The currentTarget event property returns the element whose event listeners triggered the event.`,
            par1: `This is particularly useful during capturing and bubbling.`,
            par2: `The currentTarget property always refers to the element whose event listener triggered the event, opposed to the target property, which returns the element that triggered the event.`,


        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'Why does it return false when comparing two similar objects in JavaScript?',
        answer: {
            title: `Equality sign (===) doesn't check that both objects have the same property keys and values. Instead, it checks that the two objects occupy the same place in memory.`,
            par1: `Hence, when we declare a it is given a place in memory. When we assign a to b, we are not declaring a new object, rather we are telling b that its value is in the same location as a. So essentially, when we do a === b, it returns true because we are essentially doing a === a (which is obviously going to be true).`,
            par2: `However, when we take a (its value being { name: 'simple object' }) and compare it to a new object that looks the same (a === c), we get false. The reason this happens is that the object we assigned to c occupies a different place in memory than a. Therefore, when === tries to check if the two objects are the same place in memory, it returns false because they are in different places in memory.`,


        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What are the falsy values in JavaScript?',
        answer: 'A falsy value is something which evaluates to FALSE, for instance when checking a variable. There are only six falsey values in JavaScript: undefined, null, NaN, 0, "" (empty string), and false of course.',
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: `What's the value of this in JavaScript?`,
        answer: {
            title: `The JavaScript this keyword refers to the object it belongs to. It has different values depending on where it is used.`,
            par1: `In a method, this refers to the owner object.`,
            par2: `Alone, this refers to the global object.`,
            par3: `In a function, this refers to the global object.`,
            par4: `In a function, in strict mode, this is undefined.`,
            par5: `In an event, this refers to the element that received the event.`,
            par6: `Methods like call(), and apply() can refer this to any object.`,

        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: `What's the difference between var, let and const keywords?`,
        answer: {
            title: `In Javascript one can define variables using the keywords var, let, const`,
            par1: `VAR: the JavaScript variables statement is used to declare a variable and, optionally, we can initialize the value of that variable. Variable declarations are processed before the execution of the code. The scope of a JavaScript variable declared with var is its current execution context. The scope of a JavaScript variable declared outside the function is global.`,
            par2: `LET: the let statement declares a local variable in a block scope. It is similar to var, in that we can optionally initialize the variable. The let statement allows you to create a variable with the scope limited to the block on which it is used. It is similar to the variable we declare in other languages like Java, .NET, etc.`,
            par3: `CONST: const statement values can be assigned once and they cannot be reassigned. The scope of const statement works similar to let statements.`,

        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What are Template Literals?',
        answer: {
            title: `Template literals are enclosed by the backtick (\`
      \`) character instead of double or single quotes.`,
            par1: `Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (\${expression}). The expressions in the placeholders and the text between the backticks (\`
      \`) get passed to a function.`,
            par2: `The default function just concatenates the parts into a single string. If there is an expression preceding the template literal (tag here), this is called a tagged template. In that case, the tag expression (usually a function) gets called with the template literal, which you can then manipulate before outputting.`,

        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What is Object Destructuring?',
        answer: {
            title: `Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables. Destructuring allows us to extract multiple properties, or items, from an array​ at a time.`,
            par1: `Possible actions with destructuring: assigning to existing variable names, assigning to new variable names, assigning to a variable with default values, `,

        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What are Promises?',
        answer: {
            title: `Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.`,
            par1: `A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.`,
            par2: `Promises are eager, meaning that a promise will start doing whatever task you give it as soon as the promise constructor is invoked.`,
            par3: `Benefits of Promises: improves Code Readability, better handling of asynchronous operations, better flow of control definition in asynchronous logic, better error handling
      `
        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: 'What is async/await and How does it work?',
        answer: {
            title: `Async and Await are extensions of promises. The name comes from async and await - the two keywords that will help us clean up our asynchronous code`,
            par1: `Async - declares an asynchronous function. Automatically transforms a regular function into a Promise. When called async functions resolve with whatever is returned in their body. Async functions enable the use of await`,
            par2: `Await - pauses the execution of async functions. When placed in front of a Promise call, await forces the rest of the code to wait until that Promise finishes and returns a result. Await works only with Promises, it does not work with callbacks. Await can only be used inside async functions.`,
            par3: `With the addition of Async/Await the JavaScript language takes a huge leap forward in terms of code readability and ease of use. The ability to write asynchronous code that resembles regular synchronous functions will be appreciated by both beginners to JavaScript and veteran coders.`
        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: `What is AJAX?`,
        answer: {
            title: 'AJAX stands for Asynchronous JavaScript and XML. AJAX is a new technique for creating better, faster, and more  interactive web applications with the help of XML, HTML, CSS, and Java Script.',
            par1: 'Ajax uses XHTML for content, CSS for presentation, along with Document Object Model and JavaScript for dynamic content display.',
            par2: 'Conventional web applications transmit information to and from the sever using synchronous requests. It means you fill out a form, hit submit, and get directed to a new page with new information from the server.',
            par3: 'With AJAX, when you hit submit, JavaScript will make a request to the server, interpret the results, and update the current screen. In the purest sense, the user would never know that anything was even transmitted to the server.'
        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: `What are the ways to deal with Asynchronous Code in JavasScript?`,
        answer: {
            title: `JavaScript is synchronous by default and is single threaded.
      This means that code cannot create new threads and it will execute your code block by order after hoisting. Asynchronous means that things can happen independently of the main program flow.`,
            par1: `A callback is a simple function that’s passed as a value to another function, and will only be executed when the event happens.
      With a callback you can guarantee that function B is only called after function A is finished with its thing because function A is actually the one responsible for calling function B. Callbacks are great for simple cases, However every callback adds a level of nesting, and when you have lots of callbacks, the code starts to get complicated very quickly.`,
            par2: `Promises is one way to deal with callback dilemma and prevent writing too many callbacks in your code. Once a promise has been called, it will start in pending state. This means that the caller function continues the execution, while it waits for the promise to do its own processing, and give the caller function some feedback.
      At this point, the caller function waits for it to either return the promise in a resolved state, or in a rejected state, but the function continues its execution while the promise does it work. The resulting promise object has internal properties: state (initially “pending”, then changes to either “fulfilled” or “rejected”) and
      result (an arbitrary value of your choosing, initially undefined).`,
            par3: `Since ES2017 asynchronous JavaScript is even simpler with the async/await syntax. In a more comfortable fashion, they reduce the boilerplate around promises, and the “don’t break the chain” limitation of chaining promises.
      Async keyword placed before a function and the keyword await makes JavaScript wait until that promise settles and returns its result. Prepending the async keyword to any function means that the function will return a promise and wraps non-promises in it. await literally makes JavaScript wait until the promise settles, and then go on with the result. That doesn’t cost any CPU resources, because the engine can do other jobs meanwhile: execute other scripts, handle events etc.`
        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: `What's the difference between a function expression and function declaration?`,
        answer: {
            title: `They're actually really similar. How you call them is exactly the same.The difference lies in how the browser loads them into the execution context.`,
            par1: `Function declarations load before any code is executed.`,
            par2: `Function expressions load only when the interpreter reaches that line of code.`,
            par3: `So if you try to call a function expression before it's loaded, you'll get an error! If you call a function declaration instead, it'll always work, because no code can be called until all declarations are loaded.`
        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: `How many ways can a function be invoked? `,
        answer: {
            title: `In JavaScript the way a function is invoked has a significant impact on how the code within it executes, especially regarding this parameter.`,
            par1: `Invoking functions as functions. A function can be invoked simply using the () operator on any expression that resolves to a function reference. When function is invoked in this manner the function context is Window i.e. the global context. This is true even when a function is deeply nested within other functions.`,
            par2: `Invoking functions as object methods. Functions can be assigned to object properties and can be invoked using parentheses (). Similar to object-oriented languages, if a function is invoked as an object’s method then the object becomes the function context.`,
            par3: `Invoking functions as constructors. Functions that can be invoked as constructors are just like any other functions. What makes a function a constructor function is the way it is invoked which is using new keyword.
      `,
            par4: `Invoking function with apply() and call() methods. All the above ways of function invocation dictate what will be the function context But what if you want to force what will be the function context ? Well, function themselves provides you with the means to do so with apply() and call() methods. Both, apply() and call() methods takes first argument as the object that can be used as function context i.e. this. The difference between these two methods is how the rest of the arguments are supplied to the function. apply() takes an array of arguments whereas call() takes any number of arguments.
      `,

        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    {
        text: `Why does typeof null return object? How to check if a value is null?`,
        answer: {
            title: `The null value is technically a primitive, the way "object" or "number" are primitives. This would typically mean that the type of null should also be "null". However, this is not the case because of a peculiarity with the way JavaScript was first defined.`,
            par1: `To check for null SPECIFICALLY you would use this: if (variable === null)`,
            par2: `This test will ONLY pass for null and will not pass for "", undefined, false, 0, or NaN.`,


        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },



    {
        text: `What's the difference between Spread operator and Rest operator?`,
        answer: {
            title: `Javascript's ECMA6 came out with a cool new features; 
    ... is one of these new Javascript functionalities. It can be used in two
     different ways; as a spread operator OR as a rest parameter.
     Rest parameter: collects all remaining elements into an array.
     Spread operator: allows iterables( arrays / objects / strings ) to be expanded into
      single arguments/elements.`
        },
        note: '',
        level: 'junior',
        known: false,
        technology: 'JavaScript',
        id: uuid()
    },

    // #######################################################################################
    // #############################           REACT                 #########################
    // #######################################################################################
    {
        text: 'What is React?',
        answer: {
            title: `React is a front-end JavaScript library developed by Facebook in 2011.`,
            par1: `It follows the component based approach which helps in building reusable UI components.`,
            par2: `It is used for developing complex and interactive web and mobile UI.`,
            par3: `Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.`
        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'List some of the major advantages of React.',
        answer: {
            title: `Some of the major advantages of React are:`,
            par1: ` increases the application’s performance.`,
            par2: `It can be conveniently used on the client as well as server side
.      `,
            par3: `Because of JSX, code’s readability increases
  `,
            par4: `React is easy to integrate with other frameworks like Meteor, Angular, etc
  `,
            par5: `Using React, writing UI test cases become extremely easy


  `,
        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'List some of the major advantages of React.',
        answer: {
            title: `Some of the major advantages of React are:`,
            par1: ` increases the application’s performance.`,
            par2: `It can be conveniently used on the client as well as server side
.      `,
            par3: `Because of JSX, code’s readability increases
  `,
            par4: `React is easy to integrate with other frameworks like Meteor, Angular, etc
  `,
            par5: `Using React, writing UI test cases become extremely easy


  `,
        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'What is JSX?',
        answer: {
            title: `JSX is a shorthand for JavaScript XML.`,
            par1: `This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance.`,

        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'What do you understand by Virtual DOM? Explain its working.',
        answer: {
            title: `A virtual DOM is a lightweight JavaScript object which originally is just the copy of the real DOM.  It is a node tree that lists the elements, their attributes and content as Objects and their properties. React’s render function creates a node tree out of the React components. It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system. This Virtual DOM works in three simple steps.`,
            par1: `Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.`,
            par2: `Then the difference between the previous DOM representation and the new one is calculated.`,
            par3: `Once the calculations are done, the real DOM will be updated with only the things that have actually changed. `,

        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'Why can’t browsers read JSX?',
        answer: {
            title: `Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.`,


        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'What do you understand from “In React, everything is a component.”',
        answer: {
            title: `Components are the building blocks of a React application’s UI. These components split up the entire UI into small independent and reusable pieces. Then it renders each of these components independent of each other without affecting the rest of the UI.`,


        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'What is Props?',
        answer: {
            title: `Props is the shorthand for Properties in React.`,
            par1: `They are read-only components which must be kept pure i.e. immutable`,
            par2: `They are always passed down from the parent to the child components throughout the application.`,
            par3: `A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.`,



        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'What are the different phases of React component’s lifecycle?',
        answer: {
            title: `There are three different phases of React component’s lifecycle:`,
            par1: `Initial Rendering Phase: This is the phase when the component is about to start its life journey and make its way to the DOM.`,
            par2: `Updating Phase: Once the component gets added to the DOM, it can potentially update and re-render only when a prop or state change occurs. That happens only in this phase.`,
            par3: `Unmounting Phase: This is the final phase of a component’s life cycle in which the component is destroyed and removed from the DOM.`,



        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'What is an event in React?',
        answer: {
            title: `In React, events are the triggered reactions to specific actions like mouse hover, mouse click, key press, etc. Handling these events are similar to handling events in DOM elements. But there are some syntactical differences like:`,
            par1: `Events are named using camel case instead of just using the lowercase.`,
            par2: `Events are passed as functions instead of strings.`,
            par3: `The event argument contains a set of properties, which are specific to an event. Each event type contains its own properties and behavior which can be accessed via its event handler only.`,



        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'What are synthetic events in React?',
        answer: {
            title: `Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API.`,
            par1: `This is done to make sure that the events show consistent properties across different browsers.`,

        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'What do you understand by refs in React?',
        answer: {
            title: `Refs is the short hand for References in React`,
            par1: `It is an attribute which helps to store a reference to a particular React element or component, which will be returned by the components render configuration function.`,
            par2: `It is used to return references to a particular element or component returned by render(). They come in handy when we need DOM measurements or to add methods to the components.`,

        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },


    {
        text: 'What do you understand by refs in React?',
        answer: {
            title: `Refs is the short hand for References in React`,
            par1: `It is an attribute which helps to store a reference to a particular React element or component, which will be returned by the components render configuration function.`,
            par2: `It is used to return references to a particular element or component returned by render(). They come in handy when we need DOM measurements or to add methods to the components.`,

        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },


    {
        text: 'List some of the cases when you should use Refs.',
        answer: {
            title: `Following are the cases when refs should be used:`,
            par1: `When you need to manage focus, select text or media playback`,
            par2: `To trigger imperative animations
        `,
            par3: `Integrate with third-party DOM libraries
        `

        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },


    {
        text: 'What are Higher Order Components(HOC)?',
        answer: {
            title: `Higher Order Component is an advanced way of reusing the component logic. Basically, it’s a pattern that is derived from React’s compositional nature`,
            par1: `HOC are custom components which wrap another component within it.`,
            par2: ` They can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components. You can say that HOC are ‘pure’ components.
        `,

        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'What is the significance of keys in React?',
        answer: {
            title: `Keys are used for identifying unique Virtual DOM Elements with their corresponding data driving the UI. `,
            par1: `They help React to optimize the rendering by recycling all the existing elements in the DOM.`,
            par2: `These keys must be a unique number or string, using which React just reorders the elements instead of re-rendering them. This leads to increase in application’s performance.
        `,

        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'What is React Router?',
        answer: {
            title: `React Router is a powerful routing library built on top of React, which helps in adding new screens and flows to the application.`,
            par1: `This keeps the URL in sync with data that’s being displayed on the web page.`,
            par2: `It maintains a standardized structure and behavior and is used for developing single page web applications. React Router has a simple API.
        `,

        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'Why do we need a Router in React?',
        answer: {
            title: `A Router is used to define multiple routes and when a user types a specific URL, if this URL matches the path of any ‘route’ defined inside the router, then the user is redirected to that particular route.`,
            par1: `So basically, we need to add a Router library to our app that allows creating multiple routes with each leading to us a unique view.`,


        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'What are the most common approaches for styling a React application?',
        answer: {
            title: `CSS Classes, Inline CSS, Pre-processors Such as Sass, Stylus, and Less, CSS-in-JS Modules Such as Styled Components, Emotion, and Styled-jsx`,
            par1: `CSS Classes
        React allows class names to be specified for a component, like class names are specified for a DOM element in HTML.
        When developers first start using React after developing traditional web applications, they often use CSS classes for styling because they are already familiar with the approach.`,
            par2: `Inline CSS.
        Styling React elements using inline CSS allows styles to be completely scoped to an element using a well-understood, standard approach. However, there are certain styling features that are not available with inline styles. For example, the styling of :hover pseudo-classes.`,
            par3: `Pre-processors Such as Sass, Stylus, and Less
        Pre-processors are often used on React projects. This is because, like CSS, they are well understood by developers and are often already in use if React is being integrated into a legacy application.`,
            par4: `CSS-in-JS Modules Such as Styled Components, Emotion, and Styled-jsx
        CSS-in-JS modules are a popular option for styling React applications because they integrate closely with React components. For example, they allow styles to change based on React props at runtime. Also, by default, most of these systems scope all styles to the respective component being styled.`,

        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'What are the most common approaches for styling a React application?',
        answer: {
            title: `CSS Classes, Inline CSS, Pre-processors Such as Sass, Stylus, and Less, CSS-in-JS Modules Such as Styled Components, Emotion, and Styled-jsx`,
            par1: `CSS Classes
        React allows class names to be specified for a component, like class names are specified for a DOM element in HTML.
        When developers first start using React after developing traditional web applications, they often use CSS classes for styling because they are already familiar with the approach.`,
            par2: `Inline CSS.
        Styling React elements using inline CSS allows styles to be completely scoped to an element using a well-understood, standard approach. However, there are certain styling features that are not available with inline styles. For example, the styling of :hover pseudo-classes.`,
            par3: `Pre-processors Such as Sass, Stylus, and Less
        Pre-processors are often used on React projects. This is because, like CSS, they are well understood by developers and are often already in use if React is being integrated into a legacy application.`,
            par4: `CSS-in-JS Modules Such as Styled Components, Emotion, and Styled-jsx
        CSS-in-JS modules are a popular option for styling React applications because they integrate closely with React components. For example, they allow styles to change based on React props at runtime. Also, by default, most of these systems scope all styles to the respective component being styled.`,

        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'How would you go about investigating slow React application rendering?',
        answer: {
            title: `One of the most common issues in React applications is when components re-render unnecessarily. There are two tools provided by React that are helpful in these situations:  React.memo() (this prevents unnecessary re-rendering of function components) and PureComponent (this prevents unnecessary re-rendering of class components)
        `,
            par1: `Both of these tools rely on a shallow comparison of the props passed into the component—if the props have not changed, then the component will not re-render.`,
            par2: `While both tools are very useful, the shallow comparison brings with it an additional performance penalty, so both can have a negative performance impact if used incorrectly.`,
            par3: `By using the React Profiler, performance can be measured before and after using these tools to ensure that performance is actually improved by making a given change.`,


        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'How would you go about investigating slow React application rendering?',
        answer: {
            title: `One of the most common issues in React applications is when components re-render unnecessarily. There are two tools provided by React that are helpful in these situations:  React.memo() (this prevents unnecessary re-rendering of function components) and PureComponent (this prevents unnecessary re-rendering of class components)
        `,
            par1: `Both of these tools rely on a shallow comparison of the props passed into the component—if the props have not changed, then the component will not re-render.`,
            par2: `While both tools are very useful, the shallow comparison brings with it an additional performance penalty, so both can have a negative performance impact if used incorrectly.`,
            par3: `By using the React Profiler, performance can be measured before and after using these tools to ensure that performance is actually improved by making a given change.`,


        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'What is the difference between a controlled component and an uncontrolled component?',
        answer: {
            title: `A controlled component is a component where React is in control and is the single source of truth for the form data. An uncontrolled component is where your form data is handled by the DOM, instead of inside your React component.
        `,
            par1: `Though uncontrolled components are typically easier to implement since you just grab the value from the DOM using refs, it’s typically recommended that you favor controlled components over uncontrolled components. The main reasons for this are that controlled components support instant field validation, allow you to conditionally disable/enable buttons, enforce input formats, and are more “the React way”.`,



        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'What is StrictMode in React?',
        answer: {
            title: `React's StrictMode is sort of a helper component that will help you write better react components, you can wrap a set of components with <StrictMode /> and it'll basically:
        `,
            par1: `Verify that the components inside are following some of the recommended practices and warn you if not in the console.`,
            par2: `Verify the deprecated methods are not being used, and if they're used strict mode will warn you in the console.
        `,
            par3: `Help you prevent some side effects by identifying potential risks.
        `,



        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'What are React Hooks?',
        answer: {
            title: `Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
        `,
            par1: `With Hooks, you can extract stateful logic from a component so it can be tested independently and reused.`,
            par2: ` Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.
        `,




        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'What are advantages of using React Hooks?',
        answer: {
            title: `Primarily, hooks in general enable the extraction and reuse of stateful logic that is common across multiple components without the burden of higher order components or render props. 
        `,
            par1: ` Hooks allow to easily manipulate the state of our functional component without needing to convert them into class components.`,
            par2: `Hooks don’t work inside classes (because they let you use React without classes). By using them, we can totally avoid using lifecycle methods, such as componentDidMount, componentDidUpdate, componentWillUnmount. Instead, we will use built-in hooks like useEffect .
        `,
        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'What are controlled components?',
        answer: {
            title: `In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. When a user submits a form the values from the aforementioned elements are sent with the form.
        `,
            par1: `With React it works differently. The component containing the form will keep track of the value of the input in it's state and will re-render the component each time the callback function e.g. onChange is fired as the state will be updated.`,
            par2: `An input form element whose value is controlled by React in this way is called a controlled component.
        `,
        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'What is the difference between state and props?',
        answer: {
            title: `Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. i.e,
        `,
            par1: `Props get passed to the component similar to function parameters`,
            par2: `State is managed within the component similar to variables declared within a function.
        `,
        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },

    {
        text: 'In ReactJS, why there is a need to capitalize on the components?',
        answer: {
            title: `It is necessary because components are not the DOM element but they are constructors. If they are not capitalized, they can cause various issues and can confuse developers with several elements. At the same time, the problem of integration of some elements and commands can be there.
        `,

        },
        note: '',

        known: false,
        technology: 'React',
        id: uuid()
    },


]