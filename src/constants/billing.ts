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
        price:800,
        oldPrice:109,
        newPrice:99
    },
    {
        id:'b2',
        name:'One-time payment',
        message: "Best Value",
        price:700,
        oldPrice:899,
        newPrice:79
    }
]