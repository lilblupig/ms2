// Placeholder Grade/SCP arrays/objects
const rOneGrades = ["A", "B", "C", "D"];
const rTwoGrades = ["1", "2", "3", "4", "5", "6"];

const rOneSCPs = {
    "A": [1, 2, 3],
    "B": [2, 3],
    "C": [3, 4],
    "D": [4, 5]
};

const rTwoSCPs = {
    "1": [1, 2],
    "2": [2, 3],
    "3": [3, 4],
    "4": [4, 5],
    "5": [5, 6, 7],
    "6": [7, 8, 9]
};

// Get all elements with the class 'c-btn'
const buttons = document.querySelectorAll(".c-btn");

// Store the currently selected options
let chosenRegion;
let chosenGrade;
let chosenSCP;

// Generates Grade buttons
function addGradeBtns() {
    let clearBtns = document.getElementById("grade-bucket");
    clearBtns.innerHTML = "";

    let regionGrades; // Determines region and gets all associated grades as array
    if (chosenRegion == "rOne") {
        regionGrades = rOneGrades; 
        console.log(regionGrades);
    } else if (chosenRegion == "rTwo") {
        regionGrades = rTwoGrades;
        console.log(regionGrades);
    } else {
        console.log("Unknown Region");
        alert("An unknown Region variable has been passed to the calculator.")
    };

    for (let i = 0; i < regionGrades.length; i++) {
        let newBtn = document.createElement("button");
        newBtn.innerHTML = regionGrades[i];
        newBtn.classList.add("btn", "disc-btn", "grade-btn");
    
        let gradeBucket = document.getElementById("grade-bucket");
        gradeBucket.appendChild(newBtn);
    };
};

// Generates SCP buttons
function addROneSCPBtns() {
    let clearBtns = document.getElementById("scp-bucket"); // Clears any existing data from bucket
    clearBtns.innerHTML = "";

    console.log("get chosen region:", chosenRegion); // Logs chosen region
    console.log("Get chosen grade:", chosenGrade); // Logs chosen grade
    
    let gradeSCPs; // Determines region and gets all SCPs associated with chosen grade as array
    if (chosenRegion == "rOne") {
        gradeSCPs = rOneSCPs[chosenGrade]; 
        console.log(gradeSCPs);
    } else if (chosenRegion == "rTwo") {
        gradeSCPs = rTwoSCPs[chosenGrade];
        console.log(gradeSCPs);
    } else {
        console.log("Unknown Region");
        alert("An unknown Region variable has been passed to the calculator.")
    };

    for (let i = 0; i < gradeSCPs.length; i++) { // Generates SCP buttons
        let newBtn = document.createElement("button");
        newBtn.innerHTML = gradeSCPs[i];
        newBtn.classList.add("btn", "disc-btn", "scp-btn");
    
        let gradeBucket = document.getElementById("scp-bucket");
        gradeBucket.appendChild(newBtn);
    };

};

// Listen for all hard-coded calculator button clicks
buttons.forEach(function(button){
    button.addEventListener("click", function(event) {
        let classes = event.currentTarget.classList;
        if(classes.contains("region-btn")) {
            if (this.id == "region-btn-1") {
                chosenRegion = "rOne";
                let clearBtns = document.getElementById("scp-bucket");
                clearBtns.innerHTML = "";

            } else if (this.id == "region-btn-2") {
                chosenRegion = "rTwo";
                let clearBtns = document.getElementById("scp-bucket");
                clearBtns.innerHTML = "";
            } else {
                console.log("Unknown Region requested")
                alert("An unknown Region variable has been passed to the calculator.")
            };
            addGradeBtns();
            console.log("Calculating FTE for", this.innerHTML);
        } else if (classes.contains("weeks-btn")) {
            console.log("Working weeks", this.innerHTML);
        } else if (classes.contains("service-btn")) {
            console.log("Service length", this.innerHTML);
        } else {
            console.log("Unknown button type");
            alert("A button of unknown type has been activated")
        };

        $(this).siblings().removeClass('selected-btn');
        $(this).addClass('selected-btn');
    })
});

// Listen for generated Grade button clicks
$('#grade-bucket').on('click', 'button', function (){
    console.log("Grade", this.innerHTML); // Log chosen grade to console

    chosenGrade = this.innerHTML; // Update global variable with chosen grade

    addROneSCPBtns(); // Generate the relevant SCP buttons

    $(this).siblings().removeClass('selected-btn'); // Clear any previous selection
    $(this).addClass('selected-btn'); // Highlight selected item
});

// Listen for generated SCP button clicks
$('#scp-bucket').on('click', 'button', function(){
    $(this).siblings().removeClass('selected-btn');
    $(this).addClass('selected-btn');
    console.log("SCP", this.innerHTML);
});
