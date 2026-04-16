import { MosaicCell } from '../../components/WorkPageTemplate'
import { MosaicGrid, WorkPageDescription, WorkPageDescriptionTitle, WorkPageDescriptionContainer } from '../../components/WorkPageTemplate.styles'

function MosaicImg({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} loading="lazy" decoding="async" />
}

export function KiewitProjectBody() {
  return (
    <>
      <MosaicGrid aria-label="Kiewit work samples">
        <MosaicCell colSpan={12} rowSpan={3}>
          <MosaicImg src="/Kiewit1.jpg" alt="Kiewit" />
        </MosaicCell>
      </MosaicGrid>
      <WorkPageDescriptionContainer>
      <WorkPageDescriptionTitle>Project Overview</WorkPageDescriptionTitle>
      <WorkPageDescription>
        <p>
        CORGI is a cloud cost and utilization monitoring application built for Kiewit, designed to give product teams direct visibility into underutilized or orphaned resources. The goal was to reduce waste, optimize cloud spending, and empower teams to act independently without relying solely on DevOps. I collaborated with a multidisciplinary team to design, develop, and deploy the system, ensuring it combined usability, functionality, and predictive insights.
        </p>
      </WorkPageDescription>
      </WorkPageDescriptionContainer>
      <MosaicGrid aria-label="More Kiewit imagery">
        <MosaicCell colSpan={5} rowSpan={3}>
          <MosaicImg src="/Kiewit2.jpg" alt="Kiewit" />
        </MosaicCell>
        <MosaicCell colSpan={7} rowSpan={3}>
          <MosaicImg src="/Kiewit3.webp" alt="Kiewit" />
        </MosaicCell>
      </MosaicGrid>

      <MosaicGrid aria-label="More Kiewit imagery">
        <MosaicCell colSpan={6} rowSpan={2}>
          <MosaicImg src="/Kiewit4.webp" alt="Kiewit" />
        </MosaicCell>
        <MosaicCell colSpan={6} rowSpan={2}>
          <MosaicImg src="/Kiewit5.webp" alt="Kiewit" />
        </MosaicCell>
      </MosaicGrid>
      <WorkPageDescriptionContainer>
      <WorkPageDescriptionTitle>Project Outcomes</WorkPageDescriptionTitle>
      <WorkPageDescription>
      The CORGI project delivered a fully functional platform that:
      <ul>
        <li>Provides real-time insights into cloud resource utilization and cost inefficiencies.</li>
        <li>Allows teams to take direct actions on recommendations (decommission, right-size, whitelist).</li>
        <li>Includes dashboards and anomaly heatmaps for visualizing resource waste and cost trends.</li>
        <li>Integrates predictive machine learning to forecast future resource costs.</li>
        <li>Strengthened stakeholder engagement through clear presentations and iterative feedback, creating a product that is both practical and impactful.</li>
      </ul>
      </WorkPageDescription>
      </WorkPageDescriptionContainer>
      <MosaicGrid aria-label="More Kiewit imagery">
      <MosaicCell colSpan={12} rowSpan={2}>
          <MosaicImg src="/Kiewit6.webp" alt="Kiewit" />
        </MosaicCell>
      </MosaicGrid>
    </>
  )
}

export function AvitureProjectBody() {
  return (
    <>
      <MosaicGrid aria-label="Aviture work samples">
        <MosaicCell colSpan={7} rowSpan={3}>
          <MosaicImg src="/AV1.jpg" alt="Air Force" />
        </MosaicCell>
        <MosaicCell colSpan={5} rowSpan={3}>
          <MosaicImg src="/AV2.avif" alt="Air Force" />
        </MosaicCell>
        <MosaicCell colSpan={12} rowSpan={2}>
          <MosaicImg src="/AV4.png" alt="Air Force" />
        </MosaicCell>
      </MosaicGrid>
      <WorkPageDescriptionContainer>
      <WorkPageDescriptionTitle>Role Overview</WorkPageDescriptionTitle>
      <WorkPageDescription>
        <p>
        Over the past 10 months, I’ve been working with Aviture, a custom software development company, on the Aim High team, developing recruiting software for the U.S. Air Force. 
        My role bridges front-end development, UX refinement, and data integration, with a focus on building functional and user-friendly components while tracking and analyzing user interactions. 
        I also actively participated in professional development events, including presenting a Lightning Talk to the company and attending Nebraska Code, a regional development conference.
        </p>
      </WorkPageDescription>
      </WorkPageDescriptionContainer>
      <MosaicGrid aria-label="More Aviture imagery">
        <MosaicCell colSpan={6} rowSpan={3}>
          <MosaicImg src="/AV3.jpeg" alt="Air Force" />
        </MosaicCell>
        <MosaicCell colSpan={6} rowSpan={3}>
          <MosaicImg src="/AV5.avif" alt="Air Force" />
        </MosaicCell>
      </MosaicGrid>
      <WorkPageDescriptionContainer>
      <WorkPageDescriptionTitle>
        Technical Contributions
      </WorkPageDescriptionTitle>
      <WorkPageDescription>
        <ul>
          <li><b>Front-End Development:</b> Built custom web components using React and CSS, integrating with serverless AWS architecture and reading/writing data to DynamoDB.</li>
          <li><b>Analytics & Tracking:</b> Implemented page and button tracking with Google Analytics to capture user interactions and inform product decisions.</li>
          <li><b>Team Collaboration & Agile Practices:</b> Engaged in backlog refinement, sprint planning, demos, stand-ups, UX refinement, requirements meetings, and sprint retrospectives to ensure high-quality deliverables.</li>
          <li><b>Professional Engagement:</b> Attended Nebraska Code, a regional development conference, and delivered a Lightning Talk to share knowledge with the team.</li>
        </ul>
        </WorkPageDescription>
        <WorkPageDescriptionTitle>Outcomes</WorkPageDescriptionTitle>
        <WorkPageDescription>
          <ul>
            <li>Delivered functional and reusable React components, improving the speed and efficiency of the Aim High recruiting platform.</li>
            <li>Enabled data-driven insights through analytics tracking, supporting UX and product decisions.</li>
            <li>Strengthened collaboration and communication within the team through active participation in agile ceremonies.</li>
            <li>Expanded professional skills in software development, cloud-based architecture, and public presentation, positioning me to contribute effectively to both technical and cross-functional projects.</li>
          </ul>
        </WorkPageDescription>
      </WorkPageDescriptionContainer>
    </>
  )
}

export function UNLProjectBody() {
  return (
    <>
      <MosaicGrid aria-label="UNL work samples">
        <MosaicCell colSpan={12} rowSpan={2}>
          <MosaicImg src="/UNL6.jpeg" alt="University of Nebraska–Lincoln" />
        </MosaicCell>
        <MosaicCell colSpan={4} rowSpan={3}>
          <MosaicImg src="/UNL2.jpeg" alt="University of Nebraska–Lincoln" />
        </MosaicCell>
        <MosaicCell colSpan={8} rowSpan={3}>
          <MosaicImg src="/UNL1.png" alt="University of Nebraska–Lincoln" />
        </MosaicCell>
      </MosaicGrid>

      <WorkPageDescriptionContainer>
      <WorkPageDescriptionTitle>Role Overview</WorkPageDescriptionTitle>
      <WorkPageDescription>
        <p>
        During my 16-month internship with the Digital Experience Group (DXG) at the University of Nebraska-Lincoln, I worked at the intersection of web development, UX design, and digital content management. 
        I contributed to both ongoing web projects and a custom polling app for the university, collaborating closely with the ITS team to create tools that improved user experience and accessibility. 
        My work combined front-end development, design mockups, and hands-on training for staff.
        </p>
      </WorkPageDescription>
      </WorkPageDescriptionContainer>

      <MosaicGrid aria-label="More UNL imagery">
        <MosaicCell colSpan={6} rowSpan={2}>
          <MosaicImg src="/UNL4.png" alt="University of Nebraska–Lincoln" />
        </MosaicCell>
        <MosaicCell colSpan={6} rowSpan={2}>
          <MosaicImg src="/UNL3.jpg" alt="University of Nebraska–Lincoln" />
        </MosaicCell>
      </MosaicGrid>
      <WorkPageDescriptionContainer>
      <WorkPageDescriptionTitle>Technical Contributions</WorkPageDescriptionTitle>
      <WorkPageDescription>
          <ul>
            <li><b>Web Development & Design:</b> Used Drupal 10 CMS to recreate and maintain web pages with a focus on accessibility and usability. Created templates using Twig and implemented custom layouts with HTML, CSS, and JavaScript. Altered graphics using Adobe Photoshop and Illustrator to meet web requirements.</li>
            <li><b>Polling App Project:</b> Designed mockups in Figma and developed the frontend using the UNL DCF Framework and Angular JavaScript. Collaborated with ITS team members in design and development meetings, then handed off frontend and design assets so they could connect the app to the backend.</li>
            <li><b>Team Collaboration:</b> Participated in stand-ups, tracked progress, and provided CMS training to staff, ensuring smooth adoption of web tools and templates.</li>
          </ul>
        </WorkPageDescription>
        <WorkPageDescriptionTitle>Outcomes</WorkPageDescriptionTitle>
        <WorkPageDescription>
          <ul>
            <li>Delivered functional, accessible web pages and templates that enhanced the university’s digital presence.</li>
            <li>Created a fully designed and developed polling app frontend, enabling interactive classroom engagement.</li>
            <li>Strengthened collaboration between DXG and ITS through clear communication, mockups, and handoffs.</li>
            <li>Gained hands-on experience in UX design, front-end development, CMS management, and team coordination, equipping me with a versatile skill set for future technology and design projects.</li>
          </ul>
        </WorkPageDescription>
        </WorkPageDescriptionContainer>
    </>
  )
}
