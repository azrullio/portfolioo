/* =========================================================
   globals.d.ts — library dari CDN (variabel global) dan bentuk data situs
   ========================================================= */

declare const Vue: any;
declare const gsap: any;
declare const ScrollTrigger: any;
declare const Flip: any;
declare const Motion: any;

/** Satu gambar (atau video) beserta keterangannya. */
interface Shot { src: string; caption: string; video?: string; }  // video: file .mp4, src = gambar sampul

interface Project {
  id: string;
  title: string;
  kind: string;          // jenis singkat, mis. "Game edukasi · Web"
  text: string;
  points?: string[];     // poin detail (tampil di jendela detail)
  tags: string[];
  cats: string[];        // dipakai filter: ai, web, app, play, data
  status?: string;       // mis. "Prototipe", "Dalam pengembangan"
  featured?: boolean;    // tampil dengan label "Unggulan"
  demo?: string;
  repo?: string;
  shots?: Shot[];
  icon?: string;         // ikon cadangan bila belum ada gambar
}

interface Experience {
  type: string;
  title: string;
  org: string;
  place: string;
  period: string;
  text: string;
  points: string[];
  media: Shot[];
}

interface Design {
  id: string;
  title: string;
  kind: string;
  tools: string[];
  text: string;
  points?: string[];
  shots: Shot[];
  layout?: 'cards' | 'screens'; // 'screens' = tangkapan layar UI (lanskap)
  link?: string;         // mis. link Figma
  linkLabel?: string;
}

interface Education { school: string; degree: string; period: string; text: string; points: string[]; }
interface SkillGroup { title: string; items: string[]; }
interface StatItem { value: string; label: string; }
interface Cert {
  id: string;
  title: string;
  issuer: string;
  date: string;
  text?: string;
  grade?: string;        // mis. 'Nilai 87 · Sangat Kompeten'
  shots: Shot[];         // halaman sertifikat (dan daftar nilai)
}
interface Social { label: string; url: string; }
interface Filter { id: string; label: string; }
interface NavItem { id: string; label: string; }

interface SiteData {
  name: string;
  email: string;
  location: string;
  photo: string;
  study: string;
  campus: string;
  nav: NavItem[];
  highlights: StatItem[];
  about: string[];
  skills: SkillGroup[];
  filters: Filter[];
  projects: Project[];
  designs: Design[];
  experience: Experience[];
  education: Education[];
  certs: Cert[];
  showCerts: boolean;
  socials: Social[];
}

interface Gallery { items: Shot[]; index: number; title: string; project?: Project | null; }

interface AZNamespace {
  data: SiteData;
  reduce: boolean;
  fx?: {
    bind(): void;
    intro(): void;
    flip(apply: () => Promise<void>): Promise<void>;
    refresh(): void;
  };
}

interface Window { AZ: AZNamespace; }
