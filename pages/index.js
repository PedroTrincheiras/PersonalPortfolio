import React from "react";
import Header from "../components/header/header";
import ReactFullpage from "@fullpage/react-fullpage";
import FirstSection from "../components/pageSections/firstSection";
import CertificationSection from "../components/pageSections/certification/certificationSection"
import SkillsSection from "../components/pageSections/skills/skillsSection"
import ProjectSection from "../components/pageSections/project/projectSection";
import ContactSection from "../components/pageSections/contact/contactSection"
import ParticleBG from "../components/particlesBG";
import Head from "next/head";
import { getProjects } from "../fetch/getProjects";
import { getCertificates } from "../fetch/getCertificates";
import AchivementsSection from "../components/pageSections/achivements/achivementsSection";

export async function getServerSideProps() {
  const projects = await getProjects();
  const certificates = await getCertificates();
  var projectsData = [];
  var certificatesData = [];

  projects.forEach((doc) => {
    projectsData.push(doc.data());
  });

  certificates.forEach((doc) => {
    certificatesData.push(doc.data());
  });

  return { revalidate: 3600, props: { data: {ProjectsData: { projectsData } , CertificatesData: {certificatesData} }} };
}

function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Pedro Trincheiras</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ParticleBG />
      <div>
        <ReactFullpage
          licenseKey={"YOUR_KEY_HERE"}
          anchors={["","projects" , "certifications" , "skills", "contacts"]}
          scrollingSpeed={1000}
          navigation
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <FirstSection />
                <ProjectSection projects={data.ProjectsData} />
                <CertificationSection projects={data.CertificatesData} />
                <SkillsSection projects={data.CertificatesData} />
                <ContactSection projects={data.CertificatesData}/>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    </div>
  );
}

export default Home;
