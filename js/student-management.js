// const btnAddStudent = document.querySelector(".btnAddStudent");
// btnAddStudent.addEventListener("click", (e) => {
//   e.preventDefault();
//   addStudent();
//   resetForm();
//   renderData();
// });
document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  let listStudents = JSON.parse(localStorage.getItem("ListStudents")) || [];

  const btnAddStudent = document.querySelector(".btnAddStudent");
  const recordsList = document.querySelector("#content");
  let pagination = document.querySelector(".pagination");

  function displayStudents(page) {
    const recordsPerPage = 5;
    const startIndex = (page - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    const paginatedRecords = listStudents.slice(startIndex, endIndex);
    recordsList.innerHTML = "";
    paginatedRecords.forEach(function (student) {
      const row = document.createElement("tr");
      row.innerHTML = `
      <tr style="line-height: 40px;">
      <td>${index++}</td>
      <td>${student.studentId}</td>
      <td>${student.studentName}</td>
      <td>${student.phone}</td>
      <td>${student.email}</td>
      <td>${student.dob}</td>
      <td>${student.address}</td>
      <td>${student.classRoom}</td>
      <td>
      <select class="form-select" aria-label="select" style="width: 9rem;">
      <option selected>Trạng thái</option>
      <option value="1">Chờ lớp</option>
      <option value="2">Đang học</option>
      <option value="3">Bảo lưu</option>
      <option value="4">Đình chỉ</option>
      <option value="5">Tốt nghiệp</option>
      </select>
      </td>
      <td class="d-flex justify-content-center action">
      <i class="bi bi-pencil-square btn-edit"></i>
      <i class="bi bi-trash-fill btn-delete"></i>
      </td>
      </tr> 
      `;
      recordsList.appendChild(row);
      displayPagination(page);
    });
  }
  function displayPagination(currentPage) {
    const recordsPerPage = 5;
    const totalPage = Math.ceil(listStudents.length / recordsPerPage);

    pagination.innerHTML = "";
    for (let i = 1; i <= totalPage; i++) {
      let li = document.createElement("li");
      li.classList = "page-item";
      let link = document.createElement("a");
      li.appendChild(link);
      link.href = "#";
      link.textContent = i;
      link.classList.add("page-link");
      if (i === currentPage) {
        link.classList.add("active");
      }
      link.addEventListener("click", function () {
        displayStudents(i);
      });
      pagination.appendChild(link);
    }
  }
  function saveLocalStorage() {
    localStorage.setItem("ListStudents", JSON.stringify(listStudents));
  }
  btnAddStudent.addEventListener("click", (e) => {
    e.preventDefault();

    const id = document.querySelector("#student-id").value;
    const name = document.querySelector("#student-name").value;
    const number = document.querySelector("#student-number").value;
    const email = document.querySelector("#student-email").value;
    const dob = document.querySelector("#student-dob").value;
    const address = document.querySelector("#student-address").value;
    const classRoom = document.querySelector("#student-class").value;
    const gender = document.querySelector("input[type='radio']:checked").value;
    const newStudent = {
      studentId: id,
      studentName: name,
      phone: number,
      email: email,
      dob: dob,
      address: address,
      classRoom: classRoom,
      gender: gender,
    };
    listStudents.unshift(newStudent);
    saveLocalStorage();
    displayStudents(1);
    resetForm();
  });
});

// localStorage.removeItem("ListStudents");
function resetForm() {
  document.querySelector("#student-id").value = "";
  document.querySelector("#student-name").value = "";
  document.querySelector("#student-number").value = "";
  document.querySelector("#student-email").value = "";
  document.querySelector("#student-dob").value = "";
  document.querySelector("#student-address").value = "";
  document.querySelector("#student-class").value = "";
  document.querySelector("#info").value = "";
  document.getElementById("male").checked = true;
}
// render form -> table
// function renderData() {
//   document.querySelector("#content").innerHTML = "";
//   for (let index = 0; index < listStudents.length; index++) {
//     document.querySelector("#content").innerHTML += `
//   <tr style="line-height: 40px;">
//       <td>${index + 1}</td>
//       <td>${listStudents[index].studentId}</td>
//       <td>${listStudents[index].studentName}</td>
//       <td>${listStudents[index].phone}</td>
//       <td>${listStudents[index].email}</td>
//       <td>${listStudents[index].dob}</td>
//       <td>${listStudents[index].address}</td>
//       <td>${listStudents[index].classRoom}</td>
//       <td>
//         <select class="form-select" aria-label="select" style="width: 9rem;">
//           <option selected>Trạng thái</option>
//           <option value="1">Chờ lớp</option>
//           <option value="2">Đang học</option>
//           <option value="3">Bảo lưu</option>
//           <option value="4">Đình chỉ</option>
//           <option value="5">Tốt nghiệp</option>
//         </select>
//       </td>
//       <td class="d-flex justify-content-center action">
//         <i class="bi bi-pencil-square btn-edit"></i>
//         <i class="bi bi-trash-fill btn-delete"></i>
//       </td>
// </tr>
//   `;
//   }

//   // for (var i = 1; i <= totalPages; i++) {
//   //   pagination.innerHTML += `<li class="page-item"><a class="page-link" href="javascript:clickPage('${i}')">${i}</a></li>`;
//   // }
// }
