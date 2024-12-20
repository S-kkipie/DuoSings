interface Lesson {
  title: string;
  activities: string;
  homework: string;
  href: string;
}

interface Module {
  title: string;
  description: string;
  duration: string;
  href: string;
  lessons: Lesson[];
}
export const modules: Module[] = [
  {
    title: "ASL Fundamentals",
    description:
      "Learn the basics of American Sign Language, including the alphabet, numbers, and common phrases.",
    duration: "5 lessons",
    href: "/learn/module/01",
    lessons: [
      {
        title: "The finger-writing alphabet",
        activities:
          "-Learning the letters of the alphabet.",
        homework: "-Watch an ASL alphabet video and spell 10 common words.",
        href: "/lesson01",
      },
      {
        title: "Common greetings and farewells.",
        activities: "-Role-play meeting someone new and saying goodbye.",
        homework:
          "-Practice signing 5 greetings and farewells in front of a mirror.",
        href: "/lesson02",
      },
      {
        title: "Basic expressions",
        activities:
          "-Expressions like 'Hello', 'Thank you', 'Please', 'How are you?', etc.Activities to practice greetings and common phrases.",
        homework: "-Write and sign 5 simple sentences using pronouns.",
        href: "/lesson03",
      },
      {
        title: "Vocabulary of daily life.",
        activities: "-Family, friends, food, transportation, clothing, etc.",
        homework: "-Create flashcards for 10 emotion-related signs.",
        href: "/lesson04",
      },
      {
        title: "Family and relationships.",
        activities: "-Draw a family tree and sign each relationship.",
        homework: "-Practice introducing your family to someone in ASL",
        href: "/lesson05",
      },
    ],
  },
  {
    title: "Everyday Communication",
    description:
      "Continue learning American Sign Language with more advanced vocabulary and sentence structure.",
    duration: "6 lessons",
    href: "/learn/module/02",

    lessons: [
      {
        title: "Daily vocabulary.",
        activities: "-Family, friends, food, transportation, clothes, etc.",
        homework: "-Watch a cooking video in ASL and list new vocabulary.",
        href: "/lesson01",
      },
      {
        title: "Expression of emotions",
        activities: "-Signs to express happiness, sadness, anger, fear, etc.",
        homework: "-Practice signing the time for daily activities.",
        href: "/lesson02",
      },
      {
        title: "Questions and Answers",
        activities: "How to ask and answer basic questions.",
        homework: "Record yourself signing 5 daily activities.",
        href: "/lesson03",
      },
      
    ],
  },
  {
    title: "Specific contexts",
    description:
      "Master American Sign Language with advanced grammar, vocabulary, and cultural knowledge.",
    duration: "6 lessons",
    href: "/learn/module/03",
    lessons: [
      {
        title: "At work",
        activities: "Words related to professions, tools, meetings, etc..",
        homework: "Write and sign 3 sentences about your school experience.",
        href: "/lesson01",
      },
      {
        title: "At school",
        activities: "Signs for school supplies, subjects, grades, etc.",
        homework: "Create a list of 5 professions and their signs.",
        href: "/lesson02",
      },
      {
        title: "Emergencies",
        activities: "Key signals for calling for help, 'call the police', 'call an ambulance', etc.",
        homework: "Learn and practice 3 sports-related signs.",
        href: "/lesson03",
      },
    ],
  },
  {
    title: "Conversations and fluency",
    description:
      "Master American Sign Language with advanced grammar, vocabulary, and cultural knowledge.",
    duration: "8 lessons",
    href: "/learn/module/04",

    lessons: [
      {
        title: "Form complete sentences",
        activities:
          "Basic structure to communicate ideas clearly.",
        homework: "Create a visual collage and label it with ASL signs.",
        href: "/lesson01",
      },
      {
        title: "Body language and gestures",
        activities: "Importance of context and facial and body movements.",
        homework: "Sign a story about a pet or favorite animal.",
        href: "/lesson02",
      },
      {
        title: "Practice with dialogues",
        activities: "Simulated scenarios (in a market, in a restaurant, etc.).",
        homework: "Practice signing 10 action-oriented sentences.",
        href: "/lesson03",
      },
      {
        title: "Telling simple stories.",
        activities: "Retell a simple children’s story in ASL.",
        homework: "Create a storyboard for an ASL tale.",
        href: "/lesson04",
      },
    ],
  },
  {
    title: "Practical Situations",
    description:
      "Master American Sign Language in practical scenarios, focusing on everyday situations and cultural etiquette.",
    duration: "5 lessons",
    href: "/learn/module/04",

    lessons: [
      {
        title: "Emergencies and health",
        activities: "Role-play asking for help in an emergency",
        homework: "Create flashcards for 5 health-related signs",
        href: "/lesson01",
      },
      {
        title: "Public transport and travel",
        activities: "Sign a dialogue about planning a trip",
        homework: "Watch a travel-related ASL video and note new vocabulary",
        href: "/lesson02",
      },
      {
        title: "Restaurants and ordering food",
        activities: "Role-play ordering at a restaurant",
        homework: "Sign a list of your favorite meals",
        href: "/lesson03",
      },
      {
        title: "Video phone conversations",
        activities: "Simulate a video call in ASL",
        homework: "Write a script for a video conversation",
        href: "/lesson04",
      },
      {
        title: "Deaf community culture and etiquette",
        activities: "Discuss and sign 3 facts about Deaf culture",
        homework: "Research Deaf events and write a short summary",
        href: "/lesson05",
      },
    ],
  },
  {
    title: "Advanced Topics",
    description:
      "Advance your ASL proficiency by tackling complex grammar, comparisons, and persuasive communication.",
    duration: "5 lessons",
    href: "/learn/module/05",

    lessons: [
      {
        title: "Detailed descriptions",
        activities: "Describe an object in detail",
        homework: "Sign 3 descriptions of items in your house",
        href: "/lesson01",
      },
      {
        title: "Advanced grammar and sentence structure",
        activities: "Rearrange sentences to practice ASL grammar",
        homework: "Translate 3 English sentences into ASL structure",
        href: "/lesson02",
      },
      {
        title: "Comparisons and contrasts",
        activities: "Sign comparisons between two items or ideas",
        homework: "Create a Venn diagram and explain it in ASL",
        href: "/lesson03",
      },
      {
        title: "Formal and informal registers",
        activities: "Practice signing in formal and casual styles",
        homework: "Write a formal ASL introduction",
        href: "/lesson04",
      },
      {
        title: "Persuasive and argumentative speech",
        activities: "Debate a simple topic using ASL",
        homework: "Sign a persuasive message about a topic you care about",
        href: "/lesson05",
      },
    ],
  },
  {
    title: "Connecting with the Community",
    description:
      "Engage with the Deaf community through cultural, technological, and social perspectives.",
    duration: "5 lessons",
    href: "/learn/module/06",

    lessons: [
      {
        title: "History of the Deaf community.",
        activities: "Present a historical fact about the Deaf community.",
        homework: "Watch a video on Deaf history and summarize it.",
        href: "/lesson01",
      },
      {
        title: "Events and social participation.",
        activities: "Practice signing an invitation to an event.",
        homework: "Create an ASL flyer for a fictional Deaf event.",
        href: "/lesson02",
      },
      {
        title: "Technology use in ASL.",
        activities: "Role-play using a device like a TTY or video relay.",
        homework: "Research a new ASL-related technology.",
        href: "/lesson03",
      },
      {
        title: "Interviews and dialogues.",
        activities: "Conduct a mock interview.",
        homework: "Write and practice 5 interview questions.",
        href: "/lesson04",
      },
      {
        title: "Diversity in ASL (regionalisms).",
        activities: "Learn and practice 3 regional variations in signs.",
        homework: "Research and record 3 examples of ASL diversity.",
        href: "/lesson05",
      },
    ],
  },
  {
    title: "Mastering ASL",
    description:
      "Achieve fluency through advanced storytelling, projects, and real-world applications.",
    duration: "5 lessons",
    href: "/learn/module/07",

    lessons: [
      {
        title: "Games and activities in ASL.",
        activities: "Play ASL charades or bingo.",
        homework: "Create your own ASL game.",
        href: "/lesson01",
      },
      {
        title: "Advanced storytelling and presentations.",
        activities: "Present a short ASL story.",
        homework: "Record and review a signed story.",
        href: "/lesson02",
      },
      {
        title: "Assessment and feedback.",
        activities: "Peer-review signed sentences or stories.",
        homework: "Reflect on your ASL learning journey in a signed video.",
        href: "/lesson03",
      },
      {
        title: "Interactions.",
        activities: "Collaborate on a sign language presentation.",
        homework: "Develop a sign language story or conversation.",
        href: "/lesson04",
      },
      {
        title: "Real-life simulations.",
        activities: "Role-play real-world scenarios, like job interviews.",
        homework: "Sign a goodbye video summarizing your learning experience.",
        href: "/lesson05",
      },
    ],
  },
];
