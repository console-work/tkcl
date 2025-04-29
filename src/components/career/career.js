'use client'
import "./career.css";
import { SlCalender } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { useEffect, useState } from "react";



import Footer from "../footer/footer";
import NavbarHome from "../navbar/navbar";
import CareerMail from "./careerMail";

const Career = () => {
  const [jobCircular] = useState([
    {
      id: 1,
      title: "Creative Designer",
      description: `<div class="job-des">
<h1>Creative Designer for Marketing Team (Vacancy 02)</h1>
    <p>We strongly encourage you to read the whole circular prior to applying</p>
    
    <h3>Key Responsibilities:</h3>
    <ul>
        <li><b>Design Creation:</b> Develop and produce creative designs for various mediums including print, digital, and social media.</li>
        <li><b>Brand Consistency:</b> Ensure all designs align with the company’s brand guidelines and visual identity.</li>
        <li><b>Collaborative Projects:</b> Work closely with the marketing, product development, and sales teams to understand project requirements and deliver effective design solutions.</li>
        <li><b>Concept Development:</b> Brainstorm and develop innovative concepts for marketing campaigns, product launches, and promotional events.</li>
        <li><b>Revisions and Feedback:</b> Revise and improve designs based on feedback from stakeholders and team members.</li>
        <li><b>Software Proficiency:</b> Utilize design software such as Adobe Creative Suite (Photoshop, Illustrator, InDesign), Figma, etc. to create high-quality designs.</li>
        <li><b>Trend Awareness:</b> Stay updated on the latest design trends, tools, and technologies to ensure the company’s visuals remain fresh and relevant.</li>
        <li><b>Project Management:</b> Manage multiple design projects simultaneously, ensuring timely delivery and high-quality output.</li>
    </ul>
    
    <h3>Qualifications:</h3>
    <ul>
        <li>Bachelor's degree in Graphic Design, Visual Arts, or a related field.</li>
        <li>1+ years of experience in graphic design or a related role.</li>
        <li>Strong portfolio showcasing a range of design projects and creative solutions.</li>
        <li>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign).</li>
        <li>Excellent visual design skills with a strong understanding of layout, typography, and color theory.</li>
        <li>Strong communication and collaboration skills.</li>
        <li>Ability to manage multiple projects and meet deadlines in a fast-paced environment.</li>
        <li>Attention to detail and a keen eye for aesthetics.</li>
    </ul>
    
    <h3>Preferred Qualifications:</h3>
    <ul>
        <li>Experience in the [industry/field] sector.</li>
        <li>Familiarity with web design and multimedia content development.</li>
        <li>Knowledge of HTML/CSS and web design principles.</li>
    </ul>
    
    <h3>What We Offer:</h3>
    <ul>
        <li>Competitive salary and benefits package.</li>
        <li>Opportunity to work with a dynamic and innovative team.</li>
        <li>Career growth and development opportunities.</li>
        <li>Creative and collaborative work environment.</li>
        <li>Access to the latest design tools and technologies.</li>
    </ul>
    
    <h3>Job Location:</h3>
    <p>Dhaka</p>
    
    <h3>Employment Status:</h3>
    <p>Full-time</p>
    
    <p><strong>Email at:</strong> <a href="mailto:career@thekowcompany.com">career@thekowcompany.com</a></p>
    <p><strong>Email Before:</strong> 31st July 2024</p>
	</div>

`,
      date: "31 July, 2024",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      description: `<div class="job-des">
  <h1>UI/UX Designer</h1>
    <p>The KOW Company Ltd is looking for a brilliant UI/UX designer to join our dynamic team and be the creative force behind our cutting-edge projects. As a UI/UX designer with 1-3 years of hands-on experience, you will craft seamless, visually stunning user experiences that leave a lasting impact.</p>
    
    <h3>Responsibilities:</h3>
    <ul>
        <li>Gather and evaluate user and client requirements in collaboration with product managers and developers.</li>
        <li>Illustrate design ideas using storyboards, process flows, wireframes, and sitemaps.</li>
        <li>Design graphic user interfaces and other creatives.</li>
        <li>Ideation in the Design System.</li>
        <li>Prepare and present rough drafts to internal teams and key stakeholders.</li>
        <li>Identify and troubleshoot UX problems.</li>
        <li>Conduct layout adjustments and responsive friendly UI Design.</li>
        <li>Knowing about requirement engineering.</li>
    </ul>
    
    <h3>Qualifications:</h3>
    <ul>
        <li>Proven work experience of 1 - 3 years.</li>
        <li>Knowledge of Design tools (e.g., Figma, Photoshop, Illustrator).</li>
        <li>Up-to-date knowledge of trendy designs.</li>
        <li>Team spirit and strong communication skills to collaborate with various stakeholders.</li>
        <li>Good time-management skills.</li>
        <li>BSc in Design, Computer Science, or a relevant field (Not needed if you are really good).</li>
    </ul>
    
    <p>If you think creatively and analytically sound, apply via the email address: <a href="mailto:career@thekowcompany.com">career@thekowcompany.com</a> and specify in the subject line that you are “applying for a UI/UX hiring position.”</p> 
    <p><b>Email at:</b> <a href="mailto:career@thekowcompany.com">career@thekowcompany.com</a></p>
    <p><b> Email Before:</b> 31st July 2024</p>

	</div>

`,
      date: "31 July, 2024",
    },
    {
      id: 3,
      title: "Strategy and Risk Analyst",
      description: `  <div class="job-des">
   <h1>Strategy and Risk Analyst for Marketing Team (Vacancy 01)</h1>
    <p><strong>We strongly encourage you to read the whole circular prior to applying</strong></p>

    <h3>Key Responsibilities:</h3>
    <ul>
        <li><strong>Market and Risk Analysis:</strong> Conduct market research to identify trends, opportunities, and threats. Analyze competitor strategies and assess risks in marketing campaigns, developing mitigation plans.</li>
        <li><strong>Data-Driven Insights:</strong> Collect and analyze marketing data to measure campaign effectiveness and provide actionable insights for performance improvement.</li>
        <li><strong>Strategic Collaboration:</strong> Work with the marketing team to refine strategies based on data analysis and market research. Ensure alignment with sales, product development, and finance teams.</li>
        <li><strong>Reporting and Improvement:</strong> Prepare detailed reports on market trends, risks, and marketing performance. Stay updated on industry trends and implement best practices for continuous improvement.</li>
    </ul>

    <h3>Qualifications:</h3>
    <ul>
        <li>Bachelor's degree in Marketing, Business Administration, Finance, or a related field. Master's degree preferred.</li>
        <li>3+ years of experience in a strategy, risk analysis, or marketing analytics role.</li>
        <li>Strong analytical skills with the ability to interpret complex data and make data-driven recommendations.</li>
        <li>Experience with market research, risk assessment, and strategic planning.</li>
        <li>Proficiency in data analysis tools and software (e.g., Excel, SQL, Tableau).</li>
        <li>Excellent communication and presentation skills.</li>
        <li>Strong attention to detail and problem-solving abilities.</li>
        <li>Ability to work independently and as part of a team in a fast-paced environment.</li>
    </ul>

    <h3>Preferred Qualifications:</h3>
    <ul>
        <li>Experience in the image post-production sector.</li>
        <li>Familiarity with digital marketing tools and platforms (e.g., Google Analytics, social media analytics).</li>
        <li>Project management experience.</li>
    </ul>

    <h3>What We Offer:</h3>
    <ul>
        <li>Competitive salary and benefits package.</li>
        <li>Opportunity to work with a dynamic and innovative team.</li>
        <li>Career growth and development opportunities.</li>
        <li>Flexible work environment.</li>
    </ul>

    <h3>Job Location:</h3>
    <p>Dhaka</p>

    <h3>Employment Status:</h3>
    <p>Full-time</p>

     <p><strong>Email at: </strong><a href="mailto:career@thekowcompany.com">career@thekowcompany.com</a></p>
        <p><strong>Email Before:</strong> 31st July 2024</p>
</div>`,
      date: "31 July, 2024",
    },
    {
      id: 4,
      title: ".NET Developer",
      description: `  <div class="job-des">
 <h1>Software Engineer (.Net)</h1>
	<h4>Vacancy</h4>
	<p>1</p>
    <h3>Job Context</h3>
    <p>We are looking for an enthusiastic Software Engineer (.Net) to join our software development team.</p>
    <h3>Job Responsibilities</h3>
    <ul>
        <li>Minimum 2 years of coding experience in developing web applications with .NET Core Framework, C#.Net, Entity Framework, MVC, and MSSQL Server at a software company.</li>
        <li>Good knowledge and understanding of ASP.NET Web Services, Restful Web APIs, OData, Entity Framework, Asynchronous Programming in C#, LINQ, Lambdas, Func, Action, Routing, Model Binding, MSSQL, etc.</li>
        <li>Solid knowledge and experience in implementing Restful Web services using Web API.</li>
        <li>Deep knowledge of Object-Oriented design and implementation.</li>
        <li>Knowledge of Responsive Web Design (HTML5 & CSS3) with Cross-Browser Compatibility; Bootstrap Preferred.</li>
        <li>Good Knowledge on Javascript, JQuery, ReactJS.</li>
        <li>Excellent analytical, problem-solving, and decision-making skills.</li>
        <li>Must be capable of writing complex SQL queries, Stored procedures, SQL functions, and Triggers in an efficient way.</li>
    </ul>
    <h3>Employment Status</h3>
    <p>Full-time</p>
    <h3>Workplace</h3>
    <p>Work at office</p>
    <h3>Educational Requirements</h3>
    <p>Bachelor's degree in any discipline. Preference will be given to graduates in CSE, Mathematics, and IT related subjects.</p>
    <h3>Additional Requirements</h3>
    <ul>
        <li>Age 24 to 34 years</li>
        <li>Both males and females are allowed to apply</li>
        <li>Must be experienced in Software Development with .Net Core Framework, C# .Net Core, ASP.NET Core MVC, Entity Framework Core.</li>
        <li>Experience in ASP.Net Core Blazor, Dapper, React JS will be given preference.</li>
        <li>Knowledge on Software Development Architecture, Software Development Life Cycle, Design Patterns.</li>
        <li>Good knowledge of OAuth, Identity Server, Access Mechanism, ASP.NET Identity.</li>
        <li>Excellent knowledge and experience with test methodology, SQA process.</li>
        <li>Experience using Git, GitLab and GitHub/Others for source control.</li>
        <li>Ability to work on multiple projects by taking full responsibility and leadership roles.</li>
        <li>Quick learner & good problem-solving skills, capable of working under a tight schedule.</li>
    </ul>
    <h3>Job Location</h3>
    <p>Dhaka</p>
    <h3>Salary</h3>
    <p>Negotiable</p>
    <p><strong>Email at:</strong> <a href="mailto:career@thekowcompany.com">career@thekowcompany.com</a></p>
    <p><strong>Email Before:</strong> 31st July 2024</p>
</div>`,
      date: "31 July, 2024",
    },
    {
      id: 5,
      title: "Junior Executive, Client & Project Management",
      description: `  <div class="job-des">
 <h1>Junior Executive, Client & Project Management</h1>
 <p><strong>Employment Type: </strong> Full Time</p>
 <p><strong>Open Position: </strong> 02 </p>
 <p><strong>Deadline: </strong> Priority will be given to applications submitted before <span class="deadline">December 20, 2024</span>, with the final deadline being <span class="deadline">December 31, 2024</span> by 11:59 PM (GMT+6) </p>
    <p>We are seeking a dynamic and detail-oriented “Junior Executive, Client & Project Management” to manage various image and video post-production projects for our organization.</p>
    <h3>Role Requirements:</h3>
    <ul>
        <li>Oversee & manage end-to-end project lifecycle for all post-production projects.</li>
        <li>Coordinate with clients to define project scope, goals, deliverables, required resources, budget & timing.</li>
        <li>Develop detailed project plans.</li>
        <li>Communicate and collaborate with production & editing teams to align objectives.</li>
        <li>Manage client relationships, ensure client satisfaction & manage client expectations in terms of project deliverables.</li>
        
    </ul>
    <h3>Competencies: </h3>
    <ul>
        <li>Bachelor's degree in Business, Management, or any related field. Proven working experience in project management or related field is a bonus.</li>
        <li>Freshers are also encouraged to apply.</li>
        <li>Experience in image & video post-production processes (editing, color grading, masking etc.) is a plus.</li>
        <li>Excellent client-oriented & internal communication skills.</li>
        <li>Proficiency with project management software tools, MS Office Suites, methodologies & best practices.</li>
        
    </ul>
   <p class ="shift-p"><b>Shift:</b> Morning and Night Shifts (on a monthly rotating roster basis)<p>
    <h3>Fringe benefits: </h3>
    <ol>
        <li>🎁 Festival Bonuses: Enjoy 2 Festival Bonuses as per company policy.</li>
        <li>🍽️ Meal Facility: Fully subsidized meal facility to keep you fueled throughout the day.</li>
        <li>📈Profit Sharing: Annually or quarterly as per company policy.</li>
        <li>🌿 Healthy Work Environment: Work in a supportive and positive atmosphere.</li>
        <li>🎄 Christmas Leave: Celebrate the holidays with a special leave.</li>
        <li>🚀 Career Advancement: Opportunities for growth and professional development.</li>
        <li>🏝️ Yearly Office Retreat: Relax and recharge with your colleagues.</li>
        <li>🎉 Events Celebration: Enjoy various events celebrated at our office premises.</li>
        <li>🏏 Annual Tournaments: Participate in our Annual Cricket and Football Tournament.</li>
        <li>🎲 Indoor Games: Have fun with Carrom and Table Tennis during breaks.</li>
        
       
    </ol>
     <p><strong>Salary:</strong> Negotiable based on experience and qualifications.</p>
      <p><strong>How to Apply:</strong> Please submit your updated CV and cover letter to <span class="email-address">career@thekowcompany.com</span> by the deadline. Mention in the Subject Line: Applying as a <b>“Junior Executive, Client & Project Management”</b>.</p>
      <p></p>
   
   
    <p class="normal-p">Don't miss out on this fantastic opportunity to advance your career and become a part of the TKCL family! Apply now and take the next step in your professional journey.</p>
    
</div>`,
      date: "31 December, 2024",
    },
    {
      id: 6,
      title: "SEO Expert",
      description: `  <div class="job-des">
 <h1>SEO Expert</h1>
 <p><strong>Employment Type: </strong> Full Time</p>
 <p><strong>Open Position: </strong> 01 </p>
 <p><strong>Experience Level: </strong> Active Practitioner, 1-2 Years experience Preferred   </p>
 <p><strong>Deadline: </strong> Priority will be given to applications submitted before <span class="deadline">January 10, 2025</span>, with the final deadline being <span class="deadline">January 20, 2025</span> by 11:59 PM (GMT+6) </p>

 <h3>About The KOW Company:</h3>
 <p>The KOW Company is a forward-thinking organization dedicated to enhancing our digital presence and driving organic growth. We are looking for an enthusiastic SEO expert to join our team and contribute to optimizing our online footprint. </p>
    
 <h3>Key Responsibilities: </h3>
 <ul>
 <li>
      <h4>Technical SEO Management: </h3>
    <ul>
        <li>Ensure website crawlability and indexation.</li>
        <li>Manage sitemaps, robots.txt files, and address technical SEO issues like site speed optimization.</li>      
    </ul>
  </li>
 <li>
      <h4>SEO Tools Expertise: </h3>
    <ul>
        <li>Utilize tools such as Google Analytics, Google Search Console, SEMrush, Ahrefs, Moz, Screaming Frog, Rank Math, or Yoast to monitor and improve SEO performance.</li>
        <li>Skills and expertise in different engines are added advantage.</li>      
    </ul>
  </li>
 <li>
      <h4>Website Optimization: </h3>
    <ul>
        <li>Conduct keyword research, on-page optimization, and competitor analysis to improve organic rankings.</li>
        <li>Collaborate with the development team to address technical SEO needs, ensuring proper HTML, CSS, and JavaScript implementation.</li>      
    </ul>
  </li>
 <li>
      <h4>CMS and Platform Management: </h3>
    <ul>
        <li>Work with platforms like WordPress, Shopify, or other similar CMS platforms to optimize content and improve site performance. </li>
            
    </ul>
  </li>
 <li>
      <h4>Analytics and Reporting: </h3>
    <ul>
        <li>Track and analyze website performance using website analytics tools.</li>
        <li>Create regular reports and actionable insights to guide content and technical strategies. </li>      
    </ul>
  </li>
 <li>
      <h4>Cross-Functional Collaboration: </h3>
    <ul>
        <li>Collaborate with the marketing team to align SEO strategies with CRM tools like HubSpot or Salesforce. </li>
        <li>Assist in integrating SEO efforts with email marketing, social media campaigns, and content marketing strategies. </li>      
    </ul>
  </li>
 <li>
      <h4>Communication and Tools: </h3>
    <ul>
        <li>Use platforms such as LinkedIn, Slack, Skype, Google Meet, Zoom, and Microsoft Teams for communication and collaboration. </li>
           
    </ul>
  </li>
 <li>
      <h4>Proficiency in Productivity Tools: </h3>
    <ul>
        <li>Effectively use Microsoft Office tools (Word, Excel, PowerPoint) and Google Workspace tools (Docs, Sheets) for planning and reporting. </li>
       
    </ul>
  </li>
    </ul>
    <h3>Qualifications and Skills: </h3>
    <ul>

        <li>
        <h4>Technical Knowledge: </h3>
        <ul>
          <li>Strong understanding of crawlability, indexation, and site architecture. </li>
          <li>Knowledge of technical aspects like sitemaps, robots.txt, and resolving site speed issues. </li>

        </ul>

        </li>
        <li>
        <h4>SEO Tools Proficiency: </h3>
        <ul>
          <li>Experience with industry-standard tools like SEMrush, Ahrefs, Moz, and others. </li>
       

        </ul>

        </li>
        <li>
        <h4>Web Development Skills: </h3>
        <ul>
          <li>Basic knowledge of HTML, CSS, JavaScript, and their impact on SEO. </li>
          
        </ul>

        </li>
        <li>
        <h4>CMS Experience: </h3>
        <ul>
          <li>Hands-on experience with WordPress, Shopify, or similar platforms. </li>
         

        </ul>

        </li>
        <li>
        <h4>Analytical Skills: </h3>
        <ul>
          <li>Ability to analyze data from tools like Google Analytics and Google Search Console to derive insights. </li>
         
        </ul>

        </li>
        <li>
        <h4>Soft Skills: </h3>
        <ul>
          <li>Strong communication skills, a collaborative mindset, and attention to detail, Team work.</li>
        

        </ul>

        </li>
        
    </ul>
  
    <h3>Fringe benefits: </h3>
    <ol>
        <li>🎁 Festival Bonuses: Enjoy 2 Festival Bonuses as per company policy.</li>
        <li>🍽️ Meal Facility: Fully subsidized meal facility to keep you fueled throughout the day.</li>
        <li>📈 Profit Sharing: Annually or quarterly as per company policy.</li>
        <li>🌿 Healthy Work Environment: Work in a supportive and positive atmosphere.</li>
        <li>🎄 Christmas Leave: Celebrate the holidays with a special leave.</li>
        <li>🚀 Career Advancement: Opportunities for growth and professional development.</li>
        <li>🏝️ Yearly Office Retreat: Relax and recharge with your colleagues.</li>
        <li>🎉 Events Celebration: Enjoy various events celebrated at our office premises.</li>
        <li>🏏 Annual Tournaments: Participate in our Annual Cricket and Football Tournament.</li>
        <li>🎲 Indoor Games: Have fun with Carrom and Table Tennis during breaks.</li>
        
    </ol>

    <h3>Why Join The KOW Company? </h3>
    <ul>
        <li>Be part of a growing team focused on innovation and results. </li>
        <li>Opportunity to learn and grow in a collaborative environment. </li>
        <li>Exposure to a variety of tools, platforms, and hands-on projects.</li>
        
        
       
    </ul>
     <p><strong>Salary Range:</strong> BDT 25,000 - BDT 35,000 per month</p>
      <p><strong>How to Apply:</strong> If you are passionate about SEO and ready to make an impact, send your resume to <span class="email-address">career@thekowcompany.com</span> by the deadline. Mention in the Subject Line: Applying as a <b>“SEO Expert Application – [Your Name]”</b>.</p>
      <p></p>
   
   
    <p class="normal-p">Don't miss out on this fantastic opportunity to advance your career and become a part of the TKCL family! Apply now and take the next step in your professional journey.</p>
    
</div>`,
      date: "20 January, 2025",
    },

    {
      id: 7,
      title: "Senior Software Engineer - .NET Core",
      description: `  <div class="job-des">
 <h1>Senior Software Engineer - .NET Core</h1>
 <p><strong>Employment Type: </strong> Full Time</p>
 <p><strong>Number of Open Positions: </strong> 01 </p>
 <p><strong>Deadline: </strong> <span class="deadline">12th March, 2025</span> </p>

    <h3>About Us:</h3>
  <p>At The KOW Company Ltd., we are committed to delivering scalable, secure, and high-performance software solutions that empower businesses. As a leading innovator in the tech industry, we are seeking Senior Software Engineer with deep expertise in.NET Core and the development of complex applications. This role focuses on technical excellence, providing you with the opportunity to work on cutting-edge solutions like 3D reconstruction, 2D image background removal, and complex ERP systems for file transfer. Additionally, you will help build an app designed to serve users, contributing directly to the company’s growth and innovation.</p>
  
    <h3>Position Overview: </h3>
     <p>The Senior Software Engineer will be responsible for developing using ASP.NET Core, C#, and SQL. This is a hands-on, technical role where you will work directly with cross-functional teams to develop world-class software products. You will play a key role in building distributed systems and databases (SQL and NoSQL) and ensuring high-performance solutions for apps that would be used by millions. Additionally, you'll work on both monolithic and microservices-based architectures, depending on project needs, and ensure efficient integration of components through reporting modules and message brokers where necessary. </p>
 
   <h3>Key Responsibilities:</h3>
  <ul>
        <li>Analysis business requirement and Development of scalable applications using ASP.NET Core, C#, and Blazor Server, employing both microservices and monolithic architectures where appropriate.</li>
        <li>Develop and integrate RESTful APIs to ensure seamless interaction with other systems.</li>
        <li>Design and optimize distributed databases (SQL or NoSQL) for performance, reliability, and scalability, ensuring they can handle high user volume.</li>
        <li>Develop reporting modules and implement message brokers (such as RabbitMQ, Kafka) where necessary for efficient data processing and communication between systems.</li>
        <li>Ensure best practices in security, data protection, and application performance.</li>
        <li>Establish and maintain CI/CD pipelines using tools like Azure DevOps or Jenkins for automated testing and smooth deployments.</li>
        <li>Collaborate with product owners and other teams using JIRA to plan, prioritize, and deliver key projects.</li>
        <li>Use Docker and Kubernetes to containerize and orchestrate services, ensuring efficient deployment and management.</li>
        <li>Troubleshoot and resolve complex technical issues, providing leadership in problem-solving efforts.</li> 
    </ul>
   <h3>Required Skills and Qualifications:</h3>
  <ul>
        <li> 4+ years of professional experience in software development, with expertise in ASP.NET Core, C#, .NET Framework, MVC, and Blazor Server.</li>
        <li> Proven experience designing and implementing scalable architectures, including microservices, monolithic, and cloud solutions.</li>
        <li> Strong understanding of RESTful API development and integration.</li>
        <li> Experience with Azure or other cloud platforms, including cloud-native applications.</li>
        <li> Proficient in database technologies, particularly SQL Server, NoSQL solutions, and Entity Framework, with a focus on performance optimization and scalability for high-traffic applications.</li>
        <li> Strong understanding of security best practices in software development.</li>
        <li> Experience with reporting modules and message brokers for efficient communication in distributed systems.</li>
        <li> Excellent problem-solving skills with the ability to troubleshoot complex technical issues.</li>
        <li> Persuasive communication and collaboration skills, with the ability to work effectively in cross-functional teams.</li>

    </ul>
    <h3>Optional Certifications (Added advantage if any):</h3>
  <ul>
      <li> Microsoft Certified: Azure Developer Associate</li>
      <li> Microsoft Certified: .NET Developer</li>
      <li> AWS Certified Developer – Associate</li>
      <li> SQL & NoSQL Database Certifications</li>
      <li> DevOps with Azure or Jenkins Certification</li>


    </ul>
   
    <h3>Fringe benefits: </h3>
    <ol>
      <li>🎁 Festival Bonuses: Enjoy 2 Festival Bonuses as per company policy.</li>
      <li>🍽️ Meal Facility: Fully subsidized meal facility to keep you fueled throughout the day.</li>
      <li>📈 Profit Sharing: Annually or quarterly as per company policy.</li>
      <li>🌿 Healthy Work Environment: Work in a supportive and positive atmosphere.</li>
      <li>🎄 Christmas Leave: Celebrate the holidays with a special leave.</li>
      <li>🚀 Career Advancement: Opportunities for growth and professional development.</li>
      <li>🏝️ Yearly Office Retreat: Relax and recharge with your colleagues.</li>
      <li>🎉 Events Celebration: Enjoy various events celebrated at our office premises.</li>
      <li>🏏 Annual Tournaments: Participate in our Annual Cricket and Football Tournament.</li>
      <li>🎲 Indoor Games: Have fun with Carrom and Table Tennis during breaks.</li>
        
       
    </ol>

    <p><strong>Salary:</strong> Negotiable based on experience and qualifications.</p>
    <p><strong>How to Apply:</strong> Please submit your updated CV and cover letter to <span class="email-address">career@thekowcompany.com</span> by the deadline. Mention the position title in the subject line of your email.</p>
    <p><strong>Location: </strong>Plot:06, 2nd Floor, Navana, D. H. Tower, Panthapath, Dhaka 1215</p>
</div>`,
      date: "12 March, 2025",
    },

    {
      id: 8,
      title: "Senior Front-End Developer",
      description: `  <div class="job-des">
 <h1>Senior Front-End Developer</h1>
 <p><strong>Employment Type: </strong> Full Time</p>
 <p><strong>Open Position: </strong> 01 </p>
 <p><strong>Experience Required: </strong> Minimum 2 years</p>
 <p><strong>Deadline: </strong><span class="deadline"> February 13, 2025 </span>(Priority will be given to candidates applying before <span class="deadline">25 January ,2025</span>)</p>
 </br>
 <h3>About The KOW Company:</h3>
<p>The KOW Company emphasizes quality and innovation, offering services that include image editing, video editing, and computer-generated imagery (CGI). Their commitment to solving client problems and delivering high-quality solutions has positioned them as a rapidly growing entity in Bangladesh's post-production sector.</p>    
 
 </br>
 <p><b>Educational Requirements:</b> We value skill and expertise above everything, so individuals from any educational background are welcome to apply.</p>
</br>
  <h3>Key Responsibilities:</h3>
  <ul>
        <li>Develop responsive, pixel-perfect web applications using React.js and Tailwind CSS.</li>
        <li>Leverage Figma Dev Mode to accurately translate designs into clean HTML/CSS code.</li>
        <li>Build modular and reusable components with a focus on performance and scalability.</li>
        <li>Integrate APIs and ensure seamless communication between frontend and backend systems.</li>
        <li>Create and optimize UI animations using CSS, JavaScript, or libraries such as Framer Motion.</li>
    </ul>
   <h3>Required Skills:</h3>
  <ul>
        <li>HTML/CSS: Proficiency in creating pixel-perfect, responsive, and cross-browser-compatible UIs.</li>
		<li>JavaScript/TypeScript: Strong understanding of modern ES6+ features and TypeScript.</li>
		<li>React.js: Advanced experience, including custom hooks, state management (e.g., Redux), and component lifecycle</li>
		<li>Tailwind CSS: Deep expertise in building modern, responsive interfaces.</li>
		<li>React Three.js: Hands-on experience with 3D visualization and interactive 3D object creation.</li>
		<li>Next.js: Familiarity with server-side rendering (SSR), static site generation (SSG), and deployment workflows.</li>
		<li>Firebase: Experience integrating Firebase services for authentication, database, and hosting.</li>
		<li>Authentication: Proficient in implementing JWT, OAuth, and secure REST API interactions.</li>
		<li>Version Control: Solid experience with Git for collaboration and versioning.</li>
    </ul>
    <h3>Bonus Skills:</h3>
  <ul>
      <li>Testing: Knowledge of TDD and frameworks like Jest, React Testing Library, or Cypress.</li>
      <li>Additional Frameworks: Familiarity with Vue.js or Node.js.</li>
	  <li>DevOps: Understanding of containerization (Docker) and orchestration (Kubernetes).</li>
	  <li>Agile Practices: Experience with Scrum or Kanban using tools like Jira.</li>
    </ul>
   
    <h3>Fringe benefits: </h3>
    <ol>
      <li>🎁 Festival Bonuses: Enjoy 2 Festival Bonuses as per company policy.</li>
      <li>🍽️ Meal Facility: Fully subsidized meal facility to keep you fueled throughout the day.</li>
      <li>📈 Profit Sharing: Annually or quarterly as per company policy.</li>
      <li>🌿 Healthy Work Environment: Work in a supportive and positive atmosphere.</li>
      <li>🎄 Christmas Leave: Celebrate the holidays with a special leave.</li>
      <li>🚀 Career Advancement: Opportunities for growth and professional development.</li>
      <li>🏝️ Yearly Office Retreat: Relax and recharge with your colleagues.</li>
      <li>🎉 Events Celebration: Enjoy various events celebrated at our office premises.</li>
      <li>🏏 Annual Tournaments: Participate in our Annual Cricket and Football Tournament.</li>
      <li>🎲 Indoor Games: Have fun with Carrom and Table Tennis during breaks.</li>
        
       
    </ol>
</br>
	<h3>Why Join The KOW Company?</h3>
	<p>Be part of a growing team focused on innovation and results.</p>
	<p>Opportunity to learn and grow in a collaborative environment.</p>
	<p>Exposure to a variety of tools, platforms, and hands-on projects.</p>
	
	</br>
	
	<p><strong>How to Apply:</strong> Send your resume to <span class="email-address">career@thekowcompany.com</span> by the deadline. Mention in the Subject Line: Applying as a <strong>“Senior Front-End Developer – [Your Name]”</strong></p>
	
	</br>
	<p><i>Don't miss out on this fantastic opportunity to advance your career and become a part of the TKCL family! Apply now and take the next step in your professional journey.</i></p>

`,
      date: "13 February, 2025",
    },
    {
      id: 9,
      title: "HR & Admin Intern",
      description: `  <div class="job-des">
 <h1>HR & Admin Intern</h1>
 <p><strong>Department: </strong> Human Resources & Administration</p>
 <p><strong>Job Type: </strong> Internship (3–6 months)</p>
 <p><strong>Reports To: </strong> HR & Admin Manager </p>
 <br>
 <h3>Job Summary:</h3>
<p>The KOW Company Ltd. is looking for a proactive and detail-oriented <strong>HR & Admin Intern</strong> to support our Human Resources and Administration team. This internship is an excellent opportunity to gain hands-on experience in HR operations, employee engagement, and office administration within a dynamic and creative work environment.</p>    
 
<br>
  <h3>Key Responsibilities:</h3>
  <h4>Human Resources:</h4>
  <ul>
        <li>Assist in the recruitment process, including job postings, CV screening, and interview scheduling.</li>
        <li>Maintain and update employee records and HR databases.</li>
        <li>Support onboarding and orientation for new hires.</li>
        <li>Assist in organizing employee engagement activities and training sessions.</li>
        <li>Help with performance appraisal documentation and feedback collection.</li>
        <li>Research and suggest improvements in HR policies and processes.</li>
    </ul>
   <h4>Administration:</h4>
  <ul>
    <li>Provide general administrative support, including documentation, filing, and data entry.</li>
		<li>Assist in maintaining office supplies and equipment.</li>
		<li>Coordinate with vendors and service providers as needed.</li>
		<li>Support in organizing meetings, events, and office maintenance tasks.</li>
	
    </ul>
    <h4>Requirements:</h4>
  <ul>
    <li>Bachelor’s/Master’s degree (or final-year student) in HR, Business Administration, or a related field.</li>
    <li>Strong organizational and multitasking skills.</li>
	  <li>Excellent communication skills in both Bengali and English.</li>
	  <li>Proficiency in MS Office (Word, Excel, PowerPoint).</li>
	  <li>Ability to work in a fast-paced environment and maintain confidentiality.</li>
	  <li>A positive attitude and eagerness to learn.</li>
    </ul>
   
    <h4>What We Offer:</h4>
    <ul>
      <li>A hands-on learning experience in HR & Administration.</li>
      <li>A collaborative and supportive work environment.</li>
      <li>Networking opportunities with industry professionals.</li>
      <li>A certificate of completion and potential for a full-time opportunity.</li>  
    </ul>
</br>
	<h4>How to Apply:</h4>
	<p>Interested candidates can send their CVs to <strong>“career@thekowcompany.com”</strong> with the subject line <strong>“Application for HR & Admin Intern”</strong> by <strong>25 March, 2025</strong>.</p>
	
`,
      date: "25 March, 2025",
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [cvData, setCvData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [getJobAvaialbeCount, setJobAvaialbleCount] = useState(0);

  const openModal = (data) => {
    setCvData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const submitCvFunc = () => {
    setIsOpen(true);
    setIsModalOpen(false);
  };

  const onClose = () => {
    console.log("closed");
    setIsOpen(false);
  };

  const compareCurrentDate = (d) => {
    const currentDate = new Date();
    const selectedDate = new Date(d);
    // console.log("currentDate",  currentDate.getTime() < selectedDate.getTime());
    return currentDate.getTime() < selectedDate.getTime();
  };

  const checkJobAvaialble = (jobList) => {
    let count = 0;
    jobList.map((job) => {
      if (compareCurrentDate(job.date)) {
        count++;
      }
    });
    setJobAvaialbleCount(count);
  };

  useEffect(() => {
    checkJobAvaialble(jobCircular);
  }, []);
  return (
    <>
    <NavbarHome carearmenu={true}/>
      

      {/* <div className="career-bg h-[100vh]"> */}
      <div className="bg-gradient-to-t from-[#ebebeb] to-[#cdcbcc] ">
        <div className="container mx-auto relative  pb-20">
          {/* <div dangerouslySetInnerHTML={{ __html: jobCircular[0].description }} /> */}

          <div className="flex flex-col items-center mt-10 ">
            <div className="w-full md:w-[450px] mt-[140px] md:mt-[120px]  text-center md:text-left">
              <h1 className="text-[18px] md:text-[24px] 2xl:text-[40px] font-bold text-[#57524B]">
                WE ARE
              </h1>
              <h1 className="text-[60px]  md:text-[120px] 2xl:text-[150px] font-bold leading-[80px] md:leading-[100px] text-[#57524B] -ml-2">
                HIRING
              </h1>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full  md:w-[450px] ">
              <h1 className=" text-center md:text-left text-[12px] 2xl:text-[14px] 2xl:mt-5 text-green-700 font-semibold">
                Note : Please select a position and submit your curriculum vitae
                at your earliest convenience.
              </h1>
            </div>
          </div>

          <div className="flex flex-col items-center 2xl:pl-44">
          <div className="md:w-[450px] 2xl:w-[650px] mt-5 border-black border-l-2 pl-3">
  {jobCircular.map((item, index) =>
    compareCurrentDate(item.date) && (
      <div className="flex items-center gap-2" key={item.id || index}>
        <button
          onClick={() => openModal(item)}
          className="bg-gray-300 font-semibold border-green-700 px-2 hover:bg-green-600 hover:text-white py-1 mb-2 text-left text-[12px] 2xl:text-[16px] shadow-md rounded-md w-[241px] 2xl:w-[450px]"
        >
          <span>{item.title}</span>
        </button>
        <div>
          <h1 className="text-xs 2xl:text-[14px]">
            Deadline: <span className="text-red-700">{item.date}</span>
          </h1>
        </div>
      </div>
    )
  )}
</div>

          </div>

          {getJobAvaialbeCount == 0 && (
            <div className="flex flex-col items-center">
              <div className=" md:w-[450px]">
                <h1 className="w-[400px] text-2xl text-red-700 font-semibold">
                  We are not accepting new applications for now. Please check
                  back later.
                </h1>
              </div>
            </div>
          )}
          <div className="flex justify-center mt-2">
            <div className="md:w-[450px]">
              <div className="flex flex-col justify-center items-center md:items-start ">
                <div className="flex flex-col justify-center items-center md:items-start pt-3 pb-3 md:pt-0 2xl:pt-2 ">
                  <div className="flex justify-center items-center gap-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="text-green-800 text-xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
                    </svg>
                    <h1 className="text-sm  font-bold">
                      career@thekowcompany.com
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*                     
                    <div className="absolute bottom-5 right-5">
                        <div className="flex justify-center items-center gap-1">
                            <MdOutlineEmail className="text-green-800 text-xl" />
                            <h1 className="text-[14px] font-semibold">
                                career@thekowcompany.com
                            </h1>
                        </div>
                    </div> */}

          <div className="career-top-bg absolute top-0 left-[50%] 2xl:left-[39%] -translate-x-[50%] xl:left-[38%] lg:left-[35%] md:left-[30%] 2xl:-translate-x-[37%] w-20 h-32">
            <div>
              <img
                src="/img/Light1.png"
                className=" max-w-[300px] h-[300px] pt-[81px] ml-[-63px]"
              />
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="flex justify-center  md:justify-end w-full md:w-[900px] 2xl:w-[1100px] ">
              <img
                src="/img/chair-shadow.png"
                className=" max-w-[230px]   md:max-w-[300px] md:max-h-[270px] md:-mt-[90px] 2xl:-mt-[50px]   "
              />
            </div>
          </div>
        </div>

        {/* ------------------------------------main modal ----------------------------------- */}

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div
              className="absolute bg-gray-800 bg-opacity-50 inset-0"
              onClick={closeModal}
            ></div>
            <div className="bg-white rounded-lg mx-2 md:mx-0  h-[500px] overflow-y-auto shadow-xl transform transition-all w-full md:w-[800px] p-6">
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="mt-4">
                {/* <h2 className="text-lg leading-6 font-medium text-gray-900">
                  {cvData.title}
                </h2> */}

                <div
                  dangerouslySetInnerHTML={{
                    __html: cvData.description,
                  }}
                />

                <div className="flex justify-center">
                  <button
                    onClick={() => submitCvFunc()}
                    className="bg-teal-600 px-5 py-2 font-semibold text-white rounded-md"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <CareerMail cvData={cvData} isOpen={isOpen} onClose={onClose} />
      <Footer/>
    </>
  );
};

export default Career;
