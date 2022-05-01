import { Book } from './book';

export class BookNa implements Book {
    #na = 'n/a';

    title = this.#na;
    author = this.#na;
    description: string = this.#na;
}
