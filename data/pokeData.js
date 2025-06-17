const pokeNames = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Nidoran♀",
  "Nidorina",
  "Nidoqueen",
  "Nidoran♂",
  "Nidorino",
  "Nidoking",
  "Clefairy",
  "Clefable",
  "Vulpix",
  "Ninetales",
  "Jigglypuff",
  "Wigglytuff",
  "Zubat",
  "Golbat",
  "Oddish",
  "Gloom",
  "Vileplume",
  "Paras",
  "Parasect",
  "Venonat",
  "Venomoth",
  "Diglett",
  "Dugtrio",
  "Meowth",
  "Persian",
  "Psyduck",
  "Golduck",
  "Mankey",
  "Primeape",
  "Growlithe",
  "Arcanine",
  "Poliwag",
  "Poliwhirl",
  "Poliwrath",
  "Abra",
  "Kadabra",
  "Alakazam",
  "Machop",
  "Machoke",
  "Machamp",
  "Bellsprout",
  "Weepinbell",
  "Victreebel",
  "Tentacool",
  "Tentacruel",
  "Geodude",
  "Graveler",
  "Golem",
  "Ponyta",
  "Rapidash",
  "Slowpoke",
  "Slowbro",
  "Magnemite",
  "Magneton",
  "Farfetch'd",
  "Doduo",
  "Dodrio",
  "Seel",
  "Dewgong",
  "Grimer",
  "Muk",
  "Shellder",
  "Cloyster",
  "Gastly",
  "Haunter",
  "Gengar",
  "Onix",
  "Drowzee",
  "Hypno",
  "Krabby",
  "Kingler",
  "Voltorb",
  "Electrode",
  "Exeggcute",
  "Exeggutor",
  "Cubone",
  "Marowak",
  "Hitmonlee",
  "Hitmonchan",
  "Lickitung",
  "Koffing",
  "Weezing",
  "Rhyhorn",
  "Rhydon",
  "Chansey",
  "Tangela",
  "Kangaskhan",
  "Horsea",
  "Seadra",
  "Goldeen",
  "Seaking",
  "Staryu",
  "Starmie",
  "Mr. Mime",
  "Scyther",
  "Jynx",
  "Electabuzz",
  "Magmar",
  "Pinsir",
  "Tauros",
  "Magikarp",
  "Gyarados",
  "Lapras",
  "Ditto",
  "Eevee",
  "Vaporeon",
  "Jolteon",
  "Flareon",
  "Porygon",
  "Omanyte",
  "Omastar",
  "Kabuto",
  "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno",
  "Zapdos",
  "Moltres",
  "Dratini",
  "Dragonair",
  "Dragonite",
  "Mewtwo",
  "Mew",
];

const pokeDescription = [
  "There is a plant seed on its back right from birth. The seed slowly grows larger.", // Bulbasaur
  "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.", // Ivysaur
  "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.", // Venusaur
  "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.", // Charmander
  "When it swings its burning tail, it elevates the temperature to unbearably high levels.", // Charmeleon
  "It has a barbaric nature. In battle, it whips its fiery tail around and slashes with its claws.", // Charizard
  "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.", // Squirtle
  "Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance.", // Wartortle
  "A brutal Pokémon with pressurized water jets on its shell. Moves at high speed.", // Blastoise
  "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.", // Caterpie
  "This Pokémon is vulnerable to attack while its shell is soft, exposing its weak and tender body.", // Metapod #11
  "In battle, it flaps its wings at great speed to release highly toxic dust into the air.", // Butterfree #12
  "Often found in forests, eating leaves. It has a sharp, toxic stinger on its head.", // Weedle #13
  "This Pokémon is vulnerable to attack while its shell is soft, exposing its weak and tender body.", // Kakuna #14
  "Flies at high speed and attacks using its large, venomous stingers on its forelegs.", // Beedrill #15
  "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding dust.", // Pidgey #16
  "Very protective of its sprawling territorial area, this Pokémon will fiercely peck at any intruder.", // Pidgeotto #17
  "When hunting, it skims the surface of water at high speed to pick off unwary prey such as insects.", // Pidgeot #18
  "Bites anything when it attacks. Small and very quick, it is a common sight in many places.", // Rattata #19
  "Afterwards, it raises its tail to check its surroundings. If you touch the tail, it attacks quickly.", // Raticate #20
  "A bird Pokémon that makes its nest in cacti. It spreads its poisonous wings to drive away enemies.", // Spearow #21
  "Uses its huge and magnificent beak to intimidate foes. It is a skilled flyer.", // Fearow #22
  "Moves silently and stealthily. Eats the eggs of birds that build nests on the ground.", // Ekans #23
  "A highly vicious Pokémon that is known to become slightly venomous when it wraps its long body around an enemy.", // Arbok #24
  "When several of these Pokémon gather, their electricity could build and cause lightning storms.", // Pikachu #25
  "Its long tail serves as a ground to protect itself from its own high‑voltage power.", // Raichu #26
  "Burrows deep underground in arid locations far from water. It only emerges to hunt for food.", // Sandshrew #27
  "It is skilled at digging and bashing through hard rock to create a place to live.", // Sandslash #28
  "Although small, it has a toxic barb on its rear which hooks onto the target and injects poison.", // Nidoran♀ #29
  "The female has a gentle nature and does not fight. The male is aggressive and territorial.", // Nidorina #30
  "Queen of the toxic Pokémon. It uses its huge horns to knock out enemies.", // Nidoqueen #31
  "Its large ears are flapped like wings when it is listening to distant sounds. It extends toxic barbs when angered.", // #32 Nidoran♂
  "An aggressive Pokémon that is quick to attack. The horn on its head secretes a powerful venom.", // #33 Nidorino
  "It is recognized by its rock-hard hide and its extended horn. Be careful with the horn as it contains venom.", // #34 Nidoking
  "Its fur is so incredibly tender that even slight contact could cause it to faint.", // #35 Clefairy
  "A timid fairy Pokémon that is rarely seen. It will run and hide the moment it senses people.", // #36 Clefable
  "Very smart and vengeful. Grabbing one of its many tails could result in a 1,000-year curse.", // #37 Vulpix
  "Very smart and very vengeful. Grabbing one of its many tails could result in a 1,000-year curse.", // #38 Ninetales
  "When you fight with one, it gets angry. However, it's very sensitive to threats, and it cries easily.", // #39 Jigglypuff
  "Its vocal cords can freely adjust the wavelength of its cry. It uses this ability to control the behavior of others.", // #40 Wigglytuff
  "Emits ultrasonic cries while it flies. They act as a sonar used to check for objects in its way.",
  // #42 Golbat
  "Once it strikes, it will not stop draining energy from the victim even if it gets too heavy to fly.",
  // #43 Oddish
  "During the day, it keeps its face buried in the ground. At night, it wanders around sowing its seeds.",
  // #44 Gloom
  "Smells incredibly foul! However, around one out of a thousand people enjoy sniffing its nose-bending stink.",
  // #45 Vileplume
  "Its petals are the largest in the world. As it walks, it scatters extremely allergenic pollen.",
  // #46 Paras
  "Burrows to suck tree roots. The mushrooms on its back grow by drawing nutrients from the bug host.",
  // #47 Parasect
  "It stays mostly in dark, damp places, the preference not of the bug, but of the big mushroom on its back.",
  // #48 Venonat
  "Its eyes act as radar, enabling it to be active in darkness. The eyes can also shoot powerful beams.",
  // #49 Venomoth
  "The dust-like scales covering its wings are color coded to indicate the kinds of poison it has.",
  // #50 Diglett
  "It burrows through the ground at a shallow depth. It leaves raised earth in its wake, making it easy to spot.",
  // #51 Dugtrio
  "A team of Diglett triplets. It triggers huge earthquakes by burrowing 60 miles underground.",
  // #52 Meowth
  "It is fascinated by round objects. It can't stop playing with them until it tires and falls asleep.",
  // #53 Persian
  "Has a very haughty personality. It is proud of its fine, glossy fur. It will not allow itself to be touched.",
  // #54 Psyduck
  "While lulling its enemies with its vacant look, this wily Pokémon will use psychokinetic powers.",
  // #55 Golduck
  "The forelegs are webbed, helping to make it an adept swimmer. It can be seen swimming elegantly in lakes, etc.",
  // #56 Mankey
  "Light and agile on its feet, and ferocious in temperament. When angered, it flies into an uncontrollable frenzy.",
  // #57 Primeape
  "It grows angry if you see its eyes and gets angrier if you run. If you beat it, it gets even madder.",
  // #58 Growlithe
  "Very friendly and faithful to people. It will try to repel enemies by barking and biting.",
  // #59 Arcanine
  "A Pokémon that has been admired since the past for its beauty. It runs agilely as if on wings.",
  // #60 Poliwag
  "Its slick black skin is thin and damp. A part of its internal organs can be seen through the skin as a spiral pattern.",
  // #61 Poliwhirl
  "Its two legs are well developed. Even though it can live on the ground, it prefers living in water.",
  // #62 Poliwrath
  "An adept swimmer at both the front crawl and breaststroke. Easily overtakes the best human swimmers.",
  // #63 Abra
  "It sleeps for 18 hours a day. It uses a variety of extrasensory powers even while asleep.",
  // #64 Kadabra
  "It happened one morning - a boy with extrasensory powers awoke in bed transformed into Kadabra.",
  // #65 Alakazam
  "It does not like physical attacks very much. Instead, it freely uses extra-sensory powers to defeat foes.",
  // #66 Machop
  "Its whole body is composed of muscles. Even though it's the size of a human child, it can hurl 100 grown-ups.",
  // #67 Machoke
  "Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions.",
  // #68 Machamp
  "Its four ruggedly developed arms can launch a flurry of 1,000 punches in just two seconds.",
  // #69 Bellsprout
  "Prefers hot and humid places. It ensnares tiny bugs with its vines and devours them.",
  // #70 Weepinbell
  "When it's hungry, it swings its razor-sharp leaves, slicing up any unlucky object nearby for food.",
  // #71 Victreebel
  "Said to live in huge colonies deep in jungles, although no one has ever returned from there.",
  // #72 Tentacool
  "Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid.",
  // #73 Tentacruel
  "The tentacles are normally kept short. On hunts, they are extended to ensnare and immobilize prey.",
  // #74 Geodude
  "Its round body makes it easy to pick up. Some people have used them to hurl at each other in a snowball fight.",
  // #75 Graveler
  "Rolls down slopes to move. It rolls over any obstacle without slowing or changing its direction.",
  // #76 Golem
  "It is said to live in volcanic craters throughout the world. If it is blown from a great height, it rolls down steep slopes, then climbs back up to the crater.",
  // #77 Ponyta
  "Its hooves are 10 times harder than diamonds. It can trample anything completely flat in little time.",
  // #78 Rapidash
  "Very competitive, this Pokémon will chase anything that moves fast in the hopes of racing it.",
  // #79 Slowpoke
  "Incredibly slow and dopey. It takes five seconds for it to feel pain when under attack.",
  // #80 Slowbro
  "Lives lazily by the sea. If the Shellder on its tail comes off, it becomes a Slowpoke again.",
  // #81 Magnemite
  "Uses anti-gravity to stay suspended. Appears without warning and uses Thunder Wave and similar moves.",
  // #82 Magneton
  "Formed by several Magnemite linked together. They frequently appear when sunspots flare up.",
  // #83 Farfetch'd
  "Always seen with a stalk of green onions held in its beak. The stalk is used like a sword.",
  // #84 Doduo
  "A bird that makes up for its poor flying with its fast foot speed. Leaves giant footprints.",
  // #85 Dodrio
  "Uses its three brains to execute complex plans. While two heads sleep, one keeps watch.",
  // #86 Seel
  "The tuft on its head acts as a radar. It emits ultrasonic cries to check for things around it.",
  // #87 Dewgong
  "Stores thermal energy in its body. Swims at a steady 8 knots even in the coldest waters.",
  // #88 Grimer
  "Appears in filthy areas, such as near sewage dumps. It is rumored to be born from the sludge from factories.",
  // #89 Muk
  "Thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.",
  // #90 Shellder
  "Closes its shell when it senses danger. Its tongue is a secret weapon that can snap a steel wire in two.",
  // #91 Cloyster
  "When attacked, it launches its horns in quick volleys. Its innards have never been seen.",
  // #92 Gastly
  "Almost invisible, this gaseous Pokémon cloaks the target and puts it to sleep without notice.",
  // #93 Haunter
  "Because of its ability to slip through block walls, it is said to be from the netherworld.",
  // #94 Gengar
  "On the night of a full moon, if shadows move on their own and laugh, it must be Gengar’s doing.",
  // #95 Onix
  "As it grows, the stone portions of its body harden to become similar to a diamond, but colored black.",
  // #96 Drowzee
  "Uses its hypnotic powers to lull its enemies to sleep. It then eats their dreams.",
  // #97 Hypno
  "It carries a pendulum that it uses to hypnotize enemies. It sometimes uses this to make foes drop their prey.",
  // #98 Krabby
  "Its pincers are not only powerful weapons, but they are used for balance when walking sideways.",
  // #99 Kingler
  "Its large claw has 10,000 hp of crushing power. However, its huge size makes it awkward to walk.",
  // #100 Voltorb
  "Usually found in power plants. It has a perfectly round body. It sometimes explodes without warning.",
  // #101 Electrode
  "It stores electric energy under very high pressure. It often explodes with little or no provocation.",
  // #102 Exeggcute
  "Often mistaken for eggs. When disturbed, they gather and attack in swarms.",
  // #103 Exeggutor
  "Legend has it that on rare occasions, one of its heads will drop off and continue on as an independent Pokémon.",
  // #104 Cubone
  "Wears the skull of its dead mother. It’s said to be a lonely Pokémon that cries at night.",
  // #105 Marowak
  "The bone it holds is its weapon. It throws the bone with perfect accuracy to KO foes.",
  // #106 Hitmonlee
  "Uses its stretchy legs to execute devastating kicks. It is also a great jumper.",
  // #107 Hitmonchan
  "A skilled boxer that throws punches in rapid succession. Its punches can shatter thick walls.",
  // #108 Lickitung
  "Its tongue can be extended like a chameleon's and is covered with sticky saliva.",
  // #109 Koffing
  "Filled with poisonous gas. It is prone to exploding without warning.",
  // #110 Weezing
  "When its two heads collide, they expel a foul odor that causes nausea in enemies.",
  // #111 Rhyhorn
  "Its massive bones are 10 times harder than steel. It can easily smash through boulders.",
  // #112 Rhydon
  "Protects its territory fiercely. Its horn can pierce even the toughest of materials.",
  // #113 Chansey
  "It lays nutritious eggs that heal the sick. It is a symbol of happiness and good fortune.",
  // #114 Tangela
  "Its entire body is covered with blue vines. It entwines enemies to immobilize them.",
  // #115 Kangaskhan
  "A protective mother Pokémon. It carries its young in a pouch on its belly.",
  // #116 Horsea
  "Shoots jets of water from its mouth. Its water can be powerful enough to pierce steel.",
  // #117 Seadra
  "Its back is covered in spikes. When angry, it shoots spikes from its tail.",
  // #118 Goldeen
  "Known for its beautiful fins. It is a strong swimmer and fiercely territorial.",
  // #119 Seaking
  "Can be found in ponds and lakes. It uses its horn to attack foes and defend territory.",
  // #120 Staryu
  "Its central core glows with a mysterious light. It can regenerate lost arms.",
  // #121 Starmie
  "A mysterious Pokémon that glows in seven colors. It is said to possess a mysterious power.",
  // #122 Mr. Mime
  "Creates invisible walls to trap foes. Its movements are said to be very graceful.",
  // #123 Scyther
  "Its large scythes are sharp enough to cut steel. It is a fast and aggressive hunter.",
  // #124 Jynx
  "Uses its psychic powers to freeze foes. It is known for its humanoid appearance.",
  // #125 Electabuzz
  "Generates electricity and releases it in shocks. It often appears during thunderstorms.",
  // #126 Magmar
  "Its body is always hot. It can cause wildfires by breathing intense flames.",
  // #127 Pinsir
  "Its pincers crush and grip foes. It is known for its incredible strength.",
  // #128 Tauros
  "A wild Pokémon that charges with its horns. It is very fast and aggressive.",
  // #129 Magikarp
  "Known for being weak. It flops around and is often seen as useless until it evolves.",
  // #130 Gyarados
  "A fierce and violent Pokémon. It has a long, serpentine body and breathes fire.",
  // #131 Lapras
  "Gentle and intelligent. It is known for ferrying people across water.",
  // #132 Ditto
  "Can transform into other Pokémon. It uses this ability to escape danger.",
  // #133 Eevee
  "Its genetic code is unstable, allowing it to evolve into multiple forms.",
  // #134 Vaporeon
  "Has the ability to melt into water. It is found near water bodies.",
  // #135 Jolteon
  "Its fur bristles with static electricity. It can generate powerful electric shocks.",
  // #136 Flareon
  "Its body is covered with a fiery coat. It breathes intense flames to attack.",
  // #137 Porygon
  "A virtual Pokémon created by humans. It can convert its body into digital data.",
  // #138 Omanyte
  "A prehistoric Pokémon that was revived from a fossil. It uses its tentacles to capture prey.",
  // #139 Omastar
  "Has a hard shell and tentacles. It lived in the ocean millions of years ago.",
  // #140 Kabuto
  "An ancient Pokémon that lived in shallow seas. It hides under rocks.",
  // #141 Kabutops
  "It uses its sharp sickle-like arms to hunt prey and defend itself.",
  // #142 Aerodactyl
  "A prehistoric Pokémon revived from a fossil. It flies at high speeds.",
  // #143 Snorlax
  "Known for sleeping anywhere. Its snoring can be heard for miles.",
  // #144 Articuno
  "A legendary bird that can control ice. It is said to appear to those who are pure of heart.",
  // #145 Zapdos
  "A legendary bird that controls electricity. It appears during storms.",
  // #146 Moltres
  "A legendary bird covered in flames. It is said to bring fire to the world.",
  // #147 Dratini
  "A rare Pokémon that lives in lakes. It sheds its skin as it grows.",
  // #148 Dragonair
  "Known for its mystical powers. It can control the weather.",
  // #149 Dragonite
  "A kind-hearted dragon Pokémon. It can circle the globe in just 16 hours.",
  // #150 Mewtwo
  "A Pokémon created by genetic manipulation. It is said to be the most powerful Pokémon.",
  // #151 Mew
  "A rare and elusive Pokémon. Said to contain the genetic codes of all Pokémon.",
];

//Factory function that creates poke objects instances (name and descrption)
//and store them in a major poke container accesed by number.

const pokeMaker = (names, description) => {
  const pokeDex = {};
  for (let i = 0; i < names.length; i++) {
    const num = i + 1;
    pokeDex[num] = {
      name: names[i],
      description: description[i],
    };
  }
  return pokeDex;
};

const pokeDex = pokeMaker(pokeNames, pokeDescription);

export default pokeDex;
