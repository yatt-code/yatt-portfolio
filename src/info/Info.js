import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Yatt",
    lastName: "Zamir",
    initials: "yatt", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Malaysia'
        },
        {
            emoji: "💼",
            text: "#OpenToWork"
        },
        {
            emoji: "📧",
            text: "yatt.code@gmail.com"
        }
    ],
    socials: [
        {
            link: "mailto:yatt.code@gmail.com",
            icon: 'fa fa-envelope-o',
            label: 'facebook'
        },
        
        {
            link: "https://github.com/yatt-code",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/yattt/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Yatt. I'm a developer for hired. I am proficient with MERN stack but also open to explore new stacks. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'tailwind', 'figma', 'next.js', 'nodejs', 'express'],
            exposedTo: ['PHP', 'python', 'vue', 'Docker', 'Kubernetes', 'AWS']
        }
    ,
    certifications: [
        {
            certificate: 'MongoDB Database Admin',
            issuer: 'MongoDB University'
        },
        {
            certificate: 'Agile Methodologies and Scrums',
            issuer: 'Human Resource Development Corp (HRDC)'
        },
        {
            certificate: 'Jira Fundamentals',
            issuer: 'Atlassian'
        },
        {
            certificate: 'Full Stack Development',
            issuer: 'Yayasan Pahang'
        },
        
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Hansard+",
            description: "Currently on pitching stage @ myHackathon 2024", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/yatt-code/", // this should be a link to the **repository** of the project, where the code is hosted.
            technologies: ['javascript', 'react', 'nodejs', 'express', 'mongodb'],
            image: mock1
        },
        {
            title: "Timora AI",
            description: "A Discord AI Assistant that acts as a team member in meetings",
            source: "https://github.com/yatt-code/",
            technologies: ['javascript', 'react', 'nodejs', 'express', 'openai'],
            image: mock2
        },
        {
            title: "Chattr",
            description: "A ChatGPT interface that uses OpenAI's API",
            source: "https://github.com/yatt-code/chattr",
            technologies: ['javascript', 'react', 'nodejs', 'express', 'openai'],
            image: mock3
        },
        {
            title: "Distress Response App",
            description: "CSR app that allows users to report distress calls and get help from immediate responders and local authorities",
            source: "https://github.com/yatt-code/distress-response-app",
            technologies: ['javascript', 'react', 'react-native', 'nodejs', 'express', 'mongodb'],
            image: mock4
        },
        {
            title: "Studash",
            description: "Customizable dashboard for students to manage their studies",
            source: "https://github.com/yatt-code/studash",
            technologies: ['laravel', 'php', 'nodejs', 'express', 'mongodb'],
            image: mock5
        },
        {
            title: "Recipe Finder",
            description: "This project is a practical task for Encore Med Sdn Bhd",
            source: "https://github.com/yatt-code/recipe-finder",
            technologies: ['Vue', 'Typescript', 'Tailwind'],
            image: mock6  // Now this will work correctly
        }
    ]
}
