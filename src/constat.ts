
export const config = {
    header: {
        leftNav: [
            {
                name:'Home',
                href: '#home'
            },
            {
                name:'About',
                href: '#about'
            },
            {
                name:'Skills',
                href:'#skills'
            },
            {
                name:'Projects',
                href:'#projects'
            },
            {
                name:'Contact',
                href:'#contact'
            },
        ],
        midNav: [
            {
                name:'Projects',
                href:'#projects'

            },
            {
                name:'Skills',
                href:'#skills'
            },
            {
                name:'About',
                href:'#about'
            }
        ],
    }   ,
    banner: {
        name:'Devraj Rajput',
        description:'A Full Stack Developer, I enjoy building websites & exploring new Tech Stack.',
    },
    Projects: [
        {
            title: 'Choco',
            description: 'It is a Ecommerce website where user can buy our favorite cholates.',
            image: '/assets/Choco-web.png',
            tags:['NextJs , PostgreSql , Stripe , Drizzle-Orm , Shadcn UI , Tailwindcss'],
            code:'https://github.com/devraj27dec/choco',
            visit:'https://choco-self.vercel.app/'
        },
        {
            title: 'Oyo Clone',
            description: 'It is a Simple Oyo Clone where use Authentication & Book Oyo Rooms ',
            image: '/assets/oyoClone-web.png',
            tags:['NextJs , React , MongoDB , Tailwindcss'],
            code:'https://github.com/devraj27dec/choco',
            visit:'https://choco-self.vercel.app/'
        }
    ]
}