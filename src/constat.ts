
export const config = {
    header: {
        leftNav: [
            {
                name:'Home',
            },
            {
                name:'About'
            },
            {
                name:'Skills'
            },
            {
                name:'Projects'
            },
            {
                name:'Contact'
            },
        ],
        midNav: [
            {
                name:'Project'
            },
            {
                name:'Skills'
            },
            {
                name:'About'
            }
        ],
        rightNav: [
            
        ]
    }   ,
    banner: {
        name:'Devraj',
        description:'',
    },
    About: {
        description:''
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