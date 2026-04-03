import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface NavItem {
    label: string;
    fragment: string;
}

interface StatItem {
    value: string;
    label: string;
}

interface ServiceItem {
    icon: string;
    title: string;
    description: string;
}

interface AboutHighlightItem {
    icon: string;
    title: string;
    description: string;
}

type AboutTabId = 'about' | 'skills' | 'experience';

interface AboutTabItem {
    id: AboutTabId;
    label: string;
}

interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    description: string;
}

interface SkillItem {
    mark: string;
    label: string;
    accent: string;
}

interface ProjectItem {
    title: string;
    category: string;
    description: string;
    tags: string[];
    accent: string;
    previewClass: string;
    previewImage?: string;
}

interface CertificateItem {
    title: string;
    issuer: string;
    date: string;
    description: string;
    tags: string[];
    image: string;
}

interface CertificateStatItem {
    value: string;
    label: string;
}

interface ContactItem {
    icon: string;
    title: string;
    value: string;
}

@Component({
    selector: 'lim-portfolio-page',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './lim.html',
    styleUrl: './lim.css'
})
export class LimPortfolioPage {
    protected readonly currentYear = new Date().getFullYear();
    protected readonly isDark = signal(false);
    protected readonly activeAboutTab = signal<AboutTabId>('about');

    protected readonly navItems: NavItem[] = [
        { label: 'Home', fragment: 'home' },
        { label: 'About', fragment: 'about' },
        { label: 'Skills', fragment: 'skills' },
        { label: 'Projects', fragment: 'projects' },
        { label: 'Certificates', fragment: 'certificates' },
        { label: 'Contact', fragment: 'contact' }
    ];

    protected readonly stats: StatItem[] = [
        { value: '3+', label: 'Years Experience' },
        { value: '6+', label: 'Projects Completed' },
        { value: '1+', label: 'Happy Clients' },
        { value: '2+', label: 'Certifications' }
    ];

    protected readonly aboutTabs: AboutTabItem[] = [
        { id: 'about', label: 'About Me' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' }
    ];

    protected readonly aboutHighlights: AboutHighlightItem[] = [
        { icon: 'pi pi-code', title: 'Clean Code', description: 'Best practices' },
        { icon: 'pi pi-briefcase', title: 'Experience', description: '3+ years' },
        { icon: 'pi pi-graduation-cap', title: 'Education', description: 'IT' },
        { icon: 'pi pi-verified', title: 'Certified', description: 'Few certs' }
    ];

    protected readonly services: ServiceItem[] = [
        {
            icon: 'pi pi-code',
            title: 'Web Development',
            description: 'Building responsive and performant web applications using modern technologies.'
        },
        {
            icon: 'pi pi-box',
            title: 'UI/UX Design',
            description: 'Creating beautiful and intuitive user interfaces with great user experience.'
        },
        {
            icon: 'pi pi-graduation-cap',
            title: 'Consulting',
            description: 'Providing technical guidance and best practices for development teams.'
        }
    ];

    protected readonly primaryStack: SkillItem[] = [
        { mark: 'NG', label: 'Angular', accent: '#dd0031' },
        { mark: 'TS', label: 'TypeScript', accent: '#2563eb' },
        { mark: 'JS', label: 'JavaScript', accent: '#eab308' },
        { mark: 'TW', label: 'Tailwind', accent: '#14b8a6' },
        { mark: 'CSS', label: 'CSS', accent: '#2563eb' },
        { mark: 'H5', label: 'HTML', accent: '#f97316' },
        { mark: 'BT', label: 'Bootstrap', accent: '#7c3aed' }
    ];

    protected readonly secondaryStack: SkillItem[] = [
        { mark: 'ND', label: 'Node.js', accent: '#16a34a' },
        { mark: 'EX', label: 'Express', accent: '#4b5563' },
        { mark: 'MY', label: 'MySQL', accent: '#2563eb' },
        { mark: 'GH', label: 'GitHub', accent: '#111827' },
        { mark: 'GT', label: 'Git', accent: '#ef4444' },
        { mark: 'FG', label: 'Figma', accent: '#a855f7' }
    ];

    protected readonly projects: ProjectItem[] = [
        {
            title: 'Pulse',
            category: 'Web App',
            description: 'A product-focused landing page built to promote Pulse jump rope with bold visuals, strong calls to action, and a conversion-first layout.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            accent: '#dc2626',
            previewClass: 'project-preview--nexgen',
            previewImage: 'profile/pulse.jpg'
        },
        {
            title: 'Bizzix',
            category: 'Web App',
            description: 'A professional consulting agency website focused on business services, strong calls to action, and a polished corporate presentation.',
            tags: ['React', 'TypeScript', 'Tailwind CSS', 'API Integration'],
            accent: '#f97316',
            previewClass: 'project-preview--apex',
            previewImage: 'profile/bizzix.png'
        }
    ];

    protected readonly certificates: CertificateItem[] = [
        {
            title: 'Certified HTML Developer',
            issuer: 'W3Schools',
            date: 'March 15, 2024',
            description: 'Passed the W3Schools HTML certification exam at the Professional level.',
            tags: ['HTML', 'Web Development', 'Frontend'],
            image: 'profile/html-certificate-baring.png'
        },
        {
            title: 'Certified CSS Developer',
            issuer: 'W3Schools',
            date: 'March 15, 2024',
            description: 'Passed the W3Schools CSS certification exam at the Professional level.',
            tags: ['CSS', 'Web Design', 'Frontend'],
            image: 'profile/css-certificate-baring.png'
        }
    ];

    protected readonly certificateStats: CertificateStatItem[] = [
        { value: '2', label: 'Total Certifications' },
        { value: '1', label: 'Issuing Organizations' },
        { value: '2+', label: 'Years Learning' }
    ];

    protected readonly contactItems: ContactItem[] = [
        { icon: 'pi pi-envelope', title: 'Email', value: 'baringjasond2@gmail.com' },
        { icon: 'pi pi-phone', title: 'Phone', value: '09513830604' },
        { icon: 'pi pi-map-marker', title: 'Location', value: 'Davao Del Norte, Tagum City, Philippines' }
    ];

    protected readonly experienceItems: ExperienceItem[] = [
        {
            role: 'Full Stack Developer',
            company: 'Freelance & Personal Projects',
            period: '2023 - Present',
            description: 'Built responsive web applications, portfolio projects, and UI-driven experiences using modern frontend and backend tools.'
        },
        {
            role: 'Frontend Developer',
            company: 'Academic and Client Work',
            period: '2022 - 2023',
            description: 'Focused on layout implementation, reusable components, and clean user interfaces with attention to accessibility and responsiveness.'
        }
    ];

    protected navigateToSection(fragment: string): void {
        const element = document.getElementById(fragment);
        if (!element) {
            return;
        }

        const headerOffset = 84;
        const targetPosition = element.getBoundingClientRect().top + window.scrollY - headerOffset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    protected toggleTheme(): void {
        this.isDark.update((value) => !value);
    }

    protected setAboutTab(tab: AboutTabId): void {
        this.activeAboutTab.set(tab);
    }
}
