class IBonusEligible {
    calculateBonus() {
        throw new Error("calculateBonus() must be implemented");
    }
}

module.exports = IBonusEligible;
