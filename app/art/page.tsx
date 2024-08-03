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
          copy="I am an artist who creates both digital and physical works. Using tools like Figma and Adobe Illustrator, I design digital assets for apps and websites. Additionally, I enjoy painting with watercolor and gouache."
          image="/images/art-hero-image.png"
        />
        <ProjectGrid projects={artProjects} />
      </section>
    </main>
  );
}
