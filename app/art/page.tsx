'use client';
import PageHero from '@/components/PageHero';
import PageHeader from '@/components/PageHeader';
import ProjectGrid from '@/components/ProjectGrid';
import { artProjects } from '@/data/projects';

export default function Art() {
  return (
    <main>
      <PageHero />
      <section>
        <PageHeader
          copy="I'm self-taught taught, lifelong artist. I've created
            digital assets for apps and websites, and I also create physical
            painting and illustrations. My favorite subject matter is
            animals, food, and insects."
          image="/images/art-hero-image.png"
        />
        <ProjectGrid projects={artProjects} />
      </section>
    </main>
  );
}
