function createNewUser() {
    let firstName = prompt("Enter your firstName");
    let lastName = prompt("Enter your lastName");

    const newUser = Object.create(
        {
            getLogin() {
                return (this.firstName.charAt(0) + this.lastName).toLowerCase();
            },
        },
        {
            firstName: {
                value: firstName,
                writable: false,
                configurable: true,
            },
            lastName: {
                value: lastName,
                writable: false,
                configurable: true,
            },
        }
    );
    return newUser;
}

const user = createNewUser();

console.log(user.getLogin());
