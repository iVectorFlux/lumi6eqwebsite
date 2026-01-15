import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';

// Blog content data
const blogContent: Record<string, {
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string[];
}> = {
  'future-of-work-eq': {
    title: 'The Future of Work: Why Emotional Intelligence is the #1 Skill',
    excerpt: 'Explore how EQ is becoming the most critical skill in the AI-driven workplace and what it means for your team.',
    author: 'Sarah Chen',
    authorRole: 'Chief People Officer',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Leadership',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    content: [
      `As artificial intelligence continues to reshape the workplace, one skill has emerged as irreplaceable: emotional intelligence. While machines excel at processing data and automating repetitive tasks, they cannot replicate the nuanced human abilities of empathy, self-awareness, and relationship management.`,
      
      `## The AI Paradox: More Tech, More Human Skills Needed`,
      
      `Paradoxically, as workplaces become more automated, the demand for emotional intelligence grows stronger. The World Economic Forum consistently ranks EQ-related skills among the top competencies needed for the future workforce. Here's why:`,
      
      `**1. Human Connection Becomes Premium**\n\nIn an increasingly digital world, authentic human connection becomes rare and valuable. Leaders who can build genuine relationships, understand team dynamics, and create psychologically safe environments will drive better business outcomes.`,
      
      `**2. Complex Problem-Solving Requires Collaboration**\n\nAI can solve defined problems, but the ambiguous, complex challenges organizations face require diverse teams working together effectively. Emotional intelligence enables this collaboration.`,
      
      `**3. Change Management Demands Empathy**\n\nAs technology transforms industries, organizations undergo constant change. Leaders with high EQ can guide teams through uncertainty, addressing fears and building resilience.`,
      
      `## The Business Case for EQ`,
      
      `Research consistently shows that emotional intelligence delivers measurable business results:`,
      
      `- Teams with high collective EQ outperform others by 20-30%\n- Leaders with high EQ create teams with 50% lower turnover\n- Organizations investing in EQ development see 25% productivity gains`,
      
      `## What This Means for Your Team`,
      
      `The organizations that thrive in the AI era will be those that invest in developing emotional intelligence at every level. This means:`,
      
      `**For Leaders:** Prioritize your own EQ development. Model self-awareness, empathy, and effective relationship management. Create cultures where emotional intelligence is valued and practiced.`,
      
      `**For Teams:** Build psychological safety where team members can express emotions, take risks, and learn from failures. Use EQ assessments to understand team dynamics and identify growth areas.`,
      
      `**For Individuals:** Invest in understanding your emotional patterns. Develop skills in self-regulation, empathy, and social awareness. These capabilities will be your competitive advantage.`,
      
      `## The Path Forward`,
      
      `The future of work isn't about choosing between technology and humanity—it's about leveraging both. As AI handles more technical tasks, our uniquely human capabilities become more valuable. Emotional intelligence isn't just a nice-to-have; it's the foundation of success in the modern workplace.`,
      
      `Start your EQ journey today. Assess where you and your team stand, identify growth opportunities, and commit to continuous development. The future belongs to the emotionally intelligent.`
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
    content: [
      `High-performing teams don't happen by accident. While technical skills and experience matter, the secret ingredient that separates good teams from great ones is collective emotional intelligence. Understanding and developing EQ within your team can transform how they collaborate, innovate, and deliver results.`,
      
      `## Why EQ Assessment Matters for Teams`,
      
      `Traditional team assessments focus on skills, personality types, or working styles. While valuable, these miss a critical dimension: how team members understand and manage emotions—their own and others'. EQ assessment fills this gap by revealing:`,
      
      `- Individual emotional strengths and growth areas\n- Team dynamics and potential friction points\n- Communication patterns and blind spots\n- Leadership styles and their impact`,
      
      `## The Four Pillars of Team EQ`,
      
      `**1. Self-Awareness**\n\nTeam members who understand their emotional triggers, strengths, and weaknesses contribute more effectively. They know when to speak up and when to listen, when to push forward and when to step back.`,
      
      `**2. Self-Management**\n\nHigh-pressure situations test every team. Members with strong self-management maintain composure, adapt to changes, and remain productive even when stressed.`,
      
      `**3. Social Awareness**\n\nEmpathetic team members read the room. They sense when colleagues struggle, understand unspoken concerns, and navigate organizational dynamics effectively.`,
      
      `**4. Relationship Management**\n\nThe ability to influence, inspire, and resolve conflicts determines whether teams achieve their potential. Strong relationship skills enable difficult conversations and collaborative problem-solving.`,
      
      `## Conducting Effective EQ Assessments`,
      
      `Here's how to use EQ assessments to build better teams:`,
      
      `**Step 1: Individual Assessments**\n\nStart by having each team member complete a comprehensive EQ assessment. This provides baseline data on individual strengths and development areas across all four domains.`,
      
      `**Step 2: Team Analysis**\n\nMap individual results to create a team profile. Look for patterns—are certain competencies strong across the board? Where are the gaps? How might individual differences create friction?`,
      
      `**Step 3: Facilitated Discussion**\n\nShare results in a psychologically safe environment. Focus on understanding, not judgment. Help team members see how their emotional patterns impact collaboration.`,
      
      `**Step 4: Development Planning**\n\nCreate both individual and team development plans. Identify specific behaviors to practice, situations to navigate differently, and support mechanisms to implement.`,
      
      `## Common Team EQ Patterns`,
      
      `Through years of team assessments, certain patterns emerge:`,
      
      `**The Conflict-Avoidant Team:** High empathy but low assertiveness leads to unaddressed issues and passive-aggressive behavior.\n\n**The High-Performer Trap:** Individual stars with low social awareness create silos and resentment.\n\n**The Emotionally Exhausted Team:** Constant fire-fighting depletes self-management reserves, leading to burnout.`,
      
      `## Making It Stick`,
      
      `Assessment is just the beginning. To build lasting team EQ:`,
      
      `- Integrate EQ language into daily interactions\n- Create feedback loops for continuous improvement\n- Celebrate EQ wins alongside performance achievements\n- Provide ongoing coaching and support`,
      
      `High-performing teams are built on trust, communication, and emotional intelligence. Start with assessment, commit to development, and watch your team transform.`
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
    content: [
      `Traditional corporate training is broken. Day-long workshops, quarterly sessions, and annual retreats feel productive in the moment but rarely create lasting change. This is especially true for emotional intelligence development, which requires consistent practice over time. Enter micro-learning—a research-backed approach that's revolutionizing how we develop EQ skills.`,
      
      `## The Problem with Traditional EQ Training`,
      
      `Most organizations approach EQ development like any other training: schedule a workshop, bring in an expert, and check the box. But emotional intelligence isn't learned in a day. The challenges:`,
      
      `- Information overload prevents retention\n- Skills aren't practiced in real contexts\n- No reinforcement after training ends\n- One-size-fits-all doesn't address individual needs\n- ROI is difficult to measure`,
      
      `## What is Micro-Learning?`,
      
      `Micro-learning delivers content in small, focused bursts—typically 3-10 minutes. Instead of trying to cover everything at once, it breaks complex topics into digestible pieces, delivered consistently over time.`,
      
      `For EQ development, this might look like:`,
      
      `- Daily reflection prompts (2 minutes)\n- Weekly scenario-based exercises (5 minutes)\n- Bite-sized video lessons (3-5 minutes)\n- In-the-moment behavioral nudges (30 seconds)`,
      
      `## The Science Behind Micro-Learning`,
      
      `Research supports the micro-learning approach for skill development:`,
      
      `**Spaced Repetition**\n\nThe brain retains information better when exposed to it repeatedly over time. Micro-learning naturally incorporates spaced repetition, leading to 50% better retention than massed learning.`,
      
      `**Cognitive Load Theory**\n\nOur working memory has limits. Short, focused content prevents overload and enables deeper processing.`,
      
      `**Habit Formation**\n\nDaily micro-learning builds habits. Consistent small actions compound into significant behavior change over months.`,
      
      `**Contextual Learning**\n\nMicro-learning can be delivered in the moment—before a difficult conversation, after a team meeting—when relevance is highest.`,
      
      `## Applying Micro-Learning to EQ Development`,
      
      `Here's how to structure a micro-learning approach for emotional intelligence:`,
      
      `**Week 1-4: Self-Awareness Foundation**\n\n- Daily emotion check-ins (2 min)\n- Weekly reflection exercises (5 min)\n- Trigger identification activities\n- Pattern recognition practice`,
      
      `**Week 5-8: Self-Management Skills**\n\n- Stress response techniques (3 min each)\n- Emotional regulation exercises\n- Impulse control strategies\n- Adaptability scenarios`,
      
      `**Week 9-12: Social Awareness Development**\n\n- Empathy-building exercises\n- Perspective-taking practice\n- Social cue recognition\n- Organizational awareness activities`,
      
      `**Week 13-16: Relationship Management**\n\n- Communication skill builders\n- Conflict resolution scenarios\n- Influence and persuasion practice\n- Team collaboration exercises`,
      
      `## Keys to Micro-Learning Success`,
      
      `**Consistency Over Intensity**\n\nFive minutes daily beats two hours weekly. Build the habit first.`,
      
      `**Relevance and Application**\n\nContent must connect to real work situations. Abstract concepts without application won't stick.`,
      
      `**Progress Tracking**\n\nShow learners their improvement. Progress visibility maintains motivation.`,
      
      `**Social Components**\n\nAllow learners to share insights, practice with peers, and celebrate progress together.`,
      
      `## The Results`,
      
      `Organizations implementing micro-learning for EQ development report:`,
      
      `- 80% completion rates (vs. 20-30% for traditional training)\n- 60% improvement in targeted EQ competencies\n- Sustained behavior change measured 6+ months later\n- Higher employee engagement with development`,
      
      `Emotional intelligence isn't developed in a day—it's built through consistent, intentional practice over time. Micro-learning provides the framework for sustainable EQ development that actually works.`
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
    content: [
      `The gap between knowing and doing is where most EQ development fails. People attend workshops, take assessments, and genuinely want to improve—but when the pressure hits in a real meeting, old patterns take over. Real-time EQ nudges bridge this gap by delivering guidance exactly when and where it matters.`,
      
      `## The Knowing-Doing Gap`,
      
      `Traditional EQ development assumes that if people understand concepts, they'll apply them. But emotional intelligence is different from intellectual knowledge. In high-stakes moments:`,
      
      `- Stress triggers automatic responses\n- Cognitive load prevents thoughtful reaction\n- Old habits override new learning\n- The "heat of the moment" bypasses rational thinking`,
      
      `This is why someone can ace an EQ assessment but still blow up in a tense meeting. Knowledge doesn't automatically translate to behavior.`,
      
      `## What Are EQ Nudges?`,
      
      `EQ nudges are brief, contextual prompts delivered at moments of opportunity. Unlike training that happens before situations, nudges arrive during or immediately before relevant moments. Examples:`,
      
      `**Before a Difficult Conversation:**\n"Take a breath. Remember to listen first before responding."`,
      
      `**During a Team Meeting:**\n"Notice who hasn't spoken yet. Consider creating space for quieter voices."`,
      
      `**After Receiving Critical Feedback:**\n"Pause before responding. What can you learn from this perspective?"`,
      
      `**When Conflict Emerges:**\n"What need might be underneath their position? Try curiosity before judgment."`,
      
      `## The Science of Nudging`,
      
      `Behavioral economics research shows that small prompts at decision points significantly influence behavior. For EQ development:`,
      
      `**Context Matters**\n\nNudges work because they arrive at the moment of relevance. Learning about active listening is abstract; being reminded to listen during a conversation is actionable.`,
      
      `**Reduces Cognitive Load**\n\nNudges eliminate the need to remember training content. The right behavior is suggested when needed.`,
      
      `**Builds Muscle Memory**\n\nRepeated nudges in similar situations build automatic responses. Over time, the nudge becomes internalized.`,
      
      `## Implementing EQ Nudges`,
      
      `Effective nudge programs require:`,
      
      `**1. Trigger Identification**\n\nWhat moments offer the greatest opportunity for behavior change? Map the emotional hotspots in your work environment.`,
      
      `**2. Personalization**\n\nNot everyone needs the same nudges. Use assessment data to target individual development areas.`,
      
      `**3. Brevity and Clarity**\n\nNudges must be processed in seconds. Clear, actionable language is essential.`,
      
      `**4. Non-Intrusive Delivery**\n\nNudges should help, not interrupt. Timing and delivery method matter.`,
      
      `**5. Progress Feedback**\n\nShow users when they've applied nudges successfully. Positive reinforcement accelerates change.`,
      
      `## Results from Real-Time Nudging`,
      
      `Organizations using EQ nudges report:`,
      
      `- 40% reduction in conflict escalation\n- Improved meeting effectiveness scores\n- Higher manager feedback quality\n- Faster adoption of EQ behaviors`,
      
      `The future of EQ development isn't more training—it's smarter support exactly when people need it. Real-time nudges transform knowledge into action, one moment at a time.`
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
    content: [
      `"What's the ROI?" It's the question every HR and L&D leader faces when proposing emotional intelligence initiatives. While the intuitive value of EQ seems obvious, translating it into business metrics requires a structured approach. Here's how to build and measure the business case for emotional intelligence.`,
      
      `## Why ROI Matters for EQ Programs`,
      
      `EQ development competes for budget with every other organizational initiative. Without clear ROI:`,
      
      `- Programs get cut during budget crunches\n- Leadership support wavers\n- Investment remains superficial\n- Long-term commitment disappears`,
      
      `Proving ROI protects EQ investments and enables scaling what works.`,
      
      `## The Four Categories of EQ ROI`,
      
      `**1. Retention and Turnover Costs**\n\nEmotional intelligence directly impacts why people stay or leave. High-EQ managers create environments where employees feel valued and understood.`,
      
      `Measurement approach:\n- Track voluntary turnover in teams before/after EQ interventions\n- Calculate cost-per-hire and productivity ramp time\n- Compare turnover rates: high-EQ vs. low-EQ managers`,
      
      `Typical findings: 25-50% reduction in turnover for teams with EQ-trained managers.`,
      
      `**2. Productivity and Performance**\n\nTeams with high collective EQ collaborate more effectively, resolve conflicts faster, and maintain focus under pressure.`,
      
      `Measurement approach:\n- Track team productivity metrics before/after\n- Measure time spent on conflict vs. productive work\n- Compare performance reviews: high-EQ vs. low-EQ teams`,
      
      `Typical findings: 15-30% productivity improvement in EQ-focused teams.`,
      
      `**3. Customer and Client Satisfaction**\n\nEmotional intelligence improves every customer interaction. Empathetic employees create better experiences.`,
      
      `Measurement approach:\n- Track NPS/CSAT scores for trained vs. untrained groups\n- Measure complaint rates and resolution satisfaction\n- Monitor customer retention metrics`,
      
      `Typical findings: 10-20% improvement in satisfaction scores.`,
      
      `**4. Leadership Effectiveness**\n\nEQ is the differentiator between managers and leaders. High-EQ leaders inspire, align, and execute more effectively.`,
      
      `Measurement approach:\n- 360-degree feedback scores before/after\n- Employee engagement scores by manager\n- Team performance metrics`,
      
      `Typical findings: 35-40% improvement in leadership effectiveness ratings.`,
      
      `## Building Your ROI Model`,
      
      `**Step 1: Baseline Measurement**\n\nBefore launching EQ initiatives, capture baseline metrics across relevant categories. You can't prove improvement without knowing where you started.`,
      
      `**Step 2: Intervention Costs**\n\nDocument all costs: assessment tools, training time, facilitation, ongoing support, technology. Be thorough—hidden costs undermine ROI calculations.`,
      
      `**Step 3: Control Groups**\n\nWhere possible, maintain control groups that don't receive interventions. This isolates EQ impact from other variables.`,
      
      `**Step 4: Longitudinal Tracking**\n\nEQ development takes time. Plan for 6-12 month measurement periods to capture sustainable change.`,
      
      `**Step 5: Attribution Analysis**\n\nImprovement might come from multiple sources. Use statistical methods to isolate EQ contribution.`,
      
      `## Sample ROI Calculation`,
      
      `Consider a 100-person organization with:\n- 20% annual turnover (20 departures/year)\n- $50,000 average cost per turnover\n- $1 million annual turnover cost`,
      
      `EQ intervention:\n- $100,000 total program cost\n- 25% turnover reduction achieved\n- 5 fewer departures = $250,000 saved`,
      
      `ROI: ($250,000 - $100,000) / $100,000 = 150%`,
      
      `This doesn't include productivity gains, customer satisfaction improvements, or leadership development benefits—all additional ROI.`,
      
      `## Making the Case`,
      
      `When presenting EQ ROI to leadership:`,
      
      `- Lead with business outcomes, not feelings\n- Use organization-specific data where possible\n- Show comparable industry benchmarks\n- Present conservative estimates\n- Outline measurement methodology`,
      
      `The business case for emotional intelligence is strong. With proper measurement, it's also provable.`
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
    content: [
      `Remote and hybrid work has transformed how teams connect. While technology enables collaboration across distances, it also creates new challenges for emotional intelligence. Without hallway conversations, lunch chats, and in-person cues, maintaining emotional connection requires intentionality.`,
      
      `## The Remote EQ Challenge`,
      
      `In-person interaction provides constant emotional data: facial expressions, body language, tone of voice, energy levels. Remote work strips away much of this information:`,
      
      `- Video calls capture only a fraction of non-verbal communication\n- Text-based communication lacks emotional nuance\n- Asynchronous work creates response delays\n- Physical separation breeds psychological distance`,
      
      `Without deliberate effort, remote teams drift toward transactional relationships, missing the emotional bonds that drive engagement and performance.`,
      
      `## EQ Competencies for Remote Success`,
      
      `**Enhanced Self-Awareness**\n\nRemote workers must recognize their own emotional states without external feedback. Isolation can mask declining well-being until crisis points.`,
      
      `Strategies:\n- Regular emotional check-ins with yourself\n- Notice patterns: When do you feel connected vs. isolated?\n- Monitor energy levels and stress indicators`,
      
      `**Intentional Self-Expression**\n\nWithout spontaneous interaction, emotions must be communicated deliberately. This feels awkward but builds connection.`,
      
      `Strategies:\n- Name your emotional state in conversations\n- Over-communicate enthusiasm, gratitude, and concern\n- Use video when discussing emotional topics`,
      
      `**Active Empathy Seeking**\n\nIn-person empathy often happens automatically. Remote empathy requires active effort to understand others' experiences.`,
      
      `Strategies:\n- Ask explicitly about well-being, not just work\n- Listen for what's unsaid in text communication\n- Assume positive intent when tone is unclear`,
      
      `**Digital Relationship Building**\n\nRelationships don't build themselves remotely. Intentional connection activities replace organic interaction.`,
      
      `Strategies:\n- Schedule virtual coffee chats\n- Create non-work connection opportunities\n- Invest in deeper one-on-one conversations`,
      
      `## Team Practices for Remote EQ`,
      
      `**Start Meetings with Check-Ins**\n\nBegin virtual meetings with quick emotional check-ins. Even 30 seconds per person builds awareness and connection.`,
      
      `**Create Psychological Safety Signals**\n\nRemote environments need explicit safety signals. Normalize vulnerability, celebrate learning from failures, and respond to risk-taking with support.`,
      
      `**Establish Communication Norms**\n\nAgree on when to use video, how quickly to respond, and how to signal urgency vs. flexibility. Clear norms reduce emotional guesswork.`,
      
      `**Schedule Unstructured Time**\n\nNot every interaction should have an agenda. Virtual social time, optional video hangouts, and chat channels for non-work topics maintain human connection.`,
      
      `**Address Conflict Promptly**\n\nConflict escalates faster remotely because there's no informal repair mechanism. Address tensions immediately and via video when possible.`,
      
      `## Technology That Supports Remote EQ`,
      
      `The right tools can help teams maintain emotional connection:`,
      
      `- Pulse surveys for ongoing sentiment tracking\n- EQ nudges integrated into workflow tools\n- Video-first communication platforms\n- Virtual whiteboarding for collaborative energy\n- Recognition and appreciation platforms`,
      
      `## The Hybrid Complexity`,
      
      `Hybrid work adds another layer of EQ challenge. When some team members are in-person and others remote:`,
      
      `- In-person people naturally bond more\n- Remote members feel like second-class citizens\n- Information flows unevenly\n- Proximity bias affects opportunities`,
      
      `Hybrid EQ requires extra effort to include remote voices, share information equitably, and ensure all team members feel equally valued.`,
      
      `## Building Remote EQ Over Time`,
      
      `Remote emotional intelligence isn't developed overnight. It requires:`,
      
      `- Ongoing practice and skill development\n- Team commitment to connection\n- Leader modeling of remote EQ behaviors\n- Regular reflection on what's working`,
      
      `The future of work is distributed. Teams that master remote EQ will thrive regardless of where their members sit.`
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

  const renderContent = (content: string[]) => {
    return content.map((block, index) => {
      if (block.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-gray-900">
            {block.replace('## ', '')}
          </h2>
        );
      }
      if (block.startsWith('**') && block.endsWith('**')) {
        return (
          <h3 key={index} className="text-xl font-bold mt-6 mb-2 text-gray-800">
            {block.replace(/\*\*/g, '')}
          </h3>
        );
      }
      if (block.includes('\n')) {
        return (
          <div key={index} className="mb-6">
            {block.split('\n').map((line, lineIndex) => {
              if (line.startsWith('**') && line.includes('**')) {
                const parts = line.split('**');
                return (
                  <p key={lineIndex} className="text-gray-700 leading-relaxed mb-2">
                    <strong>{parts[1]}</strong>{parts[2]}
                  </p>
                );
              }
              if (line.startsWith('- ')) {
                return (
                  <li key={lineIndex} className="text-gray-700 leading-relaxed ml-4 mb-1">
                    {line.replace('- ', '')}
                  </li>
                );
              }
              return (
                <p key={lineIndex} className="text-gray-700 leading-relaxed mb-2">
                  {line}
                </p>
              );
            })}
          </div>
        );
      }
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
          {block}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Image */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 md:px-8 lg:px-16 -mt-16 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 lg:p-16">
            {/* Category & Back Link */}
            <div className="flex items-center justify-between mb-8">
              <Link 
                to="/blogs" 
                className="inline-flex items-center gap-2 text-gray-600 hover:text-rebuttl-blue transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blogs
              </Link>
              <span className="bg-rebuttl-blue/10 text-rebuttl-blue px-4 py-1 rounded-full text-sm font-medium">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-10 pb-10 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{blog.author}</span>
                <span className="text-gray-400">•</span>
                <span>{blog.authorRole}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(blog.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {blog.readTime}
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-xl md:text-2xl text-gray-600 mb-10 italic leading-relaxed">
              {blog.excerpt}
            </p>

            {/* Content - Two Column Layout on Large Screens */}
            <div className="lg:columns-2 lg:gap-12 prose prose-lg lg:prose-xl max-w-none">
              {renderContent(blog.content)}
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
                  className="bg-rebuttl-blue hover:bg-rebuttl-blue/90 text-white px-8 py-4 rounded-lg font-bold transition-colors text-lg"
                >
                  Read More Articles
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles CTA */}
        <section className="py-16 bg-gray-50 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to develop your team's EQ?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Discover how Lumi6 can help your organization build emotional intelligence at scale.
            </p>
            <button 
              onClick={() => window.open('https://app.lumi6.com/signup', '_blank')}
              className="bg-rebuttl-blue hover:bg-rebuttl-blue/90 text-white px-8 py-3 rounded-lg font-bold transition-colors"
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
