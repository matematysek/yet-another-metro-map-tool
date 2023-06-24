const C = start(500, -210.5)
    .setColor('red')
    .continue(['Háje', 'Opatov', 'Chodov', 'Roztyly', 'Kačerov', 'Budějovická', 'Pankrác', 'Pražského povstání', 'Vyšehrad', 'I. P. Pavlova', 'Muzeum', 'Hlavní nádraží', 'Florenc', 'Vltavská', 'Nádraží Holešovice', 'Kobylisy', 'Ládví', 'Střížkov', 'Prosek', 'Letňany'], 1421, 'ne', 'line-end')

const hor = start(1000, 0)
    .setColor('red')
    .continue([null, null], 1000, 's', 'line-end')

const vert = start(0, 1000)
    .setColor('red')
    .continue([null, null], 1000, 'e', 'line-end')
