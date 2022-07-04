class Diary {
    #date
    #breakfast
    #lunch
    #dinner
    constructor(date, breakfast, lunch, dinner) {
        this.#date = date;
        this.#breakfast = breakfast;
        this.#lunch = lunch;
        this.#dinner = dinner;
    }
    set date(date) { this.#date = date; }
    get date() { return this.#date; }
    set breakfast(breakfast) { this.#breakfast = breakfast; }
    get breakfast() { return this.#breakfast; }
    set lunch(lunch) { this.#lunch = lunch; }
    get lunch() { return this.#lunch; }
    set dinner(dinner) { this.#dinner = dinner; }
    get dinner() { return this.#dinner; }
}
