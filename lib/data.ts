import { CONTACT_PHONE_DISPLAY } from "./config";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  imagePosition?: string;
  href: string;
  readTime: string;
  date?: string;
  source?: string;
  sourceUrl?: string;
  body?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "allerheiligenstriezel-2026-preise",
    title: "Allerheiligenstriezel 2026: alle Größen und Preise",
    excerpt:
      "Die Striezelzeit beginnt. Von 150 g bis 1500 g, mit Zucker, ohne Zucker oder mit Mandeln, und wie immer ohne Rosinen. Hier sind unsere Preise für 2026.",
    category: "Brauchtum",
    image: "/images/produkte/leckereien/striezel.jpg",
    href: "/blog/allerheiligenstriezel-2026-preise",
    readTime: "2 Min.",
    date: "30.09.2026",
    body: [
      `Wenn im Weinviertel die Weinlese vorbei ist und die Tage kürzer werden, riecht es in unserer Backstube in Wetzelsdorf nach Germteig und Butter. Dann ist Striezelzeit. Unsere Allerheiligenstriezel werden von Hand geflochten, nach unserem Hausrezept und mit regionalen Zutaten: Mehl, frische Eier, echte Butter.`,
      `Für 2026 gibt es unsere Striezel in fünf Größen. Der kleine Striezel mit 150 g kostet € 2,70, der 300-g-Striezel € 4,00. Den 500-g-Striezel backen wir in drei Varianten, mit Zucker, ohne Zucker oder mit Mandelbestreuung, um € 5,50. Für die große Runde gibt es den 1000-g-Striezel um € 18,00 und den 1500-g-Familienstriezel um € 25,00. Alle Preise verstehen sich pro Stück.`,
      `Eine Frage hören wir jedes Jahr: Sind Rosinen drin? Nein. Unsere Striezel sind ohne Rosinen, flaumig innen und goldbraun außen.`,
      `Der Allerheiligenstriezel gehört bei uns zum Brauchtum. Beim Striezel Posch'n wird um ihn gewürfelt, und viele Taufpaten bringen ihren Patenkindern zu Allerheiligen einen Striezel. Wer einen großen Striezel für die Familie oder die Kaffeerunde braucht, bestellt am besten rechtzeitig vor.`,
      `Vorbestellen können Sie in allen unserer Filialen, telefonisch unter ${CONTACT_PHONE_DISPLAY} oder per E-Mail an bestellung@example.invalid. Alles rund um unseren Striezel finden Sie auch auf unserer Seite zum Allerheiligenstriezel.`,
    ],
  },
  {
    slug: "ichkauflokal-regionalitaetskampagne-2026",
    title: "Unser Getreide wächst keine 20 Kilometer weit",
    excerpt:
      "Wir sind #ichkauflokal-Partnerbetrieb der Wirtschaftskammer Niederösterreich. Was das bedeutet? Eigentlich nichts Neues für uns. Nur dass wir es jetzt auch offiziell sagen dürfen.",
    category: "Weinviertel",
    image: "/images/hero/weinviertel-brot-backstube.jpg",
    href: "/blog/ichkauflokal-regionalitaetskampagne-2026",
    readTime: "3 Min.",
    date: "01.09.2026",
    source: "Wirtschaft NÖ",
    sourceUrl: "https://www.ich-kauf-lokal.at",
    body: [
      `Wenn jemand fragt, was uns von anderen Bäckereien unterscheidet, kommen wir nicht sofort auf Auszeichnungen oder Zertifikate zu sprechen. Wir sprechen vom Feld. Vom Bauern, den wir kennen. Von dem Korn, das keinen langen Weg zurückgelegt hat, bevor es in unserer Backstube zu Brot wird.`,

      `Genau das hat die Wirtschaftskammer Niederösterreich mit ihrer Kampagne #ichkauflokal in Worte gefasst und uns als Partnerbetrieb vorgestellt. Der Artikel in „Wirtschaft NÖ" hat uns gefreut, weil er das ausspricht, was wir seit 1960 leben: „Das Getreide für unsere Brote wächst oft keine 20 Kilometer von unserer Backstube entfernt. Das ist für mich die reinste Form von Qualität: kurze Wege, klare Herkunft, ehrlicher Geschmack."`,

      `Die Kampagne der Wirtschaftskammer NÖ macht sichtbar, was viele Menschen im Weinviertel ohnehin wissen: Wer regional kauft, stärkt Arbeitsplätze, Kaufkraft und Lebensqualität vor Ort. Kurze Wege sind nicht nur ein ökologisches Argument. Sie bedeuten frischere Produkte, direktes Vertrauen und eine Gemeinschaft, die sich trägt. Für uns ist das keine Marketing-Botschaft. Es ist der Alltag in der Backstube.`,

      `Das Weinviertel ist Kornkammer Österreichs, und wir haben das Glück, mitten drin zu sein. Ein Großteil des Getreides für unsere Brote und Semmeln kommt von Bauern aus der unmittelbaren Umgebung. Wir wissen, woher unser Mehl kommt. Wir kennen die Menschen dahinter. Das ist kein Zertifikat. Das ist gewachsenes Vertrauen.`,

      `Daraus entstehen Brote wie unser Dinkel-VollkornSepp, unser Brot des Jahres. Ein Brot, das zeigt: Handwerk braucht keine Kompromisse, und Regionalität ist kein Umweg, sondern der kürzeste Weg zur Qualität.`,

      `Seit 1960 ist die Bäckerei Karl Bauer im Weinviertel zu Hause. 13 Filialen, vier Kaffeehäuser, eine eigene Produktionsküche, und überall dasselbe Prinzip: frisch gebacken, regional gedacht, mit Liebe gemacht. Wenn Sie das nächste Mal eine unserer Filialen besuchen, denken Sie daran: Das Brot in Ihren Händen hat seine Reise vielleicht zehn Kilometer von hier begonnen. Das ist es, wofür wir stehen. Und das ist es, wofür #ichkauflokal steht.`,
    ],
  },
  {
    slug: "was-ist-sauerteig",
    title: "Was ist Sauerteig, und warum macht er Brot bekömmlicher?",
    excerpt:
      "Sauerteig ist kein Trend. Er ist das älteste Triebmittel der Welt und der Grund, warum unser Brot so lange frisch bleibt und so gut schmeckt.",
    category: "Handwerk",
    image: "/images/produkte/brot/hausbrot-rund.jpg",
    href: "/blog/was-ist-sauerteig",
    readTime: "5 Min.",
    date: "05.06.2026",
    body: [
      `Sauerteig ist so alt wie das Brotbacken selbst. Jahrtausende vor Erfindung der Hefe haben Menschen Mehl mit Wasser gemischt, die Schüssel stehen gelassen und beobachtet, wie das Gemisch zu leben begann. Was damals wie Magie wirkte, ist heute Wissenschaft: Die natürlichen Milchsäurebakterien und wilden Hefen, die in Mehl, Luft und Wasser vorkommen, beginnen zu fermentieren. Sie bauen Stärke ab, produzieren Kohlendioxid und Säuren und verwandeln einen schweren Teig in ein luftiges, aromatisches Brot mit langer Frischehaltung.`,

      `In unserer Backstube in Wetzelsdorf führen wir unseren Sauerteig seit über einem Jahrzehnt täglich weiter. Das bedeutet: Jeden Tag wird ein Teil des alten Teigs abgenommen, mit frischem Weinviertel-Mehl und Wasser gefüttert und weiter gereift. So lebt unser Sauerteig nicht einen Tag, nicht eine Woche. Er trägt die Geschichte von Tausenden Broten in sich. Dieses kontinuierliche Führen macht den Unterschied. Ein junger Sauerteig schmeckt flach. Ein gereifter Sauerteig hat Tiefe, Komplexität und jenen unverwechselbaren Geschmack, den man in einem industriell gebackenen Brot nie findet.`,

      `Aber Sauerteig ist nicht nur eine Frage des Geschmacks. Er macht Brot auch nachweislich bekömmlicher. Einer der wichtigsten Mechanismen dabei ist der Abbau von Phytinsäure. Phytinsäure kommt natürlicherweise in Getreide vor und bindet Mineralstoffe wie Eisen, Zink und Magnesium so, dass der Körper sie kaum aufnehmen kann. Während der langen Fermentation mit Sauerteig produzieren die Bakterien das Enzym Phytase und bauen die Phytinsäure weitgehend ab. Das Ergebnis: Die Mineralstoffe im Brot werden für unseren Körper überhaupt erst zugänglich. Sauerteigbrot ist also nicht nur ein besseres Brot, es ist ein ernährungsphysiologisch wertvolleres Brot.`,

      `Ein weiterer Vorteil betrifft das Gluten. Viele Menschen berichten, dass sie normales Weizenbrot schwer vertragen, Sauerteigbrot aber problemlos essen können. Das hat einen biologischen Grund: Während der Fermentation beginnen die Bakterien das Gluten vorzuverdauen. Die langen Proteinketten werden aufgespalten, die Struktur des Glutens verändert sich. Für Menschen ohne Zöliakie, die aber auf industriell gefertigtes Brot empfindlich reagieren, kann Sauerteigbrot eine echte Erleichterung sein. Unser Hausbrot und unser Weinviertler Landbrot werden deshalb von vielen Kund:innen ausdrücklich wegen ihrer Bekömmlichkeit geschätzt.`,

      `Dazu kommt der glykämische Index. Industriebrot, schnell gemischt und schnell gebacken, lässt den Blutzucker rasch ansteigen und genauso rasch wieder abfallen. Sauerteigbrot hingegen, durch die Fermentation bereits teilweise aufgeschlossen, wird langsamer verdaut. Der Blutzucker steigt gleichmäßiger, die Sättigung hält länger an. Das ist kein Marketingversprechen, das ist biochemisch gut belegt. Wer unser Weinviertel-Vollkornbrot beim Frühstück isst, wird bemerken, dass der nächste Hunger deutlich später kommt als nach einem Schnellbrötchen vom Discounter.`,

      `Unser Mehl kommt fast ausschließlich aus dem Weinviertel. Kurze Wege, klare Herkunft, direkter Kontakt zu den Mühlen: Das ist uns wichtig. Weil ein guter Sauerteig nur mit gutem Ausgangsmehl funktioniert. Die Mikroorganismen, die den Teig zum Leben bringen, reagieren empfindlich auf Qualität. Minderwertiges Mehl, übermäßig behandelt oder zu schnell gemahlen, gibt einen schwachen Sauerteig. Weinviertel-Mehl, gereift, schonend verarbeitet, mit seinem natürlichen Eigengeschmack, gibt unserem Sauerteig die beste mögliche Grundlage. Daran halten wir fest, seit der ersten Generation.`,
    ],
  },
  {
    slug: "brot-richtig-lagern",
    title: "Brot richtig lagern: 6 Tipps aus unserer Backstube",
    excerpt:
      "Frisches Brot zu verschenken ist schade. Mit ein paar einfachen Kniffen hält unser Sauerteigbrot locker 5 Tage und schmeckt dabei immer besser.",
    category: "Tipps",
    image: "/images/produkte/brot/winzerwecken.jpg",
    href: "/blog/brot-richtig-lagern",
    readTime: "3 Min.",
    date: "28.05.2026",
    body: [
      `Wer bei uns ein Brot kauft, bekommt nicht nur frische Backware, er bekommt auch ein Lebensmittel, das bei richtiger Lagerung deutlich länger hält als ein industriell gebackenes Brot. Unser Sauerteig sorgt dafür: Die natürlichen Milchsäuren wirken konservierend, hemmen Schimmelbildung und erhalten die Krume länger saftig. Aber auch das beste Brot leidet, wenn man es falsch aufbewahrt. Hier sind sechs Tipps aus unserer Backstube: einfach, direkt, erprobt.`,

      `Tipp 1: Brotdose oder Leinenbrotbeutel statt Plastiktüte. Plastik lässt keine Luft durch, die Feuchtigkeit staut sich, die Kruste wird gummiartig und Schimmel hat leichtes Spiel. Eine Holzbrotdose oder ein Leinenbeutel lässt das Brot atmen, hält die Feuchtigkeit trotzdem gut genug, und bewahrt dabei die Kruste. Wer keinen Brotbeutel hat: Ein sauberes Küchentuch tut es genauso gut. Einfach locker einschlagen und kühl stellen.`,

      `Tipp 2: Schnittfläche nach unten legen. Das klingt nach Kleinigkeit, macht aber einen großen Unterschied. Über die offene Schnittfläche verdunstet das Brot am schnellsten und trocknet dort zuerst aus. Wer das Brot mit der Schnittfläche nach unten auf ein Holzbrett legt, verlangsamt diesen Prozess erheblich. Noch besser: Mit einem Brotmesser glatt schneiden, denn zerfaserte Schnittflächen trocknen schneller aus.`,

      `Tipp 3: Nie in den Kühlschrank. Das ist der häufigste Fehler. Im Kühlschrank retrogradiert die Stärke im Brot viel schneller, das Brot wird altbacken, trocken und verliert seinen Geschmack in wenigen Stunden. Die ideale Lagertemperatur liegt zwischen 15 und 20 Grad Celsius, also Zimmertemperatur oder ein kühler Keller. Unser Hausbrot hält dort problemlos drei bis fünf Tage.`,

      `Tipp 4: Einfrieren ist besser als wegwerfen. Wer weiß, dass er nicht das ganze Brot verbraucht, sollte es in Scheiben schneiden und portionsweise einfrieren. Einfach in einen Gefrierbeutel, Luft herausdrücken, fertig. Gefrorene Scheiben direkt aus dem Tiefkühler in den Toaster geben oder kurz auftauen lassen, und das Brot schmeckt fast wie frisch. Diese Methode eignet sich besonders für unser Vollkornbrot und den VollkornSepp.`,

      `Tipp 5: Aufbacken mit einem Schuss Wasser. Ein Brot, das schon zwei, drei Tage alt ist, lässt sich wunderbar auffrischen. Einfach kurz unter den Wasserhahn halten oder mit nassen Händen leicht befeuchten und bei 180 Grad für zehn Minuten in den Ofen. Die Kruste wird wieder knusprig, die Krume wird weich und das Brot duftet wie frisch gebacken. Besonders gut funktioniert das mit unserem Winzerwecken und dem Weinviertler Landbrot.`,

      `Tipp 6: Brot braucht Luft, aber nicht zu viel. Völlig offenes Liegenlassen auf der Ablage trocknet das Brot aus, vor allem an der Schnittfläche. Völlig luftdicht verpacken fördert Schimmel. Die goldene Mitte ist ein Beutel oder eine Dose, die leicht Luft zirkulieren lässt. Unser Sauerteig erledigt den Rest, denn er hält das Milieu im Inneren des Brotes so stabil, dass Schimmel kaum eine Chance bekommt. Das ist kein Zufall, das ist der Grund, warum wir auf echte Fermentation setzen und nicht auf chemische Konservierungsmittel.`,
    ],
  },
  {
    slug: "knuspertraum-halbgebacken",
    title: "Knuspertraum: Halbgebackenes Brot, frisch wie aus der Backstube",
    excerpt:
      "Frisches Brot um 8 Uhr abends? Mit unserem Knuspertraum ist das kein Wunschdenken, sondern 20 Minuten Vorfreude.",
    category: "Produkte",
    image: "/images/produkte/brot/hausbrot-rund.jpg",
    href: "/blog/knuspertraum-halbgebacken",
    readTime: "3 Min.",
    date: "15.05.2026",
    body: [
      `Es ist Sonntagmorgen. Das Wecker ist noch aus, draußen liegt die erste Morgenstille über dem Weinviertel, und der Gedanke, frisches Brot zu holen, fühlt sich weit weg an. Genau für diesen Moment haben wir Knuspertraum entwickelt. Halbgebackene Brote und Gebäcke, die zuhause in zwanzig Minuten fertig sind, mit allem, was frisch gebackenes Brot ausmacht. Dem Duft. Der Kruste. Der Wärme.`,

      `Was steckt dahinter? Knuspertraum-Produkte werden in unserer Backstube in Wetzelsdorf mit denselben Rezepturen und Zutaten gebacken wie unsere regulären Brote: echter Sauerteig, Weinviertel-Mehl, lange Teigführung. Der einzige Unterschied: Wir backen sie nur zur Hälfte. Der Teig ist durchgebacken, die innere Struktur ist fertig, aber die Kruste ist noch hell und weich. In diesem Zustand werden die Brote abgekühlt, verpackt und in alle unsere 13 Filialen geliefert.`,

      `Zuhause ist die Zubereitung denkbar einfach. Ofen auf 200 Grad vorheizen, Brot oder Gebäck hineingeben, 15 bis 20 Minuten warten. In dieser Zeit passiert die Maillard-Reaktion, die chemische Umwandlung von Zuckern und Aminosäuren unter Hitze, die für die goldbraune Kruste und das typische Backduft-Aroma verantwortlich ist. Diese Reaktion entsteht erst beim letzten Backschritt, also genau dann, wenn das Brot in Ihrem Ofen liegt. Das bedeutet: Die Kruste knackt frisch für Sie, nicht für uns.`,

      `Im Sortiment finden sich das Knuspertraum Hausbrot, Semmeln, Kipferl und saisonale Gebäcke. Das Hausbrot eignet sich besonders gut, denn es ist groß genug für eine Familie am Frühstückstisch und klein genug, dass man es spontan kauft und noch am selben Abend fertig backt. Die Semmeln funktionieren perfekt für alle, die morgens keine Zeit haben, aber keine Lust auf kaltes, abgepacktes Gebäck haben.`,

      `Der Vorteil gegenüber Tiefkühlware ist spürbar. Knuspertraum-Produkte werden nicht eingefroren, sondern gekühlt geliefert. Der Teig ist noch lebendig, die Aromen sind erhalten. Wer tiefgefrorenes Brot kennt, weiß: Es geht, aber es ist nie ganz dasselbe. Knuspertraum kommt dem frisch aus dem Ofen entnommenen Laib am nächsten, den man außer beim Bäcker nur aus der eigenen Backstube kennt.`,

      `Knuspertraum-Produkte gibt es in allen 13 Filialen der Bäckerei Bauer: im Weinviertel, in der Umgebung von Mistelbach und in unseren Kaffeehäusern. Wer auf Nummer sicher gehen will, fragt kurz beim Filialteam nach, welche Sorten gerade verfügbar sind. Besonders beliebt sind die Knuspertraum-Semmeln für den Sonntagsfrühstückstisch und das Hausbrot für gemütliche Abende unter der Woche.`,
    ],
  },
  {
    slug: "vollkornsepp-brot-des-jahres",
    title: "Der VollkornSepp: unser Brot des Jahres",
    excerpt:
      "Kräftig, ehrlich, mit Sesamkruste. Warum der VollkornSepp kein gewöhnliches Vollkornbrot ist und warum er bei uns das Brot des Jahres wurde.",
    category: "Produkte",
    image: "/images/produkte/brot/vollkorn-sepp.jpg",
    href: "/blog/vollkornsepp-brot-des-jahres",
    readTime: "4 Min.",
    date: "01.04.2026",
    body: [
      `Manche Brote entstehen am Reißbrett. Andere wachsen langsam, aus Erfahrung, aus Versuchen, aus dem ehrlichen Gespräch zwischen Bäckerin und Mehl. Der VollkornSepp ist ein solches Brot. Sein Name klingt bodenständig, weil er es ist. Es gibt keine blumige Marketinggeschichte dahinter. Nur ein Brot, das nach jahrelanger Entwicklung in unserer Backstube in Wetzelsdorf genau das geworden ist, was es sein soll: vollständig, kräftig, mit Charakter.`,

      `Die Idee war simpel: ein Vollkornbrot backen, das keine Abstriche macht. Kein trockener Kompromiss. Kein Brot, das nach gesunder Pflicht schmeckt und nach zwei Tagen zerfällt. Sondern ein Vollkornbrot, das so saftig ist wie ein Weizenbrot, so aromatisch wie ein Roggenbrot und so haltbar wie gutes Sauerteigbrot. Das klingt nach Widersprüchen, und war am Anfang auch einer. Es hat gedauert. Viele Laibe, viele Versuche, viele Gespräche mit Bäckermeisterin Marion Schöfmann, bis die Rezeptur stand.`,

      `Was den VollkornSepp auszeichnet, beginnt beim Getreide. Wir verwenden regionale Vollkornsorten aus dem Weinviertel, schonend gemahlen, nicht zu fein, nicht zu grob. Der Kleieanteil ist hoch, das ist wichtig für den Geschmack und für die Nährstoffe. Vollkornmehl enthält alle drei Bestandteile des Getreidekorns: Mehlkörper, Keimling und Kleie. Industriebrot verwendet meist ausschließlich den Mehlkörper. Der Keimling und die Kleie, in denen ein Großteil der Vitamine, Mineralstoffe und Ballaststoffe stecken, werden beim industriellen Mahlprozess entfernt. Beim VollkornSepp bleibt alles drin.`,

      `Die lange Teigführung mit unserem Sauerteig erledigt den Rest. Durch die Fermentation werden die Ballaststoffe im Vollkornmehl teilweise aufgeschlossen, das Brot wird leichter verdaulich, ohne an Substanz zu verlieren. Der glykämische Index sinkt, die Sättigungswirkung steigt. Wer morgens zwei Scheiben VollkornSepp mit Butter isst, wird bis zum Mittag gut damit auskommen. Das ist keine Vermutung, das hören wir täglich von unseren Kund:innen.`,

      `Die Sesamkruste ist kein Zufall. Sesam passt geschmacklich perfekt zum nussigen Aromenspektrum des Vollkorns, und er gibt der Kruste eine zusätzliche Knusprigkeit, die beim ersten Anschnitt sofort spürbar ist. Außerdem liefert Sesam hochwertige Fettsäuren, Calcium und Magnesium, ein kleines Bonus-Paket auf jedem Laib. Das Brot riecht nach Sesam, nach geröstetem Getreide und nach dem tiefen, satten Aroma eines langen Fermentationsprozesses. Wer es einmal angeschnitten hat, weiß: Das ist ein Brot, das man nicht vergisst.`,

      `Als wir den VollkornSepp zum Brot des Jahres ernannt haben, war das keine Marketingentscheidung. Es war eine Anerkennung für eine jahrelange Entwicklungsarbeit und für ein Produkt, das alles verkörpert, wofür Bäckerei Bauer steht. Handwerk ohne Abkürzungen, Zutaten mit Herkunft, Geschmack ohne Kompromisse. Den VollkornSepp gibt es in allen 13 Filialen und regelmäßig auch in unserer 2+1-Aktion. Wer ihn noch nicht kennt: Es ist höchste Zeit.`,
    ],
  },
  {
    slug: "glutenreduziert-was-bedeutet-das",
    title: "Glutenreduziert statt glutenfrei: was steckt dahinter?",
    excerpt:
      "Viele unserer Kund:innen fragen nach glutenfreiem Brot. Wir erklären ehrlich, was möglich ist und warum Sauerteig für manche Menschen schon ein großer Unterschied ist.",
    category: "Tipps",
    image: "/images/produkte/brot/fitberry.jpg",
    href: "/blog/glutenreduziert-was-bedeutet-das",
    readTime: "4 Min.",
    date: "10.03.2026",
    body: [
      `Es ist eine der häufigsten Fragen in unseren Filialen: „Haben Sie glutenfreies Brot?“ Und wir geben darauf jedes Mal dieselbe ehrliche Antwort: Nein, echtes glutenfreies Brot können wir nicht garantieren. Nicht weil wir es nicht wollen, sondern weil wir in einer Bäckerei arbeiten, in der jeden Tag Weizen, Roggen und Dinkel verarbeitet werden. Mehlstaub ist allgegenwärtig. Die Anlagen sind gemeinsam genutzt. Wer an Zöliakie leidet und auf absolut glutenfreie Produkte angewiesen ist, muss das wissen. Das sind wir unseren Kund:innen schuldig.`,

      `Aber die Geschichte hört dort nicht auf. Denn zwischen Zöliakie und dem vagen Gefühl, Brot nicht gut zu vertragen, liegt ein breites Spektrum. Viele Menschen reagieren auf industriell hergestelltes Weizenbrot mit Blähungen, Völlegefühl oder Trägheit, ohne an einer Glutenunverträglichkeit im medizinischen Sinn zu leiden. Für diese Menschen kann Sauerteigbrot eine echte Erleichterung sein. Der Grund liegt in der Fermentation.`,

      `Während der langen Sauerteig-Fermentation produzieren die Milchsäurebakterien Enzyme, die Gluten teilweise abbauen. Die langen Glutenprotein-Ketten werden aufgespalten, die Struktur verändert sich. Das Ergebnis ist kein glutenfreies Brot. Der Glutengehalt sinkt, aber er verschwindet nicht vollständig. Was sich aber ändert, ist die Art, wie das Gluten im Körper ankommt. Für Menschen mit nicht-zöliakischer Glutensensitivität, einer Erkrankung, die zunehmend anerkannt wird, kann dieser Unterschied erheblich sein. Viele berichten, dass sie unser Hausbrot und unseren Winzerwecken problemlos essen, während industrielles Weizenbrot bei ihnen Beschwerden verursacht.`,

      `Wer bei uns nach besonders gut verträglichen Broten sucht, dem empfehlen wir das Fitberry Brot und das Dinkel-Vollkornbrot. Das Fitberry Brot wurde speziell für eine leichtere, bekömmlichere Rezeptur entwickelt, mit einer ausgewogenen Mischung aus Getreide und Saaten, langer Teigführung und einem besonders milden Geschmacksprofil. Das Dinkel-Vollkornbrot profitiert davon, dass Dinkel ein anderes Glutenmuster hat als moderner Hochleistungsweizen. Viele Menschen vertragen es besser, auch wenn es streng genommen noch immer Gluten enthält.`,

      `Verträglichkeit ist individuell. Die Produktbeschreibung ersetzt keine medizinische Beratung.`,

      `Unser Rat: Komm einfach in eine unserer Filialen und sprich das Filialteam direkt an. Wir kennen unsere Produkte gut, wissen welche Brote welche Zutaten enthalten, und können im Gespräch herausfinden, was für dich passen könnte. Was wir nicht tun werden: falsche Versprechen machen. Wer Zöliakie hat, braucht zertifiziert glutenfreie Produkte aus einer dedizierten glutenfreien Produktion, und das können und wollen wir nicht sein. Wer aber nach einem bekömmlichen, echten Sauerteigbrot sucht, das ohne künstliche Zusatzstoffe auskommt und mit regionalen Zutaten handwerklich gebacken wurde, ist bei uns genau richtig.`,
    ],
  },
  {
    slug: "ich-kauf-lokal-wirtschaft-in-noe",
    title: `Ich kauf lokal: Bäckerei Bauer im Magazin „Wirtschaft in NÖ“`,
    excerpt:
      "Warum echtes Handwerk, regionale Zutaten und kurze Wege mehr wert sind als jeder Discounter-Preis. Geschäftsführer Dr. Stefan Bauer im Interview über 65 Jahre Familiengeschichte, den Vollkornsepp und das, was Bäckerei Bauer wirklich ausmacht.",
    category: "Tradition",
    image: "/images/produkte/brot/vollkorn-sepp.jpg",
    href: "/blog/ich-kauf-lokal-wirtschaft-in-noe",
    readTime: "6 Min.",
    date: "11.06.2026",
    source: "Magazin Wirtschaft in NÖ",
    body: [
      `Im Rahmen der Initiative „Ich kauf lokal“ hat das Magazin „Wirtschaft in NÖ“ die Bäckerei Karl Bauer GmbH für seine monatliche Partnerbetriebe-Serie vorgestellt. Geschäftsführer Dr. Stefan Bauer hat die Fragen persönlich beantwortet.`,

      `1. Seit wann gibt es Ihr Unternehmen?`,
      `Alles begann 1960, als mein Großvater Georg Bauer in Wetzelsdorf im Weinviertel seine kleine Bäckerei eröffnete. Mit viel Leidenschaft, handwerklichem Können und dem festen Glauben daran, dass gutes Brot Menschen verbindet. Was als bescheidene Dorfbäckerei begann, ist heute ein Betrieb mit 13 Filialen, vier Kaffeehäusern und einer Produktionsküche, aus der jeden Morgen frische Backwaren in die gesamte Region geliefert werden. Wir führen den Betrieb in der dritten Generation als Bäckerei Karl Bauer GmbH. Im vergangenen Jahr durften wir gleich zwei große Jubiläen feiern: 65 Jahre Bäckerei Bauer und 30 Jahre ADEG Bauer Ladendorf. Diese Meilensteine haben uns noch einmal gezeigt, wie tief wir in dieser Region verwurzelt sind.`,

      `2. Was bieten Sie Ihren Kundinnen und Kunden an?`,
      `Eigentlich alles, was der Tag braucht. Wir sind weit mehr als eine Bäckerei, auch wenn das Backen unser Herzstück bleibt. Jeden Morgen verlassen frische Brote, Semmeln, Kipferl, Wachauer, Kornspitze und unzählige Gebäckvarianten unsere Produktion in Wetzelsdorf. Wer Lust auf etwas Süßes hat, findet bei uns feine Mehlspeisen, Plunder, Croissants und unsere beliebten Leckereien. Mit der Linie Knuspertraum bieten wir halbgebackene Weckerl zum Fertigbacken zuhause an, für alle, die sich den Duft von frischem Weckerl direkt in die Küche holen wollen.`,
      `Neben dem Bäckereiverkauf betreiben wir vier Kaffeehäuser, in denen man bei einem guten Kaffee und hausgemachten Mehlspeisen wirklich durchatmen kann. Familien schätzen unsere Schulbuffets, die Kindern jeden Tag eine warme, frische Jause ermöglichen. Und wer einkaufen möchte wie im großen Supermarkt, aber lieber zum Greisler ums Eck geht, ist bei uns genau richtig. Als ADEG-Partner führen wir auch in unseren kleineren Filialen dasselbe Vollsortiment zu denselben Preisen wie ein großer ADEG-Markt. Alle Standorte und unser gesamtes Sortiment findet man auf www.example.invalid.`,

      `3. Was zeichnet Ihren Betrieb besonders aus?`,
      `Diese Vielseitigkeit ist es, die uns von anderen unterscheidet. Bei uns kann jemand gleichzeitig frisches Brot kaufen, einen Kaffee trinken, das Kind mit einem Schulbuffet versorgen und den Wocheneinkauf erledigen. Das ist nicht geplant entstanden, das ist über Jahrzehnte gewachsen, weil wir immer nah an den Bedürfnissen der Menschen geblieben sind.`,
      `Aber was uns wirklich auszeichnet, ist die Überzeugung, mit der wir backen. Wir arbeiten mit Sauerteig, langen Teigruhezeiten und Rezepturen, die über Generationen verfeinert wurden. Kein schnelles Aufbacken, kein Kompromiss bei der Qualität. Unser Vollkornsepp, der als Brot des Jahres ausgezeichnet wurde, steht stellvertretend dafür: regionale Getreidesorten, schonend verarbeitet, mit einer Kruste, die knackt, und einer Krume, die satt macht. Das ist Handwerk, das man schmeckt.`,

      `4. Was bedeutet „lokal einkaufen“ für Sie persönlich?`,
      `Für mich ist lokales Einkaufen eine Herzensangelegenheit. Es ist die bewusste Entscheidung, der eigenen Region etwas zurückzugeben. Wenn ich weiß, woher das Mehl kommt, wer es gemahlen hat und wer das Brot gebacken hat, dann ist das ein Gefühl von Vertrauen und Verbundenheit, das kein anonymer Onlineshop ersetzen kann. Bei uns im Weinviertel wächst das Getreide, aus dem unsere Brote werden, oft keine 20 Kilometer von unserer Backstube entfernt. Das ist für mich die reinste Form von Qualität: kurze Wege, klare Herkunft, ehrlicher Geschmack. Lokal einkaufen bedeutet für mich: Gesicht hinter dem Produkt, Handschlag statt Barcode.`,

      `5. Welche Vorteile sehen Sie darin, regionale Betriebe zu unterstützen?`,
      `Jeder Euro, der bei uns im Weinviertel bleibt, wirkt. Er sichert Arbeitsplätze, stärkt lokale Lieferanten und hält das Leben in unseren Ortschaften am Laufen. Wir alle profitieren davon, wenn die Bäckerei um die Ecke noch existiert, wenn der Greisler im Dorf noch offen hat und wenn Familienbetriebe wie unserer über Generationen bestehen können. Dazu kommt etwas, das man auf keiner Produktverpackung findet: der direkte Draht zum Menschen. Unsere Bäckerinnen und Bäcker wissen, was die Kundschaft mag. Sie kennen die Stammkundinnen, die jeden Morgen dieselbe Semmel holen. Das ist eine Qualität, die kein Konzern kaufen kann.`,

      `6. Gibt es etwas, das viele Menschen über Ihren Betrieb noch nicht wissen?`,
      `Viele wissen nicht, dass hinter jedem unserer Brote eine eigene Geschichte steckt. Der Allerheiligenstriezel, den wir nach altem Weinviertel-Brauch backen. Unser Fitberry Brot, das modern und gesund ist und trotzdem nach echter Bäckerei schmeckt. Und dann natürlich unser Dinkel-Vollkornsepp, der nicht einfach ein Vollkornbrot ist, sondern ein Brot mit Charakter, mit Biss, mit einer Kruste, bei der man sofort weiß: Das ist kein Industrieprodukt.`,
      `Viele wissen auch nicht, dass unsere kleinen Greisler-Filialen dieselben ADEG-Preise haben wie ein großer Supermarkt. Man muss also nicht in die Stadt fahren, um günstig und vollständig einzukaufen. Das Angebot ist vor Ort, der Preis stimmt, und man kennt die Menschen hinter der Kasse beim Namen. Aktuelles und alle Angebote findet man auf www.example.invalid.`,

      `7. Worauf sind Sie besonders stolz?`,
      `Auf unsere Menschen. Allen voran möchte ich unserer Prokuristin Therese Mayer meinen aufrichtigen Dank aussprechen. Sie ist das organisatorische Rückgrat unseres Betriebs und trägt tagtäglich dazu bei, dass hinter den Kulissen alles reibungslos funktioniert. Ohne ihr Engagement und ihre Verlässlichkeit wäre vieles von dem, was wir nach außen zeigen, schlicht nicht möglich. Darüber hinaus bin ich stolz auf jede einzelne Mitarbeiterin und jeden einzelnen Mitarbeiter, der früh morgens aufsteht, damit die Semmel um sieben Uhr frisch auf dem Tisch liegt. Unsere Bäckerinnen und Bäcker beginnen ihre Arbeit, wenn die meisten noch schlafen. Das verdient echten Respekt und echte Wertschätzung.`,

      `8. Was macht Ihnen an Ihrer Arbeit am meisten Freude?`,
      `Wenn jemand ein Brot anschneidet, kurz inne hält und sagt: „Das schmeckt wie früher.“ Dieser Moment ist unbezahlbar. Er zeigt mir, dass wir auf dem richtigen Weg sind. Genauso begeistert mich die Entwicklung neuer Produkte, wenn aus einer Idee in der Backstube ein Brot wird, das die Kundschaft wirklich liebt. Beim Vollkornsepp war das genau so. Er ist nicht am Reißbrett entstanden, sondern aus dem Wunsch heraus, ein Vollkornbrot zu backen, das keine Kompromisse kennt: beim Geschmack nicht, bei der Zutat nicht, bei der Verarbeitung nicht.`,
      `Und ich freue mich jedes Mal, wenn ich in eine Filiale komme und sehe, wie unterschiedlich die Menschen bei uns ein und aus gehen. Die Oma, die ihren Kaffee trinkt. Die Mutter, die nach der Schule mit dem Kind eine Jause holt. Der Bauer, der beim Einkauf kurz auf ein Schwätzchen anhält. Das ist für mich Bäckerei Bauer.`,

      `9. Gibt es aktuelle Angebote, Projekte oder Neuigkeiten, die Sie gerne erwähnen möchten?`,
      `Wir haben immer etwas, das sich lohnt. Aktuell empfehle ich besonders unseren Dinkel-Vollkornsepp, unser Brot des Jahres, der nicht nur geschmacklich überzeugt. Ein Brot, das man einmal probiert hat und immer wieder haben möchte. Als ADEG-Partner haben wir außerdem laufend wechselnde Angebote quer durch das gesamte Sortiment, von Frischware bis Haushalt. Wer immer auf dem Laufenden bleiben möchte, findet alle Neuigkeiten, Aktionen und saisonalen Spezialitäten auf www.example.invalid sowie auf Instagram und Facebook unter @baeckerei_bauer.`,

      `10. Was möchten Sie Ihren Kundinnen und Kunden beziehungsweise den Leserinnen und Lesern mitgeben?`,
      `Gönnen Sie sich das Echte. Ein Brot, das nach Brot schmeckt. Eine Semmel, die noch warm ist. Einen Kaffee, bei dem man sitzen bleibt. Kommen Sie auf einen Kaffee vorbei, holen Sie sich frisches Brot, erledigen Sie Ihren Einkauf beim Greisler ums Eck, schicken Sie das Kind mit einer frischen Jause in die Schule. Das alles ist bei uns möglich, nah, persönlich und zu fairen Preisen. Manche Dinge sind einfach nicht zu ersetzen und genau dafür stehen wir jeden Tag auf.`,
    ],
  },
  {
    slug: "ein-gutes-brot-braucht-zeit",
    title: "Ein gutes Brot braucht Zeit und ein starkes Team",
    excerpt:
      "86 Mitarbeitende, kurze Wege, echte Wertschätzung. Die Bäckerei Karl Bauer zeigt, wie Handwerk und Menschlichkeit Hand in Hand gehen, ein Bericht der Niederösterreichischen Krone.",
    category: "Team",
    image: "/images/blog/stefan-therese-krone.webp",
    href: "/blog/ein-gutes-brot-braucht-zeit",
    readTime: "4 Min.",
    date: "06.06.2025",
    body: [
      `In der Bäckerei Karl Bauer in Wetzelsdorf wird nicht nur Brot gebacken, sondern auch Gemeinschaft gelebt. Mit Herz, Handwerk und einem Team, das mehr verbindet als nur der Job, entsteht hier Tag für Tag echte Qualität, aus vollster Überzeugung.`,
      `Es duftet nach frischem Brot, Mehlstaub liegt in der Luft, die Hitze der Öfen strahlt Wärme aus, und nicht nur im wörtlichen Sinn. 86 Mitarbeitende sorgen bei der Bäckerei Karl Bauer GmbH dafür, dass aus einfachen Zutaten wie Wasser, Mehl und Zeit köstliche Brote werden. Für Geschäftsführer Stefan Bauer ist klar: „Ein gutes Brot gelingt nur, wenn alles perfekt zusammenspielt. Genauso ist es mit unserem Team.“`,
      `Viele der Mitarbeiter sind seit über zehn Jahren dabei. Sie kennen jeden Handgriff, jede Rezeptur und auch einander sehr gut. Ihre Loyalität und Erfahrung sind das Fundament, auf dem der Betrieb wächst. Therese Mayer, Prokuristin und rechte Hand des Chefs, steuert die gesamte Personalplanung. Sie sagt: „Ich bin seit 14 Jahren hier und schätze besonders das familiäre Klima. Wir stehen zusammen, auch wenn’s mal stressig wird.“`,
      `Was das Unternehmen besonders macht, ist der Blick auf den Menschen hinter dem Arbeitsplatz. Flexible Dienstpläne, wohnortnahe Einstätze und familienfreundliche Arbeitszeiten sorgen dafür, dass Beruf und Privatleben gut harmonieren. „Wir pflegen Brot, und wir pflegen Menschen,“ bringt es Stefan Bauer auf den Punkt.`,
      `Dazu kommen flache Hierarchien, gemeinsame Aktivitäten und echte Entwicklungsmöglichkeiten: „Wenn aus unseren Lehrlingen Backmeister werden, macht uns das besonders stolz.“ Die Herausforderungen sind da, besonders beim Thema Fachkräftemangel. Doch anstatt zu klagen, wird ausgebildet, begleitet und auch Quereinsteigern eine Chance gegeben.`,
      `Die Verbundenheit mit der Region zeigt sich nicht nur in den Zutaten, sondern auch in den Menschen: „Wenn Kunden unsere Dorffilialen als ihr Wohnzimmer bezeichnen, dann wissen wir: Wir machen etwas richtig,“ sagt Therese Mayer mit einem Lächeln.`,
    ],
  },
  {
    slug: "frauenpower-in-der-fuehrungsriege",
    title: "Frauenpower in der Führungsriege",
    excerpt:
      "Bäckermeisterin Marion Schöfmann und Prokuristin Therese Mayer stärken die Bäckerei Karl Bauer in der Führung, ein Besuch der FIW-Bezirksvorsitzenden zum Frauentag 2024.",
    category: "Team",
    image: "/images/blog/frauenpower-fiw-2024.jpg",
    imagePosition: "object-top",
    href: "/blog/frauenpower-in-der-fuehrungsriege",
    readTime: "3 Min.",
    date: "08.03.2024",
    source: "NÖN Mistelbach",
    sourceUrl: "https://www.noen.at/mistelbach/besuch-frauenpower-in-der-baeckerei-karl-bauer-412848603",
    body: [
      `FIW-Bezirksvorsitzende Eva Helmer-Schneider besuchte am Frauentag, 8. März 2024, die Bäckerei Karl Bauer in Wetzelsdorf.`,
      `Im Bäckermeisterbetrieb Bäckerei Karl Bauer GmbH gibt es seit einiger Zeit auch Frauenpower in der Führungsriege: Bäckermeisterin Marion Schöfmann ist seit Juli 2023 Backstubenleiterin und als solche für die Koordination und Abwicklung des Produktionsablaufes zuständig. Theresia Mayer fungiert seit September 2022 als Prokuristin und verantwortet die Bereiche Logistik, Personal und Buchhaltung.`,
      `Beide entlasten damit den handelsrechtlichen Geschäftsführer Stefan Bauer, der sich auf Controlling und Marketing fokussieren kann. Auch Gesellschafter und Seniorchef Bäckermeister Karl Bauer ist immer noch gerne im Betrieb aktiv.`,
      `Frau in der Wirtschaft-Bezirksvorsitzende Eva Helmer-Schneider besuchte gemeinsam mit Bezirksstellenleiter Klaus Kaweczka die Produktionsstätte im Poysdorfer ecoplus-Wirtschaftspark und konnte so einen Blick hinter die Kulissen des erfolgreichen Bäckerei-, Cafébetreiber- und Nahversorgerbetriebes werfen.`,
    ],
  },
  {
    slug: "65-jahre-baeckerei-bauer",
    title: "65 Jahre Bäckerei Bauer: Wie alles begann",
    excerpt:
      "Seit Georg Bauer 1960 die Bäckermeisterprüfung ablegte, steht die Familie Bauer für Handwerk, Qualität und regionale Nahversorgung im Weinviertel.",
    category: "Tradition",
    image: "/images/geschichte/georg-bauer-1960.png",
    href: "/blog/65-jahre-baeckerei-bauer",
    readTime: "4 Min.",
    date: "01.05.2025",
    body: [
      `Ein Traum, Mehlstaub und viel Handarbeit: So könnte die Geschichte der Bäckerei Bauer in Herrnbaumgarten beginnen. Was heute ein regional verankerter Nahversorger mit 13 Filialen und eigener Backstube ist, nahm vor 65 Jahren seinen Anfang in bescheidenen Verhältnissen, mit einer Vision und einer gehörigen Portion Durchhaltevermögen.`,
      `Nach dem Krieg zog Georg Bauer, gebürtig aus Althöflein, mit seiner Frau Maria, geborene Bayer, in deren Elternhaus in Herrnbaumgarten. In den wirtschaftlich schwierigen Jahren war es nicht selbstverständlich, den Schritt in die Selbstständigkeit zu wagen. Doch Georg Bauer hatte ein Ziel: eine eigene Bäckerei.`,
      `1960 legte er die Bäckermeisterprüfung ab, ein entscheidender Meilenstein. Gemeinsam mit Maria richtete er eine kleine Backstube und ein Verkaufslokal im Haus in der Großen Zeile 65 ein. Die Anfänge waren einfach: gebacken wurde noch mit viel Handarbeit, ausgeliefert mit dem Lieferwagen direkt an Lebensmittelhändler und Gastwürte im Umland, von Steinebrunn bis Stützenhofen.`,
      `Auch die drei Kinder, Wilma, Maria und Karl, standen schon früh in der Backstube, kneteten Teig oder verteilten Gebäck. Die Bäckerei war Familienbetrieb im besten Sinne, jede helfende Hand zählte.`,
      `Trotz des Erfolgs kamen die Herausforderungen: Aus gesundheitlichen Gründen musste Georg Bauer die Backstube früher als geplant übergeben. So war es sein Sohn Karl Bauer, der 1977 mit gerade 17 Jahren als jüngster Bäckermeister Österreichs die Verantwortung übernahm. Er war es auch, der mit Mut zur Weiterentwicklung den Grundstein für die spätere Expansion legte.`,
      `„Mit 17 bist du kein Unternehmer, aber du lernst schnell.“ So beschreibt Karl Bauer rückblickend den Moment, als er 1977, kaum volljährig, als damals jüngster Bäckermeister Österreichs das Handwerk seines Vaters weiterführte.`,
      `Karl Bauer aber zögerte nicht. Nur zwei Jahre später, 1979, eröffnete er ein neues Geschäftslokal in der Hauptstraße 97 in Herrnbaumgarten, heute die Zentrale der Bäckerei Bauer. Früh erkannte er, dass Brot allein nicht ausreichte, um sich als Nahversorger in der Region zu etablieren. Er baute nicht nur das Sortiment aus, sondern belieferte auch mit einem Ford Transit Lieferwagen persönlich Gastronomie- und Einzelhandelskunden in umliegenden Gemeinden wie Falkenstein, Ottenthal oder Wilfersdorf.`,
      `Heute steht die Bäckerei Bauer für weit mehr als Brot und Gebäck. Mit 13 Standorten, darunter vier Kaffeehäuser, mehreren ADEG-Märkten und einem modernen Produktionsstandort in Wetzelsdorf, ist das Unternehmen ein regionaler Nahversorger mit Herz und Haltung. Nachhaltigkeit ist kein Lippenbekenntnis, sondern gelebter Alltag.`,
      `So bringt es Karl Bauer auf den Punkt: „Wir sind mehr als ein Geschäft. Unsere Kaffeeecken sind Treffpunkte, unsere Brote sind ein Stück Heimat. Und wenn ich sehe, wie junge Mitarbeiter:innen heute mit Leidenschaft backen, dann weiß ich: Der Geist von damals lebt weiter. Und ja, das macht mich sehr stolz.“`,
      `Was wünscht er der Bäckerei für die Zukunft? „Mut zum Weiterdenken, aber ohne die Wurzeln zu vergessen. Regionalität, Handarbeit, Qualität: Das muss bleiben. Aber gleichzeitig dürfen wir uns nicht scheuen, neue Wege zu gehen. Wenn das gelingt, wird es auch ein 75- und 100-Jahr-Jubiläum geben.“`,
    ],
  },
  {
    slug: "striezel-poschn",
    title: "Striezel Posch’n: Ein Brauchtum, das die Zeit überdauert",
    excerpt:
      "Zu Allerheiligen tragen Burschen ihren Mädchen einen Striezel. Ein Brauch aus dem Weinviertel, den wir hochhalten, mit dem besten Striezel weit und breit.",
    category: "Brauchtum",
    image: "/images/produkte/leckereien/striezel-poschn.jpg",
    href: "/blog/striezel-poschn",
    readTime: "3 Min.",
    date: "04.11.2024",
    body: [
      `Im Weinviertel gibt es Traditionen, die von Generation zu Generation weitergegeben werden und das Leben in unserer Region bereichern. Eine dieser besonderen Bräuche ist das „Striezel Posch’n“, eine Tradition, die besonders zur Erntedankzeit und rund um Allerheiligen gepflegt wird. Striezel, unser berühmtes, fluffiges Hefegebäck, steht dabei im Mittelpunkt und wird nicht nur gegessen, sondern auch erspielt. Beim „Striezel Posch’n“ entscheidet das Würfelglück, wer den Striezel nach Hause nehmen darf!`,
      `Ein besonders treuer Freund und Kunde der Bäckerei Bauer, Herr Egon Englisch, erzählt von dieser Tradition, die er seit über 35 Jahren mit seiner „Bauch-Kaffeerunde“ und seit 22 Jahren mit seiner „Tratscherlrunde“ pflegt. Für ihn und viele andere in der Region ist das Striezel Posch’n mehr als nur ein Spiel. Es ist ein Ritual, das Familien und Freunde zusammenbringt und jedes Jahr auf Neue Freude bringt.`,
      `Im Zentrum steht natürlich der Striezel. Alle Teilnehmenden sitzen um den Tisch, und jeder würfelt nacheinander. Wer das Glück hat, eine bestimmte Zahl oder Kombination zu würfüln, darf den begehrten Striezel mit nach Hause nehmen. Für die Menschen im Weinviertel ist es ein wertvolles Stück Heimat und Zusammenhalt.`,
      `Herr Englisch erzählt uns, wie er diese Tradition nun auch mit seinen Enkerln weiterführt. „Es ist schön zu sehen, wie meine Enkel mit leuchtenden Augen am Tisch sitzen und gespannt auf das nächste Würfüln warten“, erzählt er. Dieses Strahlen, das ist es, was die Tradition lebendig hält.`,
      `Als Bäckerei Bauer sind wir stolz, Teil dieser Tradition sein zu dürfen. Es sind Menschen wie Herr Englisch und seine Familie, die mit ihrem Engagement und ihrer Leidenschaft das Weinviertel und seine Bräuche lebendig halten. Striezel Posch’n ist für uns Ausdruck der Verbundenheit und der Freude, die wir in unserer Region teilen.`,
      `Wir sagen DANKE an alle, die diese Tradition Jahr für Jahr mit uns feiern, und wir freuen uns darauf, auch in den kommenden Jahren viele Striezel für glückliche Gewinner zu backen!`,
    ],
  },
  {
    slug: "allerheiligenstriezel",
    title: "Allerheiligenstriezel: Tradition aus dem Weinviertel",
    excerpt:
      "Nach altem, geheimem Rezept, aus regionalen Zutaten: unser Allerheiligenstriezel ist ein Stück Weinviertel in jeder Scheibe. Jetzt vorbestellen.",
    category: "Tradition",
    image: "/images/produkte/leckereien/striezel-poschn.jpg",
    href: "/blog/allerheiligenstriezel",
    readTime: "3 Min.",
    date: "12.10.2024",
    body: [
      `Allerheiligen steht vor der Tür, und damit auch eine der schönsten Traditionen im Weinviertel: der Allerheiligenstriezel! Bei der Bäckerei Karl Bauer GmbH setzen wir auf die Kunst des traditionellen Backens, und der Striezel hat bei uns eine ganz besondere Bedeutung. Nach einem alten, geheimen Rezept wird unser Striezel mit viel Liebe und Leidenschaft zubereitet, ausschließlich aus regionalen Zutaten direkt aus dem Weinviertel.`,
      `Im Weinviertel gehört der Brauch des „Striezel-Poschn“ einfach dazu. Dabei wird der Striezel in einem kleinen Wettstreit verschenkt oder verspielt, ein Symbol für Zusammenhalt und Tradition. Stefan Bauer, Geschäftsführer der Bäckerei Karl Bauer, erzählt dazu mit einem Lächeln: „Ich liebe es, Striezel-Poschn zu machen, für mich ist das ein Stück Heimat und Freude.“`,
      `Unser Striezel kommt in verschiedenen Varianten daher, damit für jeden Geschmack etwas dabei ist. Die klassische Version ist mit Briochezucker bestreut und ohne Rosinen, aber es gibt auch Striezel mit Mandel-Bestreuung oder komplett ohne Bestreuung. Theres Mayer, unsere Prokuristin und Striezel-Expertin, teilt ihren Favoriten: „Am liebsten habe ich den Striezel mit Marillenmarmelade aus dem eigenen Garten, das ist für mich der pure Genuss.“`,
      `Marion Schöffmann, unsere Backstellenleiterin, betont: „Striezel sind Tradition, im November sowie im ganzen Jahr ein Fixstarter im Sortiment der Bäckerei Bauer. Striezel bestehen aus hochwertigen regionalen Zutaten wie Mehl, Eiern und Butter, die wertvolle Energie liefern. Durch die Verwendung natürlicher Zutaten und die liebevolle Zubereitung sind unsere Striezel besonders bekömmlich.“`,
      `Damit alle rechtzeitig ihren Striezel für Allerheiligen bekommen, empfehlen wir, jetzt vorzubestellen. Egal, ob für den kleinen Genuss oder die große Familie, unsere Striezel sind in verschiedenen Größen erhältlich. Bestellt jetzt in unseren Filialen oder telefonisch unter ${CONTACT_PHONE_DISPLAY}!`,
    ],
  },
  {
    slug: "das-fitberry-brot",
    title: "Das Fitberry Brot: Dein täglicher Fitmacher",
    excerpt:
      "Mit Körnern, Beeren und vollem Geschmack: unser Fitberry Brot ist der ideale Begleiter für alle, die auf sich achten, ohne auf gutes Brot zu verzichten.",
    category: "Produkte",
    image: "/images/produkte/brot/fitberry.jpg",
    href: "/blog/das-fitberry-brot",
    readTime: "3 Min.",
    date: "01.09.2024",
    body: [
      `Wer sagt, dass gesundes Brot nach Kompromiss schmecken muss? Das Fitberry Brot der Bäckerei Karl Bauer beweist das Gegenteil: Voller Körner, Beeren und natürlicher Zutaten aus dem Weinviertel ist es ein Brot, das schmeckt, sättigt und dem Körper guttut.`,
      `Die Idee hinter dem Fitberry Brot ist einfach: echte Zutaten, keine Zusätze, maximaler Geschmack. Haferflocken, Sonnenblumenkerne, Leinsamen und ein Hauch getrockneter Beeren: So entsteht ein Brot mit Biss, das Energie für den ganzen Tag liefert.`,
      `Das Brot verbindet Körner und Beeren zu einem kräftigen Geschmack.`,
      `Das Fitberry Brot gibt es täglich frisch in allen Filialen der Bäckerei Bauer. Wer sicher gehen möchte, bestellt einfach vor, in der Filiale oder unter ${CONTACT_PHONE_DISPLAY}.`,
    ],
  },
  {
    slug: "30-jahre-adeg-ladendorf",
    title: "30 Jahre ADEG Bauer Ladendorf",
    excerpt:
      "Seit 1995 ist die Bäckerei Bauer auch Nahversorger. Das ADEG-Jubiläum zeigt: Regionalität ist keine Trend-Idee, sondern gelebter Alltag seit drei Jahrzehnten.",
    category: "Weinviertel",
    image: "/images/geschichte/adeg-ladendorf-30-jahre-2025.png",
    href: "/blog/30-jahre-adeg-ladendorf",
    readTime: "3 Min.",
    date: "01.06.2025",
    body: [
      `Im Frühjahr 1995 öffnete Karl Bauer in Ladendorf die automatische Schiebetür zu einem ADEG-Supermarkt, der damals schon alles bot, was die Menschen im Weinviertel täglich brauchten, von frischem Brot bis zum Kühlregal voller Milchprodukte. Drei Jahrzehnte später steht noch immer derselbe Familienname über dem Eingang, doch hinter den Regalen hat sich beinahe alles verändert.`,
      `„Frische ist für uns kein Schlagwort, sondern tägliche Pflicht“, sagt Geschäftsführer Dr. Stefan Bauer, während er eine Kiste Erdbeeren kontrolliert. „Unsere Gemüseabteilung wird mehrmals die Woche beliefert.“ Die Vielfalt sieht man längst nicht mehr nur an den Produkten: Preisschilder flimmern nicht mehr, sie leuchten in gestochen scharfem E-Ink. Ein Tastendruck im Lager und der aktuelle Preis erscheint ohne gedrucktes Papieretikett im Regal, eine leise Revolution, die Kundinnen und Kunden kaum bemerken, weil sie so selbstverständlich wirkt.`,
      `Auch an der Front hat sich Technik dazugesellt. Wer es eilig hat, legt seinen Einkauf heute an der Selbstbedienungskasse selbst auf die Scanfläche, bezahlt kontaktlos und ist in Sekunden wieder draußen. „Solche Innovationen gehen nur, wenn das Team sie miträgt“, betont Prokuristin Therese Mayer. „Unsere 86 Mitarbeitenden haben die neuen Systeme nicht nur gelernt, sondern perfektioniert. Darauf bin ich wirklich stolz.“`,
      `Trotz aller digitalen Neuerungen bleibt die Filiale ein Treffpunkt. Neben Feinkost und Backwaren führt der Weg vieler Dorfbewohnerinnen und Dorfbewohner täglich zum Postschalter, den ADEG Bauer gemeinsam mit der Österreichischen Post betreibt. „Vor dreißig Jahren war es schon ein gut sortierter Markt, aber wir hätten nicht erwartet, dass die Menschen hier Pakete aufgeben, Fahrkarten kaufen und sich trotzdem wie zu Hause fühlen“, sagt Karl Bauer. „Unsere Aufgabe war es immer, mit der Gemeinde mitzuwachsen.“`,
      `Doch zwischen digitalem Preisschild und Selbstbedienungskasse hat sich eines nicht verändert: das freundliche Nicken der Verkäuferin an der Wursttheke, der Gruß des Chefs beim Kontrollgang, das Gefühl, hier mehr als eine Kundennummer zu sein.`,
      `So feiert ADEG Bauer Ladendorf seinen dreißigsten Geburtstag nicht als nostalgische Rückschau, sondern als lebendige Geschichte aus Innovation und Zuverlässigkeit, eine Geschichte, in der Hightech und Handschlagqualität Seite an Seite stehen.`,
    ],
  },
  {
    slug: "das-weinviertel-woher-unser-mehl-kommt",
    title: "Das Weinviertel: woher unser Mehl kommt",
    excerpt:
      "Fruchtbare Lößböden, regionale Mühlen, verlässliche Bauernfamilien. Die Geschichte hinter unseren Rohstoffen ist auch eine Geschichte des Vertrauens.",
    category: "Weinviertel",
    image: "/images/produkte/brot/winzerwecken.jpg",
    href: "/blog/das-weinviertel-woher-unser-mehl-kommt",
    readTime: "5 Min.",
    date: "01.08.2024",
    body: [
      `Ein gutes Brot beginnt nicht in der Backstube. Es beginnt auf dem Feld, mit dem richtigen Boden, dem richtigen Getreide, und Menschen, denen Qualität genauso wichtig ist wie uns.`,
      `Das Weinviertel ist gesegnet mit fruchtbaren Lößböden, die dem Weizen einen einzigartigen Charakter geben. Unser Mehl stammt ausschließlich von regionalen Mühlen, die mit Bauernfamilien aus der unmittelbaren Umgebung zusammenarbeiten. Kurze Wege, klare Herkunft, volle Transparenz.`,
      `Für uns ist Regionalität keine Marketingaussage. Es ist die Grundlage jedes Laibs, den wir backen. Wenn wir wissen, wer das Getreide angebaut hat und unter welchen Bedingungen es gewachsen ist, können wir Brot backen, dem wir wirklich vertrauen, und das ihr mit gutem Gewissen essen könnt.`,
      `Unser Winzerwecken, das Herzstück unseres Sortiments, trägt diesen Gedanken im Namen: ein Brot aus dieser Region, für die Menschen dieser Region. Weinviertel pur, in Mehl, Wasser und Zeit.`,
    ],
  },
  {
    slug: "jobs-bei-der-baeckerei-bauer",
    title: "Jobs bei der Bäckerei Bauer: warum es sich lohnt",
    excerpt:
      "Kein Konzern, keine Anonymität. Dani ist seit 12 Jahren dabei, Martina seit 13. Warum unsere Mitarbeiter:innen bleiben und was wir bieten.",
    category: "Jobs",
    image: "/images/team/Dani.png",
    href: "/blog/jobs-bei-der-baeckerei-bauer",
    readTime: "4 Min.",
    date: "25.06.2024",
    body: [
      `In einer Zeit, in der die Welt immer digitaler wird, sehnen sich viele Menschen nach Jobs, die einen spürbaren Einfluss auf ihre Gemeinschaft haben. Der Job im regionalen Lebensmitteleinzelhandel und im Bäckereiverkauf für die Bäckerei Bauer aus dem Weinviertel ist einer dieser sinnvollen Jobs.`,
      `Als Mitarbeiter im Lebensmitteleinzelhandel und im Bäckereiverkauf bei Bäckerei Bauer trägst du wesentlich dazu bei, das tägliche Brot der Menschen zu sichern. Du bist ein wichtiger Bestandteil der Nahrungsmittelversorgungskette und hast direkten Kontakt zu den Menschen in deiner Gemeinschaft. Du wirst zu einem vertrauten Gesicht und bist in der Lage, persönliche Beziehungen zu deinen Kunden aufzubauen. Du wirst Teil einer Gemeinschaft, in der du dich willkommen und geschätzt fühlst.`,
      `Bäckerei Bauer legt großen Wert auf die Verwendung von lokalen und regionalen Zutaten. Indem du in dieser Bäckerei arbeitest, unterstützt du nicht nur die lokale Wirtschaft, sondern hast auch die Möglichkeit, stolz auf die Qualität der Produkte zu sein, die du anbietest.`,
      `Der Job bietet eine abwechslungsreiche Tätigkeit. Du wirst nicht nur im Verkauf tätig sein, sondern auch bei der Zubereitung von Produkten und der Organisation des Ladenbereichs helfen. Ob du Kunden berätst, dekorative Auslagen gestaltest oder an der Herstellung von köstlichen Backwaren teilnimmst: Jeder Tag bringt eine neue Herausforderung.`,
      `Der Arbeitsplatz bei Bäckerei Bauer bietet eine angenehme und unterstützende Arbeitsatmosphäre. Du wirst Teil eines Teams, das gemeinsame Ziele verfolgt und eng zusammenarbeitet. Der Zusammenhalt und die gemeinsame Leidenschaft für qualitativ hochwertiges Backen schaffen ein harmonisches Arbeitsumfeld.`,
      `Klingt gut? Dann schau dir unsere offenen Stellen an, direkt unter /jobs.`,
    ],
  },
];

export const teamMembers = [
  {
    name: "Melanie",
    location: "Fil. Ladendorf",
    tagline: "Herzlichkeit, die man schmeckt",
    image: "/images/team/Melanie.png",
    quote: "Jeder Tag bringt was Neues mit sich.",
    detail:
      "Melanie liebt es, wenn Kund:innen gut gelaunt nach Hause gehen. Der Job macht ihr Spaß, das Team stimmt, und das merkt man.",
    liebling: "Hausbrot",
  },
  {
    name: "Elvira",
    location: "Fil. Lanzendorf",
    tagline: "Mit Herz und Humor dabei",
    image: "/images/team/Elvira.png",
    quote: "Der Schmäh rennt!",
    detail:
      "Elvira ist für die Kund:innen da, erfüllt Wünsche, reserviert Brote, und schenkt dabei immer ein Lächeln. Langweilig wird’s nie.",
    liebling: "Osternest mit Ei",
  },
  {
    name: "Manuela",
    location: "Fil. Wilfersdorf",
    tagline: "Mit Herz für Teig und Teamgeist",
    image: "/images/team/Manuela.png",
    quote: "Ich gehe gern in die Arbeit. Das ist nicht selbstverständlich.",
    detail:
      "Manuela ist ein echter Arbeitsmensch: Neues ausprobieren, Produkte kennen, im Team zuverlässig sein. Das Team in Wilfersdorf funktioniert.",
    liebling: "Nussschnecke",
  },
  {
    name: "Helene",
    location: "Fil. Prinzendorf",
    tagline: "Ein Kraftpaket für jeden Tag",
    image: "/images/team/Helene.png",
    quote: "Da steckt einfach alles drin, was ein gutes Brot braucht.",
    detail:
      "Helene ist sportlich aktiv und weiß, was ihrem Körper guttut. Ihr Lieblingsbrot gibt ihr Power für den Tag, auf gesunde Weise.",
    liebling: "Kraftlackl",
  },
  {
    name: "Andrea",
    location: "Fil. Oberer Markt Poysdorf",
    tagline: "Unkompliziert und ehrlich",
    image: "/images/team/Andrea.png",
    quote: "Es ist unkompliziert und ehrlich. Wie ich!",
    detail:
      "Ein herzhaftes Brot für viele Gelegenheiten.",
    liebling: "LowCarb Brot",
  },
  {
    name: "Dani",
    location: "Fil. Wiener Straße Poysdorf",
    tagline: "12 Jahre Leidenschaft",
    image: "/images/team/Dani.png",
    quote: "Wenn man etwas gern macht, vergeht die Zeit wie im Flug.",
    detail:
      "Dani ist seit zwölf Jahren dabei und noch immer mit Begeisterung dabei. Besonders kreativ ist sie beim Gestalten der Riesenbrezerl.",
    liebling: "Korn-Baguette",
  },
  {
    name: "Eva",
    location: "Fil. Großkrut",
    tagline: "Starkes Brot, starke Bindung",
    image: "/images/team/Eva.jpg",
    quote: "Kein Tag ist wie der andere, und das gefällt mir sehr.",
    detail:
      "Eva hat durch Zufall eine Stelle entdeckt, die ihr Leben verändert hat. Viereinhalb Jahre später liebt sie die Abwechslung und die netten Großkruter:innen.",
    liebling: "Low-Carb-Brot",
  },
  {
    name: "Martina",
    location: "Fil. Herrnbaumgarten",
    tagline: "Herzblut für Herrnbaumgarten",
    image: "/images/team/Martina.png",
    quote: "13 Jahre, und ich bin jeden Tag noch mit Freude dabei.",
    detail:
      "Martina kennt ihre Stammkund:innen seit Jahren. Das Verhältnis ist fast familiär, und zu Ostern und Weihnachten wird viel gelacht.",
    liebling: "Osterlamperl",
  },
];

// Allerheiligenstriezel-Aktion 2026: eine Quelle für Pop-up, Startseite, Sortiment, Striezel-Seite und Blog.
export const striezel2026 = {
  // Aktion beendet am 31.10.2026: Pop-up, Startseiten-Block und Sortiment-Banner sind aus.
  endsAt: "2026-10-31T00:00:00+01:00",
  image: "/images/sortiment/allerheiligenstriezel-2026.jpg",
  imageWidth: 1672,
  imageHeight: 941,
  alt: "Allerheiligenstriezel 2026 der Bäckerei Karl Bauer: 150 g € 2,70, 300 g € 4,00, 500 g € 5,50, 1000 g € 18,00, 1500 g € 25,00. Ohne Rosinen.",
  preise: [
    { gewicht: "150 g", variante: "mit Zucker", preis: "2,70" },
    { gewicht: "300 g", variante: "mit Zucker", preis: "4,00" },
    { gewicht: "500 g", variante: "mit Zucker, ohne Zucker oder mit Mandelbestreuung", preis: "5,50" },
    { gewicht: "1000 g", variante: "mit Zucker", preis: "18,00" },
    { gewicht: "1500 g", variante: "mit Zucker", preis: "25,00" },
  ],
};

export const isStriezelActive = () => Date.now() < Date.parse(striezel2026.endsAt);
