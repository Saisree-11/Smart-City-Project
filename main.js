// site.js - shared JS used by all pages
// Populates attractions, hotels, food, events, and AI demo.

// ---------- ATTRACTION DATA (LOCAL IMAGES) ----------
// ------- SIGN UP -------
function signupUser() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("Please fill all fields.");
    return;
  }

  // For now just store locally (no backend yet)
  localStorage.setItem("user", JSON.stringify({name, email, password}));

  alert("Account created successfully!");
  window.location.href = "login.html";
}

// ------- LOGIN -------
function loginUser() {
  let email = document.getElementById("login_email").value;
  let password = document.getElementById("login_password").value;

  let user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("No account found! Please sign up first.");
    return;
  }

  if (user.email === email && user.password === password) {
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Incorrect email or password.");
  }
}

const ATTRACTIONS = [
  { id:1, name:"Tiger Hill", 
    description:"Famous sunrise viewpoint with Kanchenjunga vistas.", 
    category:"Viewpoint", 
    image:"./tigerhills.webp", 
    best_time:"04:00am - 07:00pm" 
  },

  { id:2, name:"Batasia Loop", 
    description:"Scenic railway loop & garden with war memorial.", 
    category:"Historic", 
    image:"./batasia loop.jpg", 
    best_time:"08:00am - 18:00pm" 
  },

  { id:3, name:"Darjeeling Himalayan Railway", 
    description:"Toy train ride — UNESCO heritage experience.", 
    category:"Heritage", 
    image:"./toy.webp", 
    best_time:"09:00am - 17:00pm" 
  },

  { id:4, name:"Padmaja Naidu Zoo", 
    description:"High-altitude zoo with rare Himalayan species.", 
    category:"Zoo", 
    image:"./park.webp", 
    best_time:"09:00am - 16:00pm" 
  },

  { id:5, name:"Himalayan Mountaineering Institute", 
    description:"Museum & mountaineering exhibits.", 
    category:"Museum", 
    image:"./museum.jpg", 
    best_time:"10:00am - 16:00pm" 
  },

  { id:6, name:"Ghoom Monastery", 
    description:"Historic monastery with peaceful ambience.", 
    category:"Spiritual", 
    image:"./ghoom.jpg", 
    best_time:"08:00am - 17:00pm" 
  },

  { id:7, name:"Japanese Peace Pagoda", 
    description:"Serene pagoda with panoramic views.", 
    category:"Spiritual", 
    image:"./pagoda.webp", 
    best_time:"06:00am - 18:00pm" 
  },

  { id:8, name:"Tea Gardens", 
    description:"Lush tea estates — tours & tastings.", 
    category:"Nature", 
    image:"./tea.jpg", 
    best_time:"09:00am - 17:00pm" 
  },

  { id:9, name:"Rock Garden & Ganga Maya Park", 
    description:"Terraced waterfall gardens and picnic spots.", 
    category:"Nature", 
    image:"./ride.jpg", 
    best_time:"09:00am - 18:00pm" 
  },

  { id:10, name:"Observatory Hill", 
    description:"Historic hilltop with temples and views.", 
    category:"Viewpoint", 
    image:"./hill.jpg", 
    best_time:"07:00am - 19:00pm" 
  }
];


// ---------- HOTELS ----------
const HOTELS = [
  { name:"Mountain View Resort", category:"Resort", rating:4.8, image:"./h1.webp" },
  { name:"Tea-Garden Homestay", category:"Homestay", rating:4.5, image:"./h2.jpg" },
  { name:"Riverside Boutique", category:"Boutique", rating:4.3, image:"./h3.webp" },
  { name:"Heritage Grand", category:"Luxury", rating:4.9, image:"./h4.jpg" },
  { name:"Budget Lodge", category:"Budget", rating:4.0, image:"./h5.jpg" }
];


// ---------- FOOD ----------
const FOOD = [
  { name:"Momos", desc:"Steamed or fried dumplings — a Himalayan staple.", image:"./f1.jpg", },
  { name:"Thukpa", desc:"Hearty noodle soup — perfect on chilly mornings.", image:"./f2.jpg" },
   { name:"Traditional Nepali Thali", desc:"Thakali thali is a traditional Nepali meal that derives its name literally from the Thak Khola valley in Nepal’s Mustang district", image:"./f5.jpg" },
    { name:"Naga Cuisine", desc:"The Naga cuisine is famous for its meats and fish which are often cooked through the process of smoking, fermenting etc. A grand Naga thali comprises fermented rice served with chicken or pork, also with fermented bamboo shoots, achaar and a sweet dish.", image:"./f6.jpg" },
  { name:"Churpee (local cheese)", desc:"Yak-milk cheese — try in tea or snacks.", image:"./f3.jpg" },
  { name:"Alu Dum", desc:"Spiced potato curry — popular in Darjeeling menus.", image:"./f4.jpg" }
];


// ---------- EVENTS ----------
const EVENTS = [
  { title:"Tea Festival", date:"2026-05-12", place:"Tea Estate Grounds", image:"./a1.jpg" },
  { title:"Losar Festival", date:"Every year once", place:"Temple", image:"./a4.jpg" },
  { title:"Himalayan Cultural Night", date:"2026-02-15", place:"Town Amphitheatre", image:"./a2.jpg" },
  { title:"Toy Train Heritage Ride", date:"Weekly", place:"Darjeeling Railway", image:"./a3.jpg" }

];


// ---------- HELPERS ----------
function mkCardHtml(item, extraHtml="") {
  return `
    <div class="card">
      <img src="${item.image}" alt="${item.name || item.title}">
      <h3>${item.name || item.title}</h3>
      <p>${item.description || item.desc || ""}</p>
      ${extraHtml}
    </div>
  `;
}


// ---------- POPULATE ATTRACTIONS ----------
function populateAttractionsOnHome() {
  const el = document.getElementById('attractionGrid');
  if (!el) return;
  el.innerHTML = "";
  ATTRACTIONS.forEach(a => {
    const card = document.createElement('div');
    card.className = "card";
    card.innerHTML = `
      <img src="${a.image}" alt="${a.name}">
      <h3>${a.name}</h3>
      <p>${a.description}</p>
      <p><b>Category:</b> ${a.category}</p>
      <p><b>Best time to visit:</b> ${a.best_time}</p>
    `;
    el.appendChild(card);
  });
}


// ---------- POPULATE HOTELS ----------
function populateHotels() {
  const el = document.getElementById('hotelsGrid');
  if (!el) return;
  el.innerHTML = "";
  HOTELS.forEach(h => {
    const card = document.createElement('div');
    card.className = "card";
    card.innerHTML = `
      <img src="${h.image}" alt="${h.name}">
      <h3>${h.name}</h3>
      <p>Category: ${h.category}</p>
      <p>Rating: ${"★".repeat(Math.round(h.rating))} (${h.rating})</p>
    `;
    el.appendChild(card);
  });
}


// ---------- POPULATE FOOD ----------
function populateFood() {
  const el = document.getElementById('foodGrid');
  if (!el) return;
  el.innerHTML = "";
  FOOD.forEach(f => {
    const card = document.createElement('div');
    card.className = "card";
    card.innerHTML = `
      <img src="${f.image}" alt="${f.name}">
      <h3>${f.name}</h3>
      <p>${f.desc}</p>
    `;
    el.appendChild(card);
  });
}


// ---------- POPULATE EVENTS ----------
function populateEvents() {
  const el = document.getElementById('eventsGrid');
  if (!el) return;
  el.innerHTML = "";
  EVENTS.forEach(ev => {
    const card = document.createElement('div');
    card.className = "card";
    card.innerHTML = `
      <img src="${ev.image}" alt="${ev.title}">
      <h3>${ev.title}</h3>
      <p><b>Date:</b> ${ev.date}</p>
      <p><b>Place:</b> ${ev.place}</p>
    `;
    el.appendChild(card);
  });
}


// ---------- AI RECOMMENDATIONS ----------
function setupAIDemo() {
  const btn = document.getElementById('aiSuggestBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const timeOfDay = document.getElementById('timeOfDay').value;
    const pref = document.getElementById('pref').value;
    const out = document.getElementById('aiCards');
    out.innerHTML = "";

    const recs = [];

    if (pref === 'scenic') {
      recs.push({title:"Tiger Hill Sunrise", desc:"Best at dawn.", image:"./tigerhills.webp"});
      recs.push({title:"Batasia Loop", desc:"Great garden views.", image:"./batasia loop.jpg"});
    } 
    else if (pref === 'culture') {
      recs.push({title:"Toy Train Heritage Ride", desc:"World Heritage train.", image:"./toy.webp"});
      recs.push({title:"Ghoom Monastery", desc:"Peaceful spiritual place.", image:"./ghoom.jpg"});
    } 
    else {
      recs.push({title:"Tea Garden Tour", desc:"Tea tasting + walks.", image:"./tea.jpg"});
      recs.push({title:"Rock Garden", desc:"Waterfalls + greenery.", image:"./ride.jpg"});
    }

    if (timeOfDay === 'morning') {
      recs.unshift({title:"Sunrise Walk", desc:"Perfect for photography.", image:"./tigerhills.webp"});
    }

    recs.forEach(r => {
      const html = document.createElement('div');
      html.className = 'card';
      html.innerHTML = `
        <img src="${r.image}" alt="${r.title}">
        <h3>${r.title}</h3>
        <p>${r.desc}</p>
      `;
      out.appendChild(html);
    });
  });
}


// ---------- DOCUMENT READY ----------
document.addEventListener('DOMContentLoaded', () => {
  populateAttractionsOnHome();
  populateHotels();
  populateFood();
  populateEvents();
  setupAIDemo();
});
