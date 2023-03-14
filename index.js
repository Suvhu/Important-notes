showNotes();
mark();
function mark() {
    let note;
    let loc = localStorage.getItem('notes');
    if (loc == null) {
        note = [];
    }
    else {
        note = JSON.parse(loc);
    }
    console.log(note);
    let x = document.getElementsByClassName("noteCard");
    Array.from(x).forEach(function (element,index) {
        if (note[index]==0) {
            element.style.backgroundColor = 'white';
        }
        else {
            element.style.backgroundColor = 'lightblue';
            // let myimp=document.getElementsByClassName("myimp")[index];
        }
    });
}

let firstbtn = document.getElementById('addBtn');
firstbtn.addEventListener('click', function () {
    let text = document.getElementById('addTxt');
    let text1 = document.getElementById('addtitle');
    let loc = localStorage.getItem('Notes');
    if (loc == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(loc);
    }
    let myobj = {
        textv: text.value,
        text1v: text1.value
    }
    notesobj.push(myobj);
    localStorage.setItem("Notes", JSON.stringify(notesobj));
    text.value = "";
    text1.value = "";
    showNotes();
})

function showNotes() {
    let loc = localStorage.getItem('Notes');
    if (loc == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(loc);
    }
    let html = "";
    // const note = new Array();
    notesobj.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem; id="newly">
        <div class="card-body hello" >
            <div style="display: flex; flex-direction:row; justify-content:space-between;">
            <h5 class="card-title">${element.text1v}</h5>
            <input type="checkbox" name="important" id="${index}" onclick="important(this.id)">
            </div>
            <p class="card-text"> ${element.textv}</p>
            <button class="btn btn-primary myimp" id="${index}" onclick="deletenote(this.id)">Delete Note</button>
        </div>
    </div>`;
        // note.push(0);
    });
    // localStorage.setItem("notes", JSON.stringify(note));
    // console.log(note);
    let obj = document.getElementById('notes');
    if (notesobj.length != 0) {
        obj.innerHTML = html;
    }
    else {
        obj.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
    // addTitle();
}

// function addTitle(){
//     let loc1 = localStorage.getItem("Notes1");
//   if (loc1 == null) {
//     notesobj1 = [];
//   } else {
//     notesobj1 = JSON.parse(loc1);
//   }
//   let p=document.getElementsByClassName("hello");
//   let q=document.getElementsByClassName('card-text');
//   for(let i=0;i<p.length;i++){
//     let h=document.createElement('h5');
//     h.className='card-title';
//     h.innerText=notesobj1[i];
//     p[i].insertBefore(h,q[i]);
//   }
// }

function deletenote(index) {
    let loc = localStorage.getItem('Notes');
    if (loc == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(loc);
    }
    notesobj.splice(index, 1);
    console.log("Hii");
    localStorage.setItem("Notes", JSON.stringify(notesobj));
    showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener('input', function () {
    let text = search.value.toLowerCase();
    // console.log(text);
    let x = document.getElementsByClassName("noteCard");
    Array.from(x).forEach(function (element) {
        let y = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        if (y.includes(text)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    });
});

function important(index) {
    let loc = localStorage.getItem('notes');
    let note = JSON.parse(loc);

    let noteCard = document.getElementsByClassName("noteCard");
    if (noteCard[index].style.backgroundColor == "lightblue") {
        note[index] = 0;
        noteCard[index].style.backgroundColor = "white";
    }
    else {
        note[index] = 1;
        noteCard[index].style.backgroundColor = "lightblue";
    }
    localStorage.setItem("notes", JSON.stringify(note));
}