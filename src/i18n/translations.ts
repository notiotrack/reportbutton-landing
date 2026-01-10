export type Language = 'en' | 'pl';

export interface Translations {
	badge: {
		comingSoon: string;
	};
	hero: {
		title: string;
		tagline: string;
		description: string;
		emailPlaceholder: string;
		joinWaitlist: string;
		waitlistSubtext: string;
	};
	problem: {
		title: string;
		subtitle: string;
		contentAnywhere: {
			title: string;
			items: string[];
		};
		problematicContent: {
			title: string;
			items: string[];
		};
		dsa: {
			title: string;
			description: string;
			withoutProcedures: {
				title: string;
				description: string;
			};
			withReportButton: {
				title: string;
				description: string;
			};
		};
	};
	solution: {
		title: string;
		subtitle: string;
		features: {
			oneDashboard: {
				title: string;
				description: string;
			};
			automated: {
				title: string;
				description: string;
			};
			professional: {
				title: string;
				description: string;
			};
			fiveMinutes: {
				title: string;
				description: string;
			};
		};
		dashboardPreview: string;
	};
	features: {
		title: string;
		items: {
			peaceOfMind: {
				title: string;
				description: string;
			};
			timeSavings: {
				title: string;
				description: string;
			};
			professionalism: {
				title: string;
				description: string;
			};
			fullControl: {
				title: string;
				description: string;
			};
			multilingual: {
				title: string;
				description: string;
			};
			security: {
				title: string;
				description: string;
			};
		};
	};
	howItWorks: {
		title: string;
		subtitle: string;
		steps: {
			createAccount: {
				title: string;
				description: string;
			};
			addSite: {
				title: string;
				description: string;
			};
			pasteCode: {
				title: string;
				description: string;
			};
			enjoy: {
				title: string;
				description: string;
			};
		};
	};
	cta: {
		title: string;
		subtitle: string;
		emailPlaceholder: string;
		joinWaitlist: string;
	};
	footer: {
		tagline: string;
		copyright: string;
	};
}

export const translations: Record<Language, Translations> = {
	en: {
		badge: {
			comingSoon: 'Coming soon',
		},
		hero: {
			title: 'ReportButton',
			tagline: 'Peace. Order. Professionalism.',
			description: 'Professional content moderation system. Keep your site safe, maintain order, and protect your community from harmful content.',
			emailPlaceholder: 'Your email',
			joinWaitlist: 'Join the waitlist',
			waitlistSubtext: "Be the first to know when we're ready",
		},
		problem: {
			title: 'Running a website comes with responsibility',
			subtitle: "You're responsible for what appears on your site. Unwanted content can surface anywhere—and it's your job to handle it properly.",
			contentAnywhere: {
				title: 'Content can appear anywhere',
				items: [
					'User comments and discussions',
					'Product reviews and ratings',
					'Uploaded files and media',
					'User-generated content',
					'And countless other ways',
				],
			},
			problematicContent: {
				title: 'Types of problematic content',
				items: [
					'Hate speech and discrimination',
					'Links to illegal resources',
					'Copyright violations',
					'Harassment and cyberbullying',
					'Misinformation and fake news',
					'Extreme graphic or illegal imagery',
				],
			},
			dsa: {
				title: 'DSA requires you to take action',
				description: 'The Digital Services Act (DSA) requires website owners to maintain order and handle problematic content. You need clear procedures that allow visitors to report such content directly to you.',
				withoutProcedures: {
					title: 'Without proper procedures',
					description: "If you don't have a reporting system in place, reports may come through official channels—from prosecutors, law enforcement, or regulatory bodies across EU member states. This means formal investigations, legal complications, and unnecessary stress.",
				},
				withReportButton: {
					title: 'With ReportButton',
					description: 'Set up a professional reporting system in minutes. Visitors can report issues directly to you, you maintain full control, and everything stays organized. No more complications—just peace of mind.',
				},
			},
		},
		solution: {
			title: 'ReportButton is your peace of mind',
			subtitle: 'Everything in one place. Zero chaos. Full control.',
			features: {
				oneDashboard: {
					title: 'One dashboard, all reports',
					description: 'No more searching through your inbox. Everything in a clear dashboard.',
				},
				automated: {
					title: 'Automated communication',
					description: 'The system sends confirmations automatically. You just manage.',
				},
				professional: {
					title: 'Professional widget',
					description: 'Elegant button on your site. Multilingual. Responsive.',
				},
				fiveMinutes: {
					title: '5 minutes to start',
					description: 'Paste the code, done. No complicated installations.',
				},
			},
			dashboardPreview: 'Dashboard Preview',
		},
		features: {
			title: 'What you get?',
			items: {
				peaceOfMind: {
					title: 'Peace of mind',
					description: "Confidence that you're in control. Nothing slips through the cracks.",
				},
				timeSavings: {
					title: 'Time savings',
					description: 'No more manual responses. Automation handles communication.',
				},
				professionalism: {
					title: 'Professionalism',
					description: 'Your site looks serious. Users see their voice matters.',
				},
				fullControl: {
					title: 'Full control',
					description: 'Statuses, filters, history. Everything at your fingertips.',
				},
				multilingual: {
					title: 'Multilingual',
					description: 'EN, DE, FR, ES, PL. Support users from around the world.',
				},
				security: {
					title: 'Security',
					description: 'Spam protection. Data isolation. Professional infrastructure.',
				},
			},
		},
		howItWorks: {
			title: 'How it works?',
			subtitle: 'Simple. Fast. No complications.',
			steps: {
				createAccount: {
					title: 'Create account',
					description: 'Sign up in a minute',
				},
				addSite: {
					title: 'Add your site',
					description: 'Each domain gets its key',
				},
				pasteCode: {
					title: 'Paste code',
					description: 'A few lines, done',
				},
				enjoy: {
					title: 'Enjoy peace of mind',
					description: 'Manage in a convenient dashboard',
				},
			},
		},
		cta: {
			title: 'Ready for peace of mind?',
			subtitle: "Join the waitlist and be the first when we're ready",
			emailPlaceholder: 'Your email',
			joinWaitlist: 'Join the waitlist',
		},
		footer: {
			tagline: 'Your peace of mind in managing reports',
			copyright: '© 2026 ReportButton. All rights reserved.',
		},
	},
	pl: {
		badge: {
			comingSoon: 'Wkrótce dostępne',
		},
		hero: {
			title: 'ReportButton',
			tagline: 'Spokój. Porządek. Profesjonalizm.',
			description: 'Profesjonalny system moderacji treści. Utrzymaj bezpieczeństwo swojej strony, zachowaj porządek i chroń społeczność przed szkodliwymi treściami.',
			emailPlaceholder: 'Twój email',
			joinWaitlist: 'Dołącz do listy oczekujących',
			waitlistSubtext: 'Bądź pierwszy, gdy będziemy gotowi',
		},
		problem: {
			title: 'Prowadzenie strony wiąże się z odpowiedzialnością',
			subtitle: 'Jesteś odpowiedzialny za to, co pojawia się na Twojej stronie. Niepożądane treści mogą pojawić się wszędzie—i Twoim zadaniem jest właściwe nimi zarządzanie.',
			contentAnywhere: {
				title: 'Treści mogą pojawić się wszędzie',
				items: [
					'Komentarze i dyskusje użytkowników',
					'Recenzje produktów i oceny',
					'Przesłane pliki i media',
					'Treści generowane przez użytkowników',
					'I niezliczone inne sposoby',
				],
			},
			problematicContent: {
				title: 'Rodzaje problematycznych treści',
				items: [
					'Mowa nienawiści i dyskryminacja',
					'Linki do nielegalnych zasobów',
					'Naruszenia praw autorskich',
					'Nękanie i cyberprzemoc',
					'Dezinformacja i fake news',
					'Ekstremalne graficzne lub nielegalne obrazy',
				],
			},
			dsa: {
				title: 'DSA wymaga podjęcia działań',
				description: 'Digital Services Act (DSA) wymaga od właścicieli stron utrzymania porządku i obsługi problematycznych treści. Potrzebujesz jasnych procedur, które pozwolą odwiedzającym zgłaszać takie treści bezpośrednio do Ciebie.',
				withoutProcedures: {
					title: 'Bez odpowiednich procedur',
					description: 'Jeśli nie masz systemu zgłaszania, zgłoszenia mogą przychodzić przez oficjalne kanały—od prokuratury, organów ścigania lub organów regulacyjnych w państwach członkowskich UE. To oznacza formalne dochodzenia, komplikacje prawne i niepotrzebny stres.',
				},
				withReportButton: {
					title: 'Z ReportButton',
					description: 'Skonfiguruj profesjonalny system zgłaszania w kilka minut. Odwiedzający mogą zgłaszać problemy bezpośrednio do Ciebie, masz pełną kontrolę, a wszystko pozostaje uporządkowane. Koniec z komplikacjami—tylko spokój ducha.',
				},
			},
		},
		solution: {
			title: 'ReportButton to Twój spokój',
			subtitle: 'Wszystko w jednym miejscu. Zero chaosu. Pełna kontrola.',
			features: {
				oneDashboard: {
					title: 'Jeden panel, wszystkie zgłoszenia',
					description: 'Koniec z przeszukiwaniem skrzynki. Wszystko w przejrzystym dashboardzie.',
				},
				automated: {
					title: 'Automatyzacja komunikacji',
					description: 'System sam wysyła potwierdzenia. Ty tylko zarządzasz.',
				},
				professional: {
					title: 'Profesjonalny widget',
					description: 'Elegancki przycisk na stronie. Wielojęzyczny. Responsywny.',
				},
				fiveMinutes: {
					title: '5 minut do startu',
					description: 'Wklej kod, gotowe. Bez skomplikowanych instalacji.',
				},
			},
			dashboardPreview: 'Podgląd Dashboard',
		},
		features: {
			title: 'Co otrzymujesz?',
			items: {
				peaceOfMind: {
					title: 'Spokój ducha',
					description: 'Pewność, że panujesz nad sytuacją. Nic nie umknie Twojej uwadze.',
				},
				timeSavings: {
					title: 'Oszczędność czasu',
					description: 'Koniec z ręcznym odpisywaniem. Automatyzacja załatwia komunikację.',
				},
				professionalism: {
					title: 'Profesjonalizm',
					description: 'Twoja strona wygląda poważnie. Użytkownicy widzą, że ich głos ma znaczenie.',
				},
				fullControl: {
					title: 'Pełna kontrola',
					description: 'Statusy, filtry, historia. Wszystko na wyciągnięcie ręki.',
				},
				multilingual: {
					title: 'Wielojęzyczność',
					description: 'PL, EN, DE, FR, ES. Obsługa użytkowników z całego świata.',
				},
				security: {
					title: 'Bezpieczeństwo',
					description: 'Ochrona przed spamem. Izolacja danych. Profesjonalna infrastruktura.',
				},
			},
		},
		howItWorks: {
			title: 'Jak to działa?',
			subtitle: 'Prosto. Szybko. Bez komplikacji.',
			steps: {
				createAccount: {
					title: 'Załóż konto',
					description: 'Rejestracja w minutę',
				},
				addSite: {
					title: 'Dodaj stronę',
					description: 'Każda domena ma swój klucz',
				},
				pasteCode: {
					title: 'Wklej kod',
					description: 'Kilka linii, gotowe',
				},
				enjoy: {
					title: 'Ciesz się spokojem',
					description: 'Zarządzaj w wygodnym panelu',
				},
			},
		},
		cta: {
			title: 'Gotowy na spokój?',
			subtitle: 'Dołącz do listy oczekujących i bądź pierwszy, gdy będziemy gotowi',
			emailPlaceholder: 'Twój email',
			joinWaitlist: 'Dołącz do listy oczekujących',
		},
		footer: {
			tagline: 'Twój spokój w zarządzaniu zgłoszeniami',
			copyright: '© 2026 ReportButton. Wszystkie prawa zastrzeżone.',
		},
	},
};
