function calculateStatistics(employeeData){
  let departments = new Set();
  employeeData.forEach((e)=>departments.add(e.department));
  let obj1 = new Object();
  employeeData.forEach((e)=>{if(e.department == 'HR'){obj1.add(e)}})
  console.log(obj1);
}

let employees = [{name:'Adam',department:'HR',salary:10000},
                {name:'Zampa',department:'HR',salary:20000},
                {name:'David',department:'Prod',salary:5000},
                {name:'Tim',department:'Tech',salary:15000},
                {name:'Tonny',department:'Tech',salary:1000}];
calculateStatistics(employees);                