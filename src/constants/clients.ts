export interface ClientsProps{
    id:string,
    client:string,
    level:string,
    country:string,
    message:string
}

export const CLIENTS: Array<ClientsProps> =[
    {
        id:'c1',
        client:"Jules",
        level: "Beginner",
        country:"Vilnius, LT",
        message:"I’m a first time mother and this program has helped me so much. I was constantly stressed that I didn’t know anything about baby growth topic or how to support my baby’s development. Play2Grow provides many helpful resources, easy activities and suggestions."
    },
    {
        id:'c2',
        client:"Rūta",
        level: "Proffesional",
        country:"Kaunas, LT",
        message:"Sometimes it might be hard to come up with new activities and games to play with your baby who is growing up so fast! We love Play2Grow because it helps me to know how to engage my baby’s skills in a fun way for us all. Milestone tracking feature is very helpful and fun as well! "
    },
    {
        id:'c3',
        client:"Michael",
        level: "Advanced",
        country:"Klaipeda, LT",
        message:"This program really helps ease worries about the development of our child. It gives insights why some things are important in particular child’s age. Moreover, you feel prepared as it helps to look ahead and be aware what developmental stages are emerging."
    }
]