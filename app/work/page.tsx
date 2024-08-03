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
          copy="This section features a selection of my hobby projects, which, though small and experimental, showcase my interests and abilities."
          image="/images/work-hero-sketch-portfolio.png"
        />
        <ProjectGrid projects={workProjects} />
      </section>
    </main>
  );
}
