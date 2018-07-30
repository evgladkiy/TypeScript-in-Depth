import { Book, LibMgrCallback } from '../interfaces';
import { Category } from '../enums';

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.splice(2, inventory.length);
}

// Task 01
export function getAllBooks(): Book[] {
    const books: Book[] = [
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
            category: Category.JavaScript,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
            category: Category.JavaScript,
        },
        {
            id: 3,
            title: 'CSS Secrets',
            author: 'Lea Verou',
            available: true,
            category: Category.CSS,
        },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
            category: Category.JavaScript,
        }
    ];

    return books;
}

export function logFirstAbailable(books: any[] = getAllBooks()): void {
    const numberOfBooks: number = books.length;
    let firstAvailableBookTitle: string = '';

    for (const book of books) {
        if (book.available) {
            firstAvailableBookTitle = book.title;
            break;
        }
    }

    console.log(`Total Books: ${numberOfBooks}`);
    console.log(`First Available Book: ${firstAvailableBookTitle}`);
}

// Task 2
export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const allBooks = getAllBooks();
    const titles: string[] = [];

    for (const book of allBooks) {
        if (book.category === category) {
            titles.push(book.title);
        }
    }

    return titles;
}

// Task 3
export function logBooksTitles(titles: string[]): void {
    titles.forEach(value => console.log(value));
}


export function getBookById(id: number): Book {
    const allBooks = getAllBooks();

    return allBooks.find(book => book.id === id);
}


// Task 4
export function createCustomerID(name: string, id: number): string {
    return `${name}${id}`;
}

// Task 5
export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name is: ${name}`);

    if (age) {
        console.log(`Age: ${name}`);
    }

    if (city) {
        console.log(`City: ${city}`);
    }
}

export function checkoutBooks(customer: string, ...booksIds: number[]): string[] {
    console.log(`Customer name is: ${customer}`);

    const titles: string[] = [];

    for (const id of booksIds) {
        const book = getBookById(id);

        if (book && book.available) {
            titles.push(book.title);
        }
    }

    return titles;
}


// Task 6
export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(bookProperty:  string | boolean): string[] {
    const allBooks = getAllBooks();

    if (typeof bookProperty === 'string') {
        return allBooks
            .filter(book => book.author === bookProperty)
            .map(book => book.title);
    }

    else if (typeof bookProperty === 'boolean') {
        return allBooks
            .filter(book => book.available === bookProperty)
            .map(book => book.title);
    }
}

// Task 7
export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);

            if (titles.length) {
                callback(null, titles);
            } else {
                throw new Error('No boobs found');
            }
        }
        catch (err) {
            callback(err, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log(`Errom message: ${err.message}`);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<Array<string>> {
    const promise: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);

            if (titles.length) {
                resolve(titles);
            } else {
                reject('No books found');
            }

        }, 2000);
    });

    return promise;
}

export async function logSearchResults(category: Category) {
    let foundBooks: string[] = await getBooksByCategoryPromise(category);

    return foundBooks;
    // console.log(foundBooks);
}

