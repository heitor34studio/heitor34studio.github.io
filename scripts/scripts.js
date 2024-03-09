/*
  SUMÁRIO/ÍNDICE: 

  1.funções idioma -->
  2.funções criptografar --> 
  3.efeito matrix no fundo e animações.
*/

/*
  1.funções idioma
*/



function jp() {
  //traduz os conteúdos para japonês
  document.getElementById('input').placeholder = '入力してください：';
  document.getElementById('containerSectionP2').innerHTML = '<i class="fa-solid fa-circle-exclamation headerFlagsArrow" style="margin-right: 5px;"></i><strong class="destaque">低い文字のみで、アクセント付きの文字</strong>使わないでください';
  document.getElementsByClassName('descriptografar')[0].innerHTML = '復号化';
  document.getElementsByClassName('criptografar')[0].innerHTML = '暗号化';
  document.getElementById('containerSectionH1').innerHTML = 'メッセージが<strong class="destaque">見つかりません!</strong>';
  document.getElementById('containerSectionP').innerHTML = '暗号化または復号化したいテキストを入力してください。';
  document.getElementById('footerP').innerHTML = 'Heitor D.B. (Renthon) - 34studio によって開発されました。';
}

function us() {
  //traduz os conteúdos para inglês
  document.getElementById('input').placeholder = 'Enter your Text:';
  document.getElementById('containerSectionP2').innerHTML = '<i class="fa-solid fa-circle-exclamation headerFlagsArrow" style="margin-right: 5px;"></i>Only<strong class="destaque"> LOWER and NO ACCENT</strong> letters.';
  document.getElementsByClassName('descriptografar')[0].innerHTML = 'Decrypt';
  document.getElementsByClassName('criptografar')[0].innerHTML = 'Encrypt';
  document.getElementById('containerSectionH1').innerHTML = '<strong class="destaque">No</strong> messages found!';
  document.getElementById('containerSectionP').innerHTML = 'Type in a text that you want to Encrypt or Decrypt.';
  document.getElementById('footerP').innerHTML = 'Developed by Heitor D. B. (Renthon)- 34studio.';
}

function controlarDropdown() {
  const ul = document.querySelector('.headerFlagsDropdown');
  const i = document.querySelector('.headerFlagsArrow');
  if (window.getComputedStyle(ul).opacity === '0' || window.getComputedStyle(ul).opacity === '') {
    ul.style.marginTop = '80px';
    ul.style.opacity = '1';
    i.style.transform = 'rotate(180deg)';
  } else {
    ul.style.marginTop = '-160px';
    ul.style.opacity = '0';
    i.style.transform = 'rotate(0deg)';
  }
}

document.querySelectorAll('.flagOption').forEach(function(flag) {
  flag.addEventListener('click', function() {
    //alterando a bandeira principal para a bandeira clicada
    var bandeiraAtual = document.getElementById('first').getAttribute('src');
    var bandeiraDoBotaoClicado = this.getAttribute('src');
    document.getElementById('first').setAttribute('src', bandeiraDoBotaoClicado);
    this.setAttribute('src', bandeiraAtual);

    switch (bandeiraDoBotaoClicado) {
      case "assets/flag-us.png":
        return criarCookieIdioma('us');
      case "assets/flag-jp.png":
        return criarCookieIdioma('jp');
      case "assets/flag-br.png":
        return criarCookieIdioma('br');
      default:
        console.log("País não reconhecido");
    }
  });
});


function criarCookieIdioma(valor) {
  var data = new Date();
  data.setTime(data.getTime() + (30 * 24 * 60 * 60 * 1000));
  var expires = "expires=" + data.toUTCString();
  document.cookie = "lang=" + valor + ";" + expires + ";path=/";
  location.reload();
}

function atualizarIdiomaAutomaticamente() {
  var nomeIgual = "lang=";
  var cookies = decodeURIComponent(document.cookie).split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf(nomeIgual) === 0) {
      var lang = cookie.substring(nomeIgual.length);
      switch (lang) {
        case "us":
          document.getElementById('first').src = 'assets/flag-us.png';
          document.getElementById('second').src = 'assets/flag-br.png';
          return us();
        case "jp":
          document.getElementById('first').src = 'assets/flag-jp.png';
          document.getElementById('third').src = 'assets/flag-br.png';
          return jp();
        case "br":
          return document.cookie = "lang=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        default:
          console.log("País não reconhecido");
      }
    }
  }
  return "";
}

atualizarIdiomaAutomaticamente();



/*
  2.funções criptografar 
*/



function criptografarDesencriptografar(string, method) {
  var matrizCodigo;
  if (method) {
    matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
  } else {
    matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  }

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (string.includes(matrizCodigo[i][0])) {
      string = string.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return string;
}

function copiar() {
  var copyText = document.getElementById("resultFinal");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  if (navigator.clipboard) {
    navigator.clipboard.writeText(copyText.innerHTML).then(function() {
      alert("Texto copiado com sucesso!");
    }, function(err) {
      console.error('Failed to copy text: ', err);
      alert("Falha ao copiar o texto.");
    });
  } else {
    alert("Seu navegador não suporta a API Clipboard.");
  }
}

document.querySelectorAll(".containerSectionDivBtn").forEach(function(btn) {
  btn.addEventListener("click", function() {
    let txt = document.getElementById('input').value;
    if (txt == '') {
      return;
    } else {
      txt = txt.toLowerCase();
    }
    let txtCriptografado;
    if (this.classList.contains('criptografar')) {
      txtCriptografado = criptografarDesencriptografar(txt, method = false);
    } else {
      txtCriptografado = criptografarDesencriptografar(txt, method = true);
    }

    document.querySelector(".containerResult").innerHTML = `<textarea id="resultFinal" class="containerSectionTextarea" placeholder="Digite seu Texto" maxlength="1400" style="word-wrap:break-word; overflow-wrap:break-word; width: 90%;" disabled value="${txtCriptografado}">${txtCriptografado}</textarea><button class="Btn copiar" onclick="copiar()">Copiar</button>`;
    
    document.getElementById("input").value = '';
    document.querySelectorAll('.containerSectionDivBtn').forEach(function(btn) {
      btn.disabled = true;
    });
  });
});

document.getElementById('input').addEventListener('input', function() {
  if (this.value.trim().length > 0) {
    document.querySelectorAll('.containerSectionDivBtn').forEach(function(btn) {
      btn.disabled = false;
    });
  } else {
    document.querySelectorAll('.containerSectionDivBtn').forEach(function(btn) {
      btn.disabled = true;
    });
  }
});



/*
  3.efeito matrix no fundo e animações
*/



const canvas = document.getElementById('canv');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
let cols = Math.floor(window.innerWidth / 20) + 1;
let ypos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, canvas.width, canvas.height);

var focusColor = '#fff';

document.getElementById('input').addEventListener("focus", function() {
  focusColor = '#a40606';
  document.documentElement.style.setProperty('--primary', '#a40606');
  document.getElementById('logo').style.setProperty('filter','grayscale(0%)');
  if(document.querySelector('.containerResultImg')) {
    document.querySelector('.containerResultImg').style.filter = 'brightness(1.4)';
  }
});

document.getElementById('input').addEventListener("blur", function() {
  focusColor = '#fff';
  document.documentElement.style.setProperty('--primary', 'gray');
  document.getElementById('logo').style.setProperty('filter','grayscale(100%)');
  if(document.querySelector('.containerResultImg')) {
    document.querySelector('.containerResultImg').style.filter = '';
  }
});

function matrix() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  if (canvas.width !== w) {
    canvas.width = w;
    cols = Math.floor(window.innerWidth / 20) + 1;
    ypos = Array(cols).fill(0);
  }
  if (canvas.height !== h) {
    canvas.height = h;
  }

  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = focusColor;
  ctx.font = '14pt monospace';

  ypos.forEach((y, ind) => {
    const katakanaChars = [
      'ア', 'イ', 'ウ', 'エ', 'オ',
      'カ', 'キ', 'ク', 'ケ', 'コ',
      'ラ', 'リ', 'ル', 'レ', 'ロ',
      'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
      'タ', 'チ', 'ツ', 'テ', 'ト',
      'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
      'マ', 'ミ', 'ム', 'メ', 'モ',
      'サ', 'シ', 'ス', 'セ', 'ソ',
      'ヤ', 'ヨ', 'ユ',
      'ワ', 'ヲ', 'ン',
    ];
    const randomIndex = Math.floor(Math.random() * katakanaChars.length);
    const katakanaChar = katakanaChars[randomIndex];
    const text = katakanaChar;
    const x = ind * 20;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
  });
}

setInterval(matrix, 50);
