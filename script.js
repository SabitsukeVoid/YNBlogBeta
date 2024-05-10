//Global Variables


//HairVariables
let imgHair = document.getElementById('imgHead');
console.log(imgHair);


let leftButtonHair = document.getElementById('leftButtonHair');
let rightButtonHair = document.getElementById('rightButtonHair');

leftButtonHair.disabled = true

let stringSrcImageHair = ['./assets/sprites/MadoHead.png', './assets/sprites/SabiHead.png', './assets/sprites/UroHead.png']

let positionInArrayHair = 0

leftButtonHair.addEventListener("click", changeEvent);
leftButtonHair.direction = 0
leftButtonHair.section = 'hair'
rightButtonHair.addEventListener("click", changeEvent);
rightButtonHair.section = 'hair'
rightButtonHair.direction = 1

//Torso Variables
let imgTorso = document.getElementById('imgTorso');
console.log(imgTorso);


let leftButtonTorso = document.getElementById('leftButtonTorso');
let rightButtonTorso = document.getElementById('rightButtonTorso');

leftButtonTorso.disabled = true

let stringSrcImageTorso = ['./assets/sprites/MadoTorso.png', './assets/sprites/SabiTorso.png', './assets/sprites/UroTorso.png']

let positionInArrayTorso = 0

leftButtonTorso.addEventListener("click", changeEvent);
leftButtonTorso.direction = 0
leftButtonTorso.section = 'torso'
rightButtonTorso.addEventListener("click", changeEvent);
rightButtonTorso.direction = 1
rightButtonTorso.section = 'torso'

//Skirt Variables

let imgSkirt = document.getElementById('imgSkirt');
console.log(imgSkirt);


let leftButtonSkirt = document.getElementById('leftButtonSkirt');
let rightButtonSkirt = document.getElementById('rightButtonSkirt');

leftButtonSkirt.disabled = true

let stringSrcImageSkirt = ['./assets/sprites/MadoSkirt.png', './assets/sprites/SabiSkirt.png', './assets/sprites/UroSkirt.png']

let positionInArraySkirt = 0

leftButtonSkirt.addEventListener("click", changeEvent);
leftButtonSkirt.direction = 0
leftButtonSkirt.section = 'skirt'
rightButtonSkirt.addEventListener("click", changeEvent);
rightButtonSkirt.direction = 1
rightButtonSkirt.section = 'skirt'

//Functions

function changeEvent(evt) {

    switch (evt.currentTarget.section) {
        case 'hair':
            if (evt.currentTarget.direction) {
                positionInArrayHair += 1;
                changeImage(evt.currentTarget.section);
            } else {
                positionInArrayHair -= 1;
                changeImage(evt.currentTarget.section);

            }
            break;
        case 'torso':
            if (evt.currentTarget.direction) {
                positionInArrayTorso += 1;
                changeImage(evt.currentTarget.section);
            } else {
                positionInArrayTorso -= 1;
                changeImage(evt.currentTarget.section);

            }
            break;
        case 'skirt':
            if (evt.currentTarget.direction) {
                positionInArraySkirt += 1;
                changeImage(evt.currentTarget.section);
            } else {
                positionInArraySkirt -= 1;
                changeImage(evt.currentTarget.section);

            }
            break;
    }


}

function transitionImage(ms, type) {
    switch (type) {
        case 'hair':
            imgHair.className = "imgHead changedImage"
            leftButtonHair.disabled = true
            rightButtonHair.disabled = true
            return new Promise(resolve => setTimeout(resolve, ms))
        case 'torso':
            imgTorso.className = "imgTorso changedImage"
            leftButtonTorso.disabled = true
            rightButtonTorso.disabled = true
            return new Promise(resolve => setTimeout(resolve, ms))
        case 'skirt':
            imgSkirt.className = "imgSkirt changedImage"
            leftButtonSkirt.disabled = true
            rightButtonSkirt.disabled = true
            return new Promise(resolve => setTimeout(resolve, ms))
    }


}

async function changeImage(type) {
    switch (type) {
        case 'hair':
            imgHair.src = stringSrcImageHair[positionInArrayHair];
            await transitionImage(200, type)
            checkButtons(positionInArrayHair, type)
            imgHair.className = "imgHead"
            break;
        case 'torso':
            imgTorso.src = stringSrcImageTorso[positionInArrayTorso];
            await transitionImage(200, type)
            checkButtons(positionInArrayTorso, type)
            imgTorso.className = "imgTorso"
            break;
        case 'skirt':
            imgSkirt.src = stringSrcImageSkirt[positionInArraySkirt];
            await transitionImage(200, type)
            checkButtons(positionInArraySkirt, type)
            imgSkirt.className = "imgSkirt"
            break;

    }

}

function checkButtons(pos, type) {
    switch (type) {
        case 'hair':
            leftButtonHair.disabled = false
            rightButtonHair.disabled = false
            if (pos == 0) {
                leftButtonHair.disabled = true
            }
            if (pos == 2) {
                rightButtonHair.disabled = true
            }
            break;
        case 'torso':
            leftButtonTorso.disabled = false
            rightButtonTorso.disabled = false
            if (pos == 0) {
                leftButtonTorso.disabled = true
            }
            if (pos == 2) {
                rightButtonTorso.disabled = true
            }
            break;
        case 'skirt':
            leftButtonSkirt.disabled = false
            rightButtonSkirt.disabled = false
            if (pos == 0) {
                leftButtonSkirt.disabled = true
            }
            if (pos == 2) {
                rightButtonSkirt.disabled = true
            }
            break;
    }



}



//Global Variables Save/Discard button

let discard = document.getElementById('discardBtn');
let save = document.getElementById('saveBtn');

let selectedHair = document.getElementById('selectedHair');
let selectedTorso = document.getElementById('selectedTorso');
let selectedSkirt = document.getElementById('selectedSkirt');




discard.addEventListener("click", previewState);
discard.actionType = 0;
save.addEventListener("click", previewState);
save.actionType = 1;



function previewState(evt){
    if(evt.currentTarget.actionType){
        selectedHair.src = stringSrcImageHair[positionInArrayHair];
        selectedTorso.src = stringSrcImageTorso[positionInArrayTorso];
        selectedSkirt.src = stringSrcImageSkirt[positionInArraySkirt];

    }else{
        selectedHair.src = stringSrcImageHair[0];
        selectedTorso.src = stringSrcImageTorso[0];
        selectedSkirt.src = stringSrcImageSkirt[0];
    }
}