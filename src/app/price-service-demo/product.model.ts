// import { PriceService } from './price.service'; // <-- 제거
import { IPriceService } from './price-service.Interface';

export class Product {
    service: IPriceService;
    basePrice: number;

    constructor(service: IPriceService, basePrice: number) {
        // this.service = new IPriceService(); // <-- 직접 생성('하드 코딩')
        this.service = service; // <-- 인수로 전달됨
        this.basePrice = basePrice;
    }

    totalPrice(state: string) {
        return this.service.calculateTotalPrice(this.basePrice, state);
    }
}