#!/usr/bin/env node
const chalk = require('chalk')

const talks = [
    {
        title: "Beyond the Devops Handbook – What about devsecops?",
        speakers: [
            "Patrick Debois",
            "John Willis",
            "Gene Kim",
            "Sasha Rosenbaum"
        ],
        link: "https://snyk.io/learn/snykcon-beyond-the-devops-handbook-what-about-devsecops/"
    },
    {
        title: "Storytime by Tanya Janca – Secure Coding Libraries",
        speakers: [
            "Tanya Janca, Founder; Security Trainer and Coach, SheHack Purple"
        ],
        link: "https://snyk.io/learn/snykcon-storytime-secure-coding-libraries/"
    },
    {
        title: "Blow up your Security: We are all Engineers",
        speakers: [
            "DJ Schleen, DevSecOps Evangelist and Security Architect, Rally Health"
        ],
        link: "https://snyk.io/learn/snykcon-blow-up-your-security-we-are-all-engineers/"
    },
    {
        title: "SnykCon Happy Hour: Live Coding Music with Sonic Pi",
        speakers: [
            "Sam Aaron"
        ],
        link: "https://snyk.io/learn/snykcon-multi-threaded-drum-bass-live-coding-music-with-sonic-pi/"
    },
    {
        title: "Are You a Security Sherpa, or a Security Bully?",
        speakers: [
            "Dan Tyrrell, Manager of Information Security, AcadiaSoft"
        ],
        link: "https://snyk.io/learn/snykcon-are-you-a-security-sherpa-or-a-security-bully/"
    },
    {
        title: "Why are there no incentives for security in Open Source?",
        speakers: [
            "Matteo Collina, Technical Director, Nearform"
        ],
        link: "https://snyk.io/learn/snykcon-why-are-there-no-incentives-for-security-in-open-source/"
    },
    {
        title: "User Story Threat Modeling: It’s the DevSecOps Way",
        speakers: [
            "Alyssa Miller, Application Security Advocate, Snyk"
        ],
        link: "https://snyk.io/learn/snykcon-user-story-threat-modeling-its-the-devsecops-way/"
    },
    {
        title: "The Impact of DevSecOps Quantified",
        speakers: [
            "Larry Maccherone, DevSecOps Transformation, Comcast"
        ],
        link: "https://snyk.io/learn/snykcon-the-impact-of-devsecops-quantified/"
    },
    {
        title: "Securing Kubernetes in a ever changing ecosystem",
        speakers: [
            "John Forman, NA Container Lead, Anthos/Kubernetes Capability Lead, Accenture"
        ],
        link: "https://snyk.io/learn/snykcon-securing-kubernetes-in-a-ever-changing-ecosystem/"
    },
    {
        title: "Secure by Design – coding patterns",
        speakers: [
            "Dan Bergh Johnsson, Omega Point"
        ],
        link: "https://snyk.io/learn/snykcon-secure-by-design-coding-patterns/"
    },
    {
        title: "Product Security Automation at Asurion",
        speakers: [
            "Jeremy Young, Principal Security Engineer, Asurion"
        ],
        link: "https://snyk.io/learn/snykcon-product-security-automation-at-asurion/"
    },
    {
        title: "Lighting the Flare: container scanning at scale",
        speakers: [
            "Alfonso Cabrera, Director of Platform Engineering, Red Ventures",
            "Matt Stegall, Senior Engineer, Red Ventures"
        ],
        link: "https://snyk.io/learn/snykcon-lighting-the-flare-container-scanning-at-scale/"
    },
    {
        title: "How did the Department of Defense move to Kubernetes and Istio?",
        speakers: [
            "Nicolas Chaillan, Chief Software Officer, US Airforce"
        ],
        link: "How did the Department of Defense move to Kubernetes and Istio?"
    },
    {
        title: "Hackers don’t wear hoodies, they wear capes",
        speakers: [
            "Chloé Messdaghi, VP of Strategy, Point3 Security"
        ],
        link: "https://snyk.io/learn/snykcon-hackers-dont-wear-hoodies-they-wear-capes/"
    },
    {
        title: "Enable Visibility for SecOps While Reducing Build and Runtime Application Security Risks",
        speakers: [
            "Amanda Veras, Solutions Architect, Trend Micro"
        ],
        link: "https://snyk.io/learn/snykcon-enable-visibility-for-secops-while-reducing-build-and-runtime-application-security-risks/"
    },
    {
        title: "Do you accept the risk? Dynamic risk metrics in your environment.",
        speakers: [
            "Daniel Maher, Developer Relations, Datadog",
            "Andrew Krug, Technical Evangelist Security, Datadog"
        ],
        link: "https://snyk.io/learn/snykcon-do-you-accept-the-risk-dynamic-risk-metrics-in-your-environment/"
    },
    {
        title: "Disclosing security vulnerabilities: If You’re Good at Something – Never Do it for Free",
        speakers: [
            "Anna Manley, Principal Lawyer, Manley Law Inc."
        ],
        link: "https://snyk.io/learn/snykcon-disclosing-security-vulnerabilities-if-youre-good-at-something-never-do-it-for-free/"
    },
    {
        title: "DevSecOps for Platform Teams: A Discussion on Making It Easy to Do the Right Thing",
        speakers: [
            "Daniel Bryant, Product Architect, Ambassador Labs",
            "Mario Plat, VP Head of Information Security, CloudMargin",
            "Katie Gamanji, Cloud Platform Engineer, American Express",
            "Katie Gamanji, Cloud Platform Engineer, American Express",
            "Melissa Benua, Director of Engineering, mParticle"
        ],
        link: "https://snyk.io/learn/snykcon-devsecops-for-platform-teams-a-discussion-on-making-it-easy-to-do-the-right-thing/"
    },
    {
        title: "DevSecOps – Views from the coal face",
        speakers: [
            "James Governor, Co-Founder, RedMonk",
            "Maya Kaczorowski, Product Manager, GitHub",
            "Andrew Martin, Container Security Engineering, Controlplane",
            "Ant Stanley, Co-Founder, Homeschool from Senzo"            
        ],
        link: "https://snyk.io/learn/snykcon-devsecops-views-from-the-coal-face/"
    },
    {
        title: "Deployment speed and security can live together",
        speakers: [
            "Alexandre Emery, Cloud Platform Product manager, Coveo",
            "Jean-Alexandre Beaumont, Security Engineer, Coveo"
        ],
        link: "https://snyk.io/learn/snykcon-deployment-speed-and-security-can-live-together/"
    },
    {
        title: "How to Implement a DevSecOps Culture in a Large Enterprise – People, Processes, Tools",
        speakers: [
            "Nicholas Vinson, DevSecOps Lead, Pearson Vue",
            "Owen John, Platform Security Lead, Pearson Vue",
            "Paul Graziano, DevSecOps Engineer, Pearson Vue"
        ],
        link: "https://snyk.io/learn/snykcon-how-to-implement-a-devsecops-culture-in-a-large-enterprise-people-processes-tools/"
    },
    {
        title: "Navigating DevOps Security journey at Scale using OWASP SAMM 2.0",
        speakers: [
            "Hardik Parekh, Senior Director, Head of Product & Application Security, Owasp Samm"
        ],
        link: "https://snyk.io/learn/snykcon-navigating-devops-security-journey-at-scale-using-owasp-samm-2-0/"
    },
    {
        title: "From Control to Collaboration: Democratizing Security",
        speakers: [
            "Wendy Nather, Head of Advisory CISOs, Duo Security, Cisco"
        ],
        link: "https://snyk.io/learn/snykcon-from-control-to-collaboration-democratizing-security/"
    },
    {
        title: "Security Culture: Why You Need One and How to Create It",
        speakers: [
            "Masha Sedova, Co-Founder, Elevate Security"
        ],
        link: "https://snyk.io/learn/snykcon-security-culture-why-you-need-one-and-how-to-create-it/"
    },
    {
        title: "Host Like Your Planet Depended On It",
        speakers: [
            "Anne Curie, Tech Ethics, Container Solutions"
        ],
        link: "https://snyk.io/learn/snykcon-host-like-your-planet-depended-on-it/"
    },
    {
        title: "Exit Stage Left: Eradicating Security Theater",
        speakers: [
            "Kelly Shortridge, VP of Product Management & Product Strategy, Capsule 8"
        ],
        link: "https://snyk.io/learn/snykcon-exit-stage-left-eradicating-security-theater/"
    },
    {
        title: "Connections and Intersections between Resilience Engineering and Security",
        speakers: [
            "John Allspaw, Founder and Principal, Adaptive Capacity Labs"
        ],
        link: "https://snyk.io/learn/snykcon-connections-and-intersections-between-resilience-engineering-and-security/"
    },
    {
        title: "Securing Open Source pipeline using Plug-n-Play Scanning",
        speakers: [
            "Amol Deshpande, Product Security Engineer, Sales Force"
        ],
        link: "https://snyk.io/learn/snykcon-securing-open-source-pipeline-using-plug-n-play-scanning/"
    },
    {
        title: "Securing Front-end Attack Surfaces",
        speakers: [
            "Eric Graham, Sr. Product Line Director – Cloud Security Solutions, Snyk",
            "Liran Tal, Developer Advocate, Snyk"
        ],
        link: "https://snyk.io/learn/snykcon-securing-front-end-attack-surfaces/"
    },
    {
        title: "Why can’t we simply add a button that does X?",
        speakers: [
            "Lightning Talk | Brian Vermeer, Snyk"
        ],
        link: "https://snyk.io/learn/snykcon-why-cant-we-simply-add-a-button-that-does-x/"
    },
    {
        title: "Whoops! I Committed It Again: Configuring Git to Prevent Accidental Commits",
        speakers: [
            "Miguel A. Calles, Principal Solutions and Security Engineer, VeriToll, LLC",
            "Greg Thompson, Full Stack Software Engineer, Veritoll"
            
        ],
        link: "https://snyk.io/learn/snykcon-whoops-i-committed-it-again-configuring-git-to-prevent-accidental-commits/"
    },
    {
        title: "Utilizing Dojos to Instill a Culture of DevSecOps",
        speakers: [
            "Eric Chapman, DevOps Principal, Liatrio"
        ],
        link: "https://snyk.io/learn/snykcon-utilizing-dojos-to-instill-a-culture-of-devsecops/"
    },
    {
        title: "Sour Mint – The case of malicious advertisement SDK affecting thousands of mobile apps",
        speakers: [
            "Danny Grander, CSO and Co-founder, Snyk"
        ],
        link: "https://snyk.io/learn/snykcon-sour-mint-the-case-of-malicious-advertisement-sdk-affecting-thousands-of-mobile-apps/"
    },

]

console.log()
talks.forEach(talkInfo => {
    console.log("   Title    :", chalk.magenta(talkInfo.title))
    // console.log("\tSpeakers :", chalk.yellow(talkInfo.speakers.join(", ")))
    console.log("   Watch now:", chalk.blue(talkInfo.link))
    // console.log("\tSpeakers :")
    talkInfo.speakers.forEach(speakerInfo => {
        console.log("             ", chalk.yellow(speakerInfo))
    })
    
    console.log()
})
console.log()
console.log(`  ${talks.length}+ talks`)
console.log("  SnykCon 2020: https://snyk.io/snykcon 💜")
