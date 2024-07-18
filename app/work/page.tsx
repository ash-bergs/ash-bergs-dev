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
          copy="A collection of hobby projects I've worked on. These are
            small learning and experimental projects, but they demonstrate my interests and
            skills."
          image="/images/work-hero-sketch-portfolio.png"
        />
        <ProjectGrid projects={workProjects} />
      </section>
    </main>
  );
}
