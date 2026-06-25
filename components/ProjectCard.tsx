"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, GitBranch } from "lucide-react";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { DocumentWorkflowVisual } from "@/components/DocumentWorkflowVisual";
import { RUNitScreenshots } from "@/components/RUNitScreenshots";
import { Button } from "@/components/ui/Button";

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  tech: readonly string[];
  githubUrl?: string;
  caseStudyUrl: string;
  diagram: "runit" | "bot" | "docs" | "cicd" | "demibot" | "facemask";
  index: number;
  featured?: boolean;
  featuredCompact?: boolean;
  isPublicRepo?: boolean;
  isSanitized?: boolean;
  caseStudyScroll?: boolean;
  eyebrowLabel?: string;
  subtitle?: string;
  githubLabel?: string;
  hideGithub?: boolean;
  repoComingSoon?: boolean;
  repoComingSoonLabel?: string;
  historicalResultLabel?: string;
  historicalResultDisclaimer?: string;
  cardDisclaimer?: string;
  inDevelopment?: boolean;
  secondaryCaseStudyUrl?: string;
  useWorkflowVisual?: boolean;
  previewImage?: {
    src: string;
    alt: string;
  };
}

function ProjectPreviewImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="overflow-hidden rounded-md border border-accent/30 bg-background shadow-[0_0_24px_rgba(200,255,0,0.06)]">
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 90vw, 480px"
          className="object-contain p-3"
        />
      </div>
    </div>
  );
}

export function ProjectCard({
  category,
  title,
  description,
  tech,
  githubUrl = "#",
  caseStudyUrl,
  diagram,
  index,
  featured = false,
  featuredCompact = false,
  isPublicRepo = false,
  isSanitized = false,
  caseStudyScroll = false,
  eyebrowLabel,
  subtitle,
  githubLabel = "GitHub",
  hideGithub = false,
  repoComingSoon = false,
  repoComingSoonLabel = "Repository Coming Soon",
  historicalResultLabel,
  historicalResultDisclaimer,
  cardDisclaimer,
  inDevelopment = false,
  secondaryCaseStudyUrl,
  useWorkflowVisual = false,
  previewImage,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group flex flex-col rounded-lg border bg-surface/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 ${
        featured && !featuredCompact
          ? "border-accent/35 p-7 shadow-[0_0_40px_rgba(200,255,0,0.07)] hover:border-accent/50 hover:shadow-[0_12px_48px_rgba(200,255,0,0.1)] sm:p-8"
          : featuredCompact
            ? "border-accent/25 p-5 shadow-[0_0_24px_rgba(200,255,0,0.05)] hover:border-accent/40 hover:shadow-[0_8px_32px_rgba(200,255,0,0.08)] sm:p-6"
            : "border-border p-6 hover:border-accent/35 hover:shadow-[0_8px_32px_rgba(200,255,0,0.06)]"
      }`}
    >
      <div
        className={
          featured
            ? featuredCompact
              ? "lg:grid lg:grid-cols-[1fr_0.85fr] lg:gap-6"
              : "lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-8"
            : ""
        }
      >
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {featured && (
              <span className="rounded border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent">
                {featuredCompact ? "Featured" : "Featured Project"}
              </span>
            )}
            {isPublicRepo && (
              <span className="flex items-center gap-1.5 rounded border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Public Repository
              </span>
            )}
            {isSanitized && (
              <span className="flex items-center gap-1.5 rounded border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
                Sanitized Case Study
              </span>
            )}
            {inDevelopment && (
              <span className="rounded border border-border/80 bg-background/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                In Development
              </span>
            )}
            {!featured && (
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                {category}
              </p>
            )}
          </div>

          {featured && eyebrowLabel && (
            <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-accent">
              {eyebrowLabel}
            </p>
          )}

          {featured && (
            <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted">
              {category}
            </p>
          )}

          <h3
            className={`font-semibold tracking-tight text-foreground ${
              featured && !featuredCompact
                ? "text-2xl sm:text-[1.65rem]"
                : featuredCompact
                  ? "text-xl sm:text-2xl"
                  : "text-xl"
            }`}
          >
            {title}
          </h3>

          {subtitle && (
            <p className="mt-2 font-mono text-[11px] text-muted/85">
              {subtitle}
            </p>
          )}

          {historicalResultLabel && (
            <div className="mt-3">
              <span className="inline-block rounded border border-accent/35 bg-accent/10 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-accent sm:text-[10px]">
                {historicalResultLabel}
              </span>
              {historicalResultDisclaimer && (
                <p className="mt-2 max-w-xl font-mono text-[10px] leading-relaxed text-muted/75">
                  {historicalResultDisclaimer}
                </p>
              )}
            </div>
          )}

          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
            {description}
          </p>

          {cardDisclaimer && (
            <p className="mt-3 max-w-xl rounded-md border border-border/60 bg-background/40 p-3 font-mono text-[10px] leading-relaxed text-muted/80">
              {cardDisclaimer}
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((tag) => (
              <span
                key={tag}
                className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          {!featured && (
            <div className="mt-6 rounded-md border border-border/60 bg-background p-4">
              <ArchitectureDiagram type={diagram} />
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            {!inDevelopment && (
              <Button
                href={caseStudyUrl}
                variant={
                  hideGithub || repoComingSoon
                    ? "primary"
                    : featured
                      ? "secondary"
                      : "ghost"
                }
                className="!px-3 !py-2 text-xs"
                external={!caseStudyScroll}
              >
                {caseStudyScroll ? (
                  <ArrowRight size={14} />
                ) : (
                  <ExternalLink size={14} />
                )}
                {caseStudyScroll ? "View Case Study" : "Case Study"}
              </Button>
            )}
            {repoComingSoon ? (
              <Button
                variant="secondary"
                className="!px-3 !py-2 text-xs"
                disabled
              >
                <GitBranch size={14} />
                {repoComingSoonLabel}
              </Button>
            ) : (
              !hideGithub && (
                <Button
                  href={githubUrl}
                  variant={inDevelopment ? "ghost" : featured ? "primary" : "secondary"}
                  className="!px-3 !py-2 text-xs"
                  external
                  disabled={inDevelopment}
                >
                  <GitBranch size={14} />
                  {inDevelopment ? "Repository In Development" : githubLabel}
                </Button>
              )
            )}
            {secondaryCaseStudyUrl && (
              <Button
                href={secondaryCaseStudyUrl}
                variant="secondary"
                className="!px-3 !py-2 text-xs"
              >
                <ArrowRight size={14} />
                View Engineering Approach
              </Button>
            )}
          </div>
        </div>

        {featured && (
          <div
            className={`flex flex-col gap-4 ${featuredCompact ? "mt-6 lg:mt-0" : "mt-8 lg:mt-0"}`}
          >
            {useWorkflowVisual ? (
              <DocumentWorkflowVisual variant="card" />
            ) : previewImage ? (
              <ProjectPreviewImage
                src={previewImage.src}
                alt={previewImage.alt}
              />
            ) : (
              <>
                <div className="rounded-md border border-border/60 bg-background p-4 lg:p-5">
                  <ArchitectureDiagram type={diagram} />
                </div>
                <RUNitScreenshots limit={3} variant="card" />
              </>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
