/*******************************************
 MODAL
*******************************************/
const openAddBtn        = document.getElementById("open-add-course-modal");
const addCourseModal    = document.getElementById("add-course-modal");
const closeAddBtn       = document.getElementsByClassName("close-button")[0];

openAddBtn.addEventListener("click", openAddCourseModal);
closeAddBtn.addEventListener("click", closeAddCourseModal);
window.addEventListener("click", closeAddCourseModalOutsideClick);

function openAddCourseModal() {
    addCourseModal.style.display = "block";
};

function closeAddCourseModal() {
    addCourseModal.style.display = "none";
};

function closeAddCourseModalOutsideClick(event) {
    if (event.target == addCourseModal) {
        addCourseModal.style.display = "none";
    }
};