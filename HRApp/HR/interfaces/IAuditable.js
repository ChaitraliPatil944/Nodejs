class IAuditable {
    audit() {
        throw new Error("audit() must be implemented");
    }
}

module.exports = IAuditable;
