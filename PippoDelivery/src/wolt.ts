export interface DeliveryOrderT {
    pickup: DeliveryDetailsData 
    dropoff: DeliveryDetailsData 
    customer_support: CustomerSupportT
    merchant_order_reference_id: string
    is_no_contact: boolean
    contents: OrderContentT
    tips: TipsT
    min_preparation_time_minutes: number
    scheduled_dropoff_time: Date
}

interface DeliveryDetailsData {
    location: LocationT,
    comment: string,
    contact_details: ContactDetailsT
}

interface LocationT {
    formatted_address?: string,
    coordinates?: {
        lat: number,
        lon: number
    }
}

interface ContactDetailsT {
    name: string,
    phone_number: string,
    send_tracking_link_sms: boolean,
}

interface CustomerSupportT {
    email: string,
    phone_number: string,
    url: string,
}

interface OrderContentT {
    count: number,
    description: string,
    identifier: string,
    tags: TagsT[],
}

interface TagsT {
    test: number,
    test2: string,
}

interface TipsT {
    type: string,
    price: PriceT,
}

interface PriceT {
    amount: number,
    currency: string,
}