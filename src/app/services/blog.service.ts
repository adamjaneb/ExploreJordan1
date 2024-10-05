import { Injectable } from '@angular/core';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  description: string;
  imgSrc: string;
  publishDate: string;
}

@Injectable({
  providedIn: 'root' 
})
export class BlogService {

  blogImg1 : string = "assets/blog1.jpg";
  blogImg2 : string = "assets/blog2.png";
  blogImg3 : string = "assets/blog3.jpg";
  blogImg4 : string = "assets/blog4.jpg";
  blogImg5 : string = "assets/blog5.jpg";
  blogImg6 : string = "assets/blog6.jpg";

  private blogPosts : BlogPost[] = [
    {
      id: '1',
      title: "Hiking the Jordan Trail changed my life – and I'm not alone",
      excerpt: "Experience the transformative power of Jordan's breathtaking landscapes and rich culture on this unforgettable hiking adventure.",
      imgSrc: "assets/blog1.jpg",
      description: `<p>From half-day hikes to the full 675-km path, the Jordan Trail is an amazing – and sustainable – outdoor adventure</p>
<p>Back in 2017, I thru-hiked the Jordan Trail. On a map, the long and squiggly line links the country’s northern border with the Red Sea. In real life, my 675-km walk took me through rustling olive groves, down into steep wadis, past remote Bedouin camps, and up and over mountains that were first described in the Book of Deuteronomy. I hiked into the labyrinth of stone ruins at Petra, then across the wide-open red deserts of Wadi Rum, where I slept under an astonishing sky of stars. I completed the trail in 40 days and returned home a changed person.</p>
<p>Since the Jordan Trail first opened in 2017, hundreds have completed the same thru-hike. A few athletes have run the full cross-country course – the current record is 8 days, 9 hours and 28 minutes – while thousands more hikers have walked any of the eight separate trail sections, each offering unique highlights and scenery.</p>
<p>As the trail approaches its 7th anniversary, I returned to Jordan, nostalgic for a hike. </p>
<p>I asked my friends what was new, and they pointed me toward a remapped 23-kilometre section connecting the 2,000-year-old Greek palace ruins at Iraq Al Amir to the ancient Christian churches of As-Salt. So I grabbed a day pack and head to the far outskirts of Amman, where I spent the night at the Iraq Al Amir Women’s Cooperative. One of a dozen enterprises on the Meaningful Travel Map of Jordan, the women’s co-operative trains and employs local women in making and selling handicrafts and running a hostel for hikers. That night I ate my fill of chicken and rice, then dropped off to sleep in a comfortably-refurbished stable that dates back to the Ottoman period.</p>
<p>The next morning, I laced up my boots and then went out to meet my Jordanian trail guide, Lama Hamdan.</p>
<p>“Lim Lim!” I shouted, embracing my old friend and using her trail name. “Sheikh Nawaf!” she called back to me with a nickname I had not heard in years. We head off early to beat the warm sun. For the first five hundred metres, I made big bold strides, feeling overly confident because I had already thru-hiked the trail.</p>
<p>“Shwaya, shwaya,” Lama gently reminded me in Arabic to take it slow, step by step. “We’re hiking uphill this time!” Indeed, when I first hiked the trail, I had hiked this section downhill in early spring. Now I was hiking uphill and into the full heat of the sun. Listening to my friend, I shed my bravado and began matching my steps to my breath. I began sweating and removed an outer layer, then sipped some water, and settled into the steady pace of trail hiking.</p>
<p>The mountain landscape resembled a crumpled blanket, with deep folds of terraced limestone scrubby slopes where black and white sheep grazed. After cresting our first hill and descending the next, we began chatting, comparing notes – how had thru-hiking the Jordan Trail changed us?</p>
<p>“I deleted my Facebook account,” I answered, but that was a small thing. After forty days spent living outdoors on the trail – breathing fresh air and camping under the stars – I realized that I needed more nature in my life. Within a year I had ditched my apartment in the city and moved 100 kilometres away, to a place where black bears roam my yard and I can see the stars at night.</p>
<p>“Black bears? Really?” asked Lama, so I showed her the pictures on my phone. Then she pulled out her phone and swiped through hundreds of scenes from the trail that is now her home. When I first met Lama, she worked as a graphic designer in Amman. Like me, after hiking the Jordan Trail, she decided she wanted to spend more time in nature. Lama quit her job and went back to school, passing her national exam and becoming the first woman to certify as an official guide on the Jordan Trail. She now works full-time as a guide, leading guests across Jordan on foot.</p>
<p>“Don’t be afraid to change your life and follow your dream, " Lama told me. “That’s what the Jordan Trail taught me.”</p>
<p>Written by Andrew Evans a freelance travel journalist and author</p>`,
      publishDate: "May 28, 2023"
    },
    {
      id: '2',
      title: "As-Salt, Jordan Listed on UNESCO World Heritage List",
      excerpt: "Discover the historical significance and architectural beauty of As-Salt, Jordan's newest UNESCO World Heritage site.",
      imgSrc: "assets/blog2.png",
      description: `<p>The United Nations Educational, Scientific and Cultural Organization (UNESCO) listed the historic Jordanian city of As-Salt on the World Heritage List as “the city of tolerance and civilized hospitality.”</p>

<p>Built on three hills in the kingdom’s west-central region, As-Salt was a vital trading center between the eastern desert and the west during the late Ottoman period, attracting many merchants, tradespeople, and craftsmen from different parts of the region who settled and worked in trading, banking, architecture, and farming jobs. Their impact and contributions to the city helped Salt flourish, grow, and develop into the place it is today.</p>

<p>According to UNESCO, the city’s urban center includes about 650 important historic buildings that reflect a combination of European Art Nouveau and Neo-Colonial styles as well as local traditions and customs.</p>

<p>“The historic center of Salt demonstrates distinctive intercultural exchanges that resulted in transformations of the Levant in the late Ottoman period, which included flows of culture, people, skills, traditions, and wealth within and between the cities of the region and beyond, and between diverse cultural and religious groups that comprised the urban population from the city’s ‘Golden Age’ to the present,” UNESCO states.</p>

<p>Salt is the first urban city in Jordan to be added to the World Heritage List; however, it now becomes the sixth Jordanian landmark to be declared a World Heritage Site. Other Jordanian sites that are listed include, Petra, Quseir Amra, Umm er-Rasas, Wadi Rum Protected Area, and the Baptism Site of Jesus Christ. Only a 30-minute drive from Jordan’s capital city of Amman, a day-trip to Salt will certainly be worth it.</p>

<p>Here is a round-up of some of the top places to visit and activities to partake in during a trip to Salt.</p>

<p>
    1. **As-Salt Archeological Museum**
    Established in the 1900s, the museum is located in one of the historic heritage houses of the city, Beit Toukan, which translates to “toukan house.” The museum includes artifacts and items from the Roman, Byzantine, and Islamic eras.
</p>

<p>
    2. **Traditional Henna Experience**
    The Salt Development Corporation (SDC), a non-profit, non-government organization that focuses on tourism infrastructure provides Henna-learning and drawing experiences for the entire family.
</p>

<p>
    3. **Al-Hammam Street**
    Named after a Turkish bath, the Al-Hammam Street is the main traditional market street in the city offering pedestrians an opportunity to stroll, shop local products, and enjoy the ancient architecture of As-Salt.
</p>

<p>
    4. **St. George Orthodox Church/Al-Khader Church**
    Built in the 1600s in a cave, the St. George Church is one of the oldest and most visited churches in the city that welcomes both Muslim and Christian worshipers to pray. The church was renovated in 2004.
</p>

<p>
    5. **Pottery Making**
    The Salt Development Corporation offers visitors to Salt an opportunity to learn about the process of producing handmade pottery and design their own pottery souvenirs.
</p>

<p>For more information about visiting Salt and activities one can plan, please visit: [Explore As-Salt](http://www.visitas-salt.com/en)</p>

<p>Written by Leen Hajjar</p>`,
      publishDate: "April 22, 2024"
    },
    {
      id: '3',
      title: "8 Day Trip",
      excerpt: "Plan your perfect 8-day journey through Jordan, exploring ancient wonders and natural beauty.",
      imgSrc: "assets/blog3.jpg",
      description: `<p>
    Discover the Ecological Diversity of Jordan
</p>
<p>
    Day 3: Dana Biosphere Reserve
</p>
<p>
    From the Dead Sea, continue your way down south to Dana Biosphere Reserve, an area of staggering beauty, history, and biodiversity. It is the only reserve in Jordan that encompasses the four different biogeographical zones of the country (Mediterranean, Irano-Turanian, Saharo-Arabian and Sudanian), it is a melting pot of species from Europe, Africa and Asia. Such a combination of natural communities in a single area is unique in Jordan and many of the Dana Biosphere Reserve’s animals and rare plants.
</p>
<p>
    Overnight in Rummana campsite
</p>
<p>
    Exploring the Jewel of Jordan, Petra
</p>
<p>
    Day 4: Petra
</p>
<p>
    Make your way to Petra, one of Jordan's most renowned national treasures and by far its best-known tourist attraction. Petra is the legacy of the Nabataeans, an industrious Arab people who settled in southern Jordan more than 2,000 years ago. Petra is a UNESCO World Heritage Site and one of the new Seven Wonders of the World. Inhabited by the Nabateans, Edomites, and Romans, Petra brought together the knowledge and skill of these civilizations to create this world wonder.
</p>
<p>
    Overnight in Petra
</p>
<p>
    A Seaside Escape to Aqaba
</p>
<p>
    Day 5: Petra - Aqaba
</p>
<p>
    After exploring the fascinating Nabatean City of Petra, continue your Jordanian adventure with a trip to Aqaba. Located on the shores of the Red Sea, Aqaba is Jordan's only outlet to the sea, and is renowned for its excellent diving opportunities, mild winters, sandy beaches, and crystal-clear waters. Spend a full day soaking up the sun and swimming, diving, or simply relaxing on the beach while taking in the stunning flora and fauna of the Red Sea.
</p>
<p>
    Overnight in Aqaba
</p>
<p>
    Discover the Contrasting Beauty from Beaches to Desert
</p>
<p>
    Day 6: Aqaba - Wadi Rum
</p>
<p>
    After a day of fun in the sun, head to Wadi Rum, the largest desert in Jordan and a protected area where Sir Lawrence wrote the "Seven Pillars of Wisdom." Here, you can watch the sunset over the stunning desert landscape before enjoying a delicious dinner and an overnight stay in the desert.
</p>
<p>
    Overnight in Wadi Rum
</p>
<p>
    Exploring the Wonders of Wadi Rum, Madaba, and Mount Nebo
</p>
<p>
    Day 7: Wadi Rum - Madaba - Amman
</p>
<p>
    Start your day by continuing your exploration of Wadi Rum, the vast desert wilderness and protected area in Jordan. Take in the spectacular scenery and enjoy the peaceful serenity of the desert landscape. After your morning adventure, transfer to the historic city of Madaba, home to the impressive Greek Orthodox Church of St. George. Here, you can marvel at the ancient Mosaic Map of Palestine and the Holy Land, a beautifully crafted artwork made of over 2 million pieces of colored stone. After visiting the church, head to Madaba Archaeological Park, an open-air museum with ruins from the Hellenistic, Roman, Byzantine, and Islamic periods. Finally, drive to Mount Nebo, where you can take in breathtaking panoramic views of the Holy Land and the Dead Sea. Similar to Moses, you will be able to overlook the land from above, and witness the awe-inspiring beauty of the region. Then return back to Amman.
</p>
<p>
    Saying Farewell to Jordan with a Visit to As-Salt
</p>
<p>
    Day 8: Amman - Salt
</p>
<p>
    If you have an evening flight you will have some time to wake up early and head to As-Salt, located northwest of the capital, Amman. The city is built on three mountains and is surrounded by beautiful views. As-Salt was recently added to the UNESCO World Heritage List as "the place of tolerance and urban hospitality," making it the sixth Jordanian landmark to receive this designation.
</p>`,
      publishDate: "August 15, 2022"
    },
    {
      id: '4',
      title: "In Jordan, to Grandmother's House We Go",
      excerpt: "Experience the warmth of Jordanian hospitality and family traditions in this heartwarming journey.",
      imgSrc: "assets/blog4.jpg",
      description: `<p>
    How three sisters are using their grandmother’s old recipes to inspire real change in the Jordanian capital of Amman.
</p>
<p>
    The noise hits you as soon as you enter the souk: a cacophony of male voices, singing the succulent merits of their wares. Juicy tomatoes; plump eggplants; buxom bulbs of garlic. Every vegetable has its own “selling song” here in the Jordanian capital of Amman, and they’re all being chanted at full, throaty volume in the bustling marketplace, like a gravelly garden symphony.
</p>
<p>
    Gliding through this boisterous melee in Souk el-Khodra—the city’s historic fruit and vegetable market—is Maria Haddad, who moves with all the effortless elan of a local, while appraising the produce with the eye of a professional chef.
</p>
<p>
    It’s a common Middle Eastern adage that Amman—which dates back to 5000 B.C.E.—is an old city with a warm heart. And in many ways, Beit Sitti is the perfect encapsulation of that welcoming.
</p>
<p>
    “We have a motto here: Cooking breaks barriers,” Maria says. “When you’re cooking with someone else, you automatically start talking to them, and any awkwardness evaporates. The most important thing about Beit Sitti is not learning a new recipe—it’s building a human connection. Maybe that’s what our grandmother was trying to teach us all along.”
</p>
<p>
    Cooking classes at Beit Sitti take place seven days a week, costing $70 per couple or $140 for one-on-one cooking lessons. For more, or to book, visit beitsitti.com.
</p>`,
      publishDate: "November 17, 2023"
    },
    {
      id: '5',
      title: "The Lowest Point on Earth with the Highest Level of Wellness & Healing",
      excerpt: "Explore the rejuvenating properties of the Dead Sea and its world-renowned wellness treatments.",
      description: `<p>
    Too often, religious sites can become noisy and chaotic tourist traps, which kind of defeats the purpose of a place that supposed to evoke meditative peace, right?
</p>
<p>
    Bethany Beyond the Jordan, a peaceful holy site, is a rare exception. A meditative place that is perfect for contemplation, exploration, and learning, this place is a hidden gem in the Holy Land.
</p>
<p>
    Read on for more information about the rich history of Bethany Beyond the Jordan, and learn what it’s like to visit it today!
</p>
<p>
    Experience the incredible historical and archaeological value of this holy place.
</p>
<p>
    Also known as Al-Maghtas, Bethany Beyond the Jordan is a peaceful holy site north of the Dead Sea where John the Baptist is said to have baptized Jesus. Beginning during the Byzantine era, faithful Christians have worshipped here and conducted baptisms of their own. Even today, it is not uncommon for Christians to hold baptisms at this site: Baptism in the same place where Jesus was supposed to have been baptized is an incomparable spiritual experience.
</p>
<p>
    The second part of the holy site, Tell Mar Elias, is located nearby. This is the hill from which the prophet Elijah is said to have ascended to heaven, and here it is possible to explore the archaeological site of a Byzantine monastery, as well as various chapels and caves. Tell Mar Elias is marked by a church honoring Elijah.
</p>
<p>
    Because of its religious and historical value, Bethany Beyond the Jordan was designated a UNESCO World Heritage Site in 2015. The incredible archaeological ruins, ancient churches, and baptismal pools that you’ll find here are testament to the significance of the site.
</p>
<p>
    Make a meaningful religious pilgrimage.
</p>
<p>
    Bethany Beyond the Jordan is only an hour’s drive from Amman, yet it somehow seems ages away from the chaotic bustle of the city. The site is kept and maintained as a wilderness area, meaning that the quiet peace that you’ll experience on the banks of the Jordan River makes it a beautiful place to reflect and pray.
</p>
<p>
    Surrounded by the pools in which early Christians conducted baptisms and the calm, quiet caves in which monks and hermits worshipped, it’s easy to appreciate the stunning spirituality of this holy place. In visiting Al-Maghtas and Tell Mar Elias, you will experience firsthand the religious authenticity of the amazing ruins that you’ll find here.
</p>
<p>
    Organized tours and knowledgeable local guides are readily available at Bethany Beyond the Jordan.
</p>
<p>
    Although Bethany Beyond the Jordan is easy to reach by bus or taxi, there are also numerous organized tours that you can take to ensure that you get the most out of your experience.
</p>
<p>
    For instance, <a href="tourlink.html">this private tour</a> includes transportation and entrance fees, as well as the services of a local guide who will show you around the baptismal site and the archaeological ruins. There is even an option to visit nearby ancient caves as well.
</p>
<p>
    Bethany Beyond the Jordan is only one of many incredible religious biblical sites that you can experience during your time in Jordan. To read more in-depth information on other holy sites in this country, download our Guide to Religion and Faith!
</p>`,
      imgSrc: "assets/blog5.jpg",
      publishDate: "January 10, 2023"
    },
    {
      id: '6',
      title: "Experiencing Bethany Beyond the Jordan - The Site of Jesus' Baptism",
      excerpt: "Walk in the footsteps of history at this significant religious site and UNESCO World Heritage location.",
      imgSrc: "assets/blog6.jpg",
      description: `<p>
    The Dead Sea is the lowest point on Earth and is famous for its nourishing salty waters with its healing powers. Let’s talk about getting you to the one and only Jordan! Once you’ve organized your itinerary, packed your bags, and flew to us, we promise you a trip like no other.
</p>
<p>
    Whether you arrive to the Dead Sea from Amman or from the Southern route after enjoying the glorious Petra, the red sands of Wadi Rum, and you’ve finally made it to the unique stunning Dead Sea. Let’s tell you about what’s happening next.
</p>
<p>
    Your journey of wellness and healing is about to start, we will take you to the next level of relaxation and feeling fresh and lively like never before!
</p>
<h2>Pamper Yourself to the Max</h2>
<p>
    If you’re looking to get pampered in a way unlike no other, then the Dead Sea is the spot for you. You will literally take the weight of the world off your shoulders by floating on the Dead Sea; the high concentration of salt in its waters will lift you up, making you feel weightless.
</p>
<p>
    Most excitingly, you will capture that stunning moment in a photo of yourself just lounging with a newspaper or book without a care in the world.
</p>
<p>
    The other magnificent part of this experience is the healing mud bath, the salt and the mud bring you miraculous health benefits to your skin mainly, it can heal many if not almost all skin impurities, acne, and even arthritis. The Dead Sea has almost 30% salt, and is overfilled with over 20 minerals such as magnesium, sodium, and potassium and many others, which will nourish your health and make your skin glow.
</p>
<p>
    This unique blend is why the Dead Sea is deemed as “the fountain of youth” for many.
</p>
<h2>The Sun Casting and the Night Falling</h2>
<p>
    The reflection of the golden rays of on the sun blending with the sea and brown mountain shades will mesmerize you. Once you are there, there’s a magical feeling you get when you experience a sunrise or a sunset here.
</p>
<h2>Take The Memory Home with You</h2>
<p>
    The Dead Sea experience assures sending you back with unique healthy treasures ranging from soaps, creams, salts, and even the mud itself. These products will make you relive these tranquil moments you are sure to miss dearly from the comfort of your home.
</p>`,
      publishDate: "November 25, 2021"
    }
  ];

  constructor() {}

  getBlogPosts() : BlogPost[] {
    return this.blogPosts;
  }

  getPostById(id: string): BlogPost | undefined {
    return this.blogPosts.find(post => post.id === id);
  }
}
