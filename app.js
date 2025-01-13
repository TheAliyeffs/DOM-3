const users = [
    { name: "Ramin", surname: "CodeFather", email: "TheCodeFather@example.com", phoneNumber: "+994502112121", city: "Baku" },
    { name: "Kenan", surname: "Aliyeff", email: "TheAliyeffs@example.com", phoneNumber: "+994500414141", city: "Lachin" },
    { name: "Poseidon", surname: "SeaGod", email: "TheSeaGod@example.com", phoneNumber: "+994505425757", city: "Sumgait" },
    { name: "Miri", surname: "PcKiller", email: "ThePcKiller@example.com", phoneNumber: "+994553220202", city: "Hazi Aslanov" },
    { name: "Seccad", surname: "./", email: "The./@example.com", phoneNumber: "+994555654555", city: "Zabrat" },
    { name: "Madina", surname: "FishCookie", email: "TheFishCookie@example.com", phoneNumber: "+994777776545", city: "Yasamal" },
    { name: "Nargiz", surname: "Punisher", email: "ThePunisher@example.com", phoneNumber: "+994514217161", city: "Mkr" },
  ];
  const tableBody = document.getElementById("userTableBody");

  function renderTable(data) {
    tableBody.innerHTML = ""; 
    data.forEach(user => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.surname}</td>
        <td>${user.email}</td>
        <td>${user.phoneNumber}</td>
        <td>${user.city}</td>
      `;
      tableBody.appendChild(row);
    });
  }

  function filterTable() {
    const nameFilter = document.getElementById("nameFilter").value.toLowerCase();
    const surnameFilter = document.getElementById("surnameFilter").value.toLowerCase();
    const emailFilter = document.getElementById("emailFilter").value.toLowerCase();
    const phoneFilter = document.getElementById("phoneFilter").value.toLowerCase();
    const cityFilter = document.getElementById("cityFilter").value.toLowerCase();

    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(nameFilter) &&
      user.surname.toLowerCase().includes(surnameFilter) &&
      user.email.toLowerCase().includes(emailFilter)    &&
      user.phoneNumber.toLowerCase().includes(phoneFilter)  &&
      user.city.toLowerCase().includes(cityFilter) 
    );

    renderTable(filteredUsers);
  }

  renderTable(users);

  document.getElementById("filterButton").addEventListener("click", filterTable);