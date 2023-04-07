content_about_me = document.getElementById("text_about_me")
content_about_me.textContent = "I am a Sophomore At GLA University Mathura studying B.Tech in Computer Science with Specialization in Data Analytics. I'm 20 years old and like to put my mind to puzzles which is why I am intrigued by coding languages and the problems they Present. In my free time I like to play chess and solve chess puzzles."

function change1(){
    document.getElementById("button1").style.backgroundColor = "bisque";
    document.getElementById("button2").style.backgroundColor = "rgb(214, 229, 241)";
    document.getElementById("button3").style.backgroundColor = "rgb(214, 229, 241)";
    
    content_about_me.textContent = "I am a Sophomore At GLA University Mathura studying B.Tech in Computer Science with Specialization in Data Analytics. I'm 20 years old and like to put my mind to puzzles which is why I am intrigued by coding languages and the problems they Present. In my free time I like to play chess and solve chess puzzles."
}
function change2(){
    document.getElementById("button1").style.backgroundColor = "rgb(214, 229, 241)";
    document.getElementById("button2").style.backgroundColor = "bisque";
    document.getElementById("button3").style.backgroundColor = "rgb(214, 229, 241)";
}

const btn = document.getElementById("button2");

btn.addEventListener('click', () => {
    const img = document.createElement('img');
    img.src = 'images/final.png';
    content_about_me.textContent='';
    content_about_me.appendChild(img);
});


function change3(){
    document.getElementById("button1").style.backgroundColor = "rgb(214, 229, 241)";
    document.getElementById("button2").style.backgroundColor = "rgb(214, 229, 241)";
    document.getElementById("button3").style.backgroundColor = "bisque";

    content_about_me.textContent = "I am a Student so I have 0 years of Experience in the industry. I'm free for the summer and am planning to build my skills to stay ahead for the College Placements in the 6th Semester."
}
