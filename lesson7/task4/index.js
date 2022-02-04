const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => 
       allStudentsList
      .filter(name => !studentsForRetake.includes(name))
      .map(name => 'Good job, ' + name);


// examples
const allStudentsList = ['Den', 'John', 'Ann', 'Mike'];
const studentsForRetake = ['John', 'Mike'];
getMessagesForBestStudents(allStudentsList, studentsForRetake); // ===> ['Good job, Den', 'Good job, Ann']

const allStudTest2 = ["Den", "John", "Ann", "Mike"];
const retakeStudTest2 = ["Den", "John", "Ann", "Mike"];
getMessagesForBestStudents(allStudTest2, retakeStudTest2); // ===> []

