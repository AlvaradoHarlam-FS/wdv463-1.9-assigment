import Image from "next/image";
import api from '../../public/week3.jpg'

function Week3() {

  return     <div>
  <h1> What Are Deployment Systems? 
Deployment Platforms are a category of software developed by third-party vendors that mimic the features and functionalities of Online Staffing firms, often offering the software as a white-labeled “app.” They typically include
Worker profiles
 Work history 
Automated (or semi-automated) assignment matching
Self-selection of assignments through a website or app
Candidate availability tracking and mobile check-in
Candidate and client ratings
In essence, they are software vendors that try to bring an “Uber-like” experience to a staffing firm’s clients and candidates.

The majority of Deployment Software focuses on short-term, hourly, or shift-based assignments, common in hospitality staffing, light industrial, retail, healthcare, and education. While the technology was originally built to mimic capabilities of Online Staffing firms that specialized in on-demand labor (e.g., BlueCrew, Wonolo, Jobble, et al.), we categorize these firms as a sub-vertical of Tracking Systems. This category includes Applicant Tracking Systems (ATS), Freelancer Management Systems (FMS), and Vendor Management Systems (VMS).</h1>
  <Image src={api}/>
 
  </div>
}
export default Week3