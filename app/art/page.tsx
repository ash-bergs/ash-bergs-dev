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
          copy="I'm an unconventionally taught, lifelong artist. I've created
            digital assets for apps and websites, and I also sell physical
            painting and illustrations. I mostly create silly pictures of
            animals, food, and insects."
        />
        <ProjectGrid projects={artProjects} />
      </section>
    </main>
  );
}
