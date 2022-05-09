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
        price:800,
        message: 'Contrary to polular belied, lorem ipsum is not simply random desktop',
        lessonCount:20,
        enrolled: 18,
        tag:'train1',
        status:'starter'
    },
    {
        id:'c1',
        title:'Swimming class for intermediate swimmers',
        price:600,
        message: 'Contrary to polular belied, lorem ipsum is not simply random desktop',
        lessonCount:12,
        enrolled: 22,
        tag:'train2',
        status:'intermediate'
    },
    {
        id:'c1',
        title:'Swimming class for professionals',
        price:600,
        message: 'Contrary to polular belied, lorem ipsum is not simply random desktop',
        lessonCount:17,
        enrolled: 10,
        tag:'train3',
        status:'professional'
    },

]