
let NewContact = function () {
    // this.__proto__ = contact1;
    ContactSave.apply(this)

    this.showContact = function() {
        // this.initContact()
        let elementWrapper = document.querySelector('.app__wrapper'),
            list = '';
        if(!elementWrapper) return;
            list += `<div class="app__item">
                        <p>${this.resultFirstName}</p>
                        <p>${this.resultPatronymic}</p>
                        <p>${this.resultLastName}</p>
                        <p>${this.resultAge}</p>
                        <p>${this.resultNumber}</p>
                        <p>${this.resultEmail}</p>
                    </div>`
        elementWrapper.innerHTML = `${list}`
    }
}

// NewContact.prototype = contact1;

let newContact = new NewContact();
let newContact2 = new NewContact();
newContact.getNewContact()
