interface Lesson {
  title: string;
  objetives: string[] | null;
  vocabulary: string[] | null;
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
        title: "Greetings and Farewells in ASL",
        objetives: [
          "Recognize and interpret basic greetings and farewells in ASL.",
          "Perform greetings and farewells using appropriate facial expressions.",
          "Understand the cultural significance of greetings and farewells in Deaf interactions.",
          "Practice fluency and accuracy in signing the introduced vocabulary.",
        ],
        vocabulary: [
          "Greetings: Hello, Hi, Good morning, Good afternoon, Good evening, How are you?",
          "Farewells: Goodbye, See you later, Take care, See you tomorrow, Have a nice day",
          "Fingerspelling Alphabet: A-Z",
        ],
        href: "/lesson01",
      },
      {
        title: "Common greetings and farewells.",
        objetives: ["Role-play meeting someone new and saying goodbye."],
        vocabulary: ["Practice signing 5 greetings and farewells in front of a mirror."],
        href: "/lesson02",
      },
      {
        title: "Personal pronouns and basic questions.",
        objetives: ["Play a matching game pairing pronouns with common actions."],
        vocabulary: ["Write and sign 5 simple sentences using pronouns."],
        href: "/lesson03",
      },
    ],
  },
  {
    title: "Daily Life Vocabulary and Expressions",
    description:
      "Expand your ASL knowledge with daily life vocabulary and expressions, including emotions, questions, and common interactions.",
    duration: "3 lessons",
    href: "/learn/module/02",
    lessons: [
      {
        title: "Daily Life Vocabulary",
        objetives: [
          "Learn signs related to family, friends, food, transportation, clothing, and other daily life topics.",
          "Practice imitating signs in front of the camera for real-time feedback.",
          "Understand how to use daily life vocabulary in common scenarios.",
        ],
        vocabulary: [
          "Family: Mother, Father, Brother, Sister, etc.",
          "Food: Apple, Bread, Water, Milk, etc.",
          "Transportation: Car, Bus, Train, Bicycle, etc.",
          "Clothing: Shirt, Pants, Jacket, Shoes, etc.",
        ],
        href: "/lesson01",
      },
      {
        title: "Expressing Emotions",
        objetives: [
          "Recognize and perform signs for expressing emotions such as happiness, sadness, anger, and fear.",
          "Receive feedback on emotion-related signs through camera validation.",
          "Understand the importance of facial expressions in conveying emotions in ASL.",
        ],
        vocabulary: [
          "Emotions: Happy, Sad, Angry, Scared, Excited, etc.",
          "Related expressions: I'm happy, I'm sad, I'm angry.",
        ],
        href: "/lesson02",
      },
      {
        title: "Questions and Responses",
        objetives: [
          "Learn how to formulate and respond to basic questions in ASL.",
          "Practice question-and-answer scenarios with camera validation.",
          "Develop conversational skills by combining questions with appropriate responses.",
        ],
        vocabulary: [
          "Questions: What, Where, When, Why, Who, How.",
          "Responses: I don't know, Yes, No, Maybe, Thank you.",
        ],
        href: "/lesson03",
      },
    ],
  },
  
  {
    title: "ASL in Everyday Contexts",
    description:
      "Develop your ASL skills for work, school, and emergency situations with practical vocabulary and scenarios.",
    duration: "3 lessons",
    href: "/learn/module/03",
    lessons: [
      {
        title: "At Work",
        objetives: [
          "Learn and perform ASL signs for professions, tools, and workplace scenarios.",
          "Imitate signs with camera validation to receive feedback and scores.",
          "Understand key workplace-related signs for effective communication.",
        ],
        vocabulary: [
          "Professions: Teacher, Doctor, Engineer, Mechanic, etc.",
          "Tools: Hammer, Computer, Pen, Paper, etc.",
          "Workplace phrases: Meeting, Office, Task, Deadline, etc.",
        ],
        href: "/lesson01",
      },
      {
        title: "At School",
        objetives: [
          "Familiarize with ASL signs for school-related objects and concepts.",
          "Use camera feedback to master signs for subjects and academic activities.",
          "Practice integrating school vocabulary into meaningful interactions.",
        ],
        vocabulary: [
          "Objects: Book, Notebook, Backpack, Pencil, etc.",
          "Subjects: Mathematics, Science, History, Art, etc.",
          "Actions: Study, Read, Write, Ask, Answer.",
        ],
        href: "/lesson02",
      },
      {
        title: "Emergency Signs",
        objetives: [
          "Learn critical signs for emergency situations like asking for help or calling authorities.",
          "Simulate emergency scenarios to practice rapid and accurate signing.",
          "Build confidence in using ASL during stressful situations.",
        ],
        vocabulary: [
          "Key phrases: Help, Police, Ambulance, Fire, Danger.",
          "Situations: Medical Emergency, Fire Alarm, Lost Person.",
        ],
        href: "/lesson03",
      },
    ],
  },
  {
    title: "Advanced Communication in ASL",
    description:
      "Enhance your ASL fluency by forming complete sentences, using expressive gestures, and practicing real-world dialogues.",
    duration: "3 lessons",
    href: "/learn/module/04",
    lessons: [
      {
        title: "Forming Complete Sentences",
        objetives: [
          "Master the basic structure of ASL sentences for clear communication.",
          "Reproduce complete sentences using signs and receive camera feedback.",
          "Understand the importance of word order and context in ASL.",
        ],
        vocabulary: [
          "Sentence types: Declarative, Interrogative, Imperative.",
          "Examples: I want water. Where is the book? Help me, please.",
        ],
        href: "/lesson01",
      },
      {
        title: "Body Language and Gestures",
        objetives: [
          "Learn the role of facial expressions and body movements in ASL.",
          "Practice incorporating non-manual markers into signing for added clarity.",
          "Understand how gestures change meaning in different contexts.",
        ],
        vocabulary: [
          "Non-manual markers: Eyebrow raise, Headshake, Shoulder shrug.",
          "Examples: Yes/No questions, Negations, Emphatic signs.",
        ],
        href: "/lesson02",
      },
      {
        title: "Dialogue Practice",
        objetives: [
          "Engage in simulated dialogues for practical ASL application.",
          "Use contextual vocabulary to interact fluently in various scenarios.",
          "Receive feedback on fluency, accuracy, and gesture integration.",
        ],
        vocabulary: [
          "Scenarios: At a market, In a restaurant, Asking for directions.",
          "Phrases: How much is this? I would like to order. Where is the restroom?",
        ],
        href: "/lesson03",
      },
    ],
  },  
  {
    title: "Advanced Skills in ASL",
    description:
      "Refine your ASL abilities with advanced grammar, storytelling, and debate skills to communicate with clarity and confidence.",
    duration: "3 lessons",
    href: "/learn/module/05",
    lessons: [
      {
        title: "Advanced Grammar",
        objetives: [
          "Master the use of complex sentence structures in ASL.",
          "Learn the nuances of time markers, role shifting, and conditional clauses.",
          "Practice creating grammatically accurate sentences through interactive exercises.",
        ],
        vocabulary: [
          "Time markers: Yesterday, Tomorrow, Later, Now.",
          "Role shifting: 'He said,' 'She replied,' etc.",
          "Conditional phrases: If/Then statements.",
        ],
        href: "/lesson01",
      },
      {
        title: "Storytelling in ASL",
        objetives: [
          "Develop skills to narrate events, stories, and experiences fluently in ASL.",
          "Understand the use of pacing, facial expressions, and space in storytelling.",
          "Create and perform a short narrative using the provided vocabulary.",
        ],
        vocabulary: [
          "Key verbs: Run, Jump, Laugh, Cry, Speak.",
          "Transitions: Then, Next, Finally.",
          "Common storytelling phrases: 'Once upon a time,' 'The end,' 'Suddenly.'",
        ],
        href: "/lesson02",
      },
      {
        title: "Debate and Persuasion",
        objetives: [
          "Learn to present arguments and express opinions effectively in ASL.",
          "Use persuasive signs and expressions to support a point of view.",
          "Engage in a mock debate to practice critical thinking and fluency.",
        ],
        vocabulary: [
          "Debate terms: Agree, Disagree, Why, Because.",
          "Opinions: I think, I believe, In my opinion.",
          "Expressions: Strongly agree, Strongly disagree.",
        ],
        href: "/lesson03",
      },
    ],
  }

];
