'use client';

import { motion, Variants } from "framer-motion";
import { usePostHog } from "@posthog/react";
import { Container } from "@/components/Container";
import { Signature } from "@/components/Signature";
import { ThemeToggle } from "@/components/Theme";
import { RiGithubFill, RiLinksFill } from "@remixicon/react";
import { useAnalytics } from "@/lib/hooks/useAnaylytics";
import { AnimatedCounter } from "@/components/AnimatedCounter";


const projects = [
  {
    id: 1,
    time: '2026',
    title: "NextJS SaaS Starter",
    description:
      "A production-ready template for fast building apps.",
    github: "https://github.com/GuptaShubham-11/nextjs-saas-starter",
    live: "https://nextjs-saas-starter-delta.vercel.app",
  },
  {
    id: 2,
    // time: '2026',
    title: "Devkit",
    description:
      "Production Grade Templates",
    github: "https://github.com/GuptaShubham-11/devkit",
    live: "https://developerkit.pro",
  },
  {
    id: 3,
    time: '2025',
    title: 'SmartTodo',
    description:
      'A Kanban-based app using Socket.io for real-time collaboration.',
    github: 'https://github.com/GuptaShubham-11/SmartTodo',
    live: 'https://kanban-smart-todo.vercel.app',
  },
  {
    id: 4,
    title: 'StayFinder',
    description:
      'A stay booking platform built using MERN stack.',
    github: 'https://github.com/GuptaShubham-11/StayFinder',
    live: 'https://stay-finder-xi.vercel.app'
  }
];

export default function Home() {

  const { data, isLoading } = useAnalytics();
  const posthog = usePostHog();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.12,
      },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 18,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Container className="flex flex-col gap-8 pt-12 pb-6 font-sora">
      <header className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold">
            Gupta Shubham
          </h1>

          <span className="text-muted-foreground text-sm">
            Born on <span className="text-foreground font-medium">November 11, 2005</span>
          </span>
        </div>
      </header>

      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6 leading-6 text-muted-foreground max-w-prose"
      >
        <motion.section variants={item}>

          <p className="max-w-prose">
            I’m an {" "}
            <span className="text-foreground underline decoration-wavy decoration-primary">
              ai full stack engineer
            </span>{" "} and founded {" "}
            <a
              href="https://developerkit.pro"
              onClick={() =>
                posthog.capture("founder_product_clicked", {
                  platform: "devkit",
                })
              }
              target="_blank"
              className="underline decoration-wavy decoration-primary text-foreground hover:text-muted-foreground cursor-pointer">
              devkit
            </a>{" "}
            based in India. Mostly, I just love making fast, thoughtful, and beautifully scalable products.
          </p>
        </motion.section>
        <motion.section variants={item}>

          <p className="max-w-prose">
            I enjoy creating interfaces that feel simple, polished, and intuitive,
            combining strong visual design with system engineering. Most of my
            work is built with <span className="text-foreground">React, Next.js, TypeScript, and Framer Motion</span>,
            alongside backend technologies like <span className="text-foreground">Node.js, Express, AI Integration, Redis and MongoDB</span>.
          </p>
        </motion.section>

        <motion.section variants={item}>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold flex items-center">
              Best Works
            </h2>


            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground px-2">
                  <th className="py-2 font-normal w-24 px-2 border-border border-r" >Time</th>
                  <th className="py-2 font-normal px-2">Project</th>
                </tr>
              </thead>

              <tbody>
                {projects.map((project, index) => (
                  <motion.tr
                    key={project.id}
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.25 + index * 0.08,
                      duration: 0.45,
                    }}
                    className="bg-muted font-medium"
                  >
                    <td className="py-2 text-muted-foreground whitespace-nowrap px-2 border-border border-r">
                      {project.time}
                    </td>
                    <td className="py-2 px-2 border-border border-t">
                      <div className="group relative flex items-center justify-between">
                        <div className="relative group">
                          <span className="cursor-default text-foreground group-hover:text-muted-foreground">
                            {project.title}
                          </span>

                          <div
                            className="
      pointer-events-none
      absolute
      left-0
      top-full
      w-max

      border
      border-border
      bg-card
      backdrop-blur-md

      px-1
      py-1

      text-xs
      leading-4
      text-muted-foreground

      shadow-lg
      opacity-0
      invisible
      translate-y-2
      scale-95

      transition-all
      duration-200

      group-hover:visible
      group-hover:opacity-100
      group-hover:translate-y-0
      group-hover:scale-100

      z-99
    "
                          >
                            {project.description}
                          </div>
                        </div>

                        <div className="flex items-center lg:opacity-0 lg:group-hover:opacity-100 gap-2">
                          <a
                            href={project.live}
                            onClick={() =>
                              posthog.capture("project_live_clicked", {
                                project: project.title,
                              })
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary"
                          >
                            <RiLinksFill className="size-4" />
                          </a>
                          <a
                            href={project.github}
                            onClick={() =>
                              posthog.capture("project_github_clicked", {
                                project: project.title,
                              })
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary "
                          >
                            <RiGithubFill className="size-4" />
                          </a>
                        </div>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

        </motion.section>

        <motion.section variants={item}>

          <p className="max-w-prose">
            Recently, I've been <span className="text-foreground">exploring ai, llms</span>, and product ecosystems built around them, including developer tools and SaaS applications. I have a growing interest in building products from idea to production rather than just implementing <span className="line-through text-foreground">vibe coding</span>.
          </p>
        </motion.section>

        <motion.section variants={item}>

          <p className="max-w-prose">
            Outside of coding, I enjoy studying product and system design, animation
            and the small interaction details that make software feel
            delightful to use.
          </p>

        </motion.section>

        <motion.section variants={item}>
          <p className="max-w-prose">
            I’m actively <span className="text-foreground">open to new roles</span> or contract work with founders and product teams in AI or SaaS. If you need an engineer to own a feature from initial design straight to production, let’s talk.
          </p>
        </motion.section>
        <motion.section variants={item}>
          <p className="max-w-prose">
            You can find me on{" "}
            <a
              href="https://github.com/GuptaShubham-11"
              rel="noopener noreferrer"
              target="_blank"
              onClick={() =>
                posthog.capture("social_clicked", {
                  platform: "github",
                })
              }
              className="text-foreground underline decoration-wavy decoration-primary hover:text-muted-foreground cursor-pointer"
            >
              GitHub
            </a>{", "}
            <a
              href="https://www.linkedin.com/in/guptashubham11"
              rel="noopener noreferrer"
              target="_blank"
              onClick={() =>
                posthog.capture("social_clicked", {
                  platform: "linkedin",
                })
              }
              className="text-foreground underline decoration-wavy decoration-primary hover:text-muted-foreground cursor-pointer"
            >
              LinkedIn
            </a>{", "}
            <a
              href="https://x.com/GuptaShubham91"
              rel="noopener noreferrer"
              target="_blank"
              onClick={() =>
                posthog.capture("social_clicked", {
                  platform: "x",
                })
              }
              className="text-foreground underline decoration-wavy decoration-primary hover:text-muted-foreground cursor-pointer"
            >
              X
            </a>{", or drop an "}
            <a
              href="mailto:guptashubham112005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                posthog.capture("social_clicked", {
                  platform: "email",
                })
              }
              className="text-foreground underline decoration-wavy decoration-primary hover:text-muted-foreground cursor-pointer"
            >
              email
            </a>
            .
          </p>
        </motion.section>


        <Signature />

      </motion.main>

      <footer className="flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">
          Nice to meet you!{" "}
          <span className="text-base text-foreground">
            You are {isLoading ? (
              <span className="animate-pulse">loading...</span>
            ) : (
              <>
                <AnimatedCounter value={data?.visits || 239} />
                <sup>th</sup>
              </>
            )}
          </span>
        </span>

        <ThemeToggle />
      </footer>
    </Container>
  );
}