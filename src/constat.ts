
export type NavItem = {
    name: string;
    href: string;
};

export type HeaderConfig = {
    leftNav: NavItem[];
    rightNav: NavItem[];
};

export type BannerConfig = {
    name: string;
    description: string;
};

export type ConfigType = {
    header: HeaderConfig;
    banner: BannerConfig;
};

export const config: ConfigType = {
    header: {
        leftNav: [
            {
                name: 'Home',
                href: '#home'
            },
            {
                name: 'About',
                href: '#about'
            },
            {
                name: 'Skills',
                href: '#skills'
            },
            {
                name: 'Projects',
                href: '#projects'
            },
            {
                name: 'Contact',
                href: '#contact'
            },
        ],
        rightNav: [
            {
                name: 'Projects',
                href: '#projects'
            },
            {
                name: 'Skills',
                href: '#skills'
            },
            {
                name: 'About',
                href: '#about'
            }
        ],
    },
    banner: {
        name: 'Devraj Rajput',
        description: 'A Full Stack Developer, I enjoy building websites & exploring new Tech Stack.',
    }
};


export type tags = {
    name: string
}

export type ProjectDataType = {
    name:string;
    desc:string;
    github:string;
    tags: string[],
    image:string;
    visit:string
}

export type ProjectObjectType = {
    [index:string]: ProjectDataType
}

export const PersonalProjects: ProjectObjectType = {
    myProtfolio:{
        name: 'My Protfolio',
        desc: 'It is my Personal Personal Protfolio to showcase my Skills in full Stack. ',
        image: '/assets/myprotfolio.png',
        tags: ["NextJs" , "Typescript", "TailwindCss", "Framer Motion"],
        github:'https://github.com/devraj27dec/myProtfolio',
        visit:'https://my-protfolio-livid.vercel.app/'
    },
    Choco:{
        name: 'Choco',
        desc: 'It is a Ecommerce website where user can buy our favorite cholcates.',
        image: '/assets/Choco-web.png',
        tags:["NextJs","Typescript", "Tailwind Css" , "Postgresql" ,"Prisma","Stripe"],
        github:'https://github.com/devraj27dec/choco',
        visit:'https://choco-self.vercel.app/'
    },
    muzzer:{
        name: 'Muzzer',
        desc: 'Muzzer is an interactive streaming app that lets audiences choose music during streams, enhancing viewer engagement and personalization. It allows creators to give their fans direct control over the soundtrack, creating a unique live experience.',
        image: '/assets/muzzer.png',
        tags: ["NextJs" , "TailwindCss", "Typescript", "Rest Apis" ],
        github:'https://github.com/devraj27dec/muzzer_yt',
        visit:'https://choco-self.vercel.app/'
    },
    Devrajgallery:{
        name: 'Devraj Gallery',
        desc: 'The gallery app enables users to upload, view, and organize photos in a personalized, visually engaging interface. It offers easy sharing options, customizable albums, and smooth navigation for a seamless browsing experience.  ',
        image: '/assets/gallery_app.png',
        tags: ["NextJs" , "TailwindCss", "uploadcare Api" ],
        github:'https://github.com/devraj27dec/devraj_gallery',
        visit:'https://choco-self.vercel.app/'
    }
}
