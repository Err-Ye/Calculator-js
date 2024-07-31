let question = [];
let answer = 0;

let addingNum = (e) => {
    question.push(e.id);
    console.log(question);
}

let addingOperator = (e) => {
    question.push(e.id);
    console.log(question);
}

let showingPreview = (array) => {
    let preview = document.getElementById('preview');
}