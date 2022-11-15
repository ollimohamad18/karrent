var hargasewa = 0;
var jumlahukuran = 0;

function hitungharga() {
  if (kategori.value == 'Avanza') {
    hargasewa = 500000;
    jumlahukuran = ukuran.value;

    harga.value = jumlahukuran * hargasewa;
  } else if (kategori.value == 'Xenia') {
    hargasewa = 500000;
    jumlahukuran = ukuran.value;

    harga.value = jumlahukuran * hargasewa;
  } else if (kategori.value == 'APV') {
    hargasewa = 500000;
    jumlahukuran = ukuran.value;

    harga.value = jumlahukuran * hargasewa;
  } else if (kategori.value == 'Innova') {
    hargasewa = 700000;
    jumlahukuran = ukuran.value;

    harga.value = jumlahukuran * hargasewa;
  } else if (kategori.value == 'Elf Short 14 Seat') {
    hargasewa = 900000;
    jumlahukuran = ukuran.value;

    harga.value = jumlahukuran * hargasewa;
  } else if (kategori.value == 'Elf Long 18 Seat') {
    hargasewa = 1100000;
    jumlahukuran = ukuran.value;

    harga.value = jumlahukuran * hargasewa;
  } else if (kategori.value == 'Hiace Commuter 14 Seat') {
    hargasewa = 1100000;
    jumlahukuran = ukuran.value;

    harga.value = jumlahukuran * hargasewa;
  }
}
function allData() {
  table.innerHTML = ``;
  contactList = JSON.parse(localStorage.getItem('listItem')) ?? [];
  contactList.forEach(function (value, i) {
    var table = document.getElementById('table');

    table.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${value.name}</td>
                <td>${value.age}</td>
                <td>${value.address}</td>
                <td>${value.phone}</td>
                <td>${value.kategori}</td>
                <td>${value.ukuran} hari</td>
                <td>Rp. ${value.harga}</td>
                <td>
                <div class="btn-group me-2" role="group" aria-label="First group">
                  <button type="button" class="btn btn-outline-success" onclick="find(${value.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                    </svg>
                  </button>
                  <button type="button" class="btn btn-outline-danger" onclick="removeData(${value.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>`;
  });
}
function save() {
  contactList = JSON.parse(localStorage.getItem('listItem')) ?? [];

  var id;
  contactList.length != 0 ? contactList.findLast((item) => (id = item.id)) : (id = 0);

  if (document.getElementById('id').value) {
    contactList.forEach((value) => {
      if (document.getElementById('id').value == value.id) {
        (value.name = document.getElementById('name').value),
          (value.age = document.getElementById('age').value),
          (value.address = document.getElementById('address').value),
          (value.phone = document.getElementById('phone').value),
          (value.kategori = document.getElementById('kategori').value),
          (value.ukuran = document.getElementById('ukuran').value),
          (value.harga = document.getElementById('harga').value);
      }
    });

    document.getElementById('id').value = '';
  } else {
    var item = {
      id: id + 1,
      name: document.getElementById('name').value,
      age: document.getElementById('age').value,
      address: document.getElementById('address').value,
      phone: document.getElementById('phone').value,
      kategori: document.getElementById('kategori').value,
      ukuran: document.getElementById('ukuran').value,
      harga: document.getElementById('harga').value,
    };

    contactList.push(item);
  }

  localStorage.setItem('listItem', JSON.stringify(contactList));

  allData();
  document.getElementById('form').reset();
}
function find(id) {
  contactList = JSON.parse(localStorage.getItem('listItem')) ?? [];
  contactList.forEach(function (value) {
    if (value.id == id) {
      document.getElementById('id').value = value.id;
      document.getElementById('name').value = value.name;
      document.getElementById('age').value = value.age;
      document.getElementById('address').value = value.address;
      document.getElementById('phone').value = value.phone;
      document.getElementById('kategori').value = value.kategori;
      document.getElementById('ukuran').value = value.ukuran;
      document.getElementById('harga').value = value.harga;
    }
  });
}
function removeData(id) {
  contactList = JSON.parse(localStorage.getItem('listItem')) ?? [];
  contactList = contactList.filter(function (value) {
    return value.id != id;
  });

  localStorage.setItem('listItem', JSON.stringify(contactList));
  allData();
}
