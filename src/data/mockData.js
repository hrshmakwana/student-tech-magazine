// Mock data for articles
export const mockArticles = [
  {
    id: '1',
    title: 'The Rise of AI in Daily Life',
    category: 'Tech Today',
    author: 'Jane Doe',
    date: 'Apr 05, 2025',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    summary: 'AI is no longer just a buzzword. From voice assistants to personalized recommendations on Netflix and Spotify, artificial intelligence is embedded in our everyday routines.',
    content: `
      <p>AI is no longer just a buzzword. From voice assistants to personalized recommendations on Netflix and Spotify, artificial intelligence is embedded in our everyday routines. Companies like Google, Apple, and OpenAI are pushing boundaries, developing tools that understand language, make decisions, and even create original content.</p>
      
      <p>In this edition, we explore how AI is revolutionizing sectors like education, finance, and healthcare—empowering faster diagnosis, smarter learning systems, and efficient resource allocation.</p>
      
      <h2>How AI is Transforming Industries</h2>
      
      <p>The impact of artificial intelligence extends far beyond consumer applications. In healthcare, AI algorithms are helping doctors detect diseases earlier and with greater accuracy. Educational platforms use AI to create personalized learning experiences tailored to individual students' needs and learning styles.</p>
      
      <p>Meanwhile, financial institutions leverage AI for fraud detection, risk assessment, and algorithmic trading. Even creative fields aren't immune to the AI revolution, with tools that can generate art, music, and written content that sometimes rivals human creativity.</p>
      
      <h2>Ethical Considerations</h2>
      
      <p>As AI becomes more prevalent, important ethical questions arise. Issues of privacy, bias in algorithms, and the potential displacement of human workers are at the forefront of the conversation. There's a growing call for transparent, responsible AI development that prioritizes human well-being and addresses societal concerns.</p>
      
      <p>Regulatory frameworks are beginning to emerge, with governments and international bodies working to establish guidelines for AI development and deployment. The challenge lies in balancing innovation with necessary safeguards.</p>
    `,
    featured: true
  },
  {
    id: '2',
    title: 'Web Development Trends for 2025',
    category: 'Code Chronicles',
    author: 'John Smith',
    date: 'Apr 02, 2025',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
    summary: 'From serverless architectures to WebAssembly, discover the cutting-edge technologies reshaping how developers build web applications.',
    content: `
      <p>The web development landscape continues to evolve at a breakneck pace. In 2025, several trends are dominating the conversation among developers and shaping the future of the internet.</p>
      
      <h2>The Rise of WebAssembly</h2>
      
      <p>WebAssembly (Wasm) has matured into a powerful technology that's enabling near-native performance in web applications. Developers are increasingly using Wasm to bring resource-intensive applications like video editing, 3D modeling, and even AAA gaming experiences to the browser.</p>
      
      <h2>Serverless Architecture Dominance</h2>
      
      <p>Serverless computing continues its march toward becoming the default architecture for new web applications. The ability to scale automatically without managing infrastructure is proving irresistible for teams looking to reduce operational complexity and costs.</p>
      
      <h2>Edge Computing Goes Mainstream</h2>
      
      <p>With major cloud providers offering robust edge computing solutions, we're seeing more applications moving computation closer to users. This results in dramatically reduced latency and improved user experiences, especially for global applications.</p>
      
      <h2>AI-Assisted Development</h2>
      
      <p>AI tools are transforming how code is written. From intelligent code completion to automated bug detection and even generating entire functions based on natural language descriptions, developers are becoming significantly more productive by partnering with AI assistants.</p>
    `,
    featured: false
  },
  {
    id: '3',
    title: 'Quantum Computing: The Next Frontier',
    category: 'Future World',
    author: 'Alex Rivera',
    date: 'Mar 28, 2025',
    image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg',
    summary: 'As quantum computers reach new milestones in computational power, we examine the potential implications for cryptography, medicine, and beyond.',
    content: `
      <p>Quantum computing is no longer confined to theoretical physics papers and research labs. Major technology companies and startups are making significant strides in building practical quantum computers that could eventually solve problems that are intractable for classical computers.</p>
      
      <h2>Breaking Computational Barriers</h2>
      
      <p>Recent breakthroughs have allowed quantum computers to achieve "quantum advantage" – solving specific problems faster than the most powerful classical supercomputers. While these problems are often specialized and not immediately practical, they represent crucial milestones on the path to useful quantum computing.</p>
      
      <h2>Implications for Cryptography</h2>
      
      <p>Perhaps the most discussed impact of quantum computing is on cryptography. Many of the encryption algorithms that secure our digital communications could be vulnerable to attacks by sufficiently powerful quantum computers. This has accelerated the development of post-quantum cryptography – encryption methods resistant to quantum attacks.</p>
      
      <h2>Revolutionizing Scientific Discovery</h2>
      
      <p>The most exciting promise of quantum computing may be its potential to revolutionize scientific discovery. From simulating molecular interactions for drug development to optimizing complex systems like global supply chains, quantum computers could tackle problems that have long resisted solution.</p>
    `,
    featured: true
  },
  {
    id: '4',
    title: 'The Evolution of Smartphone Technology',
    category: 'Tech Today',
    author: 'Maria Chen',
    date: 'Mar 25, 2025',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
    summary: 'From foldable displays to advanced AI capabilities, explore how smartphones continue to evolve and shape our digital experiences.',
    content: `
      <p>Smartphones have come a long way from the early days of basic calling and texting capabilities. Today's devices are powerful computers that fit in our pockets, and they continue to evolve in fascinating ways.</p>
      
      <h2>Foldable and Flexible Displays</h2>
      
      <p>After years of development, foldable smartphones have finally reached mainstream adoption. These devices offer the convenience of a phone with the screen real estate of a tablet, all in a pocket-sized package. The latest models have resolved earlier durability concerns, with improved hinge mechanisms and more resilient flexible displays.</p>
      
      <h2>AI-Powered Photography</h2>
      
      <p>Computational photography powered by on-device AI has revolutionized what's possible with smartphone cameras. Despite the physical limitations of small camera sensors, today's smartphones can capture stunning images in challenging conditions, from ultra-low light environments to fast-moving subjects.</p>
      
      <h2>Extended Battery Life</h2>
      
      <p>Battery technology has finally caught up with our other smartphone needs. New battery chemistries combined with more efficient processors and adaptive power management mean many flagship phones can now last multiple days on a single charge, even with heavy use.</p>
      
      <h2>Enhanced Privacy Features</h2>
      
      <p>As smartphones contain more of our personal information, manufacturers have responded with enhanced privacy features. From secure enclaves for sensitive data to granular permission controls and on-device processing that minimizes data sharing, privacy has become a key competitive feature.</p>
    `,
    featured: false
  },
  {
    id: '5',
    title: 'The Art of Clean Code',
    category: 'Code Chronicles',
    author: 'David Park',
    date: 'Mar 20, 2025',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg',
    summary: 'Beyond functionality: why writing clean, maintainable code matters and how it can make you a better developer.',
    content: `
      <p>In the world of software development, writing code that works is just the beginning. Great developers write code that's not only functional but also clean, maintainable, and elegant.</p>
      
      <h2>The True Cost of Messy Code</h2>
      
      <p>Technical debt accrues silently but exacts a heavy toll over time. What begins as minor shortcuts to meet deadlines can eventually slow development to a crawl, as teams spend more time deciphering and working around problematic code than building new features.</p>
      
      <h2>Principles of Clean Code</h2>
      
      <p>Clean code follows several key principles: it should be readable and meaningful to other developers, with clear naming conventions and consistent formatting. It should be simple, following the DRY (Don't Repeat Yourself) principle and emphasizing simplicity over complexity. And it should be testable, with small, focused units of functionality.</p>
      
      <h2>Refactoring Strategies</h2>
      
      <p>Improving existing code is a crucial skill. Effective refactoring involves identifying problematic patterns, developing a strategy for improvement, and making incremental changes with frequent testing to ensure nothing breaks in the process.</p>
      
      <h2>The Human Factor</h2>
      
      <p>Perhaps most importantly, clean code acknowledges that code is written primarily for humans, not computers. While compilers and interpreters can make sense of almost any syntactically valid code, the true audience for your code is other developers (including your future self) who will need to understand, maintain, and extend it.</p>
    `,
    featured: false
  },
  {
    id: '6',
    title: 'AR/VR: Reshaping How We Interact With Tech',
    category: 'Future World',
    author: 'Sarah Johnson',
    date: 'Mar 15, 2025',
    image: 'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg',
    summary: 'Augmented and virtual reality technologies are finally delivering on their promise, creating new possibilities for work, education, and entertainment.',
    content: `
      <p>After years of hype and limited adoption, augmented reality (AR) and virtual reality (VR) have reached a tipping point. Technological improvements, content ecosystem development, and shifting user expectations have created the perfect conditions for these immersive technologies to go mainstream.</p>
      
      <h2>Beyond Gaming: Professional Applications</h2>
      
      <p>While gaming drove the initial consumer interest in VR, professional applications are now leading the charge. From architectural visualization and medical training to remote collaboration in virtual spaces, businesses are finding valuable use cases that justify investment in immersive technology.</p>
      
      <h2>The AR Revolution in Daily Life</h2>
      
      <p>Augmented reality is becoming a seamless part of everyday experience. From navigation apps that overlay directions on the real world to shopping applications that let you visualize products in your home before purchasing, AR is enhancing our interaction with both digital information and physical spaces.</p>
      
      <h2>Technical Breakthroughs</h2>
      
      <p>Advancements in display technology, processing power, and sensor capabilities have dramatically improved the AR/VR experience. Headsets are lighter, more comfortable, and capable of rendering increasingly realistic environments with minimal latency – addressing many of the issues that limited earlier adoption.</p>
      
      <h2>The Path to the Metaverse</h2>
      
      <p>As these technologies mature, we're moving closer to the concept of a "metaverse" – interconnected virtual spaces where people can work, socialize, and play. While fully realized persistent virtual worlds may still be years away, the foundation is being built through today's AR and VR innovations.</p>
    `,
    featured: true
  }
];

// Mock magazine issues
export const mockMagazineIssues = [
  {
    id: 'issue-2025-04',
    title: 'April 2025 Edition',
    coverImage: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg',
    publishDate: 'April 1, 2025',
    description: 'Exploring the cutting edge of AI and its integration into everyday technologies.',
    articles: ['1', '2', '3']
  },
  {
    id: 'issue-2025-03',
    title: 'March 2025 Edition',
    coverImage: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg',
    publishDate: 'March 1, 2025',
    description: 'Deep dive into quantum computing and the next generation of mobile technology.',
    articles: ['3', '4', '5']
  },
  {
    id: 'issue-2025-02',
    title: 'February 2025 Edition',
    coverImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    publishDate: 'February 1, 2025',
    description: 'Focus on software development practices and immersive technologies.',
    articles: ['5', '6', '2']
  }
];

// Mock categories
export const categories = [
  {
    id: 'tech-today',
    name: 'Tech Today',
    description: 'Explore the latest in AI, gadgets, and digital trends in this month\'s edition of Tech Today.',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg'
  },
  {
    id: 'code-chronicles',
    name: 'Code Chronicles',
    description: 'Deep dive into coding practices, frameworks, and interviews with top developers around the globe.',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg'
  },
  {
    id: 'future-world',
    name: 'Future World',
    description: 'A look into the future of technology – from space tech to futuristic design concepts and innovations.',
    image: 'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg'
  }
];