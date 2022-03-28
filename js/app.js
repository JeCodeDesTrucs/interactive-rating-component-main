const checkboxList = document.querySelectorAll(".checkbox");
let lastChecked = null;
let currentValue = null;

const submitBtn = document.querySelector(".card__btn");
const cardElemnts = document.querySelectorAll(".card-element");
const cardValidationElements = document.querySelectorAll(".card-valid");
const card = document.querySelector(".card");

checkboxList.forEach((checkboxLaunch) => {
    checkboxLaunch.checked = false;
});

checkboxList.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
              
        if(lastChecked == null){
            lastChecked = checkbox;
            if(checkbox == checkboxList[0]){
                currentValue = 1;
            }else if(checkbox == checkboxList[1]){
                currentValue = 2;
            }else if(checkbox == checkboxList[2]){
                currentValue = 3;
            }else if(checkbox == checkboxList[3]){
                currentValue = 4;
            }else if(checkbox == checkboxList[4]){
                currentValue = 5;
            }
            
            return
        }else if(lastChecked != null && checkbox != lastChecked){
            lastChecked.checked = false;
            lastChecked = checkbox;
            if(checkbox == checkboxList[0]){
                currentValue = 1;
            }else if(checkbox == checkboxList[1]){
                currentValue = 2;
            }else if(checkbox == checkboxList[2]){
                currentValue = 3;
            }else if(checkbox == checkboxList[3]){
                currentValue = 4;
            }else if(checkbox == checkboxList[4]){
                currentValue = 5;
            }
            return
        }
        
    });
    
})

submitBtn.addEventListener("click", () => {
    
    cardValidationElements.forEach((element) => {
        element.style["display"] = "flex";
        if(element.tagName == "P"){
            element.innerHTML = `You selected ${currentValue} out of 5`;
        }
    });
    cardElemnts.forEach((elements) => {
        elements.style["display"] = "none";
    });
    card.style["align-items"] = "center";
    card.style["justify-content"] = "center";
});