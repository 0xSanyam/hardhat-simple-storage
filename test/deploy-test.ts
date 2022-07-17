// mocha --> describe, it
// chai --> expect, assert

import { ethers } from "hardhat";
import { expect, assert } from "chai";
import {SimpleStorage__factory, SimpleStorage} from "../typechain-types";

// describe("SimpleStorage", () => {});
describe("SimpleStorage", function () {
    let simpleStorageFactory: SimpleStorage__factory, contract: SimpleStorage;
    beforeEach(async () => {
        simpleStorageFactory = (await ethers.getContractFactory("SimpleStorage")) as SimpleStorage__factory;
        contract = await simpleStorageFactory.deploy();
    });

    it("Should start with a favorite number of 0", async () => {
        const favNumber = await contract.retrieve();

        assert.equal(favNumber.toString(), "0");
        // expect(favNumber.toString()).to.equal("0");
    });
    it("Should update the favorite number when store is called", async () => {
        const transactionResponse = await contract.store("11");
        await transactionResponse.wait(1);

        const newFavNumber = await contract.retrieve();
        assert.equal(newFavNumber.toString(), "11");
    });

    it("Should work correctly with the people struct, array and mapping", async () => {
        const transactionResponse = await contract.addPeople("Joe", "17");
        await transactionResponse.wait(1);
        const { favoriteNumber, name } = await contract.persons(0);
        const mappedNumber = await contract.nameToFavoriteNumber("Joe");

        assert.equal(name, "Joe");
        assert.equal(favoriteNumber.toString(), "17");
        assert.equal(mappedNumber.toString(), "17");
    });
    it("Should correctly run the pure function", async () => {
        const add = await contract.add();

        assert.equal(add.toString(), "2");
    });
});
