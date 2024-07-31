let question = [];//for formula (get input)
let answer = 0;//for answer 
let fromulaDisplay = document.getElementById('formula');//for show formula

/**
 * Description : for adding number to array and show them in display
 * Created : 31.7.2024
 * Created by : Ye Htet Aung
 * Updated by :
 * parameter : e for get the input data
 */
let addingNum = (e) => {
    question.push(e.id);
    console.log(question);
    showingFormula(question);
}


/**
 * Description : for adding operator to array and show them in display
 * Created : 31.7.2024
 * Created by : Ye Htet Aung
 * Updated by :
 * parameter : e for get the input data
 */
let addingOperator = (e) => {
    question.push(e.id);
    console.log(question);
    showingFormula(question);

}

/**
 * Description : for show array in display
 * Created : 31.7.2024
 * Created by : Ye Htet Aung
 * Updated by :
 * parameter : e for array (the formula array)
 */
let showingFormula = (e) => {
    fromulaDisplay.innerText=e.join('');
}

/**
 * Description : for adding number to array and show them in display
 * Created : 31.7.2024
 * Created by : Ye Htet Aung
 * Updated by :
 * parameter : e for get the input data
 */
let showingPreview = (array) => {
    let preview = document.getElementById('preview');
}

/**
 * Description : for rest
 * Created : 31.7.2024
 * Created by : Ye Htet Aung
 * Updated by :
 * parameter : 
 */
let reset = () => {
    question = [];
    answer = 0;
    showingFormula(question);
}