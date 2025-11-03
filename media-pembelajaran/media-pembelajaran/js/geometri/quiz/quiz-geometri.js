/*******************************
   DATA SOAL
********************************/
let soalList = [
  {
    soal: `Sebuah topi ulang tahun berbentuk kerucut memiliki jari-jari alas 10 cm dan garis pelukis 13 cm. Hitunglah luas kertas minimal untuk membuat selimut topi (tanpa alasnya).`,
    opsi: ["130π cm²","100π cm²","65π cm²","113 cm²"],
    jawaban: "130π cm²"
  },
  {
    soal: `Sebuah wadah es krim berbentuk kerucut memiliki jari-jari alas 3 cm dan tinggi 12 cm. Berapa liter es krim yang dapat dimuat wadah tersebut? (1 liter = 1000 cm³)`,
    opsi: ["0,1 liter","0,12 liter","0,11 liter","0,15 liter"],
    jawaban: "0,11 liter"
  },
  {
    soal: `Sebuah kerucut memiliki jari-jari alas 6 cm dan tinggi 9 cm. Berapakah volume kerucut tersebut?`,
    opsi: ["324π cm³","108π cm³","216π cm³","162π cm³"],
    img :"../assets/img/69.jpeg",
    jawaban: "216π cm³"
  },
  {
    soal: `Sebuah kerucut memiliki jari-jari alas r=5 cm dan tinggi t=12 cm. Berapakah luas permukaan total kerucut?`,
    opsi: ["85π cm²","65π cm²","130π cm²","255 cm²"],
    jawaban: "85π cm²"
  },
  {
    soal: `Sebuah kerucut memiliki jari-jari alas r=7 cm dan garis pelukis 10 cm. Berapakah luas selimut kerucut tersebut?`,
    img: "../assets/img/710.jpeg",
    opsi: ["154 cm²","220 cm²","70π cm²","77π cm²"],
    jawaban: "77π cm²"
  }
];

/* Acak opsi */
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

    box.classList.remove("benar-anim","salah-anim");
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

renderSoal();
