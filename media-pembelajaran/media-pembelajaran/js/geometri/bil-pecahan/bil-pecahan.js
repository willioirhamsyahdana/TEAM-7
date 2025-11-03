/*******************************
  AUDIO
********************************/
const audioBenar = new Audio("/assets/BENAR.mp3");
const audioSalah = new Audio("/assets/SALAH.mp3");
audioBenar.volume = 1;
audioSalah.volume = 1;

/*******************************
   DAFTAR SOAL (PG)
********************************/

let soalList = [

  /********* LATIHAN 1 — PENJUMLAHAN (1–5) *********/
  {
    sub: "Latihan 1 — Penjumlahan Pecahan",
    soal: "1/2 + 1/4 = …",
    opsi: shuffle(["3/4", "2/4", "1/3", "1/4"]),
    jawaban: "3/4"
  },
  {
    sub: "Latihan 1 — Penjumlahan Pecahan",
    soal: "3/5 + 1/5 = …",
    opsi: shuffle(["4/5", "3/10", "2/5", "1/10"]),
    jawaban: "4/5"
  },
  {
    sub: "Latihan 1 — Penjumlahan Pecahan",
    soal: "2/3 + 1/6 = …",
    opsi: shuffle(["5/6", "3/9", "4/6", "1/3"]),
    jawaban: "5/6"
  },
  {
    sub: "Latihan 1 — Penjumlahan Pecahan",
    soal: "1/4 + 1/4 = …",
    img: "../assets/img/Kacang.png",
    opsi: shuffle(["2/4", "1/2", "1/8", "3/4"]),
    jawaban: "1/2"
  },
  {
    sub: "Latihan 1 — Penjumlahan Pecahan",
    soal: "3/8 + 2/8 = …",
    opsi: shuffle(["5/8", "1/2", "3/4", "4/8"]),
    jawaban: "5/8"
  },


  /********* LATIHAN 2 — PENGURANGAN (6–10) *********/
  {
    sub: "Latihan 2 — Pengurangan Pecahan",
    soal: "3/4 − 1/2 = …",
    opsi: shuffle(["1/4", "2/4", "3/8", "1/3"]),
    jawaban: "1/4"
  },
  {
    sub: "Latihan 2 — Pengurangan Pecahan",
    soal: "5/6 − 1/6 = …",
    opsi: shuffle(["4/6", "1/2", "3/6", "5/12"]),
    jawaban: "4/6"
  },
  {
    sub: "Latihan 2 — Pengurangan Pecahan",
    soal: "7/8 − 3/8 = …",
    opsi: shuffle(["4/8", "3/8", "1/2", "5/8"]),
    jawaban: "4/8"
  },
  {
    sub: "Latihan 2 — Pengurangan Pecahan",
    soal: "5/12 − 2/12 = …",
    opsi: shuffle(["3/12", "2/12", "1/12", "6/12"]),
    jawaban: "3/12"
  },
  {
    sub: "Latihan 2 — Pengurangan Pecahan",
    soal: "4/5 − 2/5 = …",
    opsi: shuffle(["2/5", "4/10", "1/3", "3/5"]),
    jawaban: "2/5"
  },


  /********* LATIHAN 3 — SOAL CERITA (11–15) *********/
  {
    sub: "Latihan 3 — Soal Cerita Pecahan",
    soal: "Ani memakan 1/4 bagian kue. Lalu ia memakan lagi 2/4 bagian. Berapa bagian kue yang ia makan?",
    img: "../assets/img/Yes.png",
    opsi: shuffle(["3/4", "2/4", "4/4", "1/2"]),
    jawaban: "3/4"
  },
  {
    sub: "Latihan 3 — Soal Cerita Pecahan",
    soal: "Indra memiliki 3/6 liter minyak. Ia gunakan 1/6 liter. Sisa minyak Indra adalah …",
    opsi: shuffle(["2/6", "1/2", "3/12", "5/6"]),
    jawaban: "2/6"
  },
  {
    sub: "Latihan 3 — Soal Cerita Pecahan",
    soal: "Mita punya 2/3 m kain. Ia membeli lagi 1/6 m. Sekarang kain Mita menjadi …",
    opsi: shuffle(["5/6", "1/2", "3/3", "7/6"]),
    jawaban: "5/6"
  },
  {
    sub: "Latihan 3 — Soal Cerita Pecahan",
    soal: "Budi makan 3/8 bagian pizza. Adiknya makan 2/8 bagian. Berapa bagian pizza yang dimakan?",
    opsi: shuffle(["5/8", "3/8", "1/2", "4/8"]),
    jawaban: "5/8"
  },
  {
    sub: "Latihan 3 — Soal Cerita Pecahan",
    soal: "Rina punya pita 4/5 m. Ia gunakan 2/5 m. Pita yang tersisa adalah …",
    opsi: shuffle(["2/5", "3/5", "1/5", "4/10"]),
    jawaban: "2/5"
  },
];

let current = 0;
let skor = 0;

/**************
  SHUFFLE
**************/
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

/**************
  RENDER
**************/
function renderSoal(i){
  const quizArea = document.getElementById("quiz-area");
  const item = soalList[i];

  let inputHTML = "";
  let imgHTML = "";

  if(item.img){
    imgHTML = `
      <div class="text-center mb-2">
        <img src="${item.img}" 
             alt="gambar" 
             style="max-width:180px; border-radius:8px;">
      </div>
    `;
  }

  if(item.opsi){
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
  }

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


/**************
  CEK
**************/
function cekJawaban(i) {
  const item = soalList[i];
  let selected = document.querySelector(`input[name="opsi-${i}"]:checked`);
  let container = document.getElementById(`soal-${i}`);

  if (!selected) {
    alert("Pilih jawaban dulu ya!");
    return;
  }

  if (selected.value === item.jawaban) {
    skor++;
    container.classList.add("benar-anim");
    document.getElementById(`feedback-${i}`).innerHTML =
      "<span class='text-success fw-bold'>✅ Benar!</span>";
    audioBenar.play();
  } else {
    container.classList.add("salah-anim");
    document.getElementById(`feedback-${i}`).innerHTML =
      `<span class='text-danger fw-bold'>❌ Salah</span><br>Jawaban: ${item.jawaban}`;
    audioSalah.play();
  }

  document.querySelector(`#soal-${i} button`).disabled = true;
  document.getElementById("skorText").innerText =
    `Skor = ${skor}/${soalList.length}`;

  current++;
  if (current < soalList.length) {
    renderSoal(current);
  } else {
    showFinish();
  }
}

/**************
  FINISH
**************/
function showFinish() {
  const quizArea = document.getElementById("quiz-area");
  quizArea.innerHTML += `
    <div class="alert alert-info mt-3">
      ✅ Latihan Selesai!<br>
      <b>Skor kamu: ${skor}/${soalList.length}</b>
    </div>
    <button class="btn btn-warning mt-2" onclick="ulangLatihan()">
      🔄 Ulang Latihan
    </button>
  `;
}

/**************
  RESET
**************/
function ulangLatihan() {
  current = 0;
  skor = 0;
  soalList = shuffle(soalList);

  document.getElementById("quiz-area").innerHTML = "";
  document.getElementById("skorText").innerText = "";

  renderSoal(current);
}


renderSoal(current);

function hitungPecahan() {
  const f1 = document.getElementById("f1").value.trim();
  const f2 = document.getElementById("f2").value.trim();
  const op = document.getElementById("op").value;
  const hasilEl = document.getElementById("hasilPecahan");
  const langkahEl = document.getElementById("langkahPecahan");

  // Validasi input
  if (!f1 || !f2 || !f1.includes("/") || !f2.includes("/")) {
    hasilEl.innerHTML = "⚠️ Masukkan pecahan dengan format benar, contoh: 1/2";
    langkahEl.innerHTML = "";
    return;
  }

  // Pisahkan pembilang & penyebut
  const [a, b] = f1.split("/").map(Number);
  const [c, d] = f2.split("/").map(Number);

  if (b === 0 || d === 0) {
    hasilEl.innerHTML = "❌ Penyebut tidak boleh nol!";
    langkahEl.innerHTML = "";
    return;
  }

  // Cari KPK penyebut
  const kpk = (x, y) => {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    return (x * y) / gcd(x, y);
  };
  const k = kpk(b, d);

  // Ubah ke penyebut sama
  const pemb1 = a * (k / b);
  const pemb2 = c * (k / d);

  // Operasi
  let hasilPembilang;
  if (op === "+") hasilPembilang = pemb1 + pemb2;
  else hasilPembilang = pemb1 - pemb2;

  // Sederhanakan hasil
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const f = gcd(Math.abs(hasilPembilang), k);
  const sederhanaA = hasilPembilang / f;
  const sederhanaB = k / f;

  // Tampilkan hasil
  hasilEl.innerHTML = `✅ Hasil = ${sederhanaA}/${sederhanaB}`;
  langkahEl.innerHTML = `
    KPK(${b}, ${d}) = ${k}<br>
    Ubah pecahan → ${a}/${b} = ${pemb1}/${k}, ${c}/${d} = ${pemb2}/${k}<br>
    Hitung: ${pemb1} ${op} ${pemb2} = ${hasilPembilang}<br>
    Sederhanakan → ${hasilPembilang}/${k} = ${sederhanaA}/${sederhanaB}
  `;

  // Render MathJax
  if (window.MathJax) MathJax.typeset();
}

