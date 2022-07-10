let index = 3;
class User {
    #id
    #firstName
    #lastName
    #address
    #phone
    #email
    #height
    #weight
    #comments = "no comments"
    #BMI
    constructor(firstName, lastName, address, phone, email, height, weight, comments) {
        this.#id = index++;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#address = address;
        this.#phone = phone;
        this.#email = email;
        this.#height = height;
        this.#weight = weight;
        this.#comments = comments;
        this.#BMI = this.#height / Math.pow(this.#weight, 2);
    }

    set id(id) { this.#id = id; }
    get id() { return this.#id; }

    set firstName(firstName) { this.#firstName = firstName }
    get firstName() { return this.#firstName; }

    set lastName(lastName) { this.#lastName = lastName }
    get lastName() { return this.#lastName; }

    set address(address) { this.#address = address; }
    get address() { return this.#address; }

    set phone(phone) { this.#phone = phone; }
    get phone() { return this.#phone; }

    set email(email) { this.#email = email; }
    get email() { return this.#email; }

    set height(height) { this.#height = height; }
    get height() { return this.#height; }

    set weight(weight) { this.#weight = weight; }
    get weight() { return this.#weight; }

    set comments(comments) { this.#comments = comments; }
    get comments() { return this.#comments; }

    get BMI() { return this.#BMI; }

}