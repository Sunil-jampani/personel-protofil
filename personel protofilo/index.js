function showsidebar(){
const sidebar = document.querySelector(".sidebar");
sidebar.style.display = "flex";
}
function hidesidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
    }
    function showSkills() {
        document.getElementById('skills').style.display = 'block';
        document.getElementById('education').style.display = 'none';
        document.getElementById('experience').style.display = 'none';
    }
    
    function showEducation() {
        document.getElementById('skills').style.display = 'none';
        document.getElementById('education').style.display = 'block';
        document.getElementById('experience').style.display = 'none';
    }
    
    function showExperience() {
        document.getElementById('skills').style.display = 'none';
        document.getElementById('education').style.display = 'none';
        document.getElementById('experience').style.display = 'block';
    }
     function answer(){
        alert("Your Message is Sent");
        alert("Thank You");
    }