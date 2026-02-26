export type Language = 'en' | 'pl';

export interface Translations {
	badge: {
		comingSoon: string;
	};
	hero: {
		title: string;
		tagline: string[];
		workflow: string;
		description: string;
		emailPlaceholder: string;
		joinWaitlist: string;
		waitlistSubtext: string;
		waitlistSuccess: string;
	};
	quotes: {
		items: {
			text: string;
			author: string;
			source: string;
		}[];
	};
	problem: {
		title: string;
		subtitle: string;
		subtitleSecondary: string;
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
			withNotifyButton: {
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
	howItWorksDetailed: {
		title: string;
		steps: string[];
		benefits: {
			title: string;
			items: string[];
		};
	};
	cta: {
		title: string;
		subtitle: string;
		discount: string;
		emailPlaceholder: string;
		joinWaitlist: string;
	};
	integration: {
		title: string;
		subtitle: string;
		description: string;
		cmsList: string[];
	};
	faq: {
		title: string;
		items: {
			question: string;
			answer: string;
		}[];
	};
	footer: {
		tagline: string;
		copyright: string;
	};
	cookieConsent: {
		message: string;
		accept: string;
		reject: string;
	};
}

export const translations: Record<Language, Translations> = {
	en: {
		badge: {
			comingSoon: 'Coming soon',
		},
		hero: {
			title: 'NotifyButton',
			tagline: [
				'Protect your site visitors from illegal content.',
				'Protect yourself from criminal liability.',
			],
		workflow: 'Give your users a clear way to report content, and your team a structured workflow to review reports and take action when needed.',
			description: 'Professional content moderation system. Keep your site safe, maintain order, and protect your site visitors from harmful content.',
			emailPlaceholder: 'Your email',
			joinWaitlist: 'Join the waitlist',
			waitlistSubtext: "Be the first to know when we're ready",
			waitlistSuccess: 'Thanks! Check your email to confirm.',
		},
		quotes: {
			items: [
				{
					text: 'The DSA makes this a duty, not a choice.',
					author: 'EU executive vice-president Henna Virkkunen',
					source: 'AP News',
				},
				{
					text: 'The fine costs X much more than it would have if they had complied with the rules.',
					author: '',
					source: 'Le Monde',
				},
				{
					text: 'The Digital Services Act helps to make the online environment safe and trustworthy.',
					author: '',
					source: 'Digital Services Act Strategy',
				},
			],
		},
		problem: {
			title: 'Running a website comes with responsibility',
			subtitle: "You're responsible for what appears on your site. Unwanted content can surface anywhere—and it's your job to handle it properly.",
			subtitleSecondary: 'NotifyButton lets visitors report content they believe needs attention, while your team reviews each report and makes the final decision.',
			contentAnywhere: {
				title: 'Illegal content can appear anywhere',
				items: [
					'User comments and discussions',
					'Product reviews and ratings',
					'Uploaded files and media',
					'User-generated content',
					'Content tampering after a site breach',
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
				withNotifyButton: {
					title: 'With NotifyButton',
					description: 'Set up a professional reporting system in minutes. Visitors can report issues directly to you, you maintain full control, and everything stays organized. No more complications—just peace of mind.',
				},
			},
		},
		solution: {
			title: 'NotifyButton is your peace of mind',
			subtitle: 'Everything in one place. Zero chaos. Full control.',
			features: {
				oneDashboard: {
					title: 'One dashboard, all reports',
					description: 'No more searching through your inbox. Everything in a clear dashboard.',
				},
				automated: {
					title: 'Automated communication',
					description: 'The system will remind you about pending reports, so you don\'t miss statutory deadlines for review.',
				},
				professional: {
					title: 'Professional widget',
					description: 'Elegant button on your site. Multilingual. Responsive.',
				},
				fiveMinutes: {
					title: '5 minutes to start',
					description: 'Works with any CMS—WordPress, Shopify, Webflow, or any website. Just paste one script and you are done. No complicated installations.',
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
					description: 'Protection from lawbreakers. Data isolation. Professional infrastructure.',
				},
			},
		},
		howItWorks: {
			title: 'Integration in 3 minutes!',
			subtitle: 'Simple. Fast. No complications.',
			steps: {
				createAccount: {
					title: 'Create account',
					description: 'Sign up in a minute',
				},
				addSite: {
					title: 'Add your site',
					description: 'You can configure any number of sites',
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
		howItWorksDetailed: {
			title: 'How it works?',
			steps: [
				'Your site now has an integrated button for reporting illegal content.',
				'When a visitor sees content that shouldn\'t be there, they click this button',
				'A window with a content reporting form appears, the reporter specifies what type of violation it is (by selecting one of the options, in accordance with DSA requirements), they can provide their email address if they want to be informed about the outcome of the report',
				'Immediately after reporting, it goes to the dashboard, and you are notified about it by email',
				'You verify the report and if it is valid, you remove the problematic content',
				'If you don\'t do this, we will remind you about the legal necessity to respond, you won\'t miss any deadline',
				'After completing the moderation process, an automatic report will be prepared confirming your fulfillment of legal obligations',
			],
			benefits: {
				title: 'What do you gain?',
				items: [
					'Without the option to report to the site owner, visitors will report it to state authorities, which will start legal procedures and investigation. DSA requires having internal procedures to handle such reports, and meanwhile the supervisory authorities have just learned that you don\'t have any - this can mean financial liability',
					'Even if a visitor reports it to the prosecutor, you are covered: you have verified the report, responded, and have a prepared report. The requirements have been met.',
				],
			},
		},
		cta: {
			title: 'Ready for peace of mind?',
			subtitle: "Join the waitlist and be the first when we're ready",
			discount: 'Sign up now to get 50% off for the first 6 months after launch',
			emailPlaceholder: 'Your email',
			joinWaitlist: 'Join the waitlist',
		},
		integration: {
			title: 'Works with any platform',
			subtitle: 'Universal integration',
			description: 'NotifyButton works with any CMS or website platform. Just paste one script and you are done.',
			cmsList: ['WordPress', 'Shopify', 'Webflow', 'Custom HTML', 'Any CMS'],
		},
		faq: {
			title: 'Frequently Asked Questions',
			items: [
				{
					question: 'Do I need to comply with DSA?',
					answer: 'Yes, if user-generated content appears on your site—even just comments—you need to comply with DSA. If your site has multiple editors, NotifyButton helps you manage content moderation efficiently.',
				},
				{
					question: 'Will I be able to install the system?',
					answer: 'Absolutely. Installation is as simple as adding one line of code to your website. We also provide ready-made modules for popular CMS and e-commerce platforms.',
				},
				{
					question: 'What happens if I do not integrate NotifyButton?',
					answer: 'You can still implement full content moderation support on your own, but this SaaS solution takes the entire task off your shoulders and shortens the process from weeks to just a few minutes.',
				},
				{
					question: 'What happens if I do not implement moderation procedures under DSA?',
					answer: 'You can hope for luck that nothing bad will ever happen on your site. However, if illegal content appears and visitors do not have a way to report it to the site owner, they can report it directly to prosecutors or law enforcement. This means the start of formal procedures.',
				},
				{
					question: 'Does DSA only apply to large sites like Facebook, Instagram, or X?',
					answer: 'DSA was created with the problems these services and their users create in mind, but it applies to all websites, stores, and online services.',
				},
			],
		},
		footer: {
			tagline: 'Your peace of mind in managing reports',
			copyright: '© 2026 NotifyButton. All rights reserved.',
		},
		cookieConsent: {
			message: 'We use cookies to understand how visitors use the site.',
			accept: 'Accept',
			reject: 'Reject',
		},
	},
	pl: {
		badge: {
			comingSoon: 'Wkrótce dostępne',
		},
		hero: {
			title: 'NotifyButton',
			tagline: [
				'Chroń twoją stronę przed nielegalnymi treściami.',
				'Chroń siebie przed odpowiedzialnością karną.',
			],
		workflow: 'Daj użytkownikom jasny sposób zgłaszania treści, a zespołowi uporządkowany workflow do przeglądu zgłoszeń i działania, gdy to potrzebne.',
			description: 'Profesjonalny system moderacji treści. Utrzymaj bezpieczeństwo swojej strony, zachowaj porządek i chroń odwiedzających twoją stronę przed szkodliwymi treściami.',
			emailPlaceholder: 'Twój email',
			joinWaitlist: 'Dołącz do listy oczekujących',
			waitlistSubtext: 'Bądź pierwszy, gdy będziemy gotowi',
			waitlistSuccess: 'Dziękujemy! Sprawdź email i potwierdź zapis.',
		},
		quotes: {
			items: [
				{
					text: 'DSA czyni to obowiązkiem, a nie wyborem.',
					author: 'Wiceprzewodnicząca wykonawcza UE Henna Virkkunen',
					source: 'AP News',
				},
				{
					text: 'Kara kosztuje X znacznie więcej, niż gdyby przestrzegali zasad.',
					author: '',
					source: 'Le Monde',
				},
				{
					text: 'Digital Services Act pomaga uczynić środowisko online bezpiecznym i godnym zaufania.',
					author: '',
					source: 'Digital Services Act Strategy',
				},
			],
		},
		problem: {
			title: 'Prowadzenie strony wiąże się z odpowiedzialnością',
			subtitle: 'Jesteś odpowiedzialny za to, co pojawia się na Twojej stronie. Niepożądane treści mogą pojawić się wszędzie—i Twoim zadaniem jest właściwe nimi zarządzanie.',
			subtitleSecondary: 'NotifyButton pozwala odwiedzającym zgłaszać treści, które ich zdaniem wymagają uwagi, a Twój zespół przegląda każde zgłoszenie i podejmuje ostateczną decyzję.',
			contentAnywhere: {
				title: 'Nielegalne treści mogą pojawić się wszędzie',
				items: [
					'Komentarze i dyskusje użytkowników',
					'Recenzje produktów i oceny',
					'Przesłane pliki i media',
					'Treści generowane przez użytkowników',
					'Podmiana treści wskutek włamania na stronę',
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
				withNotifyButton: {
					title: 'Z NotifyButton',
					description: 'Skonfiguruj profesjonalny system zgłaszania w kilka minut. Odwiedzający mogą zgłaszać problemy bezpośrednio do Ciebie, masz pełną kontrolę, a wszystko pozostaje uporządkowane. Koniec z komplikacjami—tylko spokój ducha.',
				},
			},
		},
		solution: {
			title: 'NotifyButton to Twój spokój',
			subtitle: 'Wszystko w jednym miejscu. Zero chaosu. Pełna kontrola.',
			features: {
				oneDashboard: {
					title: 'Jeden panel, wszystkie zgłoszenia',
					description: 'Koniec z przeszukiwaniem skrzynki. Wszystko w przejrzystym dashboardzie.',
				},
				automated: {
					title: 'Automatyzacja komunikacji',
					description: 'System przypomni Ci o oczekujących zgłoszeniach, tak byś nie przegapił(a) ustawowych terminów na rozpatrzenie',
				},
				professional: {
					title: 'Profesjonalny widget',
					description: 'Elegancki przycisk na stronie. Wielojęzyczny. Responsywny.',
				},
				fiveMinutes: {
					title: '5 minut do startu',
					description: 'Działa z każdym CMS-em—WordPress, Shopify, Webflow lub dowolną stroną. Wystarczy wkleić jeden skrypt i gotowe. Bez skomplikowanych instalacji.',
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
					description: 'Ochrona przed osobami łamiącymi prawo. Izolacja danych. Profesjonalna infrastruktura.',
				},
			},
		},
		howItWorks: {
			title: 'Integracja w 3 minuty!',
			subtitle: 'Prosto. Szybko. Bez komplikacji.',
			steps: {
				createAccount: {
					title: 'Załóż konto',
					description: 'Rejestracja w minutę',
				},
				addSite: {
					title: 'Dodaj stronę',
					description: 'Możesz skonfigurować dowolną liczbę witryn',
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
		howItWorksDetailed: {
			title: 'Jak to działa?',
			steps: [
				'Twoja strona ma od teraz zintegrowany przycisk do zgłaszania nielegalnych treści.',
				'Gdy jakiś odwiedzający widzi treść, która nie powinna tam być, klika ten przycisk',
				'Wyświetla mu się okienko z formularzem zgłaszania treści, zgłaszający określa jaki to jest rodzaj naruszenia (wybierając jedną z opcji, zgodnie z założeniami DSA), może podać swój adres email, jeśli chce być poinformowany o wyniku zgłoszenia',
				'Od razu po zgłoszeniu, trafia ono do panelu, a Ty jesteś powiadamiany o tym emailem',
				'Weryfikujesz zgłoszenie i jeśli jest ono słuszne, usuwasz problematyczną treść',
				'Jeśli tego nie zrobisz, będziemy ci przypominać o prawnej konieczności zareagowania, nie przegapisz żadnego terminu',
				'Po zakończeniu procesu moderacji przygotowany zostanie automatyczny raport potwierdzający Twoje wywiązanie się z prawnych obowiązków',
			],
			benefits: {
				title: 'Co zyskujesz?',
				items: [
					'Bez opcji zgłoszenia do właściciela strony, odwiedzający zgłosi to do organów państwowych, co rozpocznie prawne procedury i dochodzenie. DSA wymaga posiadanie procedur wewnętrznych do obsługi takich zgłoszeń, a tymczasem władze kontrolne właśnie się dowiedziały, że nic takiego nie masz - to może oznaczać odpowiedzialność finansową',
					'Nawet jeśli odwiedzający zgłosi to do prokuratury, jesteś kryty: przeprowadziłeś weryfikację zgłoszenia, zareagowałeś i masz przygotowany raport. Wymogi zostały spełnione.',
				],
			},
		},
		cta: {
			title: 'Gotowy na spokój?',
			subtitle: 'Dołącz do listy oczekujących i bądź pierwszy, gdy będziemy gotowi',
			discount: 'Zapisz się teraz, aby otrzymać 50% zniżki na pierwsze 6 miesięcy po premierze',
			emailPlaceholder: 'Twój email',
			joinWaitlist: 'Dołącz do listy oczekujących',
		},
		integration: {
			title: 'Działa z każdą platformą',
			subtitle: 'Uniwersalna integracja',
			description: 'NotifyButton działa z każdym CMS-em lub platformą. Wystarczy wkleić jeden skrypt i gotowe.',
			cmsList: ['WordPress', 'Shopify', 'Webflow', 'Własny HTML', 'Dowolny CMS'],
		},
		faq: {
			title: 'Najczęściej zadawane pytania',
			items: [
				{
					question: 'Czy muszę przestrzegać DSA?',
					answer: 'Tak, jeśli na Twojej stronie pojawiają się treści od odwiedzających—choćby komentarze—musisz przestrzegać DSA. Jeśli strona ma wielu redaktorów, NotifyButton pomaga opanować zarządzanie takimi treściami.',
				},
				{
					question: 'Czy będę umiał zainstalować system?',
					answer: 'Oczywiście. Instalacja to dodanie jednej linijki do kodu strony. Oferujemy też gotowe moduły dla popularnych systemów CMS i sklepowych.',
				},
				{
					question: 'Co się stanie jeśli nie zintegruję NotifyButton?',
					answer: 'Wciąż możesz wdrożyć całe wsparcie do moderacji treści we własnym zakresie, ale ten SaaS zdejmuje całe zadanie z użytkownika i skraca ten proces z tygodni do kilku minut.',
				},
				{
					question: 'Co się stanie gdy nie wdrożę procedur moderacyjnych w ramach DSA?',
					answer: 'Możesz liczyć na szczęście, że nigdy nic złego nie stanie się na Twojej stronie. Jednak jeśli pojawią się treści łamiące prawo, a odwiedzający nie będą mieli możliwości zgłoszenia tego do właściciela strony, będą mogli zgłosić to bezpośrednio do prokuratury lub organów ścigania. A to oznacza rozpoczęcie formalnych procedur.',
				},
				{
					question: 'Czy DSA nie dotyczy tylko dużych stron jak Facebook, Instagram lub X?',
					answer: 'DSA powstało z myślą o problemach jakie rodzą te serwisy i ich użytkownicy, ale dotyczy wszystkich stron, sklepów i serwisów w sieci.',
				},
			],
		},
		footer: {
			tagline: 'Twój spokój w zarządzaniu zgłoszeniami',
			copyright: '© 2026 NotifyButton. Wszystkie prawa zastrzeżone.',
		},
		cookieConsent: {
			message: 'Używamy plików cookie aby zrozumieć, jak odwiedzający korzystają ze strony.',
			accept: 'Akceptuję',
			reject: 'Odrzuć',
		},
	},
};
