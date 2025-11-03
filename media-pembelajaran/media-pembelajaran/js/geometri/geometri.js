/*******************************
   KALKULATOR KERUCUT
********************************/
function hitungKerucut() {

  const r = parseFloat(document.getElementById("r").value);
  const t = parseFloat(document.getElementById("t").value);
  const s = parseFloat(document.getElementById("s").value);

  const PI = 3.14;

  if (!r || r <= 0) {
    return alert("Masukkan jari-jari (r) dengan benar");
  }

  let hasil = "";

  // Volume → 1/3 × π × r² × t
  if (t) {
    const volume = (1/3) * PI * r * r * t;
    hasil += `Volume = ${volume.toFixed(2)} cm³<br>`;
  }

  // Luas permukaan → π × r (r + s)
  if (s) {
    const luas = PI * r * (r + s);
    hasil += `Luas Permukaan = ${luas.toFixed(2)} cm²<br>`;
  }

  document.getElementById("hasilKerucut").innerHTML = hasil;
}

/*******************************
   SOAL LATIHAN (PG)
********************************/

// acak opsi
function shuffle(arr){
  return arr.sort(() => Math.random() - 0.5);
}

let soalList = [

  /********* SUB 1 — LUAS KERUCUT (1–5) *********/
  {
    sub: "Latihan 1 — Luas Kerucut",
    soal: "Rumus luas alas kerucut adalah …",
    opsi: shuffle(["π × r²", "π × r × s", "½ × π × r²", "π × s²"]),
    jawaban: "π × r²"
  },
  {
    sub: "Latihan 1 — Luas Kerucut",
    soal: "Jari-jari kerucut = 7 cm. Berapakah luas alasnya? (π=3.14)",
    opsi: shuffle(["153.86 cm²", "154 cm²", "100 cm²", "200 cm²"]),
    img: "../assets/img/7.png",
    jawaban: "153.86 cm²"
  },
  {
    sub: "Latihan 1 — Luas Kerucut",
    soal: "Jika r = 10 cm dan s = 15 cm, luas selimutnya adalah …",
    img: "../assets/img/Sr.png",
    opsi: shuffle(["471.00 cm²","471 cm²","300 cm²","150 cm²"]),
    jawaban: "471.00 cm²"
  },
  {
    sub: "Latihan 1 — Luas Kerucut",
    soal: "Yang termasuk unsur kerucut adalah …",
    opsi: shuffle([
      "Alas, selimut, titik puncak",
      "Rusuk, sisi tegak",
      "Bidang persegi",
      "Diagonal ruang"
    ]),
    jawaban: "Alas, selimut, titik puncak"
  },
  {
    sub: "Latihan 1 — Luas Kerucut",
    soal: "Luas permukaan = π × r (r + s). Jika r=7 dan s=10 maka …",
    img: "../assets/img/tt.png",    
    opsi: shuffle(["373.66 cm²","300 cm²","200 cm²","150 cm²"]),
    jawaban: "373.66 cm²"
  },

  /********* SUB 2 — VOLUME KERUCUT (6–10) *********/
  {
    sub: "Latihan 2 — Volume Kerucut",
    soal: "Rumus volume kerucut adalah …",    
    opsi: shuffle([
      "⅓ × π × r² × t",
      "π × r² × t",
      "½ × π × r² × t",
      "π × r × t"
    ]),
    jawaban: "⅓ × π × r² × t"
  },
  {
    sub: "Latihan 2 — Volume Kerucut",
    soal: "Jika r = 7 cm dan t = 14 cm, volumenya adalah … (π = 3.14)",
    img: "../assets/img/14.png",
    opsi: shuffle(["718.67 cm³","700 cm³","650 cm³","800 cm³"]),
    jawaban: "718.67 cm³"
  },
  {
    sub: "Latihan 2 — Volume Kerucut",
    soal: "Jari-jari = 3 cm, t = 4 cm. Volume = … (π=3.14)",
    img: "../assets/img/sip.png",
    opsi: shuffle(["37.68 cm³","50 cm³","60 cm³","40 cm³"]),
    jawaban: "37.68 cm³"
  },
  {
    sub: "Latihan 2 — Volume Kerucut",
    soal: "Semakin besar jari-jari, maka volume kerucut akan …",
    opsi: shuffle(["Semakin besar","Semakin kecil","Tetap","Tidak berubah"]),
    jawaban: "Semakin besar"
  },
  {
    sub: "Latihan 2 — Volume Kerucut",
    soal: "Volume dipengaruhi oleh …",
    opsi: shuffle([
      "Jari-jari & tinggi",
      "Panjang & lebar",
      "Diagonal ruang",
      "Jumlah sisi"
    ]),
    jawaban: "Jari-jari & tinggi"
  },

  /********* SUB 3 — SOAL CERITA (11–15) *********/
  {
    sub: "Latihan 3 — Soal Cerita",
    soal: "Sebuah topi ulang tahun berbentuk kerucut punya r=7 cm dan s=10 cm. Apa yang ditanyakan?",
    img: "../assets/img/11 Topi Ulang Tahun.webp",
    opsi: shuffle(["Luas permukaan","Berat topi","Keliling topi","Warna topi"]),
    jawaban: "Luas permukaan"
  },
  {
    sub: "Latihan 3 — Soal Cerita",
    soal: "Ibu membuat corong air r=3 cm dan t=4 cm. Berapakah volumenya?",
    img: "../assets/img/sip.png",
    opsi: shuffle(["37.68 cm³","50 cm³","100 cm³","90 cm³"]),
    jawaban: "37.68 cm³"
  },
  {
    sub: "Latihan 3 — Soal Cerita",
    soal: "Gunakan rumus volume = 1/3 × π × r² × t. Apa makna r?",
    opsi: shuffle(["Jari-jari alas","Tinggi","Panjang selimut","Diameter"]),
    jawaban: "Jari-jari alas"
  },
  {
    sub: "Latihan 3 — Soal Cerita",
    soal: "Jika r=10 cm & s=15 cm, berapa luas selimut kerucut?",
    opsi: shuffle(["471.00 cm²","300 cm²","150 cm²","200 cm²"]),
    jawaban: "471.00 cm²"
  },
  {
    sub: "Latihan 3 — Soal Cerita",
    soal: "Luas alas = π × r². Jika r digandakan, luas alas akan …",
    opsi: shuffle(["Menjadi 4 kali","Menjadi 2 kali","Tetap","Menjadi 3 kali"]),
    jawaban: "Menjadi 4 kali"
  },
];


let current = 0;
let skor = 0;

/**************
  SHUFFLE SOAL
**************/
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function renderSoal(i){
  const quizArea = document.getElementById("quiz-area");
  const item = soalList[i];
  let inputHTML = "";
  let imgHTML = "";

  if(item.img){
    imgHTML = `<img src="${item.img}" class="img-fluid mb-3 d-block mx-auto" style="max-width:220px;">`;
  }

  item.opsi.forEach((pil,idx)=>{
    inputHTML += `
      <div class="form-check">
        <input class="form-check-input" type="radio"
               name="opsi-${i}" id="opsi-${i}-${idx}" value="${pil}">
        <label class="form-check-label" for="opsi-${i}-${idx}">
          ${pil}
        </label>
      </div>`;
  });

  quizArea.innerHTML += `
    <div class="quiz-card" id="soal-${i}">
      <span class="badge bg-info mb-2">${item.sub}</span>
      <h6 class="fw-bold text-primary">Soal ${i+1}</h6>
      <p>${item.soal}</p>

      ${imgHTML}   

      ${inputHTML}
      <button class="btn btn-success btn-sm mt-2" onclick="cekJawaban(${i})">
        Periksa
      </button>
      <p id="feedback-${i}" class="mt-2"></p>
    </div>
  `;
}



/*******************************
   CEK JAWABAN
********************************/
function cekJawaban(i) {
  const item = soalList[i];
  let userAnswer;
  let container = document.getElementById(`soal-${i}`);

  // ✅ Soal PILIHAN GANDA
  if (item.opsi) {
    let selected = document.querySelector(`input[name="opsi-${i}"]:checked`);
    if (!selected) {
      alert("Pilih salah satu jawaban ya!");
      return;
    }
    userAnswer = selected.value;

    if (userAnswer === item.jawaban) {
      skor++;
      container.classList.add("benar-anim");
      document.getElementById(`feedback-${i}`).innerHTML =
        "<span class='text-success fw-bold'>✅ Benar!</span>";
      audioBenar.play();   // ✅ AUDIO HERE
    } else {
      container.classList.add("salah-anim");
      document.getElementById(`feedback-${i}`).innerHTML =
        `<span class='text-danger fw-bold'>❌ Salah</span><br>Jawaban benar: ${item.jawaban}`;
      audioSalah.play();   // ✅ AUDIO HERE
    }
  }

  // ✅ Soal HITUNG
  else {
    userAnswer = parseFloat(document.getElementById(`jawaban-${i}`).value);
    let benar = parseFloat(item.jawaban);
    const tolerance = Math.abs(benar * 0.01);

    if (Math.abs(userAnswer - benar) <= tolerance) {
      skor++;
      container.classList.add("benar-anim");
      document.getElementById(`feedback-${i}`).innerHTML =
        "<span class='text-success fw-bold'>✅ Benar!</span>";
      audioBenar.play();   // ✅ AUDIO HERE
    } else {
      container.classList.add("salah-anim");
      document.getElementById(`feedback-${i}`).innerHTML =
        `<span class='text-danger fw-bold'>❌ Salah</span><br>Jawaban benar: ${benar}`;
      audioSalah.play();   // ✅ AUDIO HERE
    }
  }

  // ✅ disable tombol setelah koreksi
  document.querySelector(`#soal-${i} button`).disabled = true;

  // ✅ update skor
  document.getElementById("skorText").innerText =
    `Skor = ${skor}/${soalList.length}`;

  // ✅ tampilkan soal berikut
  current++;
  if (current < soalList.length) {
    renderSoal(current);
  } else {
    showFinish();
  }
}


/*******************************
   SHOW FINISH
********************************/
function showFinish() {
  const quizArea = document.getElementById("quiz-area");
  quizArea.innerHTML += `
    <div class="alert alert-info mt-3">
      ✅ Latihan Selesai! Skor akhir kamu: 
      <b>${skor}/${soalList.length}</b>
    </div>
    <button class="btn btn-warning mt-2" onclick="ulangLatihan()">
      🔄 Ulang Latihan
    </button>
  `;
}

/*******************************
   ULANG LATIHAN
********************************/
function ulangLatihan() {
  current = 0;
  skor = 0;
  // soalList = shuffle(soalList);
  
  document.getElementById("quiz-area").innerHTML = "";
  document.getElementById("skorText").innerText = "";

  renderSoal(current);
}


/***************
  START
***************/
// soalList = shuffle(soalList);
renderSoal(current);


// AUDIO
const audioBenar = new Audio("/assets/BENAR.mp3");
const audioSalah = new Audio("/assets/SALAH.mp3");

audioBenar.volume = 1;
audioSalah.volume = 1;

