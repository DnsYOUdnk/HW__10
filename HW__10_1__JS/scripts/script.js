const NewConctruct = function () {
    this.initElem = function () {
        const newElement = document.createElement('div'),
              newBtn = document.createElement('button');    
        newElement.classList.add('wrapper')
        newBtn.classList.add('btn');

        this.display(newElement, newBtn)
    }

    this.display = function (div, btn) {
        const blockApp = document.querySelector('.app')
        if(!blockApp) return;
        blockApp.appendChild(div);
        div.appendChild(btn);
        btn.innerText = 'Click me';

        this.action (blockApp)
    }

    this.action = function (blockApp) {
        const switchBtn = document.querySelector('.btn')

        switchBtn.addEventListener('click', () => {
            blockApp.classList.toggle('back')
        })
    }
    
};


const NewSwitch = function () {
    NewConctruct.apply(this);

    this.action = function (blockApp) {
        const switchBtn = document.querySelector('.btn')

        switchBtn.addEventListener('click', () => {
            blockApp.classList.toggle('back')
            switchBtn.classList.toggle('form')
            if(document.querySelector('.back')) {
                switchBtn.innerText = 'OFF';
            } else {
                switchBtn.innerText = 'ON';
            }
        })
    }
}

window.addEventListener('load', () => {
    const newswitch = new NewSwitch ();
    newswitch.initElem()
})
