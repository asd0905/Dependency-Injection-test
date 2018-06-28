export class PriceService {
    constructor() {  }

    calculateTotalPrice(basePrice: number, stat: string) {
        // 예: '실제' 애플리케이션에서는
        // 진짜 데이터베이스에 엑세스할 것이다.
        const tax = Math.random();

        return basePrice + tax;
    }
}