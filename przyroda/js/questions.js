const CATEGORIES = [
  {
    id: 'rosliny',
    name: 'Rośliny',
    icon: '🌻',
    questions: [
      {
        question: 'Która część rośliny znajduje się pod ziemią?',
        answers: ['Liść', 'Łodyga', 'Korzeń', 'Kwiat'],
        correct: 2,
        explanation: 'Korzeń znajduje się pod ziemią. Pobiera wodę i sole mineralne z gleby oraz utrzymuje roślinę w miejscu.'
      },
      {
        question: 'Z czego wyrasta nowa roślina?',
        answers: ['Z kamienia', 'Z nasiona', 'Z wody', 'Z piasku'],
        correct: 1,
        explanation: 'Nowa roślina wyrasta z nasiona. W nasionku znajduje się zarodek rośliny oraz zapas pokarmu.'
      },
      {
        question: 'Które drzewo iglaste zimą ma zielone igły?',
        answers: ['Brzoza', 'Sosna', 'Dąb', 'Klon'],
        correct: 1,
        explanation: 'Sosna to drzewo iglaste, które zimą nie gubi igieł. Drzewa liściaste (brzoza, dąb, klon) zimą są nagie.'
      },
      {
        question: 'Jaki kolor mają liście większości drzew latem?',
        answers: ['Żółty', 'Czerwony', 'Zielony', 'Brązowy'],
        correct: 2,
        explanation: 'Latem liście są zielone dzięki chlorofilowi - barwnikowi niezbędnemu do fotosyntezy.'
      },
      {
        question: 'Która roślina jest warzywem?',
        answers: ['Jabłoń', 'Marchew', 'Róża', 'Sosna'],
        correct: 1,
        explanation: 'Marchew to warzywo. Jemy jej korzeń. Jabłoń to drzewo owocowe, róża to kwiat, sosna to drzewo iglaste.'
      },
      {
        question: 'Co rośliny potrzebują do życia?',
        answers: ['Tylko wody', 'Tylko słońca', 'Wody, słońca i powietrza', 'Tylko ziemi'],
        correct: 2,
        explanation: 'Rośliny do życia potrzebują wody, światła słonecznego, powietrza i składników mineralnych z gleby.'
      },
      {
        question: 'Która część rośliny odpowiada za rozmnażanie?',
        answers: ['Korzeń', 'Łodyga', 'Kwiat', 'Liść'],
        correct: 2,
        explanation: 'Kwiat odpowiada za rozmnażanie rośliny. Z kwiatu powstają owoce, a w nich nasiona.'
      },
      {
        question: 'Który owoc rośnie na drzewie?',
        answers: ['Truskawka', 'Jabłko', 'Ogórek', 'Pomidor'],
        correct: 1,
        explanation: 'Jabłko rośnie na drzewie (jabłoni). Truskawka rośnie nisko przy ziemi, ogórek i pomidor to rośliny zielne.'
      },
      {
        question: 'Jak nazywa się proces, w którym rośliny wytwarzają pokarm?',
        answers: ['Oddychanie', 'Fotosynteza', 'Trawienie', 'Wzrost'],
        correct: 1,
        explanation: 'Fotosynteza to proces, w którym rośliny przy udziale światła słonecznego wytwarzają pokarm z wody i dwutlenku węgla.'
      },
      {
        question: 'Co to jest pień?',
        answers: ['Część korzenia', 'Łodyga drzewa', 'Liść', 'Kwiat'],
        correct: 1,
        explanation: 'Pień to zdrewniała łodyga drzewa. Podtrzymuje koronę drzewa i transportuje wodę z korzeni do liści.'
      },
      {
        question: 'Która roślina ma kolce?',
        answers: ['Tulipan', 'Róża', 'Stokrotka', 'Bratek'],
        correct: 1,
        explanation: 'Róża ma kolce na łodydze. Kolce chronią roślinę przed zwierzętami, które chciałyby ją zjeść.'
      },
      {
        question: 'Liście klonu jesienią zmieniają kolor na:',
        answers: ['Zielony', 'Niebieski', 'Czerwony lub żółty', 'Biały'],
        correct: 2,
        explanation: 'Jesienią liście klonu zmieniają kolor na czerwony, pomarańczowy lub żółty. To dlatego, że chlorofil się rozkłada.'
      }
    ]
  },
  {
    id: 'zwierzeta',
    name: 'Zwierzęta',
    icon: '🐾',
    questions: [
      {
        question: 'Które zwierzę należy do ssaków?',
        answers: ['Wróbel', 'Pies', 'Żaba', 'Motyl'],
        correct: 1,
        explanation: 'Pies jest ssakiem. Ssaki karmią młode mlekiem i mają ciało pokryte sierścią.'
      },
      {
        question: 'Gdzie zimuje niedźwiedź?',
        answers: ['W gnieździe', 'W norze zwanej gawrą', 'Pod wodą', 'W dziupli'],
        correct: 1,
        explanation: 'Niedźwiedź zimuje w gawrze. Przed zimą gromadzi zapasy tłuszczu i zapada w sen zimowy.'
      },
      {
        question: 'Który ptak odlatuje do ciepłych krajów na zimę?',
        answers: ['Wróbel', 'Sikorka', 'Bocian', 'Sowa'],
        correct: 2,
        explanation: 'Bociany odlatują do ciepłych krajów (do Afryki) przed zimą. Wracają do Polski wiosną.'
      },
      {
        question: 'Czym oddycha ryba pod wodą?',
        answers: ['Płucami', 'Skrzelami', 'Nosem', 'Skórą'],
        correct: 1,
        explanation: 'Ryby oddychają skrzelami. Pobierają tlen rozpuszczony w wodzie za pomocą skrzeli.'
      },
      {
        question: 'Które zwierzę jest roślinożerne?',
        answers: ['Lew', 'Wilk', 'Krowa', 'Lis'],
        correct: 2,
        explanation: 'Krowa jest roślinożerna - je trawę, siano i inne rośliny. Lew, wilk i lis to mięsożercy.'
      },
      {
        question: 'Ile nóg ma pająk?',
        answers: ['6', '8', '10', '4'],
        correct: 1,
        explanation: 'Pająk ma 8 nóg. To pajęczak, nie owad (owady mają 6 nóg).'
      },
      {
        question: 'Które zwierzę żyje w stadzie?',
        answers: ['Niedźwiedź', 'Wilk', 'Sowa', 'Lis'],
        correct: 1,
        explanation: 'Wilki żyją w stadach (watahach). Razem polują i wychowują młode. Niedźwiedź i lis prowadzą samotny tryb życia.'
      },
      {
        question: 'Jak nazywa się młody koń?',
        answers: ['Cielę', 'Źrebię', 'Prosię', 'Jagnię'],
        correct: 1,
        explanation: 'Młody koń to źrebię. Cielę to młode krowy, prosię - świni, jagnię - owcy.'
      },
      {
        question: 'Które zwierzę zapyla kwiaty?',
        answers: ['Żaba', 'Pszczoła', 'Wąż', 'Kret'],
        correct: 1,
        explanation: 'Pszczoły zapylają kwiaty. Zbierając nektar, przenoszą pyłek z kwiatka na kwiatek, co umożliwia powstawanie owoców.'
      },
      {
        question: 'Gdzie mieszka wiewiórka?',
        answers: ['W gnieździe na ziemi', 'W dziupli lub gnieździe na drzewie', 'Pod ziemią', 'W wodzie'],
        correct: 1,
        explanation: 'Wiewiórka mieszka w dziupli drzewa lub buduje gniazdo (bocianie gniazdo) na gałęziach. Robi zapasy na zimę.'
      },
      {
        question: 'Które zwierzę potrafi zmieniać kolor skóry?',
        answers: ['Pies', 'Kameleon', 'Żółw', 'Słoń'],
        correct: 1,
        explanation: 'Kameleon potrafi zmieniać kolor skóry, aby się maskować przed wrogami lub komunikować się z innymi.'
      },
      {
        question: 'Czym pokryte jest ciało ptaka?',
        answers: ['Sierścią', 'Łuskami', 'Piórami', 'Futrem'],
        correct: 2,
        explanation: 'Ciało ptaka pokrywają pióra. Umożliwiają one latanie i chronią przed zimnem.'
      }
    ]
  },
  {
    id: 'poryroku',
    name: 'Pory roku i pogoda',
    icon: '🌈',
    questions: [
      {
        question: 'Ile jest pór roku?',
        answers: ['2', '3', '4', '6'],
        correct: 2,
        explanation: 'Są 4 pory roku: wiosna, lato, jesień i zima. Każda trwa około 3 miesięcy.'
      },
      {
        question: 'Która pora roku jest najcieplejsza?',
        answers: ['Wiosna', 'Lato', 'Jesień', 'Zima'],
        correct: 1,
        explanation: 'Lato jest najcieplejszą porą roku. Słońce świeci wtedy najdłużej i najwyżej na niebie.'
      },
      {
        question: 'Co pada z nieba zimą?',
        answers: ['Deszcz', 'Śnieg', 'Grad', 'Mgiełka'],
        correct: 1,
        explanation: 'Zimą z chmur pada śnieg, gdy temperatura jest poniżej 0°C. Woda w chmurze zamarza i tworzy płatki śniegu.'
      },
      {
        question: 'Kiedy dni są najdłuższe?',
        answers: ['Wiosną', 'Latem', 'Jesienią', 'Zimą'],
        correct: 1,
        explanation: 'Latem dni są najdłuższe, a noce najkrótsze. Najdłuższy dzień w roku to 21 czerwca.'
      },
      {
        question: 'Co to jest tęcza?',
        answers: ['Most na niebie', 'Zjawisko optyczne po deszczu', 'Smok', 'Rodzaj chmury'],
        correct: 1,
        explanation: 'Tęcza powstaje, gdy światło słoneczne załamuje się w kroplach wody po deszczu. Ma 7 kolorów.'
      },
      {
        question: 'Jaka temperatura jest typowa dla zimy w Polsce?',
        answers: ['30°C', '20°C', '-5°C', '15°C'],
        correct: 2,
        explanation: 'Zimą w Polsce temperatura często spada poniżej 0°C. Typowa zimowa temperatura to około -5°C do 0°C.'
      },
      {
        question: 'Która pora roku zaczyna się 23 września?',
        answers: ['Wiosna', 'Lato', 'Jesień', 'Zima'],
        correct: 2,
        explanation: 'Jesień zaczyna się około 23 września. Wtedy kończy się lato, a dni stają się coraz krótsze.'
      },
      {
        question: 'Skąd bierze się deszcz?',
        answers: ['Z rzek', 'Z chmur', 'Z ziemi', 'Z morza'],
        correct: 1,
        explanation: 'Deszcz pada z chmur. Woda paruje, unosi się do góry, skrapla w chmurach i spada na ziemię jako deszcz.'
      },
      {
        question: 'Co zakładamy, gdy pada deszcz?',
        answers: ['Krótkie spodenki', 'Kurtkę i kalosze', 'Kostium kąpielowy', 'Sukienkę'],
        correct: 1,
        explanation: 'Gdy pada deszcz, zakładamy kurtkę przeciwdeszczową i kalosze, żeby nie zmoknąć.'
      },
      {
        question: 'Jak nazywa się silny wiatr, który łamie drzewa?',
        answers: ['Wietrzyk', 'Bryza', 'Huragan', 'Mgiełka'],
        correct: 2,
        explanation: 'Huragan to bardzo silny wiatr, który może łamać drzewa i zrywać dachy. Jest niebezpieczny.'
      },
      {
        question: 'Który miesiąc jest pierwszym miesiącem wiosny?',
        answers: ['Styczeń', 'Marzec', 'Maj', 'Kwiecień'],
        correct: 1,
        explanation: 'Marzec jest pierwszym miesiącem wiosny. Wiosna zaczyna się 21 marca.'
      },
      {
        question: 'Co to jest parowanie?',
        answers: ['Zamarzanie wody', 'Zmiana wody w parę wodną', 'Topnienie lodu', 'Padanie deszczu'],
        correct: 1,
        explanation: 'Parowanie to zmiana wody w parę wodną pod wpływem ciepła. Woda paruje ze stawów, rzek i mórz.'
      }
    ]
  },
  {
    id: 'czlowiek',
    name: 'Człowiek i zdrowie',
    icon: '🧍',
    questions: [
      {
        question: 'Ile zmysłów ma człowiek?',
        answers: ['3', '4', '5', '6'],
        correct: 2,
        explanation: 'Człowiek ma 5 zmysłów: wzrok (oczy), słuch (uszy), dotyk (skóra), smak (język), węch (nos).'
      },
      {
        question: 'Którym zmysłem odbieramy dźwięki?',
        answers: ['Wzrokiem', 'Słuchem', 'Węchem', 'Dotykiem'],
        correct: 1,
        explanation: 'Dźwięki odbieramy słuchem za pomocą uszu. Uszy pozwalają nam słyszeć muzykę, rozmowy i inne dźwięki.'
      },
      {
        question: 'Ile zębów mlecznych ma dziecko?',
        answers: ['10', '20', '32', '24'],
        correct: 1,
        explanation: 'Dziecko ma 20 zębów mlecznych. Wypadają one około 6-7 roku życia, a na ich miejsce wyrastają zęby stałe.'
      },
      {
        question: 'Co jest zdrowe dla naszego organizmu?',
        answers: ['Fast food', 'Warzywa i owoce', 'Słodycze', 'Chipsy'],
        correct: 1,
        explanation: 'Warzywa i owoce są zdrowe - zawierają witaminy i składniki odżywcze potrzebne do prawidłowego rozwoju.'
      },
      {
        question: 'Jak często należy myć zęby?',
        answers: ['Raz w tygodniu', 'Rano i wieczorem', 'Tylko rano', 'Raz w miesiącu'],
        correct: 1,
        explanation: 'Zęby należy myć co najmniej dwa razy dziennie - rano po śniadaniu i wieczorem przed snem.'
      },
      {
        question: 'Który narząd odpowiada za pompowanie krwi?',
        answers: ['Płuca', 'Serce', 'Mózg', 'Żołądek'],
        correct: 1,
        explanation: 'Serce pompuje krew do całego ciała. To mięsień wielkości pięści, który bije bez przerwy przez całe życie.'
      },
      {
        question: 'Po co myjemy ręce przed jedzeniem?',
        answers: ['Żeby były mokre', 'Żeby pozbyć się bakterii', 'Dla zabawy', 'Żeby schudnąć'],
        correct: 1,
        explanation: 'Mycie rąk usuwa bakterie i wirusy. Dzięki temu nie przenosimy ich do jedzenia i nie chorujemy.'
      },
      {
        question: 'Ile kości ma dorosły człowiek?',
        answers: ['Około 100', 'Około 200', 'Około 300', 'Około 50'],
        correct: 1,
        explanation: 'Dorosły człowiek ma około 206 kości. Kości tworzą szkielet, który podtrzymuje ciało i chroni narządy.'
      },
      {
        question: 'Do czego służą płuca?',
        answers: ['Do trawienia', 'Do oddychania', 'Do myślenia', 'Do słyszenia'],
        correct: 1,
        explanation: 'Płuca służą do oddychania. Pobierają z powietrza tlen, który jest niezbędny do życia.'
      },
      {
        question: 'Co to jest gorączka?',
        answers: ['Normalna temperatura', 'Podwyższona temperatura ciała', 'Zimno', 'Wysokie ciśnienie'],
        correct: 1,
        explanation: 'Gorączka to podwyższona temperatura ciała (powyżej 38°C). To znak, że organizm walczy z infekcją.'
      },
      {
        question: 'Ile godzin snu potrzebuje dziecko w wieku 8 lat?',
        answers: ['Około 5-6', 'Około 10-11', 'Około 15', 'Około 3-4'],
        correct: 1,
        explanation: 'Dziecko w wieku szkolnym potrzebuje około 10-11 godzin snu na dobę. Sen jest ważny dla odpoczynku i wzrostu.'
      },
      {
        question: 'Co się dzieje z jedzeniem w żołądku?',
        answers: ['Jest przechowywane', 'Jest trawione', 'Jest wydalane', 'Jest wchłaniane'],
        correct: 1,
        explanation: 'W żołądku jedzenie jest trawione - soki żołądkowe rozkładają pokarm na prostsze składniki.'
      }
    ]
  },
  {
    id: 'ekologia',
    name: 'Ekologia i środowisko',
    icon: '♻️',
    questions: [
      {
        question: 'Co to jest recykling?',
        answers: ['Wyrzucanie śmieci', 'Ponowne przetwarzanie odpadów', 'Spalanie śmieci', 'Zakopywanie odpadów'],
        correct: 1,
        explanation: 'Recykling to ponowne przetwarzanie odpadów (szkła, papieru, plastiku) w celu wytworzenia nowych produktów.'
      },
      {
        question: 'Do którego pojemnika wrzucamy szkło?',
        answers: ['Żółtego', 'Zielonego', 'Niebieskiego', 'Czerwonego'],
        correct: 1,
        explanation: 'Szkło wrzucamy do zielonego pojemnika. Papier do niebieskiego, plastik do żółtego, odpady zmieszane do czarnego.'
      },
      {
        question: 'Który kolor pojemnika jest przeznaczony na papier?',
        answers: ['Zielony', 'Niebieski', 'Żółty', 'Brązowy'],
        correct: 1,
        explanation: 'Papier wrzucamy do niebieskiego pojemnika. Gazety, kartony, zeszyty - to wszystko nadaje się do recyklingu.'
      },
      {
        question: 'Co to jest smog?',
        answers: ['Rodzaj chmury', 'Zanieczyszczenie powietrza', 'Gęsta mgła', 'Dym z komina'],
        correct: 1,
        explanation: 'Smog to zanieczyszczenie powietrza powstałe ze spalin samochodowych i dymu z pieców. Jest szkodliwy dla zdrowia.'
      },
      {
        question: 'Które działanie pomaga chronić środowisko?',
        answers: ['Palenie śmieci w piecu', 'Segregacja odpadów', 'Wylewanie oleju do rzeki', 'Wycinanie lasów'],
        correct: 1,
        explanation: 'Segregacja odpadów pomaga chronić środowisko. Dzięki niej odpady mogą być przetworzone i wykorzystane ponownie.'
      },
      {
        question: 'Co to jest park narodowy?',
        answers: ['Park w mieście', 'Obszar chronionej przyrody', 'Ogród zoologiczny', 'Las miejski'],
        correct: 1,
        explanation: 'Park narodowy to obszar z cenną przyrodą objęty ochroną. Nie wolno w nim zrywać roślin ani płoszyć zwierząt.'
      },
      {
        question: 'Które zwierzęta w Polsce są pod ochroną?',
        answers: ['Wróbel', 'Żubr', 'Krowa', 'Kura'],
        correct: 1,
        explanation: 'Żubr jest w Polsce objęty ścisłą ochroną. To największe dzikie zwierzę w Europie, żyje w Puszczy Białowieskiej.'
      },
      {
        question: 'Czym grozi wycinanie lasów?',
        answers: ['Większą ilością tlenu', 'Utratą domów dla zwierząt', 'Większą ilością deszczu', 'Cieplejszym klimatem'],
        correct: 1,
        explanation: 'Wycinanie lasów niszczy domy zwierząt i roślin. Lasy są potrzebne, bo produkują tlen i pochłaniają dwutlenek węgla.'
      },
      {
        question: 'Gdzie należy wyrzucić zepsutą baterię?',
        answers: ['Do kosza na śmieci', 'Do specjalnego pojemnika', 'Do zlewu', 'Do ogródka'],
        correct: 1,
        explanation: 'Baterie należy wrzucać do specjalnych pojemników. Zawierają szkodliwe substancje, które nie mogą trafić na wysypisko.'
      },
      {
        question: 'Co to jest dziura ozonowa?',
        answers: ['Dziura w ziemi', 'Zanieczyszczenie w górnych warstwach atmosfery', 'Dziura w dachu', 'Rodzaj jaskini'],
        correct: 1,
        explanation: 'Dziura ozonowa to zubożenie warstwy ozonowej, która chroni Ziemię przed szkodliwym promieniowaniem.'
      },
      {
        question: 'Dlaczego warto gasić światło?',
        answers: ['Bo żarówka się psuje', 'Żeby oszczędzać prąd i chronić środowisko', 'Bo jest ładnie', 'Żeby było ciemno'],
        correct: 1,
        explanation: 'Gaszenie światła oszczędza energię elektryczną. Mniejsze zużycie prądu to mniejsza emisja CO2 i ochrona klimatu.'
      },
      {
        question: 'Co to jest kompostownik?',
        answers: ['Miejsce na szkło', 'Miejsce, gdzie rozkładają się odpady organiczne', 'Pojemnik na plastik', 'Kosz na papier'],
        correct: 1,
        explanation: 'Kompostownik to miejsce, gdzie rozkładają się odpady organiczne (obierki, liście). Powstaje z nich żyzny kompost.'
      }
    ]
  },
  {
    id: 'spoleczna',
    name: 'Edukacja społeczna',
    icon: '🤝',
    questions: [
      {
        question: 'Jak nazywa się miejsce, gdzie mieszkamy?',
        answers: ['Kraj', 'Dom', 'Szkoła', 'Sklep'],
        correct: 1,
        explanation: 'Dom to miejsce, w którym mieszkamy razem z rodziną. Dom daje nam schronienie i poczucie bezpieczeństwa.'
      },
      {
        question: 'Kto jest głową państwa w Polsce?',
        answers: ['Premier', 'Prezydent', 'Król', 'Marszałek'],
        correct: 1,
        explanation: 'Prezydent jest głową państwa w Polsce. Obecnie prezydentem jest Andrzej Duda. Wybieramy go w wyborach.'
      },
      {
        question: 'Jak nazywa się nasza stolica?',
        answers: ['Kraków', 'Warszawa', 'Gdańsk', 'Poznań'],
        correct: 1,
        explanation: 'Stolicą Polski jest Warszawa. To największe miasto w Polsce, siedziba Prezydenta, Sejmu i Senatu.'
      },
      {
        question: 'Jaki numer alarmowy należy wybrać, gdy potrzebujemy pomocy?',
        answers: ['997', '112', '999', '998'],
        correct: 1,
        explanation: 'Numer 112 to jednolity numer alarmowy w całej Europie. Dzwoniąc na niego, wezwiemy pomoc: policję, straż lub karetkę.'
      },
      {
        question: 'Którędy należy przechodzić przez jezdnię?',
        answers: ['W dowolnym miejscu', 'Po pasach (na przejściu)', 'Między samochodami', 'Na zakręcie'],
        correct: 1,
        explanation: 'Jezdnię należy przechodzić po pasach (na przejściu dla pieszych). Przed wejściem upewniamy się, że nic nie jedzie.'
      },
      {
        question: 'Co to jest rodzina?',
        answers: ['Grupa kolegów', 'Najbliższe osoby: mama, tata, rodzeństwo', 'Znajomi ze szkoły', 'Sąsiedzi'],
        correct: 1,
        explanation: 'Rodzina to najbliższe nam osoby - mama, tata, rodzeństwo, dziadkowie. Rodzina daje miłość i wsparcie.'
      },
      {
        question: 'Jakie kolory ma flaga Polski?',
        answers: ['Czerwony i niebieski', 'Biały i czerwony', 'Biały i niebieski', 'Czerwony i zielony'],
        correct: 1,
        explanation: 'Flaga Polski ma dwa kolory: biały (u góry) i czerwony (u dołu). Biel symbolizuje czystość, czerwień - odwagę.'
      },
      {
        question: 'Co to jest demokracja?',
        answers: ['Rządy jednej osoby', 'Rządy ludzi, wybory', 'Brak rządów', 'Rządy wojska'],
        correct: 1,
        explanation: 'Demokracja to ustrój, w którym władzę sprawują ludzie poprzez wybory. W Polsce wybieramy posłów i prezydenta.'
      },
      {
        question: 'Jak należy zachowywać się w bibliotece?',
        answers: ['Głośno rozmawiać', 'Cicho i spokojnie', 'Biegać między regałami', 'Jeść chipsy'],
        correct: 1,
        explanation: 'W bibliotece zachowujemy się cicho, żeby nie przeszkadzać innym czytającym. Książki traktujemy z szacunkiem.'
      },
      {
        question: 'Które zachowanie jest bezpieczne na drodze?',
        answers: ['Bieganie po jezdni', 'Noszenie odblasków po zmroku', 'Jazda na rowerze bez świateł', 'Przechodzenie na czerwonym'],
        correct: 1,
        explanation: 'Po zmroku nosimy odblaski, żeby być widocznym dla kierowców. To bardzo ważne dla bezpieczeństwa.'
      },
      {
        question: 'Kogo wybieramy w wyborach samorządowych?',
        answers: ['Prezydenta Polski', 'Burmistrza lub wójta', 'Króla', 'Premiera'],
        correct: 1,
        explanation: 'W wyborach samorządowych wybieramy burmistrza, wójta lub prezydenta miasta oraz radnych naszej okolicy.'
      },
      {
        question: 'Jakie święto obchodzimy 11 listopada?',
        answers: ['Boże Narodzenie', 'Święto Niepodległości', 'Wielkanoc', 'Dzień Dziecka'],
        correct: 1,
        explanation: '11 listopada obchodzimy Święto Niepodległości - rocznicę odzyskania przez Polskę niepodległości w 1918 roku.'
      }
    ]
  }
];
