import { Category } from './enums';

interface DamageLogger {
    (reason: string): void;
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markDameged?: (reason: string) => void;
    markDameged?: DamageLogger;
}

interface Magazine {
    title: string;
    publisher: string;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

interface ShelfItem {
    title: string;
}

interface LibMgrCallback {
    (err: Error, titles: string[]): void;
}

export { Book, DamageLogger as Logger, Author, Librarian, Magazine, ShelfItem, LibMgrCallback };