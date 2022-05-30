export interface ClassesProps{
    id:string,
    title:string,
    price:number,
    message:string,
    lessonCount:number,
    enrolled:number,
    tag:string,
    status:string
}

export const SWIMMING_CLASSES:Array<ClassesProps>=[
    {
        id:'c1',
        title:'Swimming class for beginners',
        price:700,
        message: 'Beginners classes are specifically designed to make learning and swimming fun!',
        lessonCount:20,
        enrolled: 18,
        tag:'train1',
        status:'starter'
    },
    {
        id:'c2',
        title:'Swimming class for intermediate swimmers',
        price:700,
        message: 'Evaluate your swimming skills and take them to another level!',
        lessonCount:12,
        enrolled: 22,
        tag:'train2',
        status:'intermediate'
    },
    {
        id:'c3',
        title:'Swimming class for professionals',
        price:700,
        message: 'Join swimming classes with professional swimmers and dominate the competition!',
        lessonCount:17,
        enrolled: 10,
        tag:'train3',
        status:'professional'
    },

]