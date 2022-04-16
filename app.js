

//Want to randomly choose a person for each chore needing to be done. Each week a person must have a new chore and cant be a repeat of 
//a chore they have already done before everyone has done each chore at least once.. Then cycle repeats

//Get Household username

//Get the text from the submitting button
function returnText(){
    let username = document.getElementById("Household_name").value
    alert("Username Submitted: "+username)
}

function returnWorkers(){
    let workers = document.getElementById("worker_class").value
    // alert("Worker submitted: "+workers)
    return workers 
    
}

function returnChores(){
    let chores = document.getElementById("worker_class").value
    alert("Chore submitted: "+chores)
}


var click = document.getElementById('Submits');
click.addEventListener('click',addRow('Main_table'));


//Adding User inputs to the table

function addRow(tableID){
    //Get a reference to the table
    let tableRef = document.getElementById(tableID)

    //Insert row at the end of the table
    let newRow = tableRef.insertRow(-1)

    //Insert a cell in the row at index 0 

    let newCell = newRow.insertCell(0)

    //Append a text node to the cell
    
    let newText = document.createTextNode(returnWorkers())
    newCell.appendChild(newText)
    alert("New row added with: "+returnWorkers())
}




// $(document).ready(function(){
//     returnWorkers()
//     addRow('Main_table')
// })

// Clearing the input field

const inputField = document.getElementById("worker_class")
click.addEventListener('click',()=>{
    //clearing input field
    inputField.value = " "
})




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

var slaves = ['Navin','Debbie','Jackson','Olivia']
var bot_slaves = ['Jackson','Olivia']
var top_slaves = ['Navin','Debbie']

let chores = ['Vaccum - Top', 'Dishwasher', 'Shower','Kitchen']

let bot_chores = ['Toilet - Bot','Vacuum Bot']
let top_chores = ['Toilet - Top']

//Each slave needs a corresponding chore
//Count the number of slaves

//Class choosing each slave to a random corresponding chore

//Getting number of slaves
var original_slave_length = slaves.length
var slave_length = slaves.length
var bot_slave_length = bot_slaves.length
var top_slave_length = top_slaves.length


//Getting number of chores
var chores_length = chores.length

//Need to choose a random slave and point that to a random chore and store that in an array
let i = 0
while (slave_length > 0){
    
    
    i += 1


    //Assign the slave to a random chore
    let random_number_chore = Math.floor(Math.random()*chores_length)
    // alert("Random number chore: "+random_number_chore)
    let random_chore = chores[random_number_chore]
    chores.splice(random_number_chore,1)
    // alert("Chore chosen: "+random_chore)



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
    // alert("Slave else chosen: "+random_slave)

    if (i == original_slave_length){
        break
    }


    //Creating new length after each slave and chore has been chosen
    var slave_length = slaves.length
    var bot_slave_length = bot_slaves.length
    var top_slave_length = top_slaves.length
    var chores_length = chores.length

    
    
    

}

