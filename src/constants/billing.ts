export interface BillingProps{
    id:string,
    name:string,
    message:string,
    price:number,
    oldPrice:number,
    newPrice:number
}

export const BILLING_OPTIONS: Array<BillingProps>=[
    {
        id:'b1',
        name:'Weekly',
        message: "Most popular",
        price:199,
        oldPrice:299,
        newPrice:99
    },
    {
        id:'b2',
        name:'One-time payment',
        message: "Best Value",
        price:800,
        oldPrice:299,
        newPrice:79
    }
]