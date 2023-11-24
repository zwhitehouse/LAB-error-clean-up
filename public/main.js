import '../styles/main.scss';
import studentsOnDom from '../utils/studentsOnDom';

// You have to import your styles for them to work. Comment in this line

const students = [];
const voldysArmy = []; // starts as an empty array

// Create a new ID for the students

// ********** HTML Components  ********** //
// the basic HMTL structure of app

// target filter buttons on Dom
document.querySelector('#filter-container').addEventListener('click', (e) => {
  if (e.target.id.includes('filter')) {
    const [, house] = e.target.id.split('--');

    if (house === 'all') {
      studentsOnDom('#students', students);
    } else if (house) {
      const filter = students.filter((student) => student.house === house);
      studentsOnDom('#students', filter, house);
    }
  }
});

// target expel buttons to move to voldys army
document
  .querySelector('#student-container')
  .addEventListener('click', (e) => {
    if (e.target.id.includes('expel')) {
      const [, id] = e.target.id.split('--');
      const index = students.findIndex((student) => student.id === Number(id));

      // move from one array to another
      voldysArmy.push(...students.splice(index, 1));
      // get both sets of students on the DOM
      studentsOnDom('#students', students);
      studentsOnDom('#voldy', voldysArmy);
    }
  });

// ********** LOGIC  ********** //
// sorts student to a house and then place them in the students array

// add form to DOM on start-sorting click.
// Add events for form after the form is on the DOM
