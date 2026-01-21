import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';

interface BlogSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'list';
  content: string | string[];
}

interface BlogData {
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  sections: BlogSection[];
}

const blogContent: Record<string, BlogData> = {
  'future-of-work-eq': {
    title: 'The Future of Work: Why Emotional Intelligence is the #1 Skill',
    excerpt: 'Explore how EQ is becoming the most critical skill in the AI-driven workplace and what it means for your team.',
    author: 'Sarah Chen',
    authorRole: 'Chief People Officer',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Leadership',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    sections: [
      { type: 'paragraph', content: 'As artificial intelligence continues to reshape the workplace, one skill has emerged as irreplaceable: emotional intelligence. While machines excel at processing data and automating repetitive tasks, they cannot replicate the nuanced human abilities of empathy, self-awareness, and relationship management.' },
      { type: 'heading', content: 'The AI Paradox: More Tech, More Human Skills Needed' },
      { type: 'paragraph', content: 'Paradoxically, as workplaces become more automated, the demand for emotional intelligence grows stronger. The World Economic Forum consistently ranks EQ-related skills among the top competencies needed for the future workforce.' },
      { type: 'subheading', content: '1. Human Connection Becomes Premium' },
      { type: 'paragraph', content: 'In an increasingly digital world, authentic human connection becomes rare and valuable. Leaders who can build genuine relationships, understand team dynamics, and create psychologically safe environments will drive better business outcomes.' },
      { type: 'subheading', content: '2. Complex Problem-Solving Requires Collaboration' },
      { type: 'paragraph', content: 'AI can solve defined problems, but the ambiguous, complex challenges organizations face require diverse teams working together effectively. Emotional intelligence enables this collaboration.' },
      { type: 'subheading', content: '3. Change Management Demands Empathy' },
      { type: 'paragraph', content: 'As technology transforms industries, organizations undergo constant change. Leaders with high EQ can guide teams through uncertainty, addressing fears and building resilience.' },
      { type: 'heading', content: 'The Business Case for EQ' },
      { type: 'paragraph', content: 'Research consistently shows that emotional intelligence delivers measurable business results:' },
      { type: 'list', content: ['Teams with high collective EQ outperform others by 20-30%', 'Leaders with high EQ create teams with 50% lower turnover', 'Organizations investing in EQ development see 25% productivity gains'] },
      { type: 'heading', content: 'What This Means for Your Team' },
      { type: 'paragraph', content: 'The organizations that thrive in the AI era will be those that invest in developing emotional intelligence at every level.' },
      { type: 'subheading', content: 'For Leaders' },
      { type: 'paragraph', content: 'Prioritize your own EQ development. Model self-awareness, empathy, and effective relationship management. Create cultures where emotional intelligence is valued and practiced.' },
      { type: 'subheading', content: 'For Teams' },
      { type: 'paragraph', content: 'Build psychological safety where team members can express emotions, take risks, and learn from failures. Use EQ assessments to understand team dynamics and identify growth areas.' },
      { type: 'subheading', content: 'For Individuals' },
      { type: 'paragraph', content: 'Invest in understanding your emotional patterns. Develop skills in self-regulation, empathy, and social awareness. These capabilities will be your competitive advantage.' },
      { type: 'heading', content: 'The Path Forward' },
      { type: 'paragraph', content: 'The future of work isn\'t about choosing between technology and humanity—it\'s about leveraging both. As AI handles more technical tasks, our uniquely human capabilities become more valuable. Emotional intelligence isn\'t just a nice-to-have; it\'s the foundation of success in the modern workplace.' },
      { type: 'paragraph', content: 'Start your EQ journey today. Assess where you and your team stand, identify growth opportunities, and commit to continuous development. The future belongs to the emotionally intelligent.' }
    ]
  },
  'building-high-performing-teams': {
    title: 'Building High-Performing Teams Through EQ Assessment',
    excerpt: 'Learn how to identify and develop emotional intelligence gaps in your team for better collaboration.',
    author: 'Marcus Johnson',
    authorRole: 'Team Performance Consultant',
    date: '2024-01-12',
    readTime: '7 min read',
    category: 'Team Building',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    sections: [
      { type: 'paragraph', content: 'High-performing teams don\'t happen by accident. While technical skills and experience matter, the secret ingredient that separates good teams from great ones is collective emotional intelligence. Understanding and developing EQ within your team can transform how they collaborate, innovate, and deliver results.' },
      { type: 'heading', content: 'Why EQ Assessment Matters for Teams' },
      { type: 'paragraph', content: 'Traditional team assessments focus on skills, personality types, or working styles. While valuable, these miss a critical dimension: how team members understand and manage emotions—their own and others\'. EQ assessment fills this gap by revealing:' },
      { type: 'list', content: ['Individual emotional strengths and growth areas', 'Team dynamics and potential friction points', 'Communication patterns and blind spots', 'Leadership styles and their impact'] },
      { type: 'heading', content: 'The Four Pillars of Team EQ' },
      { type: 'subheading', content: '1. Self-Awareness' },
      { type: 'paragraph', content: 'Team members who understand their emotional triggers, strengths, and weaknesses contribute more effectively. They know when to speak up and when to listen, when to push forward and when to step back.' },
      { type: 'subheading', content: '2. Self-Management' },
      { type: 'paragraph', content: 'High-pressure situations test every team. Members with strong self-management maintain composure, adapt to changes, and remain productive even when stressed.' },
      { type: 'subheading', content: '3. Social Awareness' },
      { type: 'paragraph', content: 'Empathetic team members read the room. They sense when colleagues struggle, understand unspoken concerns, and navigate organizational dynamics effectively.' },
      { type: 'subheading', content: '4. Relationship Management' },
      { type: 'paragraph', content: 'The ability to influence, inspire, and resolve conflicts determines whether teams achieve their potential. Strong relationship skills enable difficult conversations and collaborative problem-solving.' },
      { type: 'heading', content: 'Conducting Effective EQ Assessments' },
      { type: 'paragraph', content: 'Here\'s how to use EQ assessments to build better teams:' },
      { type: 'subheading', content: 'Step 1: Individual Assessments' },
      { type: 'paragraph', content: 'Start by having each team member complete a comprehensive EQ assessment. This provides baseline data on individual strengths and development areas across all four domains.' },
      { type: 'subheading', content: 'Step 2: Team Analysis' },
      { type: 'paragraph', content: 'Map individual results to create a team profile. Look for patterns—are certain competencies strong across the board? Where are the gaps? How might individual differences create friction?' },
      { type: 'subheading', content: 'Step 3: Facilitated Discussion' },
      { type: 'paragraph', content: 'Share results in a psychologically safe environment. Focus on understanding, not judgment. Help team members see how their emotional patterns impact collaboration.' },
      { type: 'subheading', content: 'Step 4: Development Planning' },
      { type: 'paragraph', content: 'Create both individual and team development plans. Identify specific behaviors to practice, situations to navigate differently, and support mechanisms to implement.' },
      { type: 'heading', content: 'Common Team EQ Patterns' },
      { type: 'paragraph', content: 'Through years of team assessments, certain patterns emerge:' },
      { type: 'subheading', content: 'The Conflict-Avoidant Team' },
      { type: 'paragraph', content: 'High empathy but low assertiveness leads to unaddressed issues and passive-aggressive behavior.' },
      { type: 'subheading', content: 'The High-Performer Trap' },
      { type: 'paragraph', content: 'Individual stars with low social awareness create silos and resentment.' },
      { type: 'subheading', content: 'The Emotionally Exhausted Team' },
      { type: 'paragraph', content: 'Constant fire-fighting depletes self-management reserves, leading to burnout.' },
      { type: 'heading', content: 'Making It Stick' },
      { type: 'paragraph', content: 'Assessment is just the beginning. To build lasting team EQ:' },
      { type: 'list', content: ['Integrate EQ language into daily interactions', 'Create feedback loops for continuous improvement', 'Celebrate EQ wins alongside performance achievements', 'Provide ongoing coaching and support'] },
      { type: 'paragraph', content: 'High-performing teams are built on trust, communication, and emotional intelligence. Start with assessment, commit to development, and watch your team transform.' }
    ]
  },
  'micro-learning-eq': {
    title: 'Micro-Learning: The Secret to Sustainable EQ Development',
    excerpt: 'Discover why bite-sized learning is more effective than traditional training for emotional intelligence.',
    author: 'Dr. Emily Rodriguez',
    authorRole: 'Learning & Development Expert',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Learning',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    sections: [
      { type: 'paragraph', content: 'Traditional corporate training is broken. Day-long workshops, quarterly sessions, and annual retreats feel productive in the moment but rarely create lasting change. This is especially true for emotional intelligence development, which requires consistent practice over time. Enter micro-learning—a research-backed approach that\'s revolutionizing how we develop EQ skills.' },
      { type: 'heading', content: 'The Problem with Traditional EQ Training' },
      { type: 'paragraph', content: 'Most organizations approach EQ development like any other training: schedule a workshop, bring in an expert, and check the box. But emotional intelligence isn\'t learned in a day. The challenges include:' },
      { type: 'list', content: ['Information overload prevents retention', 'Skills aren\'t practiced in real contexts', 'No reinforcement after training ends', 'One-size-fits-all doesn\'t address individual needs', 'ROI is difficult to measure'] },
      { type: 'heading', content: 'What is Micro-Learning?' },
      { type: 'paragraph', content: 'Micro-learning delivers content in small, focused bursts—typically 3-10 minutes. Instead of trying to cover everything at once, it breaks complex topics into digestible pieces, delivered consistently over time.' },
      { type: 'paragraph', content: 'For EQ development, this might look like:' },
      { type: 'list', content: ['Daily reflection prompts (2 minutes)', 'Weekly scenario-based exercises (5 minutes)', 'Bite-sized video lessons (3-5 minutes)', 'In-the-moment behavioral nudges (30 seconds)'] },
      { type: 'heading', content: 'The Science Behind Micro-Learning' },
      { type: 'paragraph', content: 'Research supports the micro-learning approach for skill development:' },
      { type: 'subheading', content: 'Spaced Repetition' },
      { type: 'paragraph', content: 'The brain retains information better when exposed to it repeatedly over time. Micro-learning naturally incorporates spaced repetition, leading to 50% better retention than massed learning.' },
      { type: 'subheading', content: 'Cognitive Load Theory' },
      { type: 'paragraph', content: 'Our working memory has limits. Short, focused content prevents overload and enables deeper processing.' },
      { type: 'subheading', content: 'Habit Formation' },
      { type: 'paragraph', content: 'Daily micro-learning builds habits. Consistent small actions compound into significant behavior change over months.' },
      { type: 'subheading', content: 'Contextual Learning' },
      { type: 'paragraph', content: 'Micro-learning can be delivered in the moment—before a difficult conversation, after a team meeting—when relevance is highest.' },
      { type: 'heading', content: 'Applying Micro-Learning to EQ Development' },
      { type: 'paragraph', content: 'Here\'s how to structure a micro-learning approach for emotional intelligence:' },
      { type: 'subheading', content: 'Week 1-4: Self-Awareness Foundation' },
      { type: 'list', content: ['Daily emotion check-ins (2 min)', 'Weekly reflection exercises (5 min)', 'Trigger identification activities', 'Pattern recognition practice'] },
      { type: 'subheading', content: 'Week 5-8: Self-Management Skills' },
      { type: 'list', content: ['Stress response techniques (3 min each)', 'Emotional regulation exercises', 'Impulse control strategies', 'Adaptability scenarios'] },
      { type: 'subheading', content: 'Week 9-12: Social Awareness Development' },
      { type: 'list', content: ['Empathy-building exercises', 'Perspective-taking practice', 'Social cue recognition', 'Organizational awareness activities'] },
      { type: 'subheading', content: 'Week 13-16: Relationship Management' },
      { type: 'list', content: ['Communication skill builders', 'Conflict resolution scenarios', 'Influence and persuasion practice', 'Team collaboration exercises'] },
      { type: 'heading', content: 'Keys to Micro-Learning Success' },
      { type: 'subheading', content: 'Consistency Over Intensity' },
      { type: 'paragraph', content: 'Five minutes daily beats two hours weekly. Build the habit first.' },
      { type: 'subheading', content: 'Relevance and Application' },
      { type: 'paragraph', content: 'Content must connect to real work situations. Abstract concepts without application won\'t stick.' },
      { type: 'subheading', content: 'Progress Tracking' },
      { type: 'paragraph', content: 'Show learners their improvement. Progress visibility maintains motivation.' },
      { type: 'subheading', content: 'Social Components' },
      { type: 'paragraph', content: 'Allow learners to share insights, practice with peers, and celebrate progress together.' },
      { type: 'heading', content: 'The Results' },
      { type: 'paragraph', content: 'Organizations implementing micro-learning for EQ development report:' },
      { type: 'list', content: ['80% completion rates (vs. 20-30% for traditional training)', '60% improvement in targeted EQ competencies', 'Sustained behavior change measured 6+ months later', 'Higher employee engagement with development'] },
      { type: 'paragraph', content: 'Emotional intelligence isn\'t developed in a day—it\'s built through consistent, intentional practice over time. Micro-learning provides the framework for sustainable EQ development that actually works.' }
    ]
  },
  'real-time-eq-nudges': {
    title: 'Real-Time EQ Nudges: Changing Behavior Where It Matters',
    excerpt: 'How contextual guidance can help teams apply emotional intelligence in their daily interactions.',
    author: 'Alex Thompson',
    authorRole: 'Behavioral Design Lead',
    date: '2024-01-08',
    readTime: '4 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    sections: [
      { type: 'paragraph', content: 'The gap between knowing and doing is where most EQ development fails. People attend workshops, take assessments, and genuinely want to improve—but when the pressure hits in a real meeting, old patterns take over. Real-time EQ nudges bridge this gap by delivering guidance exactly when and where it matters.' },
      { type: 'heading', content: 'The Knowing-Doing Gap' },
      { type: 'paragraph', content: 'Traditional EQ development assumes that if people understand concepts, they\'ll apply them. But emotional intelligence is different from intellectual knowledge. In high-stakes moments:' },
      { type: 'list', content: ['Stress triggers automatic responses', 'Cognitive load prevents thoughtful reaction', 'Old habits override new learning', 'The "heat of the moment" bypasses rational thinking'] },
      { type: 'paragraph', content: 'This is why someone can ace an EQ assessment but still blow up in a tense meeting. Knowledge doesn\'t automatically translate to behavior.' },
      { type: 'heading', content: 'What Are EQ Nudges?' },
      { type: 'paragraph', content: 'EQ nudges are brief, contextual prompts delivered at moments of opportunity. Unlike training that happens before situations, nudges arrive during or immediately before relevant moments.' },
      { type: 'subheading', content: 'Before a Difficult Conversation' },
      { type: 'paragraph', content: '"Take a breath. Remember to listen first before responding."' },
      { type: 'subheading', content: 'During a Team Meeting' },
      { type: 'paragraph', content: '"Notice who hasn\'t spoken yet. Consider creating space for quieter voices."' },
      { type: 'subheading', content: 'After Receiving Critical Feedback' },
      { type: 'paragraph', content: '"Pause before responding. What can you learn from this perspective?"' },
      { type: 'subheading', content: 'When Conflict Emerges' },
      { type: 'paragraph', content: '"What need might be underneath their position? Try curiosity before judgment."' },
      { type: 'heading', content: 'The Science of Nudging' },
      { type: 'paragraph', content: 'Behavioral economics research shows that small prompts at decision points significantly influence behavior. For EQ development:' },
      { type: 'subheading', content: 'Context Matters' },
      { type: 'paragraph', content: 'Nudges work because they arrive at the moment of relevance. Learning about active listening is abstract; being reminded to listen during a conversation is actionable.' },
      { type: 'subheading', content: 'Reduces Cognitive Load' },
      { type: 'paragraph', content: 'Nudges eliminate the need to remember training content. The right behavior is suggested when needed.' },
      { type: 'subheading', content: 'Builds Muscle Memory' },
      { type: 'paragraph', content: 'Repeated nudges in similar situations build automatic responses. Over time, the nudge becomes internalized.' },
      { type: 'heading', content: 'Implementing EQ Nudges' },
      { type: 'paragraph', content: 'Effective nudge programs require:' },
      { type: 'subheading', content: '1. Trigger Identification' },
      { type: 'paragraph', content: 'What moments offer the greatest opportunity for behavior change? Map the emotional hotspots in your work environment.' },
      { type: 'subheading', content: '2. Personalization' },
      { type: 'paragraph', content: 'Not everyone needs the same nudges. Use assessment data to target individual development areas.' },
      { type: 'subheading', content: '3. Brevity and Clarity' },
      { type: 'paragraph', content: 'Nudges must be processed in seconds. Clear, actionable language is essential.' },
      { type: 'subheading', content: '4. Non-Intrusive Delivery' },
      { type: 'paragraph', content: 'Nudges should help, not interrupt. Timing and delivery method matter.' },
      { type: 'subheading', content: '5. Progress Feedback' },
      { type: 'paragraph', content: 'Show users when they\'ve applied nudges successfully. Positive reinforcement accelerates change.' },
      { type: 'heading', content: 'Results from Real-Time Nudging' },
      { type: 'paragraph', content: 'Organizations using EQ nudges report:' },
      { type: 'list', content: ['40% reduction in conflict escalation', 'Improved meeting effectiveness scores', 'Higher manager feedback quality', 'Faster adoption of EQ behaviors'] },
      { type: 'paragraph', content: 'The future of EQ development isn\'t more training—it\'s smarter support exactly when people need it. Real-time nudges transform knowledge into action, one moment at a time.' }
    ]
  },
  'measuring-roi-eq': {
    title: 'Measuring ROI: The Business Case for Emotional Intelligence',
    excerpt: 'Quantify the impact of EQ development on team performance, retention, and business outcomes.',
    author: 'Jennifer Lee',
    authorRole: 'HR Analytics Director',
    date: '2024-01-05',
    readTime: '8 min read',
    category: 'Analytics',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    sections: [
      { type: 'paragraph', content: '"What\'s the ROI?" It\'s the question every HR and L&D leader faces when proposing emotional intelligence initiatives. While the intuitive value of EQ seems obvious, translating it into business metrics requires a structured approach. Here\'s how to build and measure the business case for emotional intelligence.' },
      { type: 'heading', content: 'Why ROI Matters for EQ Programs' },
      { type: 'paragraph', content: 'EQ development competes for budget with every other organizational initiative. Without clear ROI:' },
      { type: 'list', content: ['Programs get cut during budget crunches', 'Leadership support wavers', 'Investment remains superficial', 'Long-term commitment disappears'] },
      { type: 'paragraph', content: 'Proving ROI protects EQ investments and enables scaling what works.' },
      { type: 'heading', content: 'The Four Categories of EQ ROI' },
      { type: 'subheading', content: '1. Retention and Turnover Costs' },
      { type: 'paragraph', content: 'Emotional intelligence directly impacts why people stay or leave. High-EQ managers create environments where employees feel valued and understood.' },
      { type: 'paragraph', content: 'Measurement approach: Track voluntary turnover in teams before and after EQ interventions. Calculate cost-per-hire and productivity ramp time. Compare turnover rates between high-EQ and low-EQ managers.' },
      { type: 'paragraph', content: 'Typical findings: 25-50% reduction in turnover for teams with EQ-trained managers.' },
      { type: 'subheading', content: '2. Productivity and Performance' },
      { type: 'paragraph', content: 'Teams with high collective EQ collaborate more effectively, resolve conflicts faster, and maintain focus under pressure.' },
      { type: 'paragraph', content: 'Measurement approach: Track team productivity metrics before and after. Measure time spent on conflict vs. productive work. Compare performance reviews between high-EQ and low-EQ teams.' },
      { type: 'paragraph', content: 'Typical findings: 15-30% productivity improvement in EQ-focused teams.' },
      { type: 'subheading', content: '3. Customer and Client Satisfaction' },
      { type: 'paragraph', content: 'Emotional intelligence improves every customer interaction. Empathetic employees create better experiences.' },
      { type: 'paragraph', content: 'Measurement approach: Track NPS/CSAT scores for trained vs. untrained groups. Measure complaint rates and resolution satisfaction. Monitor customer retention metrics.' },
      { type: 'paragraph', content: 'Typical findings: 10-20% improvement in satisfaction scores.' },
      { type: 'subheading', content: '4. Leadership Effectiveness' },
      { type: 'paragraph', content: 'EQ is the differentiator between managers and leaders. High-EQ leaders inspire, align, and execute more effectively.' },
      { type: 'paragraph', content: 'Measurement approach: Use 360-degree feedback scores before and after. Track employee engagement scores by manager. Monitor team performance metrics.' },
      { type: 'paragraph', content: 'Typical findings: 35-40% improvement in leadership effectiveness ratings.' },
      { type: 'heading', content: 'Building Your ROI Model' },
      { type: 'subheading', content: 'Step 1: Baseline Measurement' },
      { type: 'paragraph', content: 'Before launching EQ initiatives, capture baseline metrics across relevant categories. You can\'t prove improvement without knowing where you started.' },
      { type: 'subheading', content: 'Step 2: Intervention Costs' },
      { type: 'paragraph', content: 'Document all costs: assessment tools, training time, facilitation, ongoing support, technology. Be thorough—hidden costs undermine ROI calculations.' },
      { type: 'subheading', content: 'Step 3: Control Groups' },
      { type: 'paragraph', content: 'Where possible, maintain control groups that don\'t receive interventions. This isolates EQ impact from other variables.' },
      { type: 'subheading', content: 'Step 4: Longitudinal Tracking' },
      { type: 'paragraph', content: 'EQ development takes time. Plan for 6-12 month measurement periods to capture sustainable change.' },
      { type: 'subheading', content: 'Step 5: Attribution Analysis' },
      { type: 'paragraph', content: 'Improvement might come from multiple sources. Use statistical methods to isolate EQ contribution.' },
      { type: 'heading', content: 'Sample ROI Calculation' },
      { type: 'paragraph', content: 'Consider a 100-person organization with 20% annual turnover (20 departures per year), $50,000 average cost per turnover, resulting in $1 million annual turnover cost.' },
      { type: 'paragraph', content: 'With an EQ intervention costing $100,000 total and achieving 25% turnover reduction, you save 5 departures, which equals $250,000 saved.' },
      { type: 'paragraph', content: 'ROI calculation: ($250,000 - $100,000) / $100,000 = 150%' },
      { type: 'paragraph', content: 'This doesn\'t include productivity gains, customer satisfaction improvements, or leadership development benefits—all additional ROI.' },
      { type: 'heading', content: 'Making the Case' },
      { type: 'paragraph', content: 'When presenting EQ ROI to leadership:' },
      { type: 'list', content: ['Lead with business outcomes, not feelings', 'Use organization-specific data where possible', 'Show comparable industry benchmarks', 'Present conservative estimates', 'Outline measurement methodology'] },
      { type: 'paragraph', content: 'The business case for emotional intelligence is strong. With proper measurement, it\'s also provable.' }
    ]
  },
  'remote-work-eq-connection': {
    title: 'Remote Work and EQ: Maintaining Connection Across Distance',
    excerpt: 'Strategies for building emotional intelligence in distributed teams and virtual environments.',
    author: 'David Park',
    authorRole: 'Remote Work Strategist',
    date: '2024-01-03',
    readTime: '6 min read',
    category: 'Remote Work',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    sections: [
      { type: 'paragraph', content: 'Remote and hybrid work has transformed how teams connect. While technology enables collaboration across distances, it also creates new challenges for emotional intelligence. Without hallway conversations, lunch chats, and in-person cues, maintaining emotional connection requires intentionality.' },
      { type: 'heading', content: 'The Remote EQ Challenge' },
      { type: 'paragraph', content: 'In-person interaction provides constant emotional data: facial expressions, body language, tone of voice, energy levels. Remote work strips away much of this information:' },
      { type: 'list', content: ['Video calls capture only a fraction of non-verbal communication', 'Text-based communication lacks emotional nuance', 'Asynchronous work creates response delays', 'Physical separation breeds psychological distance'] },
      { type: 'paragraph', content: 'Without deliberate effort, remote teams drift toward transactional relationships, missing the emotional bonds that drive engagement and performance.' },
      { type: 'heading', content: 'EQ Competencies for Remote Success' },
      { type: 'subheading', content: 'Enhanced Self-Awareness' },
      { type: 'paragraph', content: 'Remote workers must recognize their own emotional states without external feedback. Isolation can mask declining well-being until crisis points.' },
      { type: 'paragraph', content: 'Strategies: Regular emotional check-ins with yourself. Notice patterns—when do you feel connected vs. isolated? Monitor energy levels and stress indicators.' },
      { type: 'subheading', content: 'Intentional Self-Expression' },
      { type: 'paragraph', content: 'Without spontaneous interaction, emotions must be communicated deliberately. This feels awkward but builds connection.' },
      { type: 'paragraph', content: 'Strategies: Name your emotional state in conversations. Over-communicate enthusiasm, gratitude, and concern. Use video when discussing emotional topics.' },
      { type: 'subheading', content: 'Active Empathy Seeking' },
      { type: 'paragraph', content: 'In-person empathy often happens automatically. Remote empathy requires active effort to understand others\' experiences.' },
      { type: 'paragraph', content: 'Strategies: Ask explicitly about well-being, not just work. Listen for what\'s unsaid in text communication. Assume positive intent when tone is unclear.' },
      { type: 'subheading', content: 'Digital Relationship Building' },
      { type: 'paragraph', content: 'Relationships don\'t build themselves remotely. Intentional connection activities replace organic interaction.' },
      { type: 'paragraph', content: 'Strategies: Schedule virtual coffee chats. Create non-work connection opportunities. Invest in deeper one-on-one conversations.' },
      { type: 'heading', content: 'Team Practices for Remote EQ' },
      { type: 'subheading', content: 'Start Meetings with Check-Ins' },
      { type: 'paragraph', content: 'Begin virtual meetings with quick emotional check-ins. Even 30 seconds per person builds awareness and connection.' },
      { type: 'subheading', content: 'Create Psychological Safety Signals' },
      { type: 'paragraph', content: 'Remote environments need explicit safety signals. Normalize vulnerability, celebrate learning from failures, and respond to risk-taking with support.' },
      { type: 'subheading', content: 'Establish Communication Norms' },
      { type: 'paragraph', content: 'Agree on when to use video, how quickly to respond, and how to signal urgency vs. flexibility. Clear norms reduce emotional guesswork.' },
      { type: 'subheading', content: 'Schedule Unstructured Time' },
      { type: 'paragraph', content: 'Not every interaction should have an agenda. Virtual social time, optional video hangouts, and chat channels for non-work topics maintain human connection.' },
      { type: 'subheading', content: 'Address Conflict Promptly' },
      { type: 'paragraph', content: 'Conflict escalates faster remotely because there\'s no informal repair mechanism. Address tensions immediately and via video when possible.' },
      { type: 'heading', content: 'Technology That Supports Remote EQ' },
      { type: 'paragraph', content: 'The right tools can help teams maintain emotional connection:' },
      { type: 'list', content: ['Pulse surveys for ongoing sentiment tracking', 'EQ nudges integrated into workflow tools', 'Video-first communication platforms', 'Virtual whiteboarding for collaborative energy', 'Recognition and appreciation platforms'] },
      { type: 'heading', content: 'The Hybrid Complexity' },
      { type: 'paragraph', content: 'Hybrid work adds another layer of EQ challenge. When some team members are in-person and others remote:' },
      { type: 'list', content: ['In-person people naturally bond more', 'Remote members feel like second-class citizens', 'Information flows unevenly', 'Proximity bias affects opportunities'] },
      { type: 'paragraph', content: 'Hybrid EQ requires extra effort to include remote voices, share information equitably, and ensure all team members feel equally valued.' },
      { type: 'heading', content: 'Building Remote EQ Over Time' },
      { type: 'paragraph', content: 'Remote emotional intelligence isn\'t developed overnight. It requires:' },
      { type: 'list', content: ['Ongoing practice and skill development', 'Team commitment to connection', 'Leader modeling of remote EQ behaviors', 'Regular reflection on what\'s working'] },
      { type: 'paragraph', content: 'The future of work is distributed. Teams that master remote EQ will thrive regardless of where their members sit.' }
    ]
  }
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = slug ? blogContent[slug] : null;

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col bg-rebuttl-lightBg">
        <Navbar />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <Link to="/blogs" className="text-rebuttl-blue hover:underline">
              ← Back to Blogs
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const renderSection = (section: BlogSection, index: number) => {
    switch (section.type) {
      case 'heading':
        return (
          <h2 key={index} className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-gray-900 border-l-4 border-rebuttl-blue pl-4">
            {section.content as string}
          </h2>
        );
      case 'subheading':
        return (
          <h3 key={index} className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-gray-800">
            {section.content as string}
          </h3>
        );
      case 'list':
        return (
          <ul key={index} className="mb-6 space-y-3">
            {(section.content as string[]).map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 text-lg leading-relaxed">
                <span className="w-2 h-2 bg-rebuttl-blue rounded-full mt-2.5 flex-shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
      case 'paragraph':
      default:
        return (
          <p key={index} className="text-gray-700 text-lg leading-relaxed mb-6">
            {section.content as string}
          </p>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="container mx-auto">
              <Link 
                to="/blogs" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blogs
              </Link>
              <span className="inline-block bg-rebuttl-blue text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                {blog.category}
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
                {blog.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-10 pb-10 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-rebuttl-blue/10 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-rebuttl-blue" />
                </div>
                <div>
                  <span className="block font-semibold text-gray-900">{blog.author}</span>
                  <span className="text-gray-500">{blog.authorRole}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-400" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed font-medium">
              {blog.excerpt}
            </p>

            {/* Content */}
            <div className="article-content">
              {blog.sections.map((section, index) => renderSection(section, index))}
            </div>

            {/* Share & CTA */}
            <div className="mt-16 pt-10 border-t border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <button className="inline-flex items-center gap-2 text-gray-600 hover:text-rebuttl-blue transition-colors">
                  <Share2 className="w-5 h-5" />
                  Share this article
                </button>
                <Link 
                  to="/blogs"
                  className="bg-rebuttl-blue hover:bg-rebuttl-blue/90 text-white px-8 py-4 rounded-lg font-bold transition-colors"
                >
                  Read More Articles
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Want to develop your team's EQ?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Discover how Lumi6 can help your organization build emotional intelligence at scale.
            </p>
            <button 
              onClick={() => window.open('https://app.lumi6.com/signup', '_blank')}
              className="bg-white hover:bg-gray-100 text-rebuttl-blue px-8 py-4 rounded-lg font-bold transition-colors text-lg"
            >
              Get Started Free
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
