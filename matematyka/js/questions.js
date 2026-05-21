const CATEGORIES = [
  {
    id: 'dodawanie',
    name: 'Dodawanie i odejmowanie',
    icon: '➕',
    questions: [
      {
        question: 'Ile to jest 25 + 13?',
        answers: ['36', '37', '38', '39'],
        correct: 2,
        explanation: '25 + 13 = 38. Najpierw dodajemy dziesiątki: 20 + 10 = 30, potem jedności: 5 + 3 = 8. Razem: 30 + 8 = 38.'
      },
      {
        question: 'Ile to jest 48 - 25?',
        answers: ['21', '22', '23', '24'],
        correct: 2,
        explanation: '48 - 25 = 23. Najpierw odejmujemy dziesiątki: 40 - 20 = 20, potem jedności: 8 - 5 = 3. Razem: 20 + 3 = 23.'
      },
      {
        question: 'Oblicz: 100 - 37',
        answers: ['63', '73', '67', '77'],
        correct: 0,
        explanation: '100 - 37 = 63. Można policzyć: 100 - 30 = 70, 70 - 7 = 63.'
      },
      {
        question: 'Ile to jest 56 + 27?',
        answers: ['73', '83', '93', '82'],
        correct: 1,
        explanation: '56 + 27 = 83. Najpierw dodajemy dziesiątki: 50 + 20 = 70, potem jedności: 6 + 7 = 13, a na końcu: 70 + 13 = 83.'
      },
      {
        question: 'Jaka liczba jest o 15 większa od 38?',
        answers: ['43', '53', '23', '48'],
        correct: 1,
        explanation: '38 + 15 = 53. 30 + 10 = 40, 8 + 5 = 13, 40 + 13 = 53.'
      },
      {
        question: 'Od jakiej liczby trzeba odjąć 24, żeby otrzymać 36?',
        answers: ['50', '12', '60', '70'],
        correct: 2,
        explanation: 'Szukamy liczby x, takiej że x - 24 = 36. Czyli x = 36 + 24 = 60.'
      },
      {
        question: 'Ile to jest 134 + 56?',
        answers: ['180', '190', '200', '170'],
        correct: 1,
        explanation: '134 + 56 = 190. 130 + 50 = 180, 4 + 6 = 10, 180 + 10 = 190.'
      },
      {
        question: 'Ile to jest 200 - 68?',
        answers: ['132', '142', '138', '128'],
        correct: 0,
        explanation: '200 - 68 = 132. 200 - 60 = 140, 140 - 8 = 132.'
      },
      {
        question: 'Która liczba jest sumą liczb 47 i 38?',
        answers: ['75', '85', '95', '105'],
        correct: 1,
        explanation: '47 + 38 = 85. 40 + 30 = 70, 7 + 8 = 15, 70 + 15 = 85.'
      },
      {
        question: 'Ile wynosi różnica liczb 93 i 47?',
        answers: ['46', '56', '36', '44'],
        correct: 0,
        explanation: '93 - 47 = 46. 93 - 40 = 53, 53 - 7 = 46.'
      },
      {
        question: 'Oblicz: 77 + 19',
        answers: ['96', '86', '106', '95'],
        correct: 0,
        explanation: '77 + 19 = 96. 70 + 10 = 80, 7 + 9 = 16, 80 + 16 = 96.'
      },
      {
        question: 'Ile to jest 350 + 150?',
        answers: ['400', '500', '450', '550'],
        correct: 1,
        explanation: '350 + 150 = 500. 300 + 100 = 400, 50 + 50 = 100, 400 + 100 = 500.'
      }
    ]
  },
  {
    id: 'mnozenie',
    name: 'Mnożenie i dzielenie',
    icon: '✖️',
    questions: [
      {
        question: 'Ile to jest 6 × 7?',
        answers: ['36', '42', '48', '56'],
        correct: 1,
        explanation: '6 × 7 = 42. Mnożenie to wielokrotne dodawanie: 6 + 6 + 6 + 6 + 6 + 6 + 6 = 42.'
      },
      {
        question: 'Ile to jest 42 ÷ 6?',
        answers: ['6', '7', '8', '9'],
        correct: 1,
        explanation: '42 ÷ 6 = 7, ponieważ 7 × 6 = 42. Dzielenie jest odwrotnością mnożenia.'
      },
      {
        question: 'Oblicz: 8 × 4',
        answers: ['28', '32', '36', '24'],
        correct: 1,
        explanation: '8 × 4 = 32. 8 + 8 + 8 + 8 = 32. Albo z tabliczki mnożenia: 8 × 4 = 32.'
      },
      {
        question: 'Ile to jest 54 ÷ 9?',
        answers: ['5', '6', '7', '8'],
        correct: 1,
        explanation: '54 ÷ 9 = 6, ponieważ 6 × 9 = 54.'
      },
      {
        question: 'Oblicz: 7 × 8',
        answers: ['56', '48', '64', '54'],
        correct: 0,
        explanation: '7 × 8 = 56. Można zapamiętać: 7 × 8 = 56, albo policzyć: 7 × 4 = 28, 28 × 2 = 56.'
      },
      {
        question: 'Ile to jest 36 ÷ 4?',
        answers: ['8', '7', '9', '6'],
        correct: 2,
        explanation: '36 ÷ 4 = 9, ponieważ 9 × 4 = 36.'
      },
      {
        question: 'Oblicz: 9 × 3',
        answers: ['24', '27', '30', '21'],
        correct: 1,
        explanation: '9 × 3 = 27. 9 + 9 + 9 = 27.'
      },
      {
        question: 'Ile to jest 63 ÷ 7?',
        answers: ['7', '8', '9', '6'],
        correct: 2,
        explanation: '63 ÷ 7 = 9, ponieważ 9 × 7 = 63.'
      },
      {
        question: 'Oblicz: 5 × 12',
        answers: ['50', '60', '55', '65'],
        correct: 1,
        explanation: '5 × 12 = 60. Najpierw 5 × 10 = 50, potem 5 × 2 = 10, razem 50 + 10 = 60.'
      },
      {
        question: 'Ile to jest 81 ÷ 9?',
        answers: ['8', '7', '9', '6'],
        correct: 2,
        explanation: '81 ÷ 9 = 9, ponieważ 9 × 9 = 81.'
      },
      {
        question: 'Oblicz: 4 × 15',
        answers: ['50', '60', '55', '45'],
        correct: 1,
        explanation: '4 × 15 = 60. Najpierw 4 × 10 = 40, potem 4 × 5 = 20, razem 40 + 20 = 60.'
      },
      {
        question: 'Pani kupiła 3 paczki jajek po 10 sztuk. Ile ma jajek?',
        answers: ['13', '20', '30', '40'],
        correct: 2,
        explanation: '3 × 10 = 30. Pani ma 3 paczki, w każdej po 10 jajek, czyli 3 × 10 = 30 jajek.'
      }
    ]
  },
  {
    id: 'geometria',
    name: 'Geometria',
    icon: '🔷',
    questions: [
      {
        question: 'Ile boków ma kwadrat?',
        answers: ['3', '4', '5', '6'],
        correct: 1,
        explanation: 'Kwadrat ma 4 boki. Wszystkie boki kwadratu są równe.'
      },
      {
        question: 'Ile kątów prostych ma prostokąt?',
        answers: ['2', '3', '4', '1'],
        correct: 2,
        explanation: 'Prostokąt ma 4 kąty proste. Każdy kąt prosty ma 90 stopni, jak narożnik kartki.'
      },
      {
        question: 'Która figura ma 3 boki?',
        answers: ['Kwadrat', 'Prostokąt', 'Trójkąt', 'Koło'],
        correct: 2,
        explanation: 'Trójkąt ma 3 boki. Słowo "trójkąt" pochodzi od "trzy kąty".'
      },
      {
        question: 'Ile wierzchołków ma sześcian?',
        answers: ['4', '6', '8', '12'],
        correct: 2,
        explanation: 'Sześcian ma 8 wierzchołków. Wierzchołki to "rogi" bryły.'
      },
      {
        question: 'Która figura nie ma ani jednego kąta?',
        answers: ['Trójkąt', 'Kwadrat', 'Koło', 'Prostokąt'],
        correct: 2,
        explanation: 'Koło nie ma żadnego kąta ani boku. Jest to figura, która nie ma kątów.'
      },
      {
        question: 'Ile centymetrów ma odcinek długości 1 decymetra?',
        answers: ['1 cm', '10 cm', '100 cm', '5 cm'],
        correct: 1,
        explanation: '1 decymetr (dm) = 10 centymetrów (cm).'
      },
      {
        question: 'Która figura ma wszystkie boki równej długości?',
        answers: ['Prostokąt', 'Kwadrat', 'Trójkąt', 'Trapez'],
        correct: 1,
        explanation: 'Kwadrat ma wszystkie 4 boki równej długości. Prostokąt ma równe tylko przeciwległe boki.'
      },
      {
        question: 'Ile osi symetrii ma kwadrat?',
        answers: ['2', '4', '1', '8'],
        correct: 1,
        explanation: 'Kwadrat ma 4 osie symetrii: 2 przez środki przeciwległych boków i 2 przez przeciwległe wierzchołki.'
      },
      {
        question: 'Jaka jest różnica między kwadratem a prostokątem?',
        answers: ['Prostokąt ma 3 boki', 'Kwadrat ma równe wszystkie boki', 'Prostokąt nie ma kątów', 'Kwadrat ma 3 kąty'],
        correct: 1,
        explanation: 'Kwadrat ma wszystkie 4 boki równe, prostokąt ma równe tylko przeciwległe boki. Każdy kwadrat jest prostokątem, ale nie każdy prostokąt jest kwadratem.'
      },
      {
        question: 'Ile ścian ma sześcian?',
        answers: ['4', '6', '8', '12'],
        correct: 1,
        explanation: 'Sześcian ma 6 ścian. Każda ściana sześcianu jest kwadratem. Sześcian to np. kostka do gry.'
      },
      {
        question: 'Jak nazywa się linia, która nie ma początku ani końca?',
        answers: ['Odcinek', 'Półprosta', 'Prosta', 'Łamana'],
        correct: 2,
        explanation: 'Prosta nie ma początku ani końca - ciągnie się w obie strony bez końca.'
      },
      {
        question: 'Jaki kąt jest mniejszy od kąta prostego?',
        answers: ['Rozwarty', 'Ostry', 'Półpełny', 'Pełny'],
        correct: 1,
        explanation: 'Kąt ostry jest mniejszy od kąta prostego. Kąt ostry ma mniej niż 90 stopni.'
      }
    ]
  },
  {
    id: 'mierzenie',
    name: 'Mierzenie i jednostki',
    icon: '📏',
    questions: [
      {
        question: 'Ile centymetrów ma 1 metr?',
        answers: ['10 cm', '50 cm', '100 cm', '1000 cm'],
        correct: 2,
        explanation: '1 metr (m) = 100 centymetrów (cm).'
      },
      {
        question: 'Ile kilogramów to 3 tony?',
        answers: ['300 kg', '3000 kg', '30 kg', '30 000 kg'],
        correct: 1,
        explanation: '1 tona = 1000 kg, więc 3 tony = 3 × 1000 = 3000 kg.'
      },
      {
        question: 'Ile dekagramów ma 1 kilogram?',
        answers: ['10 dag', '100 dag', '1000 dag', '50 dag'],
        correct: 1,
        explanation: '1 kilogram (kg) = 100 dekagramów (dag).'
      },
      {
        question: 'Który zapis jest poprawny: 2 złote 50 groszy to?',
        answers: ['2,05 zł', '2,50 zł', '2,50 gr', '250 zł'],
        correct: 1,
        explanation: '2 złote 50 groszy zapisujemy jako 2,50 zł. 1 zł = 100 gr.'
      },
      {
        question: 'Ile minut ma 2 godziny?',
        answers: ['60 minut', '100 minut', '120 minut', '200 minut'],
        correct: 2,
        explanation: '1 godzina = 60 minut, więc 2 godziny = 2 × 60 = 120 minut.'
      },
      {
        question: 'Ile sekund ma 1 minuta?',
        answers: ['30', '60', '100', '120'],
        correct: 1,
        explanation: '1 minuta = 60 sekund.'
      },
      {
        question: 'Pół kilograma to ile dekagramów?',
        answers: ['50 dag', '100 dag', '500 dag', '5 dag'],
        correct: 0,
        explanation: '1 kg = 100 dag, więc pół kilograma (0,5 kg) = 50 dag.'
      },
      {
        question: 'Ile milimetrów ma 1 centymetr?',
        answers: ['10 mm', '100 mm', '5 mm', '50 mm'],
        correct: 0,
        explanation: '1 centymetr (cm) = 10 milimetrów (mm).'
      },
      {
        question: 'Ile litrów to 3 000 mililitrów?',
        answers: ['3 l', '30 l', '0,3 l', '300 l'],
        correct: 0,
        explanation: '1 litr = 1000 mililitrów, więc 3000 ml = 3 litry.'
      },
      {
        question: 'Która godzina jest 15 minut po 10:30?',
        answers: ['10:15', '10:45', '11:00', '10:50'],
        correct: 1,
        explanation: '10:30 + 15 minut = 10:45.'
      },
      {
        question: 'Ile dni ma miesiąc wrzesień?',
        answers: ['28', '29', '30', '31'],
        correct: 2,
        explanation: 'Wrzesień ma 30 dni. Można zapamiętać wierszyk: "30 dni ma wrzesień, kwiecień, czerwiec i listopad".'
      },
      {
        question: 'Ile centymetrów ma 2 metry i 30 centymetrów?',
        answers: ['203 cm', '230 cm', '200 cm', '23 cm'],
        correct: 1,
        explanation: '2 m = 200 cm, plus 30 cm daje 230 cm.'
      }
    ]
  },
  {
    id: 'zadania',
    name: 'Zadania tekstowe',
    icon: '📝',
    questions: [
      {
        question: 'Kasia ma 15 cukierków. Dała 7 koleżance. Ile cukierków jej zostało?',
        answers: ['5', '6', '7', '8'],
        correct: 3,
        explanation: '15 - 7 = 8. Kasi zostało 8 cukierków.'
      },
      {
        question: 'Tomek ma 23 znaczki, a jego siostra o 8 więcej. Ile znaczków ma siostra Tomka?',
        answers: ['15', '31', '29', '30'],
        correct: 1,
        explanation: '23 + 8 = 31. Siostra Tomka ma 31 znaczków.'
      },
      {
        question: 'Na wycieczkę pojechało 24 dzieci. Nauczyciel podzielił je na 4 równe grupy. Ile dzieci było w każdej grupie?',
        answers: ['4', '5', '6', '8'],
        correct: 2,
        explanation: '24 ÷ 4 = 6. W każdej grupie było 6 dzieci.'
      },
      {
        question: 'Jeden zeszyt kosztuje 3 złote. Ile trzeba zapłacić za 5 zeszytów?',
        answers: ['8 zł', '10 zł', '15 zł', '12 zł'],
        correct: 2,
        explanation: '5 × 3 zł = 15 zł. Za 5 zeszytów trzeba zapłacić 15 złotych.'
      },
      {
        question: 'W autobusie jechało 35 osób. Na pierwszym przystanku wysiadło 12 osób, a wsiadło 5. Ile osób jest teraz w autobusie?',
        answers: ['28', '23', '18', '27'],
        correct: 0,
        explanation: 'Najpierw 35 - 12 = 23 (po wysiadających), potem 23 + 5 = 28 (po wsiadających). W autobusie jest 28 osób.'
      },
      {
        question: 'Babcia upiekła 24 ciasteczka. Rozłożyła je po równo na 3 talerze. Po ile ciasteczek jest na każdym talerzu?',
        answers: ['6', '7', '8', '9'],
        correct: 2,
        explanation: '24 ÷ 3 = 8. Na każdym talerzu jest 8 ciasteczek.'
      },
      {
        question: 'Jacek ma 12 lat. Za ile lat będzie miał 20 lat?',
        answers: ['6', '7', '8', '10'],
        correct: 2,
        explanation: '20 - 12 = 8. Jacek za 8 lat będzie miał 20 lat.'
      },
      {
        question: 'W sklepie było 56 jabłek. Sprzedano 38. Ile jabłek zostało?',
        answers: ['16', '18', '22', '28'],
        correct: 1,
        explanation: '56 - 38 = 18. Zostało 18 jabłek.'
      },
      {
        question: 'Ania ma 3 paczki naklejek. W każdej paczce jest po 7 naklejek. Ile naklejek ma Ania?',
        answers: ['10', '17', '21', '28'],
        correct: 2,
        explanation: '3 × 7 = 21. Ania ma 21 naklejek.'
      },
      {
        question: 'Pan Jan kupił 2 kg ziemniaków po 2 zł za kilogram i 1 kg cebuli za 3 zł. Ile zapłacił razem?',
        answers: ['5 zł', '7 zł', '9 zł', '10 zł'],
        correct: 1,
        explanation: 'Ziemniaki: 2 × 2 zł = 4 zł. Cebula: 1 × 3 zł = 3 zł. Razem: 4 + 3 = 7 zł.'
      },
      {
        question: 'Do szkoły chodzi 120 dzieci. 50 to dziewczynki. Ilu jest chłopców?',
        answers: ['50', '60', '70', '80'],
        correct: 2,
        explanation: '120 - 50 = 70. W szkole jest 70 chłopców.'
      },
      {
        question: 'Zosia ma 18 kredek. Oddała 9, a potem dostała 5 nowych. Ile kredek ma teraz?',
        answers: ['13', '14', '15', '16'],
        correct: 1,
        explanation: '18 - 9 = 9 (po oddaniu), 9 + 5 = 14 (po dostaniu nowych). Zosia ma teraz 14 kredek.'
      }
    ]
  },
  {
    id: 'liczby',
    name: 'Liczby i działania',
    icon: '🔢',
    questions: [
      {
        question: 'Która liczba jest większa: 123 czy 132?',
        answers: ['123', '132', 'Są równe', 'Nie wiem'],
        correct: 1,
        explanation: '132 jest większe od 123. Porównujemy: w liczbie 132 mamy 1 setkę, 3 dziesiątki i 2 jedności, a w 123 mamy 1 setkę, 2 dziesiątki i 3 jedności. 3 dziesiątki to więcej niż 2 dziesiątki.'
      },
      {
        question: 'Ile dziesiątek ma liczba 450?',
        answers: ['4', '5', '45', '50'],
        correct: 2,
        explanation: 'Liczba 450 ma 45 dziesiątek, bo 450 ÷ 10 = 45.'
      },
      {
        question: 'Która liczba jest parzysta?',
        answers: ['13', '25', '34', '47'],
        correct: 2,
        explanation: 'Liczba parzysta to taka, którą można podzielić przez 2 bez reszty. 34 ÷ 2 = 17, więc 34 jest parzysta.'
      },
      {
        question: 'Ile to jest 3 × 100 + 4 × 10 + 5?',
        answers: ['300', '340', '345', '354'],
        correct: 2,
        explanation: '3 × 100 = 300, 4 × 10 = 40, 300 + 40 + 5 = 345.'
      },
      {
        question: 'Która z tych liczb jest największa?',
        answers: ['299', '302', '298', '310'],
        correct: 3,
        explanation: '310 jest największe, bo ma 3 setki i 10, podczas gdy 302 ma 3 setki i 2.'
      },
      {
        question: 'Ile to jest 1 + 2 + 3 + 4 + 5?',
        answers: ['12', '13', '14', '15'],
        correct: 3,
        explanation: '1 + 2 = 3, 3 + 3 = 6, 6 + 4 = 10, 10 + 5 = 15.'
      },
      {
        question: 'Która liczba jest nieparzysta?',
        answers: ['22', '36', '41', '50'],
        correct: 2,
        explanation: 'Liczba nieparzysta to taka, której nie da się podzielić przez 2 bez reszty. 41 ÷ 2 = 20 r. 1.'
      },
      {
        question: 'Zapisz liczbę, która ma 5 setek, 2 dziesiątki i 7 jedności.',
        answers: ['527', '572', '257', '725'],
        correct: 0,
        explanation: '5 setek = 500, 2 dziesiątki = 20, 7 jedności = 7. Razem: 500 + 20 + 7 = 527.'
      },
      {
        question: 'Ile to jest 10 × 10?',
        answers: ['10', '100', '1000', '20'],
        correct: 1,
        explanation: '10 × 10 = 100. Dziesięć dziesiątek to sto.'
      },
      {
        question: 'Która liczba jest o 100 większa od 899?',
        answers: ['900', '909', '990', '999'],
        correct: 3,
        explanation: '899 + 100 = 999. Do 899 dodajemy 100, czyli 8 setek + 1 setka = 9 setek, a dziesiątki i jedności zostają: 99. Czyli 999.'
      },
      {
        question: 'Ile zer ma liczba sto tysięcy?',
        answers: ['3', '4', '5', '6'],
        correct: 2,
        explanation: 'Sto tysięcy to 100 000. Ma 5 zer.'
      },
      {
        question: 'Z której strony dopisujemy cyfry, gdy liczba jest większa?',
        answers: ['Z prawej', 'Z lewej', 'Z obu', 'Nie dopisujemy'],
        correct: 1,
        explanation: 'Gdy liczba jest większa, dopisujemy cyfry z lewej strony. Np. 5, potem 15 (1 z lewej), potem 115 (1 z lewej).'
      }
    ]
  }
];
