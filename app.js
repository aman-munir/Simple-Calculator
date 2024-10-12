var screenDiv = document.getElementsByClassName("screen")[0];
console.log(screenDiv);
function getValue(value) {
if (screenDiv) {
   switch (value) {
         case '=':
                if (screenDiv.innerText) {
                    var result = eval(screenDiv.innerText);
                    screenDiv.innerText = result;
                    console.log(result);
                } else {
                    console.log("No expression to evaluate");
                }
                break;
                case 'C':
                    screenDiv.innerText = screenDiv.innerText.slice(0,screenDiv.innerText.length -9999999 );
                    console.log(screenDiv.innerText)
                    case 'Del':
                        screenDiv.innerText = screenDiv.innerText.slice(0,screenDiv.innerText.length - 1);
                        console.log(screenDiv.innerText);
                break;
            default:
                screenDiv.innerText += value;
                console.log(value);
              }
    } else {
        console.log("Screen element not found!");
    }
}