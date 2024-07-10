'use client';
import PageHero from '@/components/PageHero';
import PageHeader from '@/components/PageHeader';
import ProjectGrid from '@/components/ProjectGrid';
import { workProjects } from '@/data/projects';

export default function Work() {
  return (
    <main>
      <PageHero />
      <section>
        <PageHeader
          copy="A collection of hobby projects I've worked on. Most of these are
            small learning projects, but they demonstrate my interests and
            skills. I've also worked on teams in telecommunication, agriculture,
            and more."
          image="/images/work-hero-sketch-portfolio.png"
        />
        <ProjectGrid projects={workProjects} />
      </section>
    </main>
  );
}
