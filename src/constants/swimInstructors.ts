export interface InstructorsProps{
    id:string,
    name:string,
    position:string,
    experience:number,
    tag:string,
    rating:number
}

export const SWIMMING_INSTRUCTORS:Array<InstructorsProps>=[

    {
        id:'i2',
        name:'Marc Hinton',
        position:'HEAD OF STRENGTH & CONDITIONING',
        experience:4,
        tag:'coachB',
        rating:4.8
    },
    {
        id:'i3',
        name:'Suzy Collier',
        position:'HEAD OF NATIONAL DEVELOPMENT',
        experience:6,
        tag:'coachC',
        rating:4.75
    },
    {
        id:'i5',
        name:'Adan Lee',
        position:'ASSISTANT HEAD COACH',
        experience:8,
        tag:'coachE',
        rating:4.9
    },
    {
        id:'i6',
        name:'Isabella Benitez',
        position:'LEAD COACH, NATIONAL AGE GROUP AND REGIONAL AGE GROUP 1',
        experience:5,
        tag:'coachF',
        rating:4.6
    },
    {
        id:'i7',
        name:'Monica Gordon',
        position:'HEAD OF REGIONAL AND COUNTY DEVELOPMENT SQUADS',
        experience:6,
        tag:'coachG',
        rating:5.0
    },
    {
        id:'i1',
        name:'Madalynn Dennis',
        position:'ASSISTANT HEAD COACH & NATIONAL SQUADS COACH',
        experience:7,
        tag:'coachH',
        rating:4.95
    },

]