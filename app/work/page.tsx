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
          copy="Each project here highlights a different interest or skill. Explore geological events with Earthquake Tracker, or try out a shopping list app that explores service workers and embraces traditional hmtl and js (with typescript of course)."
          image="/images/work-hero-sketch-portfolio.png"
        />
        <ProjectGrid projects={workProjects} />
      </section>
    </main>
  );
}
