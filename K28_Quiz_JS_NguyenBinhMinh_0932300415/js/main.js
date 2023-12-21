const STUDENT_LOCAL_STORAGE = 'STUDENT_LOCAL_STORAGE';

let students = getLocalStudents() || [];

if(students){
	renderStudents(students)
}


const addNewStudent = () => {
	let newStudent = getStudentInfo();
	students.push(newStudent);
	setLocalStudents(students);
	renderStudents(students);
	document.querySelector('#form-control-student').reset();
}

const resetStudents = () => {
	students = [];
	setLocalStudents(students);
	renderStudents(students);
}

const editStudent = (id) => {
	if(students){
		let student = students.filter(item => item.id == id);
		
		document.querySelector('#edit-student-id').value  = student[0].id;
		document.querySelector('#edit-name').value 		= student[0].name;
		document.querySelector('#edit-email').value		= student[0].email;
		document.querySelector('#edit-math').value		= student[0].math;
		document.querySelector('#edit-physic').value		= student[0].physic;
		document.querySelector('#edit-chemical').value	= student[0].chemical;

		document.querySelector('#edit-student-btn').setAttribute('data-edit-id', student[0].id);
		
	}else{
		return false;
	}
	document.querySelector('#edit-box').classList.add('active');
}

const closeEditStudent = (id) => {
	document.querySelector('#edit-box').classList.remove('active');
}

const updateStudent = () => {
	document.querySelector('#edit-student-btn').innerText = "Updating...";
	setTimeout(() => {
		document.querySelector('#edit-student-btn').innerText = "Cap Nhat Thong Tin";
	}, 1000);

	let studentId 	= document.querySelector('#edit-student-id').value ;
	let name		= document.querySelector('#edit-name').value;
	let email 	= document.querySelector('#edit-email').value;
	let math 		= document.querySelector('#edit-math').value;
	let physic	= document.querySelector('#edit-physic').value;
	let chemical	= document.querySelector('#edit-chemical').value; 

	let editStudent = new Student( studentId, name, email, math, physic, chemical);

	let activeStudentId = document.querySelector('#edit-student-btn').dataset.editId;
	let editStudents = students.map((item, index) => {
		if(item.id == activeStudentId){
			return {...item, ...editStudent};
		}else{
			return item;
		}
	});

	setLocalStudents(editStudents);
	renderStudents(editStudents);
}

const deleteStudent = (id, item) => {
	item.innerText = "Deleting...";
	let deleteStudents = students.filter(item => item.id != id);
	setTimeout(() => {
		setLocalStudents(deleteStudents);
		renderStudents(deleteStudents);
	}, 1000)
}

