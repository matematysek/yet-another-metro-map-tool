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
    .continue(['Nádraží Holešovice', 'Kobylisy', 'Ládví', 'Střížkov', 'Prosek', 'Letňany'], 508, 'e', 'line-end')
    
const C14 = start(2940, 300)
    .setColor('linecred')
    .continue([' ', 'Kbely', 'Vinoř'], 392, 'e', 'line-end')
       
const D10 = start(700, 100)
    .setColor('linedblue')
    .continue([' ', 'Přední Kopanina', 'Horoměřice', 'Nový Suchdol', 'Suchdol', 'Nádraží Podbaba'], 1016, 'e', 'line-end')

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
   
const B4 = start(2532, 500)
    .setColor('linebyellow')
    .continue([' ', 'Českomoravská', 'Vysočanská'], 200, 'e', 'line-end')
    
const B5 = start(2740, 500)
    .setColor('linebyellow')
    .continue([' ', 'Kolbenova', 'Hloubětín', 'Rajská Zahrada', 'Černý Most', 'Nádraží Horní Počernice', 'Nové Šestajovice', 'Šestajovice', 'Nádraží Klánovice'], 592, 'e', 'line-end')      

const B7 = start(1624, 600)
    .setColor('linebyellow')
    .continue(['Anděl', null], 46, 'e', 'line-end')  

const B8 = start(1524, 600)
    .setColor('linebyellow')
    .continue([' ', null], 46, 'e', 'line-end') 
		
const B9 = start(1474, 484)
    .setColor('linebyellow')
    .continue([' ', 'Smíchovské nádraží'], 134, 'se', 'line-end')
    
const B10 = start(100, 500)
    .setColor('linebyellow')
    .continue(['Nádraží Nučice', 'Rudná', 'Nádraží Rudná', 'Chrášťany', 'Depo Zličín', 'Zličín', 'Stodůlky'], 200, 'e', 'line-end') 
      
const D1 = start(100, 900)
    .setColor('linedblue')
    .continue(['Dolní Jirčany', 'Jesenice', 'Vestec', 'Depo Písnice', 'Písnice', 'Libuš', 'Nové Dvory', 'Nemocnice Krč', 'Nádraží Krč', 'Olbrachtova', ' '], 1308, 'e', 'line-end')    

const D2 = start(1416, 900)
    .setColor('linedblue')
    .continue([' ', 'Náměstí bratří Synků', ' '], 600, 'e', 'line-end')    
    
const D3 = start(2074, 784)
    .setColor('linedblue')
    .continue([' ', ' '], 141, 'ne', 'line-end')
    
const D4 = start(2120, 604)
    .setColor('linedblue')
    .continue([' ', ' '], 193, 's', 'line-end')
    
const D5 = start(2120, 504)
    .setColor('linedblue')
    .continue([' ', ' '], 93, 's', 'line-end')
        
const D6 = start(2120, 404)
    .setColor('linedblue')
    .continue([' ', ' '], 93, 's', 'line-end')
    
const D7 = start(1822, 200)
    .setColor('linedblue')
    .continue([' ', 'Bubeneč'], 92, 'e', 'line-end')    
	
const D8 = start(2074, 284)
    .setColor('linedblue')
    .continue([' ', null], 134, 'se', 'line-end')
    
const D9 = start(1974, 184)
    .setColor('linedblue')
    .continue([null, ' '], 134, 'se', 'line-end')    
    
const D11 = start(1774, 84)
    .setColor('linedblue')
    .continue([' ', ' '], 134, 'se', 'line-end')
	    	        
const A10 = start(2020, 404)
    .setColor('lineagreen')
    .continue([' ', 'Staroměstská', null, ' '], 193, 's', 'line-end')
    
const E1 = start(100, 300)
    .setColor('lineepurple')
    .continue(['Jeneč','Nová Hostivice', 'Litovice', 'Hostivice', 'Jiviny', ' '], 792, 'e', 'line-end')    

const E2 = start(900, 300)
    .setColor('lineepurple')
    .continue([' ','Břevnov'], 814, 'e', 'line-end')
    
const E4 = start(1824, 264)
    .setColor('lineepurple')
    .continue(['Malostranské náměstí', ' '], 272, 'se', 'line-end')
    
const E5 = start(1974, 484)
    .setColor('lineepurple')
    .continue([' ', ' '], 134, 'se', 'line-end')
	
const E6 = start(2022, 600)
    .setColor('lineepurple')
    .continue([' ', ' '], 94, 'e', 'line-end')
    
const E7 = start(2690, 484)
    .setColor('lineepurple')
    .continue([' ', 'Nádraží Libeň'], 141, 'ne', 'line-end')
    
const E8 = start(2130, 600)
    .setColor('lineepurple')
    .continue([' ', 'Lipanská', 'Ohrada'], 392, 'e', 'line-end')
    
const E9 = start(2528, 600)
    .setColor('lineepurple')
    .continue([' ', ' '], 104, 'e', 'line-end')

const E10 = start(2790, 384)
    .setColor('lineepurple')
    .continue([null, ' '], 141, 'ne', 'line-end')

const E11 = start(2890, 284)
    .setColor('lineepurple')
    .continue([' ', null], 141, 'ne', 'line-end')  
    
const E12 = start(2990, 184)
    .setColor('lineepurple')
    .continue([' ', ' '], 141, 'ne', 'line-end')  
    
const E3 = start(3040, 200)
    .setColor('lineepurple')
    .continue(['Sídliště Letňany', 'Nádraží Čakovice', 'Miškovice', 'Nové Miškovice'], 292, 'e', 'line-end')
	    
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
    
const F5 = start(1824, 564)
    .setColor('lineforange')
    .continue([' ', 'Karlovo náměstí'], 272, 'se', 'line-end')
    
const F6 = start(1674, 600)
    .setColor('lineforange')
    .continue([null, ' '], 42, 'e', 'line-end')   
		  
const F7 = start(308, 400)
    .setColor('lineforange')
    .continue(['Nádraží Řepy', 'Slánská'], 92, 'e', 'line-end') 
    
const F8 = start(358, 384)
    .setColor('lineforange')
    .continue([' ', ' '], 141, 'ne', 'line-end')
        
const F9 = start(258, 484)
    .setColor('lineforange')
    .continue([' ', 'Jihozápadní Město'], 141, 'ne', 'line-end')
        
const F10 = start(408, 400)
    .setColor('lineforange')
    .continue([' ', 'Motol', 'Kotlářka', 'Košířská'], 1008, 'e', 'line-end') 
    
const F11 = start(1524, 364)
    .setColor('lineforange')
    .continue([' ', ' '], 272, 'se', 'line-end')
    
const F12 = start(2626, 1000)
    .setColor('lineforange')
    .continue([' ', 'Skalka'], 100, 'e', 'line-end')
    
const F13 = start(2782, 884)
    .setColor('lineforange')
    .continue(['Depo Hostivař', ' '], 141, 'ne', 'line-end') 
    
const F14 = start(2732, 1000)
    .setColor('lineforange')
    .continue([' ', 'Štěrbooholy', 'Slatiny', 'Dubeč'], 600, 'e', 'line-end')    
    
const B11 = start(308, 500)
    .setColor('linebyellow')
    .continue([' ', 'Luka', 'Lužiny', 'Hůrka', 'Nové Butovice', 'Jinonice', 'Radlická'], 1108, 'e', 'line-end') 
		       
const G1 = start(2478, 884)
    .setColor('linegsilver')
    .continue([' ', ' '], 141, 'ne', 'line-end')  
   
const G2 = start(1574, 600)
    .setColor('linegsilver')
    .continue([null, ' '], 42, 'e', 'line-end')     
	
const G3 = start(2022, 400)
    .setColor('linegsilver')
    .continue(['Malostranská', 'Letná'], 94, 'e', 'line-end')
 
const G4 = start(2126, 400)
    .setColor('linegsilver')
    .continue([' ', ' '], 192, 'e', 'line-end')
    
const G5 = start(1116, 600)
    .setColor('linegsilver')
    .continue(['Lihovar', ' '], 400, 'e', 'line-end') 
		   
const G6 = start(1266, 544)
    .setColor('linegsilver')
    .continue([' ', ' '], 413, 'se', 'line-end')
    
const G7 = start(1524, 864)
    .setColor('linegsilver')
    .continue(['Michelská', ' '], 272, 'se', 'line-end')
    		       
const G8 = start(2378, 984)
    .setColor('linegsilver')
    .continue([' ', ' '], 141, 'ne', 'line-end')  
    
const G9 = start(1624, 1100)
    .setColor('linegsilver')
    .continue([' ', ' '], 696, 'e', 'line-end')  

const G10 = start(2524, 604)
    .setColor('linegsilver')
    .continue([' ', ' '], 292, 's', 'line-end')
 
const G11 = start(2524, 504)
    .setColor('linegsilver')
    .continue([' ', ' '], 92, 's', 'line-end')   

const G12 = start(2326, 400)
    .setColor('linegsilver')
    .continue([' ', 'Maniny'], 96, 'e', 'line-end')  
	    
const G13 = start(2480, 384)
    .setColor('linegsilver')
    .continue([' ', ' '], 134, 'se', 'line-end')  

const G14 = start(1974, 384)
    .setColor('linegsilver')
    .continue([' ', ' '], 141, 'ne', 'line-end')
	    
const G15 = start(1674, 484)
    .setColor('linegsilver')
    .continue([' ', ' '], 141, 'ne', 'line-end')
 
const G16 = start(1724, 500)
    .setColor('linegsilver')
    .continue(['Újezd', ' '], 192, 'e', 'line-end') 
    
const G17 = start(616, 600)
    .setColor('linegsilver')
    .continue(['Depo Zmrzlík', 'Nový Slivenec', 'Slivenec', ' '], 492, 'e', 'line-end') 
    
const G18 = start(1066, 584)
    .setColor('linegsilver')
    .continue([' ', ' '], 141, 'ne', 'line-end')
       
const G19 = start(616, 700)
    .setColor('linegsilver')
    .continue(['Baně', 'Zbraslav', 'Lahovická', 'Velká Chuchle'], 392, 'e', 'line-end') 

const B3 = start(2230, 500)
    .setColor('linebyellow')
    .continue([' ', 'Karlín', 'Invalidovna', 'Palmovka'], 292, 'e', 'line-end')
            
const B6 = start(1724, 600)
    .setColor('linebyellow')
    .continue([' ', 'Národní třída', ' '], 292, 'e', 'line-end')    