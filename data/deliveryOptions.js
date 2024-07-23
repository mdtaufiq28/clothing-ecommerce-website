export const deliveryOptions=[
    {
        deliveryId: 1,
        days: 8,
        price: 0
    },
    {
        deliveryId: 2,
        days: 5,
        price: 65
    },
    {
        deliveryId: 3,
        days: 3,
        price: 125
    }
]

export function getDeliveryOption(deliveryId){
    let matchingDeliveryOption;
    deliveryOptions.forEach((deliveryOption)=>{
        if(deliveryOption.deliveryId===Number(deliveryId)){
            matchingDeliveryOption=deliveryOption;
        }
    });
    return matchingDeliveryOption;
    console.log(matchingDeliveryOption);
}