const response_1 = {
    drinks: [
      {
        name: 'Gin Tonic',
        image: 'https://www.thecocktaildb.com/images/media/drink/qcgz0t1643821443.jpg',
        ingredients: [ 'Gin', 'Tonic Water', 'Lemon Peel', 'Ice' ]
      },
      {
        name: 'Vodka Tonic',
        image: 'https://www.thecocktaildb.com/images/media/drink/9koz3f1643821062.jpg',
        ingredients: [ 'Vodka', 'Tonic Water', 'Lemon Peel' ]
      },
      {
        name: 'Gin And Tonic',
        image: 'https://www.thecocktaildb.com/images/media/drink/k0508k1668422436.jpg',
        ingredients: [ 'Gin', 'Tonic water', 'Lime' ]
      },
      {
        name: 'Vodka And Tonic',
        image: 'https://www.thecocktaildb.com/images/media/drink/lmj2yt1504820500.jpg',
        ingredients: [ 'Vodka', 'Tonic water' ]
      }
    ],
    ingredients: [
      {
        name: 'Gin',
        description: 'Gin is a distilled alcoholic drink that derives its predominant flavour from juniper berries (Juniperus communis). Gin is one of the broadest categories of spirits, all of various origins, styles, and flavour profiles, that revolve around juniper as a common ingredient.\r\n' +
          '\r\n' +
          'From its earliest origins in the Middle Ages, the drink has evolved from a herbal medicine to an object of commerce in the spirits industry. Gin emerged in England after the introduction of the jenever, a Dutch liquor which originally had been a medicine. Although this development had been taking place since early 17th century, gin became widespread after the William of Orange-led 1688 Glorious Revolution and subsequent import restrictions on French brandy.\r\n' +
          '\r\n' +
          'Gin today is produced in subtly different ways, from a wide range of herbal ingredients, giving rise to a number of distinct styles and brands. After juniper, gin tends to be flavoured with botanical/herbal, spice, floral or fruit-flavours or often a combination. It is most commonly consumed mixed with tonic water. Gin is also often used as a base spirit to produce flavoured gin-based liqueurs such as, for example, Sloe gin, traditionally by the addition of fruit, flavourings and sugar.'
      },
      {
        name: 'Tonic Water',
        description: 'Tonic water (or Indian tonic water) is a carbonated soft drink in which quinine is dissolved. Originally used as a prophylactic against malaria, tonic water usually now has a significantly lower quinine content and is consumed for its distinctive bitter flavour. It is often used in mixed drinks, particularly in gin and tonic.\r\n' +
          '\r\n' +
          'The quinine was added to the drink as a prophylactic against malaria, since it was originally intended for consumption in tropical areas of South Asia and Africa, where the disease is endemic. Quinine powder was so bitter that British officials stationed in early 19th Century India and other tropical posts began mixing the powder with soda and sugar, and a basic tonic water was created. The first commercial tonic water was produced in 1858. The mixed drink gin and tonic also originated in British colonial India, when the British population would mix their medicinal quinine tonic with gin.\r\n' +
          '\r\n' +
          'Since 2010, at least four tonic syrups have been released in the United States. Consumers add carbonated water to the syrup to make tonic water; this allows drinkers to vary the intensity of the flavour.'
      },
      { name: 'Lemon Peel', description: null },
      { name: 'Ice', description: null },
      {
        name: 'Vodka',
        description: 'Vodka is a distilled beverage composed primarily of water and ethanol, sometimes with traces of impurities and flavorings. Traditionally, vodka is made by the distillation of fermented cereal grains or potatoes, though some modern brands use other substances, such as fruits or sugar.\r\n' +
          '\r\n' +
          'Since the 1890s, the standard Polish, Russian, Belarusian, Ukrainian, Estonian, Latvian, Lithuanian and Czech vodkas are 40% alcohol by volume ABV (80 US proof), a percentage that is widely misattributed to Dmitri Mendeleev. The European Union has established a minimum of 37.5% ABV for any "European vodka" to be named as such. Products sold as "vodka" in the United States must have a minimum alcohol content of 40%. Even with these loose restrictions, most vodka sold contains 40% ABV. For homemade vodkas and distilled beverages referred to as "moonshine", see moonshine by country.\r\n' +
          '\r\n' +
          'Vodka is traditionally drunk neat (not mixed with any water, ice, or other mixer), though it is often served chilled in the vodka belt countries (Belarus, Estonia, Finland, Iceland, Latvia, Lithuania, Norway, Poland, Russia, Sweden, Ukraine). It is also commonly used in cocktails and mixed drinks, such as the vodka martini, Cosmopolitan, vodka tonic, Screwdriver, Greyhound, Black or White Russian, Moscow Mule, and Bloody Mary.\r\n' +
          '\r\n' +
          'Scholars debate the beginnings of vodka. It is a contentious issue because very little historical material is available. For many centuries, beverages differed significantly compared to the vodka of today, as the spirit at that time had a different flavor, color and smell, and was originally used as medicine. It contained little alcohol, an estimated maximum of about 14%, as only this amount can be attained by natural fermentation. The still, allowing for distillation ("burning of wine"), increased purity, and increased alcohol content, was invented in the 8th century.\r\n' +
          '\r\n' +
          'A common property of the vodkas produced in the United States and Europe is the extensive use of filtration prior to any additional processing including the addition of flavorants. Filtering is sometimes done in the still during distillation, as well as afterwards, where the distilled vodka is filtered through activated charcoal and other media to absorb trace amounts of substances that alter or impart off-flavors to the vodka. However, this is not the case in the traditional vodka-producing nations, so many distillers from these countries prefer to use very accurate distillation but minimal filtering, thus preserving the unique flavors and characteristics of their products.\r\n' +
          '\r\n' +
          'The master distiller is in charge of distilling the vodka and directing its filtration, which includes the removal of the "fore-shots", "heads" and "tails". These components of the distillate contain flavor compounds such as ethyl acetate and ethyl lactate (heads) as well as the fusel oils (tails) that impact the usually desired clean taste of vodka. Through numerous rounds of distillation, or the use of a fractioning still, the taste is modified and clarity is increased. In contrast, distillery process for liquors such as whiskey, rum, and baijiu allow portions of the "heads" and "tails" to remain, giving them their unique flavors.\r\n' +
          '\r\n' +
          'Repeated distillation of vodka will make its ethanol level much higher than is acceptable to most end users, whether legislation determines strength limits or not. Depending on the distillation method and the technique of the stillmaster, the final filtered and distilled vodka may have as much as 95–96% ethanol. As such, most vodka is diluted with water prior to bottling.\r\n' +
          '\r\n' +
          'Polish distilleries make a very pure (96%, 192 proof, formerly also 98%) rectified spirit (Polish language: spirytus rektyfikowany). Technically a form of vodka, it is sold in liquor stores rather than pharmacies. Similarly, the German market often carries German, Hungarian, Polish, and Ukrainian-made varieties of vodka of 90 to 95% ABV. A Bulgarian vodka, Balkan 176°, has an 88% alcohol content. Everclear, an American brand, is also sold at 95% ABV.'
      },
      {
        name: 'Lime',
        description: 'A lime (from French lime, from Arabic līma, from Persian līmū, "lemon") is a hybrid citrus fruit, which is typically round, lime green, 3–6 centimetres (1.2–2.4 in) in diameter, and contains acidic juice vesicles.\r\n' +
          '\r\n' +
          'There are several species of citrus trees whose fruits are called limes, including the Key lime (Citrus aurantifolia), Persian lime, kaffir lime, and desert lime. Limes are an excellent source of vitamin C, and are often used to accent the flavours of foods and beverages. They are grown year-round. Plants with fruit called "limes" have diverse genetic origins; limes do not form a monophyletic group.\r\n'
      }
    ]
  }
  
  const response_2 = {
    drinks: [
      {
        name: 'Turkeyball',
        image: 'https://www.thecocktaildb.com/images/media/drink/rxurpr1441554292.jpg',
        ingredients: [ 'Wild Turkey', 'Amaretto', 'Pineapple juice' ]
      },
      {
        name: 'Turf Cocktail',
        image: 'https://www.thecocktaildb.com/images/media/drink/utypqq1441554367.jpg',
        ingredients: [ 'Dry Vermouth', 'Gin', 'Anis', 'Bitters', 'Orange peel' ]
      }
    ],
    ingredients: [
      {
        name: 'Wild Turkey',
        description: 'Wild Turkey is a brand of Kentucky straight bourbon whiskey distilled and bottled by the Austin Nichols division of Campari Group. The distillery is located near Lawrenceburg, Kentucky, United States. It offers tours, and is part of the American Whiskey Trail and the Kentucky Bourbon Trail.\r\n' +
          '\r\n' +
          'In 1891, Thomas Ripy built the Old Hickory Distillery in Tyrone, Kentucky, near Lawrenceburg, on the former site of the Old Moore Distillery. After Prohibition, the Ripy family (Thomas had died in 1902) repaired the distillery and began to again produce bourbon. The Ripys sold the bourbon produced at this distillery to various wholesalers who bottled bourbon under their own brands. Austin Nichols was one of these wholesalers.\r\n' +
          '\r\n' +
          'The "Wild Turkey" brand is said to have arisen after an Austin Nichols executive, Thomas McCarthy, took some warehouse samples on a wild turkey hunting trip in 1940. The bourbon proved so popular among his friends they continued to ask him for "that wild turkey bourbon." Austin Nichols began to bottle Wild Turkey in 1942.\r\n' +
          '\r\n' +
          'The Ripys were bought out in 1949 by Robert and Alvin Gould.\r\n' +
          '\r\n' +
          'For three decades after introducing Wild Turkey, Austin Nichols remained a non-distiller producer—bottling bourbon purchased on the open market under their Wild Turkey brand. Much of this whiskey was purchased from the Ripys/Gould distillery in Tyrone. In 1971, Austin Nichols purchased the facility (then known as the Boulevard Distillery) and changed the name to the Wild Turkey Distillery.\r\n' +
          '\r\n' +
          'In 1980, the distillery and the Wild Turkey brand were purchased by Pernod Ricard.\r\n' +
          '\r\n' +
          "On May 9, 2000, a fire destroyed a seven-story aging warehouse at the company in Anderson County, Kentucky. It contained more than 17,000 wooden barrels of whiskey. Burning whiskey flowed from the warehouse, setting the woods on fire, causing limestone deposits to explode. Firefighters saved Lawrenceburg's water treatment plant from destruction. However, an estimated 20% of the whiskey flowed into the Kentucky River. The river contamination required the temporary shutdown of the water treatment plant. Officials ordered water usage restrictions. Businesses and schools were closed because of the water shortage. The alcohol spill also depleted the oxygen in the river, killing an estimated 228,000 fish along a 66-mile stretch. The EPA and the Coast Guard's Gulf Strike Team aerated the river using equipment mounted on barges.[6] The company paid $256,000 to the Kentucky Department of Fish and Wildlife in an effort to restore the fish population in the river.\r\n" +
          '\r\n' +
          'In 2009, the Campari Group acquired the distillery and the Wild Turkey brand from Pernod Ricard.\r\n' +
          '\r\n' +
          'In 2011, Wild Turkey began to be distilled at a newly constructed facility near the old distillery. The new distillery sits where the old bottling facility was previously located.\r\n' +
          '\r\n' +
          "In 2013, Campari opened a new bottling facility at the Wild Turkey Distillery. For the previous 13 years Wild Turkey had been bottled offsite in Indiana and, later, Arkansas. In addition to the Wild Turkey products, Campari's SKYY vodka is also bottled there after being shipped from the Illinois distillery."
      },
      {
        name: 'Amaretto',
        description: 'Amaretto (Italian for "a little bitter") is a sweet, almond-flavoured, Italian liqueur associated with Saronno, Italy. Various commercial brands are made from a base of apricot pits, almonds, or both.\r\n' +
          '\r\n' +
          'When served as a beverage, amaretto can be drunk by itself, used as an ingredient to create several popular mixed drinks, or added to coffee. Amaretto is also commonly used in culinary applications.\r\n' +
          '\r\n' +
          `The name amaretto originated as a diminutive of the Italian word amaro, meaning "bitter", which references the distinctive flavour lent by the mandorla amara (the bitter almond) or by the drupe kernel. However, the bitterness of amaretto tends to be mild, and sweeteners—and sometimes sweet almonds—enhance the flavour in the final products. Thus one can interpret the liqueur's name as a description of the taste as "a little bitter". Cyanide is processed out of the almond preparation prior to its use.\r\n` +
          '\r\n' +
          'Conflation of amaro ("bitter") and amore ("love") has led to associations with romance.\r\n' +
          '\r\n' +
          'One should not confuse amaretto with amaro, a different family of Italian liqueurs that, while also sweetened, have a stronger bitter flavour derived from herbs.'
      },
      { name: 'Pineapple Juice', description: null },
      {
        name: 'Dry Vermouth',
        description: 'Vermouth (/vərˈmuːθ/ ver-MOOTH; also UK: /ˈvɜːrməθ/;) is an aromatized, fortified wine flavored with various botanicals (roots, barks, flowers, seeds, herbs, and spices).\r\n' +
          '\r\n' +
          'The modern versions of the beverage were first produced in the mid to late 18th century in Turin, Italy. While vermouth was traditionally used for medicinal purposes, its true claim to fame is as an aperitif, with fashionable cafes in Turin serving it to guests around the clock. However, in the late 19th century it became popular with bartenders as a key ingredient in many classic cocktails that have survived to date, such as the Martini, the Manhattan, the Rob Roy, and the Negroni. In addition to being consumed as an aperitif or cocktail ingredient, vermouth is sometimes used as an alternative white wine in cooking.\r\n' +
          '\r\n' +
          'Historically, there have been two main types of vermouth: sweet and dry. Responding to demand and competition, vermouth manufacturers have created additional styles, including extra-dry white, sweet white (bianco), red, amber (ambre or rosso), and rosé. Vermouth is produced by starting with a base of a neutral grape wine or unfermented wine must. Each manufacturer adds additional alcohol and a proprietary mixture of dry ingredients, consisting of aromatic herbs, roots, and barks, to the base wine, base wine plus spirit or spirit only – which may be redistilled before adding to the wine or unfermented wine must. After the wine is aromatized and fortified, the vermouth is sweetened with either cane sugar or caramelized sugar, depending on the style. Italian and French companies produce most of the vermouth consumed throughout the world, although the United States and the United Kingdom are also producers.'
      },
      {
        name: 'Gin',
        description: 'Gin is a distilled alcoholic drink that derives its predominant flavour from juniper berries (Juniperus communis). Gin is one of the broadest categories of spirits, all of various origins, styles, and flavour profiles, that revolve around juniper as a common ingredient.\r\n' +
          '\r\n' +
          'From its earliest origins in the Middle Ages, the drink has evolved from a herbal medicine to an object of commerce in the spirits industry. Gin emerged in England after the introduction of the jenever, a Dutch liquor which originally had been a medicine. Although this development had been taking place since early 17th century, gin became widespread after the William of Orange-led 1688 Glorious Revolution and subsequent import restrictions on French brandy.\r\n' +
          '\r\n' +
          'Gin today is produced in subtly different ways, from a wide range of herbal ingredients, giving rise to a number of distinct styles and brands. After juniper, gin tends to be flavoured with botanical/herbal, spice, floral or fruit-flavours or often a combination. It is most commonly consumed mixed with tonic water. Gin is also often used as a base spirit to produce flavoured gin-based liqueurs such as, for example, Sloe gin, traditionally by the addition of fruit, flavourings and sugar.'
      },
      { name: 'Anis', description: null },
      { name: 'Bitters', description: null },
      { name: 'Orange Peel', description: null }
    ]
  }
  
  const responses = [
    response_1,
    response_2,
  ]
  
  const MIN_TIMEOUT = 100;
  const MAX_TIMEOUT = 300;
  const FAILURE_PROBABILITY = 0.0;
  
  async function apiCall() {
    const timeout = Math.floor(Math.random() * (MAX_TIMEOUT - MIN_TIMEOUT)) + MIN_TIMEOUT;
    const randomIndex = Math.floor(Math.random() * 2);
  
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < FAILURE_PROBABILITY) reject('API call failed')
        else resolve(responses[randomIndex])
      }
      , timeout)
    })
  }
  
  export { apiCall }