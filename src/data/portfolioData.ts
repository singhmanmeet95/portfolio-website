import { Project, SkillCategory, EducationItem, LeadershipItem, CodingProfile } from '../types';

export const PERSONAL_INFO = {
  name: 'Manmeet Singh',
  role: 'Software Engineer & CS Undergrad @ DTU',
  institution: 'Delhi Technological University (DTU)',
  location: 'New Delhi, India',
  email: 'meetusingh2004@gmail.com',
  phone: '+91-8076438849',
  github: 'https://github.com/singhmanmeet95',
  linkedin: 'https://www.linkedin.com/in/manmeetsinghdev',
  leetcode: 'https://leetcode.com/u/manmeet_8800',
  about: "Hey, I'm Manmeet. I'm a Computer Science undergrad at DTU who spends way too much time writing TypeScript, optimizing SQL queries, and debugging distributed backends at ungodly hours. I've solved 350+ LeetCode problems (mostly fueled by caffeine and stubbornness), and I love building full-stack web apps that actually stay up under load.",
  status: 'Building at 3 AM • Open to SDE Internships & Software Engineering Roles',
};

export const HIGHLIGHT_METRICS = [
  {
    label: 'LeetCode Solved',
    value: '350+',
    detail: 'DP, Graphs, Trees & Arrays',
    icon: 'Terminal',
  },
  {
    label: 'Late-Night Commits',
    value: '100+',
    detail: 'Production apps & open-source',
    icon: 'Trophy',
  },
  {
    label: 'API Latency Cut',
    value: '30%',
    detail: 'Indexed queries & caching on Nirvana',
    icon: 'Zap',
  },
  {
    label: 'Page Load Speedup',
    value: '50%',
    detail: 'Next.js edge caching on Shiv Band',
    icon: 'Flame',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'nirvana',
    title: 'Nirvana – Travel & Real-Time Chat Platform',
    tagline: 'Full-Stack Travel Community with Low-Latency WebSocket Chat & Hybrid DB',
    description: 'A full-stack travel platform where users share journeys and chat in real-time. Built with React, Node.js, and WebSockets because HTTP polling at 2 AM felt like a crime against humanity. Features a hybrid PostgreSQL + MongoDB database layer via Prisma Accelerate for zero-latency queries.',
    category: 'Full-Stack',
    year: '2024',
    featured: true,
    githubUrl: 'https://github.com/manmeet/nirvana',
    liveUrl: 'https://nirvana-travel.vercel.app',
    techStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'MongoDB',
      'Prisma Accelerate',
      'WebSockets',
      'JWT Auth',
      'REST API',
    ],
    metrics: [
      { label: 'API Latency Cut', value: '30%' },
      { label: 'Chat Latency', value: '<50ms' },
      { label: 'Database', value: 'Hybrid SQL+NoSQL' },
    ],
    bulletPoints: [
      'Built end-to-end full-stack travel blogging platform with user auth, rich CRUD workflows, and real-time room chats via WebSockets.',
      'Slashed backend API latency by 30% by restructuring nested relational queries and adding connection pooling with Prisma Accelerate.',
      'Designed a hybrid database layer: PostgreSQL for strict relational user/transaction records and MongoDB for flexible travel story schemas.',
      'Engineered secure JWT authentication with role-based access control (RBAC) and HTTP-only cookie protection.',
    ],
    architectureDetails: {
      frontend: 'React client with socket connection state managers, automatic reconnect retry backoff, and responsive UI.',
      backend: 'Express.js micro-controllers, custom auth middleware, and topic-isolated socket.io room broadcasting.',
      database: 'PostgreSQL for structured user data + MongoDB for unstructured blog content unified via Prisma Accelerate.',
      security: 'HTTP-only secure JWT cookies, bcrypt password hashing, parameterized SQL queries, and CORS origin whitelisting.',
      performance: 'Connection pooling, indexed search fields, and compressed JSON payloads yielding a 30% speedup in response times.',
    },
    sampleCodeSnippet: {
      filename: 'server/sockets/chatManager.ts',
      language: 'typescript',
      code: `// WebSocket Real-Time Chat Engine for Nirvana
// Written at 2:30 AM — handles room isolation and token verification
import { Server as SocketServer } from 'socket.io';
import { prisma } from '../lib/prisma';
import { verifyJwtToken } from '../middleware/auth';

export function initializeChatSockets(io: SocketServer) {
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth.token;
      const user = await verifyJwtToken(token);
      socket.data.user = user;
      next();
    } catch (err) {
      next(new Error('Authentication failed - Invalid token'));
    }
  });

  io.on('connection', (socket) => {
    // Join destination-specific live room
    socket.on('join_travel_room', async ({ destinationId }) => {
      socket.join(\`travel:\${destinationId}\`);
    });

    socket.on('send_message', async ({ destinationId, message }) => {
      if (!message || message.trim().length === 0) return;
      
      const saved = await prisma.chatMessage.create({
        data: {
          text: message.trim(),
          userId: socket.data.user.id,
          destinationId
        }
      });
      
      // Broadcast strictly to active travellers in this room
      io.to(\`travel:\${destinationId}\`).emit('new_message', saved);
    });
  });
}`,
    },
  },
  {
    id: 'shiv-band',
    title: 'Shiv Band – Production Event Booking Platform',
    tagline: 'High-Performance Booking System with Serverless API & Real-Time Schedule Engine',
    description: 'Production web app for an established event brand. Built with Next.js App Router and Tailwind CSS to replace clumsy phone calls with clean automated slot scheduling, client inquiry management, and an admin control room. Optimized so people on flaky 4G connections can book in seconds.',
    category: 'Next.js / Frontend',
    year: '2024',
    featured: true,
    githubUrl: 'https://github.com/manmeet/shiv-band-events',
    liveUrl: 'https://shivband-events.vercel.app',
    techStack: [
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Vercel',
      'Serverless API',
      'Lighthouse 98+',
    ],
    metrics: [
      { label: 'Client Discovery', value: '+80%' },
      { label: 'Page Load Time', value: '-50%' },
      { label: 'Lighthouse Score', value: '98/100' },
    ],
    bulletPoints: [
      'Designed, developed, and deployed a production event-booking platform, boosting organic client inquiries by 80%.',
      'Cut mobile page load time by 50% using Next.js automatic image WebP optimization, edge caching, and dynamic route pre-fetching.',
      'Engineered an administrative dashboard for real-time calendar schedule checks, booking status toggles, and direct inquiries.',
      'Deployed on Vercel with GitHub Actions automated CI/CD for continuous zero-downtime releases.',
    ],
    architectureDetails: {
      frontend: 'Next.js App Router with Server Components for zero client JS overhead on static views + client booking modals.',
      backend: 'Next.js Serverless Route Handlers with validation schemas, date-overlap locking, and email dispatch.',
      database: 'Cloud PostgreSQL instance storing booking requests, package metadata, and customer details.',
      performance: 'Next/Image responsive srcset generation, CSS purging, and edge CDN distribution for 98+ Lighthouse scores.',
    },
    sampleCodeSnippet: {
      filename: 'app/api/bookings/route.ts',
      language: 'typescript',
      code: `// Next.js Serverless API for Event Booking Slot Validation
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { sendBookingConfirmationEmail } from '@/lib/mailer';

export async function POST(req: Request) {
  try {
    const { clientName, eventDate, packageTier, phone, location } = await req.json();
    
    // Prevent double booking at the database level
    const existing = await db.booking.findFirst({
      where: { eventDate: new Date(eventDate), status: 'CONFIRMED' }
    });

    if (existing) {
      return NextResponse.json({ error: 'Selected date is already booked' }, { status: 409 });
    }

    const booking = await db.booking.create({
      data: { 
        clientName, 
        eventDate: new Date(eventDate), 
        packageTier, 
        phone, 
        location, 
        status: 'PENDING' 
      }
    });

    await sendBookingConfirmationEmail({ clientName, eventDate, packageTier });
    return NextResponse.json({ success: true, bookingId: booking.id }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}`,
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    iconName: 'Code2',
    skills: [
      { name: 'C / C++', level: 'Advanced', tag: 'Algorithms & STL' },
      { name: 'TypeScript', level: 'Advanced', tag: 'Type-Safe Full-Stack' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', tag: 'Async & Web' },
      { name: 'Python', level: 'Proficient', tag: 'Scripts & Automation' },
      { name: 'Java', level: 'Proficient', tag: 'OOP Principles' },
      { name: 'SQL', level: 'Advanced', tag: 'Complex Joins & Indexes' },
      { name: 'HTML5 & CSS3', level: 'Advanced', tag: 'Responsive UI' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    iconName: 'Layout',
    skills: [
      { name: 'React.js', level: 'Advanced', tag: 'Hooks & State' },
      { name: 'Next.js', level: 'Advanced', tag: 'App Router / SSR' },
      { name: 'Node.js', level: 'Advanced', tag: 'Event Loop & I/O' },
      { name: 'Express.js', level: 'Advanced', tag: 'REST APIs & Middleware' },
      { name: 'Tailwind CSS', level: 'Advanced', tag: 'Utility Styling' },
      { name: 'Prisma / Accelerate', level: 'Advanced', tag: 'Type-Safe ORM' },
      { name: 'WebSockets (Socket.io)', level: 'Advanced', tag: 'Real-Time Sync' },
    ],
  },
  {
    title: 'Databases & Storage',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', tag: 'Relational Schemas' },
      { name: 'MongoDB', level: 'Advanced', tag: 'Document Models' },
      { name: 'Prisma Accelerate', level: 'Advanced', tag: 'Connection Pooling' },
      { name: 'Redis', level: 'Proficient', tag: 'Pub/Sub & Caching' },
    ],
  },
  {
    title: 'DevOps, Cloud & Tools',
    iconName: 'Cpu',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', tag: 'Branching & CI' },
      { name: 'Docker', level: 'Proficient', tag: 'Containerization' },
      { name: 'Vercel', level: 'Advanced', tag: 'Edge Deployment' },
      { name: 'Google Cloud (GCP)', level: 'Proficient', tag: 'Cloud Compute' },
      { name: 'Postman & Insomnia', level: 'Advanced', tag: 'API Testing' },
      { name: 'Linux / Bash', level: 'Advanced', tag: 'CLI & Scripting' },
    ],
  },
  {
    title: 'Core CS & Problem Solving',
    iconName: 'Brain',
    skills: [
      { name: 'Data Structures & Algorithms', level: 'Advanced', tag: '350+ LeetCode' },
      { name: 'Dynamic Programming', level: 'Advanced', tag: 'Memoization & Grids' },
      { name: 'Graph Algorithms', level: 'Advanced', tag: 'BFS, DFS & Dijkstra' },
      { name: 'Database Management (DBMS)', level: 'Advanced', tag: 'Indexing & ACID' },
      { name: 'Operating Systems & Networks', level: 'Advanced', tag: 'Threads, TCP/IP' },
      { name: 'JWT & RBAC Security', level: 'Advanced', tag: 'Auth & Cookies' },
    ],
  },
];

export const CODING_PROFILES: CodingProfile[] = [
  {
    platform: 'LeetCode',
    username: 'manmeet',
    url: 'https://leetcode.com',
    stats: [
      { label: 'Problems Solved', value: '350+' },
      { label: 'Arrays & Strings', value: '120+ solved' },
      { label: 'Dynamic Programming', value: '80+ solved' },
      { label: 'Trees & Graphs', value: '90+ solved' },
      { label: 'Hash Maps & Stacks', value: '60+ solved' },
    ],
    highlight: 'Solved 350+ algorithmic problems spanning dynamic programming, graph traversals, binary trees, and sliding windows in C++ and TypeScript.',
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Delhi Technological University (DTU)',
    degree: 'Bachelor of Technology in Computer Science',
    period: 'Aug 2023 – May 2027',
    location: 'New Delhi, India',
    details: [
      'Core Subjects: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems (DBMS), Operating Systems (OS), Computer Networks (CN), and Software Engineering.',
      'Active in campus coding circles, technical societies, and late-night hackathons.',
    ],
    badges: ['Computer Science', 'B.Tech', 'Engineering', 'DTU New Delhi'],
  },
  {
    institution: 'Kendriya Vidyalaya, Tagore Garden',
    degree: 'Senior Secondary – CBSE',
    period: '2023',
    location: 'New Delhi, India',
    details: [
      'Physics, Chemistry, Mathematics & Computer Science. Built early C++ programs and discovered the joy of making computers do what you want.',
    ],
    badges: ['CBSE', 'Senior Secondary', 'Science & CS'],
  },
];

export const LEADERSHIP_DATA: LeadershipItem[] = [
  {
    role: 'Co-Head – Cinematics',
    organization: 'Reflect, DTU (Annual Cultural Fest)',
    period: '2023 – 2025',
    festType: 'Cultural Leadership',
    description: [
      'Led a 10+ member crew managing video production, live coverage, and digital asset rendering for massive campus events with thousands of attendees.',
      'Coordinated under chaotic tight deadlines, keeping camera gear, audio sync, and export pipelines running smoothly on zero sleep.',
    ],
  },
  {
    role: 'Logistics Member',
    organization: 'Engifest, DTU (Annual Technical Fest)',
    period: '2023 – 2025',
    festType: 'Technical Fest Operations',
    description: [
      'Managed on-ground logistics, vendor coordination, and stage setups for 5,000+ attendees during DTU’s flagship fest.',
      'Resolved sudden hardware, power, and stage emergencies on the fly with zero critical downtime.',
    ],
  },
];

