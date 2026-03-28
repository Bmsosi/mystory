import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      about: "About",
      journey: "Journey",
      travels: "Travels",
      contact: "Contact",
      home: "Home",
      gallery: "Gallery",
      journal: "Journal",
      projects: "Projects",
    },
    projects: {
      title: "Featured Projects",
      subtext:
        "A selection of my recent work in software development and design.",
      viewProject: "View Details",
      list: [
        {
          title: "Guardian",
          date: "2026 – present",
          role: "Full-stack Accessibility Lead",
          desc: "Guardian is built on Independence (spatial audio + voice guidance for locating indoor items), Understanding Scene Describer narrating every scene, Smart Reminders + instant help). The VoiceOver-first Swift frontend pairs with a Java backend and shared Swift services so visually impaired individuals can find objects",
          tech: ["Swift & Java", "Swift UI & UIKit", "Gemini & YOLO Models"],
          link: "https://guardian-mu-three.vercel.app/",
        },
        {
          title: "Umma",
          date: "March 2024",
          role: "Full-stack Developer",
          desc: "A muslim community support website that provides resources and connections for East African Muslims living in Vancouver.",
          tech: ["React JS", "JavaScript", "CSS"],
        },
        {
          title: "PropEase",
          date: "September 2025",
          role: "Full-stack Developer & Project Manager",
          desc: "A comprehensive rental management system bridging the communication gap between tenants and landlords.",
          tech: ["React JS", "JavaScript", "Tailwind CSS"],
          link: "https://propease-v1-app.vercel.app/",
        },
        {
          title: "Luma",
          date: "April 2025",
          role: "Frontend Developer",
          desc: "Interactive, beginner-friendly games focused on accessibility and engaging user experiences.",
          tech: ["HTML5", "JavaScript", "Tailwind CSS"],
        },
        {
          title: "SafeMind",
          date: "December 2024",
          role: "UI/UX Designer",
          desc: "Web and mobile design for international students' mental health, connecting them with culturally sensitive creators and experts.",
          tech: ["Figma", "Adobe Photoshop", "Illustrator"],
        },
      ],
    },
    testimonials: {
      title: "Testimonials",
      subtext:
        "Kind words from colleagues and partners I've worked with globally.",
      list: [
        {
          name: "Sarah Collins",
          role: "Project Manager, UK",
          text: "Aboubakar's ability to bridge technical gaps with clear communication is rare. A fantastic collaborator.",
        },
        {
          name: "Carlos Mendez",
          role: "Lead Developer, Mexico",
          text: "Working with Muco was a highlight of our project. His full-stack skills and linguistic adaptability are impressive.",
        },
        {
          name: "Amani Juma",
          role: "Director, Kenya",
          text: "A dedicated professional who brings a global perspective to everything he builds.",
        },
        {
          name: "Tyler Higgs",
          role: "Instructor, Langara College",
          text: "Aboubakar was a key developer and project manager. He demonstrated strong communication and technical understanding to deliver a successful software demonstration, excelling in team collaboration and adapting to technical hurdles.",
        },
      ],
    },
    journal: {
      title: "Travel Journal",
      subtext:
        "Deep dives into my life across different continents. Stories of culture, growth, and discovery.",
      readMore: "Read Story",
      comingSoon: "New stories arriving soon...",
      posts: {
        mexico: {
          title: "Finding Home in the Heart of Mexico",
          date: "2018 - 2024",
          excerpt:
            "Beyond the vibrant streets and the endless rhythm of Mexico City, I found a part of myself I never knew existed.",
          content:
            "Living in Mexico for six years was more than just a residency; it was a transformation. I remember the first time I walked through the Zócalo, feeling the weight of history and the pulse of a city that never truly sleeps. My journey took me from the complex flavors of mole in Oaxaca and the baroque beauty of Puebla to the colonial charm of Querétaro and San Miguel de Allende. I felt the powerful energy of Guadalajara, the deep indigenous roots and lush jungles of Chiapas, and the legendary sunsets over the cliffs of Acapulco. Mexico taught me that 'home' isn't just a place—it's a feeling of belonging to a culture that celebrates life with every breath. I learned to navigate not just the busy Metro, but the beautiful nuances of the Spanish language and the warmth of a community that treats strangers like family.",
        },
      },
    },
    gallery: {
      viewGallery: "View Photo Gallery",
      backToHome: "Back to Home",
      viewMore: "View more",
      imageComing: "Image coming soon",
    },
    hero: {
      title: "My Life's Journey",
      subtext:
        "From the heart of Burundi to the landscapes of multiple countries, this is the story of my global travels and education.",
      profile: "Profile",
      name: "My name is Aboubakar Muco",
      bio: "I am a full-stack developer with a passion for building innovative solutions. In addition to my technical skills, I have extensive experience in Translations and English teaching, which helps me bring a clear and communicative approach to software development.",
      cta: "Get in Touch",
      readMore: "Read more",
    },
    journey: {
      title: "The Journey",
      burundi: {
        title: "Burundi Origins",
        desc: "Born and raised in Nyamugari Gitega. After primary school, I moved to Bujumbura for secondary school.",
      },
      egypt: {
        title: "Egypt: 2001 - 2012",
        desc: "Relocated to Egypt on a scholarship. Completed secondary and high school in Alexandria (Asafrah neighborhood). Later, I moved to Cairo to earn my Bachelor's degree in Nasr City.",
      },
      loop: {
        title: "The Global Loop (2012 - 2024)",
        desc: "My professional and personal path took me through a series of international moves:",
        mexico: "Mexico: 2012, 2015, and 2018 - 2024",
        england: "England: 2013, and 2015 - 2018",
        kenya: "Kenya: 2014",
      },
      canada: {
        title: "Canada: 2024 - Present",
        desc: "The final chapter of my journey led me to Canada, where I am currently based.",
        galleryTitle: "Canada Photo Gallery",
        gallerySub: "Snapshots from my Canadian chapter and community.",
        backToCountry: "Back to Canada",
      },
    },
    travels: {
      title: "Global Presence",
      subtext:
        "Countries I've lived in and visited along my journey. For more information, click on the flag.",
    },
    contact: {
      title: "Let's Connect",
      subtext:
        "Interested in my story or looking to collaborate? I'd love to hear from you.",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      localTime: "Local Time",
      weather: "Weather",
      calculating: "Calculating...",
      successTitle: "Thank you!",
      successMessage:
        "Your message has been sent successfully. I'll get back to you soon.",
      footerInfoTitle: "My Story",
      footerSocialTitle: "Social Media",
    },
    skills: {
      title: "Expertise & Skills",
      tech: "Full-Stack Development",
      techDesc:
        "Building modern, scalable web applications using React, Node.js, and other cutting-edge technologies.",
      lang: "Translation & Languages",
      langDesc:
        "Extensive experience in professional translation and interpreting, bridging communication gaps across multiple languages.",
      education: "English Teaching",
      educationDesc:
        "Dedicated background in English pedagogy, providing a clear and communicative approach to learning and documentation.",
    },
    careerPage: {
      title: "Career Story",
      subtitle:
        "From interpretation to teaching and building software, each chapter leaned into language and learning.",
      sections: [
        {
          title: "Interpreter & Translator",
          duration: "2009 – present",
          desc: "I began freelancing in 2009 as an interpreter and translator for Kirundi, Swahili, English, and Arabic, adding Spanish support in 2020 for community, academic, and diplomatic work before translating that cultural fluency to software development.",
          story:
            "Those freelance assignments kept me behind the podiums of embassies, classrooms, and cultural events, bridging five languages and learning to craft precise tone across Kirundi, Swahili, English, Arabic, and Spanish.",
          languagesHeader: "Languages in practice",
          languages: ["Kirundi", "Swahili", "English", "Arabic", "Spanish"],
        },
        {
          title: "English Teacher",
          duration: "2012 – present",
          desc: "My English classes emphasize stories, culture, and practical conversation so that learners can use real-world fluency while I keep sharpening my clear communication.",
          story:
            "Teaching English alongside translation work helped me pair empathetic explanations with technical clarity, preparing everyone to connect across new countries and careers.",
        },
        {
          title: "Developer",
          duration: "2024 – present",
          desc: "The Web and Mobile App Development Post-Baccalaureate Diploma at Langara College grounded my multilingual thinking in software craft while centering on accessible, voice-first experiences.",
          story:
            "Langara’s bootcamp-style labs taught me to prototype voice, spatial audio, and Gemini-powered scenes so every build feels inclusive to the multilingual communities I serve.",
          detailsHeader: "Program highlights",
          details: [
            "Full-stack builds with React, Node.js, and accessibility-first architecture",
            "VoiceOver-friendly responsive prototypes that respect mobile and web contexts",
            "Collaborative testing labs for spatial audio, AI vision, and assistive flows",
          ],
        },
      ],
      backHome: "Back to home page",
    },
    galleryHub: {
      title: "Memories Hub",
      subtext:
        "Choose a country to explore the memories and landscapes captured throughout my journey.",
      photos: "Photos",
      comingSoon: "Coming Soon",
    },
    countries: {
      burundi: {
        name: "Burundi: Heart of Africa",
        desc: "This is where my story began. Born and raised in the beautiful hills of Gitega and Bujumbura, Burundi forever remains my homeland and the foundation of my journey.",
        galleryTitle: "Burundi Photo Gallery",
        gallerySub:
          "Exploring my roots and memories in Burundi through these captures.",
        backToCountry: "Back to Burundi",
      },
      egypt: {
        name: "Egypt: Land of Civilizations",
        desc: "My time in Egypt (2001-2012) was transformative. From Alexandria's shores to Cairo's bustling streets, I completed my education and discovered my academic passions.",
        galleryTitle: "Egypt Photo Gallery",
        gallerySub:
          "Reliving my academic years and adventures across the land of the Pharaohs.",
        backToCountry: "Back to Egypt",
      },
      mexico: {
        name: "Mexico: A Vibrant Chapter",
        desc: "Mexico has been a constant thread in my global loop, living there in 2012, 2015, and most recently from 2018 to 2024. Its incredible warmth and culture have made it a favorite place.",
        galleryTitle: "Mexico Photo Gallery",
        gallerySub: "Explore photos from different regions of Mexico.",
        backToCountry: "Back to Mexico",
        subgalleries: {
          mexicoCity: {
            title: "Mexico City Gallery",
            desc: "The sprawling capital blending ancient history with modern life.",
          },
          oaxaca: {
            title: "Oaxaca Gallery",
            desc: "Known for its vibrant indigenous cultures and delicious cuisine.",
          },
          chiapas: {
            title: "Chiapas Gallery",
            desc: "Rich jungles, Maya ruins, and deep cultural heritage.",
          },
          queretaro: {
            title: "Querétaro Gallery",
            desc: "Colonial charm and UNESCO‑listed architecture.",
          },
        },
      },
      england: {
        name: "England: Professional Roots",
        desc: "My time in England (2013 and 2015-2018) allowed me to build deep professional roots and appreciate the unique blend of tradition and modernity.",
        galleryTitle: "England Photo Gallery",
        gallerySub:
          "Memories from London, Brighton, Canterbury, and the professional chapter that shaped my journey in England.",
        backToCountry: "Back to England",
      },
      kenya: {
        name: "Kenya: East African Vibes",
        desc: "Living in Kenya in 2014 provided a fresh perspective on East African innovation and natural beauty, strengthening my regional connections.",
        galleryTitle: "Kenya Photo Gallery",
        gallerySub:
          "Snapshots from Nairobi, Maasai Mara, Ngong Hills, and the people and places that marked my Kenyan chapter.",
        backToCountry: "Back to Kenya",
      },
      canada: {
        name: "Canada: The New Frontier",
        desc: "My journey led me to Canada in 2024, embarking on a new professional adventure in this diverse and welcoming landscape.",
      },
      uganda: {
        name: "Uganda: The Pearl of Africa",
        desc: "Exploring the lush landscapes and vibrant culture of Uganda, a key stop in my East African travels.",
      },
      rwanda: {
        name: "Rwanda: Land of a Thousand Hills",
        desc: "Witnessing the incredible progress and stunning scenery of Rwanda, a neighbor to my homeland.",
      },
      tanzania: {
        name: "Tanzania: Infinite Horizons",
        desc: "From the spice islands to the mainland plains, Tanzania's vast beauty and warm hospitality left a lasting impression.",
      },
      senegal: {
        name: "Senegal: Teranga Spirit",
        desc: "Experiencing the legendary hospitality and rich artistic traditions of Senegal in West Africa.",
        galleryTitle: "Senegal Photo Gallery",
        gallerySub:
          "Coastal light, festival energy, and Dakar streets captured during my West African travels.",
        backToCountry: "Back to Senegal",
      },
      scotland: {
        name: "Scotland: Highlands and History",
        desc: "Discovering the rugged beauty and deep history of the Scottish landscapes during my UK stay.",
        galleryTitle: "Scotland Photo Gallery",
        gallerySub:
          "A short visual collection from Scotland, from city landmarks to hillside views during my UK travels.",
        backToCountry: "Back to Scotland",
      },
    },
  },
  sw: {
    nav: {
      about: "Kuhusu",
      journey: "Safari",
      travels: "Safari za Kimataifa",
      contact: "Wasiliana",
      home: "Nyumbani",
      gallery: "Picha",
      journal: "Jarida",
      projects: "Miradi",
    },
    projects: {
      title: "Miradi Iliyoangaziwa",
      subtext:
        "Uteuzi wa kazi zangu za hivi karibuni katika ukuzaji wa programu na ubunifu.",
      viewProject: "Angalia Maelezo",
      list: [
        {
          title: "Guardian",
          date: "2026 – sasa",
          role: "Kiongozi wa Bidhaa wa Full-stack",
          desc: "Guardian imejengwa kwa msingi wa Uhuru, Uelewa, na Usalama—majiwi ya anga, Scene Describer yenye Gemini AI, mwongozo wa sauti, na Smart Reminders zenye msaada wa haraka ili watu wasioona waweze kupata vitu vya ndani na kupanga mikakati. VoiceOver-first Swift frontend na backend ya Java (na huduma za Swift) hufanya uzoefu kuwa wa haraka.",
          focus:
            "Kuwaongoza kwa uvumbuzi wa Scene Describer na Smart Reminders kupitia ugeuzaji wa Gemini.",
          tech: [
            "Swift (frontend)",
            "Java (backend)",
            "Gemini",
            "TensorFlow Lite",
            "Spatial Audio SDK",
          ],
          link: "https://guardian-mu-three.vercel.app/",
        },
        {
          title: "PropEase",
          date: "Septemba 2025",
          role: "Msanidi Programu & Meneja wa Mradi",
          desc: "Mfumo wa kina wa usimamizi wa ukodishaji unaoziba pengo la mawasiliano kati ya wapangaji na wenye nyumba.",
          tech: ["React JS", "JavaScript", "Tailwind CSS"],
          link: "https://propease-v1-app.vercel.app/",
        },
        {
          title: "Luma",
          date: "Aprili 2025",
          role: "Msanidi wa Frontend",
          desc: "Michezo ya mwingiliano kwa ajili ya wanaoanza, inayolenga urahisi wa kufikiwa na uzoefu wa watumiaji.",
          tech: ["HTML5", "JavaScript", "Tailwind CSS"],
        },
        {
          title: "SafeMind",
          date: "Desemba 2024",
          role: "Mbunifu wa UI/UX",
          desc: "Ubunifu wa wavuti na simu kwa afya ya akili ya wanafunzi wa kimataifa, ukiwaunganisha na wataalamu wanaoelewa utamaduni wao.",
          tech: ["Figma", "Adobe Photoshop", "Illustrator"],
        },
      ],
    },
    testimonials: {
      title: "Mapendekezo",
      subtext:
        "Maneno mazuri kutoka kwa wenzangu na washirika niliofanya nao kazi duniani kote.",
      list: [
        {
          name: "Sarah Collins",
          role: "Meneja wa Mradi, Uingereza",
          text: "Uwezo wa Aboubakar wa kuziba mapengo ya kiufundi kwa mawasiliano wazi ni adimu. Ushirikiano mzuri sana.",
        },
        {
          name: "Carlos Mendez",
          role: "Mpanda programu Kiongozi, Meksiko",
          text: "Kufanya kazi na Muco ilikuwa kilele cha mradi wetu. Ujuzi wake wa nyanja zote na uwezo wa kubadilika lugha ni wa kuvutia.",
        },
        {
          name: "Amani Juma",
          role: "Mkurugenzi, Kenya",
          text: "Mtaalamu aliyejitolea ambaye huleta mtazamo wa kimataifa kwa kila kitu anachounda.",
        },
        {
          name: "Tyler Higgs",
          role: "Mwalimu, Langara College",
          text: "Aboubakar alikuwa msanidi programu na msimamizi mahiri. Alionyesha mawasiliano thabiti na uwezo mkubwa wa kiufundi, akifanikiwa katika ushirikiano wa timu na kukabiliana na changamoto za kiteknolojia.",
        },
      ],
    },
    journal: {
      title: "Jarida la Safari",
      subtext:
        "Uchambuzi wa kina wa maisha yangu katika mabara tofauti. Hadithi za utamaduni, ukuaji, na uvumbuzi.",
      readMore: "Soma Hadithi",
      comingSoon: "Hadithi mpya zinakuja hivi karibuni...",
      posts: {
        mexico: {
          title: "Kutafuta Nyumbani Katika Moyo wa Meksiko",
          date: "2018 - 2024",
          excerpt:
            "Zaidi ya mitaa iliyojaa harakati na mdundo wa Mexico City, nilipata sehemu yangu ambayo sikuwahi kujua ipo.",
          content:
            "Kuishi nchini Meksiko kwa miaka sita kulikuwa zaidi ya makazi tu; kulikuwa na mabadiliko makubwa. Nakumbuka mara ya kwanza nilitamani kutembea katika Zócalo, nikihisi uzito wa historia na mapigo ya mji ambao haulali kweli. Safari yangu ilinipeleka kutoka kwa ladha za kipekee za mole huko Oaxaca na urembo wa baroque wa Puebla hadi haiba ya kikoloni ya Querétaro na San Miguel de Allende. Nilihisi nguvu kubwa ya Guadalajara, mizizi ya kina ya asili na misitu minene ya Chiapas, na machweo ya hadithi juu ya majabali ya Acapulco. Meksiko ilinifundisha kuwa 'nyumbani' si mahali tu—ni hisia ya kuwa sehemu ya utamaduni unaosherehekea maisha kwa kila pumzi. Nilijifunza kuabiri si tu Metro iliyojaa watu, bali pia nuances nzuri za lugha ya Kihispania na joto la jamii inayowatendea wageni kama familia.",
        },
      },
    },
    gallery: {
      viewGallery: "Tazama Picha",
      backToHome: "Rudi Nyumbani",
      viewMore: "Ongeza Zaidi",
      imageComing: "Picha zitakuja hivi karibuni",
    },
    hero: {
      title: "Safari ya Maisha Yangu",
      subtext:
        "Kutoka katikati ya Burundi hadi mandhari ya nchi mbalimbali, hii ndiyo hadithi ya safari zangu za kimataifa na elimu.",
      profile: "Wasifu",
      name: "Jina langu ni Aboubakar Muco",
      bio: "Mimi ni mtaalamu wa kutengeneza mifumo ya kompyuta (Full-stack developer) mwenye shauku ya kubuni suluhisho za kiubunifu. Pamoja na ujuzi wangu wa kiufundi, nina uzoefu mkubwa katika Tafsiri na kufundisha Kiingereza, jambo ambalo hunisaidia kuwa na njia wazi ya mawasiliano katika utengenezaji wa programu.",
      cta: "Wasiliana nami",
      readMore: "Soma Zaidi",
    },
    journey: {
      title: "Safari",
      burundi: {
        title: "Asili ya Burundi",
        desc: "Nilizaliwa na kukulia Nyamugari Gitega. Baada ya shule ya msingi, nilihamia Bujumbura kwa ajili ya shule ya upili.",
      },
      egypt: {
        title: "Misri: 2001 - 2012",
        desc: "Nilihamia Misri kwa ufadhili wa masomo. Nilikamilisha shule ya upili na sekondari huko Alexandria (mtaa wa Asafrah). Baadaye, nilihamia Cairo kupata shahada yangu ya kwanza katika Nasr City.",
      },
      loop: {
        title: "Mzunguko wa Kimataifa (2012 - 2024)",
        desc: "Njia yangu ya kitaalamu na ya kibinafsi ilinipeleka kupitia mfululizo wa hatua za kimataifa:",
        mexico: "Meksiko: 2012, 2015, na 2018 - 2024",
        england: "Uingereza: 2013, na 2015 - 2018",
        kenya: "Kenya: 2014",
      },
      canada: {
        title: "Canada: 2024 - Sasa",
        desc: "Sura ya mwisho ya safari yangu ilinipeleka Canada, ambapo nipo kwa sasa.",
        galleryTitle: "Kituo cha Picha cha Kanada",
        gallerySub: "Picha zinazoonyesha sura ya sasa ya maisha yangu Kanada.",
        backToCountry: "Rudi Kanada",
      },
    },
    travels: {
      title: "Uwepo wa Kimataifa",
      subtext:
        "Nchi nilizoishi na kutembelea katika safari yangu. Kwa habari zaidi, bonyeza kwenye bendera.",
    },
    contact: {
      title: "Tukutane",
      subtext:
        "Je, unavutiwa na hadithi yangu au unataka kushirikiana? Ningependa kusikia kutoka kwako.",
      name: "Jina Lako",
      email: "Barua Pepe Yako",
      message: "Ujumbe Wako",
      send: "Tuma Ujumbe",
      localTime: "Muda wa Eneo",
      weather: "Hali ya Hewa",
      calculating: "Inatafuta...",
      successTitle: "Asante!",
      successMessage:
        "Ujumbe wako umetumwa kwa mafanikio. Nitakujibu hivi karibuni.",
      footerInfoTitle: "Hadithi Yangu",
      footerSocialTitle: "Mitandao ya Kijamii",
    },
    skills: {
      title: "Utaalamu na Stadi",
      tech: "Utengenezaji wa Mifumo ya Mtandao",
      techDesc:
        "Kujenga programu za kisasa na zinazoweza kupanuliwa kwa kutumia React, Node.js, na teknolojia nyingine mpya.",
      lang: "Tafsiri na Lugha",
      langDesc:
        "Uzoefu mkubwa katika tafsiri ya kitaalamu na ukalimani, kuziba mapengo ya mawasiliano kati ya lugha nyingi.",
      education: "Ufundishaji wa Kiingereza",
      educationDesc:
        "Elimu na uzoefu katika ufundishaji wa Kiingereza, kutoa njia wazi ya kujifunza na kutunza nyaraka za kiufundi.",
    },
    careerPage: {
      title: "Hadithi ya Kazi",
      subtitle:
        "Kutoka ukalimani hadi ufundishaji na maendeleo ya programu, kila sura ilikuza lugha na maarifa mapya.",
      sections: [
        {
          title: "Mkalimani na Mtafsiri",
          duration: "2009 – sasa",
          desc: "Nilianza kufanya kazi kama mtafsiri na mkalimani huru wa Kirundi, Kiswahili, Kiingereza na Kiarabu, kisha kuongeza Kihispania mwaka 2020 kwa miradi ya jamii na masomo kabla ya kuingia kwenye maendeleo ya programu.",
          languagesHeader: "Lugha zinazotumika",
          languages: [
            "Kirundi",
            "Kiswahili",
            "Kiingereza",
            "Kiarabu",
            "Kihispania",
          ],
        },
        {
          title: "Mwalimu wa Kiingereza",
          duration: "2012 – sasa",
          desc: "Masomo yangu yalilenga hadithi, tamaduni na mazungumzo ya kila siku ili kuwapa wanafunzi ujasiri halisi.",
        },
        {
          title: "Mwandishi wa Programu",
          duration: "2024 – sasa",
          desc: "Diploma ya Web na Mobile App Development Post-Baccalaureate ya Langara College ilinipa ufundi wa kuunganisha lugha na muundo wa kisasa.",
          detailsHeader: "Sehemu za mradi",
          details: [
            "Miradi ya full-stack kwa React na Node.js",
            "Prototyping ya simu za mkononi na ukaguzi wa upatikanaji",
          ],
        },
      ],
      backHome: "Rudi nyumbani",
    },
    galleryHub: {
      title: "Kituo cha Kumbukumbu",
      subtext:
        "Chagua nchi ili kuchunguza kumbukumbu na mandhari yaliyonaswa katika safari yangu yote.",
      photos: "Picha",
      comingSoon: "Inakuja Hivi Karibuni",
    },
    countries: {
      burundi: {
        name: "Burundi: Moyo wa Afrika",
        desc: "Hapa ndipo hadithi yangu ilipoanzia. Nilizaliwa na kukulia katika vilima vizuri vya Gitega na Bujumbura, Burundi itabaki kuwa nyumbani kwangu daima.",
        galleryTitle: "Picha za Burundi",
        gallerySub:
          "Kuchunguza asili yangu na kumbukumbu nchini Burundi kupitia picha hizi.",
        backToCountry: "Rudi Burundi",
      },
      egypt: {
        name: "Misri: Ardhi ya Ustaarabu",
        desc: "Wakati wangu nchini Misri (2001-2012) ulinibadilika sana. Kutoka fukwe za Alexandria hadi mitaa yenye shughuli nyingi ya Cairo.",
        galleryTitle: "Picha za Misri",
        gallerySub:
          "Kukumbuka miaka yangu ya masomo na matukio katika nchi ya Mafarao.",
        backToCountry: "Rudi Misri",
      },
      mexico: {
        name: "Meksiko: Sura ya Kuvutia",
        desc: "Meksiko imekuwa sehemu muhimu ya maisha yangu, nikiishi huko mwaka 2012, 2015, na hivi karibuni kuanzia 2018 hadi 2024.",
        galleryTitle: "Picha za Meksiko",
        gallerySub: "Chunguza maeneo mbalimbali ya Meksiko kupitia picha.",
        backToCountry: "Rudi Meksiko",
        subgalleries: {
          mexicoCity: {
            title: "Picha za Mexico City",
            desc: "Mji mkuu mkubwa unaochanganya historia ya kale na maisha ya kisasa.",
          },
          oaxaca: {
            title: "Picha za Oaxaca",
            desc: "Inajulikana kwa tamaduni zake za asili zenye nguvu na vyakula vitamu.",
          },
          chiapas: {
            title: "Picha za Chiapas",
            desc: "Misitu minene, magofu ya Maya, na urithi wa kitamaduni.",
          },
          queretaro: {
            title: "Picha za Querétaro",
            desc: "Haiba ya kikoloni na usanifu ulioorodheshwa na UNESCO.",
          },
        },
      },
      england: {
        name: "Uingereza: Mizizi ya Kitaalamu",
        desc: "Wakati wangu nchini Uingereza (2013 na 2015-2018) uliniruhusu kujenga mizizi ya kitaalamu na kuthamini mchanganyiko wa mila na usasa.",
        galleryTitle: "Picha za Uingereza",
        gallerySub:
          "Kumbukumbu kutoka London, Brighton, Canterbury, na hatua ya kitaaluma iliyoipa safari yangu sura nchini Uingereza.",
        backToCountry: "Rudi Uingereza",
      },
      kenya: {
        name: "Kenya: Mapigo ya Afrika Mashariki",
        desc: "Kuishi Kenya mwaka 2014 kulinipa mtazamo mpya juu ya uvumbuzi wa Afrika Mashariki na uzuri wa asili.",
        galleryTitle: "Picha za Kenya",
        gallerySub:
          "Picha kutoka Nairobi, Maasai Mara, Ngong Hills, na watu pamoja na maeneo yaliyoacha alama katika kipindi changu cha Kenya.",
        backToCountry: "Rudi Kenya",
      },
      canada: {
        name: "Kanada: Mpaka Mpya",
        desc: "Safari yangu ilinipeleka Kanada mwaka 2024, nikianza safari mpya ya kitaalamu katika mazingira haya ya aina mbalimbali.",
      },
      uganda: {
        name: "Uganda: Lulu ya Afrika",
        desc: "Kuchunguza mandhari nzuri na utamaduni mzuri wa Uganda, kituo muhimu katika safari zangu za Afrika Mashariki.",
      },
      rwanda: {
        name: "Rwanda: Ardhi ya Milima Elfu",
        desc: "Kushuhudia maendeleo makubwa na mandhari nzuri ya Rwanda, jirani wa nchi yangu.",
      },
      tanzania: {
        name: "Tanzania: Uasili Usio na Kikomo",
        desc: "Kutoka visiwa vya viungo hadi nyanda za bara, uzuri mkubwa wa Tanzania na ukarimu wao uliacha alama ya kudumu.",
      },
      senegal: {
        name: "Senegali: Roho ya Teranga",
        desc: "Kupitia ukarimu wa hadithi na mila tajiri za kisanii za Senegali katika Afrika Magharibi.",
        galleryTitle: "Picha za Senegali",
        gallerySub:
          "Mwanga wa pwani, tamasha, na mitaa ya Dakar kutoka kwenye safari yangu ya Afrika Magharibi.",
        backToCountry: "Rudi Senegali",
      },
      scotland: {
        name: "Uskoti: Nyanda za Juu na Historia",
        desc: "Kugundua uzuri wa asili na historia ndefu ya mandhari ya Uskoti wakati wa kukaa kwangu Uingereza.",
        galleryTitle: "Picha za Uskoti",
        gallerySub:
          "Mkusanyiko mfupi wa picha za Uskoti, kutoka alama za mijini hadi mandhari ya vilima wakati wa safari zangu za Uingereza.",
        backToCountry: "Rudi Uskoti",
      },
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      journey: "Trayectoria",
      travels: "Viajes",
      contact: "Contacto",
      home: "Inicio",
      gallery: "Galería",
      journal: "Diario",
      projects: "Proyectos",
    },
    projects: {
      title: "Proyectos Destacados",
      subtext:
        "Una selección de mis trabajos recientes en desarrollo de software y diseño.",
      viewProject: "Ver Detalles",
      list: [
        {
          title: "Guardian",
          date: "2026 – presente",
          role: "Líder de Producto Full-stack",
          desc: "Guardian se basa en Independencia, Comprensión y Seguridad: audio espacial, Scene Describer impulsado por Gemini, guía por voz y Smart Reminders para apoyar a personas con discapacidad visual a encontrar objetos interiores, describir escenas y organizar tareas mientras VoiceOver sigue siendo el cimiento. La interfaz en Swift y el backend en Java (con servicios Swift compartidos) mantienen la experiencia ágil.",
          focus:
            "Liderando las experiencias de Scene Describer y Smart Reminders con visión Gemini.",
          tech: [
            "Swift (frontend)",
            "Java (backend)",
            "Gemini",
            "TensorFlow Lite",
            "Spatial Audio SDK",
          ],
          link: "https://guardian-mu-three.vercel.app/",
        },
        {
          title: "PropEase",
          date: "Septiembre 2025",
          role: "Desarrollador Full-stack y Gerente de Proyecto",
          desc: "Un sistema integral de gestión de alquileres que cierra la brecha de comunicación entre inquilinos y propietarios.",
          tech: ["React JS", "JavaScript", "Tailwind CSS"],
          link: "https://propease-v1-app.vercel.app/",
        },
        {
          title: "Luma",
          date: "Abril 2025",
          role: "Desarrollador Frontend",
          desc: "Juegos interactivos para principiantes centrados en la accesibilidad y experiencias de usuario atractivas.",
          tech: ["HTML5", "JavaScript", "Tailwind CSS"],
        },
        {
          title: "SafeMind",
          date: "Diciembre 2024",
          role: "Diseñador UI/UX",
          desc: "Diseño web y móvil para la salud mental de estudiantes internacionales, conectándolos con expertos culturalmente sensibles.",
          tech: ["Figma", "Adobe Photoshop", "Illustrator"],
        },
      ],
    },
    testimonials: {
      title: "Testimonios",
      subtext:
        "Palabras amables de colegas y socios con los que he trabajado a nivel mundial.",
      list: [
        {
          name: "Sarah Collins",
          role: "Gerente de Proyecto, Reino Unido",
          text: "La capacidad de Aboubakar para cerrar brechas técnicas con una comunicación clara es rara. Un colaborador fantástico.",
        },
        {
          name: "Carlos Mendez",
          role: "Desarrollador Principal, México",
          text: "Trabajar con Muco fue un punto destacado de nuestro proyecto. Sus habilidades full-stack y adaptabilidad lingüística son impresionantes.",
        },
        {
          name: "Amani Juma",
          role: "Director, Kenia",
          text: "Un profesional dedicado que aporta una perspectiva global a todo lo que construye.",
        },
        {
          name: "Tyler Higgs",
          role: "Instructor, Langara College",
          text: "Aboubakar fue un desarrollador y gestor de proyectos clave. Demostró una gran comunicación y capacidad técnica, destacando en la colaboración en equipo y la resolución de retos tecnológicos.",
        },
      ],
    },
    journal: {
      title: "Diario de Viaje",
      subtext:
        "Inmersiones profundas en mi vida a través de diferentes continentes. Historias de cultura, crecimiento y descubrimiento.",
      readMore: "Leer Historia",
      comingSoon: "Nuevas historias llegarán pronto...",
      posts: {
        mexico: {
          title: "Encontrando un Hogar en el Corazón de México",
          date: "2018 - 2024",
          excerpt:
            "Más allá de las calles vibrantes y el ritmo interminable de la Ciudad de México, encontré una parte de mí que nunca supe que existía.",
          content:
            "Vivir en México durante seis años fue más que una residencia; fue una transformación. Recuerdo la primera vez que caminé por el Zócalo, sintiendo el peso de la historia y el pulso de una ciudad que nunca duerme. Mi viaje me llevó desde los sabores complejos del mole en Oaxaca y la belleza barroca de Puebla hasta el encanto colonial de Querétaro y San Miguel de Allende. Sentí la energía vibrante de Guadalajara, las profundas raíces indígenas y selvas exuberantes de Chiapas, y los legendarios atardeceres sobre los acantilados de Acapulco. México me enseñó que el 'hogar' no es solo un lugar, es un sentimiento de pertenencia a una cultura que celebra la vida con cada aliento. Aprendí a navegar no solo el concurrido Metro, sino también los hermosos matices del idioma español y la calidez de una comunidad que trata a los extraños como familia.",
        },
      },
    },
    gallery: {
      viewGallery: "Ver Galería de Fotos",
      backToHome: "Volver al Inicio",
      viewMore: "Ver más",
    },
    hero: {
      title: "El viaje de mi vida",
      subtext:
        "Desde el corazón de Burundi hasta los paisajes de múltiples países, esta es la historia de mis viajes globales y mi educación.",
      profile: "Perfil",
      name: "Mi nombre es Aboubakar Muco",
      bio: "Soy un desarrollador full-stack con pasión por construir soluciones innovadoras. Además de mis habilidades técnicas, tengo una amplia experiencia en Traducciones y enseñanza de Inglés, lo que me ayuda a aportar un enfoque claro y comunicativo al desarrollo de software.",
      cta: "Ponerse en contacto",
      readMore: "Leer más",
    },
    journey: {
      title: "La Trayectoria",
      burundi: {
        title: "Orígenes en Burundi",
        desc: "Nacido y criado en Nyamugari Gitega. Después de la escuela primaria, me mudé a Bujumbura para la escuela secundaria.",
      },
      egypt: {
        title: "Egipto: 2001 - 2012",
        desc: "Me mudé a Egipto con una beca. Completé la escuela secundaria y preparatoria en Alejandría (barrio de Asafrah). Más tarde, me mudé a El Cairo para obtener mi licenciatura en Nasr City.",
      },
      loop: {
        title: "El Ciclo Global (2012 - 2024)",
        desc: "Mi camino profesional y personal me llevó a través de una serie de movimientos internacionales:",
        mexico: "México: 2012, 2015, y 2018 - 2024",
        england: "Inglaterra: 2013, y 2015 - 2018",
        kenya: "Kenia: 2014",
      },
      canada: {
        title: "Canadá: 2024 - Presente",
        desc: "El capítulo final de mi viaje me llevó a Canadá, donde me encuentro actualmente.",
        galleryTitle: "Galería de Fotos de Canadá",
        gallerySub:
          "Escenas y comunidades que escriben mi capítulo canadiense.",
        backToCountry: "Volver a Canadá",
      },
    },
    travels: {
      title: "Presencia Global",
      subtext:
        "Países en los que he vivido y visitado a lo largo de mi viaje. Para más información, haz clic en la bandera.",
    },
    contact: {
      title: "Conectemos",
      subtext:
        "¿Interesado en mi historia o buscas colaborar? Me encantaría saber de ti.",
      name: "Tu Nombre",
      email: "Tu Correo",
      message: "Tu Mensaje",
      send: "Enviar Mensaje",
      localTime: "Hora Local",
      weather: "Clima",
      calculating: "Calculando...",
      successTitle: "¡Gracias!",
      successMessage:
        "Tu mensaje ha sido enviado con éxito. Te responderé pronto.",
      footerInfoTitle: "Mi Historia",
      footerSocialTitle: "Redes Sociales",
    },
    skills: {
      title: "Experiencia y Habilidades",
      tech: "Desarrollo Full-Stack",
      techDesc:
        "Creación de aplicaciones web modernas y escalables utilizando React, Node.js y otras tecnologías de vanguardia.",
      lang: "Traducción e Idiomas",
      langDesc:
        "Amplia experiencia en traducción e interpretación profesional, cerrando brechas de comunicación en múltiples idiomas.",
      education: "Enseñanza de Inglés",
      educationDesc:
        "Trayectoria dedicada en pedagogía de inglés, aportando un enfoque claro y comunicativo al aprendizaje y la documentación.",
    },
    careerPage: {
      title: "Historia profesional",
      subtitle:
        "De la interpretación a la enseñanza y luego al desarrollo, cada capítulo fortaleció mi conexión con las lenguas.",
      sections: [
        {
          title: "Intérprete y Traductor",
          duration: "2009 – presente",
          desc: "Empecé como intérprete y traductor freelance entre kirundi, swahili, inglés y árabe, y sumé el español en 2020 para apoyar proyectos comunitarios y académicos antes de pasar al desarrollo.",
          languagesHeader: "Idiomas en uso",
          languages: ["Kirundi", "Swahili", "Inglés", "Árabe", "Español"],
        },
        {
          title: "Profesor de Inglés",
          duration: "2012 – presente",
          desc: "Mis clases se apoyaban en historias y situaciones reales para dar confianza comunicativa a estudiantes internacionales.",
        },
        {
          title: "Desarrollador",
          duration: "2024 – presente",
          desc: "El diploma Post-Baccalaureate en Web and Mobile App Development de Langara College me enseñó a convertir la comprensión multicultural en productos digitales.",
          detailsHeader: "Destacados del programa",
          details: [
            "Proyectos full-stack con React y Node.js",
            "Prototipos móviles responsivos y revisiones de accesibilidad",
          ],
        },
      ],
      backHome: "Volver al inicio",
    },
    galleryHub: {
      title: "Centro de Memorias",
      subtext:
        "Elija un país para explorar los recuerdos y paisajes capturados a lo largo de mi viaje.",
      photos: "Fotos",
      comingSoon: "Próximamente",
    },
    countries: {
      burundi: {
        name: "Burundi: El Corazón de África",
        desc: "Aquí es donde comenzó mi historia. Nacido y criado en las hermosas colinas de Gitega y Buyumbura, Burundi siempre será mi patria.",
        galleryTitle: "Galería de Fotos de Burundi",
        gallerySub:
          "Explorando mis raíces y recuerdos en Burundi a través de estas capturas.",
        backToCountry: "Volver a Burundi",
      },
      egypt: {
        name: "Egipto: Tierra de Civilizaciones",
        desc: "Mi tiempo en Egipto (2001-2012) fue transformador. Desde las costas de Alejandría hasta las bulliciosas calles de El Cairo.",
        galleryTitle: "Galería de Fotos de Egipto",
        gallerySub:
          "Reviviendo mis años académicos y aventuras por la tierra de los Faraones.",
        backToCountry: "Volver a Egipto",
      },
      mexico: {
        name: "México: Un Capítulo Vibrante",
        desc: "México ha sido un hilo constante en mi trayectoria global, viviendo allí en 2012, 2015 y más recientemente de 2018 a 2024.",
        galleryTitle: "Galería de Fotos de México",
        gallerySub: "Explora fotos de diferentes regiones de México.",
        backToCountry: "Volver a México",
        subgalleries: {
          mexicoCity: {
            title: "Galería de Ciudad de México",
            desc: "La capital extensa que combina historia antigua con vida moderna.",
          },
          oaxaca: {
            title: "Galería de Oaxaca",
            desc: "Conocida por sus vibrantes culturas indígenas y su deliciosa cocina.",
          },
          chiapas: {
            title: "Galería de Chiapas",
            desc: "Selvas exuberantes, ruinas mayas y un rico patrimonio cultural.",
          },
          queretaro: {
            title: "Galería de Querétaro",
            desc: "Encanto colonial y arquitectura catalogada por la UNESCO.",
          },
        },
      },
      england: {
        name: "Inglaterra: Raíces Profesionales",
        desc: "Mi estancia en Inglaterra (2013 y 2015-2018) me permitió construir profundas raíces profesionales y apreciar la tradición.",
      },
      kenya: {
        name: "Kenia: Vibras de África Oriental",
        desc: "Vivir en Kenia en 2014 proporcionó una nueva perspectiva sobre la innovación en África Oriental y su belleza natural.",
      },
      canada: {
        name: "Canadá: La Nueva Frontera",
        desc: "Mi viaje me llevó a Canadá en 2024, embarcándome en una nueva aventura profesional en este paisaje diverso.",
      },
      uganda: {
        name: "Uganda: La Perla de África",
        desc: "Explorando los exuberantes paisajes y la vibrante cultura de Uganda, una parada clave en mis viajes.",
      },
      rwanda: {
        name: "Ruanda: Tierra de las Mil Colinas",
        desc: "Presenciando el increíble progreso y los impresionantes paisajes de Ruanda, vecino de mi tierra natal.",
      },
      tanzania: {
        name: "Tanzania: Horizontes Infinitos",
        desc: "Desde las islas de las especias hasta las llanuras del interior, la belleza de Tanzania dejó una impresión duradera.",
      },
      senegal: {
        name: "Senegal: Espíritu de Teranga",
        desc: "Experimentando la legendaria hospitalidad y las ricas tradiciones artísticas de Senegal en África Occidental.",
        galleryTitle: "Galería de Fotos de Senegal",
        gallerySub:
          "Luces costeras, festivales y calles de Dakar captadas durante mi viaje por África Occidental.",
        backToCountry: "Volver a Senegal",
      },
      scotland: {
        name: "Escocia: Tierras Altas e Historia",
        desc: "Descubriendo la belleza escarpada y la profunda historia de los paisajes escoceses durante mi estancia en el Reino Unido.",
      },
    },
  },
  rn: {
    nav: {
      about: "Ivyerekeye",
      journey: "Urugendo",
      travels: "Ingendo",
      contact: "Twandikire",
      home: "Ahabanza",
      gallery: "Amafoto",
      journal: "Ikinyamakuru",
      projects: "Imigambi",
    },
    projects: {
      title: "Imigambi nakoze",
      subtext:
        "Ihurizo ry' imigambi y'ibikorwa nakoze mu bihe vya vuba mu buhinga bwa orudinateri.",
      viewProject: "Raba birambuye",
      list: [
        {
          title: "Guardian",
          date: "2026 – ubu",
          role: "Umuyobozi w'igishushanyo ca serivisi za Full-stack",
          desc: "Guardian yashingiwe ku kwigenga, kwumva no kuronkoza umutekano: amajwi ya hafi, Scene Describer ya Gemini AI, ubuyobozi bwa sauti, n'ibibutsa vishasha (Smart Reminders) kugira ngo abatabona babone ibintu vya mu nzu, bavuge ibiri imbere yabo kandi banegure imirimo yabo naho VoiceOver iba umutima. Interface ya Swift hamwe na backend ya Java (n'udushushanyo twa Swift) bituma ubunararibonye bukora vuba.",
          focus:
            "Ndashinzwe ibikorwa vya Scene Describer na Smart Reminders bikoresha Gemini vision.",
          tech: [
            "Swift (frontend)",
            "Java (backend)",
            "Gemini",
            "TensorFlow Lite",
            "Spatial Audio SDK",
          ],
          link: "https://guardian-mu-three.vercel.app/",
        },
        {
          title: "PropEase",
          date: "Nyakanga 2025",
          role: "Umuhinga (Full-stack) n'Umuyobozi w'umugambi",
          desc: "Uburyo bwo gutunganya inyubako zikodeshwa bubafasha wapangaji n'abanyandago kuvugana neza.",
          tech: ["React JS", "JavaScript", "Tailwind CSS"],
          link: "https://propease-v1-app.vercel.app/",
        },
        {
          title: "Luma",
          date: "Ndamukiza 2025",
          role: "Umuhinga wa Frontend",
          desc: "Inkino zoroshe ku batangura, zateguriwe kuryohera abazikina bose.",
          tech: ["HTML5", "JavaScript", "Tailwind CSS"],
        },
        {
          title: "SafeMind",
          date: "Kigarama 2024",
          role: "Umuhinyanyuzi (UI/UX Designer)",
          desc: "Uguhinyanyura imboneshakure ku banyeshure b'abanyamahanga ku bijanye n'amagara yo mu mutwe.",
          tech: ["Figma", "Adobe Photoshop", "Illustrator"],
        },
      ],
    },
    testimonials: {
      title: "Ivyo abandi bavuga",
      subtext: "Amajambo meza avuye ku bo twakoranye kw'isi yose.",
      list: [
        {
          name: "Sarah Collins",
          role: "Umutegetsi w'imigambi, Ubwingereza",
          text: "Ubushobozi bwa Aboubakar bwo gusobanura ibintu vy'ubuhinga mu buryo bwumyikana ni budasanzwe. Ni umufatanyabikorwa mwiza cane.",
        },
        {
          name: "Carlos Mendez",
          role: "Umuhinga mukuru, Megizike",
          text: "Gukorana na Muco naryo ryari iteka rikomeye. Ubuhinga bwiwe n'ukuntu amenya indimi bitangaje buri wese.",
        },
        {
          name: "Amani Juma",
          role: "Umuyobozi, Kenya",
          text: "Umuhinga yitanga akazana ubumenyi bw'isi yose mu vyo akora vyose.",
        },
        {
          name: "Tyler Higgs",
          role: "Umwigisha, Langara College",
          text: "Aboubakar yari umuhinga mu guhingura ubuhinga no gutunganya imigambi. Yarerekanye ubuhinga bukomeye mu kuvugana no gukora ibintu bishasha, akora neza cane mu murwi.",
        },
      ],
    },
    journal: {
      title: "Ikinyamakuru c'ingendo",
      subtext:
        "Kujandika mu buzima bwanje mu migabane itandukanye. Inkuru z'imico, iterambere, n'ivyo nabonye.",
      readMore: "Soma inkuru",
      comingSoon: "Izindi nkuru ziri hafi kuza...",
      posts: {
        mexico: {
          title: "Gusubira mu Rugo muri Megizike",
          date: "2018 - 2024",
          excerpt:
            "Hirya y'amabarabara yuzuye ibirori n'ingoma za Mexico City, nahasanze ikindi gice canje ntari nzi ko kiriho.",
          content:
            "Kuba muri Megizike mu kiringo c'imyaka itandatu ntabwo ryari icicaro gusa; kwari uguhinduka mu buzima. Ndibuka bwa mbere ngenze muri Zócalo, numva uburemere bw'amateka n'umutima w'umujyi udasinzira. Inyendo yanje yanshikirije ku buryohe bwa 'mole' muri Oaxaca n'ubwiza bwa Puebla, gushika ku nyubako za kera muri Querétaro na San Miguel de Allende. Narumvise inguvu za Guadalajara, imizi y'amateka y'abasangwabutaka n'amashamba y'inzitane ya Chiapas, hamwe n'izuba rirenga riryoshe ku nkengera z'amazi muri Acapulco. Megizike yanyigishije ko 'mu rugo' atari ahantu gusa—ni ukumva uri mu muco ushira imbere ubuzima mu buryo bwose. Nize kuyobora umuhora wa Metro, niga n'ururimi ruryoshe rw'Icespanyoro hamwe n'ubuntu bw'abantu baho bafata abashitsi nk'abavukanyi.",
        },
      },
    },
    gallery: {
      viewGallery: "Raba amafoto",
      backToHome: "Subira Ahabanza",
      viewMore: "Reba vyinshi",
      imageComing: "Ifoto iraza vuba",
    },
    hero: {
      title: "Urugendo rw'ubuzima bwanje",
      subtext:
        "Kuva hagati mu Burundi gushika mu bihugu bitandukanye, uyu ni umugani w'ingendo zanje kw'isi n'ivyigwa nize.",
      profile: "Ubuzima bwanje",
      name: "Izina ryanje ni Aboubakar Muco",
      bio: "Ndi umuhinga mu guhingura ubuhinga bwa none (Full-stack developer) n'ishaka ryo gukora ibintu bishasha. Hamwe n'ubwo buhinga, mfise ubumenyi bwinshi mu guhindura indimi (Translations) no kwigisha Icongereza, bivyo bimfasha kugira uburyo bushasha bwo guhingura ubuhinga bwa none mu buryo bwumvikana.",
      cta: "Twandikire",
      readMore: "Soma Vyinshi",
    },
    journey: {
      title: "Urugendo",
      burundi: {
        title: "Aho nakuriye mu Burundi",
        desc: "Navukiye nanakurira i Nyamugari Gitega. Maze guheza ishure rishingiro, nagiye i Bujumbura gukurikirana ivyigwa vya masekonderi.",
      },
      egypt: {
        title: "Misiri: 2001 - 2012",
        desc: "Nagiye muri Misiri ku mfashanyo y'ishure. Nahejeje amashure ya masekonderi muri Alexandria (muri Asafrah). Inyuma yaho, nagiye i Cairo kuronkerayo impapuro z'umutsindo za kaminuza (Bachelor's degree) muri Nasr City.",
      },
      loop: {
        title: "Urugero rw'isi (2012 - 2024)",
        desc: "Akazi kanje n'ubuzima bwanje vyantumbereje mu bihugu bitandukanye ku rugero rw'isi:",
        mexico: "Megizike: 2012, 2015, na 2018 - 2024",
        england: "Ubwingereza: 2013, na 2015 - 2018",
        kenya: "Kenya: 2014",
      },
      canada: {
        title: "Kanada: 2024 - Gushika ubu",
        desc: "Igice ca nyuma c'urugendo rwanje camshikanye muri Kanada, aho mba gushika ubu.",
        galleryTitle: "Ifoto zo muri Kanada",
        gallerySub:
          "Amafoto yerekana ubuzima n'imibereho muri Kanada nshya yanjye.",
        backToCountry: "Subira muri Kanada",
      },
    },
    travels: {
      title: "Aho nashitse kw'isi",
      subtext:
        "Ibihugu nabaye mwo canke nateveyeko mu rugendo rwanje. Kugira uronke ayandi makuru, fyonda ku bendera.",
    },
    contact: {
      title: "Tuvugane",
      subtext:
        "Uripfuza kumenya inkuru yanje canke gukorana nanje? Nopfuma ndonke amakuru yawe.",
      name: "Izina ryawe",
      email: "Imeeli yawe",
      message: "Ubutumwa bwawe",
      send: "Rungika ubutumwa",
      localTime: "Isaha y'aho",
      weather: "Uko ibihe bimeze",
      calculating: "Turiko turaba...",
      successTitle: "Urakoze!",
      successMessage: "Ubutumwa bwawe bwashitse neza. Tuzokwishura vuba.",
      footerInfoTitle: "Inkuru Yanje",
      footerSocialTitle: "Imbuga nkoranyambaga",
    },
    skills: {
      title: "Ubuhinga n'ubumenyi",
      tech: "Ubuhinga bwa none bwa internet",
      techDesc:
        "Gukora ubuhinga bwa none (web apps) bukora neza bukoresheje React, Node.js, n'izindi mbuga za none.",
      lang: "Guhindura indimi",
      langDesc:
        "Ubumenyi bwinshi mu guhindura indimi (translation) n'ubusemuzi, mu gufasha abantu kuvugana n'aho baba bakoresha indimi zitandukanye.",
      education: "Kwigisha Icongereza",
      educationDesc:
        "Ubumenyi mu kwigisha ururimi rw'Icongereza, mu gutanga uburyo bwumvikana bwo kwiga no kwandika neza.",
    },
    careerPage: {
      title: "Inkuru y'akazi kanje",
      subtitle:
        "Ku mwanya wa mbere nari ndi umuhinyanyuzi, nyuma mwigishijwe Icongereza none ubuhinga bwa porogarame bwinjiye butuma ndushaho gutanga serivisi zihuriweho.",
      sections: [
        {
          title: "Umuhinyanyuzi n'Umusemuzi",
          duration: "2009 – ubu",
          desc: "Natangiriye nk'umuhinyanyuzi n'umusemuzi w'umwuga huru (freelance) hagati ya Kirundi, Swahili, Icongereza n'Icarabu, maze nongera Ispaniya muri 2020 mu mirimo ya kijamii n'iy'ishuri mbere yo kwinjira mu guhanga porogarame.",
          languagesHeader: "Indimi zikoreshwa",
          languages: [
            "Kirundi",
            "Swahili",
            "Icongereza",
            "Icarabu",
            "Ispaniya",
          ],
        },
        {
          title: "Umwigisha w'Icongereza",
          duration: "2012 – ubu",
          desc: "Amasomo yanjye yarimo inkuru, umuco, n'ibiganiro bifatika kugira ngo abanyeshure babone uburyo bwo kuvuga neza.",
        },
        {
          title: "Umuhinga mu Guhanga Porogarame",
          duration: "2024 – ubu",
          desc: "Diploma ya Web and Mobile App Development Post-Baccalaureate ya Langara College yampaye ubushobozi bwo guhuza ubumenyi bw'indimi n'ikoranabuhanga.",
          detailsHeader: "Ibikubiye mu nyigisho",
          details: [
            "Imishinga ya full-stack na React na Node.js",
            "Prototype zo ku mishinga y'imbere mu mashini n'ubushakashatsi ku buryo bworoshye gukoresha",
          ],
        },
      ],
      backHome: "Subira ku rubuga rw'ahabanza",
    },
    galleryHub: {
      title: "Ahabitswe Ivyibukirwa",
      subtext:
        "Hitamo igihugu kugira urabe ivyibukirwa n'ibice nagiye ndashika mwo muri uru rugendo rwanje.",
      photos: "Amafoto",
      comingSoon: "Biri hafi kuza",
    },
    countries: {
      burundi: {
        name: "Burundi: Umutima wa Afurika",
        desc: "Aha niho inkuru yanje yatanguriye. Navukiye nanakurira mu misozi myiza ya Gitega na Bujumbura, u Burundi ni rwo rugo rwanje rwamaho.",
        galleryTitle: "Ibifoto vyo mu Burundi",
        gallerySub:
          "Kuraba aho nakuriye n'ivyo nibuka mu Burundi biciye muri aya mafoto.",
        backToCountry: "Subira mu Burundi",
      },
      egypt: {
        name: "Misiri: Intara y'iterambere rya kera",
        desc: "Igihe namaze muri Misiri (2001-2012) carampinduye cane. Kuva ku nkengera za Alexandria gushika mu mayira ya Cairo.",
        galleryTitle: "Ibifoto vyo muri Misiri",
        gallerySub:
          "Kwibuka imyaka y'ishure n'ivyo nanyuzemo mu gihugu c'Abafarawo.",
        backToCountry: "Subira muri Misiri",
      },
      mexico: {
        name: "Megizike: Igice gishimishije",
        desc: "Megizike yabaye igice gihambaye mu buzima bwanje, nahabaye mu 2012, 2015, n'inyuma yaho kuva mu 2018 gushika mu 2024.",
        galleryTitle: "Ifoto zo muri Megizike",
        gallerySub: "Reba amafoto y’uturere dutandukanye twa Megizike.",
        backToCountry: "Garuka Megizike",
        subgalleries: {
          mexicoCity: {
            title: "Ifoto za Mexico City",
            desc: "Umurwa mukuru munini uvanga amateka ya kera n’ubuzima bwa none.",
          },
          oaxaca: {
            title: "Ifoto za Oaxaca",
            desc: "Izwi ku muco w’abasangwabutaka ukungahaye n’ibiryo byiza.",
          },
          chiapas: {
            title: "Ifoto za Chiapas",
            desc: "Amashyamba meza, ibisigazwa bya Maya, n’imico yihariye.",
          },
          queretaro: {
            title: "Ifoto za Querétaro",
            desc: "Urusobe rw’imitako yisunze ibihe bya kera n’inyubako ziri ku rutonde rwa UNESCO.",
          },
        },
      },
      england: {
        name: "Ubwingereza: Ishingiro ry'akazi",
        desc: "Igihe namaze mu Bwingereza (2013 na 2015-2018) carantunganirije mu bijanye n'akazi n'imigenderanire.",
      },
      kenya: {
        name: "Kenya: Afurika y'ubuseruko",
        desc: "Kuba muri Kenya mu 2014 vyampaye akaryo ko kubona iterambere ryo muri Afurika y'ubuseruko n'uburyo ari heza.",
      },
      canada: {
        name: "Kanada: Ahatanguriye ibindi",
        desc: "Urugendo rwanje rwashitse muri Kanada mu 2024, ntangura igice gishasha mu buzima bwanje bwo gukora mu gihugu kishira kigahora.",
      },
      uganda: {
        name: "Uganda: Inshonore ya Afurika",
        desc: "Kuraba ubwiza bw'isi n'imico y'abantu b'i Bugande, igihugu gihambaye muri Afurika y'ubuseruko.",
      },
      rwanda: {
        name: "Urwanda: Intara y'imisozi igihumbi",
        desc: "Kwirabira iterambere n'ubwiza bw'u Rwanda, igihugu kibanyi c'uburundi.",
      },
      tanzania: {
        name: "Tanzania: Ubwiza butagira urugero",
        desc: "Kuva mu mizinga gushika mu gihugu hagati, ubwiza bwa Tanzania n'ubukundanyi bw'abantu baho vyarantangaje.",
      },
      senegal: {
        name: "Senegali: Roho ya Teranga",
        desc: "Kumenya ubumenyi bwo kwakira abantu n'imico yo muri Senegali muri Afurika y'uburengero.",
        galleryTitle: "Amafoto ya Senegali",
        gallerySub:
          "Umucyo wa pwani, ibirori, n'imihanda ya Dakar nakuye mu rugendo rwanjye muri Afrika y'Uburengerazuba.",
        backToCountry: "Subira muri Senegali",
      },
      scotland: {
        name: "Sikoti: Ubwiza n'amateka",
        desc: "Kumenya ubwiza n'amateka yo muri Sikoti igihe nashika mu gihugu c'Ubwingereza.",
      },
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
