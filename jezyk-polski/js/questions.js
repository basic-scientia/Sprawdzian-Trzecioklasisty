const CATEGORIES = [
  {
    id: 'ortografia',
    name: 'Ortografia',
    icon: '✏️',
    questions: [
      {
        question: 'Które wyrażenie jest zapisane poprawnie?',
        answers: ['stół', 'stul', 'stuw', 'stóf'],
        correct: 0,
        explanation: 'Poprawnie piszemy "stół" przez ó z kreską. Wyraz ten zapamiętujemy: "stół" - "stoły" (zmienia się na o).'
      },
      {
        question: 'Które słowo zapisujemy przez "rz"?',
        answers: ['kóło', 'morze', 'kura', 'pomidor'],
        correct: 1,
        explanation: '"Morze" piszemy przez "rz". Zasada: rz piszemy, gdy w innych formach wymienia się na r (morze - morski).'
      },
      {
        question: 'Które słowo zapisujemy przez "ch"?',
        answers: ['hata', 'chleb', 'herbata', 'hak'],
        correct: 1,
        explanation: '"Chleb" piszemy przez "ch". Ch piszemy na końcu wyrazów (z wyjątkiem "druh") oraz w wielu wyrazach podstawowych.'
      },
      {
        question: 'Który wyraz jest poprawnie napisany?',
        answers: ['żaba', 'rzaba', 'zaba', 'żabba'],
        correct: 0,
        explanation: '"Żaba" piszemy przez "ż". Ż piszemy, gdy w innych formach wymienia się na g, dz, h, s, z (żaba - żabka).'
      },
      {
        question: 'Uzupełnij: "b_dzie" – którą literę wstawić?',
        answers: ['e', 'ę', 'ą', 'a'],
        correct: 1,
        explanation: 'Poprawnie: "będzie" przez "ę". Zasada: w czasie przyszłym czasownika "być" piszemy "ę" - będzie.'
      },
      {
        question: 'Które słowo napiszemy przez "u"?',
        answers: ['krzesełko', 'kłódka', 'kura', 'wóz'],
        correct: 2,
        explanation: '"Kura" piszemy przez "u". U piszemy w zakończeniach -un, -unek, -uchna, -ula, -ulec oraz w wielu wyrazach.'
      },
      {
        question: 'Poprawny zapis to:',
        answers: ['dźwig', 'dzwig', 'dżwig', 'dźwink'],
        correct: 0,
        explanation: '"Dźwig" piszemy przez "dź". Dź to zmiękczenie, które występuje przed spółgłoskami.'
      },
      {
        question: 'Która para wyrazów jest poprawnie zapisana?',
        answers: ['idą i idom', 'idą i idą', 'idom i idom', 'idą i ido'],
        correct: 1,
        explanation: 'Obie formy: "idą" i "idą" są poprawne (oni idą, one idą). Czasownik iść w 3 osobie liczby mnogiej.'
      },
      {
        question: 'Uzupełnij: "wi_wiat" – którą literę wstawić?',
        answers: ['e', 'ą', 'a', 'ę'],
        correct: 2,
        explanation: 'Poprawnie: "wiatr". Piszemy przez "a", a nie "ę". Wiatr to zjawisko atmosferyczne.'
      },
      {
        question: 'Który wyraz piszemy przez "h"?',
        answers: ['chomik', 'hak', 'chleb', 'chmura'],
        correct: 1,
        explanation: '"Hak" piszemy przez "h". H piszemy w wyrazach obcego pochodzenia oraz gdy wymienia się na g, ż, z (hak - hakowy).'
      },
      {
        question: 'Poprawny zapis liczby 5 w zeszycie to:',
        answers: ['pińć', 'pięć', 'pieńć', 'pieć'],
        correct: 1,
        explanation: 'Poprawnie: "pięć". W języku polskim zapisujemy przez "ę", a wymawiamy miękko.'
      },
      {
        question: 'Który wyraz kończy się na "-ów"?',
        answers: ['krakow', 'Kraków', 'krakóf', 'Krakow'],
        correct: 1,
        explanation: '"Kraków" piszemy przez "ó" z kreską. Nazwy miast często kończą się na -ów (Kraków, Wrocław, Gdańsk).'
      }
    ]
  },
  {
    id: 'czescimowy',
    name: 'Części mowy',
    icon: '📚',
    questions: [
      {
        question: 'Jaka to część mowy: "pies"?',
        answers: ['Czasownik', 'Rzeczownik', 'Przymiotnik', 'Przysłówek'],
        correct: 1,
        explanation: '"Pies" to rzeczownik. Rzeczowniki odpowiadają na pytania: kto? co? (pies, kot, dom).'
      },
      {
        question: 'Jaka to część mowy: "biegać"?',
        answers: ['Rzeczownik', 'Czasownik', 'Przymiotnik', 'Zaimek'],
        correct: 1,
        explanation: '"Biegać" to czasownik. Czasowniki odpowiadają na pytanie: co robić? co robi? (biegać, skakać, myśleć).'
      },
      {
        question: 'Jaka to część mowy: "piękny"?',
        answers: ['Czasownik', 'Rzeczownik', 'Przymiotnik', 'Przysłówek'],
        correct: 2,
        explanation: '"Piękny" to przymiotnik. Przymiotniki odpowiadają na pytania: jaki? jaka? jakie? (piękny, duży, mały).'
      },
      {
        question: 'Wskaż rzeczownik w zdaniu: "Kasia ma piękną lalkę."',
        answers: ['ma', 'piękną', 'Kasia', 'ma piękną'],
        correct: 2,
        explanation: '"Kasia" i "lalkę" to rzeczowniki. Kasia odpowiada na pytanie "kto?", a lalkę na pytanie "co?".'
      },
      {
        question: 'Wskaż czasownik w zdaniu: "Tomek czyta ciekawą książkę."',
        answers: ['Tomek', 'ciekawą', 'książkę', 'czyta'],
        correct: 3,
        explanation: '"Czyta" to czasownik. Mówi o tym, co robi Tomek.'
      },
      {
        question: 'Jaka to część mowy: "szybko"?',
        answers: ['Przymiotnik', 'Czasownik', 'Rzeczownik', 'Przysłówek'],
        correct: 3,
        explanation: '"Szybko" to przysłówek. Przysłówki odpowiadają na pytanie: jak? (szybko, wolno, pięknie).'
      },
      {
        question: 'Które słowo jest przymiotnikiem?',
        answers: ['drzewo', 'wysoki', 'śpiewa', 'ładnie'],
        correct: 1,
        explanation: '"Wysoki" to przymiotnik. Odpowiada na pytanie "jaki?" (wysoki, niski, gruby).'
      },
      {
        question: 'Wskaż rzeczownik w liczbie mnogiej:',
        answers: ['dom', 'domy', 'domowy', 'domku'],
        correct: 1,
        explanation: '"Domy" to rzeczownik w liczbie mnogiej. Liczba mnoga oznacza więcej niż jeden.'
      },
      {
        question: 'Wskaż przymiotnik w liczbie pojedynczej:',
        answers: ['mądrzy', 'mądry', 'mądre', 'mądrych'],
        correct: 1,
        explanation: '"Mądry" to przymiotnik w liczbie pojedynczej rodzaju męskiego (mądry chłopiec).'
      },
      {
        question: 'Które zdanie zawiera rzeczownik, czasownik i przymiotnik?',
        answers: ['Pada deszcz.', 'Mama gotuje.', 'Mały kot śpi.', 'Szybko biegł.'],
        correct: 2,
        explanation: '"Mały kot śpi" zawiera: przymiotnik (mały), rzeczownik (kot) i czasownik (śpi).'
      },
      {
        question: 'Jaka to część mowy: "o", "w", "na", "pod"?',
        answers: ['Spójnik', 'Przyimek', 'Zaimek', 'Przysłówek'],
        correct: 1,
        explanation: '"O", "w", "na", "pod" to przyimki. Łączą się z rzeczownikami i określają relacje przestrzenne.'
      },
      {
        question: 'Czasownik "czytam" jest w liczbie:',
        answers: ['Pojedynczej', 'Mnogiej', 'Podwójnej', 'Żadnej'],
        correct: 0,
        explanation: '"Czytam" to czasownik w liczbie pojedynczej (ja czytam). Liczba mnoga: czytamy (my czytamy).'
      }
    ]
  },
  {
    id: 'czytanie',
    name: 'Czytanie ze zrozumieniem',
    icon: '📖',
    questions: [
      {
        question: '"Ania poszła do sklepu kupić bułki. Wzięła portfel i listę zakupów." – Po co Ania wzięła listę?',
        answers: ['Żeby się nie zgubić', 'Żeby pamiętać, co kupić', 'Żeby zapisać adres', 'Żeby narysować obrazek'],
        correct: 1,
        explanation: 'Ania wzięła listę zakupów, żeby pamiętać, co ma kupić. Lista pomaga nie zapomnieć rzeczy do kupienia.'
      },
      {
        question: '"Był piękny, słoneczny poranek. Ptaki śpiewały wesoło na drzewach." – Jaka była pogoda?',
        answers: ['Padał deszcz', 'Było pochmurno', 'Było słonecznie i pięknie', 'Wiał silny wiatr'],
        correct: 2,
        explanation: 'Tekst mówi, że był "piękny, słoneczny poranek" - czyli pogoda była ładna i słoneczna.'
      },
      {
        question: '"Mama upiekła ciasto. Kasia i Tomek nakryli do stołu. Tato zaparzył herbatę." – Kto upiekł ciasto?',
        answers: ['Kasia', 'Tomek', 'Mama', 'Tato'],
        correct: 2,
        explanation: 'Z tekstu: "Mama upiekła ciasto." To mama upiekła ciasto, a dzieci nakryły do stołu.'
      },
      {
        question: '"Pies Rufi ma brązową sierść i białe łapy. Lubi biegać po parku i aportować patyki." – Jakiego koloru są łapy Rufiego?',
        answers: ['Brązowego', 'Białego', 'Czarnego', 'Szarego'],
        correct: 1,
        explanation: 'Tekst mówi: "Rufi ma brązową sierść i białe łapy" - łapy są białe.'
      },
      {
        question: '"Wczoraj byliśmy z klasą w zoo. Widzieliśmy słonia, żyrafę i małpy. Najbardziej podobały mi się małpy, bo były bardzo zabawne." – Co najbardziej podobało się autorowi?',
        answers: ['Słoń', 'Żyrafa', 'Małpy', 'Zoo'],
        correct: 2,
        explanation: 'Autor napisał: "Najbardziej podobały mi się małpy, bo były bardzo zabawne."'
      },
      {
        question: '"Ola ma 8 lat. Jej brat Piotrek jest o 3 lata starszy." – Ile lat ma Piotrek?',
        answers: ['8', '10', '11', '5'],
        correct: 2,
        explanation: 'Ola ma 8 lat, Piotrek jest o 3 lata starszy: 8 + 3 = 11. Piotrek ma 11 lat.'
      },
      {
        question: '"Zima to moja ulubiona pora roku. Lubię lepić bałwana i jeździć na sankach. Najbardziej lubię, gdy pada śnieg." – Którą porę roku lubi autor?',
        answers: ['Wiosnę', 'Lato', 'Jesień', 'Zimę'],
        correct: 3,
        explanation: 'Autor mówi wprost: "Zima to moja ulubiona pora roku." Lubi zimę.'
      },
      {
        question: '"W koszyku było 10 jabłek. Mama dała Jackowi 3 jabłka, a Zosi 2 jabłka." – Ile jabłek zostało w koszyku?',
        answers: ['3', '4', '5', '6'],
        correct: 2,
        explanation: 'Było 10 jabłek. Jacek dostał 3, Zosia dostała 2. Razem dali: 3 + 2 = 5. Zostało: 10 - 5 = 5 jabłek.'
      },
      {
        question: '"Niedźwiedź brunatny zapada w sen zimowy. Przed zimą dużo je, żeby zgromadzić zapas tłuszczu." – Dlaczego niedźwiedź dużo je przed zimą?',
        answers: ['Bo lubi jeść', 'Żeby mieć zapas tłuszczu na zimę', 'Bo jest głodny', 'Żeby schudnąć'],
        correct: 1,
        explanation: 'Tekst wyjaśnia: "Przed zimą dużo je, żeby zgromadzić zapas tłuszczu." Dzięki temu przetrwa zimę.'
      },
      {
        question: '"W bibliotece panuje cisza. Można wypożyczyć książki na dwa tygodnie. Wypożyczone książki trzeba oddać w terminie." – Na jak długo można wypożyczyć książkę?',
        answers: ['Na tydzień', 'Na dwa tygodnie', 'Na miesiąc', 'Na zawsze'],
        correct: 1,
        explanation: 'Tekst: "Można wypożyczyć książki na dwa tygodnie." Tyle trwa okres wypożyczenia.'
      },
      {
        question: '"Ela ma trzy koty: burego, czarnego i rudego. bury kot ma na imię Puszek." – Ile kotów ma Ela?',
        answers: ['Jednego', 'Dwa', 'Trzy', 'Cztery'],
        correct: 2,
        explanation: 'Tekst: "Ela ma trzy koty: burego, czarnego i rudego." Ela ma trzy koty.'
      },
      {
        question: '"Wiosną wszystko budzi się do życia. Na drzewach pojawiają się zielone listki, kwitną kwiaty, a ptaki wracają z ciepłych krajów." – Które ptaki wracają wiosną?',
        answers: ['Wróble', 'Gołębie', 'Bociany', 'Sowy'],
        correct: 2,
        explanation: 'Choć tekst nie mówi wprost, z kontekstu wiemy, że bociany wracają wiosną z ciepłych krajów (z Afryki).'
      }
    ]
  },
  {
    id: 'slowa',
    name: 'Słowa i wyrazy',
    icon: '💬',
    questions: [
      {
        question: 'Które słowo jest synonimem (znaczy to samo co) słowa "dom"?',
        answers: ['mieszkanie', 'samochód', 'drzewo', 'książka'],
        correct: 0,
        explanation: '"Mieszkanie" jest synonimem słowa "dom" - oba oznaczają miejsce, w którym się mieszka.'
      },
      {
        question: 'Które słowo jest przeciwieństwem (antonimem) słowa "wysoki"?',
        answers: ['duży', 'mały', 'niski', 'gruby'],
        correct: 2,
        explanation: 'Przeciwieństwem "wysokiego" jest "niski". Wysoki i niski to antonimy (wyrazy przeciwstawne).'
      },
      {
        question: 'Który wyraz jest wyrazem pokrewnym do "las"?',
        answers: ['laser', 'leśny', 'list', 'laska'],
        correct: 1,
        explanation: '"Leśny" jest wyrazem pokrewnym do "las" (leśny znaczy "związany z lasem"). Mają wspólną rodzinę: las, leśny, leśnik.'
      },
      {
        question: 'Które słowo jest zdrobnieniem od "kot"?',
        answers: ['kotwica', 'kociak', 'kotek', 'kotara'],
        correct: 2,
        explanation: '"Kotek" to zdrobnienie od "kot". Zdrobnienia mówią o czymś małym lub wyrażają czułość (kot → kotek).'
      },
      {
        question: 'Znajdź wyraz, który nie pasuje do pozostałych:',
        answers: ['pływa', 'płynie', 'pływak', 'płot'],
        correct: 3,
        explanation: '"Płot" nie pasuje, bo pozostałe wyrazy: pływa, płynie, pływak - pochodzą od słowa "pływać".'
      },
      {
        question: 'Jaki jest antonim (przeciwieństwo) słowa "ciepło"?',
        answers: ['gorąco', 'zimno', 'mokro', 'sucho'],
        correct: 1,
        explanation: 'Przeciwieństwem "ciepło" jest "zimno". Ciepło i zimno to przeciwne temperatury.'
      },
      {
        question: 'Które wyrazy są synonimami (znaczą to samo)?',
        answers: ['duży i mały', 'szybki i wolny', 'smutny i wesoły', 'ładny i piękny'],
        correct: 3,
        explanation: '"Ładny" i "piękny" znaczą to samo (są synonimami). Pozostałe pary to antonimy (przeciwieństwa).'
      },
      {
        question: 'Który wyraz jest w liczbie pojedynczej?',
        answers: ['kotki', 'domy', 'stół', 'psy'],
        correct: 2,
        explanation: '"Stół" jest w liczbie pojedynczej (jeden stół). Pozostałe są w liczbie mnogiej: kotki, domy, psy.'
      },
      {
        question: 'Który wyraz ma inną liczbę niż pozostałe?',
        answers: ['kwiaty', 'róże', 'tulipan', 'stokrotki'],
        correct: 2,
        explanation: '"Tulipan" jest w liczbie pojedynczej (jeden), a kwiaty, róże, stokrotki - w liczbie mnogiej (wiele).'
      },
      {
        question: 'Co oznacza wyrażenie "złote serce"?',
        answers: ['Serce ze złota', 'Być dobrym i życzliwym', 'Mieć drogie rzeczy', 'Serce pomalowane na złoto'],
        correct: 1,
        explanation: '"Złote serce" to przenośnia - oznacza osobę bardzo dobrą, życzliwą i pomocną.'
      },
      {
        question: 'Które słowo jest zgrubieniem od "pies"?',
        answers: ['piesek', 'psiak', 'pysio', 'psisko'],
        correct: 3,
        explanation: '"Psisko" to zgrubienie od "pies" (wyraża coś dużego lub brzydkiego). Zdrobnienie: piesek, psiaczek.'
      },
      {
        question: 'Znajdź wyraz, który ma najwięcej liter:',
        answers: ['słoń', 'dzięcioł', 'kot', 'mysz'],
        correct: 1,
        explanation: '"Dzięcioł" ma 8 liter (d, z, i, ę, c, i, o, ł). Pozostałe: słoń - 4, kot - 3, mysz - 4.'
      }
    ]
  },
  {
    id: 'gramatyka',
    name: 'Gramatyka i pisanie',
    icon: '📝',
    questions: [
      {
        question: 'Które zdanie jest napisane poprawnie?',
        answers: ['ala ma kota', 'Ala ma kota.', 'Ala ma kotą', 'ala ma kota.'],
        correct: 1,
        explanation: 'Poprawnie: "Ala ma kota." Imię piszemy wielką literą, na końcu zdania stawiamy kropkę.'
      },
      {
        question: 'Które zdanie jest rozkazujące?',
        answers: ['Idę do szkoły.', 'Posprzątaj pokój!', 'Czy lubisz czekoladę?', 'Pada deszcz.'],
        correct: 1,
        explanation: '"Posprzątaj pokój!" to zdanie rozkazujące. Wyraża rozkaz lub prośbę, kończy się wykrzyknikiem.'
      },
      {
        question: 'Które zdanie jest pytające?',
        answers: ['Mam psa.', 'Która jest godzina?', 'Uważaj!', 'Idź spać.'],
        correct: 1,
        explanation: '"Która jest godzina?" to zdanie pytające. Zadaje pytanie i kończy się znakiem zapytania.'
      },
      {
        question: 'Ile zdań jest w tym tekście: "Mama poszła do sklepu. Kasia została w domu. Zrobiła herbatę."',
        answers: ['1', '2', '3', '4'],
        correct: 2,
        explanation: 'Są 3 zdania: 1. Mama poszła do sklepu. 2. Kasia została w domu. 3. Zrobiła herbatę.'
      },
      {
        question: 'Którą wielką literą piszemy nazwy miast?',
        answers: ['Małą', 'Wielką', 'Taką jak w środku zdania', 'Dowolną'],
        correct: 1,
        explanation: 'Nazwy miast piszemy wielką literą (Warszawa, Kraków, Gdańsk). To nazwy własne.'
      },
      {
        question: 'Uzupełnij: "Dzień dobry, _ _ _ _ _ _ ?" – czego brakuje w liście?',
        answers: ['Kropki', 'Przecinka', 'Znaku zapytania', 'Wykrzyknika'],
        correct: 2,
        explanation: 'Po powitaniu w liście często zadajemy pytanie, dlatego potrzebny jest znak zapytania (?).'
      },
      {
        question: 'Który znak interpunkcyjny stawiamy na końcu zdania oznajmującego?',
        answers: ['?', '!', '.', ','],
        correct: 2,
        explanation: 'Na końcu zdania oznajmującego stawiamy kropkę (.). Zdanie oznajmujące coś stwierdza.'
      },
      {
        question: 'Które wyrazy piszemy wielką literą?',
        answers: ['Nazwy zwierząt', 'Imiona i nazwiska', 'Nazwy rzeczy', 'Nazwy roślin'],
        correct: 1,
        explanation: 'Imiona (Ala, Tomek) i nazwiska (Kowalski, Nowak) piszemy wielką literą.'
      },
      {
        question: 'Która para to poprawny zapis daty?',
        answers: ['1 maja 2024', '1 Maj 2024', 'pierwszy Maja', 'jeden.05.2024'],
        correct: 0,
        explanation: 'Poprawny zapis daty: "1 maja 2024 roku". Miesiąc piszemy małą literą.'
      },
      {
        question: 'Które zdanie jest poprawne?',
        answers: ['Tomek i Ala idom do kina.', 'Tomek i Ala idą do kina.', 'Tomek i Ala idzie do kina.', 'Tomek i Ala idą do kino.'],
        correct: 1,
        explanation: 'Poprawnie: "Tomek i Ala idą do kina." Czasownik "idą" jest w 3 osobie liczby mnogiej, a "kino" w dopełniaczu: do kina.'
      },
      {
        question: 'Ile wyrazów ma to zdanie: "Mama kupiła w sklepie świeże bułki."?',
        answers: ['4', '5', '6', '7'],
        correct: 2,
        explanation: 'Zdanie ma 6 wyrazów: Mama, kupiła, w, sklepie, świeże, bułki. Liczymy każde słowo oddzielnie.'
      },
      {
        question: 'Które słowo jest przysłówkiem?',
        answers: ['głośny', 'głośno', 'głośnik', 'głoś'],
        correct: 1,
        explanation: '"Głośno" to przysłówek. Odpowiada na pytanie "jak?" (mówić głośno). Głośny to przymiotnik.'
      }
    ]
  },
  {
    id: 'lektury',
    name: 'Lektury i bajki',
    icon: '🌟',
    questions: [
      {
        question: 'Kto napisał "Kubusia Puchatka"?',
        answers: ['Jan Brzechwa', 'Alan Alexander Milne', 'Julian Tuwim', 'Maria Konopnicka'],
        correct: 1,
        explanation: '"Kubusia Puchatka" napisał Alan Alexander Milne. To angielski pisarz, a książkę przetłumaczyła Irena Tuwim.'
      },
      {
        question: 'W "Akademii Pana Kleksa" główny bohater to:',
        answers: ['Adaś Niezgódka', 'Kubuś Puchatek', 'Pan Kleks', 'Doktor Dolittle'],
        correct: 0,
        explanation: 'Głównym bohaterem "Akademii Pana Kleksa" Jana Brzechwy jest Adaś Niezgódka.'
      },
      {
        question: 'Którą baśń napisał Hans Christian Andersen?',
        answers: ['Kopciuszek', 'Brzydkie Kaczątko', 'Czerwony Kapturek', 'Królewna Śnieżka'],
        correct: 1,
        explanation: '"Brzydkie Kaczątko" napisał Hans Christian Andersen. To baśń o kaczątku, które zamieniło się w pięknego łabędzia.'
      },
      {
        question: 'Jak miała na imię dziewczynka z baśni "Czerwony Kapturek"?',
        answers: ['Jaś', 'Czerwony Kapturek', 'Babi', 'Nie miała imienia'],
        correct: 1,
        explanation: 'Dziewczynka nazywała się "Czerwony Kapturek", bo zawsze nosiła czerwony kapturek podarowany przez babcię.'
      },
      {
        question: 'Kto napisał wiersz "Lokomotywa"?',
        answers: ['Maria Konopnicka', 'Julian Tuwim', 'Jan Brzechwa', 'Adam Mickiewicz'],
        correct: 1,
        explanation: '"Lokomotywę" napisał Julian Tuwim. To jeden z najbardziej znanych wierszy dla dzieci: "Stoi na stacji lokomotywa..."'
      },
      {
        question: 'W baśni "Kopciuszek" dziewczyna zgubiła na balu:',
        answers: ['Torebkę', 'Sukienkę', 'Szklany pantofelek', 'Naszyjnik'],
        correct: 2,
        explanation: 'Kopciuszek zgubił na balu szklany pantofelek. Książę odnalazł go i dzięki niemu znalazł Kopciuszka.'
      },
      {
        question: 'Kto napisał wiersz "Na straganie"?',
        answers: ['Julian Tuwim', 'Jan Brzechwa', 'Maria Konopnicka', 'Wanda Chotomska'],
        correct: 1,
        explanation: '"Na straganie" napisał Jan Brzechwa. To wiersz o warzywach rozmawiających na straganie.'
      },
      {
        question: 'Jak nazywał się sowa z "Kubusia Puchatka"?',
        answers: ['Kłapouchy', 'Puchatek', 'Sowa Mądrala', 'Królik'],
        correct: 2,
        explanation: 'Sowa z "Kubusia Puchatka" nazywa się Sowa Mądrala. Uważała się za najmądrzejszą w Stumilowym Lesie.'
      },
      {
        question: 'W "Doktorze Dolittle" główny bohater rozmawia z:',
        answers: ['Ludźmi', 'Zwierzętami', 'Robotami', 'Kwiatami'],
        correct: 1,
        explanation: 'Doktor Dolittle potrafił rozmawiać ze zwierzętami. Rozumiał ich język i leczył je.'
      },
      {
        question: 'Która baśń kończy się słowami: "i żyli długo i szczęśliwie"?',
        answers: ['Brzydkie Kaczątko', 'Kopciuszek', 'Calineczka', 'Księżniczka na Ziarnku Grochu'],
        correct: 1,
        explanation: '"I żyli długo i szczęśliwie" to typowe zakończenie baśni, m.in. "Kopciuszka" i "Królewny Śnieżki".'
      },
      {
        question: 'Który utwór napisał Jan Brzechwa?',
        answers: ['Lokomotywa', 'Kopciuszek', 'Kaczka Dziwaczka', 'Kubuś Puchatek'],
        correct: 2,
        explanation: '"Kaczka Dziwaczka" napisał Jan Brzechwa. To zabawny wiersz o nietypowej kaczce.'
      },
      {
        question: 'Przyjaciel Mikołajka z książek René Goscinny\'ego to:',
        answers: ['Kubuś', 'Alcest', 'Pan Kleks', 'Kłapouchy'],
        correct: 1,
        explanation: 'Alcest to przyjaciel Mikołajka z serii książek René Goscinny\'ego. Alcest lubi dużo jeść.'
      }
    ]
  }
];
