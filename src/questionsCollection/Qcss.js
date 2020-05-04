export let css = [{
        text: 'Have you played around with the new CSS Flexbox or Grid specs?',
        answer: {
            title: `Flexbox is mainly meant for 1-dimensional layouts while Grid is meant for 2-dimensional layouts.`,
            par1: `Flexbox solves many common problems in CSS, such as vertical centering of elements within a container, sticky footer, etc. Bootstrap and Bulma are based on Flexbox, and it is probably the recommended way to create layouts these days. Have tried Flexbox before but ran into some browser incompatibility issues (Safari) in using flex-grow, and I had to rewrite my code using inline-blocks and math to calculate the widths in percentages, it wasn't a nice experience.`,
            par2: `Grid is by far the most intuitive approach for creating grid-based layouts (it better be!) but browser support is not wide at the moment.
            `,

        },
        note: '',
        known: false,
        language: 'css',
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
        language: 'css',
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
        language: 'css',
    },


    {
        text: `What's the difference between SCSS and Sass?`,
        answer: {
            title: `There are two syntaxes available for Sass. The first, known as SCSS (Sassy CSS) and used throughout this reference, is an extension of the syntax of CSS. This means that every valid CSS stylesheet is a valid SCSS file with the same meaning. This syntax is enhanced with the Sass features described below. Files using this syntax have the .scss extension.`,
            par1: `The second and older syntax, known as the indented syntax (or sometimes just Sass), provides a more concise way of writing CSS. It uses indentation rather than brackets to indicate nesting of selectors, and newlines rather than semicolons to separate properties. Files using this syntax have the .sass extension.`,

        },
        note: '',
        known: false,
        language: 'css',
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
        language: 'css',
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
        language: 'css',
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
        language: 'css',
    },


    {
        text: `Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?`,
        answer: {
            title: `translate() is a value of CSS transform. Changing transform or opacity does not trigger browser reflow or repaint but does trigger compositions; whereas changing the absolute positioning triggers reflow. transform causes the browser to create a GPU layer for the element but changing absolute positioning properties uses the CPU. Hence translate() is more efficient and will result in shorter paint times for smoother animations.`,
            par1: `When using translate(), the element still occupies its original space (sort of like position: relative), unlike in changing the absolute positioning.`,
        },
        note: '',
        known: false,
        language: 'css',
    },

    {
        text: `Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?`,
        answer: {
            title: `translate() is a value of CSS transform. Changing transform or opacity does not trigger browser reflow or repaint but does trigger compositions; whereas changing the absolute positioning triggers reflow. transform causes the browser to create a GPU layer for the element but changing absolute positioning properties uses the CPU. Hence translate() is more efficient and will result in shorter paint times for smoother animations.`,
            par1: `When using translate(), the element still occupies its original space (sort of like position: relative), unlike in changing the absolute positioning.`,
        },
        note: '',
        known: false,
        language: 'css',
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
        language: 'css',
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
        language: 'css',
    },

    {
        text: `What is the RGB stream?`,
        answer: {
            title: `RGB is a system of representing a certain colour in CSS.`,
            par1: `here are three streams in this nomenclature of representing a colour, namely the Red, Green and Blue stream. The intensity of the three colours is represented in numbers ranging from 0 to 256. This allows CSS to have a wide range of colours spreading across the entire spectrum of visible colours.`,

        },
        note: '',
        known: false,
        language: 'css',
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
        language: 'css',
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
        language: 'css',
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
        language: 'css',
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
        language: 'css',
    },

    {
        text: ` What is the overflow property in CSS used for?`,
        answer: {
            title: `The overflow property specifies what should happen if content overflows an element’s box. This property specifies whether to clip content or to add scrollbars when an element’s content is too big to fit in a specified area.`,
        },
        note: '',
        known: false,
        language: 'css',
    },

    {
        text: `What will this piece of CSS code do to an element? .container { margin: 0 auto; }`,
        answer: {
            title: `When you have specified a width on the object that you have applied margin: 0 auto to, the object will sit centrally within its parent container. Specifying auto as the second parameter basically tells the browser to automatically determine the left and right margins itself, which it does by setting them equally. It guarantees that the left and right margins will be set to the same size. The first parameter 0 indicates that the top and bottom margins will both be set to 0.`,
        },
        note: '',
        known: false,
        language: 'css',
    },

    {
        text: `What is responsive web design?`,
        answer: {
            title: `Responsive design is an approach to web page creation that makes use of flexible layouts, flexible images and cascading style sheet media queries. The goal of responsive design is to build web pages that detect the visitor’s screen size and orientation and change the layout accordingly.`,
        },
        note: '',
        known: false,
        language: 'css',
    },

    {
        text: `What is the difference between {visibility: hidden} and {display: none}`,
        answer: {
            title: `Those two css rules control the visibility of a given element`,
            par1: `display:none means that the tag in question will not appear on the page at all (although you can still interact with it through the DOM). There will be no space allocated for it between the other tags.`,
            par2: `visibility:hidden means that unlike display:none, the tag is not visible, but space is allocated for it on the page. The tag is rendered, it just isn’t seen on the page.`
        },
        note: '',
        known: false,
        language: 'css',
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
        language: 'css',
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
        language: 'css',
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
        language: 'css',
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
        language: 'css',
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
        language: 'css',
    },
]