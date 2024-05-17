const term = document.querySelector('.term');
const definition = document.querySelector('.definition');
const checkButton = document.querySelector('#check');
const nextButton = document.querySelector('#next');

let diseases = {
    Diabetes: "Diabetes mellitus, often known simply as diabetes, is a group of common endocrine diseases characterized by sustained high blood sugar levels. Diabetes is due to either the pancreas not producing enough insulin, or the cells of the body becoming unresponsive to the hormone's effects.",
    Pneumonia: "Pneumonia is inflammation and fluid in your lungs caused by a bacterial, viral or fungal infection. It makes it difficult to breathe and can cause a fever and cough with yellow, green or bloody mucus.",
    Bronchitis: "Bronchitis is when the airways leading to your lungs (trachea and bronchi) get inflamed and fill with mucus. You get a nagging cough as your body tries to get rid of the mucus.",
    Hepatitis: "Hepatitis is an inflammation of the liver that is caused by a variety of infectious viruses and noninfectious agents leading to a range of health problems, some of which can be fatal.",
    Cancer: "Cancer is a large group of diseases that can start in almost any organ or tissue of the body when abnormal cells grow uncontrollably, go beyond their usual boundaries to invade adjoining parts of the body and/or spread to other organs."
}

let data = Object.entries(diseases);

function getRandomTerm() {
    let randomterm = data[Math.floor(Math.random() * data.length)];
    console.log(randomterm[1]);
    term.innerHTML = `<h3>${randomterm[0]}</h3>`;
    definition.innerHTML = `<h3>${randomterm[1]}</h3>`
}

checkButton.addEventListener('click', function () {
    definition.style.display = 'block';
});

nextButton.addEventListener('click', function () {
    getRandomTerm();
    definition.style.display = 'none';
});
