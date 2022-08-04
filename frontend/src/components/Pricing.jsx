function Pricing(numGallons, delState, formLength) {
    var gallons = parseInt(numGallons)
    var locationFactor
    var rateHistoryFactor
    var galReqFactor
    var companyProfitFactor = .1 
    var margin   
    var ppGal

    if (delState === "TX") {
        locationFactor = .02
    } else {
        locationFactor = .04
    }

    if (formLength > 0) {
        rateHistoryFactor = .01
    } else {
        rateHistoryFactor = 0
    }

    if (gallons > 1000) {
        galReqFactor = .02
    } else {
        galReqFactor = .03
    }

    margin = (locationFactor - rateHistoryFactor + galReqFactor + companyProfitFactor) * 1.50
    ppGal = margin + 1.50
    
    var total = gallons * ppGal
    var roundedTotal = total.toFixed(2)

    return (
        {
            ppGal,
            roundedTotal,
        }
    )
}

module.exports = Pricing;
//export default Pricing
