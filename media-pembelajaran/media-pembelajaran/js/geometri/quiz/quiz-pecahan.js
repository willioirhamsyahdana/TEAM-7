/*******************************
   DATA SOAL
********************************/
let soalList = [
  {
    soal: "\\( \\frac{3}{8} + \\frac{2}{8} = \\dots \\)",
    opsi: ["\\( \\frac{4}{8} \\)","\\( \\frac{5}{8} \\)","\\( \\frac{6}{8} \\)","\\( \\frac{7}{8} \\)"],
    jawaban: "\\( \\frac{5}{8} \\)"
  },
  {
    soal: "\\( \\frac{5}{6} - \\frac{2}{6} = \\dots \\)",
    opsi: ["\\( \\frac{2}{6} \\)","\\( \\frac{3}{6} \\)","\\( \\frac{4}{6} \\)","\\( \\frac{5}{6} \\)"],
    jawaban: "\\( \\frac{3}{6} \\)"
  },
  {
    soal: "Sinta mempunyai \\( \\frac{2}{5} \\) bagian kue coklat, lalu membeli lagi \\( \\frac{3}{10} \\) bagian. Total = \\dots",
    opsi: ["\\( \\frac{4}{10} \\)","\\( \\frac{5}{10} \\)","\\( \\frac{7}{10} \\)","\\( \\frac{8}{10} \\)"],
    jawaban: "\\( \\frac{7}{10} \\)"
  },
  {
    soal: "Ibu mempunyai \\( \\frac{3}{4} \\) liter minyak, dipakai \\( \\frac{1}{8} \\) liter. Sisa = \\dots",
    opsi: ["\\( \\frac{2}{8} \\)","\\( \\frac{4}{8} \\)","\\( \\frac{5}{8} \\)","\\( \\frac{6}{8} \\)"],
    jawaban: "\\( \\frac{6}{8} \\)"
  },
  {
    soal: "\\( \\frac{7}{12} + \\frac{5}{6} = \\dots \\)",
    img: "../assets/img/GPT.png",
    opsi: ["\\( \\frac{13}{12} \\)","\\( \\frac{14}{12} \\)","\\( \\frac{15}{12} \\)","\\( \\frac{17}{12} \\)"],
    jawaban: "\\( \\frac{15}{12} \\)"
  }
];


/* acak opsi */
function shuffle(arr){ return arr.sort(()=>Math.random()-0.5); }
soalList.forEach(s=> s.opsi = shuffle(s.opsi) );

let skor = 0;

/*******************************
   RENDER
********************************/
function renderSoal(){
  let html = "";
  soalList.forEach((item,i)=>{
    html += `
      <div id="soal-${i}" class="section-box">
        <h6 class="fw-bold text-primary">Soal ${i+1}</h6>
        <p>${item.soal}</p>

        ${
          item.img
          ? `<img src="${item.img}" class="img-fluid rounded mb-2" style="max-width:200px">`
          : ""
        }

        ${item.opsi.map((o)=>
          `<label class="d-block my-1">
            <input type="radio" name="opsi-${i}" value="${o}"> ${o}
          </label>`
        ).join("")}
        
        <p class="mt-2 fw-bold text-danger d-none" id="kunci-${i}">
          Jawaban: ${item.jawaban}
        </p>
      </div>
    `;
  });

  document.getElementById("quiz-area").innerHTML = html;
}


renderSoal();

/*******************************
   PERIKSA SEMUA
********************************/
function periksaSemua(){

  skor = 0;
  const audioBenar = document.getElementById("audioBenar");

  soalList.forEach((item,i)=>{

    let selected = document.querySelector(`input[name="opsi-${i}"]:checked`);
    let box = document.getElementById(`soal-${i}`);
    let kunci = document.getElementById(`kunci-${i}`);

    // reset animasi (biar bisa dipakai lagi)
    box.classList.remove("benar-anim","salah-anim");

    // tampilkan kunci
    kunci.classList.remove("d-none");

    if(!selected){
      box.classList.add("salah-anim");
      return;
    }

    if(selected.value === item.jawaban){
      skor++;
      box.classList.add("benar-anim");
      audioBenar.currentTime = 0;
      audioBenar.play();
    } else {
      box.classList.add("salah-anim");
    }
  });

  let nilai = skor * 20;
  document.getElementById("skorText").textContent = `Nilai Kamu: ${nilai}`;
}

