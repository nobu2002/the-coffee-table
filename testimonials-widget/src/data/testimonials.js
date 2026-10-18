const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    quote: "The Coffee Table helped me get back on my feet when I needed it most. The Food Bank made such a difference for my family.",
    photo: "https://i.pravatar.cc/150?img=1",
    center: "Wyndham Vale"
  },
  {
    id: 2,
    name: "James T.",
    quote: "The Community Kitchen isn't just about food — it's about connection. I've made lifelong friends here.",
    photo: "https://i.pravatar.cc/150?img=3",
    center: "Wyndham Vale"
  },
  {
    id: 3,
    name: "Priya K.",
    quote: "The Sewing Classes gave me a new skill and a sense of purpose during a really tough time.",
    photo: "https://i.pravatar.cc/150?img=5",
    center: "Werribee"
  },
  {
    id: 4,
    name: "David L.",
    quote: "I was nervous to ask for help at first, but the team at the Food Bank made me feel completely welcome.",
    photo: "https://i.pravatar.cc/150?img=8",
    center: "Banksia"
  },
  {
    id: 5,
    name: "Amina H.",
    quote: "The Coffee Table Gathering became the highlight of my week. It really helped with my isolation.",
    photo: "https://i.pravatar.cc/150?img=10",
    center: "Wyndham Vale"
  },
  {
    id: 6,
    name: "Michael R.",
    quote: "Thanks to the referral advice desk, I finally understood what support I was actually eligible for.",
    photo: "https://i.pravatar.cc/150?img=12",
    center: "Reception Desk"
  },
  {
    id: 7,
    name: "Linh N.",
    quote: "The Parent and Carer Connection sessions gave me practical advice and a place to share what I was going through.",
    photo: "https://i.pravatar.cc/150?img=15",
    center: "Family Support Centre"
  },
  {
    id: 8,
    name: "Tom B.",
    quote: "The Community Kitchen meals are the best part of my week — good food and even better company.",
    photo: "https://i.pravatar.cc/150?img=20",
    center: "Community Kitchen Centre"
  },
  {
    id: 9,
    name: "Grace O.",
    quote: "I came for the Sewing Class and stayed for the community — everyone here genuinely cares.",
    photo: "https://i.pravatar.cc/150?img=25",
    center: "Skills Studio"
  },
  {
    id: 10,
    name: "Elena V.",
    quote: "The Coffee Table gave my family real, practical help exactly when we needed it most.",
    photo: "https://i.pravatar.cc/150?img=30",
    center: "Banksia"
  },
  {
    id: 11,
    name: "Robert C.",
    quote: "I didn't expect to find such genuine support just by walking into the Food Bank one afternoon.",
    photo: "https://i.pravatar.cc/150?img=33",
    center: "Banksia"
  },
  {
    id: 12,
    name: "Fatima Z.",
    quote: "The Community Kitchen gave my kids a warm meal and me a moment to just breathe.",
    photo: "https://i.pravatar.cc/150?img=36",
    center: "Community Kitchen Centre"
  },
  {
    id: 13,
    name: "Wei L.",
    quote: "Coming to the Coffee Table Gathering every week has genuinely changed how connected I feel to this area.",
    photo: "https://i.pravatar.cc/150?img=40",
    center: "Neighbourhood Space"
  },
  {
    id: 14,
    name: "Isabella G.",
    quote: "The Sewing Class instructor was so patient with me — I made my first proper piece of clothing here.",
    photo: "https://i.pravatar.cc/150?img=44",
    center: "Skills Studio"
  },
  {
    id: 15,
    name: "Ahmed S.",
    quote: "The advice desk pointed me toward support I didn't even know existed. It saved me weeks of confusion.",
    photo: "https://i.pravatar.cc/150?img=47",
    center: "Reception Desk"
  },
  {
    id: 16,
    name: "Olivia P.",
    quote: "As a new parent, the Parent and Carer Connection sessions made me feel so much less alone.",
    photo: "https://i.pravatar.cc/150?img=49",
    center: "Family Support Centre"
  },
  {
    id: 17,
    name: "Carlos M.",
    quote: "The Food Bank team treated me with dignity, not pity. That meant more than the groceries themselves.",
    photo: "https://i.pravatar.cc/150?img=51",
    center: "Main Support Hub"
  },
  {
    id: 18,
    name: "Hannah W.",
    quote: "I volunteer at the Community Kitchen now — it's the best decision I've made since moving here.",
    photo: "https://i.pravatar.cc/150?img=54",
    center: "Wyndham Vale"
  },
  {
    id: 19,
    name: "Youssef B.",
    quote: "The Coffee Table Gathering is the one thing on my calendar I genuinely look forward to every single week.",
    photo: "https://i.pravatar.cc/150?img=57",
    center: "Werribee"
  },
  {
    id: 20,
    name: "Mei T.",
    quote: "Learning to sew here gave me a skill I now use to make gifts for my whole family.",
    photo: "https://i.pravatar.cc/150?img=60",
    center: "Skills Studio"
  },


  {
    id: 21,
    name: "Daniel K.",
    quote: "I walked in for groceries and walked out with a friend. The team here genuinely makes you feel at home.",
    photo: "https://i.pravatar.cc/150?img=11",
    center: "Banksia"
  },
  {
    id: 22,
    name: "Sunita R.",
    quote: "The Community Kitchen lets me share a meal with people who understand what I'm going through.",
    photo: "https://i.pravatar.cc/150?img=16",
    center: "Community Kitchen Centre"
  },
  {
    id: 23,
    name: "Peter J.",
    quote: "After I retired I felt isolated. The Coffee Table Gathering gave me a reason to leave the house.",
    photo: "https://i.pravatar.cc/150?img=52",
    center: "Neighbourhood Space"
  },
  {
    id: 24,
    name: "Nadia F.",
    quote: "The Sewing Class gave me confidence I didn't know I had. I now help teach beginners.",
    photo: "https://i.pravatar.cc/150?img=23",
    center: "Skills Studio"
  },
  {
    id: 25,
    name: "Luke A.",
    quote: "The advice desk explained everything in plain language and never made me feel rushed.",
    photo: "https://i.pravatar.cc/150?img=59",
    center: "Reception Desk"
  },
  {
    id: 26,
    name: "Chloe D.",
    quote: "Parent and Carer Connection is where I learned I wasn't the only one struggling. That changed everything.",
    photo: "https://i.pravatar.cc/150?img=26",
    center: "Family Support Centre"
  },
  {
    id: 27,
    name: "Samuel O.",
    quote: "The Food Bank helped us through a rough few months, and nobody ever made us feel judged.",
    photo: "https://i.pravatar.cc/150?img=14",
    center: "Main Support Hub"
  },
  {
    id: 28,
    name: "Rina P.",
    quote: "I come for the community as much as the classes. Everyone here looks out for each other.",
    photo: "https://i.pravatar.cc/150?img=29",
    center: "Werribee"
  },
  {
    id: 29,
    name: "George H.",
    quote: "The volunteers at the Community Kitchen are the heart of this place. Warm food, warmer people.",
    photo: "https://i.pravatar.cc/150?img=53",
    center: "Wyndham Vale"
  },
  {
    id: 30,
    name: "Anita B.",
    quote: "The Coffee Table feels like an extended family. I'm grateful for every visit.",
    photo: "https://i.pravatar.cc/150?img=32",
    center: "Banksia"
  },
    {
    id: 31,
    name: "Jessica R.",
    quote: "I walked in not knowing anyone and walked out with a friend and a hot meal.",
    photo: "https://i.pravatar.cc/150?img=31",
    center: "Wyndham Vale",
  },
  {
    id: 32,
    name: "Hamza A.",
    quote: "The team treats everyone with respect. It never feels like charity, it feels like community.",
    photo: "https://i.pravatar.cc/150?img=32",
    center: "Werribee",
  },
  {
    id: 33,
    name: "Maria S.",
    quote: "The sewing class gave me something to look forward to every week.",
    photo: "https://i.pravatar.cc/150?img=33",
    center: "Tarneit",
  },
  {
    id: 34,
    name: "Ben C.",
    quote: "When things got tight, the Food Bank helped us through without any fuss.",
    photo: "https://i.pravatar.cc/150?img=34",
    center: "Banksia",
  },
  {
    id: 35,
    name: "Kavita D.",
    quote: "The parent group is where I finally felt understood. We swap tips and laugh a lot.",
    photo: "https://i.pravatar.cc/150?img=35",
    center: "Wyndham Vale",
  },
  {
    id: 36,
    name: "Oliver N.",
    quote: "I started volunteering at the kitchen and now I cook for thirty people on Fridays.",
    photo: "https://i.pravatar.cc/150?img=36",
    center: "Werribee",
  },
  {
    id: 37,
    name: "Zainab K.",
    quote: "They helped me understand my forms and which services I could use. It saved me so much stress.",
    photo: "https://i.pravatar.cc/150?img=37",
    center: "Tarneit",
  },
  {
    id: 38,
    name: "Lucas P.",
    quote: "Coffee Table gatherings are the highlight of my week. Good people and good conversation.",
    photo: "https://i.pravatar.cc/150?img=38",
    center: "Banksia",
  },
  {
    id: 39,
    name: "Tenzin W.",
    quote: "Everyone is welcome here, whatever language you speak. That means a lot to my family.",
    photo: "https://i.pravatar.cc/150?img=39",
    center: "Wyndham Vale",
  },
  {
    id: 40,
    name: "Emma J.",
    quote: "I came for the sewing and found a whole community. I can't recommend it enough.",
    photo: "https://i.pravatar.cc/150?img=40",
    center: "Werribee",
  },
    {
    id: 41,
    name: "Noah F.",
    quote: "I was nervous at my first Coffee Table gathering, but everyone made me feel like I belonged.",
    photo: "https://i.pravatar.cc/150?img=41",
    center: "Tarneit",
  },
  {
    id: 42,
    name: "Aisha M.",
    quote: "The Food Bank is run with so much kindness. I never felt judged.",
    photo: "https://i.pravatar.cc/150?img=42",
    center: "Banksia",
  },
  {
    id: 43,
    name: "Victor H.",
    quote: "Since I retired I'd barely left the house. The kitchen lunches changed that.",
    photo: "https://i.pravatar.cc/150?img=43",
    center: "Wyndham Vale",
  },
  {
    id: 44,
    name: "Sophie T.",
    quote: "I learned to hem my kids' school uniforms and saved a lot of money. Thank you!",
    photo: "https://i.pravatar.cc/150?img=44",
    center: "Werribee",
  },
  {
    id: 45,
    name: "Raj P.",
    quote: "The staff pointed me to a job program I didn't know about. I start next month.",
    photo: "https://i.pravatar.cc/150?img=45",
    center: "Tarneit",
  },
  {
    id: 46,
    name: "Lena K.",
    quote: "My daughter loves the family sessions and I've made friends with other parents.",
    photo: "https://i.pravatar.cc/150?img=46",
    center: "Banksia",
  },
  {
    id: 47,
    name: "Marcus D.",
    quote: "A hot meal, a chat and a bit of hope. That's what this place gives people.",
    photo: "https://i.pravatar.cc/150?img=47",
    center: "Wyndham Vale",
  },
  {
    id: 48,
    name: "Yuki S.",
    quote: "I'm new to the area and the Coffee Table was the first place that felt like home.",
    photo: "https://i.pravatar.cc/150?img=48",
    center: "Werribee",
  },
  {
    id: 49,
    name: "Fiona B.",
    quote: "The volunteers go above and beyond every single week.",
    photo: "https://i.pravatar.cc/150?img=49",
    center: "Tarneit",
  },
  {
    id: 50,
    name: "Omar R.",
    quote: "This community helped me through the hardest year of my life. I'll always be grateful.",
    photo: "https://i.pravatar.cc/150?img=50",
    center: "Banksia",
  },
  ];
  export default testimonials;

