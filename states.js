const states = [

    {
        name: "Andhra Pradesh",
        symbol: "🌾",
        description: "Known for Kuchipudi, beautiful temples, beaches and rich Telugu traditions.",
        image: "https://static.tripclap.com/uploads/story/850X450/1666953527-1666953527-2805e.webp"
    },

    {
        name: "Arunachal Pradesh",
        symbol: "🏔️",
        description: "A beautiful Himalayan state known for mountains, monasteries and tribal cultures.",
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/giant-budhha-statue-tawang-arunachal-pradesh-2-attr-hero?qlt=82&ts=1742178821432"
    },

    {
        name: "Assam",
        symbol: "🍃",
        description: "Famous for tea gardens, Bihu celebrations and the wildlife of Kaziranga.",
        image: "https://www.indianholiday.com/wordpress/wp-content/uploads/2026/06/Tourist-Attractions-in-Assam.jpg"
    },

    {
        name: "Bihar",
        symbol: "🛕",
        description: "A historically important state associated with Nalanda, Bodh Gaya and Madhubani art.",
        image: "https://www.mytourplans.com/storage/blogs/080623050339-nalanda-bihar.jpg"
    },

    {
        name: "Chhattisgarh",
        symbol: "🌳",
        description: "Known for forests, waterfalls, tribal traditions and Bastar's cultural heritage.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTATw4TyfkMkSXeE7V4XinKvEGbIeYNm-046leJbRvmI0eiO8UnAbPECDZ1&s=10"
    },

    {
        name: "Goa",
        symbol: "🏖️",
        description: "Famous for beaches, coastal culture, Portuguese heritage and colourful festivals.",
        image: "https://media2.thrillophilia.com/images/photos/000/039/882/original/1513670399_arambol_beach.jpg?w=753&h=450&dpr=1.5"
    },

    {
        name: "Gujarat",
        symbol: "🪔",
        description: "Famous for Garba, Rann of Kutch, handicrafts and vibrant traditions.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPb8fxbvKqjRtf_eX5akn10wpmqsgEQpaZppMNiyGWAiCurTrQirDMufo&s=10"
    },

    {
        name: "Haryana",
        symbol: "🐂",
        description: "Known for agriculture, sports, folk traditions and strong rural culture.",
        image: "https://trekgo.in/blog/places-to-visit-haryana/hero.jpg"
    },

    {
        name: "Himachal Pradesh",
        symbol: "🏔️",
        description: "A Himalayan state famous for hill stations, valleys, temples and natural beauty.",
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/manu-temple-manali-1-city-hero?qlt=82&ts=1726731244457"
    },

    {
        name: "Jharkhand",
        symbol: "🌲",
        description: "Known for forests, waterfalls, tribal culture and traditional paintings.",
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/jonha-falls-ranchi-jharkhand-new?qlt=82&ts=1727010871094"
    },

    {
        name: "Karnataka",
        symbol: "🏰",
        description: "Known for Hampi, Mysuru, traditional arts and a rich cultural heritage.",
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/2-vitthala-temple-complex-hampi-karnataka-city-hero?qlt=82&ts=1726721012585"
    },

    {
        name: "Kerala",
        symbol: "🌴",
        description: "Famous for backwaters, greenery, Onam, Kathakali and delicious cuisine.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuW_RkAZxzTvKTz_0S0W7uaT1yrix0LlFqm7wB0kki5DEVAcIjmJ9EIB_L&s=10"
    },

    {
        name: "Madhya Pradesh",
        symbol: "🐅",
        description: "The heart of India, famous for wildlife, temples, heritage and tribal art.",
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/mahakal%20mandir-ujjain-madhya-pradesh-hero?qlt=82&ts=1726670823380"
    },

    {
        name: "Maharashtra",
        symbol: "🏰",
        description: "Known for Mumbai, forts, Ganesh Chaturthi, Warli art and diverse cuisine.",
        image: "https://www.india-tours.com/images/states-images/maharashtra.jpg"
    },

    {
        name: "Manipur",
        symbol: "🌸",
        description: "Known for graceful Manipuri dance, Loktak Lake and rich traditions.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/04/d9/c5/one-of-the-famous-rings.jpg?w=1200&h=700&s=1"
    },

    {
        name: "Meghalaya",
        symbol: "💧",
        description: "Famous for waterfalls, caves, green hills and unique tribal traditions.",
        image: "https://encamp-s3b.s3.amazonaws.com/1781586811807_Wari%20Chora%2C%20Meghalaya%20%281%29.jpg.jpg"
    },

    {
        name: "Mizoram",
        symbol: "🌿",
        description: "A beautiful hill state known for bamboo crafts, hills and Mizo traditions.",
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-zokhawthar-champhai-mizoram-state-hero?qlt=82&ts=1726665940365"
    },

    {
        name: "Nagaland",
        symbol: "🎭",
        description: "Known for colourful tribal traditions and the famous Hornbill Festival.",
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/khonoma-village-kohima-nagaland-1-attr-hero?qlt=82&ts=1727012456749"
    },

    {
        name: "Odisha",
        symbol: "🛕",
        description: "Famous for Jagannath culture, temples, Pattachitra art and Rath Yatra.",
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-lingaraj-temple-bhubaneshwar-odisha-city-hero?qlt=82&ts=1742167192930"
    },

    {
        name: "Punjab",
        symbol: "🌾",
        description: "Known for Bhangra, Golden Temple, delicious food and vibrant culture.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWJIyz8ltaL1mvY5sXEojargF5wPiInDcAyu2AoPlAVwTGjxOsmuj9Bs0&s=10"
    },

    {
        name: "Rajasthan",
        symbol: "🏰",
        description: "Known for royal palaces, forts, deserts, folk music and colourful traditions.",
        image: "https://static.toiimg.com/photo/msid-80385966,width-96,height-65.cms"
    },

    {
        name: "Sikkim",
        symbol: "🏔️",
        description: "A peaceful Himalayan state famous for mountains, monasteries and natural beauty.",
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/lingdum-monastery-gangtok-sikkim-1-attr-hero?qlt=82&ts=1742166048831"
    },

    {
        name: "Tamil Nadu",
        symbol: "🛕",
        description: "Famous for magnificent temples, Bharatanatyam, Pongal and Tamil culture.",
        image: "https://www.tourmyindia.com/states/tamilnadu/image/tamilnadu-banner.webp"
    },

    {
        name: "Telangana",
        symbol: "🏛️",
        description: "Known for Hyderabad, Charminar, Bathukamma and rich Telugu traditions.",
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/thousand-pillar-temple-warangal-telangana-1-attr-hero?qlt=82&ts=1726653531894"
    },

    {
        name: "Tripura",
        symbol: "🌿",
        description: "Known for royal heritage, forests, tribal traditions and bamboo crafts.",
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/gunabati-group-of-temples-mahadeb-bari-tripura-2-state-hero?qlt=82&ts=1726651205282"
    },

    {
        name: "Uttar Pradesh",
        symbol: "🕌",
        description: "Known for the Taj Mahal, Varanasi, Awadhi cuisine and rich heritage.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b5/28/7c/chhota-imambara.jpg?w=600&h=500&s=1"
    },

    {
        name: "Uttarakhand",
        symbol: "🏔️",
        description: "Famous for Himalayan landscapes, pilgrimage sites, rivers and hill stations.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-SYxMv9rX6_5I9CZi-zMzDn4qga9rpVAMjU70q5j-F79DyXP4CEdCpzM&s=10"
    },

    {
        name: "West Bengal",
        symbol: "🎨",
        description: "Known for Durga Puja, Bengali cuisine, literature, art and Darjeeling.",
        image: "https://cdn.indianpanorama.in/festivals/rath-yatra-1783663448633.jpeg"
    }

];