import Shelf from './shelf';
import RefBook from './encyclopedia';
import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversatyLibrarian, ReferenceItem } from './classes';
import {
    purge,
    getBooksByCategory,
    logCategorySearch,
    getBooksByCategoryPromise,
    logSearchResults,
    logFirstAbailable,
    getAllBooks,
    getBookTitlesByCategory,
    logBooksTitles,
    getBookById,
    createCustomerID,
    createCustomer,
    checkoutBooks,
    getTitles,
    printBook
    } from './lib/utility-functions';


showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// =============================
// Task 1
// logFirstAbailable(getAllBooks());

// Task 2
// const javaScriptBooksTitles = getBookTitlesByCategory(Category.JavaScript);

// logBooksTitles(javaScriptBooksTitles);

// Task 03
// javaScriptBooksTitles.forEach(title => console.log(title));
// console.log(getBookById(4));
// console.log(getBookById(5));


// Task 04
// let myID = createCustomerID('Ann', 10);
// console.log(myID);
// let idGeneretor: (a: string, b: number) => string;
// idGeneretor = createCustomerID;
// idGeneretor = (name: string, id: number) => `${name}${id}`;
// myID = idGeneretor('Ann', 25);
// console.log(myID);

// Task 5
// createCustomer('Ann');
// createCustomer('Ann', 20);
// createCustomer('Ann', 20, 'Moscow');

// console.log(getBookTitlesByCategory());
// logFirstAbailable();

// const myBooks = checkoutBooks('Ann', 1, 2, 4);
// myBooks.forEach(title => console.log(title));

// Task 6
// let titles = getTitles(false);
// console.log(titles);
// titles = getTitles('Lea Verou');
// console.log(titles);

// Task 7
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 2000,
//     markDameged: (reason: string) => console.log(`Damaged: ${reason}`)
// };

// printBook(myBook);
// myBook.markDameged('missing back cover');

// Task 8
// const logDamage: Logger = (damage: string): void => console.log(`Damage ${damage}`);
// logDamage('Stain');

// Task 9
// const favoriteAuthor: Author = {
//     name: 'Ann',
//     email: 'Ann@gmail.com',
//     numBooksPublished: 10,
// };

// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@gmail.com',
//     department: 'Classical',
//     assistCustomer: (name: string) => console.log(`Assist ${name}`),
// };

// Taks 10
// const favoriteLibrarian = new UniversatyLibrarian();

// favoriteLibrarian.name = 'Ann';
// favoriteLibrarian.assistCustomer('Boris');
// favoriteLibrarian.assistFaculty = () => console.log('!!!!!');
// favoriteLibrarian.assistFaculty();
// try {
//     favoriteLibrarian.teachCommunity = () => console.log('?????');
// }
// catch (err) {
//     console.log(err);
// }

// favoriteLibrarian.teachCommunity();

// Task 11
// const ref = new ReferenceItem('Title', 2018);
// ref.printItem();
// ref.publisher = 'Random Publisher';

// console.log(ref.publisher);

// Task 12
// const refBook: ReferenceItem = new RefBook('Our Title', 2018, 10);

// refBook.printItem();

// Task 17
// const inventory: Array<Book> = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];

// const result1 = purge(inventory);
// console.log(result1);
// const result2 = purge([1, 2, 3, 4, 5]);
// console.log(result2);

// Task 18
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// let firstBook: Book;

// inventory.forEach(book => bookShelf.add(book));
// firstBook = bookShelf.getFirst();
// console.log(firstBook);

// const magazines: Magazine[] =  [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];


// const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// let firstMag: Magazine;

// magazines.forEach(mag => magazineShelf.add(mag));
// firstMag = magazineShelf.getFirst();
// console.log(firstMag);

// // Task 19
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// Task 22
// console.log('Begin ...');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End...');


// Task 23
// console.log('Begin ...');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then((titles) => {
//         console.log(titles);
//         throw new Error('Error form then');
//         // return titles.length;
//     } )
//     .then(numOfBooks => console.log(numOfBooks))
//     .catch((err: Error) => console.log(err));
// console.log('End...');

// Task 24
console.log('Beginning search...');
logSearchResults(Category.JavaScript)
    .then(titles => console.log(titles))
    .catch(reason => console.log(reason));
console.log('Search submitted...');

