"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Cpu, Rocket, Sparkles, Award, ExternalLink, Globe, Boxes, Brain, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

/**
 * Drop this component into a Next.js (App Router) project at app/page.tsx
 * Tailwind + shadcn/ui + framer-motion. Minimal, fast, polished.
 * All content below is data-driven via consts so it’s easy to tweak.
 */

// ————— Data —————
const LINKS = {
    email: "mailto:mateiprodan1@gmail.com",
    github: "https://github.com/ProdanRaduMatei",
    linkedin: "https://www.linkedin.com/in/matei-prodan-7624341a4/",
};

const HIGHLIGHTS: { label: string }[] = [
    { label: "Top 100 Kattis (RO top 3)" },
    { label: "Top 100 pbinfo (Cluj top 5)" },
    { label: "€40k investment for CyclinGo @ TV show" },
    { label: "DPIT Academy – 1st place (CyclinGo)" },
    { label: "Innovation Labs semifinalist twice" },
];

// Showcase senior-level breadth. Keep it compact + impressive.
const SKILLS: { group: string; items: string[] }[] = [
    {
        group: "Core",
        items: [
            "TypeScript/JavaScript",
            "Python (FastAPI, ML)",
            "Java (Spring Boot)",
            "SQL (PostgreSQL), MongoDB",
            "Docker, CI/CD, GitHub Actions",
        ],
    },
    {
        group: "Frontend",
        items: [
            "Next.js, React, Dart, Zustand",
            "Tailwind, shadcn/ui",
            "Accessibility, SEO",
            "Playwright e2e",
        ],
    },
    {
        group: "AI/ML",
        items: [
            "LSTM, classical ML",
            "Sentiment: FinBERT/VADER",
            "Vector search, embeddings",
            "Pandas, NumPy, scikit‑learn",
        ],
    },
    {
        group: "Cloud & Ops",
        items: [
            "Vercel, Render, Docker Compose",
            "Logging/Tracing",
            "Stripe, Webhooks",
        ],
    },
];

// New projects first (as requested): SeatSurfer, FinWise AI.
const PROJECTS: {
    title: string;
    slug: string;
    year: string;
    tagline: string;
    badges: string[];
    links: { label: string; href: string }[];
    description: string;
}[] = [
    {
        title: "End-to-End Encrypted Messenger",
        slug: "e2e-encrypted-messenger",
        year: "2026",
        tagline: "Secure chat app with real end-to-end encryption and key exchange.",
        badges: [
            "Cryptography",
            "E2EE",
            "AES-GCM",
            "X25519 / ECDH",
            "HKDF",
            "HMAC / Signatures",
        ],
        links: [
            { label: "Monorepo", href: "https://github.com/ProdanRaduMatei/End-to-End-Encrypted-Mobile-Chat" },
        ],
        description:
            "Built a secure messaging prototype with modern cryptographic primitives: ECDH key agreement, symmetric encryption, and authenticated messages. Focused on threat modeling, key derivation, and correct crypto usage (no custom primitives).",
    },
    {
        title: "Software ML — Fraud Amount Modeling",
        slug: "software-ml-decision-trees",
        year: "2026",
        tagline: "Decision Tree regression pipeline with cross-validation and robust metrics.",
        badges: [
            "Python",
            "scikit-learn",
            "Decision Trees",
            "K-Fold CV",
            "MAE / RMSE / R²",
        ],
        links: [
            { label: "Code", href: "https://github.com/ProdanRaduMatei/ICA_Masters_UBB/tree/main/Sem1/ML/LaTeX%20template%20(lab%20assignment)/project" },
            { label: "Document", href: "https://github.com/ProdanRaduMatei/ICA_Masters_UBB/blob/main/Sem1/ML/LaTeX%20template%20(lab%20assignment)/out/Assignment5.pdf" },
        ],
        description:
            "Implemented an end-to-end ML workflow: preprocessing + log-transform, K-Fold cross-validation, and evaluation with MAE/RMSE/NRMSE/R². Tuned depth and leaf size to control overfitting and ensure stable generalization.",
    },
    {
        title: "FinWise AI",
        slug: "finwise-ai",
        year: "2025",
        tagline: "AI‑powered stock portfolio coach with news & price context.",
        badges: ["Next.js", "FastAPI", "MongoDB", "LSTM", "News/Sentiment"],
        links: [
            { label: "Monorepo", href: "https://github.com/ProdanRaduMatei/FinWiseAI" },
        ],
        description:
            "ML engine (LSTM per‑stock) on OHLCV + sentiment. Secure Google OAuth, model versioning and explainable buy/sell rationales.",
    },
    {
        title: "SeatSurfer",
        slug: "seatsurfer",
        year: "2025",
        tagline: "Real‑time workplace seat booking with AI seat suggestions.",
        badges: ["Flutter", "Spring Boot", "PostgreSQL", "Python ML microservice", "Reports",],
        links: [
            { label: "Code", href: "https://github.com/ProdanRaduMatei/LucrareLicenta" },
            { label: "Article", href: "https://github.com/ProdanRaduMatei/LucrareLicenta/blob/main/Articol/main.pdf" },
            { label: "Batchelor Thesis", href:"https://github.com/ProdanRaduMatei/LucrareLicenta/blob/main/Lucrare/main.pdf"},
        ],
        description:
            "Full‑stack system for office seat management. Admin analytics, date‑range occupancy and an AI recommender (REST) using user prefs + history + constraints.",
    },
    {
        title: "RescueNow",
        slug: "rescuenow",
        year: "2024-2025",
        tagline: "Emergency response app with crash detection & live location sharing.",
        badges: ["PM", "Product", "Flutter", "Deno", "Crash detection", "GPS/IP",],
        links: [
            { label: "Monorepo", href: "https://github.com/Rescue-Now/rescue_now/tree/main/rescue_now_app" },
        ],
        description:
            "End‑to‑end emergency response app with automatic crash detection, live location sharing and one‑tap SOS alerts to contacts and services.",
    },
    {
        title: "BOSCH FMC Hackathon",
        slug: "bosch-fmc-hackathon",
        year: "2022-2023",
        tagline: "Autonomous driving remote car.",
        badges: ["PM", "Python", "Computer Vision", "Robotics", "ROS", "OpenCV"],
        links: [
            { label: "Official Site", href: "https://boschfuturemobility.com"},
        ],
        description:
            "Autonomous driving system for a remote‑controlled car using ROS and OpenCV. Implemented lane detection, obstacle avoidance and path planning.",
    },
    {
        title: "StudJobs",
        slug: "studjobs",
        year: "2022",
        tagline: "Job discovery tailored for university students built in 2 days.",
        badges: ["PM", "Product", "TypeScript/JavaScript", "Firebase",],
        links: [],
        description:
            "Streamlined marketplace for part‑time and full‑time roles aligned with academic schedules, up and running in 48 hours.",
    },
    {
        title: "CyclinGo",
        slug: "cyclingo",
        year: "2020–2022",
        tagline: "Smart signaling vest + React Native app for safer cycling.",
        badges: ["PM", "Product", "React Native", "C++", "BLE", "Firmware", "Product/Hardware"],
        links: [
            { label: "Repo", href: "https://github.com/ProdanRaduMatei/App-CyclinGo" },
            { label: "DemoV2 + Press", href: "https://www.facebook.com/cyclingo.official/videos/153319833343056"},
            { label: "More details", href: "https://www.facebook.com/cyclingo.official/"},
        ],
        description:
            "Hardware + mobile product with programmable LED patterns via BLE. Earned €40k investor commitment on national TV; multiple national hackathon/contest awards.",
    },
    {
        title: "Blood Chain",
        slug: "blood-chain",
        year: "2019",
        tagline: "Donation engagement app with perks and verified info.",
        badges: ["React Native", "Firebase", "Product", "Design"],
        links: [
            { label: "Innovation Labs", href: "https://www.innovationlabs.ro/teams/Blood%20Chain" },
        ],
        description:
            "Mobile app concept to boost blood donations using rewards and clear guidance; 4th place at DPIT and semifinalist at Innovation Labs.",
    },
];

// ————— UI helpers —————
const fade = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Section({ id, className = "", children }: React.PropsWithChildren<{ id?: string; className?: string }>) {
    return (
        <section id={id} className={`mx-auto w-full max-w-6xl px-4 md:px-6 ${className}`}>{children}</section>
    );
}

function ProjectCard({ p }: { p: (typeof PROJECTS)[number] }) {
    return (
        <motion.div variants={fade}>
            <Card className="group border-muted-foreground/10 bg-background/60 backdrop-blur">
                <CardHeader className="space-y-2">
                    <div className="flex items-center justify-between gap-3">
                        <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                            <Sparkles className="h-5 w-5" aria-hidden /> {p.title}
                        </CardTitle>
                        <Badge variant="secondary" className="rounded-full">{p.year}</Badge>
                    </div>
                    <CardDescription className="text-base md:text-lg">{p.tagline}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                        {p.badges.map((b) => (
                            <Badge key={b} variant="outline" className="border-muted-foreground/20">
                                {b}
                            </Badge>
                        ))}
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-muted-foreground">{p.description}</p>
                </CardContent>
                <CardFooter className="flex items-center gap-2">
                    {p.links.map((l) => (
                        <Button key={l.href} variant="ghost" size="sm" asChild>
                            <a href={l.href} target="_blank" rel="noreferrer">
                                {l.label} <ArrowUpRight className="ml-1 h-4 w-4" />
                            </a>
                        </Button>
                    ))}
                </CardFooter>
            </Card>
        </motion.div>
    );
}

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/40 text-foreground selection:bg-primary/20">
            {/* Nav */}
            <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
                <Section className="flex h-14 items-center justify-between">
                    <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
                        <Avatar className="h-7 w-7">
                            <AvatarImage alt="RM" src="/avatar.jpg" />
                            <AvatarFallback>RM</AvatarFallback>
                        </Avatar>
                        <span>Prodan Radu‑Matei</span>
                    </a>
                    <nav className="hidden md:flex items-center gap-1">
                        {[
                            { href: "#projects", label: "Projects" },
                            { href: "#skills", label: "Skills" },
                            { href: "#about", label: "About" },
                            { href: "#contact", label: "Contact" },
                        ].map((l) => (
                            <Button key={l.href} variant="ghost" size="sm" asChild>
                                <a href={l.href}>{l.label}</a>
                            </Button>
                        ))}
                    </nav>
                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" asChild aria-label="GitHub">
                            <a href={LINKS.github} target="_blank" rel="noreferrer"><Github className="h-5 w-5" /></a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">
                            <a href={LINKS.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-5 w-5" /></a>
                        </Button>
                        <Button size="sm" asChild>
                            <a href={LINKS.email}><Mail className="mr-1 h-4 w-4" /> Contact</a>
                        </Button>
                    </div>
                </Section>
            </header>

            {/* Hero */}
            <Section id="home" className="pt-14">
                <div className="grid items-center gap-8 py-12 md:grid-cols-2">
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 text-sm">
                            <ShieldCheck className="h-4 w-4" /> AI & ML Master Student • Builder • PM
                        </div>
                        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
                            Minimal UI. <span className="underline underline-offset-4 decoration-primary/50">Maximum engineering</span>.
                        </h1>
                        <p className="text-muted-foreground md:text-lg">
                            Full‑stack developer focused on real products: AI‑augmented systems, clean architecture and fast, accessible UIs.
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            <Button asChild>
                                <a href="#projects"><Rocket className="mr-2 h-4 w-4" /> View Projects</a>
                            </Button>
                            <Button variant="outline" asChild>
                                <a href="#skills"><Cpu className="mr-2 h-4 w-4" /> Skills</a>
                            </Button>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {HIGHLIGHTS.map((h) => (
                                <Badge key={h.label} variant="secondary" className="rounded-full">{h.label}</Badge>
                            ))}
                        </div>
                    </motion.div>

                    {/* Accent card */}
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                        <Card className="border-muted-foreground/10 bg-background/60 backdrop-blur">
                            <CardHeader className="space-y-1">
                                <CardTitle className="flex items-center gap-2 text-2xl"><Brain className="h-5 w-5" /> Recent Work</CardTitle>
                                <CardDescription>Flagship products + security & ML work (2025).</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <ShieldCheck className="h-4 w-4" /> End-to-End Encrypted App
                                    </div>
                                    <p className="text-sm">
                                        ECDH key exchange, derived session keys, and authenticated encryption for secure messaging.
                                    </p>
                                </div>

                                <Separator />

                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Cpu className="h-4 w-4" /> Software ML (Decision Trees)
                                    </div>
                                    <p className="text-sm">
                                        Decision Tree regression with K-Fold CV and metrics (MAE/RMSE/R²) for stable performance.
                                    </p>
                                </div>

                                <Separator />

                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Globe className="h-4 w-4" /> FinWise AI
                                    </div>
                                    <p className="text-sm">
                                        Portfolio assistant with LSTM predictions, news sentiment and transparent rationales.
                                    </p>
                                </div>

                                <Separator />

                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Boxes className="h-4 w-4" /> SeatSurfer
                                    </div>
                                    <p className="text-sm">
                                        Hybrid workplace booking with AI seat recommendations and admin analytics.
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter className="flex gap-2">
                                <Button variant="ghost" asChild>
                                    <a href="#projects">Explore <ExternalLink className="ml-1 h-4 w-4" /></a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                </div>
            </Section>

            {/* Projects */}
            <Section id="projects" className="py-12 space-y-8">
                <div className="flex items-end justify-between">
                    <motion.h2 variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl md:text-3xl font-semibold tracking-tight">Projects</motion.h2>
                    <div className="text-sm text-muted-foreground">Selected, shipped, and maintained</div>
                </div>
                <motion.div variants={{ show: { transition: { staggerChildren: 0.06 } } }} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 sm:grid-cols-2">
                    {PROJECTS.map((p) => (
                        <ProjectCard key={p.slug} p={p} />
                    ))}
                </motion.div>
            </Section>

            {/* Skills */}
            <Section id="skills" className="py-12 space-y-6">
                <motion.h2 variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl md:text-3xl font-semibold tracking-tight">Skills & Stack</motion.h2>
                <div className="grid gap-4 md:grid-cols-2">
                    {SKILLS.map((s) => (
                        <Card key={s.group} className="border-muted-foreground/10 bg-background/60">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2"><Award className="h-5 w-5" /> {s.group}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {s.items.map((i) => (
                                        <Badge key={i} variant="outline" className="border-muted-foreground/20">{i}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* About */}
            <Section id="about" className="py-12 space-y-6">
                <motion.h2 variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl md:text-3xl font-semibold tracking-tight">About</motion.h2>
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="md:col-span-2 space-y-4 text-muted-foreground">
                        <p>
                            I’m a Computer Science & Mathematics graduate building AI‑powered, production‑grade apps. I care about clean architecture,
                            performance budgets, testing, and developer experience.
                        </p>
                        <p>
                            I led teams, shipped products (mobile, web, embedded), and pitched in international competitions. I enjoy turning real constraints into elegant
                            software.
                        </p>
                    </div>
                    <Card className="border-muted-foreground/10 bg-background/60">
                        <CardHeader>
                            <CardTitle className="text-lg">Quick Facts</CardTitle>
                            <CardDescription>Snapshot</CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground space-y-2">
                            <div>• Volunteer Team Angel – Academia „Descoperă‑ți pasiunea în IT”.</div>
                            <div>• Hackathons: Innovation Labs, Bosch FMC, POLIHACK.</div>
                            <div>• Speaking & writing: theses, articles, technical docs.</div>
                        </CardContent>
                    </Card>
                </div>
            </Section>

            {/* Contact */}
            <Section id="contact" className="py-12">
                <Card className="border-muted-foreground/10 bg-background/60">
                    <CardHeader>
                        <CardTitle className="text-2xl md:text-3xl">Let’s build something</CardTitle>
                        <CardDescription>Open to internships, junior SWE roles, and impactful collaborations.</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex flex-wrap gap-3">
                        <Button asChild>
                            <a href={LINKS.email}><Mail className="mr-2 h-4 w-4" /> Email me</a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href={LINKS.github}><Github className="mr-2 h-4 w-4" /> GitHub</a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href={LINKS.linkedin}><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a>
                        </Button>
                    </CardFooter>
                </Card>
            </Section>

            <footer className="py-10 text-center text-xs text-muted-foreground">
                © {new Date().getFullYear()} Prodan Radu‑Matei • Built with Next.js, Tailwind & shadcn/ui
            </footer>
        </main>
    );
}
