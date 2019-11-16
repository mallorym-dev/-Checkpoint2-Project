module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        evensAndOddsFullBox: {
            selector: '//div[@class="puzzleBox evenAndOddPB"]',
            locateStrategy: 'xpath'
        },
        evensAndOddsTitle: {
            selector: '(//h4)[1]',
            locateStrategy: 'xpath'
        },
        evenOddLine: {
            selector: '//input[@class="inputLine"][1]',
            locateStrategy: 'xpath'
        },
        evenOddButton: {
            selector: '//button[@class="confirmationButton"][1]',
            locateStrategy: 'xpath'
        },
        evensSpace: {
            selector: '//span[@name="evenResults"][1]',
            locateStrategy: 'xpath'
        },
        oddsSpace: {
            selector: '//span[@name="oddResults"][1]',
            locateStrategy: 'xpath'
        },
        filterObjBox: {
            selector: '//div[@class="puzzleBox filterObjectPB"]',
            locateStrategy: 'xpath'
        },
        filterObj: {
            selector: '(//h4)[2]',
            locateStrategy: 'xpath'
        },
        filterObjOriginal: {
            selector: '//span[@name="objectFilterObjects"]',
            locateStrategy: 'xpath'
        },
        filterObjLine: {
            selector: '//input[@name="objectFilterInput"]',
            locateStrategy: 'xpath'
        },
        filterObjButton: {
            selector: '//button[@name="objectFilterButton"]',
            locateStrategy: 'xpath'
        },
        filteredObj: {
            selector: '//span[@name="objectFilterResults"]',
            locateStrategy: 'xpath'
        },
        filterStrBox: {
            selector: '//div[@class="puzzleBox filterStringPB"]',
            locateStrategy: 'xpath'
        },
        filterStr: {
            selector: '(//h4)[3]',
            locateStrategy: 'xpath'
        },
        filterStrNames: {
            selector: '//span[@name="nameFilterNames"]',
            locateStrategy: 'xpath'
        },
        filterStrLine: {
            selector: '//input[@id="nameFilterInput"]',
            locateStrategy: 'xpath'
        },
        filterStrButton: {
            selector: '//button[@id="nameFilterButton"]',
            locateStrategy: 'xpath'
        },
        filteredNames: {
            selector: '//span[@name="nameFilterResults"]',
            locateStrategy: 'xpath'
        },
        palindromeBox: {
            selector: '//div[@class="puzzleBox palindromePB"]',
            locateStrategy: 'xpath'
        },
        palindromeTitle: {
            selector: '(//h4)[4]',
            locateStrategy: 'xpath'
        },
        palindromeLine: {
            selector: '//input[@name="palindromeInput"]',
            locateStrategy: 'xpath'
        },
        palindromeButton: {
            selector: '//button[@name="palindromeButton"]',
            locateStrategy: 'xpath'
        },
        palindromeSolution: {
            selector: '//span[@name="palindromeResults"]',
            locateStrategy: 'xpath'
        },
        sumBox: {
            selector: '//div[@class="puzzleBox sumPB"]'
        },
        sumTitle: {
            selector: '(//h4)[5]',
            locateStrategy: 'xpath'
        },
        sumLine1: {
            selector: '//input[@name="sumInput1"]',
            locateStrategy: 'xpath'
        },
        sumLine2: {
            selector: '//input[@name="sumInput2"]',
            locateStrategy: 'xpath'
        },
        addButton: {
            selector: '//button[@name="sumButton"]',
            locateStrategy: 'xpath'
        },
        sumSpace: {
            selector: '//span[@name="sumResults"]',
            locateStrategy: 'xpath'
        }
    }
}