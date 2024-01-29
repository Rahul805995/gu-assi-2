const person={Name:"Rahul Kumar",
              Age:"20",
              Occupation:"Frontened Developer"};
  function displaydetails(person){
    for(let i in person){
        console.log("${i}: ${i[person]}");
    }
          
  }   
  displaydetails(person);         