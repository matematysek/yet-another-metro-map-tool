const C1 = start(100, 1200)
    .setColor('linecred')
    .continue(['Královice','Křenice', 'Nová Uhříněves', 'Nádraží Uhříněves', 'Sídliště Petrovice', 'Háje'], 600, 'e', 'line-end')

const C2 = start(758, 1084)
    .setColor('linecred')
    .continue(['Opatov', ' '], 141, 'ne', 'line-end')

const C3 = start(858, 984)
    .setColor('linecred')
    .continue([' ', ' '], 141, 'ne', 'line-end')
    
const C4 = start(908, 1000)
    .setColor('linecred')
    .continue(['Chodov','Roztyly', 'Kačerov', 'Budějovická'], 400, 'e', 'line-end')

const C5 = start(1366, 884)
    .setColor('linecred')
    .continue(['Pankrác', ' '], 141, 'ne', 'line-end')

const C6 = start(1466, 784)
    .setColor('linecred')
    .continue([' ', ' '], 141, 'ne', 'line-end')

const C7 = start(1516, 800)
    .setColor('linecred')
    .continue(['Pražského Povstání', 'Vyšehrad', 'Karlov', 'I. P. Pavlova'], 400, 'e', 'line-end')

const C8 = start(1974, 684)
    .setColor('linecred')
    .continue(['Muzeum', ' '], 141, 'ne', 'line-end')

const C9 = start(2074, 584)
    .setColor('linecred')
    .continue(['Hlavní Nádraží', ' '], 141, 'ne', 'line-end')

const C10 = start(2174, 484)
    .setColor('linecred')
    .continue(['Florenc', ' '], 141, 'ne', 'line-end')

const C11 = start(2274, 384)
    .setColor('linecred')
    .continue(['Vltavská', ' '], 141, 'ne', 'line-end')

const C12 = start(2374, 284)
    .setColor('linecred')
    .continue([' ', ' '], 141, 'ne', 'line-end')  

const C13 = start(2424, 300)
    .setColor('linecred')
    .continue(['Nádraží Holešovice', 'Kobylisy', 'Ládví', 'Střížkov', 'Prosek', 'Letňany'], 600, 'e', 'line-end')
    
const C14 = start(3032, 300)
    .setColor('linecred')
    .continue([' ', 'Kbely', 'Vinoř'], 300, 'e', 'line-end')

const A1 = start(100, 1000)
    .setColor('lineagreen')
    .continue(['Hrnčíře','Šeberov'], 600, 'e', 'line-end')
    
const A2 = start(758, 984)
    .setColor('lineagreen')
    .continue([' ', ' '], 134, 'se', 'line-end')    
    
const A3 = start(858, 1084)
    .setColor('lineagreen')
    .continue([' ', ' '], 134, 'se', 'line-end')

const A4 = start(908, 1200)
    .setColor('lineagreen')
    .continue(['Košík','Zahradní Město'], 1512, 'e', 'line-end') 

const A5 = start(2578, 884)
    .setColor('lineagreen')
    .continue([' ', ' '], 134, 'se', 'line-end')

const A7 = start(2020, 604)
    .setColor('lineagreen')
    .continue([' ', ' '], 93, 's', 'line-end')
	        
const A9 = start(2020, 704)
    .setColor('lineagreen')
    .continue([' ', ' '], 193, 's', 'line-end')

const A8 = start (2020, 900)
	.setColor('lineagreen')
	.continue([null, 'Jiřího z Poděbrad', 'Flora', 'Želivského'], 500, 'e', 'line-end')
    
const A6 = start(2528, 964)
    .setColor('lineagreen')
    .continue([' ', ' '], 282, 'ne', 'line-end')  
	    	        
const A10 = start(2020, 404)
    .setColor('lineagreen')
    .continue(['Malostranská', 'Staroměstská', ' '], 193, 's', 'line-end')
    
const A11 = start(1974, 284)
    .setColor('lineagreen')
    .continue([' ', 'Hradčanská'], 134, 'se', 'line-end')
    
const A12 = start(1874, 184)
    .setColor('lineagreen')
    .continue([' ', 'Dejvická'], 134, 'se', 'line-end')

const A13 = start (1000, 200)
	.setColor('lineagreen')
	.continue(['Nemocnice Motol', 'Petřiny', 'Nádraží Veleslavín', 'Bořislavka', ' '], 814, 'e', 'line-end')	
	
const A14 = start(950, 184)
    .setColor('lineagreen')
    .continue([' ', 'Bílá Hora'], 141, 'ne', 'line-end') 
    
const A15 = start(850, 184)
    .setColor('lineagreen')
    .continue([' ', ' ', 'Dlouhá Míle'], 134, 'se', 'line-end')

const A16 = start(750, 84)
    .setColor('lineagreen')
    .continue([' ', ' ', 'Letiště'], 134, 'se', 'line-end')
    
const A17 = start(754, 150)
	.setColor('lineagreen')
	.continue(['Staré Letiště'], 0, 'e', 'line-end')
	
const A18 = start(854, 250)
	.setColor('lineagreen')
	.continue(['Nádraží Ruzyně'], 0, 'e', 'line-end')
	
const A19 = start(100, 100)
    .setColor('lineagreen')
    .continue(['Depo Tuchoměřice',' '], 592, 'e', 'line-end')
    
const B1 = start(2074, 484)
    .setColor('linebyellow')
    .continue(['Náměstí Republiky', 'Můstek'], 141, 'ne', 'line-end')
    
const B2 = start(2124, 500)
    .setColor('linebyellow')
    .continue([' ', ' '], 92, 'e', 'line-end')
    
const B3 = start(2230, 500)
    .setColor('linebyellow')
    .continue([' ', 'Karlín', 'Invalidovna', 'Palmovka'], 292, 'e', 'line-end')
    
const B4 = start(2532, 500)
    .setColor('linebyellow')
    .continue([' ', 'Českomoravská', 'Vysočanská'], 200, 'e', 'line-end')
		
const F1 = start(1974, 784)
    .setColor('lineforange')
    .continue(['Náměstí Míru', ' '], 134, 'se', 'line-end')
    
const F2 = start(2074, 884)
    .setColor('lineforange')
    .continue(['Vršovice', ' '], 134, 'se', 'line-end')
    
const F3 = start(2124, 1000)
    .setColor('lineforange')
    .continue([' ', 'Eden'], 296, 'e', 'line-end')
        
const F4 = start(2428, 1000)
    .setColor('lineforange')
    .continue([' ', 'Strašnická'], 190, 'e', 'line-end')
    
const G1 = start(2478, 884)
    .setColor('linegsilver')
    .continue([' ', ' '], 141, 'ne', 'line-end')  

    
