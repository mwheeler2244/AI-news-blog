import { type Article, type Topic } from "@/types";
import { getCategoryImages } from "@/lib/utils";

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "The Future of AI in Everyday Life and How it Can Help",
    content:
      "Artificial intelligence is rapidly transforming how we interact with technology. From smart assistants to predictive algorithms, AI is becoming an invisible force that shapes our daily experiences. Researchers predict that within the next decade, AI will become as commonplace as smartphones, integrated into nearly every aspect of our lives.\n\nThe integration of AI into our daily routines has been subtle but pervasive. Voice assistants like Siri, Alexa, and Google Assistant have become household names, helping us set reminders, answer questions, and control smart home devices with simple voice commands. Meanwhile, recommendation algorithms on platforms like Netflix, Spotify, and Amazon have become increasingly sophisticated, learning our preferences and suggesting content or products we might enjoy.\n\nBut this is just the beginning. Experts predict that AI will soon play a much more significant role in areas like healthcare, education, and transportation. In healthcare, AI algorithms are already being used to analyze medical images, detect diseases earlier than human doctors can, and develop personalized treatment plans. In education, AI tutors could provide customized learning experiences tailored to each student's strengths, weaknesses, and learning style. And in transportation, self-driving cars powered by AI could revolutionize how we get around, making travel safer and more efficient.\n\nHowever, the rise of AI also raises important questions about privacy, security, and the future of work. As AI systems collect and analyze more of our personal data, how do we ensure that this information is protected and used ethically? As AI automates more tasks currently performed by humans, what happens to the jobs that are displaced? These are complex questions that society will need to grapple with as AI continues to advance.\n\nDespite these challenges, the potential benefits of AI are enormous. By automating routine tasks, AI could free up human time and creativity for more meaningful pursuits. By analyzing vast amounts of data, AI could help us solve some of our most pressing problems, from climate change to disease. The future of AI is not just about smarter machines—it's about creating a smarter, more efficient, and more equitable world for all of us.",
    topic: "Technology",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    author: "Alex Johnson",
    image: getCategoryImages("Technology", 1),
    featured: true,
  },
  {
    id: "2",
    title: "Olympic Athletes Break Records in Summer Games",
    content:
      "This year's Summer Olympics has seen an unprecedented number of world records shattered. Athletes from around the globe have pushed the boundaries of human performance, with particularly impressive showings in swimming and track events. Experts attribute these achievements to advances in training techniques and sports science.\n\nThe swimming competition has been particularly remarkable, with new world records set in over half of the events. American swimmer Michael Turner broke the 100m freestyle record that had stood for eight years, while Chinese swimmer Liu Wei set new marks in both the 200m and 400m individual medley. The pool has truly become a showcase for human potential.\n\nOn the track, Jamaican sprinter Alicia Thompson shocked the world by breaking the women's 100m record with a time of 10.49 seconds, a mark that many thought would never be broken. In the men's marathon, Kenyan runner Emmanuel Kipchoge shattered his own world record by nearly a full minute, finishing the 26.2-mile course in just 2 hours, 1 minute, and 39 seconds.\n\nWhat's behind this explosion of record-breaking performances? Sports scientists point to several factors. Advances in nutrition and recovery techniques have allowed athletes to train harder and more effectively than ever before. Improvements in equipment, from swimsuits to running shoes, have also played a role. And the use of data analytics has helped coaches fine-tune training programs to maximize each athlete's potential.\n\nBut perhaps the most important factor is the competitive environment of the Olympics itself. With the world watching and national pride on the line, athletes push themselves to limits they might not otherwise reach. The result has been a spectacular display of human achievement that has captivated audiences worldwide.\n\nAs the Games continue, many are wondering how many more records will fall. Whatever the final tally, this Olympics will be remembered as a watershed moment in sports history, a time when athletes redefined what was possible in their respective disciplines.",
    topic: "Sports",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
    author: "Maria Rodriguez",
    image: getCategoryImages("Sports", 0),
    featured: true,
  },
  {
    id: "3",
    title: "New Climate Policy Announced by World Leaders",
    content:
      'In a historic summit, world leaders have agreed to a groundbreaking climate policy that aims to reduce global carbon emissions by 50% by 2030. The agreement includes substantial investments in renewable energy and sets binding targets for major economies. Environmental activists have cautiously welcomed the news while emphasizing the need for accountability.\n\nThe agreement, reached after three days of intense negotiations, represents the most ambitious global climate initiative to date. Under the terms of the deal, developed nations have committed to achieving carbon neutrality by 2040, while developing countries will have until 2050 to reach the same goal. All signatories have agreed to interim targets, including a 50% reduction in emissions by 2030 compared to 2005 levels.\n\nTo help achieve these goals, the agreement establishes a $100 billion annual fund to support renewable energy projects in developing countries. The fund will be financed primarily by contributions from wealthy nations, with additional support from a new global carbon tax on the fossil fuel industry.\n\nThe policy also includes provisions for regular monitoring and verification of each country\'s progress, addressing a key concern from previous climate agreements. Countries that fail to meet their targets will face economic sanctions, a measure that was controversial but ultimately deemed necessary to ensure compliance.\n\nEnvironmental groups have generally responded positively to the announcement, though many have expressed concerns about implementation. "This agreement represents a significant step forward in the fight against climate change," said Greenpeace International Director Elena Ramirez. "However, we\'ve seen ambitious targets before. What matters now is turning these commitments into concrete action."\n\nBusiness leaders have had mixed reactions. While renewable energy companies have celebrated the agreement as a boon for their industry, traditional energy companies have warned about potential economic disruption. However, many major corporations have already begun transitioning to more sustainable practices in anticipation of stricter regulations.\n\nAs the world begins the difficult work of implementing this new policy, one thing is clear: the global approach to climate change has entered a new, more urgent phase. The success or failure of this agreement will have profound implications for the future of our planet.',
    topic: "Politics",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8),
    author: "James Wilson",
    image: getCategoryImages("Politics", 0),
    featured: false,
  },
  {
    id: "4",
    title: "Breakthrough in Cancer Research Shows Promise",
    content:
      'Scientists have announced a significant breakthrough in cancer treatment research. The new approach uses targeted immunotherapy to identify and eliminate cancer cells with minimal side effects. Early clinical trials have shown remarkable results, with over 70% of participants experiencing partial or complete remission.\n\nThe treatment, developed by a team of researchers at Stanford University, represents a fundamental shift in how we approach cancer therapy. Traditional treatments like chemotherapy and radiation target all rapidly dividing cells, both cancerous and healthy, leading to significant side effects. This new immunotherapy approach, however, trains the body\'s immune system to specifically recognize and attack cancer cells while leaving healthy cells untouched.\n\nThe key innovation lies in the use of synthetic antibodies that are designed to bind to specific proteins found only on the surface of cancer cells. Once bound, these antibodies signal the immune system to destroy the cell. The researchers have developed a library of these antibodies, each targeting a different type of cancer, from lung and breast to colon and pancreatic.\n\nIn the phase I clinical trial, 100 patients with advanced cancers that had not responded to conventional treatments received the immunotherapy. The results were striking: 72% of patients showed significant tumor reduction, with 35% experiencing complete remission. Even more remarkably, the treatment had minimal side effects compared to traditional cancer therapies.\n\n"This is potentially a game-changer in how we treat cancer," said Dr. Sarah Chen, the lead researcher on the project. "Instead of using toxic chemicals or radiation to kill cancer cells, we\'re essentially teaching the body\'s own immune system to recognize and eliminate these cells naturally."\n\nWhile the researchers caution that larger trials are needed to confirm these results, the medical community has responded with cautious optimism. "These early results are very promising," said Dr. Robert Johnson, director of the National Cancer Institute, who was not involved in the research. "If confirmed in larger studies, this approach could revolutionize cancer treatment."\n\nThe team is now preparing for a larger phase II trial that will include over 500 patients across multiple cancer types. They hope to have the treatment available for widespread use within five years, pending FDA approval.',
    topic: "Health",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12),
    author: "Sarah Chen",
    image: getCategoryImages("Health", 0),
    featured: false,
  },
  {
    id: "5",
    title: "Streaming Platform Releases Most Anticipated Series of the Year",
    content:
      "The long-awaited sci-fi series 'Cosmic Horizons' has finally premiered on StreamMax, breaking viewership records in its first weekend. Critics are praising the show's innovative storytelling, stunning visual effects, and diverse cast. The series, which took over three years to produce, represents one of the largest investments in original content for the streaming platform.\n\nSet 200 years in the future, 'Cosmic Horizons' explores humanity's expansion into the solar system and the social, political, and existential challenges that arise as we become an interplanetary species. The show follows a diverse group of characters, from politicians and scientists to miners and rebels, as they navigate this new frontier.\n\nWhat sets 'Cosmic Horizons' apart from other sci-fi shows is its commitment to scientific accuracy. The production team consulted with NASA scientists and aerospace engineers to ensure that the depiction of space travel, zero-gravity environments, and planetary conditions is as realistic as possible. \"We wanted to create a show that feels like it could actually happen,\" said showrunner Elena Rodriguez. \"The science is so integral to the story that we couldn't afford to get it wrong.\"\n\nThe show's visual effects have also drawn praise. The space scenes, particularly a sequence depicting a perilous journey through Saturn's rings, have been described as breathtaking. \"We've never seen space portrayed with this level of detail and beauty on television before,\" wrote one critic from The Hollywood Reporter.\n\nBut it's not just the technical aspects that have resonated with audiences. The show's exploration of themes like colonization, resource scarcity, and what it means to be human in an increasingly technological world has struck a chord. \"'Cosmic Horizons' uses its futuristic setting to hold up a mirror to our present,\" noted a review in The New York Times.\n\nThe success of 'Cosmic Horizons' represents a major win for StreamMax, which has been investing heavily in original content to compete with other streaming platforms. According to early data, the show's premiere weekend saw a 40% increase in new subscriptions compared to the platform's previous record.\n\nAll ten episodes of the first season are now available for streaming, and the show has already been renewed for a second season, which is expected to begin production later this year.",
    topic: "Entertainment",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    author: "David Patel",
    image: getCategoryImages("Entertainment", 0),
    featured: true,
  },
  {
    id: "6",
    title: "Mars Rover Discovers Evidence of Ancient Water Systems",
    content:
      "NASA's latest Mars rover has uncovered compelling evidence of complex water systems that once flowed on the red planet. The findings include mineral deposits and geological formations that could only have been created by sustained water activity. This discovery significantly strengthens the case that Mars once had conditions suitable for life.\n\nThe rover, which has been exploring a region known as Jezero Crater for the past six months, used its advanced suite of scientific instruments to analyze rock samples and geological features in the area. The data it collected revealed the presence of hydrated minerals that could only have formed in the presence of water, as well as sedimentary structures that suggest the existence of an ancient river delta.\n\n\"What's particularly exciting about these findings is that they indicate not just the presence of water, but a complex hydrological system that persisted for a significant period of time,\" said Dr. Emily Nakamura, the mission's lead scientist. \"We're talking about rivers, lakes, and possibly even oceans that existed on Mars billions of years ago.\"\n\nOne of the most significant discoveries was a series of layered rock formations that bear striking similarities to river deltas on Earth. These formations, which occur when rivers deposit sediment as they flow into larger bodies of water, suggest that the crater once contained a lake that was fed by a river system. Analysis of the sediment layers indicates that this water system was active for at least several thousand years.\n\nThe rover also discovered traces of organic compounds in some of the rock samples, though scientists caution that these compounds could have been formed by non-biological processes. Nevertheless, the presence of these compounds, combined with evidence of long-standing water, makes Jezero Crater one of the most promising locations in the search for evidence of ancient Martian life.\n\n\"These findings don't prove that life existed on Mars, but they do tell us that the conditions necessary for life were present for a significant period of time,\" said Dr. Nakamura. \"That's a crucial step in our understanding of Mars' potential habitability.\"\n\nThe rover will continue to explore Jezero Crater in the coming months, with a particular focus on collecting samples that will eventually be returned to Earth by a future mission. These samples will undergo more detailed analysis than is possible with the rover's onboard instruments, potentially revealing even more about Mars' watery past and whether it once harbored life.",
    topic: "Science",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 36),
    author: "Emily Nakamura",
    image: getCategoryImages("Science", 1),
    featured: false,
  },
  {
    id: "7",
    title: "Global Markets Rebound Amid Economic Optimism",
    content:
      "Global stock markets surged today as investors reacted positively to new economic data suggesting a faster-than-expected recovery. The U.S. Dow Jones rose over 600 points, while European and Asian markets posted similar gains. Analysts credit the rally to strong consumer spending reports and easing inflation.\n\nThe optimism comes on the heels of quarterly earnings from several major retailers, showing robust consumer activity despite recent interest rate hikes. In Europe, confidence was further boosted by revised GDP forecasts from the European Central Bank, which now expects moderate growth through the end of the year.\n\nMarket strategists are also pointing to positive signals in the job market and increased business investment. \"We're seeing a coordinated global recovery that's fueling investor confidence,\" said Priya Desai, Chief Market Analyst at Global Equity Partners. Still, experts urge caution, noting that geopolitical tensions and supply chain disruptions remain potential threats. Central banks are also closely monitoring inflation data and could adjust interest rates if necessary.\n\nOverall, today's rally marks a hopeful turn in what has been a turbulent year for financial markets, and investors are watching closely for further signs of sustained growth.",
    topic: "Technology",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1),
    author: "Priya Desai",
    image: getCategoryImages("Technology", 0),
    featured: false,
  },
  {
    id: "8",
    title: "New Species of Deep-Sea Jellyfish Discovered",
    content:
      "Marine biologists have discovered a previously unknown species of jellyfish over 3,000 meters below the ocean's surface. The translucent creature, named *Aurelia luna*, features bioluminescent rings and an unusual fin structure that allows it to glide silently through deep currents.\n\nThe discovery was made by a remotely operated vehicle (ROV) during an expedition to the Mariana Trench led by the Oceanic Research Institute. Scientists were stunned by the jellyfish's unique locomotion and ability to emit pulses of blue-green light. This species represents a major leap in our understanding of deep-sea life, said Dr. Lina Koh, the lead marine biologist on the expedition. It's adapted to survive under extreme pressure, total darkness, and near-freezing temperatures. \n\nThe team believes the jellyfish could provide insights into biological energy efficiency and light communication among deep-sea organisms. Samples have been collected for further genetic sequencing, and the team plans to return next year to study the ecosystem further.\n\nDiscoveries like this highlight the mysteries of Earth's oceans, 80% of which remain unexplored. Scientists hope continued exploration will reveal more about marine biodiversity and the planet's hidden ecosystems.",
    topic: "Science",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3),
    author: "Lina Koh",
    image: getCategoryImages("Science", 0),
    featured: true,
  },
  {
    id: "9",
    title: "Global Sounds Music Festival Launches in Paris",
    content:
      'The heart of Paris is alive with rhythm as the *Global Sounds Music Festival* kicks off its highly anticipated week-long celebration of international music. The festival features over 100 performers from around the world, including renowned artists, underground acts, and rising stars making their European debut.\n\nSet across five major outdoor stages and multiple indoor venues, the event offers a genre-spanning experience—from Afrobeat and Latin fusion to techno, jazz, and indie rock. Headliners include Grammy-winning artist Burna Boy, French electronic duo Justice, and Japanese jazz fusion group Soil & "Pimp" Sessions.\n\nOrganizers have spent over two years curating the lineup and building partnerships with cultural institutions to highlight musical diversity and cross-cultural collaboration. The festival also features immersive sound installations, live DJ sets, and workshops on music production and songwriting.\n\nThis is more than just a concert—its a global musical journey that celebrates creativity and connection, said festival director Dominique Lefevre. The festival runs through the weekend and is expected to draw tens of thousands of music lovers from across the globe.\n\nAttendees can also enjoy a companion app that offers interactive schedules, artist bios, and exclusive behind-the-scenes content.',
    topic: "Entertainment",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4),
    author: "Dominique Lefevre",
    image: getCategoryImages("Entertainment", 2),
    featured: false,
  },
  {
    id: "10",
    title: "Breakthrough in Quantum Computing Achieved by European Researchers",
    content:
      "A consortium of European scientists has announced a major breakthrough in quantum computing, unveiling a prototype that significantly improves qubit stability and error correction. The advance was made by researchers from ETH Zurich, Delft University of Technology, and the Max Planck Institute for Quantum Optics.\n\nTheir new architecture uses topological qubits, a design that dramatically reduces decoherence and noise—two major obstacles in the race to build scalable quantum computers. The prototype has already demonstrated reliable computation over extended periods, a feat previously out of reach.\n\nAchieving longer coherence times opens the door to more complex algorithms and real-world applications, said Dr. Lara Schmidt, lead physicist at ETH Zurich. The teams findings have been published in *Nature*, and peer reviews suggest this could fast-track the development of commercially viable quantum systems.\n\nThe announcement has sent ripples through the tech industry, with several companies—including IBM, Intel, and Google—publicly congratulating the team and hinting at potential collaborations.\n\nBeyond its technical implications, this breakthrough may accelerate research in climate modeling, drug discovery, and cryptography by enabling powerful simulations not possible with classical computers.",
    topic: "Technology",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    author: "Lara Schmidt",
    image: getCategoryImages("Technology", 3),
    featured: true,
  },
];

export const topics: Topic[] = [
  "Technology",
  "Sports",
  "Politics",
  "Entertainment",
  "Health",
  "Science",
];
