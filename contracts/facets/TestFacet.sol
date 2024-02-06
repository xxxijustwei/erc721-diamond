// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {LibERC721} from "../libraries/LibERC721.sol";

contract TestFacet {

    function mint() external {
        LibERC721._safeMint(msg.sender, 1);
    }

}