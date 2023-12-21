const getStudentInfo = () => {

	let studentId 	= document.querySelector('#student-id').value;
	let name 		= document.querySelector('#name').value;
	let email 	= document.querySelector('#email').value;
	let math 		= document.querySelector('#math').value;
	let physic 	= document.querySelector('#physic').value;
	let chemical 	= document.querySelector('#chemical').value;

	if(!studentId || !name || !email || ! math || !physic || !chemical){
		document.querySelector('#error').innerHTML = "<p>Vui long dien thong tin!</p>";
		document.querySelector('#error').classList.add('show');
		return false;
	}
	let newStudent =  new Student( studentId, name, email, math, physic, chemical);

	document.querySelector('#error').innerHTML = "";
	document.querySelector('#error').classList.remove('show');
	return newStudent;
}

const renderStudents = (students) => {
	let contentHTML = "";
	if(students.length > 0){
		for( let i = 0; i < students.length; i++){
			contentHTML += `
			<tr>
				<td>${students[i].id}</td>
				<td>${students[i].name}</td>
				<td>${students[i].email}</td>
				<td>${(students[i].math * 1 + students[i].physic * 1 + students[i].chemical * 1) / 3}</td>
				<td>
					<div class="action">
						<button id="edit-btn" onclick="editStudent('${students[i].id}')">Edit</button>
						&nbsp;
						<button id="delete-btn" onclick="deleteStudent('${students[i].id}', this)">Delete</button>
					</div>
				</td>
			</tr>`
		}
	}else{
		contentHTML = `
			<tr>
				<td colSpan=5>Khong co Sinh vien nao</td>
			</tr>`
	}
	document.querySelector('#table-body').innerHTML = contentHTML;
}

const setLocalStudents = (students) => {
	let jsonStudents = JSON.stringify(students);
	localStorage.setItem(STUDENT_LOCAL_STORAGE, jsonStudents);
}

const getLocalStudents = () => {
	let jsonStudents = localStorage.getItem(STUDENT_LOCAL_STORAGE);
	return JSON.parse(jsonStudents);
}