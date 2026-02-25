export default {
	nav: {
		title: 'Proxy Buying Tool',
		features: 'Features',
		faq: 'FAQ'
	},
	hero: {
		badge: 'Chrome Extension',
		headingLine1: 'Proxy Buying,',
		headingLine2: 'Faster & Simpler',
		desc: 'No more Excel spreadsheets. Manage order number matching and profit calculation easily with our Chrome extension.',
		addToChrome: 'Add to Chrome'
	},
	features: {
		heading: 'Key Features',
		orderMatching: {
			title: 'Order Matching',
			desc: 'Easily match and manage store order numbers with supplier (AliExpress, etc.) order numbers.',
			li1: 'Quick search & copy',
			li2: 'CSV export / import',
			li3: 'Auto-save in browser'
		},
		profitCalc: {
			title: 'Profit Calculator',
			desc: 'Enter product cost, shipping, exchange rate, and fees to instantly calculate net profit and margin.',
			li1: 'Real-time auto calculation',
			li2: 'Configurable exchange rate & fees',
			li3: 'P&L visualization (green / red)'
		}
	},
	howTo: {
		heading: 'How It Works',
		desc: 'Ready to use right after installation. No sign-up or extra setup required.',
		step1: { title: 'Install Extension', desc: 'One-click install from the Chrome Web Store' },
		step2: { title: 'Enter Orders', desc: 'Input store and supplier order numbers and save' },
		step3: { title: 'Calculate Profit', desc: 'Check profit margin in real time after entering product info' }
	},
	quickLinks: {
		settings: { title: 'Settings', desc: 'Configure exchange rate, fees, and manage CSV data' },
		guide: { title: 'User Guide', desc: 'Check detailed usage tips and instructions' }
	},
	faq: {
		heading: 'Frequently Asked Questions',
		q1: {
			question: 'Where is the data stored?',
			answer:
				"All data is stored in your browser's local storage. It is never sent to a server, keeping your information private and secure."
		},
		q2: {
			question: 'Is it free to use?',
			answer: "Yes, it's completely free. All features are available without any sign-up or payment."
		},
		q3: {
			question: 'Can I export to Excel?',
			answer:
				'Yes, you can export in CSV format from the Settings page, which can be opened directly in Excel. You can also re-import CSV files.'
		},
		q4: {
			question: 'Does it sync across computers?',
			answer:
				'The current version stores data locally per browser. To use on another computer, use the CSV export / import feature.'
		}
	},
	footer: '© 2026 Proxy Buying Tool. A free utility for individual sellers.'
} as const;
