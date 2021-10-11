const games = [
  {
    id: "Betrayal",
    Name: "Betrayal at house on the Hill",
    Link: "https://boardgamegeek.com/boardgame/10547/betrayal-house-hill",
    Length: 2,
    Complexity: 3,
    Min: 3,
    Max: 6,
    Horror: true,
    Adventure: true,
    Empire: false,
    Fantasy: false,
    Deduction: false,
    img: "https://cf.geekdo-images.com/lqmt2Oti_qJS65XqHcB8AA__itemrep/img/_iR9fdW4a3BsMh296ljKJj_EYOo=/fit-in/246x300/filters:strip_icc()/pic5146864.png",
  },
  {
    id: "Eschaton",
    Name: "Eschaton",
    Link: "https://boardgamegeek.com/boardgame/206299/eschaton",
    Length: 3,
    Complexity: 3,
    Min: 2,
    Max: 6,
    Horror: true,
    Adventure: false,
    Empire: true,
    Fantasy: true,
    Deduction: false,
    img: "https://cf.geekdo-images.com/eE6Om3bbua6Q3dvv6kSF2Q__itemrep/img/tXdoDRBlZavnh8fIozwdAquG4yc=/fit-in/246x300/filters:strip_icc()/pic3737787.jpg",
  },
  {
    id: "Great-Western-Trail",
    Name: "Great Western Trail",
    Link: "https://boardgamegeek.com/boardgame/193738/great-western-trail",
    Length: 4,
    Complexity: 4,
    Min: 2,
    Max: 4,
    Horror: false,
    Adventure: false,
    Empire: true,
    Fantasy: false,
    Deduction: false,
    img: "https://cf.geekdo-images.com/u1l0gH7sb_vnvDvoO_QHqA__itemrep/img/s3qAGoXVCK6gA8nsHDICfZ4Jc1c=/fit-in/246x300/filters:strip_icc()/pic4887376.jpg",
  },
  {
    id: "Sushi-Go",
    Name: "Sushi Go",
    Link: "https://boardgamegeek.com/boardgame/192291/sushi-go-party",
    Length: 1,
    Complexity: 1,
    Min: 2,
    Max: 8,
    Horror: false,
    Adventure: false,
    Empire: true,
    Fantasy: false,
    Deduction: false,
    img: "https://cf.geekdo-images.com/2f9uTicUSXkdPp2Yks6zFw__itemrep/img/Y_jPOWbp6_2qOzymSNIC6SZo4TE=/fit-in/246x300/filters:strip_icc()/pic5885689.jpg",
  },
  {
    id: "Diamant",
    Name: "Diamant",
    Link: "https://boardgamegeek.com/boardgame/15512/diamant",
    Length: 1,
    Complexity: 1,
    Min: 3,
    Max: 8,
    Horror: false,
    Adventure: true,
    Empire: false,
    Fantasy: false,
    Deduction: false,
    img: "https://cf.geekdo-images.com/_DWv97HbQ_hNeCM_Tcp2XQ__itemrep/img/KRnk6Rwz_5pfJ9Tv476k8F8rpn0=/fit-in/246x300/filters:strip_icc()/pic3581963.jpg",
  },
  {
    id: "Lords-of-Vegas",
    Name: "Lords of Vegas",
    Link: "https://boardgamegeek.com/boardgame/20437/lords-vegas",
    Length: 3,
    Complexity: 2,
    Min: 2,
    Max: 4,
    Horror: false,
    Adventure: false,
    Empire: true,
    Fantasy: false,
    Deduction: false,
    img: "https://cf.geekdo-images.com/-uYn413Wy8Vzm9wkuOajWg__itemrep/img/cxNjgjWpiQ3ATxJ6rShTlMYYzpk=/fit-in/246x300/filters:strip_icc()/pic774410.jpg",
  },
  {
    id: "Chinatown",
    Name: "Chinatown",
    Link: "https://boardgamegeek.com/boardgame/47/chinatown",
    Length: 2,
    Complexity: 2,
    Min: 3,
    Max: 5,
    Horror: false,
    Adventure: false,
    Empire: true,
    Fantasy: false,
    Deduction: false,
    img: "https://cf.geekdo-images.com/QnIOe-1wb8_zuxglKjAwOQ__itemrep/img/gCQ0_Oj-83CWRc11ERG4uC0iLHA=/fit-in/246x300/filters:strip_icc()/pic2037509.png",
  },
  {
    id: "Quacks-of-Quedlinburg",
    Name: "Quacks of Quedlinburg",
    Link: "https://boardgamegeek.com/boardgame/244521/quacks-quedlinburg",
    Length: 2,
    Complexity: 2,
    Min: 2,
    Max: 4,
    Horror: false,
    Adventure: false,
    Empire: true,
    Fantasy: true,
    Deduction: false,
    img: "https://cf.geekdo-images.com/pH5LgRL4mNRon-2NsSDb1Q__itemrep/img/qe9ywOTxtPr_n4DoXZgEY-C2qU0=/fit-in/246x300/filters:strip_icc()/pic6137509.png",
  },
  {
    id: "Powergrid",
    Name: "Powergrid",
    Link: "https://boardgamegeek.com/boardgame/2651/power-grid",
    Length: 3,
    Complexity: 3,
    Min: 2,
    Max: 6,
    Horror: false,
    Adventure: false,
    Empire: true,
    Fantasy: false,
    Deduction: false,
    img: "https://cf.geekdo-images.com/yd6LuatytHRhcFCxCf-EEg__imagepage/img/-tc_XLn5RXXaNfQHtlpf4BhyWPM=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4459753.jpg",
  },
  {
    id: "7-Wonders",
    Name: "7 Wonders",
    Link: "https://boardgamegeek.com/boardgame/68448/7-wonders",
    Length: 2,
    Complexity: 2,
    Min: 2,
    Max: 7,
    Horror: false,
    Adventure: false,
    Empire: true,
    Fantasy: false,
    Deduction: false,
    img: "https://cf.geekdo-images.com/RvFVTEpnbb4NM7k0IF8V7A__itemrep/img/F__zhk-OFDgFcMBysW2JlcYJADw=/fit-in/246x300/filters:strip_icc()/pic860217.jpg",
  },
  {
    id: "Code Names",
    Name: "Code Names",
    Link: "https://boardgamegeek.com/boardgame/178900/codenames",
    Length: 1,
    Complexity: 1,
    Min: 2,
    Max: 8,
    Horror: false,
    Adventure: false,
    Empire: true,
    Fantasy: false,
    Deduction: true,
    img: "https://cf.geekdo-images.com/F_KDEu0GjdClml8N7c8Imw__itemrep/img/e8zw8YQvQB8q8zfWkHQ48Ls920g=/fit-in/246x300/filters:strip_icc()/pic2582929.jpg",
  },
  {
    id: "Zombie-Dice",
    Name: "Zombie Dice",
    Link: "https://boardgamegeek.com/boardgame/62871/zombie-dice",
    Length: 1,
    Complexity: 1,
    Min: 2,
    Max: 8,
    Horror: true,
    Adventure: false,
    Empire: false,
    Fantasy: false,
    Deduction: false,
    img: "https://cf.geekdo-images.com/iPy584JMAJYrupqRdQp8gA__itemrep/img/-eoNaJ0RxYQ0vxngXn-HnMU_PY4=/fit-in/246x300/filters:strip_icc()/pic4991962.jpg",
  },
  {
    id: "Arkham-Horror-LCG",
    Name: "Arkham Horror LCG",
    Link: "https://boardgamegeek.com/boardgame/205637/arkham-horror-card-game",
    Length: 4,
    Complexity: 4,
    Min: 1,
    Max: 2,
    Horror: true,
    Adventure: true,
    Empire: false,
    Fantasy: false,
    Deduction: false,
    img: "https://cf.geekdo-images.com/B5F5ulz0UivNgrI9Ky0euA__itemrep/img/b7HiKWaGQKCuG-aU21-Izxt1ym4=/fit-in/246x300/filters:strip_icc()/pic3122349.jpg",
  },
  {
    id: "Decrypto",
    Name: "Decrypto",
    Link: "https://boardgamegeek.com/boardgame/225694/decrypto",
    Length: 2,
    Complexity: 2,
    Min: 3,
    Max: 8,
    Horror: false,
    Adventure: false,
    Empire: false,
    Fantasy: false,
    Deduction: true,
    img: "https://cf.geekdo-images.com/hHZWXnUTMYDd_KTAM6Jwlw__itemrep/img/9Kx83YFeiA7DeSjMxyfmv6-cGC8=/fit-in/246x300/filters:strip_icc()/pic3759421.jpg",
  },
  {
    id: "Dominion",
    Name: "Dominion",
    Link: "https://boardgamegeek.com/boardgame/36218/dominion",
    Length: 2,
    Complexity: 2,
    Min: 2,
    Max: 4,
    Horror: false,
    Adventure: false,
    Empire: true,
    Fantasy: true,
    Deduction: false,
    img: "https://cf.geekdo-images.com/j6iQpZ4XkemZP07HNCODBA__itemrep/img/_QiaiFj-LGZoqdatE-wVqNaYWx8=/fit-in/246x300/filters:strip_icc()/pic394356.jpg",
  },
  {
    id: "Ticket-to-Ride",
    Name: "Ticket to Ride",
    Link: "https://boardgamegeek.com/boardgame/9209/ticket-ride",
    Length: 2,
    Complexity: 2,
    Min: 2,
    Max: 5,
    Horror: false,
    Adventure: false,
    Empire: true,
    Fantasy: false,
    Deduction: false,
    img: "https://cf.geekdo-images.com/ZWJg0dCdrWHxVnc0eFXK8w__itemrep/img/iiTIuTtuneM3tbDCjALecsgyizA=/fit-in/246x300/filters:strip_icc()/pic38668.jpg",
  },
  {
    id: "Carcassonne",
    Name: "Carcassonne",
    Link: "https://boardgamegeek.com/boardgame/822/carcassonne",
    Length: 2,
    Complexity: 2,
    Min: 2,
    Max: 5,
    Horror: false,
    Adventure: false,
    Empire: true,
    Fantasy: true,
    Deduction: false,
    img: "https://cf.geekdo-images.com/Z3upN53-fsVPUDimN9SpOA__itemrep/img/sT0kjr-Klona2rygvD8kURJgqdU=/fit-in/246x300/filters:strip_icc()/pic2337577.jpg",
  },
  {
    id: "Secret-Hitler",
    Name: "Secret Hitler",
    Link: "https://boardgamegeek.com/boardgame/188834/secret-hitler",
    Length: 2,
    Complexity: 1,
    Min: 5,
    Max: 10,
    Horror: false,
    Adventure: false,
    Empire: false,
    Fantasy: false,
    Deduction: true,
    img: "https://cf.geekdo-images.com/rAQ3hIXoH6xDcj41v9iqCg__itemrep/img/EQ1jwjZYnucHSizVlzHE8DiyEQI=/fit-in/246x300/filters:strip_icc()/pic5164305.jpg",
  },
  {
    id: "Mysterium",
    Name: "Mysterium",
    Link: "https://boardgamegeek.com/boardgame/181304/mysterium",
    Length: 2,
    Complexity: 2,
    Min: 2,
    Max: 7,
    Horror: false,
    Adventure: false,
    Empire: false,
    Fantasy: false,
    Deduction: true,
    img: "https://cf.geekdo-images.com/wfeAiLK5n5hD1omhnlYLLA__itemrep/img/vp5yky_tCOAF26AvLGzH7LLB-vc=/fit-in/246x300/filters:strip_icc()/pic2601683.jpg",
  },
  {
    id: "White-Chaple",
    Name: "Letters from White Chaple",
    Link: "https://boardgamegeek.com/boardgame/59959/letters-whitechapel",
    Length: 3,
    Complexity: 3,
    Min: 2,
    Max: 6,
    Horror: false,
    Adventure: false,
    Empire: false,
    Fantasy: false,
    Deduction: true,
    img: "https://cf.geekdo-images.com/H3G1t-oIjN9gEVVI21FoVg__itemrep/img/5ARXTgT-m-cjWOcaxGX9KMXMbxM=/fit-in/246x300/filters:strip_icc()/pic1545654.jpg",
  },
  {
    id: "Resistance",
    Name: "The Resistance",
    Link: "https://boardgamegeek.com/boardgame/41114/resistance",
    Length: 1,
    Complexity: 1,
    Min: 5,
    Max: 10,
    Horror: false,
    Adventure: false,
    Empire: false,
    Fantasy: false,
    Deduction: true,
    img: "https://cf.geekdo-images.com/cAPTkL2BR3snLO71dkH8rw__itemrep/img/B-g9_MGH_PcCOh8tQ6IMKyJq6Xw=/fit-in/246x300/filters:strip_icc()/pic2576459.jpg",
  },
  {
    id: "Survive",
    Name: "Survive: Escape from Atlantis",
    Link: "https://boardgamegeek.com/boardgame/2653/survive-escape-atlantis",
    Length: 2,
    Complexity: 2,
    Min: 2,
    Max: 4,
    Horror: false,
    Adventure: true,
    Empire: false,
    Fantasy: false,
    Deduction: false,
    img: "https://cf.geekdo-images.com/0M2ck50-GanxBWfOHUZ64A__itemrep/img/uEIfyIeR0j4HH1czE9S6wKny8pQ=/fit-in/246x300/filters:strip_icc()/pic1300182.png",
  },
]; //require("../json/bgdb_arr.json");

let results = [];

document.getElementById("qForm").onsubmit = function () {
  prefLengthMin = document.querySelector('input[name = "q1"]:checked').value;
  //prefLengthMax = 4;
  prefComplexityMin = document.querySelector(
    'input[name = "q2"]:checked'
  ).value;
  //prefComplexityMax = 3;
  prefPlayers = document.getElementById("playnum").value;
  genreSelect = document.getElementById("genre-switch").checked;
  horrorPref = document.getElementById("horror").checked;
  adventurePref = document.getElementById("adventure").checked;
  empirePref = document.getElementById("empire").checked;
  fantasyPref = document.getElementById("fantasy").checked;
  deductionPref = document.getElementById("deduction").checked;

  results = games.filter(
    (e) => e.Length == prefLengthMin //&& e.Length <= prefLengthMax
  );
  console.log(results);
  results = results.filter(
    (e) => e.Complexity == prefComplexityMin //&& e.Complexity <= prefComplexityMax
  );
  console.log(results);
  results = results.filter((e) => e.Min <= prefPlayers && e.Max >= prefPlayers);
  console.log(results);

  if (genreSelect) {
    results = results.filter(
      (e) =>
        (e.Horror == horrorPref && horrorPref) ||
        (e.Adventure == adventurePref && adventurePref) ||
        (e.Empire == empirePref && empirePref) ||
        (e.Fantasy == fantasyPref && fantasyPref) ||
        (e.Deduction == deductionPref && deductionPref)
    );
  }

  console.log(`Length: ${prefLengthMin}`);
  console.log(`Complexity: ${prefComplexityMin}`);
  console.log(`Players: ${prefPlayers}`);
  console.log(`Genre Filter: ${genreSelect}`);
  console.log(`Horror: ${horrorPref}`);
  console.log(`Adv: ${adventurePref}`);
  console.log(`Emp: ${empirePref}`);
  console.log(`Fantasy: ${fantasyPref}`);
  console.log(`Deduct: ${deductionPref}`);
  console.log(results);

  let showRes = document.getElementById("results");
  let x = document.createElement("p");

  if (results.length) {
    showRes.innerHTML = "<h2>Results:</h2>";
    for (let i = 0; i < results.length; i++) {
      showRes.innerHTML += `
     <div class="row">
        <div class="col-sm "><img src=${results[i].img} class="mx-auto d-block" width="50%"></div>
        <div class="col textBox">
          <h3>${results[i].Name}</h3>
          <a href=${results[i].Link} target="_blank">BGG Link</a>
          <p>Length: ${results[i].Length}/4</p>
          <p>Complexity: ${results[i].Complexity}/4</p>
          <p>Players: ${results[i].Min}-${results[i].Max}</p>
        </div>
     </div>
    `;
    }
  } else {
    showRes.innerHTML =
      "<h2>No Results...</h2> <p>Nothing in our database yet! Try disabling Flavor Filter or change parameters</p>";
  }
  return false;
  function goToByScroll() {
    $("html,body").animate({ scrollTop: $("#results").offset().top }, "slow");
    goToByScroll();
  }
};
