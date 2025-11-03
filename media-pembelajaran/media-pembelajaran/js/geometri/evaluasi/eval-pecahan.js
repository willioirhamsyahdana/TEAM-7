/*******************************
   DATA SOAL EVALUASI
********************************/
let soalList = [

  // PENJUMLAHAN & PENGURANGAN
  { 
    soal: "\\( \\frac{12}{15} + \\frac{2}{15} = \\dots \\)", 
    opsi: ["\\( \\frac{10}{15} \\)","\\( \\frac{13}{15} \\)","\\( \\frac{14}{15} \\)","\\( \\frac{15}{15} \\)"], 
    jawaban: "\\( \\frac{14}{15} \\)" 
  },
  { 
    soal: "\\( \\frac{17}{20} + \\frac{1}{20} = \\dots \\)", 
    opsi: ["\\( \\frac{9}{10} \\)","\\( \\frac{18}{20} \\)","\\( \\frac{19}{20} \\)","\\( \\frac{20}{20} \\)"], 
    jawaban: "\\( \\frac{9}{10} \\)" 
  },
  { 
    soal: "\\( \\frac{9}{18} + \\frac{4}{24} = \\dots \\)", 
    opsi: ["\\( \\frac{12}{18} \\)","\\( \\frac{11}{24} \\)","\\( \\frac{2}{3} \\)","\\( \\frac{5}{6} \\)"], 
    jawaban: "\\( \\frac{2}{3} \\)" 
  },
  { 
    soal: "\\( \\frac{19}{21} - \\frac{7}{21} = \\dots \\)", 
    opsi: ["\\( \\frac{13}{21} \\)","\\( \\frac{12}{21} \\)","\\( \\frac{4}{7} \\)","\\( \\frac{2}{3} \\)"], 
    jawaban: "\\( \\frac{4}{7} \\)" 
  },
  { 
    soal: "\\( \\frac{16}{25} - \\frac{4}{25} = \\dots \\)", 
    opsi: ["\\( \\frac{10}{25} \\)","\\( \\frac{11}{25} \\)","\\( \\frac{12}{25} \\)","\\( \\frac{13}{25} \\)"], 
    jawaban: "\\( \\frac{12}{25} \\)" 
  },
  { 
    soal: "\\( \\frac{15}{20} - \\frac{6}{15} = \\dots \\)", 
    opsi: ["\\( \\frac{7}{20} \\)","\\( \\frac{1}{2} \\)","\\( \\frac{2}{5} \\)","\\( \\frac{3}{5} \\)"], 
    jawaban: "\\( \\frac{7}{20} \\)" 
  },

  // SOAL CERITA
  { 
    soal: "Toples berisi \\( \\frac{12}{18} \\) permen stroberi dan \\( \\frac{5}{18} \\) anggur. Total = ", 
    opsi: ["\\( \\frac{15}{18} \\)","\\( \\frac{16}{18} \\)","\\( \\frac{17}{18} \\)","\\( \\frac{18}{18} \\)"], 
    jawaban: "\\( \\frac{17}{18} \\)" 
  },
  { 
    soal: "Deni membaca \\( \\frac{9}{15} \\) pagi dan \\( \\frac{6}{20} \\) malam. Total = ", 
    opsi: ["\\( \\frac{3}{5} \\)","\\( \\frac{9}{10} \\)","\\( \\frac{5}{6} \\)","\\( \\frac{7}{8} \\)"], 
    jawaban: "\\( \\frac{9}{10} \\)" 
  },
  { 
    soal: "Tangki berisi \\( \\frac{18}{24} \\) air, berkurang \\( \\frac{5}{24} \\). Sisa = ", 
    opsi: ["\\( \\frac{10}{24} \\)","\\( \\frac{11}{24} \\)","\\( \\frac{12}{24} \\)","\\( \\frac{13}{24} \\)"], 
    jawaban: "\\( \\frac{13}{24} \\)" 
  },
  { 
  soal: "Pedagang punya \\( \\dfrac{14}{21} \\) ton, jual \\( \\dfrac{6}{18} \\) ton. Sisa = ", 
  opsi: [
    "\\( \\dfrac{1}{4}\\;\\text{Ton} \\)",
    "\\( \\dfrac{1}{3}\\;\\text{Ton} \\)",
    "\\( \\dfrac{1}{2}\\;\\text{Ton} \\)",
    "\\( \\dfrac{2}{3}\\;\\text{Ton} \\)"
  ], 
  jawaban: "\\( \\dfrac{1}{3}\\;\\text{Ton} \\)" 
},


];


// Acak opsi tiap soal
function shuffle(arr){ return arr.sort(()=>Math.random()-0.5); }
soalList.forEach(s => s.opsi = shuffle(s.opsi));


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

        ${item.opsi.map((o)=>
          `<div>
            <label>
              <input type="radio" name="opsi-${i}" value="${o}">
              ${o}
            </label>
          </div>`
        ).join("")}

        <!-- jawaban muncul setelah selesai -->
        <p class="mt-2 fw-bold text-danger d-none" id="kunci-${i}">
          ✅ Jawaban: ${item.jawaban}
        </p>
      </div>
    `;
  });

  document.getElementById("quiz-area").innerHTML = html;
}

renderSoal();

/*******************************
   CEK JAWABAN
********************************/
function periksaSemua() {
  skor = 0;
  const audioBenar = document.getElementById("audioBenar");

  soalList.forEach((item, i) => {
    let selected = document.querySelector(`input[name="opsi-${i}"]:checked`);
    let box = document.getElementById(`soal-${i}`);

    document.getElementById(`kunci-${i}`).classList.remove("d-none");

    if (!selected) {
      box.classList.add("salah");
      item._benar = false;
      return;
    }

    if (selected.value === item.jawaban) {
      skor++;
      box.classList.add("benar");
      audioBenar.currentTime = 0;
      audioBenar.play();
      item._benar = true;
    } else {
      box.classList.add("salah");
      item._benar = false;
    }
  });

  let nilai = skor * 10;
  document.getElementById("skorText").textContent = `Nilai Kamu: ${nilai}`;

  // === TAMPILKAN REKAP ===
  tampilkanRekap();
}

function tampilkanRekap() {
  let body = "";
  let totalSkor = 0;

  soalList.forEach((item, i) => {
    let benar = item._benar ? "✅" : "❌";
    let skor = item._benar ? 10 : 0;
    let nilai = skor;
    totalSkor += skor;

    body += `
      <tr>
        <td>${i + 1}</td>
        <td>${item.jawaban}</td>
        <td>${skor}</td>
        <td>${nilai}</td>
      </tr>
    `;
  });

  document.getElementById("rekap-body").innerHTML = body;

  let nilaiAkhir = (totalSkor / 100) * 100;
  document.getElementById("nilaiAkhirTxt").textContent =
    "Nilai Akhir : " + nilaiAkhir;

  document.getElementById("rekap-container").classList.remove("d-none");

  // === Render MathJax setelah rekap muncul ===
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

