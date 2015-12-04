var mentalApp = angular.module('mentalApp', ['ngRoute', 'ui.bootstrap', 'pascalprecht.translate']);

mentalApp.constant(
		'CustomersList', [
			{url: 'http://www.buldoza.gr/', src: '../img/customers/1.buldoza.jpg' , descr: 'Buldoza'},
			{url: 'http://www.pieralisi.com/gr/', src: '../img/customers/2. Pieralisi.png' , descr: 'Pieralisi'},
			{url: 'http://www.moosend.com/', src: '../img/customers/3. moosend.jpg' , descr: 'Moosend'},
			{url: 'http://www.k-studio.gr/', src: '../img/customers/4. k-studio.png' , descr: 'K-Studio'},
			{url: 'http://www.regency.gr/', src: '../img/customers/5. regency.gif' , descr: 'Regency'},
			{url: 'http://www.oe-e.gr/oe/', src: '../img/customers/7. OEE.png' , descr: 'OEE'},
			{url: 'http://www.epsilonnet.gr/', src: '../img/customers/8. epsilonnet.jpg' , descr: 'EpsilonNet'},
			{url: 'http://www.e-forologia.gr/', src: '../img/customers/9. eforologia .png' , descr: 'e-forologia'},
			{url: 'http://www.taxheaven.gr/', src: '../img/customers/10. taxheaven.png' , descr: 'Tax Heaven'},
			{url: 'http://www.obe.gr/', src: '../img/customers/11. OBE.jpg' , descr: 'OBE'},
			{url: 'http://www.ebna.gr/', src: '../img/customers/12. ebna.png' , descr: 'EBNA'},
			{url: 'http://www.eexot.gr/', src: '../img/customers/13. eexot.png' , descr: 'EEXOT'},
			{url: 'http://www.laskaridou.gr/', src: '../img/customers/14.IAL.png' , descr: 'Laskaridou'},
			{url: 'http://www.stsmarine.gr/', src: '../img/customers/15. sts marine.jpg' , descr: 'STS Marine'},
			{url: 'http://www.stsmarine.gr/', src: '../img/customers/16. sts academy.jpg' , descr: 'STS Academy'},
			{url: 'http://www.safety.gr/', src: '../img/customers/17. safetymanagement.jpg' , descr: 'Safety Management'},
			{url: 'http://www.coralenergy.gr/', src: '../img/customers/18. coral gas.jpg' , descr: 'Coral Gas'},
			{url: 'http://www.likinia.gr/', src: '../img/customers/19. likinia hotel.jpg' , descr: 'Likinia Hotel'},
			{url: 'http://www.verawang.com/', src: '../img/customers/20. Vera Wang.jpg' , descr: 'Vera Wang'},
	    ]
);

mentalApp.constant(
		'CompanySkillsList', [
			{ alignment: '', 		 icon: 'skillsimage1', heading: 'Κάνοντας πράξη την ευελιξία', 		text: 'για την ικανοποίηση των παραπάνω αναγκών των πελατών μας, λειτουργούμε με τρία συνεργαζόμενα αλλά διακριτά τμήματα παροχής υπηρεσιών (Λογιστικό – Φοροτεχνικό/Συμβουλευτικό και Μελετητικό), γεγονός που επιτρέπει στους έμπειρους συνεργάτες μας να δραστηριοποιούνται συστηματικά στον τομέα ειδίκευσής τους, ενώ παράλληλα να έχουν άμεσα τη δυνατότητα στενής συνεργασίας με τους συναδέλφους τους από άλλες ειδικότητες, όταν και όποτε αυτό απαιτείται.' },
			{ alignment: 'inverted', icon: 'skillsimage2', heading: 'Με το παραπάνω σχήμα συνέργειας', 	text: 'προσφέρουμε ολοκληρωμένες υπηρεσίες, εξατομικευμένες συμβουλές και εμπεριστατωμένες λύσεις, πάντα με γνώμονα την επίτευξη ουσιαστικών και μετρήσιμων, θετικών αποτελεσμάτων για τον πελάτη.' },
			{ alignment: '', 		 icon: 'skillsimage3', heading: 'Στοχεύουμε στρατηγικά', 			text: 'όχι μόνο στην επίλυση των όποιων προβλημάτων αντιμετωπίζουν οι επιχειρήσεις σήμερα, αλλά και στην ανάδειξη και αξιοποίηση νέων ευκαιριών που πιθανόν να βρίσκονται μέσα στην ίδια την επιχειρηματική οντότητα, τo τοπικό ή και το διεθνές περιβάλλον στο οποίο αυτή δραστηριοποιείται.' },
			{ alignment: 'inverted', icon: 'skillsimage4', heading: 'Με γνώμονα πάντα τις ανάγκες',		text: 'της εκάστοτε επιχείρησης και εφαλτήριο τον υψηλό επαγγελματισμό, την κατάρτιση και την εμπειρία μας, τα τελευταία 15 χρόνια διασφαλίζουμε την απόλυτη ικανοποίηση των πελατών μας, καθώς και την επιτυχή ολοκλήρωση του συνόλου των έργων τα οποία αναλαμβάνουμε.' },
	    ]
);

mentalApp.constant(
		'ArticlesList', [
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/capitaltax/3051044/agrotiko-kai-epixeirimatiko-eisodima', title: 'Αγροτικό και επιχειρηματικό εισόδημα', shortdescr: 'Συνεχίζουμε τη θεματολογία του  πρακτικού οδηγού μας, με σκοπό να συμβάλει και να βοηθήσει στην ορθή υποβολή ...'},
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/story/3048711', title: 'Τα βασικά της φορολογικής δήλωσης', shortdescr: 'Καθώς λιγοστεύει ο χρόνος που απομένει μέχρι την καταληκτική ημερομηνία της προθεσμίας των δηλώσεων ...'},			
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/capitaltax/3050079/apantiste-sosta-stis-erotiseis-tis-dilosis', title: 'Απαντήστε σωστά στις ερωτήσεις της δήλωσης', shortdescr: 'Πως θα απαντήσετε στις ερωτήσεις, του πρώτου, του δεύτερου και του τρίτου πίνακα της φορολογικής δήλωσης ...'},
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/capitaltax/3050772/pos-dilonontai-ta-eisodimata', title: 'Πως δηλώνονται τα εισοδήματα', shortdescr: 'Συνεχίζουμε τη θεματολογία του πρακτικού οδηγού, με σκοπό να συμβάλει και να βοηθήσει στην ορθή υποβολή της δήλωσης ...'},
			
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/tax/3058537/merismata-esoterikou-kai-exoterikou', title: 'Μερίσματα εσωτερικού και εξωτερικού', shortdescr: 'Το Capital.gr και ο φοροτεχνικός κ. Γιώργος Χριστόπουλος απαντούν σήμερα σε νέα ερωτήματα των αναγνωστών αναφορικά ...'},
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/tax/3057539/peristasiaki-apasxolisi-kai-aneisprakta-enoikia', title: 'Περιστασιακή απασχόληση και ανείσπρακτα ενοίκια', shortdescr: 'Το Capital.gr και ο φοροτεχνικός κος Γιώργος Χριστόπουλος δίνουν απαντήσεις σε κρίσιμα ερωτήματα για τη συμπλήρωση της φορολογικής δήλωσης ...'},
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/tax/3056369/pos-forologountai-mplokakia-enoikia-katoikoi-exoterikou', title: 'Πως φορολογούνται μπλοκάκια, ενοίκια, κάτοικοι εξωτερικού', shortdescr: 'Το Capital.gr και ο φοροτεχνικός κος Γιώργος Χριστόπουλος απαντούν σε ερωτήσεις των αναγνωστών αναφορικά με τον τρόπο φορολόγηση των μισθωτών με "μπλοκάκι" ...'},
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/tax/3056046/pos-upologizei-tin-apotamieusi-i-eforia', title: 'Πως υπολογίζει την αποταμίευση η εφορία', shortdescr: 'Το Capital.gr και ο φοροτεχνικός κος Γιώργος Χριστόπουλος απαντούν σήμερα στα ερωτήματα των αναγνωστών αναφορικά με τον υπολογισμό των κεφαλαίων ...'},
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/tax/3055711/pos-dilonetai-i-uperaxia-apo-xreografa-kai-paragoga', title: 'Πως δηλώνεται η υπεραξία από χρεόγραφα και παράγωγα', shortdescr: 'Νέες απαντήσεις σε ερωτήσεις των αναγνωστών του Capital.gr για τον τρόπο που δηλώνεται η υπεραξία από χρεόγραφα ...'},
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/tax/3055401/pos-tha-dilosete-ta-eisodimata-gia-na-apofugete-pagides-lathi', title: 'Πώς θα δηλώσετε τα εισοδήματα για να αποφύγετε παγίδες-λάθη', shortdescr: 'To Capital.gr και ο φοροτεχνικός κ. Γιώργος Χριστόπουλος ξεκινούν από σήμερα τις απαντήσεις στα ερωτήματα των αναγνωστών ...'},
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/tax/3054839/pos-dilonetai-to-eisodima-apo-akinita', title: 'Πως δηλώνεται το εισόδημα από ακίνητα', shortdescr: 'Το Capital.gr και ο κ Γιώργος Χριστόπουλος απαντούν σήμερα σε ερωτήσεις αναγνωστών για τη συμπλήρωση της δήλωσης όσον αφορά το εισόδημα από ακίνητα ...'},
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/tax/3054512/poies-dapanes-meionoun-ton-foro-eisodimatos', title: 'Ποιες δαπάνες μειώνουν τον φόρο εισοδήματος', shortdescr: 'Η εφορία δίνει τη δυνατότητα μείωσης του οφειλόμενου φόρου για δαπάνες που έχει πραγματοποιήσει ο φορολογούμενος, όπως είναι τα ιατρικά έξοδα και οι δωρεές.'},
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/tax/3054506/pos-tha-dilothei-i-uperaxia-metoxon', title: 'Πώς θα δηλωθεί η υπεραξία μετοχών', shortdescr: 'Το Capital.gr και ο φοροτεχνικός Γ. Χριστόπουλος ξεκινούν να απαντούν τις ερωτήσεις των αναγνωστών.'},
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/tax/3053930/pos-kaluptontai-ta-tekmiria', title: 'Πώς καλύπτονται τα τεκμήρια', shortdescr: 'Αποκωδικοποιούμε με συμβουλές όλες τις κρίσιμες λεπτομέρειες και τις τελευταίες οδηγίες της Γ.Γ.Δ.Ε.,κωδικό – κωδικό τον πίνακα 6. "Πρόσθετα πληροφοριακά στοιχεία".'},
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/tax/3053605/i-pagida-ton-tekmirion', title: 'Η παγίδα των τεκμηρίων', shortdescr: 'Πως θα αποφύγετε τις παγίδες των τεκμηρίων. Τι ισχύει για το πόθεν έσχες. Όλες οι κρίσιμες λεπτομέρειες.'},
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/tax/3052594/pos-tha-dilosete-kerdi-apo-metoxes-kai-titlous', title: 'Πως θα δηλώσετε κέρδη από μετοχές και τίτλους', shortdescr: 'Aναλύoυμε και θα αποκωδικοποιούμε με συμβουλές, όλες τις κρίσιμες λεπτομέρειες και τελευταίες οδηγίες της Γ.Γ.Δ.Ε. για τη συμπλήρωση του πίνακα 4Ε: εισόδημα από υπεραξία μεταβίβασης κεφαλαίου.'},
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/tax/3052083/pos-na-apofugete-tis-pagides-sto-eisodima-apo-akinita', title: 'Πως να αποφύγετε τις παγίδες στο εισόδημα από ακίνητα', shortdescr: 'Τι πρέπει να κάνετε για να μην πληρώσετε φόρο για ενοίκια που δεν εισπράξατε.'},
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/tax/3051709/pos-tha-dilothoun-tokoi-kai-dikaiomata', title: 'Πως θα δηλωθούν τόκοι και δικαιώματα', shortdescr: 'Όλες οι κρίσιμες λεπτομέρειες για τα μερίσματα, τους τόκους και τα δικαιώματα. Πως θα δηλωθούν, τι πρέπει να προσέξουμε για να αποφύγουμε τις "παγίδες" της διπλής φορολόγησης.'},
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/tax/3051044/agrotiko-kai-epixeirimatiko-eisodima', title: 'Αγροτικό και επιχειρηματικό εισόδημα', shortdescr: 'Σήμερα στο 5ο μέρος του οδηγού φορολογικών δηλώσεων θα δούμε όλες τις κρίσιμες λεπτομέρειες και τις τελευταίες οδηγίες της Γ.Γ.Δ.Ε.'},
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/tax/3050772/pos-dilonontai-ta-eisodimata', title: 'Πως δηλώνονται τα εισοδήματα', shortdescr: 'Όλες οι λεπτομέρειες για τα εισοδήματα από μισθωτή εργασία και συντάξεις, μισθούς και συντάξεις που αποκτώνται στο εξωτερικό, εισοδήματα από "τα μπλοκάκια", αμοιβές μελών Δ.Σ. Τι πρέπει να προσέξουμε.'},
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/tax/3050079/apantiste-sosta-stis-erotiseis-tis-dilosis', title: 'Απαντήστε σωστά στις ερωτήσεις της δήλωσης', shortdescr: 'Πως θα απαντήσετε στις ερωτήσεις, του πρώτου, του δεύτερου και του τρίτου πίνακα της φορολογικής δήλωσης για να γλιτώσετε φόρο αναλύεται σήμερα στον φορολογικό οδηγό. Οι ερωτήσεις είναι κρίσιμες για τη σωστή εκκαθάριση.'},
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/tax/3049114/poioi-einai-upoxreomenoi-na-upoballoun-dilosi', title: 'Ποιοι είναι υποχρεωμένοι να υποβάλλουν δήλωση', shortdescr: 'Για τρίτη χρονιά, η ηλεκτρονική υποβολή της δήλωσης είναι υποχρεωτική για κάθε φυσικό πρόσωπο, που έχει την κατοικία του στην Ελλάδα ...'},
			{ authorimg: '../img/author_GX.png', authorname: 'Γ. Χριστόπουλος', url: 'http://www.capital.gr/tax/3048711/ta-basika-tis-forologikis-dilosis', title: 'Τα βασικά της φορολογικής δήλωσης', shortdescr: 'Καθώς λιγοστεύει ο χρόνος που απομένει μέχρι την καταληκτική ημερομηνία της προθεσμίας των δηλώσεων, με σκοπό να επαναλάβουμε και φέτος ...'},
	    ]
);


//ANGULAR-TRANSLATE - TRANSLATION (i18n) TABLES
mentalApp.config(function ($translateProvider) {
	  //ENGLISH TRANSLATIONs
	  $translateProvider.translations('gr', {
		  SITE_HEADING : 'Mέντaλ Α.Ε',
		  SITE_SUBHEADER : 'Ολοκληρωμένες Συμβουλευτικές Υπηρεσίες',
		  LANDING_MORE : 'Περισσότερα',

		  NAV_COMPANY : 'Εταιρεία',
		  NAV_SERVICES : 'Υπηρεσίες',
		  NAV_TESTIMONIALS : 'Οι πελάτες μας',
		  NAV_ARTICLES : 'Αρθρογραφία',
		  NAV_COMM : 'Επικοινωνία',
		  
		  HEADER_COMPANY : 'Εταιρεία',
		  HEADER_SERVICES : 'Υπηρεσίες',
		  HEADER_TESTIMONIALS : 'Οι πελάτες μας',
		  HEADER_ARTICLES : 'Αρθρογραφία',
		  HEADER_COMM : 'Επικοινωνία',

	  });

	  //ENGLISH TRANSLATIONs
	  $translateProvider.translations('en', {
		  SITE_HEADING : 'Mental S.A',
		  SITE_SUBHEADER : 'Complete Accounting Solutions',
		  LANDING_MORE : 'More',
		  
		  NAV_COMPANY : 'Company',
		  NAV_SERVICES : 'Services',
		  NAV_TESTIMONIALS : 'Our Customers',
		  NAV_ARTICLES : 'Articles',
		  NAV_COMM : 'Communication',

		  HEADER_COMPANY : 'Our Company',
		  HEADER_SERVICES : 'Our Services',
		  HEADER_TESTIMONIALS : 'Our Customers',
		  HEADER_ARTICLES : 'Articles',
		  HEADER_COMM : 'Contact Us',
	  });

	  //FRENCH TRANSLATIONs
	  $translateProvider.translations('fr', {
		  SITE_HEADING : 'Mental S.A',
		  SITE_SUBHEADER : 'Solutions Complètes de Comptabilité',
		  LANDING_MORE : 'Plus',
		  
		  NAV_COMPANY : 'Entreprise',
		  NAV_SERVICES : 'Services',
		  NAV_TESTIMONIALS : 'Nos clients',
		  NAV_ARTICLES : 'Articles',
		  NAV_COMM : 'Communication',

		  HEADER_COMPANY : 'Notre Entreprise',
		  HEADER_SERVICES : 'Nos Services',
		  HEADER_TESTIMONIALS : 'Nos clients',
		  HEADER_ARTICLES : 'Articles',
		  HEADER_COMM : 'Communication',
	  });
	  
	  //GERMAN TRANSLATIONs
	  $translateProvider.translations('de', {
		  SITE_HEADING : 'Mental S.A',
		  SITE_SUBHEADER : 'Komplette Lösungen für das Rechnungswesen',
		  LANDING_MORE : 'Mehr',
		  
		  NAV_COMPANY : 'Firma',
		  NAV_SERVICES : 'Dienstleistungen',
		  NAV_TESTIMONIALS : 'Unsere Kunden',
		  NAV_ARTICLES : 'Gegenstände',
		  NAV_COMM : 'Kommunikation',

		  HEADER_COMPANY : 'Firma',
		  HEADER_SERVICES : 'Dienstleistungen',
		  HEADER_TESTIMONIALS : 'Unsere Kunden',
		  HEADER_ARTICLES : 'Gegenstände',
		  HEADER_COMM : 'Kommunikation',
	  });
	  
	  //DEFAULT LANGUAGE
	  $translateProvider.preferredLanguage('gr');
});
