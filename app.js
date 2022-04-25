

//Want to randomly choose a person for each chore needing to be done. Each week a person must have a new chore and cant be a repeat of 
//a chore they have already done before everyone has done each chore at least once.. Then cycle repeats

//Get Household username

//Get the text from the submitting button

function returnText(TextID){
    let text = document.getElementById(TextID).value
    // alert("Text Submitted: "+text)
    return text
}

//Adding User inputs to the table

function addSlaves(){
    //Get a reference to the table
    let tableRef = document.getElementById("Slave_table")

    //Insert row at the end of the table
    let newRow = tableRef.insertRow(-1)

    //Insert a cell in the row at index 0 

    let newCell_0 = newRow.insertCell(0)
    // let newCell_1 = newRow.insertCell(1)

    //Append a text node to the cell
    
    let newText = document.createTextNode(returnText("worker_class"))
    newCell_0.appendChild(newText)
    // alert("New row added with: "+returnText("worker_class"))
}

function addChores(){
    //Get a reference to the table
    let tableRef = document.getElementById("Chore_table")

    //Insert row at the end of the table
    let newRow = tableRef.insertRow(-1)

    //Insert a cell in the row at index 0 

    let newCell_0 = newRow.insertCell(0)
    // let newCell_1 = newRow.insertCell(1)

    //Append a text node to the cell
    
    let newText = document.createTextNode(returnText("Chore_class"))
    newCell_0.appendChild(newText)
}




//Add event listener to table

const el = document.getElementById('submit_slave');
el.addEventListener('click',addSlaves,false);

const el_1 = document.getElementById('submit_chore');
el_1.addEventListener('click',addChores,false);




// Clearing the input field
const inputField = document.getElementById("worker_class")
el.addEventListener('click',()=>{
    //clearing input field
    inputField.value = " "
})
const inputField_1 = document.getElementById("Chore_class")
el_1.addEventListener('click',()=>{
    //clearing input field
    inputField_1.value = " "
})




//Loop through the table and get the text from it and store it in an array

var slaves = []
var chores = []
var roster_slaves = []
var roster_chores = []


function slaveArray(){
for (i=0; i < slave_table.length; i++){
    slave_name = slave_table[i].firstChild.nodeValue
    slaves.push(slave_name)
}
}

function choreArray(){
for (i=0; i < chore_table.length; i++){
    chore_name = chore_table[i].firstChild.nodeValue
    chores.push(chore_name)

}
}

//Get the results from the tables

function slaveTable(){
slave_table = document.querySelectorAll("#Slave_table td")
}

function choreTable(){
chore_table = document.querySelectorAll("#Chore_table td")
}
el.addEventListener('click',slaveTable,false)
el_1.addEventListener('click',choreTable,false)

const gen = document.getElementById('Generate');
gen.addEventListener('click',slaveArray,false)
gen.addEventListener('click',choreArray,false)





//Clearing Table and re-calculating roster
document.getElementById('Generate').onclick = function() {
    if (click >= 1){
        var tbodyRowCount = slave_roster_table.tBodies[0].rows.length
        $("#slave_roster_table td").remove(); 
        $("#chore_roster_table td").remove();

        for (j = 1; j < tbodyRowCount; j += 1){
        chore_roster_table.rows[j].remove()
        slave_roster_table.rows[j].remove()
        }
    }

    // click = 0
    // alert("click areoo: "+click)
    slave_length = original_slave_length
    sortingAlgo()

}

//Class choosing each slave to a random corresponding chore

gen.addEventListener('click',sortingAlgo,false)



var i = 0
var yes = 0
var slave_length
var click = 0
var slaves_original = slaves

function sortingAlgo(){

click += 1
// alert("click: "+click)





var original_slave_length = slaves.length
// alert("Slave length" +original_slave_length)
//Getting number of slaves
var slave_length = slaves.length


//Getting number of chores
var chores_length = chores.length

//Need to choose a random slave and point that to a random chore and store that in an array

while (slave_length > 0){

    i += 1
    // alert("Slave length" +original_slave_length)
    // alert("i: "+i)


    //Assign the slave to a random chore
    let random_number_chore = Math.floor(Math.random()*chores_length)
    // alert("Random number chore: "+random_number_chore)
    let random_chore = chores[random_number_chore]
    chores.splice(random_number_chore,1)

    // alert("Chore chosen: "+random_chore)
    roster_chores.push(random_chore)



    function BotRandomizer(slave_array,chore_array){

        // if (random_chore.normalize() === 'Toilet - Bot' || random_chore === 'Vaccum - Bot'){
        //     let random_number_slave = Math.floor(Math.random()*bot_slave_length)
        //     alert("random number of bot: "+random_number_slave)
        //     let random_slave = bot_slaves[random_number_slave]
        //     //Remove slave from both arrays
        //     bot_slaves.splice(random_number_slave,1)
        //     //Find position of slave in original slave array and remove them
        //     alert("Current Slave array: "+slaves)
        //     var bot_slave_pos = (slaves.indexOf(random_slave))
        //     alert("slave position: "+bot_slave_pos)
        //     slaves.splice(bot_slave_pos,1)
        //     alert("Slave bot chosen: "+random_slave)
        

    }

    //Random Slave chosen
    let random_number_slave = Math.floor(Math.random()*slave_length)
    // alert("Random number slave: "+random_number_slave)
    let random_slave = slaves[random_number_slave]
    // alert("Current Slave array: "+slaves)
    slaves.splice(random_number_slave,1)


    // alert("Slave chosen: "+random_slave)
    roster_slaves.push(random_slave)

    //Creating Roster


    let slave_roster_table = document.getElementById("slave_roster_table")
    let chore_roster_table = document.getElementById("chore_roster_table")

    let slave_newRow = slave_roster_table.insertRow(-1)
    let chore_newRow = chore_roster_table.insertRow(-1)

    let slave_newCell = slave_newRow.insertCell(0)
    let chore_newCell = chore_newRow.insertCell(0)

    slave_newCell.innerHTML += random_slave
    chore_newCell.innerHTML += random_chore


    //Creating new length after each slave and chore has been chosen
    var slave_length = slaves.length
    var chores_length = chores.length

}


}

// Want to set the roster table for the current week
//Creates a table that has the name, chore, date assigned, completion

//Want to be able to sort the confirmed table by date so users can see previous weeks (up to 4)
document.getElementById('Confirm').onclick = function(){
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let tbody = document.createElement('tbody')

    table.append(thead)
    table.append(tbody)

    //add table to body tag in HTML
    document.getElementById('body').appendChild(table)

    //Rows and Cols need to be equivalent to slave roster table

    //confirmed slaves
    let conf_slaves = document.querySelectorAll("#slave_roster_table td")

    //confirmed chores
    let conf_chores = document.querySelectorAll("#chore_roster_table td")

    //Adding headers
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Slave";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Chore";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Completion";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);

    for (i=0; i < conf_slaves.length; i++){
        let newRow = document.createElement('tr')
        let newRowData = document.createElement('td')
        newRowData.innerHTML = conf_slaves[i].textContent

        let newRowData_2 = document.createElement('td')
        newRowData_2.innerHTML = conf_chores[i].textContent

        var checkbox = document.createElement("INPUT")
        checkbox.type = "checkbox"

        newRow.appendChild(newRowData)
        newRow.appendChild(newRowData_2)
        newRow.appendChild(checkbox)
        tbody.appendChild(newRow)

    }
}








// //Storing User inputs into localStorage

// var click = document.getElementById('Submit')
// click.addEventListener('click',addData)

// var arr = new Array()

// function addData(){
//     DeleteData()
//     getData()
    
//     arr.push({
//        workers: document.getElementById("Worker_class").value,
//        chores: document.getElementById("Chore_class").value 
//     })

//     localStorage.setItem("localData",JSON.stringify(arr))
// }

// function getData(){
//     var str = localStorage.getItem("localData")
//     if (str!=null)
//         arr = JSON.parse(str)
// }

// function DeleteData(){
//     localStorage.clear()
// }

// //Putting Stored Data into the Main_Table
// $(document).ready(function(){
//     var arr1 = new Array()
//     arr1 = JSON.parse(localStorage.getItem("localData"))
//     var tbl = document.getElementById("Main_table")

//     for(i = 0; i < arr1.length; i++){
//         var r = tbl.insertRow()
//         var cell1 = r.insertCell()
//         var cell2 = r.insertCell()
//         cell1.innerHTML = arr1[i].workers
//         cell2.innerHTML = arr1[i].chores
//     }



// });






//Arrays to store Names of people, and all the chores

// var slaves = ['Navin','Debbie','Jackson','Olivia']
// var bot_slaves = ['Jackson','Olivia']
// var top_slaves = ['Navin','Debbie']

// let chores = ['Vaccum - Top', 'Dishwasher', 'Shower','Kitchen']

// let bot_chores = ['Toilet - Bot','Vacuum Bot']
// let top_chores = ['Toilet - Top']

// //Each slave needs a corresponding chore
// //Count the number of slaves

// //Class choosing each slave to a random corresponding chore

// //Getting number of slaves
// var original_slave_length = slaves.length
// var slave_length = slaves.length
// var bot_slave_length = bot_slaves.length
// var top_slave_length = top_slaves.length


// //Getting number of chores
// var chores_length = chores.length

// //Need to choose a random slave and point that to a random chore and store that in an array
// let i = 0
// while (slave_length > 0){
    
    
//     i += 1


//     //Assign the slave to a random chore
//     let random_number_chore = Math.floor(Math.random()*chores_length)
//     // alert("Random number chore: "+random_number_chore)
//     let random_chore = chores[random_number_chore]
//     chores.splice(random_number_chore,1)
//     // alert("Chore chosen: "+random_chore)



//     function BotRandomizer(slave_array,chore_array){

//         // if (random_chore.normalize() === 'Toilet - Bot' || random_chore === 'Vaccum - Bot'){
//         //     let random_number_slave = Math.floor(Math.random()*bot_slave_length)
//         //     alert("random number of bot: "+random_number_slave)
//         //     let random_slave = bot_slaves[random_number_slave]
//         //     //Remove slave from both arrays
//         //     bot_slaves.splice(random_number_slave,1)
//         //     //Find position of slave in original slave array and remove them
//         //     alert("Current Slave array: "+slaves)
//         //     var bot_slave_pos = (slaves.indexOf(random_slave))
//         //     alert("slave position: "+bot_slave_pos)
//         //     slaves.splice(bot_slave_pos,1)
//         //     alert("Slave bot chosen: "+random_slave)
        

//     }

//     //Random Slave chosen
//     let random_number_slave = Math.floor(Math.random()*slave_length)
//     // alert("Random number slave: "+random_number_slave)
//     let random_slave = slaves[random_number_slave]
//     // alert("Current Slave array: "+slaves)
//     slaves.splice(random_number_slave,1)
//     // alert("Slave else chosen: "+random_slave)

//     if (i == original_slave_length){
//         break
//     }


//     //Creating new length after each slave and chore has been chosen
//     var slave_length = slaves.length
//     var bot_slave_length = bot_slaves.length
//     var top_slave_length = top_slaves.length
//     var chores_length = chores.length

    
    
    

// }

