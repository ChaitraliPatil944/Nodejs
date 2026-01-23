const IBonusEligible = require("./IBonusEligible");
const IAppraisable = require("./IAppraisable");

class IManagerBenefits extends IBonusEligible {
    conductAppraisal() {
        throw new Error("conductAppraisal() must be implemented");
    }

    approveLeave() {
        throw new Error("approveLeave() must be implemented");
    }
}

module.exports = IManagerBenefits;
