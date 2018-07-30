import * as Interfaces from './interfaces';
import { sealed, logger, writable } from './decorators';

@sealed('UniversityLibrarian')
@logger
class UniversatyLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    @writable(true)
    assistFaculty() {
        console.log('Assisting faculty.');
    }

    @writable(false)
    teachCommunity() {
        console.log('Teaching community');
    }
}

abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    private _publisher: string;
    static department: string = 'New department';

    constructor(public title: string, protected year: number) {
       console.log('Creating new ReferenceItem...');
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`Department: ${ReferenceItem.department}`);
        console.log(`${this.title} was published in ${this.year}`);
    }

    abstract printCitation(): void;
}

export { UniversatyLibrarian, ReferenceItem };