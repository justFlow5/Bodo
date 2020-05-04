export let react = [{
        text: 'What is React?',
        answer: {
            title: `React is a front-end JavaScript library developed by Facebook in 2011.`,
            par1: `It follows the component based approach which helps in building reusable UI components.`,
            par2: `It is used for developing complex and interactive web and mobile UI.`,
            par3: `Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.`
        },
        note: '',

        known: false,
        language: 'React',
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
        language: 'React',
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
        language: 'React',
    },

    {
        text: 'What is JSX?',
        answer: {
            title: `JSX is a shorthand for JavaScript XML.`,
            par1: `This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance.`,

        },
        note: '',

        known: false,
        language: 'React',
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
        language: 'React',
    },

    {
        text: 'Why can’t browsers read JSX?',
        answer: {
            title: `Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.`,


        },
        note: '',

        known: false,
        language: 'React',
    },

    {
        text: 'What do you understand from “In React, everything is a component.”',
        answer: {
            title: `Components are the building blocks of a React application’s UI. These components split up the entire UI into small independent and reusable pieces. Then it renders each of these components independent of each other without affecting the rest of the UI.`,


        },
        note: '',

        known: false,
        language: 'React',
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
        language: 'React',
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
        language: 'React',
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
        language: 'React',
    },

    {
        text: 'What are synthetic events in React?',
        answer: {
            title: `Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API.`,
            par1: `This is done to make sure that the events show consistent properties across different browsers.`,

        },
        note: '',

        known: false,
        language: 'React',
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
        language: 'React',
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
        language: 'React',
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
        language: 'React',
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
        language: 'React',
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
        language: 'React',
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
        language: 'React',
    },

    {
        text: 'Why do we need a Router in React?',
        answer: {
            title: `A Router is used to define multiple routes and when a user types a specific URL, if this URL matches the path of any ‘route’ defined inside the router, then the user is redirected to that particular route.`,
            par1: `So basically, we need to add a Router library to our app that allows creating multiple routes with each leading to us a unique view.`,


        },
        note: '',

        known: false,
        language: 'React',
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
        language: 'React',
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
        language: 'React',
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
        language: 'React',
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
        language: 'React',
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
        language: 'React',
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
        language: 'React',
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
        language: 'React',
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
        language: 'React',
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
        language: 'React',
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
        language: 'React',
    },

    {
        text: 'In ReactJS, why there is a need to capitalize on the components?',
        answer: {
            title: `It is necessary because components are not the DOM element but they are constructors. If they are not capitalized, they can cause various issues and can confuse developers with several elements. At the same time, the problem of integration of some elements and commands can be there.
            `,

        },
        note: '',

        known: false,
        language: 'React',
    },

]