import { ReferenceItem } from './classes';

// Task 12-13
class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }
    printItem() {
        super.printItem();
        console.log(`Edidtion: ${this.edition} ${this.year}`);
    }
    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

export default Encyclopedia;