import { shouldSupportInterface } from "./interface.test";

export const shouldBehaveLikeERC721 = () => {

    beforeEach(function() {
        const [owner, newOwner, approved, operator, other] = this.walletClients;
        Object.assign(this, { owner, newOwner, approved, operator, other });
    });

    shouldSupportInterface(["ERC721"]);
}