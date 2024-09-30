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
          copy="I embrace digital and traditional art using tools like Figma, Adobe Illustrator, watercolor, and gouache. I specialize in animal and pet portraits, and creating enchanting digital characters."
          image="/images/art-hero-image.png"
        />
        <ProjectGrid projects={artProjects} />
      </section>
    </main>
  );
}
